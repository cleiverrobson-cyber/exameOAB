/*
 * Gerador de cronograma de estudos até a data da prova.
 * Função pura: OAB.planner.gerar(opcoes) -> [{ data, fase, blocos: [...] }]
 *
 * Distribui o tempo entre as disciplinas proporcionalmente ao número de
 * questões na prova, ajustado pelo desempenho do estudante (disciplinas com
 * aproveitamento baixo recebem mais tempo) e pelo avanço no edital.
 */
(function (global) {
  var OAB = global.OAB = global.OAB || {};
  var U = OAB.util;
  var P = OAB.planner = {};

  P.FASES = {
    base: { nome: 'Base: teoria + questões', cor: '#2f55c8' },
    revisao: { nome: 'Revisão + simulados', cor: '#b45309' },
    final: { nome: 'Reta final', cor: '#15803d' },
    prova: { nome: 'Dia da prova', cor: '#7c3aed' }
  };
  P.BLOCO_MIN = 50;

  P.peso = function (d, fase) {
    var fator = 1;
    if (typeof d.desempenho === 'number') {
      fator = Math.min(1.6, Math.max(0.6, 1 + (0.7 - d.desempenho)));
    }
    if (fase === 'base' && typeof d.progresso === 'number') {
      fator *= 1 + (1 - d.progresso) * 0.4;
    }
    return d.questoes * fator;
  };

  P.fases = function (hoje, dataProva) {
    var total = U.diffDias(hoje, dataProva);
    var finalDias = Math.min(3, Math.max(0, total - 1));
    var restante = total - finalDias;
    var revisaoDias = Math.min(35, Math.round(restante * 0.4));
    return {
      total: total,
      inicioRevisao: U.somarDias(dataProva, -(finalDias + revisaoDias)),
      inicioFinal: U.somarDias(dataProva, -finalDias)
    };
  };

  P.gerar = function (op) {
    var hoje = op.hoje;
    var dataProva = op.dataProva;
    var minutosDia = op.minutosPorDiaSemana; // [dom, seg, ..., sab]
    var disciplinas = op.disciplinas;
    var diaSimulado = op.diaSimulado == null ? 0 : op.diaSimulado; // domingo
    var f = P.fases(hoje, dataProva);
    var alocado = {};
    disciplinas.forEach(function (d) { alocado[d.id] = 0; });
    var dias = [];

    function escolher(fase, jaHoje) {
      var pesos = disciplinas.map(function (d) { return P.peso(d, fase); });
      var soma = pesos.reduce(function (a, b) { return a + b; }, 0);
      var totalAloc = 0;
      disciplinas.forEach(function (d) { totalAloc += alocado[d.id]; });
      var melhor = null, melhorDef = -Infinity;
      disciplinas.forEach(function (d, i) {
        var alvo = (pesos[i] / soma) * (totalAloc + P.BLOCO_MIN);
        var def = alvo - alocado[d.id];
        if (jaHoje.indexOf(d.id) >= 0) def -= 1e6; // evita repetir no mesmo dia
        if (def > melhorDef) { melhorDef = def; melhor = d; }
      });
      return melhor;
    }

    for (var data = hoje; data <= dataProva; data = U.somarDias(data, 1)) {
      var fase = data === dataProva ? 'prova' : data >= f.inicioFinal ? 'final' : data >= f.inicioRevisao ? 'revisao' : 'base';
      var min = minutosDia[U.diaSemana(data)] || 0;
      var blocos = [];
      var add = function (tipo, minutos, titulo, d) {
        blocos.push({ id: data + '#' + blocos.length, tipo: tipo, minutos: minutos, titulo: titulo, d: d ? d.id : null });
      };

      if (fase === 'prova') {
        add('prova', 300, 'Prova objetiva — 13h às 18h (horário de Brasília). Leve documento oficial com foto e caneta de material transparente.');
      } else if (fase === 'final') {
        var restam = U.diffDias(data, dataProva);
        if (restam === 1) {
          add('revisao', Math.min(min || 60, 90), 'Revisão leve: resumos de Ética e flashcards marcados. Descanse, separe documentos e confira o local de prova.');
        } else if (min > 0) {
          var etica = disciplinas.filter(function (d) { return d.id === 'etica'; })[0];
          add('revisao', Math.min(90, min), 'Revisão final de Ética Profissional (8 questões)', etica);
          var sobra = min - Math.min(90, min);
          if (sobra >= 30) add('flashcards', Math.min(45, sobra), 'Flashcards vencidos + caderno de erros');
          sobra -= Math.min(45, sobra);
          var jaF = ['etica'];
          while (sobra >= 40) {
            var dF = escolher('final', jaF);
            jaF.push(dF.id);
            var mF = Math.min(P.BLOCO_MIN, sobra);
            add('revisao', mF, 'Revisão de resumos e lei seca', dF);
            alocado[dF.id] += mF;
            sobra -= mF;
          }
        }
      } else if (min > 0) {
        var restante = min;
        if (fase === 'revisao' && U.diaSemana(data) === diaSimulado) {
          if (min >= 300) {
            add('simulado', 300, 'Simulado completo: 80 questões em 5 horas');
            restante -= 300;
          } else if (min >= 150) {
            add('simulado', 150, 'Simulado parcial: 40 questões em 2h30');
            restante -= 150;
          }
          if (restante >= 30) {
            add('correcao', Math.min(60, restante), 'Correção do simulado: leia os comentários e registre os erros');
            restante -= Math.min(60, restante);
          }
        }
        if (restante >= 60) {
          add('flashcards', 15, 'Flashcards (repetição espaçada) e revisões do dia');
          restante -= 15;
        }
        var ja = [];
        while (restante >= 25) {
          var d = escolher(fase, ja);
          ja.push(d.id);
          var m = restante < P.BLOCO_MIN + 25 ? restante : P.BLOCO_MIN;
          var titulo = fase === 'base'
            ? 'Teoria (resumo + lei seca) e questões'
            : 'Revisão dirigida + bateria de questões';
          add(fase === 'base' ? 'estudo' : 'revisao', m, titulo, d);
          alocado[d.id] += m;
          restante -= m;
        }
      }
      if (!blocos.length) add('folga', 0, 'Folga — descanso também faz parte do plano');
      dias.push({ data: data, fase: fase, blocos: blocos });
    }
    return dias;
  };

  P.resumoPorDisciplina = function (dias) {
    var tot = {};
    dias.forEach(function (dia) {
      dia.blocos.forEach(function (b) {
        if (b.d) tot[b.d] = (tot[b.d] || 0) + b.minutos;
      });
    });
    return tot;
  };
})(typeof window !== 'undefined' ? window : globalThis);
