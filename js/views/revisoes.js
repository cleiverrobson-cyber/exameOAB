/* Revisões espaçadas dos tópicos do edital. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html;

  function nomeTopico(chave) {
    var p = chave.split('#');
    var d = OAB.disciplina(p[0]);
    var t = d && d.topicos[+p[1]];
    return { d: d, nome: t ? (typeof t === 'string' ? t : t.nome) : 'Tópico ' + p[1] };
  }

  OAB.views.revisoes = {
    titulo: 'Revisões',
    render: function (el) {
      var est = S.estado;
      var hoje = U.hoje();
      var pend = S.revisoesPendentes().sort(function (a, b) { return est.topicos[a].proximaRevisao < est.topicos[b].proximaRevisao ? -1 : 1; });
      var futuras = Object.keys(est.topicos).filter(function (k) { var t = est.topicos[k]; return t.proximaRevisao && t.proximaRevisao > hoje; })
        .sort(function (a, b) { return est.topicos[a].proximaRevisao < est.topicos[b].proximaRevisao ? -1 : 1; });

      function linha(k, acao) {
        var t = est.topicos[k];
        var n = nomeTopico(k);
        var atraso = U.diffDias(t.proximaRevisao, hoje);
        return html`<div class="tarefa">
          <span class="ponto" style="background:${n.d ? n.d.cor : '#666'}"></span>
          <div class="info"><strong>${n.nome}</strong><br><span class="pequeno mudo">${n.d ? n.d.nome : ''} · revisão ${(t.revisoes || 0) + 1} de ${OAB.srs.INTERVALOS_TOPICO.length}
            ${acao ? (atraso > 0 ? ' · atrasada ' + U.plural(atraso, 'dia') : ' · para hoje') : ' · em ' + U.fmtData(t.proximaRevisao)}</span></div>
          ${acao && n.d ? html`<a class="botao pequeno" href="#/disciplinas/${n.d.id}?aba=resumo">Resumo</a><a class="botao pequeno" href="#/questoes?d=${n.d.id}&t=${encodeURIComponent(n.nome)}">Questões</a>
            <button class="botao pequeno primario" data-concluir="${k}">Revisado ✓</button>` : ''}
        </div>`;
      }

      U.render(el, html`
        <div class="aviso">Quando você marca um tópico como <strong>Estudado</strong> no edital, ele é agendado para revisões após 1, 7, 15, 30 e 60 dias — a curva do esquecimento é combatida justamente nesses intervalos. Para revisar: releia o resumo, a lei seca e resolva algumas questões do tópico.</div>
        <section class="cartao" style="margin-top:16px">
          <h2>Para hoje (${pend.length})</h2>
          ${pend.length ? pend.map(function (k) { return linha(k, true); }) : html`<div class="vazio">Nenhuma revisão pendente. Marque tópicos como estudados em <a href="#/disciplinas">Edital e disciplinas</a>.</div>`}
        </section>
        <section class="cartao">
          <h2>Próximas revisões</h2>
          ${futuras.length ? futuras.slice(0, 40).map(function (k) { return linha(k, false); }) : html`<div class="vazio">Nada agendado ainda.</div>`}
        </section>
      `);
      U.$$('[data-concluir]', el).forEach(function (b) {
        b.addEventListener('click', function () { S.concluirRevisaoTopico(b.dataset.concluir); U.toast('Revisão registrada!'); OAB.recarregarTela(); });
      });
    }
  };
})();
