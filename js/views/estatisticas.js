/* Painel de desempenho. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  OAB.views.estatisticas = {
    titulo: 'Desempenho',
    render: function (el) {
      var est = S.estado;
      var hoje = U.hoje();
      var porD = OAB.DISCIPLINAS.map(function (d) { return { d: d, e: S.estatisticasDisciplina(d.id), min: S.minutosEstudados(d.id) }; });
      var tent = 0, ac = 0;
      porD.forEach(function (x) { tent += x.e.tentativas; ac += x.e.acertos; });
      var minTot = S.minutosEstudados();
      var comTempo = est.historico.filter(function (h) { return h.s > 0 && h.m !== 'simulado'; });
      var tempoMedio = comTempo.length ? comTempo.reduce(function (a, h) { return a + Math.min(h.s, 900); }, 0) / comTempo.length : 0;

      // Desempenho por tópico
      var topicos = {};
      est.historico.forEach(function (h) {
        var q = OAB.banco.questao(h.q);
        if (!q) return;
        var k = q.d + '|' + q.topico;
        var t = topicos[k] || (topicos[k] = { d: q.d, topico: q.topico, a: 0, t: 0 });
        t.t++; if (h.ok) t.a++;
      });
      var fracos = Object.keys(topicos).map(function (k) { return topicos[k]; }).filter(function (t) { return t.t >= 3; })
        .sort(function (a, b) { return a.a / a.t - b.a / b.t; }).slice(0, 10);

      var ultimos30 = [];
      for (var i = 29; i >= 0; i--) {
        var k = U.somarDias(hoje, -i);
        var a = est.atividade[k] || {};
        ultimos30.push({ rotulo: U.fmtData(k), valor: a.q || 0, min: a.min || 0 });
      }
      var calor = [];
      var maxQ = 1;
      for (var j = 111; j >= 0; j--) {
        var kk = U.somarDias(hoje, -j);
        var at = est.atividade[kk] || {};
        var v = (at.q || 0) + (at.min || 0) / 3 + (at.c || 0) / 3;
        maxQ = Math.max(maxQ, v);
        calor.push({ k: kk, v: v, a: at });
      }

      U.render(el, html`
        <div class="grade grade-4">
          <div class="cartao kpi"><div class="rotulo">Questões resolvidas</div><div class="valor">${tent}</div><div class="detalhe">${Object.keys(est.respostas).length} distintas</div></div>
          <div class="cartao kpi"><div class="rotulo">Acerto geral</div><div class="valor">${tent ? U.pct(ac, tent) + '%' : '—'}</div><div class="detalhe">meta: acima de 60%</div></div>
          <div class="cartao kpi"><div class="rotulo">Horas estudadas</div><div class="valor">${U.fmtMin(minTot)}</div><div class="detalhe">${est.sessoes.length} sessões</div></div>
          <div class="cartao kpi"><div class="rotulo">Tempo por questão</div><div class="valor">${tempoMedio ? U.fmtRelogio(tempoMedio) : '—'}</div><div class="detalhe">na prova: até 3:45</div></div>
        </div>

        <section class="cartao" style="margin-top:16px">
          <h2>Acerto por disciplina</h2>
          <p class="pequeno mudo">Linha tracejada = 50% (nota de corte). Disciplinas sem barra ainda não têm questões resolvidas.</p>
          ${raw(OAB.charts.barrasH(porD.map(function (x) {
            var t = x.e.taxa;
            return { rotulo: x.d.nome.replace('Direito ', 'D. ').replace('Processual', 'Proc.'), valor: t == null ? null : Math.round(t * 100), cor: t == null ? '#999' : t >= 0.6 ? '#15803d' : t >= 0.5 ? '#b45309' : '#b91c1c', texto: t == null ? '—' : Math.round(t * 100) + '% (' + x.e.tentativas + ')' };
          }), { max: 100, linha: 50, esquerda: 170, titulo: 'Taxa de acerto por disciplina' }))}
        </section>

        <div class="grade grade-2" style="margin-top:16px">
          <section class="cartao">
            <h2>Questões por dia (30 dias)</h2>
            ${raw(OAB.charts.linha(ultimos30, { meta: est.perfil.metaQuestoesDia, rotuloMeta: 'meta diária', titulo: 'Questões resolvidas por dia' }))}
          </section>
          <section class="cartao">
            <h2>Constância (16 semanas)</h2>
            <div class="calor" aria-label="Mapa de atividade diária">
              ${calor.map(function (c) {
                var o = c.v ? 0.25 + 0.75 * (c.v / maxQ) : 0;
                return html`<div title="${U.fmtData(c.k, true)}: ${c.a.q || 0} questões, ${U.fmtMin(c.a.min || 0)}" style="${o ? 'background:rgba(47,85,200,' + o.toFixed(2) + ')' : ''}"></div>`;
              })}
            </div>
            <p class="pequeno mudo" style="margin-top:8px">Sequência atual: <strong>${S.sequenciaDias()} dias</strong>. Cada quadrado é um dia; quanto mais escuro, mais estudo.</p>
          </section>
        </div>

        <div class="grade grade-2" style="margin-top:16px">
          <section class="cartao">
            <h2>Tópicos mais fracos</h2>
            ${fracos.length ? html`<table class="tabela"><tbody>${fracos.map(function (t) {
              var d = OAB.disciplina(t.d);
              return html`<tr><td><span class="ponto" style="background:${d.cor}"></span> <strong>${d.sigla}</strong> · ${t.topico}</td><td class="num">${t.a}/${t.t}</td>
                <td class="num"><a class="botao pequeno" href="#/questoes?d=${t.d}&t=${encodeURIComponent(t.topico)}">Treinar</a></td></tr>`;
            })}</tbody></table>` : html`<p class="mudo">Resolva ao menos 3 questões de um tópico para vê-lo aqui.</p>`}
          </section>
          <section class="cartao">
            <h2>Horas por disciplina</h2>
            ${minTot ? raw(OAB.charts.barrasH(porD.filter(function (x) { return x.min; }).map(function (x) {
              return { rotulo: x.d.sigla, valor: x.min, cor: x.d.cor, texto: U.fmtMin(x.min) };
            }), { esquerda: 60, titulo: 'Horas por disciplina' })) : html`<p class="mudo">Use o <a href="#/pomodoro">Pomodoro</a> ou registre seu estudo manualmente.</p>`}
          </section>
        </div>
      `);
    }
  };
})();
