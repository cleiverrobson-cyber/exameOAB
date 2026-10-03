/* Simulados cronometrados no formato da prova (distribuição oficial por disciplina). */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  var FORMATOS = [
    { escala: 1, nome: 'Simulado completo', desc: '80 questões · 5 horas · igual à prova', seg: 5 * 3600 },
    { escala: 0.5, nome: 'Meio simulado', desc: '≈40 questões · 2h30', seg: 2.5 * 3600 },
    { escala: 0.25, nome: 'Simulado rápido', desc: '≈20 questões · 1h15', seg: 1.25 * 3600 }
  ];

  function tempoRestante(sa) {
    var pausa = sa.pausaTotal + (sa.pausadoEm ? Date.now() - sa.pausadoEm : 0);
    return sa.duracaoSeg - (Date.now() - sa.inicio - pausa) / 1000;
  }

  function inicio(el) {
    var est = S.estado;
    var hist = est.simulados.slice().reverse();
    U.render(el, html`
      ${est.simuladoAtivo ? html`<div class="aviso alerta">Há um simulado em andamento. <a href="#/simulado/fazer"><strong>Continuar</strong></a> ou <button class="botao pequeno perigo" id="descartar">Descartar</button></div>` : ''}
      <div class="grade grade-3" style="margin-top:16px">
        ${FORMATOS.map(function (f, i) {
          var prev = OAB.banco.montarSimulado(f.escala);
          return html`<section class="cartao">
            <h2>${f.nome}</h2>
            <p class="mudo">${f.desc}</p>
            <p class="pequeno">Mesma ordem e proporção de disciplinas da prova. Prioriza questões que você ainda não resolveu.</p>
            ${prev.faltas.length ? html`<p class="pequeno" style="color:var(--alerta)">Banco ainda incompleto em: ${prev.faltas.join(', ')}.</p>` : ''}
            <button class="botao primario" data-formato="${i}" ${raw(est.simuladoAtivo ? 'disabled' : '')}>Iniciar (${prev.questoes.length} questões)</button>
          </section>`;
        })}
      </div>
      <div class="aviso" style="margin-top:16px">Dica: faça os simulados completos aos domingos às 13h, no mesmo horário da prova, sem consulta e sem interrupções. Treine também a transcrição do gabarito.</div>
      <section class="cartao" style="margin-top:16px">
        <h2>Histórico de simulados</h2>
        ${hist.length ? html`
          ${hist.length > 1 ? raw(OAB.charts.linha(est.simulados.map(function (s) { return { rotulo: U.fmtData(s.data), valor: Math.round((s.acertos / s.total) * 80) }; }), { max: 80, meta: 40, rotuloMeta: 'aprovação (40)', titulo: 'Evolução nos simulados (nota projetada em 80)' })) : ''}
          <div class="rolagem-x"><table class="tabela">
            <thead><tr><th>Data</th><th>Formato</th><th class="num">Acertos</th><th class="num">%</th><th class="num">Equivale a</th><th class="num">Tempo</th><th></th></tr></thead>
            <tbody>${hist.map(function (s) {
              var eq = Math.round((s.acertos / s.total) * 80);
              return html`<tr><td>${U.fmtData(s.data, true)}</td><td>${s.total} questões</td><td class="num">${s.acertos}/${s.total}</td><td class="num">${U.pct(s.acertos, s.total)}%</td>
                <td class="num"><span class="etiqueta ${eq >= 40 ? 'sucesso' : 'erro'}">${eq}/80</span></td><td class="num">${U.fmtRelogio(s.usadoSeg)}</td>
                <td class="num"><a class="botao pequeno" href="#/simulado/resultado/${s.id}">Ver</a></td></tr>`;
            })}</tbody>
          </table></div>` : html`<div class="vazio">Você ainda não fez nenhum simulado.</div>`}
      </section>
    `);
    U.$$('[data-formato]', el).forEach(function (b) {
      b.addEventListener('click', function () {
        var f = FORMATOS[+b.dataset.formato];
        var m = OAB.banco.montarSimulado(f.escala);
        var dur = Math.round(f.seg * (m.questoes.length / Math.round(80 * f.escala)));
        est.simuladoAtivo = { id: U.uid('sim'), inicio: Date.now(), duracaoSeg: Math.min(f.seg, dur), pausaTotal: 0, pausadoEm: null, questoes: m.questoes, respostas: {}, revisar: {}, atual: 0, escala: f.escala };
        S.salvarAgora();
        OAB.ir('#/simulado/fazer');
      });
    });
    var ds = U.$('#descartar', el);
    if (ds) ds.addEventListener('click', function () {
      if (U.confirmar('Descartar o simulado em andamento? As respostas serão perdidas.')) { est.simuladoAtivo = null; S.salvar(); OAB.recarregarTela(); }
    });
  }

  function fazer(el) {
    var est = S.estado;
    var sa = est.simuladoAtivo;
    if (!sa) { OAB.ir('#/simulado'); return; }
    var questoes = sa.questoes.map(OAB.banco.questao).filter(Boolean);
    var timer;

    function finalizar(auto) {
      clearInterval(timer);
      var porD = {}, acertos = 0;
      questoes.forEach(function (q) {
        var m = sa.respostas[q.id];
        var x = porD[q.d] || (porD[q.d] = [0, 0]);
        x[1]++;
        if (m === q.correta) { x[0]++; acertos++; }
        if (m != null) S.responderQuestao(q, m, 0, 'simulado');
      });
      var usado = Math.min(sa.duracaoSeg, sa.duracaoSeg - tempoRestante(sa));
      var res = { id: sa.id, data: U.hoje(), escala: sa.escala, total: questoes.length, acertos: acertos, duracaoSeg: sa.duracaoSeg, usadoSeg: Math.round(usado), porDisciplina: porD, respostas: sa.respostas, questoes: sa.questoes };
      est.simulados.push(res);
      est.simuladoAtivo = null;
      S.registrarSessao(null, usado / 60, 'simulado');
      S.salvarAgora();
      if (auto) U.toast('Tempo esgotado! Simulado finalizado.', 4000);
      OAB.ir('#/simulado/resultado/' + res.id);
    }

    function desenhar() {
      var q = questoes[sa.atual];
      var d = OAB.disciplina(q.d);
      var resp = Object.keys(sa.respostas).length;
      var m = sa.respostas[q.id];
      U.render(el, html`
        <div class="simulado-layout">
          <div>
            <div class="barra-questao">
              <div class="linha"><strong>Questão ${sa.atual + 1} de ${questoes.length}</strong><span class="etiqueta" style="background:${d.cor};color:#fff">${d.nome}</span></div>
              <label class="linha pequeno"><input type="checkbox" id="revisar" ${raw(sa.revisar[q.id] ? 'checked' : '')}> Marcar para revisar</label>
            </div>
            <article class="cartao questao">
              <div class="enunciado">${q.enunciado}</div>
              <div class="alternativas" role="radiogroup">
                ${q.alternativas.map(function (a, i) {
                  return html`<button class="alternativa ${i === m ? 'marcada' : ''}" data-alt="${i}" role="radio" aria-checked="${i === m}"><span class="letra">${U.LETRAS[i]}</span><span class="texto">${a}</span></button>`;
                })}
              </div>
            </article>
            <div class="linha-entre" style="margin-top:14px">
              <button class="botao" id="ant" ${raw(sa.atual === 0 ? 'disabled' : '')}>← Anterior</button>
              <button class="botao primario" id="prox" ${raw(sa.atual >= questoes.length - 1 ? 'disabled' : '')}>Próxima →</button>
            </div>
          </div>
          <aside class="cartao painel-lateral">
            <div class="linha-entre"><span class="mudo pequeno">Tempo restante</span><span class="relogio" id="relogio"></span></div>
            <div class="linha-entre pequeno" style="margin:6px 0 12px"><span>${resp}/${questoes.length} respondidas</span><button class="botao pequeno" id="pausar">${sa.pausadoEm ? 'Retomar' : 'Pausar'}</button></div>
            <div class="folha">
              ${questoes.map(function (qq, i) {
                return html`<button data-ir="${i}" class="${sa.respostas[qq.id] != null ? 'respondida' : ''} ${i === sa.atual ? 'atual' : ''} ${sa.revisar[qq.id] ? 'revisar' : ''}" title="${OAB.disciplina(qq.d).nome}">${i + 1}${sa.respostas[qq.id] != null ? U.LETRAS[sa.respostas[qq.id]] : ''}</button>`;
              })}
            </div>
            <p class="pequeno mudo" style="margin-top:8px">● laranja = marcada para revisar</p>
            <button class="botao primario" id="finalizar" style="width:100%;margin-top:8px">Finalizar e corrigir</button>
          </aside>
        </div>
        ${sa.pausadoEm ? html`<div class="modal-fundo"><div class="modal centro"><h2>Simulado pausado</h2><p class="mudo">Na prova real não há pausa. Use com moderação.</p><button class="botao primario" id="retomar">Retomar</button></div></div>` : ''}
      `);
      U.$$('[data-alt]', el).forEach(function (b) {
        b.addEventListener('click', function () {
          var i = +b.dataset.alt;
          if (sa.respostas[q.id] === i) delete sa.respostas[q.id]; else sa.respostas[q.id] = i;
          S.salvar(); desenhar();
        });
      });
      U.$$('[data-ir]', el).forEach(function (b) { b.addEventListener('click', function () { sa.atual = +b.dataset.ir; S.salvar(); desenhar(); }); });
      U.$('#ant', el).addEventListener('click', function () { sa.atual--; S.salvar(); desenhar(); });
      U.$('#prox', el).addEventListener('click', function () { sa.atual++; S.salvar(); desenhar(); });
      U.$('#revisar', el).addEventListener('change', function (e) { if (e.target.checked) sa.revisar[q.id] = true; else delete sa.revisar[q.id]; S.salvar(); desenhar(); });
      function alternarPausa() {
        if (sa.pausadoEm) { sa.pausaTotal += Date.now() - sa.pausadoEm; sa.pausadoEm = null; }
        else sa.pausadoEm = Date.now();
        S.salvarAgora(); desenhar();
      }
      U.$('#pausar', el).addEventListener('click', alternarPausa);
      var rt = U.$('#retomar', el); if (rt) rt.addEventListener('click', alternarPausa);
      U.$('#finalizar', el).addEventListener('click', function () {
        var falta = questoes.length - Object.keys(sa.respostas).length;
        if (U.confirmar(falta ? 'Ainda há ' + falta + ' questão(ões) sem resposta. Na prova, nunca deixe em branco! Finalizar mesmo assim?' : 'Finalizar e ver o resultado?')) finalizar(false);
      });
      tique();
    }

    function tique() {
      var r = tempoRestante(sa);
      var rel = U.$('#relogio', el);
      if (rel) { rel.textContent = U.fmtRelogio(r); rel.classList.toggle('critico', r < 900); }
      if (r <= 0) finalizar(true);
    }

    function teclado(e) {
      if (sa.pausadoEm || /INPUT|TEXTAREA/.test(document.activeElement && document.activeElement.tagName)) return;
      var mapa = { a: 0, b: 1, c: 2, d: 3 };
      var k = e.key.toLowerCase();
      if (k in mapa) { sa.respostas[questoes[sa.atual].id] = mapa[k]; S.salvar(); desenhar(); }
      else if (e.key === 'ArrowRight' && sa.atual < questoes.length - 1) { sa.atual++; desenhar(); }
      else if (e.key === 'ArrowLeft' && sa.atual > 0) { sa.atual--; desenhar(); }
    }
    document.addEventListener('keydown', teclado);
    desenhar();
    timer = setInterval(tique, 1000);
    return function () { clearInterval(timer); document.removeEventListener('keydown', teclado); S.salvarAgora(); };
  }

  function resultado(el, id) {
    var s = S.estado.simulados.filter(function (x) { return x.id === id; })[0];
    if (!s) { U.render(el, '<div class="vazio">Simulado não encontrado.</div>'); return; }
    var eq = Math.round((s.acertos / s.total) * 80);
    var aprovado = s.acertos / s.total >= 0.5;
    var questoes = s.questoes.map(OAB.banco.questao).filter(Boolean);
    var soErradas = false;

    function desenhar() {
      U.render(el, html`
        <p><a href="#/simulado">← Simulados</a></p>
        <section class="cartao centro">
          ${raw(OAB.charts.anel(s.acertos / s.total, { texto: s.acertos + '/' + s.total, cor: aprovado ? '#15803d' : '#b91c1c' }))}
          <h2 style="margin-top:12px">${aprovado ? 'Aprovado neste simulado! ✅' : 'Ainda não foi desta vez ❌'}</h2>
          <p class="mudo">${U.pct(s.acertos, s.total)}% de acerto${s.total !== 80 ? ' · equivale a ' + eq + '/80' : ''} · mínimo para aprovação: 50% (40/80) · tempo usado: ${U.fmtRelogio(s.usadoSeg)}</p>
        </section>
        <section class="cartao">
          <h3>Desempenho por disciplina</h3>
          <div class="rolagem-x"><table class="tabela">
            <thead><tr><th>Disciplina</th><th class="num">Acertos</th><th class="num">%</th><th></th></tr></thead>
            <tbody>${OAB.DISCIPLINAS.filter(function (d) { return s.porDisciplina[d.id]; }).map(function (d) {
              var x = s.porDisciplina[d.id];
              return html`<tr><td><span class="ponto" style="background:${d.cor}"></span> ${d.nome}</td><td class="num">${x[0]}/${x[1]}</td><td class="num">${U.pct(x[0], x[1])}%</td>
                <td style="width:30%"><div class="barra ${x[0] / x[1] >= 0.5 ? 'sucesso' : 'erro'}"><span style="width:${U.pct(x[0], x[1])}%"></span></div></td></tr>`;
            })}</tbody>
          </table></div>
        </section>
        <section class="cartao">
          <div class="cartao-cabecalho"><h3>Correção comentada</h3>
            <label class="linha pequeno"><input type="checkbox" id="so-erradas" ${raw(soErradas ? 'checked' : '')}> Mostrar só as erradas/em branco</label></div>
          ${questoes.map(function (q, i) {
            var m = s.respostas[q.id];
            var ok = m === q.correta;
            if (soErradas && ok) return '';
            return html`<details style="border-bottom:1px solid var(--borda);padding:8px 0">
              <summary><span class="etiqueta ${ok ? 'sucesso' : 'erro'}">${i + 1}</span> <strong>${OAB.disciplina(q.d).sigla}</strong> · ${q.topico} <span class="mudo pequeno">— marcou ${m != null ? U.LETRAS[m] : 'nada'}, gabarito ${U.LETRAS[q.correta]}</span></summary>
              <div class="questao" style="font-size:.97rem;margin-top:8px"><div class="enunciado">${q.enunciado}</div>
                <ol type="A">${q.alternativas.map(function (a, j) { return html`<li style="${j === q.correta ? 'color:var(--sucesso);font-weight:600' : j === m ? 'color:var(--erro);text-decoration:line-through' : ''}">${a}</li>`; })}</ol></div>
              <div class="comentario">${q.comentario}<div class="fundamento">${q.fundamento}</div></div>
            </details>`;
          })}
        </section>
      `);
      U.$('#so-erradas', el).addEventListener('change', function (e) { soErradas = e.target.checked; desenhar(); });
    }
    desenhar();
  }

  OAB.views.simulado = {
    titulo: function (r) { return r.args[0] === 'fazer' ? 'Simulado em andamento' : r.args[0] === 'resultado' ? 'Resultado do simulado' : 'Simulados'; },
    render: function (el, r) {
      if (r.args[0] === 'fazer') return fazer(el);
      if (r.args[0] === 'resultado') return resultado(el, r.args[1]);
      return inicio(el);
    }
  };
})();
