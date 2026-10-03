/*
 * Teste de fumaça no navegador (Playwright + Chromium).
 * Uso: inicie um servidor estático na raiz (ex.: npx http-server -p 8765 .) e rode
 *   node tools/e2e.js [url-base] [pasta-de-capturas]
 */
'use strict';
let playwright;
try { playwright = require('playwright'); } catch (e) { playwright = require('/opt/node22/lib/node_modules/playwright'); }
const assert = require('assert');

const BASE = process.argv[2] || 'http://127.0.0.1:8765/';
const SHOTS = process.argv[3] || null;
const ROTAS = ['painel', 'disciplinas', 'disciplinas/etica', 'disciplinas/civil?aba=resumo', 'disciplinas/ambiental?aba=legislacao',
  'cronograma', 'pomodoro', 'questoes', 'simulado', 'flashcards', 'revisoes', 'erros', 'estatisticas', 'estrategia', 'exame', 'config'];

(async () => {
  const browser = await playwright.chromium.launch();
  const erros = [];
  for (const vp of [{ width: 1280, height: 860, nome: 'desktop' }, { width: 390, height: 844, nome: 'mobile' }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    page.on('pageerror', (e) => erros.push(`[${vp.nome}] pageerror: ${e.message}`));
    page.on('console', (m) => { if (m.type() === 'error') erros.push(`[${vp.nome}] console: ${m.text()}`); });
    page.on('dialog', (d) => d.accept());
    await page.goto(BASE + '#/painel');
    await page.waitForSelector('#conteudo .cartao');

    for (const r of ROTAS) {
      await page.goto(BASE + '#/' + r);
      await page.waitForTimeout(150);
      const txt = await page.textContent('#conteudo');
      assert.ok(!/Ocorreu um erro/.test(txt), `rota ${r} exibiu erro: ${txt.slice(0, 200)}`);
      const larg = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (larg > 1) erros.push(`[${vp.nome}] rolagem horizontal de ${larg}px em #/${r}`);
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/${vp.nome}-${r.replace(/[/?=]/g, '_')}.png`, fullPage: vp.nome === 'desktop' });
    }

    if (vp.nome === 'desktop') {
      // Sessão de questões: responder 3 e conferir registro
      await page.goto(BASE + '#/questoes?d=etica');
      await page.click('#comecar');
      for (let i = 0; i < 3; i++) {
        await page.click('[data-alt="0"]');
        await page.click('#confirmar');
        await page.waitForSelector('.comentario');
        await page.click('#prox');
      }
      const resp = await page.evaluate(() => Object.keys(OAB.store.estado.respostas).length);
      assert.strictEqual(resp, 3, 'três respostas registradas');

      // Edital: marcar tópico como estudado gera revisão
      await page.goto(BASE + '#/disciplinas/etica');
      await page.click('[data-topico="0"]');
      await page.click('[data-topico="0"]');
      const rev = await page.evaluate(() => OAB.store.estado.topicos['etica#0'].proximaRevisao);
      assert.ok(rev, 'revisão agendada');

      // Flashcards: estudar 2 cartões
      await page.goto(BASE + '#/flashcards');
      await page.click('[data-estudar="etica"]');
      for (let i = 0; i < 2; i++) {
        await page.click('#mostrar');
        await page.click('[data-nota="2"]');
      }
      const fc = await page.evaluate(() => Object.keys(OAB.store.estado.flashcards).length);
      assert.strictEqual(fc, 2, 'dois flashcards agendados');

      // Simulado rápido: iniciar, responder, finalizar
      await page.goto(BASE + '#/simulado');
      await page.click('[data-formato="2"]');
      await page.waitForSelector('.folha');
      await page.click('[data-alt="1"]');
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('c');
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/desktop-simulado-fazendo.png` });
      await page.click('#finalizar');
      await page.waitForSelector('.anel');
      const sim = await page.evaluate(() => OAB.store.estado.simulados.length);
      assert.strictEqual(sim, 1, 'simulado salvo');
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/desktop-simulado-resultado.png`, fullPage: true });

      // Cronograma: alterar disponibilidade e recalcular
      await page.goto(BASE + '#/cronograma');
      await page.fill('#h1', '4');
      await page.click('#form-disp button[type=submit]');
      const min = await page.evaluate(() => OAB.store.estado.perfil.minutosPorDiaSemana[1]);
      assert.strictEqual(min, 240);

      // Importação de questões
      await page.goto(BASE + '#/config');
      await page.fill('#json-q', JSON.stringify([{ disciplina: 'civil', enunciado: 'Teste?', alternativas: ['a', 'b', 'c', 'd'], correta: 'C' }]));
      await page.click('#btn-importar-q');
      const imp = await page.evaluate(() => OAB.store.estado.questoesUsuario.length);
      assert.strictEqual(imp, 1, 'questão importada');

      // Persistência após recarregar
      await page.reload();
      await page.waitForSelector('#conteudo .cartao');
      const persist = await page.evaluate(() => Object.keys(OAB.store.estado.respostas).length);
      assert.ok(persist >= 3, 'progresso persiste após recarregar');
      if (SHOTS) {
        await page.goto(BASE + '#/painel');
        await page.waitForTimeout(150);
        await page.screenshot({ path: `${SHOTS}/desktop-painel-com-dados.png`, fullPage: true });
        await page.goto(BASE + '#/estatisticas');
        await page.waitForTimeout(150);
        await page.screenshot({ path: `${SHOTS}/desktop-estatisticas-com-dados.png`, fullPage: true });
      }
    }
    await ctx.close();
  }
  await browser.close();
  if (erros.length) {
    console.error('Problemas encontrados:\n- ' + erros.join('\n- '));
    process.exit(1);
  }
  console.log('E2E OK — todas as telas e fluxos principais funcionaram.');
})().catch((e) => { console.error(e); process.exit(1); });
