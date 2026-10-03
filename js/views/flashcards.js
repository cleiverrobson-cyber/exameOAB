/* Flashcards com repetição espaçada (SM-2). */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;
  var NOVOS_POR_SESSAO = 20;

  function sessao(el, fila, voltar) {
    var feitos = 0, virado = false;
    var total = fila.length;

    function teclado(e) {
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement && document.activeElement.tagName)) return;
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); virar(); }
      else if (virado && ['1', '2', '3', '4'].indexOf(e.key) >= 0) responder(+e.key - 1);
    }
    function virar() { virado = !virado; var f = U.$('.flashcard', el); if (f) f.classList.toggle('virado', virado); desenharBotoes(); }
    function responder(nota) {
      var c = fila.shift();
      S.responderFlashcard(c.id, nota);
      if (nota === 0) fila.push(c); else feitos++;
      virado = false;
      desenhar();
    }
    function desenharBotoes() {
      var box = U.$('#notas', el);
      if (!box) return;
      var c = fila[0];
      var e = S.estado.flashcards[c.id];
      U.render(box, virado ? html`<div class="notas-srs">${OAB.srs.ROTULOS.map(function (r, i) {
        return html`<button class="botao ${i === 0 ? 'perigo' : i === 2 ? 'primario' : ''}" data-nota="${i}">${r}<small>${OAB.srs.previsao(e, i)} · tecla ${i + 1}</small></button>`;
      })}</div>` : html`<button class="botao primario" id="mostrar" style="width:100%;margin-top:16px">Mostrar resposta (espaço)</button>`);
      U.$$('[data-nota]', box).forEach(function (b) { b.addEventListener('click', function () { responder(+b.dataset.nota); }); });
      var m = U.$('#mostrar', box); if (m) m.addEventListener('click', virar);
    }
    function desenhar() {
      if (!fila.length) {
        document.removeEventListener('keydown', teclado);
        U.render(el, html`<section class="cartao centro">
          <h2>Sessão concluída! 🎉</h2>
          <p class="mudo">${U.plural(feitos, 'cartão revisado', 'cartões revisados')}. O algoritmo agendou cada cartão para o momento ideal de revisão.</p>
          <a class="botao primario" href="${voltar}">Voltar</a></section>`);
        return;
      }
      var c = fila[0];
      var d = OAB.disciplina(c.d);
      U.render(el, html`
        <div class="linha-entre" style="margin-bottom:12px">
          <span><strong>${feitos}/${total}</strong> <span class="mudo pequeno">· ${fila.length} na fila</span></span>
          <span class="linha"><span class="etiqueta" style="background:${d ? d.cor : '#666'};color:#fff">${d ? d.nome : ''}</span>
          ${!S.estado.flashcards[c.id] ? html`<span class="etiqueta primaria">novo</span>` : ''}
          <a class="botao pequeno" href="${voltar}">Encerrar</a></span>
        </div>
        <div class="barra" style="margin-bottom:16px"><span style="width:${U.pct(feitos, total)}%"></span></div>
        <div class="flashcard" id="card" tabindex="0" aria-live="polite">
          <div class="interno">
            <div class="face frente"><div>${c.frente}</div><small>Clique ou tecle espaço para virar</small></div>
            <div class="face verso"><div>${c.verso}</div>${c.fundamento ? html`<small>${c.fundamento}</small>` : ''}</div>
          </div>
        </div>
        <div id="notas"></div>
      `);
      U.$('#card', el).addEventListener('click', virar);
      desenharBotoes();
    }
    document.addEventListener('keydown', teclado);
    desenhar();
    return function () { document.removeEventListener('keydown', teclado); };
  }

  function montarFila(d) {
    var vencidos = U.embaralhar(S.flashcardsVencidos(d || null));
    var novos = S.flashcardsNovos(d || null).slice(0, NOVOS_POR_SESSAO);
    return vencidos.concat(novos);
  }

  OAB.views.flashcards = {
    titulo: 'Flashcards',
    render: function (el, r) {
      var est = S.estado;
      var d = r.params.d || '';
      var limpar = null;
      var linhas = OAB.DISCIPLINAS.map(function (disc) {
        var todos = OAB.banco.flashcardsDe(disc.id);
        var venc = S.flashcardsVencidos(disc.id).length;
        var novos = S.flashcardsNovos(disc.id).length;
        var dominados = todos.filter(function (c) { var e = est.flashcards[c.id]; return e && e.intervalo >= 21; }).length;
        return { disc: disc, total: todos.length, venc: venc, novos: novos, dominados: dominados };
      });
      var totVenc = S.flashcardsVencidos().length;
      var totNovos = S.flashcardsNovos().length;

      U.render(el, html`
        <div class="grade grade-3">
          <div class="cartao kpi"><div class="rotulo">Para revisar hoje</div><div class="valor">${totVenc}</div></div>
          <div class="cartao kpi"><div class="rotulo">Novos disponíveis</div><div class="valor">${totNovos}</div><div class="detalhe">até ${NOVOS_POR_SESSAO} por sessão</div></div>
          <div class="cartao kpi"><div class="rotulo">Total de cartões</div><div class="valor">${OAB.banco.todosFlashcards().length}</div><div class="detalhe">${est.cardsUsuario.length} criados por você</div></div>
        </div>
        <section class="cartao" style="margin-top:16px">
          <div class="cartao-cabecalho"><h2>Baralhos</h2><button class="botao primario" data-estudar="">Estudar todos (${totVenc + Math.min(NOVOS_POR_SESSAO, totNovos)})</button></div>
          <p class="pequeno mudo">Avalie cada cartão com honestidade: “Errei” o traz de volta na mesma sessão; “Fácil” o afasta por mais tempo. Cartões com intervalo ≥ 21 dias contam como dominados.</p>
          <div class="rolagem-x"><table class="tabela">
            <thead><tr><th>Disciplina</th><th class="num">Hoje</th><th class="num">Novos</th><th class="num">Dominados</th><th></th></tr></thead>
            <tbody>${linhas.map(function (l) {
              var n = l.venc + Math.min(NOVOS_POR_SESSAO, l.novos);
              return html`<tr ${raw(d === l.disc.id ? 'style="background:var(--primaria-suave)"' : '')}><td><span class="ponto" style="background:${l.disc.cor}"></span> ${l.disc.nome}</td>
                <td class="num">${l.venc ? html`<span class="etiqueta alerta">${l.venc}</span>` : '0'}</td><td class="num">${l.novos}</td><td class="num">${l.dominados}/${l.total}</td>
                <td class="num"><button class="botao pequeno" data-estudar="${l.disc.id}" ${raw(n ? '' : 'disabled')}>Estudar</button></td></tr>`;
            })}</tbody>
          </table></div>
        </section>
        <section class="cartao">
          <h2>Criar meu flashcard</h2>
          <form id="novo-card">
            <div class="grade grade-2" style="gap:12px">
              <div class="campo"><label for="nc-d">Disciplina</label><select id="nc-d">${OAB.DISCIPLINAS.map(function (x) { return html`<option value="${x.id}" ${raw(x.id === d ? 'selected' : '')}>${x.nome}</option>`; })}</select></div>
              <div class="campo"><label for="nc-f">Fundamento (opcional)</label><input id="nc-f" type="text" placeholder="Ex.: art. 34, XX, EAOAB"></div>
            </div>
            <div class="campo"><label for="nc-frente">Frente (pergunta)</label><textarea id="nc-frente" required style="min-height:70px"></textarea></div>
            <div class="campo"><label for="nc-verso">Verso (resposta)</label><textarea id="nc-verso" required style="min-height:70px"></textarea></div>
            <button class="botao primario" type="submit">Adicionar cartão</button>
          </form>
          ${est.cardsUsuario.length ? html`<h3 style="margin-top:18px">Meus cartões</h3>
            ${est.cardsUsuario.map(function (c) {
              return html`<div class="tarefa"><div class="info"><strong>${c.frente}</strong><br><span class="pequeno mudo">${c.verso}</span></div><button class="botao pequeno perigo" data-apagar="${c.id}">Excluir</button></div>`;
            })}` : ''}
        </section>
      `);

      U.$$('[data-estudar]', el).forEach(function (b) {
        b.addEventListener('click', function () {
          var fila = montarFila(b.dataset.estudar);
          if (!fila.length) { U.toast('Nada para revisar agora. Volte mais tarde!'); return; }
          limpar = sessao(el, fila, '#/flashcards' + (b.dataset.estudar ? '?d=' + b.dataset.estudar : ''));
        });
      });
      U.$('#novo-card', el).addEventListener('submit', function (e) {
        e.preventDefault();
        var frente = U.$('#nc-frente', el).value.trim(), verso = U.$('#nc-verso', el).value.trim();
        if (!frente || !verso) return;
        est.cardsUsuario.push({ id: U.uid('usr-f'), d: U.$('#nc-d', el).value, frente: frente, verso: verso, fundamento: U.$('#nc-f', el).value.trim() });
        S.salvar();
        U.toast('Cartão criado!');
        OAB.recarregarTela();
      });
      U.$$('[data-apagar]', el).forEach(function (b) {
        b.addEventListener('click', function () {
          U.confirmar('Excluir este cartão?', function () {
            est.cardsUsuario = est.cardsUsuario.filter(function (c) { return c.id !== b.dataset.apagar; });
            delete est.flashcards[b.dataset.apagar];
            S.salvar();
            OAB.recarregarTela();
          }, { rotulo: 'Excluir', perigo: true });
        });
      });

      if (r.params.iniciar) {
        var fila = montarFila(d);
        if (fila.length) limpar = sessao(el, fila, '#/flashcards');
      }
      return function () { if (limpar) limpar(); };
    }
  };
})();
