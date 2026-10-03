/* Testes das funções puras: npm test */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function carregar(...arquivos) {
  const ctx = { console };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  for (const a of arquivos) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', a), 'utf8'), ctx, { filename: a });
  return ctx.OAB;
}

const OAB = carregar('data/edital.js', 'js/util.js', 'js/srs.js', 'js/planner.js');
const U = OAB.util;

test('distribuição oficial soma 80 questões em 20 disciplinas, na ordem do caderno', () => {
  assert.strictEqual(OAB.DISCIPLINAS.length, 20);
  assert.strictEqual(OAB.DISCIPLINAS.reduce((s, d) => s + d.questoes, 0), 80);
  assert.deepStrictEqual(Array.from(OAB.disciplina('etica').faixa), [1, 8]);
  assert.deepStrictEqual(Array.from(OAB.disciplina('financeiro').faixa), [23, 24]);
  assert.deepStrictEqual(Array.from(OAB.disciplina('previdenciario').faixa), [69, 70]);
  assert.deepStrictEqual(Array.from(OAB.disciplina('processotrabalho').faixa), [76, 80]);
});

test('datas: soma e diferença de dias atravessando a virada do ano', () => {
  assert.strictEqual(U.somarDias('2026-12-30', 3), '2027-01-02');
  assert.strictEqual(U.diffDias('2026-10-03', '2027-01-10'), 99);
  assert.strictEqual(U.diaSemana('2027-01-10'), 0); // domingo
});

test('SM-2: progressão de intervalos e lapsos', () => {
  let e = OAB.srs.responder(null, 2, '2026-10-03');
  assert.strictEqual(e.intervalo, 1);
  assert.strictEqual(e.vencimento, '2026-10-04');
  e = OAB.srs.responder(e, 2, '2026-10-04');
  assert.strictEqual(e.intervalo, 3);
  e = OAB.srs.responder(e, 2, '2026-10-07');
  assert.ok(e.intervalo >= 7, 'terceiro acerto multiplica pelo fator de facilidade');
  const lapso = OAB.srs.responder(e, 0, '2026-10-20');
  assert.strictEqual(lapso.intervalo, 0);
  assert.strictEqual(lapso.reps, 0);
  assert.strictEqual(lapso.lapsos, 1);
  assert.ok(lapso.ef < e.ef);
  assert.ok(OAB.srs.responder(null, 3, '2026-10-03').intervalo > OAB.srs.responder(null, 1, '2026-10-03').intervalo);
  assert.throws(() => OAB.srs.responder(null, 7, '2026-10-03'));
});

test('SM-2: fator de facilidade nunca fica abaixo de 1,3', () => {
  let e = null;
  for (let i = 0; i < 20; i++) e = OAB.srs.responder(e, 0, '2026-10-03');
  assert.strictEqual(e.ef, OAB.srs.EF_MINIMO);
});

test('revisão de tópicos: 1, 7, 15, 30 e 60 dias', () => {
  assert.strictEqual(OAB.srs.proximaRevisaoTopico(0, '2026-10-03'), '2026-10-04');
  assert.strictEqual(OAB.srs.proximaRevisaoTopico(1, '2026-10-04'), '2026-10-11');
  assert.strictEqual(OAB.srs.proximaRevisaoTopico(5, '2026-10-04'), null);
});

function planoPadrao(extra) {
  return OAB.planner.gerar(Object.assign({
    hoje: '2026-10-03',
    dataProva: '2027-01-10',
    minutosPorDiaSemana: [300, 180, 180, 180, 180, 180, 300],
    diaSimulado: 0,
    disciplinas: OAB.DISCIPLINAS.map((d) => ({ id: d.id, questoes: d.questoes, desempenho: null, progresso: 0 }))
  }, extra || {}));
}

test('cronograma cobre todos os dias até a prova e termina no dia da prova', () => {
  const dias = planoPadrao();
  assert.strictEqual(dias.length, 100);
  assert.strictEqual(dias[0].data, '2026-10-03');
  const ultimo = dias[dias.length - 1];
  assert.strictEqual(ultimo.data, '2027-01-10');
  assert.strictEqual(ultimo.fase, 'prova');
  assert.strictEqual(dias[dias.length - 2].fase, 'final');
});

test('cronograma respeita a carga diária e não repete disciplina no mesmo dia', () => {
  const dias = planoPadrao();
  for (const dia of dias.filter((d) => d.fase === 'base' || d.fase === 'revisao')) {
    const total = dia.blocos.reduce((s, b) => s + b.minutos, 0);
    const disp = [300, 180, 180, 180, 180, 180, 300][U.diaSemana(dia.data)];
    assert.ok(total <= disp, `${dia.data}: ${total} > ${disp}`);
    const ds = dia.blocos.filter((b) => b.d).map((b) => b.d);
    assert.strictEqual(new Set(ds).size, ds.length, `${dia.data} repete disciplina`);
  }
});

test('cronograma: simulados semanais na fase de revisão e tempo proporcional ao peso', () => {
  const dias = planoPadrao();
  const sims = dias.filter((d) => d.blocos.some((b) => b.tipo === 'simulado'));
  assert.ok(sims.length >= 4, 'ao menos 4 simulados');
  assert.ok(sims.every((d) => d.fase === 'revisao' && U.diaSemana(d.data) === 0));
  const tot = OAB.planner.resumoPorDisciplina(dias);
  assert.ok(tot.etica > tot.filosofia * 2.5, 'Ética (8) recebe bem mais tempo que Filosofia (2)');
  assert.ok(tot.civil > tot.empresarial, 'Civil (6) > Empresarial (4)');
  for (const d of OAB.DISCIPLINAS) assert.ok(tot[d.id] > 0, d.id + ' sem tempo');
});

test('cronograma: baixo desempenho aumenta o tempo da disciplina', () => {
  const base = OAB.planner.resumoPorDisciplina(planoPadrao());
  const disciplinas = OAB.DISCIPLINAS.map((d) => ({ id: d.id, questoes: d.questoes, desempenho: d.id === 'penal' ? 0.2 : 0.8, progresso: 0 }));
  const ajustado = OAB.planner.resumoPorDisciplina(planoPadrao({ disciplinas }));
  assert.ok(ajustado.penal > base.penal);
});

test('cronograma com zero horas gera apenas folgas antes da reta final', () => {
  const dias = planoPadrao({ minutosPorDiaSemana: [0, 0, 0, 0, 0, 0, 0] });
  assert.ok(dias.filter((d) => d.fase === 'base').every((d) => d.blocos.length === 1 && d.blocos[0].tipo === 'folga'));
});

test('conteúdo das disciplinas passa no validador', () => {
  const { execFileSync } = require('child_process');
  const saida = execFileSync('node', [path.join(__dirname, '..', 'tools', 'validate.js')], { encoding: 'utf8' });
  assert.match(saida, /OK — conteúdo válido/);
});
