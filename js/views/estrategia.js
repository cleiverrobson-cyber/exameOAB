/* Estratégia: orientações e calculadora de metas por disciplina. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  function metaPadrao(d) {
    // Sugestão: 75% em Ética e nas matérias de 2 questões “previsíveis”; 55–60% nas demais.
    if (d.id === 'etica') return 7;
    return Math.round(d.questoes * (d.questoes <= 2 ? 0.5 : 0.6));
  }

  OAB.views.estrategia = {
    titulo: 'Estratégia e metas',
    render: function (el) {
      var est = S.estado;
      est.metas = est.metas || {};
      OAB.DISCIPLINAS.forEach(function (d) { if (est.metas[d.id] == null) est.metas[d.id] = metaPadrao(d); });

      function soma() { return OAB.DISCIPLINAS.reduce(function (a, d) { return a + (+est.metas[d.id] || 0); }, 0); }

      function desenharTotal() {
        var t = soma();
        var box = U.$('#total-meta', el);
        box.className = 'aviso ' + (t >= 48 ? 'sucesso' : t >= 40 ? 'alerta' : 'erro');
        U.render(box, html`<strong>Sua meta soma ${t} acertos.</strong> ${t >= 48 ? 'Ótimo: há margem de segurança sobre os 40 exigidos.' : t >= 40 ? 'Suficiente para aprovar, mas com pouca margem. Tente chegar a 48.' : 'Abaixo dos 40 acertos necessários. Aumente as metas nas disciplinas de maior peso.'}`);
      }

      U.render(el, html`
        <div class="grade grade-2">
          ${OAB.ESTRATEGIA.principios.map(function (p) {
            return html`<section class="cartao resumo-bloco"><h2>${p.titulo}</h2><ul>${p.itens.map(function (i) { return html`<li>${i}</li>`; })}</ul></section>`;
          })}
        </div>

        <section class="cartao" style="margin-top:16px">
          <h2>Calculadora de metas por disciplina</h2>
          <p class="pequeno mudo">Defina quantas questões pretende acertar em cada disciplina. Compare com o seu desempenho atual (taxa de acerto × nº de questões).</p>
          <div id="total-meta" class="aviso"></div>
          <div class="rolagem-x" style="margin-top:12px"><table class="tabela">
            <thead><tr><th>Disciplina</th><th class="num">Questões</th><th style="min-width:160px">Meta de acertos</th><th class="num">Meta</th><th class="num">Hoje (projeção)</th></tr></thead>
            <tbody>${OAB.DISCIPLINAS.map(function (d) {
              var e = S.estatisticasDisciplina(d.id);
              var proj = e.tentativas ? (d.questoes * e.taxa).toFixed(1) : '—';
              return html`<tr><td><span class="ponto" style="background:${d.cor}"></span> ${d.nome}</td><td class="num">${d.questoes}</td>
                <td><input type="range" min="0" max="${d.questoes}" step="1" value="${est.metas[d.id]}" data-meta="${d.id}" aria-label="Meta de ${d.nome}"></td>
                <td class="num"><strong id="mv-${d.id}">${est.metas[d.id]}</strong></td><td class="num">${proj}</td></tr>`;
            })}</tbody>
          </table></div>
        </section>

        <section class="cartao">
          <h2>Checklist do dia da prova</h2>
          ${OAB.ESTRATEGIA.checklistProva.map(function (c, i) {
            var on = est.checklist && est.checklist[i];
            return html`<label class="tarefa ${on ? 'feita' : ''}"><input type="checkbox" data-check="${i}" ${raw(on ? 'checked' : '')}><span class="info">${c}</span></label>`;
          })}
          <p class="pequeno mudo" style="margin-top:8px">Sempre confira as regras definitivas no edital e no Cartão de Informação do Examinando.</p>
        </section>
      `);
      desenharTotal();
      U.$$('[data-meta]', el).forEach(function (r) {
        r.addEventListener('input', function () {
          est.metas[r.dataset.meta] = +r.value;
          U.$('#mv-' + r.dataset.meta, el).textContent = r.value;
          desenharTotal();
          S.salvar();
        });
      });
      U.$$('[data-check]', el).forEach(function (c) {
        c.addEventListener('change', function () {
          est.checklist = est.checklist || {};
          est.checklist[c.dataset.check] = c.checked;
          c.closest('.tarefa').classList.toggle('feita', c.checked);
          S.salvar();
        });
      });
    }
  };
})();
