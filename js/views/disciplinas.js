/* Edital verticalizado: lista de disciplinas e página de cada disciplina. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;
  var STATUS = ['Não iniciado', 'Estudando', 'Estudado', 'Revisado'];

  function estrelas(n) { return '★★★'.slice(0, n || 1) + '☆☆☆'.slice(0, 3 - (n || 1)); }
  function nomeTopico(t) { return typeof t === 'string' ? t : t.nome; }
  function relevancia(t) { return typeof t === 'string' ? 2 : t.relevancia || 2; }

  function lista(el) {
    var totalTop = 0, feitosTop = 0;
    var cards = OAB.DISCIPLINAS.map(function (d) {
      var p = S.progressoTopicos(d.id);
      var e = S.estatisticasDisciplina(d.id);
      totalTop += p.total; feitosTop += p.feitos;
      return html`<a class="cartao disc-card" style="--cor:${d.cor}" href="#/disciplinas/${d.id}">
        <div class="linha-entre"><span class="nome">${d.nome}</span><span class="etiqueta primaria">${d.questoes} questões</span></div>
        <div class="pequeno mudo">Questões ${d.faixa[0]}–${d.faixa[1]} da prova · ${d.questoesBanco.length} no banco · ${d.flashcards.length} flashcards</div>
        <div class="linha-entre pequeno"><span>Edital: ${p.feitos}/${p.total} tópicos</span><span>${e.tentativas ? 'Acerto: ' + Math.round(e.taxa * 100) + '%' : 'Sem questões resolvidas'}</span></div>
        <div class="barra"><span style="width:${Math.round(p.pct * 100)}%;background:${d.cor}"></span></div>
      </a>`;
    });
    U.render(el, html`
      <div class="aviso">
        <strong>Edital verticalizado do ${OAB.EXAME.nome}.</strong> São ${OAB.EXAME.totalQuestoes} questões em ${OAB.DISCIPLINAS.length} disciplinas, na ordem do caderno de prova.
        Você já estudou <strong>${feitosTop} de ${totalTop}</strong> tópicos (${U.pct(feitosTop, totalTop)}%).
        Legislação cobrada: a vigente na publicação do edital (${U.fmtData(OAB.EXAME.dataCorteLegislacao, true)}).
      </div>
      <div class="grade grade-auto" style="margin-top:16px">${cards}</div>
    `);
  }

  function detalhe(el, d, aba) {
    var p = S.progressoTopicos(d.id);
    var e = S.estatisticasDisciplina(d.id);
    var vencidos = S.flashcardsVencidos(d.id).length + S.flashcardsNovos(d.id).length;
    var abas = [['topicos', 'Edital (tópicos)'], ['resumo', 'Resumo'], ['legislacao', 'Lei seca e fontes'], ['dicas', 'Dicas'], ['notas', 'Minhas anotações']];
    aba = aba || 'topicos';

    U.render(el, html`
      <p><a href="#/disciplinas">← Todas as disciplinas</a></p>
      <section class="cartao" style="border-left:5px solid ${d.cor}">
        <div class="linha-entre">
          <div>
            <h2 style="margin:0">${d.nome}</h2>
            <span class="mudo pequeno">${d.questoes} questões na prova (nº ${d.faixa[0]} a ${d.faixa[1]}) · ${U.pct(d.questoes, 80)}% da prova</span>
          </div>
          <div class="linha">
            <a class="botao primario" href="#/questoes?d=${d.id}">Resolver questões (${d.questoesBanco.length})</a>
            <a class="botao" href="#/flashcards?d=${d.id}">Flashcards (${vencidos} p/ hoje)</a>
            <button class="botao" id="btn-pomodoro">Estudar com Pomodoro</button>
          </div>
        </div>
        <div class="grade grade-3" style="margin-top:14px">
          <div><div class="mudo pequeno">Edital estudado</div><strong>${p.feitos}/${p.total} tópicos</strong><div class="barra"><span style="width:${Math.round(p.pct * 100)}%;background:${d.cor}"></span></div></div>
          <div><div class="mudo pequeno">Aproveitamento</div><strong>${e.tentativas ? Math.round(e.taxa * 100) + '% (' + e.acertos + '/' + e.tentativas + ')' : '—'}</strong></div>
          <div><div class="mudo pequeno">Tempo estudado</div><strong>${U.fmtMin(S.minutosEstudados(d.id))}</strong></div>
        </div>
      </section>
      <div class="abas" role="tablist" style="margin-top:16px">
        ${abas.map(function (a) { return html`<button role="tab" data-aba="${a[0]}" class="${a[0] === aba ? 'ativa' : ''}" aria-selected="${a[0] === aba}">${a[1]}</button>`; })}
      </div>
      <div id="aba-conteudo"></div>
    `);

    U.$$('[data-aba]', el).forEach(function (b) {
      b.addEventListener('click', function () { OAB.ir('#/disciplinas/' + d.id + '?aba=' + b.dataset.aba); });
    });
    U.$('#btn-pomodoro', el).addEventListener('click', function () { OAB.ir('#/pomodoro?d=' + d.id); });

    var c = U.$('#aba-conteudo', el);
    if (aba === 'topicos') {
      if (!d.topicos.length) { U.render(c, '<div class="vazio">Conteúdo desta disciplina ainda não disponível.</div>'); return; }
      U.render(c, html`<section class="cartao">
        <p class="pequeno mudo">Clique no status para avançar: Não iniciado → Estudando → Estudado → Revisado. Ao marcar “Estudado”, o tópico entra na revisão espaçada (1, 7, 15, 30 e 60 dias). ★★★ = muito cobrado pela FGV.</p>
        ${d.topicos.map(function (t, i) {
          var st = S.topico(d.id, i);
          var nq = d.questoesBanco.filter(function (q) { return q.topico === nomeTopico(t); }).length;
          return html`<div class="topico">
            <span class="estrelas" title="Relevância">${estrelas(relevancia(t))}</span>
            <span class="nome">${nomeTopico(t)}${st.proximaRevisao ? html` <span class="etiqueta ${st.proximaRevisao <= U.hoje() ? 'alerta' : ''}">revisar ${st.proximaRevisao <= U.hoje() ? 'hoje' : 'em ' + U.fmtData(st.proximaRevisao)}</span>` : ''}</span>
            ${nq ? html`<a class="botao pequeno fantasma" href="#/questoes?d=${d.id}&t=${encodeURIComponent(nomeTopico(t))}">${nq} q.</a>` : ''}
            <button class="status-btn status-${st.status}" data-topico="${i}">${STATUS[st.status]}</button>
          </div>`;
        })}
      </section>`);
      U.$$('[data-topico]', c).forEach(function (b) {
        b.addEventListener('click', function () {
          var i = +b.dataset.topico;
          var st = S.topico(d.id, i);
          S.definirStatusTopico(d.id, i, (st.status + 1) % 4);
          detalhe(el, d, 'topicos');
        });
      });
    } else if (aba === 'resumo') {
      U.render(c, html`<section class="cartao resumo-bloco">
        ${d.resumo.length ? d.resumo.map(function (r) {
          return html`<h4>${r.titulo}</h4><ul>${r.itens.map(function (it) { return html`<li>${it}</li>`; })}</ul>`;
        }) : html`<div class="vazio">Resumo ainda não disponível.</div>`}
        <p class="pequeno mudo" style="margin-top:16px">Resumo de revisão elaborado para o app. Sempre confira a redação literal na lei seca (aba “Lei seca e fontes”).</p>
      </section>`);
    } else if (aba === 'legislacao') {
      U.render(c, html`<section class="cartao">
        <p class="pequeno mudo">Links para as fontes oficiais. Atenção: só é cobrada a legislação em vigor até ${U.fmtData(OAB.EXAME.dataCorteLegislacao, true)} (data de publicação do edital).</p>
        <ul>${d.legislacao.map(function (l) { return html`<li style="margin-bottom:6px"><a href="${l.url}" target="_blank" rel="noopener">${l.nome}</a></li>`; })}</ul>
      </section>`);
    } else if (aba === 'dicas') {
      U.render(c, html`<section class="cartao resumo-bloco"><ul>${d.dicas.map(function (t) { return html`<li>${t}</li>`; })}</ul></section>`);
    } else if (aba === 'notas') {
      U.render(c, html`<section class="cartao">
        <label class="rotulo" for="nota-disc"><strong>Anotações pessoais de ${d.nome}</strong></label>
        <p class="pequeno mudo">Salvas automaticamente neste dispositivo.</p>
        <textarea id="nota-disc" style="min-height:320px">${S.estado.notas[d.id] || ''}</textarea>
      </section>`);
      var ta = U.$('#nota-disc', c);
      ta.addEventListener('input', function () { S.estado.notas[d.id] = ta.value; S.salvar(); });
    }
  }

  OAB.views.disciplinas = {
    titulo: function (r) { var d = r.args[0] && OAB.disciplina(r.args[0]); return d ? d.nome : 'Edital e disciplinas'; },
    render: function (el, r) {
      var d = r.args[0] && OAB.disciplina(r.args[0]);
      if (d) detalhe(el, d, r.params.aba);
      else lista(el);
    }
  };
})();
