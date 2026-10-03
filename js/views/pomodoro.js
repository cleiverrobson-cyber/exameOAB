/* Pomodoro com registro automático do tempo de estudo por disciplina. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  // O cronômetro sobrevive à troca de telas (fica em memória enquanto o app estiver aberto).
  var P = OAB.pomodoroEstado = OAB.pomodoroEstado || { fase: 'foco', ciclo: 1, rodando: false, fim: null, restanteSeg: null, d: '' };
  var global = null;

  function cfg() { return S.estado.perfil.pomodoro; }
  function duracao(fase) { var c = cfg(); return (fase === 'foco' ? c.foco : fase === 'pausa' ? c.pausa : c.pausaLonga) * 60; }
  function restante() { return P.rodando ? Math.max(0, (P.fim - Date.now()) / 1000) : (P.restanteSeg == null ? duracao(P.fase) : P.restanteSeg); }

  function concluirFase() {
    U.bipe();
    var msg;
    if (P.fase === 'foco') {
      S.registrarSessao(P.d || null, cfg().foco, 'pomodoro');
      var longa = P.ciclo % cfg().ciclos === 0;
      P.fase = longa ? 'pausaLonga' : 'pausa';
      msg = 'Foco concluído! Hora da ' + (longa ? 'pausa longa' : 'pausa') + '.';
    } else {
      P.fase = 'foco';
      P.ciclo++;
      msg = 'Pausa encerrada. Bora para o próximo foco!';
    }
    P.rodando = false; P.restanteSeg = null; P.fim = null;
    U.toast(msg, 5000);
    try { if (window.Notification && Notification.permission === 'granted') new Notification('Rumo à OAB', { body: msg, icon: 'icons/icon-192.png' }); } catch (e) { /* ignora */ }
  }

  function vigiar() {
    if (global) return;
    global = setInterval(function () {
      if (P.rodando && restante() <= 0) { concluirFase(); if (OAB.views.pomodoro.atualizar) OAB.views.pomodoro.atualizar(true); }
      else if (OAB.views.pomodoro.atualizar) OAB.views.pomodoro.atualizar(false);
      if (P.rodando) document.title = U.fmtRelogio(restante()) + ' · ' + (P.fase === 'foco' ? 'Foco' : 'Pausa') + ' · Rumo à OAB';
      else if (/^\d/.test(document.title)) document.title = 'Rumo à OAB';
    }, 500);
  }

  OAB.views.pomodoro = {
    titulo: 'Pomodoro',
    render: function (el, r) {
      if (r.params.d) P.d = r.params.d;
      var est = S.estado;
      var hoje = U.hoje();
      var sessHoje = est.sessoes.filter(function (s) { return s.data === hoje; });

      function desenhar() {
        var tot = duracao(P.fase), rest = restante();
        var nomeFase = P.fase === 'foco' ? 'Foco' : P.fase === 'pausa' ? 'Pausa curta' : 'Pausa longa';
        var cor = P.fase === 'foco' ? '#2f55c8' : '#15803d';
        U.render(el, html`
          <div class="grade grade-2">
            <section class="cartao centro">
              <div class="linha" style="justify-content:center;margin-bottom:8px"><span class="etiqueta ${P.fase === 'foco' ? 'primaria' : 'sucesso'}">${nomeFase}</span><span class="etiqueta">Ciclo ${P.ciclo}</span></div>
              <div style="position:relative;display:inline-block">
                ${raw(OAB.charts.anel(1 - rest / tot, { raio: 120, espessura: 12, cor: cor }))}
                <div class="pomodoro-relogio" id="relogio-p" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3.4rem">${U.fmtRelogio(rest)}</div>
              </div>
              <div class="campo" style="max-width:360px;margin:16px auto 8px;text-align:left">
                <label for="p-d">Estudando agora</label>
                <select id="p-d"><option value="">Geral / várias disciplinas</option>${OAB.DISCIPLINAS.map(function (d) { return html`<option value="${d.id}" ${raw(P.d === d.id ? 'selected' : '')}>${d.nome}</option>`; })}</select>
              </div>
              <div class="linha" style="justify-content:center">
                <button class="botao primario" id="iniciar">${P.rodando ? 'Pausar' : 'Iniciar'}</button>
                <button class="botao" id="zerar">Reiniciar</button>
                <button class="botao" id="pular">Pular fase</button>
              </div>
              <p class="pequeno mudo" style="margin-top:12px">Cada foco concluído é somado às suas horas de estudo da disciplina escolhida.</p>
            </section>
            <section class="cartao">
              <h2>Hoje: ${U.fmtMin(sessHoje.reduce(function (a, s) { return a + s.minutos; }, 0))}</h2>
              ${sessHoje.length ? sessHoje.slice().reverse().slice(0, 10).map(function (s) {
                var d = s.d && OAB.disciplina(s.d);
                return html`<div class="tarefa"><span class="ponto" style="background:${d ? d.cor : '#999'}"></span><div class="info">${d ? d.nome : s.tipo === 'simulado' ? 'Simulado' : 'Geral'}</div><span class="etiqueta">${U.fmtMin(s.minutos)}</span></div>`;
              }) : html`<p class="mudo">Nenhuma sessão registrada hoje.</p>`}
              <h3 style="margin-top:16px">Registrar estudo manualmente</h3>
              <form id="manual" class="linha">
                <select id="m-d" style="flex:2;min-width:160px"><option value="">Geral</option>${OAB.DISCIPLINAS.map(function (d) { return html`<option value="${d.id}">${d.nome}</option>`; })}</select>
                <input id="m-min" type="number" min="5" max="600" step="5" value="60" style="flex:1;min-width:80px" aria-label="Minutos">
                <button class="botao" type="submit">Adicionar</button>
              </form>
              <h3 style="margin-top:16px">Configurar tempos (min)</h3>
              <form id="cfg-p" class="grade grade-4" style="gap:8px">
                <div class="campo"><label for="c-foco">Foco</label><input id="c-foco" type="number" min="5" max="120" value="${cfg().foco}"></div>
                <div class="campo"><label for="c-pausa">Pausa</label><input id="c-pausa" type="number" min="1" max="30" value="${cfg().pausa}"></div>
                <div class="campo"><label for="c-longa">Longa</label><input id="c-longa" type="number" min="5" max="60" value="${cfg().pausaLonga}"></div>
                <div class="campo"><label for="c-ciclos">Ciclos</label><input id="c-ciclos" type="number" min="2" max="8" value="${cfg().ciclos}"></div>
              </form>
            </section>
          </div>
        `);
        U.$('#iniciar', el).addEventListener('click', function () {
          if (P.rodando) { P.restanteSeg = restante(); P.rodando = false; }
          else {
            P.fim = Date.now() + restante() * 1000; P.rodando = true;
            try { if (window.Notification && Notification.permission === 'default') Notification.requestPermission(); } catch (e) { /* ignora */ }
          }
          desenhar();
        });
        U.$('#zerar', el).addEventListener('click', function () { P.rodando = false; P.restanteSeg = null; desenhar(); });
        U.$('#pular', el).addEventListener('click', function () {
          if (P.fase === 'foco') { P.fase = 'pausa'; } else { P.fase = 'foco'; P.ciclo++; }
          P.rodando = false; P.restanteSeg = null; desenhar();
        });
        U.$('#p-d', el).addEventListener('change', function (e) { P.d = e.target.value; });
        U.$('#manual', el).addEventListener('submit', function (e) {
          e.preventDefault();
          S.registrarSessao(U.$('#m-d', el).value || null, +U.$('#m-min', el).value, 'manual');
          U.toast('Estudo registrado.');
          OAB.recarregarTela();
        });
        U.$('#cfg-p', el).addEventListener('change', function () {
          var c = cfg();
          c.foco = Math.max(5, +U.$('#c-foco', el).value || 25);
          c.pausa = Math.max(1, +U.$('#c-pausa', el).value || 5);
          c.pausaLonga = Math.max(5, +U.$('#c-longa', el).value || 15);
          c.ciclos = Math.max(2, +U.$('#c-ciclos', el).value || 4);
          S.salvar();
          if (!P.rodando) { P.restanteSeg = null; desenhar(); }
        });
      }

      OAB.views.pomodoro.atualizar = function (completo) {
        if (completo) { desenhar(); return; }
        var rel = U.$('#relogio-p', el);
        if (rel) rel.textContent = U.fmtRelogio(restante());
        var arco = el.querySelectorAll('.anel circle')[1];
        if (arco) {
          var c = parseFloat(arco.getAttribute('stroke-dasharray'));
          arco.setAttribute('stroke-dashoffset', c * (restante() / duracao(P.fase)));
        }
      };
      vigiar();
      desenhar();
      return function () { OAB.views.pomodoro.atualizar = null; };
    }
  };
})();
