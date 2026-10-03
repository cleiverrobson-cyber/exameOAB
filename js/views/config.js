/* Configurações, backup e importação de questões. */
(function () {
  var OAB = window.OAB, U = OAB.util, S = OAB.store, html = U.html, raw = U.raw;

  var EXEMPLO = JSON.stringify([{
    disciplina: 'etica',
    topico: 'Honorários advocatícios',
    enunciado: 'Texto do enunciado...',
    alternativas: ['Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa D'],
    correta: 'B',
    comentario: 'Por que a B está correta...',
    fundamento: 'Art. 22 da Lei 8.906/1994',
    fonte: 'XXXVIII Exame — questão 3 (opcional)'
  }], null, 2);

  /* Converte e valida questões importadas. Retorna { ok: [...], erros: [...] } */
  OAB.importarQuestoes = function (lista) {
    var ok = [], erros = [];
    if (!Array.isArray(lista)) return { ok: ok, erros: ['O arquivo deve conter uma lista (array) de questões.'] };
    lista.forEach(function (q, i) {
      var n = 'Item ' + (i + 1) + ': ';
      var d = OAB.disciplina(q.disciplina || q.d);
      if (!d) return erros.push(n + 'disciplina inválida (use um id como "civil", "etica", "penal").');
      if (!q.enunciado || !Array.isArray(q.alternativas) || q.alternativas.length !== 4) return erros.push(n + 'precisa de enunciado e exatamente 4 alternativas.');
      var c = typeof q.correta === 'string' ? 'ABCD'.indexOf(q.correta.trim().toUpperCase()) : q.correta;
      if (!(c >= 0 && c <= 3)) return erros.push(n + 'campo "correta" deve ser A, B, C, D (ou 0 a 3).');
      ok.push({
        id: U.uid('usr-q'), d: d.id, topico: q.topico || 'Questões importadas', dificuldade: [1, 2, 3].indexOf(q.dificuldade) >= 0 ? q.dificuldade : 2,
        enunciado: String(q.enunciado), alternativas: q.alternativas.map(String), correta: c,
        comentario: q.comentario || 'Sem comentário.', fundamento: (q.fundamento || '') + (q.fonte ? ' · Fonte: ' + q.fonte : ''), propria: true
      });
    });
    return { ok: ok, erros: erros };
  };

  OAB.views.config = {
    titulo: 'Configurações',
    render: function (el, r) {
      var est = S.estado;
      var p = est.perfil;
      U.render(el, html`
        ${S.armazenamentoOk() ? '' : html`<div class="aviso erro">Seu navegador está bloqueando o armazenamento local (modo privado?). O progresso não será salvo — exporte um backup antes de fechar.</div>`}
        <div class="grade grade-2">
          <section class="cartao">
            <h2>Perfil</h2>
            <form id="perfil">
              <div class="campo"><label for="nome">Seu nome</label><input id="nome" type="text" value="${p.nome}" placeholder="Como quer ser chamado"></div>
              <div class="campo"><label for="meta">Meta de questões por dia</label><input id="meta" type="number" min="5" max="300" value="${p.metaQuestoesDia}"></div>
              <div class="campo"><label for="tema">Tema</label>
                <select id="tema">${[['auto', 'Automático (do sistema)'], ['light', 'Claro'], ['dark', 'Escuro']].map(function (o) { return html`<option value="${o[0]}" ${raw(p.tema === o[0] ? 'selected' : '')}>${o[1]}</option>`; })}</select></div>
              <button class="botao primario" type="submit">Salvar</button>
            </form>
          </section>
          <section class="cartao">
            <h2>Backup do progresso</h2>
            <p class="pequeno mudo">Seu progresso fica salvo neste navegador. Exporte um backup regularmente e importe-o para continuar em outro aparelho.</p>
            <div class="linha">
              <button class="botao primario" id="exportar">Exportar backup (.json)</button>
              <label class="botao">Importar backup<input type="file" id="importar" accept=".json,application/json" hidden></label>
            </div>
            <h3 style="margin-top:18px">Zona de perigo</h3>
            <button class="botao perigo" id="zerar">Apagar todo o progresso</button>
          </section>
        </div>

        <section class="cartao" id="importar-questoes" style="margin-top:16px">
          <h2>Importar questões (provas anteriores ou suas)</h2>
          <p class="pequeno">Treine com questões reais de exames anteriores (disponíveis no site da <a href="https://oab.fgv.br/" target="_blank" rel="noopener">FGV</a>) ou com questões que você mesmo criar. Importe um arquivo JSON com o formato abaixo. As questões importadas entram no banco, nos filtros, no caderno de erros e nos simulados.</p>
          <p class="pequeno mudo">IDs de disciplina: ${OAB.DISCIPLINAS.map(function (d) { return d.id; }).join(', ')}.</p>
          <details><summary class="pequeno">Ver formato de exemplo</summary><pre style="white-space:pre-wrap;font-size:.8rem;background:var(--superficie-2);padding:10px;border-radius:8px">${EXEMPLO}</pre></details>
          <div class="campo" style="margin-top:10px"><label for="json-q">Cole o JSON aqui</label><textarea id="json-q" placeholder="[ { &quot;disciplina&quot;: &quot;civil&quot;, ... } ]"></textarea></div>
          <div class="linha">
            <button class="botao primario" id="btn-importar-q">Importar questões coladas</button>
            <label class="botao">Escolher arquivo .json<input type="file" id="arq-q" accept=".json,application/json" hidden></label>
            ${est.questoesUsuario.length ? html`<button class="botao perigo" id="apagar-q">Remover minhas ${est.questoesUsuario.length} questões</button>` : ''}
          </div>
          <div id="res-import" style="margin-top:10px"></div>
        </section>

        <section class="cartao">
          <h2>Sobre o conteúdo</h2>
          <p class="pequeno">As questões deste app são <strong>inéditas e autorais</strong>, elaboradas no estilo da FGV com base na legislação vigente na data de publicação do edital (${U.fmtData(OAB.EXAME.dataCorteLegislacao, true)}), em súmulas e em teses consolidadas, sempre com o fundamento indicado. Os resumos são materiais de revisão. Apesar do cuidado na elaboração, podem conter imprecisões: confira sempre a lei seca (links em cada disciplina) e, havendo divergência, prevalece o texto oficial.</p>
          <p class="pequeno mudo">Banco atual: ${OAB.banco.todasQuestoes().length} questões e ${OAB.banco.todosFlashcards().length} flashcards. Aplicativo offline: depois de aberto uma vez (via https), funciona sem internet e pode ser instalado na tela inicial.</p>
        </section>
      `);

      U.$('#perfil', el).addEventListener('submit', function (e) {
        e.preventDefault();
        p.nome = U.$('#nome', el).value.trim();
        p.metaQuestoesDia = Math.max(5, +U.$('#meta', el).value || 30);
        p.tema = U.$('#tema', el).value;
        S.salvar();
        OAB.aplicarTema();
        U.toast('Perfil salvo.');
      });
      U.$('#exportar', el).addEventListener('click', function () {
        U.baixar('rumo-oab-backup-' + U.hoje() + '.json', S.exportar());
      });
      U.$('#importar', el).addEventListener('change', function (e) {
        var f = e.target.files[0];
        if (!f) return;
        f.text().then(function (t) {
          if (!U.confirmar('Importar este backup substituirá o progresso atual deste navegador. Continuar?')) return;
          try { S.importar(t); OAB.aplicarTema(); U.toast('Backup importado!'); OAB.recarregarTela(); }
          catch (err) { U.toast('Erro: ' + err.message, 5000); }
        });
      });
      U.$('#zerar', el).addEventListener('click', function () {
        if (U.confirmar('Apagar TODO o progresso (respostas, simulados, flashcards, cronograma)? Esta ação não pode ser desfeita.') &&
            U.confirmar('Tem certeza? Recomendamos exportar um backup antes.')) {
          S.redefinir(); OAB.aplicarTema(); U.toast('Progresso apagado.'); OAB.ir('#/painel');
        }
      });

      function importarTexto(t) {
        var box = U.$('#res-import', el);
        try {
          var r = OAB.importarQuestoes(JSON.parse(t));
          est.questoesUsuario = est.questoesUsuario.concat(r.ok);
          S.salvar();
          U.render(box, html`<div class="aviso ${r.erros.length ? 'alerta' : 'sucesso'}">${r.ok.length} questão(ões) importada(s).${r.erros.length ? html`<ul>${r.erros.slice(0, 20).map(function (e) { return html`<li>${e}</li>`; })}</ul>` : ''}</div>`);
        } catch (err) {
          U.render(box, html`<div class="aviso erro">JSON inválido: ${err.message}</div>`);
        }
      }
      U.$('#btn-importar-q', el).addEventListener('click', function () { importarTexto(U.$('#json-q', el).value); });
      U.$('#arq-q', el).addEventListener('change', function (e) { var f = e.target.files[0]; if (f) f.text().then(importarTexto); });
      var ap = U.$('#apagar-q', el);
      if (ap) ap.addEventListener('click', function () {
        if (!U.confirmar('Remover todas as questões importadas/criadas por você?')) return;
        est.questoesUsuario = [];
        S.salvar();
        OAB.recarregarTela();
      });
      if (r && r.params.aba === 'importar') setTimeout(function () { U.$('#importar-questoes', el).scrollIntoView({ block: 'start' }); }, 50);
    }
  };
})();
