/*
 * Estado do usuário, salvo no navegador (localStorage).
 * Todo o progresso pode ser exportado/importado em JSON (tela Configurações).
 */
(function (global) {
  var OAB = global.OAB = global.OAB || {};
  var U = OAB.util;
  var CHAVE = 'rumo-oab-48:v1';
  var LIMITE_HISTORICO = 30000;

  function padrao() {
    return {
      versao: 1,
      criadoEm: U.hoje(),
      perfil: {
        nome: '',
        tema: 'auto',
        metaQuestoesDia: 30,
        // minutos por dia da semana: dom, seg, ter, qua, qui, sex, sáb
        minutosPorDiaSemana: [240, 180, 180, 180, 180, 180, 300],
        diaSimulado: 0,
        pomodoro: { foco: 25, pausa: 5, pausaLonga: 15, ciclos: 4 }
      },
      topicos: {},        // 'disc#indice' -> { status, estudadoEm, revisoes, proximaRevisao }
      respostas: {},      // qid -> { tentativas, acertos, ultimaData, ultimaCorreta, ultimaMarcada }
      favoritas: {},      // qid -> true
      anotacoesQuestao: {}, // qid -> texto
      historico: [],      // { t: timestamp, q, d, ok, s: segundos, m: modo }
      simulados: [],      // resultados finalizados
      simuladoAtivo: null,
      flashcards: {},     // id -> estado SRS
      cardsUsuario: [],   // { id, d, frente, verso, fundamento }
      questoesUsuario: [],
      sessoes: [],        // { data, d, minutos, tipo }
      notas: {},          // disc -> texto
      planoFeitos: {},    // id do bloco -> true
      atividade: {}       // 'AAAA-MM-DD' -> { q: n, min: n, c: n }
    };
  }

  function mesclar(base, salvo) {
    Object.keys(salvo || {}).forEach(function (k) {
      if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k]) && salvo[k] && typeof salvo[k] === 'object' && !Array.isArray(salvo[k])) {
        base[k] = mesclar(base[k], salvo[k]);
      } else {
        base[k] = salvo[k];
      }
    });
    return base;
  }

  var estado = padrao();
  var armazenamentoOk = true;
  try {
    var bruto = global.localStorage.getItem(CHAVE);
    if (bruto) estado = mesclar(padrao(), JSON.parse(bruto));
  } catch (e) {
    armazenamentoOk = false;
  }

  var ouvintes = [];
  var agendado = null;

  var S = OAB.store = {
    get estado() { return estado; },
    armazenamentoOk: function () { return armazenamentoOk; },
    salvar: function () {
      clearTimeout(agendado);
      agendado = setTimeout(S.salvarAgora, 150);
      ouvintes.forEach(function (fn) { fn(); });
    },
    salvarAgora: function () {
      try {
        global.localStorage.setItem(CHAVE, JSON.stringify(estado));
        armazenamentoOk = true;
      } catch (e) {
        armazenamentoOk = false;
      }
    },
    aoMudar: function (fn) { ouvintes.push(fn); },
    exportar: function () {
      return JSON.stringify({ app: 'rumo-oab-48', exportadoEm: new Date().toISOString(), estado: estado }, null, 1);
    },
    importar: function (texto) {
      var obj = JSON.parse(texto);
      var novo = obj && obj.estado ? obj.estado : obj;
      if (!novo || typeof novo !== 'object' || !novo.perfil) throw new Error('Arquivo de backup inválido.');
      estado = mesclar(padrao(), novo);
      S.salvarAgora();
      S.salvar();
    },
    redefinir: function () {
      estado = padrao();
      S.salvarAgora();
      S.salvar();
    },

    /* Atividade diária (para sequência de dias e mapa de calor) */
    registrarAtividade: function (campo, n) {
      var k = U.hoje();
      var a = estado.atividade[k] || (estado.atividade[k] = { q: 0, min: 0, c: 0 });
      a[campo] = (a[campo] || 0) + n;
    },

    /* Questões */
    responderQuestao: function (q, marcada, segundos, modo) {
      var ok = marcada === q.correta;
      var r = estado.respostas[q.id] || (estado.respostas[q.id] = { tentativas: 0, acertos: 0 });
      r.tentativas += 1;
      if (ok) r.acertos += 1;
      r.ultimaData = U.hoje();
      r.ultimaCorreta = ok;
      r.ultimaMarcada = marcada;
      estado.historico.push({ t: Date.now(), q: q.id, d: q.d, ok: ok, s: Math.round(segundos || 0), m: modo || 'treino' });
      if (estado.historico.length > LIMITE_HISTORICO) estado.historico.splice(0, estado.historico.length - LIMITE_HISTORICO);
      S.registrarAtividade('q', 1);
      S.salvar();
      return ok;
    },
    alternarFavorita: function (qid) {
      if (estado.favoritas[qid]) delete estado.favoritas[qid];
      else estado.favoritas[qid] = true;
      S.salvar();
      return !!estado.favoritas[qid];
    },

    /* Tópicos do edital: 0 não iniciado, 1 estudando, 2 estudado, 3 revisado */
    topico: function (d, i) { return estado.topicos[d + '#' + i] || { status: 0, revisoes: 0 }; },
    definirStatusTopico: function (d, i, status) {
      var k = d + '#' + i;
      var t = estado.topicos[k] || { status: 0, revisoes: 0 };
      t.status = status;
      if (status >= 2 && !t.estudadoEm) {
        t.estudadoEm = U.hoje();
        t.revisoes = 0;
        t.proximaRevisao = OAB.srs.proximaRevisaoTopico(0, t.estudadoEm);
      }
      if (status < 2) { delete t.estudadoEm; delete t.proximaRevisao; t.revisoes = 0; }
      estado.topicos[k] = t;
      S.salvar();
    },
    concluirRevisaoTopico: function (k) {
      var t = estado.topicos[k];
      if (!t) return;
      t.revisoes = (t.revisoes || 0) + 1;
      t.status = 3;
      t.ultimaRevisao = U.hoje();
      t.proximaRevisao = OAB.srs.proximaRevisaoTopico(t.revisoes, U.hoje());
      S.registrarAtividade('c', 1);
      S.salvar();
    },

    /* Flashcards */
    responderFlashcard: function (id, nota) {
      estado.flashcards[id] = OAB.srs.responder(estado.flashcards[id], nota, U.hoje());
      S.registrarAtividade('c', 1);
      S.salvar();
    },

    /* Sessões de estudo (pomodoro ou registro manual) */
    registrarSessao: function (d, minutos, tipo, data) {
      if (!(minutos > 0)) return;
      estado.sessoes.push({ data: data || U.hoje(), d: d || null, minutos: Math.round(minutos), tipo: tipo || 'manual' });
      var k = data || U.hoje();
      var a = estado.atividade[k] || (estado.atividade[k] = { q: 0, min: 0, c: 0 });
      a.min += Math.round(minutos);
      S.salvar();
    },

    /* Estatísticas derivadas */
    estatisticasDisciplina: function (d) {
      var r = { respondidas: 0, tentativas: 0, acertos: 0, ultimasCertas: 0, erradas: 0 };
      OAB.banco.questoesDe(d).forEach(function (q) {
        var x = estado.respostas[q.id];
        if (!x) return;
        r.respondidas += 1;
        r.tentativas += x.tentativas;
        r.acertos += x.acertos;
        if (x.ultimaCorreta) r.ultimasCertas += 1; else r.erradas += 1;
      });
      r.taxa = r.tentativas ? r.acertos / r.tentativas : null;
      return r;
    },
    progressoTopicos: function (d) {
      var disc = OAB.disciplina(d);
      var n = disc.topicos.length;
      if (!n) return { feitos: 0, total: 0, pct: 0 };
      var feitos = 0;
      for (var i = 0; i < n; i++) if (S.topico(d, i).status >= 2) feitos++;
      return { feitos: feitos, total: n, pct: feitos / n };
    },
    minutosEstudados: function (filtroD) {
      return estado.sessoes.reduce(function (s, x) { return s + (!filtroD || x.d === filtroD ? x.minutos : 0); }, 0);
    },
    sequenciaDias: function () {
      var n = 0;
      var dia = U.hoje();
      var ativo = function (k) { var a = estado.atividade[k]; return a && (a.q || a.min || a.c); };
      if (!ativo(dia)) dia = U.somarDias(dia, -1); // hoje ainda não conta como quebra
      while (ativo(dia)) { n++; dia = U.somarDias(dia, -1); }
      return n;
    },
    revisoesPendentes: function () {
      var hoje = U.hoje();
      return Object.keys(estado.topicos).filter(function (k) {
        var t = estado.topicos[k];
        return t.proximaRevisao && t.proximaRevisao <= hoje;
      });
    },
    flashcardsVencidos: function (d) {
      var hoje = U.hoje();
      return OAB.banco.flashcardsDe(d).filter(function (c) {
        var e = estado.flashcards[c.id];
        return e && e.vencimento <= hoje;
      });
    },
    flashcardsNovos: function (d) {
      return OAB.banco.flashcardsDe(d).filter(function (c) { return !estado.flashcards[c.id]; });
    },

    /* Projeção de nota: soma, por disciplina, do peso × taxa de acerto */
    projecao: function () {
      var total = 0, base = 0, semDados = [];
      OAB.DISCIPLINAS.forEach(function (d) {
        var e = S.estatisticasDisciplina(d.id);
        // Suavização bayesiana: começa em 50% e converge para a taxa real.
        var taxa = (e.acertos + 2) / (e.tentativas + 4);
        if (e.tentativas < 5) semDados.push(d);
        total += d.questoes * taxa;
        base += e.tentativas;
      });
      return { acertos: total, confiavel: base >= 100, semDados: semDados };
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
