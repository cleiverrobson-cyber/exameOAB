/* Inicialização, roteamento por hash e navegação. */
(function (global) {
  var OAB = global.OAB;
  var U = OAB.util;
  var S = OAB.store;

  var ICONES = {
    painel: '<path d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"/>',
    disciplinas: '<path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4zm2 2v10a2 2 0 0 0 2 2h10V8a2 2 0 0 0-2-2zm3 2h7v2H9zm0 4h7v2H9z"/>',
    questoes: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2zm2.07-7.75-.9.92A3.4 3.4 0 0 0 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26A2 2 0 1 0 10 7H8a4 4 0 1 1 7.07 2.25z"/>',
    simulado: '<path d="M15 1H9v2h6zm-4 13h2V8h-2zm8.03-6.61 1.42-1.42-1.41-1.41-1.42 1.42A9 9 0 1 0 21 13a8.96 8.96 0 0 0-1.97-5.61zM12 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>',
    flashcards: '<path d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4z"/>',
    revisoes: '<path d="M12 4V1L8 5l4 4V6a6 6 0 0 1 6 6 5.9 5.9 0 0 1-.7 2.8l1.46 1.46A8 8 0 0 0 12 4zm0 14a6 6 0 0 1-6-6c0-1 .25-1.97.7-2.8L5.24 7.74A8 8 0 0 0 12 20v3l4-4-4-4z"/>',
    erros: '<path d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"/>',
    cronograma: '<path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14zM7 10h5v5H7z"/>',
    pomodoro: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>',
    estatisticas: '<path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>',
    estrategia: '<path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5zm-2 15-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"/>',
    exame: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"/>',
    config: '<path d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7 7 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.84a.5.5 0 0 0-.49.42l-.36 2.54a7.3 7.3 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.67 8.48a.49.49 0 0 0 .12.64l2.03 1.58a7.07 7.07 0 0 0 0 1.88l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.12.22.37.29.6.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54c.05.24.25.42.49.42h3.84c.24 0 .44-.18.49-.42l.36-2.54a7 7 0 0 0 1.63-.94l2.39.96c.22.08.48 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"/>'
  };
  function icone(nome) { return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + ICONES[nome] + '</svg>'; }

  var MENU = [
    { grupo: 'Estudo' },
    { rota: 'painel', nome: 'Painel' },
    { rota: 'disciplinas', nome: 'Edital e disciplinas' },
    { rota: 'cronograma', nome: 'Cronograma' },
    { rota: 'pomodoro', nome: 'Pomodoro' },
    { grupo: 'Praticar' },
    { rota: 'questoes', nome: 'Banco de questões' },
    { rota: 'simulado', nome: 'Simulados' },
    { rota: 'flashcards', nome: 'Flashcards', contador: function () { return S.flashcardsVencidos().length; } },
    { rota: 'revisoes', nome: 'Revisões', contador: function () { return S.revisoesPendentes().length; } },
    { rota: 'erros', nome: 'Caderno de erros' },
    { grupo: 'Acompanhar' },
    { rota: 'estatisticas', nome: 'Desempenho' },
    { rota: 'estrategia', nome: 'Estratégia e metas' },
    { rota: 'exame', nome: 'O Exame (datas)' },
    { rota: 'config', nome: 'Configurações' }
  ];
  var INFERIOR = ['painel', 'disciplinas', 'questoes', 'simulado', 'flashcards'];
  var ROTULO_INFERIOR = { painel: 'Painel', disciplinas: 'Edital', questoes: 'Questões', simulado: 'Simulado', flashcards: 'Cards' };

  OAB.views = OAB.views || {};
  var limpezaAtual = null;

  function rotaAtual() {
    var h = (global.location.hash || '').replace(/^#\/?/, '');
    var partes = h.split('?');
    var segs = partes[0].split('/').filter(Boolean);
    var params = {};
    (partes[1] || '').split('&').forEach(function (p) {
      if (!p) return;
      var kv = p.split('=');
      params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
    });
    return { nome: segs[0] || 'painel', args: segs.slice(1), params: params };
  }

  function desenharMenu(ativa) {
    var html = MENU.map(function (m) {
      if (m.grupo) return '<div class="grupo">' + m.grupo + '</div>';
      var n = m.contador ? m.contador() : 0;
      return '<a href="#/' + m.rota + '" class="' + (m.rota === ativa ? 'ativo' : '') + '"' + (m.rota === ativa ? ' aria-current="page"' : '') + '>' +
        icone(m.rota) + '<span>' + m.nome + '</span>' + (n ? '<span class="contador">' + n + '</span>' : '') + '</a>';
    }).join('');
    U.$('#menu').innerHTML = html;
    U.$('#barra-inferior').innerHTML = INFERIOR.map(function (r) {
      return '<a href="#/' + r + '" class="' + (r === ativa ? 'ativo' : '') + '">' + icone(r) + '<span>' + ROTULO_INFERIOR[r] + '</span></a>';
    }).join('');
  }

  function atualizarContagem() {
    var alvo = new Date(OAB.EXAME.prova);
    var dias = Math.ceil((alvo - new Date()) / 86400000);
    var txt = dias > 1 ? dias + ' dias' : dias === 1 ? 'Amanhã!' : dias === 0 ? 'Hoje!' : 'Prova realizada';
    U.$('#selo-contagem').textContent = '⏳ ' + txt;
    U.$('#contagem-lateral').innerHTML = '<strong>1ª fase:</strong> ' + U.fmtDataLonga(OAB.EXAME.prova.slice(0, 10)) + '<br><span class="mudo">13h às 18h · horário de Brasília</span>';
  }

  function navegar() {
    var r = rotaAtual();
    var view = OAB.views[r.nome] || OAB.views.painel;
    if (limpezaAtual) { try { limpezaAtual(); } catch (e) { /* ignora */ } limpezaAtual = null; }
    var main = U.$('#conteudo');
    main.innerHTML = '';
    var titulo = typeof view.titulo === 'function' ? view.titulo(r) : view.titulo;
    U.$('#titulo-pagina').textContent = titulo;
    document.title = titulo + ' · Rumo à OAB';
    desenharMenu(OAB.views[r.nome] ? r.nome : 'painel');
    fecharMenu();
    try {
      limpezaAtual = view.render(main, r) || null;
    } catch (e) {
      main.innerHTML = '<div class="aviso erro">Ocorreu um erro ao abrir esta tela: ' + U.esc(e.message) + '</div>';
      if (global.console) console.error(e);
    }
    global.scrollTo(0, 0);
  }
  OAB.recarregarTela = navegar;
  OAB.ir = function (hash) {
    if (global.location.hash === hash) navegar();
    else global.location.hash = hash;
  };

  function abrirMenu() {
    U.$('#lateral').classList.add('aberta');
    U.$('#fundo-menu').hidden = false;
    U.$('#abrir-menu').setAttribute('aria-expanded', 'true');
  }
  function fecharMenu() {
    U.$('#lateral').classList.remove('aberta');
    U.$('#fundo-menu').hidden = true;
    U.$('#abrir-menu').setAttribute('aria-expanded', 'false');
  }

  function aplicarTema() {
    var t = S.estado.perfil.tema;
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }
  OAB.aplicarTema = aplicarTema;

  function iniciar() {
    aplicarTema();
    atualizarContagem();
    setInterval(atualizarContagem, 60000);
    U.$('#abrir-menu').addEventListener('click', abrirMenu);
    U.$('#fundo-menu').addEventListener('click', fecharMenu);
    U.$('#alternar-tema').addEventListener('click', function () {
      var escuroAtual = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.getAttribute('data-theme') && global.matchMedia && global.matchMedia('(prefers-color-scheme: dark)').matches);
      S.estado.perfil.tema = escuroAtual ? 'light' : 'dark';
      S.salvar();
      aplicarTema();
    });
    global.addEventListener('hashchange', navegar);
    global.addEventListener('pagehide', S.salvarAgora);
    document.addEventListener('visibilitychange', function () { if (document.hidden) S.salvarAgora(); });
    navegar();

    if ('serviceWorker' in navigator && /^https?:$/.test(global.location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline indisponível */ });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})(window);
