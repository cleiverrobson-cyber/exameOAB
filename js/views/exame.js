/* Informações oficiais do 48º Exame: datas, regras e distribuição das questões. */
(function () {
  var OAB = window.OAB, U = OAB.util, html = U.html;

  OAB.views.exame = {
    titulo: 'O Exame',
    render: function (el) {
      var E = OAB.EXAME;
      var hoje = U.hoje();
      U.render(el, html`
        <div class="grade grade-4">
          <div class="cartao kpi"><div class="rotulo">Questões</div><div class="valor">${E.totalQuestoes}</div><div class="detalhe">${E.alternativas} alternativas cada</div></div>
          <div class="cartao kpi"><div class="rotulo">Para aprovar</div><div class="valor">${E.minimoAcertos}</div><div class="detalhe">acertos (50%)</div></div>
          <div class="cartao kpi"><div class="rotulo">Duração</div><div class="valor">${E.duracaoHoras}h</div><div class="detalhe">13h às 18h (Brasília)</div></div>
          <div class="cartao kpi"><div class="rotulo">Banca</div><div class="valor">${E.banca}</div><div class="detalhe">${E.nome}</div></div>
        </div>

        <div class="grade grade-2" style="margin-top:16px">
          <section class="cartao">
            <h2>Calendário oficial</h2>
            ${E.cronograma.map(function (c) {
              var passou = (c.fim || c.data) < hoje;
              return html`<div class="tarefa ${passou ? 'feita' : ''}"><span class="etiqueta ${c.destaque ? 'primaria' : ''}">${U.fmtData(c.data, true)}${c.fim ? ' a ' + U.fmtData(c.fim, true) : ''}</span><div class="info">${c.evento}</div></div>`;
            })}
            <p class="pequeno mudo" style="margin-top:8px">Datas conforme o edital de abertura (publicado em ${U.fmtData(E.editalPublicado, true)}). As datas marcadas como prováveis podem ser alteradas pela OAB/FGV — acompanhe os comunicados oficiais.</p>
          </section>
          <section class="cartao">
            <h2>Regras importantes</h2>
            <ul>
              <li>Aprovação na prova objetiva com no mínimo <strong>40 acertos</strong>; só os aprovados fazem a 2ª fase.</li>
              <li><strong>Legislação cobrada:</strong> a que estiver em vigor na data de publicação do edital (${U.fmtData(E.dataCorteLegislacao, true)}). Leis e alterações posteriores não são objeto de avaliação.</li>
              <li>Não há desconto por erro: marque todas as questões.</li>
              <li>A aprovação no Exame é requisito para a inscrição como advogado (art. 8º, IV, da Lei 8.906/1994).</li>
              <li>Recurso contra o gabarito preliminar: de 12 a 14/01/2027.</li>
            </ul>
            <h3>Links oficiais</h3>
            <ul>${E.links.map(function (l) { return html`<li><a href="${l.url}" target="_blank" rel="noopener">${l.nome}</a></li>`; })}</ul>
          </section>
        </div>

        <section class="cartao" style="margin-top:16px">
          <h2>Distribuição das questões (ordem do caderno)</h2>
          <div class="rolagem-x"><table class="tabela">
            <thead><tr><th>#</th><th>Disciplina</th><th class="num">Questões</th><th class="num">Numeração</th><th class="num">% da prova</th></tr></thead>
            <tbody>${OAB.DISCIPLINAS.map(function (d) {
              return html`<tr><td>${d.ordem}</td><td><span class="ponto" style="background:${d.cor}"></span> <a href="#/disciplinas/${d.id}">${d.nome}</a></td><td class="num">${d.questoes}</td><td class="num">${d.faixa[0]}–${d.faixa[1]}</td><td class="num">${(d.questoes / 80 * 100).toFixed(1).replace('.', ',')}%</td></tr>`;
            })}</tbody>
          </table></div>
        </section>
      `);
    }
  };
})();
