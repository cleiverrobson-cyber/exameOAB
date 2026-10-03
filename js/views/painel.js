/* Painel inicial: contagem regressiva, metas do dia, projeção de nota e pendências. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  function contagemHTML() {
    var ms = Math.max(0, new Date(OAB.EXAME.prova) - new Date());
    var d = Math.floor(ms / 86400000), h = Math.floor((ms % 86400000) / 3600000), m = Math.floor((ms % 3600000) / 60000);
    return '<div><strong>' + d + '</strong><span>dias</span></div><div><strong>' + h + '</strong><span>horas</span></div><div><strong>' + m + '</strong><span>min</span></div>';
  }

  OAB.views.painel = {
    titulo: 'Painel',
    render: function (el) {
      var est = S.estado;
      var hoje = U.hoje();
      var atv = est.atividade[hoje] || { q: 0, min: 0, c: 0 };
      var meta = est.perfil.metaQuestoesDia || 30;

      var totalResp = 0, totalTent = 0, totalAc = 0;
      Object.keys(est.respostas).forEach(function (k) { var r = est.respostas[k]; totalResp++; totalTent += r.tentativas; totalAc += r.acertos; });
      var bancoTotal = OAB.banco.todasQuestoes().length;

      var minSemana = 0;
      for (var i = 0; i < 7; i++) { var a = est.atividade[U.somarDias(hoje, -i)]; if (a) minSemana += a.min || 0; }

      var proj = S.projecao();
      var projN = Math.round(proj.acertos);
      var cards = S.flashcardsVencidos().length;
      var revs = S.revisoesPendentes().length;
      var erradas = OAB.banco.filtrar({ situacao: 'erradas' }).length;

      var plano = OAB.planoAtual();
      var diaPlano = plano.filter(function (d) { return d.data === hoje; })[0];
      var fase = diaPlano ? OAB.planner.FASES[diaPlano.fase].nome : '';

      // Disciplinas prioritárias: maior "perda esperada" = peso × (1 - taxa suavizada)
      var prioridades = OAB.DISCIPLINAS.map(function (d) {
        var e = S.estatisticasDisciplina(d.id);
        var taxa = (e.acertos + 2) / (e.tentativas + 4);
        return { d: d, e: e, perda: d.questoes * (1 - taxa), taxa: taxa };
      }).sort(function (a, b) { return b.perda - a.perda; }).slice(0, 5);

      var proximos = OAB.EXAME.cronograma.filter(function (c) { return (c.fim || c.data) >= hoje; }).slice(0, 4);

      var nome = est.perfil.nome ? ', ' + est.perfil.nome.split(' ')[0] : '';
      var corProj = projN >= 48 ? 'sucesso' : projN >= 40 ? 'alerta' : 'erro';

      U.render(el, html`
        <section class="cartao hero">
          <div>
            <h2>Olá${nome}! Rumo à aprovação.</h2>
            <p>${OAB.EXAME.nome} · 1ª fase: ${U.fmtDataLonga(OAB.EXAME.prova.slice(0, 10))}, das 13h às 18h.</p>
            ${fase ? raw('<p style="margin-top:8px"><strong>Fase atual do plano:</strong> ' + U.esc(fase) + '</p>') : ''}
          </div>
          <div class="contagem" id="contagem">${raw(contagemHTML())}</div>
        </section>

        <div class="grade grade-4" style="margin-top:16px">
          <div class="cartao kpi">
            <div class="rotulo">Questões hoje</div>
            <div class="valor">${atv.q}<span class="mudo pequeno"> / ${meta}</span></div>
            <div class="barra ${atv.q >= meta ? 'sucesso' : ''}"><span style="width:${Math.min(100, U.pct(atv.q, meta))}%"></span></div>
          </div>
          <div class="cartao kpi">
            <div class="rotulo">Aproveitamento</div>
            <div class="valor">${totalTent ? U.pct(totalAc, totalTent) + '%' : '—'}</div>
            <div class="detalhe">${totalResp} de ${bancoTotal} questões do banco já resolvidas</div>
          </div>
          <div class="cartao kpi">
            <div class="rotulo">Estudo na semana</div>
            <div class="valor">${U.fmtMin(minSemana)}</div>
            <div class="detalhe">Hoje: ${U.fmtMin(atv.min)}</div>
          </div>
          <div class="cartao kpi">
            <div class="rotulo">Sequência</div>
            <div class="valor">${S.sequenciaDias()} 🔥</div>
            <div class="detalhe">dias seguidos estudando</div>
          </div>
        </div>

        <div class="grade grade-2" style="margin-top:16px">
          <section class="cartao">
            <div class="cartao-cabecalho">
              <h2>Hoje no cronograma</h2>
              <a class="botao pequeno" href="#/cronograma">Ver plano</a>
            </div>
            <div id="tarefas-hoje"></div>
          </section>

          <section class="cartao">
            <div class="cartao-cabecalho">
              <h2>Termômetro de aprovação</h2>
              <span class="etiqueta ${corProj}">${projN} / 80</span>
            </div>
            <div class="termometro" aria-label="Projeção de ${projN} acertos">
              <div class="preenchido" style="width:${(proj.acertos / 80) * 100}%"></div>
              <div class="marco" style="left:50%"><span>40 (aprovação)</span></div>
              <div class="marco" style="left:60%;opacity:.5"><span style="top:24px">48 (margem)</span></div>
            </div>
            <p class="pequeno mudo" style="margin-top:28px">
              Projeção = soma, por disciplina, do nº de questões na prova × sua taxa de acerto (suavizada).
              ${proj.confiavel ? '' : 'Resolva ao menos 100 questões para uma estimativa confiável.'}
            </p>
            <h3 style="margin-top:14px">Onde você mais pode ganhar pontos</h3>
            <div class="rolagem-x"><table class="tabela">
              <thead><tr><th>Disciplina</th><th class="num">Qtd.</th><th class="num">Acerto</th><th></th></tr></thead>
              <tbody>
                ${prioridades.map(function (p) {
                  return html`<tr>
                    <td><span class="ponto" style="background:${p.d.cor}"></span> ${p.d.nome}</td>
                    <td class="num">${p.d.questoes}</td>
                    <td class="num">${p.e.tentativas ? Math.round(p.e.taxa * 100) + '%' : '—'}</td>
                    <td class="num"><a class="botao pequeno" href="#/questoes?d=${p.d.id}">Treinar</a></td>
                  </tr>`;
                })}
              </tbody>
            </table></div>
          </section>
        </div>

        <div class="grade grade-3" style="margin-top:16px">
          <a class="cartao kpi" href="#/flashcards" style="text-decoration:none;color:inherit">
            <div class="rotulo">Flashcards para hoje</div>
            <div class="valor">${cards}</div>
            <div class="detalhe">${S.flashcardsNovos().length} cartões novos disponíveis</div>
          </a>
          <a class="cartao kpi" href="#/revisoes" style="text-decoration:none;color:inherit">
            <div class="rotulo">Revisões de tópicos</div>
            <div class="valor">${revs}</div>
            <div class="detalhe">revisão espaçada: 1, 7, 15, 30 e 60 dias</div>
          </a>
          <a class="cartao kpi" href="#/erros" style="text-decoration:none;color:inherit">
            <div class="rotulo">Caderno de erros</div>
            <div class="valor">${erradas}</div>
            <div class="detalhe">questões para refazer</div>
          </a>
        </div>

        ${est.simuladoAtivo ? html`<div class="aviso alerta" style="margin-top:16px">Você tem um simulado em andamento. <a href="#/simulado/fazer">Continuar simulado</a></div>` : ''}

        <section class="cartao" style="margin-top:16px">
          <div class="cartao-cabecalho">
            <h2>Próximas datas do Exame</h2>
            <a class="botao pequeno" href="#/exame">Calendário completo</a>
          </div>
          ${proximos.map(function (c) {
            return html`<div class="tarefa"><span class="etiqueta ${c.destaque ? 'primaria' : ''}">${U.fmtData(c.data)}${c.fim ? ' a ' + U.fmtData(c.fim) : ''}</span><div class="info">${c.evento}</div></div>`;
          })}
        </section>
      `);

      OAB.desenharTarefasDia(U.$('#tarefas-hoje', el), diaPlano, function () { OAB.recarregarTela(); });

      var timer = setInterval(function () {
        var c = U.$('#contagem', el);
        if (c) c.innerHTML = contagemHTML();
      }, 30000);
      return function () { clearInterval(timer); };
    }
  };
})();
