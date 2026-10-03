/*
 * Sincronização opcional com a conta do Claude.
 * Só entra em ação quando o app roda como página publicada no claude.ai
 * (capacidades "db" e "user"). Fora dali, nada muda: o progresso fica no navegador.
 *
 * O estado é gravado em pedaços (limite de 256 KiB por documento), alternando entre
 * dois conjuntos (a/b): o documento "meta" só aponta para o conjunto novo depois que
 * todos os pedaços foram gravados, de modo que uma gravação interrompida não corrompe nada.
 */
(function (global) {
  var OAB = global.OAB, S = OAB.store, U = OAB.util;
  var N = OAB.nuvem = { estado: 'local', mensagem: '' };
  if (!global.claude || typeof global.claude.use !== 'function') return;

  var PEDACO = 180000;
  var ESPERA_MS = 4000;
  var db = null, base = '', slotAtual = null, timer = null, gravando = false, pendente = false, ultimoEnviado = null;

  function mudar(est, msg) {
    N.estado = est;
    N.mensagem = msg || '';
    var el = document.getElementById('status-nuvem');
    if (el) el.textContent = S.statusNuvem();
  }
  function ref(nome) { return db.doc(base + '/' + nome); }
  function erroTexto(e) {
    if (e && e.code === 'quota_exceeded') return 'limite de armazenamento atingido';
    if (e && e.code === 'invalid_argument') return 'sem permissão para gravar';
    return 'falha temporária';
  }

  function enviar() {
    clearTimeout(timer);
    if (!db || N.estado === 'local') return;
    if (gravando) { pendente = true; return; }
    var est = S.estado;
    var json = JSON.stringify(est);
    if (json === ultimoEnviado) return;
    var slot = slotAtual === 'a' ? 'b' : 'a';
    var partes = [];
    for (var i = 0; i < json.length; i += PEDACO) partes.push(json.slice(i, i + PEDACO));
    var t = est.atualizadoEm || Date.now();
    gravando = true;
    var cadeia = Promise.resolve();
    partes.forEach(function (p, idx) {
      cadeia = cadeia.then(function () { return ref(slot + idx).set({ s: p, i: idx }); });
    });
    cadeia.then(function () {
      return ref('meta').set({ slot: slot, n: partes.length, t: t, v: 1 });
    }).then(function () {
      slotAtual = slot;
      ultimoEnviado = json;
      est.sincronizadoEm = t;
      S.salvarAgora();
      if (N.estado !== 'ativa') mudar('ativa');
    }, function (e) {
      mudar('erro', erroTexto(e));
    }).then(function () {
      gravando = false;
      if (pendente) { pendente = false; agendar(); }
    });
  }
  function agendar() {
    clearTimeout(timer);
    timer = setTimeout(enviar, ESPERA_MS);
  }

  function carregar() {
    return ref('meta').get().then(function (snap) {
      if (!snap.exists) return null;
      var m = snap.data();
      var leituras = [];
      for (var i = 0; i < m.n; i++) leituras.push(ref(m.slot + i).get());
      return Promise.all(leituras).then(function (ps) {
        var json = ps.map(function (p) { return p.exists ? p.data().s : ''; }).join('');
        return { meta: m, estado: JSON.parse(json) };
      });
    });
  }

  mudar('conectando');
  Promise.all([global.claude.use('db'), global.claude.use('user')]).then(function (r) {
    db = r[0];
    var user = r[1];
    if (!db || !user) { mudar('local'); return null; }
    return user.id().then(function (id) {
      if (!id) { mudar('local'); return null; }
      base = 'data/users/' + id;
      return carregar().then(function (remoto) {
        var local = S.estado;
        var sinc = local.sincronizadoEm || 0;
        if (remoto && remoto.meta.t > sinc) {
          // A conta tem alterações que este navegador ainda não viu: elas prevalecem.
          slotAtual = remoto.meta.slot;
          remoto.estado.sincronizadoEm = remoto.meta.t;
          S.substituir(remoto.estado);
          ultimoEnviado = JSON.stringify(S.estado);
          mudar('ativa');
          if (OAB.aplicarTema) OAB.aplicarTema();
          if (OAB.recarregarTela) OAB.recarregarTela();
          U.toast('Progresso carregado da sua conta.');
        } else {
          if (remoto) slotAtual = remoto.meta.slot;
          mudar('ativa');
          if ((local.atualizadoEm || 0) > sinc) enviar();
        }
        S.aoMudar(agendar);
        document.addEventListener('visibilitychange', function () { if (document.hidden) enviar(); });
        global.addEventListener('pagehide', enviar);
      });
    });
  }).catch(function (e) {
    mudar('erro', erroTexto(e));
  });
})(window);
