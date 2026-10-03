/*
 * Repetição espaçada.
 * - Flashcards: variação do algoritmo SM-2 (SuperMemo 2), com 4 respostas:
 *   0 = Errei, 1 = Difícil, 2 = Bom, 3 = Fácil.
 * - Tópicos do edital: revisões em 1, 7, 15, 30 e 60 dias após o estudo.
 */
(function (global) {
  var OAB = global.OAB = global.OAB || {};
  var U = OAB.util;
  var S = OAB.srs = {};

  S.ROTULOS = ['Errei', 'Difícil', 'Bom', 'Fácil'];
  S.EF_INICIAL = 2.5;
  S.EF_MINIMO = 1.3;
  S.INTERVALO_MAXIMO = 120;

  S.novo = function () {
    return { reps: 0, intervalo: 0, ef: S.EF_INICIAL, vencimento: null, lapsos: 0 };
  };

  /* Retorna um NOVO estado (não altera o recebido). */
  S.responder = function (estado, nota, hoje) {
    var e = Object.assign(S.novo(), estado || {});
    hoje = hoje || U.hoje();
    var intervalo;
    if (nota === 0) {
      e.reps = 0;
      e.lapsos += 1;
      e.ef = Math.max(S.EF_MINIMO, e.ef - 0.2);
      intervalo = 0; // volta ainda hoje
    } else if (nota === 1) {
      e.ef = Math.max(S.EF_MINIMO, e.ef - 0.15);
      intervalo = e.reps === 0 ? 1 : Math.max(e.intervalo + 1, Math.round(e.intervalo * 1.2));
      e.reps += 1;
    } else if (nota === 2) {
      if (e.reps === 0) intervalo = 1;
      else if (e.reps === 1) intervalo = 3;
      else intervalo = Math.max(e.intervalo + 1, Math.round(e.intervalo * e.ef));
      e.reps += 1;
    } else if (nota === 3) {
      if (e.reps === 0) intervalo = 3;
      else if (e.reps === 1) intervalo = 6;
      else intervalo = Math.max(e.intervalo + 2, Math.round(e.intervalo * e.ef * 1.3));
      e.ef = e.ef + 0.15;
      e.reps += 1;
    } else {
      throw new Error('Nota inválida: ' + nota);
    }
    e.intervalo = Math.min(S.INTERVALO_MAXIMO, intervalo);
    e.vencimento = U.somarDias(hoje, e.intervalo);
    e.ultima = hoje;
    return e;
  };

  S.previsao = function (estado, nota) {
    var d = S.responder(estado, nota, '2000-01-01').intervalo;
    if (d === 0) return 'hoje';
    if (d < 30) return d + 'd';
    return Math.round(d / 30) + 'm';
  };

  S.vencido = function (estado, hoje) {
    if (!estado || !estado.vencimento) return true; // cartão novo
    return estado.vencimento <= (hoje || U.hoje());
  };

  /* Revisão espaçada de tópicos */
  S.INTERVALOS_TOPICO = [1, 7, 15, 30, 60];
  S.proximaRevisaoTopico = function (revisoesFeitas, dataBase) {
    if (revisoesFeitas >= S.INTERVALOS_TOPICO.length) return null;
    return U.somarDias(dataBase, S.INTERVALOS_TOPICO[revisoesFeitas]);
  };
})(typeof window !== 'undefined' ? window : globalThis);
