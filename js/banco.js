/* Acesso ao banco de questões e flashcards (oficiais do app + criados pelo usuário). */
(function (global) {
  var OAB = global.OAB = global.OAB || {};
  var U = OAB.util;
  var B = OAB.banco = {};

  function usuario() { return OAB.store ? OAB.store.estado : { questoesUsuario: [], cardsUsuario: [] }; }

  B.todasQuestoes = function () {
    var lista = [];
    OAB.DISCIPLINAS.forEach(function (d) { lista = lista.concat(d.questoesBanco); });
    return lista.concat(usuario().questoesUsuario || []);
  };
  B.questoesDe = function (d) {
    var disc = OAB.disciplina(d);
    var proprias = (usuario().questoesUsuario || []).filter(function (q) { return q.d === d; });
    return (disc ? disc.questoesBanco : []).concat(proprias);
  };
  var indice = null, indiceTam = -1;
  B.questao = function (id) {
    var tam = (usuario().questoesUsuario || []).length;
    OAB.DISCIPLINAS.forEach(function (d) { tam += d.questoesBanco.length; });
    if (!indice || indiceTam !== tam) {
      indice = {};
      B.todasQuestoes().forEach(function (q) { indice[q.id] = q; });
      indiceTam = tam;
    }
    return indice[id] || null;
  };

  B.todosFlashcards = function () {
    var lista = [];
    OAB.DISCIPLINAS.forEach(function (d) { lista = lista.concat(d.flashcards); });
    return lista.concat(usuario().cardsUsuario || []);
  };
  B.flashcardsDe = function (d) {
    if (!d) return B.todosFlashcards();
    var disc = OAB.disciplina(d);
    var proprios = (usuario().cardsUsuario || []).filter(function (c) { return c.d === d; });
    return (disc ? disc.flashcards : []).concat(proprios);
  };

  /*
   * Filtra questões.
   * f = { disciplinas: [ids], topico, dificuldade, situacao: 'todas'|'nao'|'erradas'|'certas'|'favoritas', busca }
   */
  B.filtrar = function (f) {
    var est = usuario();
    var termo = U.normalizar(f.busca || '').trim();
    return B.todasQuestoes().filter(function (q) {
      if (f.disciplinas && f.disciplinas.length && f.disciplinas.indexOf(q.d) < 0) return false;
      if (f.topico && q.topico !== f.topico) return false;
      if (f.dificuldade && q.dificuldade !== +f.dificuldade) return false;
      var r = est.respostas[q.id];
      switch (f.situacao) {
        case 'nao': if (r) return false; break;
        case 'erradas': if (!r || r.ultimaCorreta) return false; break;
        case 'jaerrei': if (!r || r.acertos === r.tentativas) return false; break;
        case 'certas': if (!r || !r.ultimaCorreta) return false; break;
        case 'favoritas': if (!est.favoritas[q.id]) return false; break;
      }
      if (termo) {
        var alvo = U.normalizar(q.enunciado + ' ' + q.alternativas.join(' ') + ' ' + q.topico + ' ' + (q.fundamento || ''));
        if (alvo.indexOf(termo) < 0) return false;
      }
      return true;
    });
  };

  /*
   * Monta um simulado respeitando a distribuição oficial e a ordem do caderno.
   * escala: 1 = 80 questões; 0.5 = 40 questões etc. Prioriza questões inéditas.
   */
  B.montarSimulado = function (escala, rnd) {
    var est = usuario();
    var selecionadas = [];
    var faltas = [];
    OAB.DISCIPLINAS.forEach(function (d) {
      var n = Math.max(1, Math.round(d.questoes * escala));
      var pool = B.questoesDe(d.id);
      var ineditas = U.embaralhar(pool.filter(function (q) { return !est.respostas[q.id]; }), rnd);
      var vistas = U.embaralhar(pool.filter(function (q) { return est.respostas[q.id]; }), rnd);
      var escolhidas = ineditas.concat(vistas).slice(0, n);
      if (escolhidas.length < n) faltas.push(d.nome + ' (' + escolhidas.length + '/' + n + ')');
      selecionadas = selecionadas.concat(escolhidas);
    });
    return { questoes: selecionadas.map(function (q) { return q.id; }), faltas: faltas };
  };
})(typeof window !== 'undefined' ? window : globalThis);
