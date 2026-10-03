/* Cronograma de estudos até a prova. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  function entradaDisciplinas() {
    return OAB.DISCIPLINAS.map(function (d) {
      var e = S.estatisticasDisciplina(d.id);
      return {
        id: d.id,
        questoes: d.questoes,
        desempenho: e.tentativas >= 10 ? e.acertos / e.tentativas : null,
        progresso: S.progressoTopicos(d.id).pct
      };
    });
  }

  /* Gera (ou regera) o plano, preservando os dias que já passaram. */
  OAB.gerarPlano = function () {
    var est = S.estado;
    var hoje = U.hoje();
    var prova = OAB.EXAME.prova.slice(0, 10);
    var novos = hoje <= prova ? OAB.planner.gerar({
      hoje: hoje,
      dataProva: prova,
      minutosPorDiaSemana: est.perfil.minutosPorDiaSemana,
      diaSimulado: est.perfil.diaSimulado,
      disciplinas: entradaDisciplinas()
    }) : [];
    var passados = est.plano && est.plano.dias ? est.plano.dias.filter(function (d) { return d.data < hoje; }) : [];
    // Marcas de "feito" de hoje em diante deixam de valer quando o plano muda.
    Object.keys(est.planoFeitos).forEach(function (k) { if (k.slice(0, 10) >= hoje) delete est.planoFeitos[k]; });
    est.plano = { geradoEm: hoje, dias: passados.concat(novos) };
    S.salvar();
    return est.plano.dias;
  };

  OAB.planoAtual = function () {
    var est = S.estado;
    if (!est.plano || !est.plano.dias || !est.plano.dias.length) return OAB.gerarPlano();
    return est.plano.dias;
  };

  function linkBloco(b) {
    if (b.tipo === 'simulado') return '#/simulado';
    if (b.tipo === 'flashcards') return '#/flashcards';
    if (b.tipo === 'correcao') return '#/simulado';
    if (b.tipo === 'estudo' && b.d) return '#/disciplinas/' + b.d;
    if (b.tipo === 'revisao' && b.d) return '#/disciplinas/' + b.d + '?aba=resumo';
    return '';
  }

  OAB.desenharTarefasDia = function (el, dia, aoMudar) {
    if (!dia) {
      U.render(el, '<p class="vazio">Nenhuma tarefa planejada para hoje.</p>');
      return;
    }
    var feitos = S.estado.planoFeitos;
    U.render(el, html`${dia.blocos.map(function (b) {
      var d = b.d ? OAB.disciplina(b.d) : null;
      var link = linkBloco(b);
      var acaoQ = b.d && (b.tipo === 'estudo' || b.tipo === 'revisao') ? html`<a class="botao pequeno" href="#/questoes?d=${b.d}">Questões</a>` : '';
      return html`<div class="tarefa ${feitos[b.id] ? 'feita' : ''}">
        ${b.tipo !== 'folga' ? html`<input type="checkbox" data-bloco="${b.id}" ${raw(feitos[b.id] ? 'checked' : '')} aria-label="Marcar como concluída">` : ''}
        <div class="info">
          ${d ? html`<strong><span class="ponto" style="background:${d.cor}"></span> ${d.nome}</strong><br>` : ''}
          <span class="${d ? 'pequeno mudo' : ''}">${b.titulo}</span>
        </div>
        ${b.minutos ? html`<span class="etiqueta">${U.fmtMin(b.minutos)}</span>` : ''}
        ${link ? html`<a class="botao pequeno" href="${link}">Abrir</a>` : ''}
        ${acaoQ}
      </div>`;
    })}`);
    U.$$('input[data-bloco]', el).forEach(function (cb) {
      cb.addEventListener('change', function () {
        if (cb.checked) S.estado.planoFeitos[cb.dataset.bloco] = true;
        else delete S.estado.planoFeitos[cb.dataset.bloco];
        S.salvar();
        if (aoMudar) aoMudar();
      });
    });
  };

  function inicioSemana(k) { return U.somarDias(k, -U.diaSemana(k)); }

  OAB.views.cronograma = {
    titulo: 'Cronograma',
    render: function (el, rota) {
      var est = S.estado;
      var dias = OAB.planoAtual();
      var hoje = U.hoje();
      var prova = OAB.EXAME.prova.slice(0, 10);
      var ref = rota.params.semana || inicioSemana(hoje > prova ? prova : hoje);
      var porData = {};
      dias.forEach(function (d) { porData[d.data] = d; });
      var f = OAB.planner.fases(est.plano.geradoEm, prova);

      var total = 0, feitosMin = 0;
      dias.forEach(function (d) { d.blocos.forEach(function (b) { total += b.minutos; if (est.planoFeitos[b.id]) feitosMin += b.minutos; }); });
      var porDisc = OAB.planner.resumoPorDisciplina(dias);
      var semanaMin = est.perfil.minutosPorDiaSemana.reduce(function (a, b) { return a + b; }, 0);

      var semana = [];
      for (var i = 0; i < 7; i++) semana.push(U.somarDias(ref, i));

      U.render(el, html`
        <div class="grade grade-3">
          <div class="cartao kpi"><div class="rotulo">Carga planejada</div><div class="valor">${U.fmtMin(total)}</div><div class="detalhe">${U.fmtMin(semanaMin)} por semana</div></div>
          <div class="cartao kpi"><div class="rotulo">Concluído</div><div class="valor">${U.pct(feitosMin, total)}%</div><div class="barra sucesso"><span style="width:${U.pct(feitosMin, total)}%"></span></div></div>
          <div class="cartao kpi"><div class="rotulo">Fases</div>
            <div class="detalhe"><span class="ponto" style="background:${OAB.planner.FASES.base.cor}"></span> Base: até ${U.fmtData(U.somarDias(f.inicioRevisao, -1))}</div>
            <div class="detalhe"><span class="ponto" style="background:${OAB.planner.FASES.revisao.cor}"></span> Revisão + simulados: ${U.fmtData(f.inicioRevisao)} a ${U.fmtData(U.somarDias(f.inicioFinal, -1))}</div>
            <div class="detalhe"><span class="ponto" style="background:${OAB.planner.FASES.final.cor}"></span> Reta final: ${U.fmtData(f.inicioFinal)} a ${U.fmtData(U.somarDias(prova, -1))}</div>
          </div>
        </div>

        <section class="cartao" style="margin-top:16px">
          <div class="cartao-cabecalho">
            <h2>Semana de ${U.fmtData(semana[0])} a ${U.fmtData(semana[6], true)}</h2>
            <div class="linha">
              <a class="botao pequeno" href="#/cronograma?semana=${U.somarDias(ref, -7)}">← Anterior</a>
              <a class="botao pequeno" href="#/cronograma">Hoje</a>
              <a class="botao pequeno" href="#/cronograma?semana=${U.somarDias(ref, 7)}">Próxima →</a>
            </div>
          </div>
          <div class="semana">
            ${semana.map(function (k) {
              var dia = porData[k];
              return html`<div class="dia ${k === hoje ? 'hoje' : ''} ${k === prova ? 'prova' : ''} ${!dia ? 'sem-plano' : ''}">
                <div class="dia-cab"><span>${U.DIAS[U.diaSemana(k)]} ${U.fmtData(k)}</span>${dia ? html`<span class="ponto" title="${OAB.planner.FASES[dia.fase].nome}" style="background:${OAB.planner.FASES[dia.fase].cor}"></span>` : ''}</div>
                ${dia ? dia.blocos.map(function (b) {
                  var d = b.d ? OAB.disciplina(b.d) : null;
                  return html`<div class="bloco ${est.planoFeitos[b.id] ? 'feito' : ''}" style="--cor:${d ? d.cor : OAB.planner.FASES[dia.fase].cor}" data-bloco="${b.id}" role="button" tabindex="0" title="Clique para marcar como feito">
                    <strong>${d ? d.sigla : b.tipo === 'simulado' ? 'Simulado' : b.tipo === 'folga' ? 'Folga' : b.tipo === 'prova' ? 'PROVA' : b.tipo === 'flashcards' ? 'Cards' : 'Revisão'}</strong>
                    ${b.minutos ? ' · ' + U.fmtMin(b.minutos) : ''}<br><span class="mudo">${b.titulo}</span>
                  </div>`;
                }) : html`<span class="mudo">—</span>`}
              </div>`;
            })}
          </div>
          <p class="pequeno mudo" style="margin-top:10px">Clique em um bloco para marcá-lo como concluído.</p>
        </section>

        <div class="grade grade-2" style="margin-top:16px">
          <section class="cartao">
            <h2>Minha disponibilidade</h2>
            <p class="pequeno mudo">Horas de estudo por dia da semana. O plano é recalculado a partir de hoje, priorizando as disciplinas com mais questões na prova e as de menor aproveitamento.</p>
            <form id="form-disp">
              <div class="grade grade-4" style="gap:8px">
                ${U.DIAS_LONGOS.map(function (n, i) {
                  return html`<div class="campo"><label for="h${i}">${n}</label><input id="h${i}" type="number" min="0" max="16" step="0.5" value="${est.perfil.minutosPorDiaSemana[i] / 60}"></div>`;
                })}
              </div>
              <div class="campo">
                <label for="dia-sim">Dia do simulado semanal (fase de revisão)</label>
                <select id="dia-sim">${U.DIAS_LONGOS.map(function (n, i) { return html`<option value="${i}" ${raw(+est.perfil.diaSimulado === i ? 'selected' : '')}>${n}</option>`; })}</select>
              </div>
              <button class="botao primario" type="submit">Salvar e recalcular plano</button>
            </form>
          </section>
          <section class="cartao">
            <h2>Tempo planejado por disciplina</h2>
            ${raw(OAB.charts.barrasH(OAB.DISCIPLINAS.map(function (d) {
              return { rotulo: d.nome.replace('Direito ', 'D. ').replace('Processual', 'Proc.'), valor: (porDisc[d.id] || 0) / 60, cor: d.cor, texto: U.fmtMin(porDisc[d.id] || 0) };
            }), { esquerda: 170, titulo: 'Horas planejadas por disciplina' }))}
          </section>
        </div>
      `);

      U.$$('.bloco[data-bloco]', el).forEach(function (b) {
        function alternar() {
          var id = b.dataset.bloco;
          if (est.planoFeitos[id]) delete est.planoFeitos[id]; else est.planoFeitos[id] = true;
          b.classList.toggle('feito');
          S.salvar();
        }
        b.addEventListener('click', alternar);
        b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); alternar(); } });
      });

      U.$('#form-disp', el).addEventListener('submit', function (e) {
        e.preventDefault();
        est.perfil.minutosPorDiaSemana = U.DIAS_LONGOS.map(function (_, i) {
          var v = parseFloat(U.$('#h' + i, el).value);
          return Math.round((isNaN(v) ? 0 : Math.max(0, Math.min(16, v))) * 60);
        });
        est.perfil.diaSimulado = +U.$('#dia-sim', el).value;
        OAB.gerarPlano();
        U.toast('Plano recalculado até o dia da prova.');
        OAB.recarregarTela();
      });
    }
  };
})();
