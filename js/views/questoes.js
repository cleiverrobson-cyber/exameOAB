/* Banco de questões: filtros, sessão de treino com correção imediata e caderno de erros. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;
  var DIFIC = ['', 'Fácil', 'Média', 'Difícil'];

  /*
   * Sessão de prática reutilizável.
   * opcoes: { titulo, modo, aoTerminar(resultado), voltar: { href, rotulo } }
   */
  OAB.praticar = function (el, questoes, opcoes) {
    opcoes = opcoes || {};
    var idx = 0;
    var resultados = []; // { q, marcada, ok }
    var marcada = null;
    var respondida = false;
    var riscadas = {};
    var inicio = Date.now();

    function teclado(e) {
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement && document.activeElement.tagName)) return;
      var k = e.key.toLowerCase();
      var mapa = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 };
      if (!respondida && k in mapa) { marcada = mapa[k]; desenhar(); }
      else if (k === 'enter') {
        e.preventDefault();
        if (!respondida && marcada != null) confirmar();
        else if (respondida) proxima();
      }
    }
    document.addEventListener('keydown', teclado);

    function confirmar() {
      var q = questoes[idx];
      var seg = (Date.now() - inicio) / 1000;
      var ok = S.responderQuestao(q, marcada, seg, opcoes.modo || 'treino');
      resultados.push({ q: q, marcada: marcada, ok: ok });
      respondida = true;
      desenhar();
    }
    function proxima() {
      if (idx + 1 >= questoes.length) return fim();
      idx++; marcada = null; respondida = false; riscadas = {}; inicio = Date.now();
      desenhar();
      el.scrollIntoView({ block: 'start' });
    }

    function desenhar() {
      var q = questoes[idx];
      var d = OAB.disciplina(q.d);
      var hist = S.estado.respostas[q.id];
      var fav = !!S.estado.favoritas[q.id];
      var acertosSessao = resultados.filter(function (r) { return r.ok; }).length;
      U.render(el, html`
        <div class="barra-questao">
          <div class="linha">
            <strong>Questão ${idx + 1} de ${questoes.length}</strong>
            <span class="etiqueta" style="background:${d ? d.cor : '#666'};color:#fff">${d ? d.sigla : '—'}</span>
            <span class="etiqueta">${q.topico || ''}</span>
            <span class="etiqueta">${DIFIC[q.dificuldade] || ''}</span>
          </div>
          <div class="linha">
            <span class="pequeno mudo">Sessão: ${acertosSessao}/${resultados.length}</span>
            <button class="botao-icone" id="fav" aria-pressed="${fav}" title="${fav ? 'Remover dos favoritos' : 'Favoritar'}">${fav ? '★' : '☆'}</button>
            ${opcoes.voltar ? html`<a class="botao pequeno" href="${opcoes.voltar.href}">${opcoes.voltar.rotulo}</a>` : ''}
          </div>
        </div>
        <div class="barra" style="margin-bottom:14px"><span style="width:${((idx + (respondida ? 1 : 0)) / questoes.length) * 100}%"></span></div>
        <article class="cartao questao">
          <div class="enunciado">${q.enunciado}</div>
          <div class="alternativas" role="radiogroup" aria-label="Alternativas">
            ${q.alternativas.map(function (a, i) {
              var cls = 'alternativa';
              if (respondida) {
                if (i === q.correta) cls += ' certa';
                else if (i === marcada) cls += ' errada';
              } else if (i === marcada) cls += ' marcada';
              if (riscadas[i] && !respondida) cls += ' riscada';
              return html`<div class="alt-linha">
                <button class="${cls}" data-alt="${i}" role="radio" aria-checked="${i === marcada}" ${raw(respondida ? 'disabled' : '')}>
                  <span class="letra">${U.LETRAS[i]}</span><span class="texto">${a}</span>
                </button>
                ${respondida ? '' : html`<button class="riscar" data-riscar="${i}" title="Riscar alternativa (eliminar)" aria-label="Riscar alternativa ${U.LETRAS[i]}">✂</button>`}
              </div>`;
            })}
          </div>
          ${respondida ? html`
            <div class="aviso ${marcada === q.correta ? 'sucesso' : 'erro'}" style="margin-top:16px;font-family:var(--fonte)">
              ${marcada === q.correta ? 'Resposta correta!' : 'Resposta incorreta. Gabarito: letra ' + U.LETRAS[q.correta] + '.'}
              ${hist && hist.tentativas > 1 ? html` <span class="mudo">(histórico: ${hist.acertos}/${hist.tentativas} acertos)</span>` : ''}
            </div>
            <div class="comentario" style="font-family:var(--fonte)">
              <strong>Comentário:</strong> ${q.comentario}
              <div class="fundamento"><strong>Fundamento:</strong> ${q.fundamento || '—'}</div>
            </div>
            <details style="margin-top:12px;font-family:var(--fonte)" ${raw(S.estado.anotacoesQuestao[q.id] ? 'open' : '')}>
              <summary class="pequeno">Minha anotação nesta questão</summary>
              <textarea id="anot" style="min-height:80px;margin-top:6px">${S.estado.anotacoesQuestao[q.id] || ''}</textarea>
            </details>` : ''}
        </article>
        <div class="linha-entre" style="margin-top:14px">
          <span class="pequeno mudo">Atalhos: A–D ou 1–4 para marcar · Enter para confirmar/avançar · ✂ risca alternativas</span>
          <div class="linha">
            ${respondida
              ? html`<button class="botao primario" id="prox">${idx + 1 >= questoes.length ? 'Ver resultado' : 'Próxima questão →'}</button>`
              : html`<button class="botao" id="pular">Pular</button><button class="botao primario" id="confirmar" ${raw(marcada == null ? 'disabled' : '')}>Confirmar resposta</button>`}
          </div>
        </div>
      `);

      U.$$('[data-alt]', el).forEach(function (b) {
        b.addEventListener('click', function () { if (!respondida) { marcada = +b.dataset.alt; desenhar(); } });
      });
      U.$$('[data-riscar]', el).forEach(function (b) {
        b.addEventListener('click', function () { var i = +b.dataset.riscar; riscadas[i] = !riscadas[i]; if (riscadas[i] && marcada === i) marcada = null; desenhar(); });
      });
      U.$('#fav', el).addEventListener('click', function () { S.alternarFavorita(q.id); desenhar(); });
      var c = U.$('#confirmar', el); if (c) c.addEventListener('click', confirmar);
      var p = U.$('#prox', el); if (p) p.addEventListener('click', proxima);
      var pl = U.$('#pular', el); if (pl) pl.addEventListener('click', function () {
        questoes.push(questoes.splice(idx, 1)[0]);
        marcada = null; riscadas = {}; inicio = Date.now();
        if (questoes.length === resultados.length + 1 && idx >= questoes.length) idx = questoes.length - 1;
        desenhar();
      });
      var an = U.$('#anot', el);
      if (an) an.addEventListener('input', function () {
        if (an.value.trim()) S.estado.anotacoesQuestao[q.id] = an.value; else delete S.estado.anotacoesQuestao[q.id];
        S.salvar();
      });
    }

    function fim() {
      document.removeEventListener('keydown', teclado);
      var ac = resultados.filter(function (r) { return r.ok; }).length;
      var porD = {};
      resultados.forEach(function (r) {
        var x = porD[r.q.d] || (porD[r.q.d] = { a: 0, t: 0 });
        x.t++; if (r.ok) x.a++;
      });
      var erradas = resultados.filter(function (r) { return !r.ok; });
      U.render(el, html`
        <section class="cartao centro">
          ${raw(OAB.charts.anel(ac / resultados.length, { texto: U.pct(ac, resultados.length) + '%', cor: ac / resultados.length >= 0.5 ? '#15803d' : '#b91c1c' }))}
          <h2 style="margin-top:12px">${ac} acertos em ${resultados.length} questões</h2>
          <p class="mudo">${ac / resultados.length >= 0.6 ? 'Excelente! Desempenho acima da margem de segurança.' : ac / resultados.length >= 0.5 ? 'Na média de aprovação — continue firme para criar margem.' : 'Abaixo de 50%: revise o resumo e a lei seca destes tópicos e refaça os erros.'}</p>
        </section>
        <section class="cartao">
          <h3>Por disciplina</h3>
          <table class="tabela"><tbody>
            ${Object.keys(porD).map(function (k) {
              var d = OAB.disciplina(k);
              return html`<tr><td><span class="ponto" style="background:${d ? d.cor : '#666'}"></span> ${d ? d.nome : k}</td><td class="num">${porD[k].a}/${porD[k].t}</td><td class="num">${U.pct(porD[k].a, porD[k].t)}%</td></tr>`;
            })}
          </tbody></table>
        </section>
        ${erradas.length ? html`<section class="cartao">
          <h3>Questões que você errou</h3>
          ${erradas.map(function (r) {
            return html`<div class="tarefa"><div class="info"><strong>${OAB.disciplina(r.q.d) ? OAB.disciplina(r.q.d).sigla : ''} · ${r.q.topico}</strong><br>
              <span class="pequeno">Você marcou ${r.marcada != null ? U.LETRAS[r.marcada] : '—'}; gabarito ${U.LETRAS[r.q.correta]}. ${r.q.fundamento}</span></div></div>`;
          })}
        </section>` : ''}
        <div class="linha" style="margin-top:16px;justify-content:center">
          ${erradas.length ? html`<button class="botao primario" id="refazer">Refazer as ${erradas.length} erradas</button>` : ''}
          <a class="botao" href="${opcoes.voltar ? opcoes.voltar.href : '#/questoes'}">Nova sessão</a>
          <a class="botao" href="#/painel">Painel</a>
        </div>
      `);
      var rf = U.$('#refazer', el);
      if (rf) rf.addEventListener('click', function () {
        OAB.praticar(el, erradas.map(function (r) { return r.q; }), opcoes);
      });
      if (opcoes.aoTerminar) opcoes.aoTerminar(resultados);
    }

    if (!questoes.length) {
      U.render(el, '<div class="vazio">Nenhuma questão encontrada com esses filtros.</div>');
      return function () {};
    }
    desenhar();
    return function () { document.removeEventListener('keydown', teclado); };
  };

  function filtros(el, r) {
    var p = r.params;
    var sel = p.d ? p.d.split(',') : [];
    var est = S.estado;
    var ultimo = est.ultimoFiltro || {};
    var f = {
      disciplinas: sel.length ? sel : (ultimo.disciplinas || []),
      topico: p.t || '',
      situacao: p.sit || ultimo.situacao || 'todas',
      dificuldade: '',
      busca: '',
      quantidade: ultimo.quantidade || 20,
      aleatoria: ultimo.aleatoria !== false
    };
    if (p.d) f.topico = p.t || '';

    function contar() {
      var n = OAB.banco.filtrar(f).length;
      U.$('#contagem-q', el).textContent = U.plural(n, 'questão encontrada', 'questões encontradas');
      U.$('#comecar', el).disabled = !n;
    }

    function topicosDisponiveis() {
      if (f.disciplinas.length !== 1) return [];
      var d = OAB.disciplina(f.disciplinas[0]);
      return d ? d.topicos.map(function (t) { return typeof t === 'string' ? t : t.nome; }) : [];
    }

    function desenhar() {
      var tops = topicosDisponiveis();
      U.render(el, html`
        <section class="cartao">
          <h2>Montar sessão de questões</h2>
          <p class="pequeno mudo">Questões inéditas no estilo FGV, com gabarito comentado e fundamento legal. Selecione nenhuma disciplina para incluir todas.</p>
          <div class="campo">
            <span class="rotulo">Disciplinas</span>
            <div class="linha" style="gap:6px">
              ${OAB.DISCIPLINAS.map(function (d) {
                var on = f.disciplinas.indexOf(d.id) >= 0;
                return html`<button class="botao pequeno" data-d="${d.id}" aria-pressed="${on}" style="${on ? 'background:' + d.cor + ';color:#fff;border-color:' + d.cor : ''}">${d.sigla} <span class="mudo" style="${on ? 'color:#fff' : ''}">${OAB.banco.questoesDe(d.id).length}</span></button>`;
              })}
              <button class="botao pequeno fantasma" id="limpar-d">Limpar</button>
            </div>
          </div>
          <div class="grade grade-4" style="gap:12px">
            <div class="campo"><label for="sit">Situação</label>
              <select id="sit">
                ${[['todas', 'Todas'], ['nao', 'Não resolvidas'], ['erradas', 'Erradas na última tentativa'], ['jaerrei', 'Já errei alguma vez'], ['certas', 'Acertadas'], ['favoritas', 'Favoritas']].map(function (o) {
                  return html`<option value="${o[0]}" ${raw(f.situacao === o[0] ? 'selected' : '')}>${o[1]}</option>`;
                })}
              </select></div>
            <div class="campo"><label for="dif">Dificuldade</label>
              <select id="dif"><option value="">Todas</option><option value="1">Fácil</option><option value="2">Média</option><option value="3">Difícil</option></select></div>
            <div class="campo"><label for="qtd">Quantidade</label>
              <select id="qtd">${[5, 10, 20, 30, 50, 80, 0].map(function (n) { return html`<option value="${n}" ${raw(+f.quantidade === n ? 'selected' : '')}>${n || 'Todas'}</option>`; })}</select></div>
            <div class="campo"><label for="ordem">Ordem</label>
              <select id="ordem"><option value="1" ${raw(f.aleatoria ? 'selected' : '')}>Aleatória</option><option value="0" ${raw(!f.aleatoria ? 'selected' : '')}>Sequencial</option></select></div>
          </div>
          ${tops.length ? html`<div class="campo"><label for="top">Tópico</label>
            <select id="top"><option value="">Todos os tópicos</option>${tops.map(function (t) { return html`<option ${raw(f.topico === t ? 'selected' : '')}>${t}</option>`; })}</select></div>` : ''}
          <div class="campo"><label for="busca">Buscar por palavra-chave</label>
            <input id="busca" type="search" placeholder="Ex.: honorários, prescrição, art. 5º, súmula 331..." value="${f.busca}"></div>
          <div class="linha-entre">
            <span id="contagem-q" class="mudo"></span>
            <button class="botao primario" id="comecar">Começar</button>
          </div>
        </section>
        <div class="grade grade-3" style="margin-top:16px">
          <a class="cartao kpi" href="#/erros" style="text-decoration:none;color:inherit"><div class="rotulo">Caderno de erros</div><div class="valor">${OAB.banco.filtrar({ situacao: 'erradas' }).length}</div><div class="detalhe">refaça o que errou</div></a>
          <a class="cartao kpi" href="#/questoes?sit=favoritas" style="text-decoration:none;color:inherit"><div class="rotulo">Favoritas</div><div class="valor">${Object.keys(S.estado.favoritas).length}</div><div class="detalhe">questões marcadas com ★</div></a>
          <a class="cartao kpi" href="#/config?aba=importar" style="text-decoration:none;color:inherit"><div class="rotulo">Minhas questões</div><div class="valor">${S.estado.questoesUsuario.length}</div><div class="detalhe">importe questões de provas anteriores</div></a>
        </div>
      `);
      U.$$('[data-d]', el).forEach(function (b) {
        b.addEventListener('click', function () {
          var i = f.disciplinas.indexOf(b.dataset.d);
          if (i >= 0) f.disciplinas.splice(i, 1); else f.disciplinas.push(b.dataset.d);
          f.topico = '';
          desenhar();
        });
      });
      U.$('#limpar-d', el).addEventListener('click', function () { f.disciplinas = []; f.topico = ''; desenhar(); });
      U.$('#sit', el).addEventListener('change', function (e) { f.situacao = e.target.value; contar(); });
      U.$('#dif', el).value = f.dificuldade;
      U.$('#dif', el).addEventListener('change', function (e) { f.dificuldade = e.target.value; contar(); });
      U.$('#qtd', el).addEventListener('change', function (e) { f.quantidade = +e.target.value; });
      U.$('#ordem', el).addEventListener('change', function (e) { f.aleatoria = e.target.value === '1'; });
      var top = U.$('#top', el); if (top) top.addEventListener('change', function (e) { f.topico = e.target.value; contar(); });
      U.$('#busca', el).addEventListener('input', function (e) { f.busca = e.target.value; contar(); });
      U.$('#comecar', el).addEventListener('click', comecar);
      contar();
    }

    var limpar = null;
    function comecar() {
      est.ultimoFiltro = { disciplinas: f.disciplinas.slice(), situacao: f.situacao, quantidade: f.quantidade, aleatoria: f.aleatoria };
      S.salvar();
      var lista = OAB.banco.filtrar(f);
      if (f.aleatoria) {
        // prioriza não resolvidas, depois as demais, ambas embaralhadas
        var nao = U.embaralhar(lista.filter(function (q) { return !est.respostas[q.id]; }));
        var sim = U.embaralhar(lista.filter(function (q) { return est.respostas[q.id]; }));
        lista = nao.concat(sim);
      }
      if (f.quantidade) lista = lista.slice(0, f.quantidade);
      limpar = OAB.praticar(el, lista, { voltar: { href: '#/questoes', rotulo: 'Encerrar' } });
    }

    desenhar();
    return function () { if (limpar) limpar(); };
  }

  OAB.views.questoes = { titulo: 'Banco de questões', render: filtros };

  OAB.views.erros = {
    titulo: 'Caderno de erros',
    render: function (el) {
      var erradas = OAB.banco.filtrar({ situacao: 'erradas' });
      var jaErrei = OAB.banco.filtrar({ situacao: 'jaerrei' });
      var porD = {};
      erradas.forEach(function (q) { (porD[q.d] = porD[q.d] || []).push(q); });
      var limpar = null;
      U.render(el, html`
        <div class="aviso">O caderno de erros reúne as questões cuja <strong>última</strong> resposta foi incorreta. Ao acertar, ela sai daqui. Refaça seus erros a cada poucos dias — é a forma mais eficiente de ganhar pontos.</div>
        <div class="grade grade-2" style="margin-top:16px">
          <div class="cartao kpi"><div class="rotulo">Para refazer</div><div class="valor">${erradas.length}</div></div>
          <div class="cartao kpi"><div class="rotulo">Já errei alguma vez</div><div class="valor">${jaErrei.length}</div></div>
        </div>
        ${erradas.length ? html`
          <section class="cartao" style="margin-top:16px">
            <div class="cartao-cabecalho"><h2>Por disciplina</h2><button class="botao primario" id="refazer-tudo">Refazer todas (${erradas.length})</button></div>
            ${OAB.DISCIPLINAS.filter(function (d) { return porD[d.id]; }).map(function (d) {
              return html`<div class="tarefa"><span class="ponto" style="background:${d.cor}"></span><div class="info"><strong>${d.nome}</strong><br><span class="pequeno mudo">${porD[d.id].map(function (q) { return q.topico; }).filter(function (t, i, a) { return a.indexOf(t) === i; }).join(' · ')}</span></div>
                <span class="etiqueta erro">${porD[d.id].length}</span><button class="botao pequeno" data-refazer="${d.id}">Refazer</button></div>`;
            })}
          </section>
          <section class="cartao">
            <h2>Modo leitura</h2>
            <p class="pequeno mudo">Revise rapidamente o gabarito comentado de cada erro.</p>
            ${erradas.map(function (q) {
              var r = S.estado.respostas[q.id];
              return html`<details style="border-bottom:1px solid var(--borda);padding:8px 0">
                <summary><strong>${OAB.disciplina(q.d) ? OAB.disciplina(q.d).sigla : ''}</strong> · ${q.topico} <span class="mudo pequeno">(marcou ${U.LETRAS[r.ultimaMarcada] || '—'}, gabarito ${U.LETRAS[q.correta]})</span></summary>
                <div class="questao" style="font-size:.97rem;margin-top:8px"><div class="enunciado">${q.enunciado}</div>
                <ol type="A">${q.alternativas.map(function (a, i) { return html`<li style="${i === q.correta ? 'color:var(--sucesso);font-weight:600' : ''}">${a}</li>`; })}</ol></div>
                <div class="comentario">${q.comentario}<div class="fundamento">${q.fundamento}</div></div>
              </details>`;
            })}
          </section>` : html`<div class="vazio">Nenhum erro pendente. 🎉 Resolva mais questões no <a href="#/questoes">banco de questões</a>.</div>`}
        <div id="area-pratica"></div>
      `);
      function iniciar(lista) {
        limpar = OAB.praticar(el, U.embaralhar(lista), { voltar: { href: '#/erros', rotulo: 'Encerrar' }, modo: 'erros' });
      }
      var rt = U.$('#refazer-tudo', el); if (rt) rt.addEventListener('click', function () { iniciar(erradas); });
      U.$$('[data-refazer]', el).forEach(function (b) { b.addEventListener('click', function () { iniciar(porD[b.dataset.refazer]); }); });
      return function () { if (limpar) limpar(); };
    }
  };
})();
