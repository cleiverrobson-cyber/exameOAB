#!/usr/bin/env node
/*
 * Valida a integridade do conteúdo (data/edital.js + data/disciplinas/*.js).
 * Uso: node tools/validate.js [id-da-disciplina ...]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const ctx = { window: {} };
ctx.window.window = ctx.window;
vm.createContext(ctx.window);

function carregar(arquivo) {
  const codigo = fs.readFileSync(arquivo, 'utf8');
  vm.runInContext(codigo, ctx.window, { filename: arquivo });
}

carregar(path.join(raiz, 'data/edital.js'));
const dir = path.join(raiz, 'data/disciplinas');
const arquivos = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort() : [];
const erros = [];
for (const f of arquivos) {
  try {
    carregar(path.join(dir, f));
  } catch (e) {
    erros.push(`${f}: ${e.message}`);
  }
}

const OAB = ctx.window.OAB;
const filtro = process.argv.slice(2);
const ids = new Set();
const minimos = { questoesPorPeso: 3, questoesMin: 10, flashcardsMin: 10, topicosMin: 5 };
let totalQ = 0;
let totalF = 0;
const linhas = [];

function texto(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

for (const d of OAB.DISCIPLINAS) {
  if (filtro.length && !filtro.includes(d.id)) continue;
  const p = `[${d.id}]`;
  if (!arquivos.includes(`${d.id}.js`)) {
    erros.push(`${p} arquivo data/disciplinas/${d.id}.js ausente`);
    continue;
  }
  if (!Array.isArray(d.topicos) || d.topicos.length < minimos.topicosMin) erros.push(`${p} topicos insuficientes`);
  if (!Array.isArray(d.resumo) || d.resumo.length === 0) erros.push(`${p} resumo vazio`);
  d.resumo.forEach((r, i) => {
    if (!texto(r.titulo) || !Array.isArray(r.itens) || r.itens.length === 0 || !r.itens.every(texto)) {
      erros.push(`${p} resumo[${i}] inválido (titulo + itens[] de strings)`);
    }
  });
  if (!Array.isArray(d.legislacao) || d.legislacao.length === 0) erros.push(`${p} legislacao vazia`);
  d.legislacao.forEach((l, i) => {
    if (!texto(l.nome) || !/^https:\/\//.test(l.url || '')) erros.push(`${p} legislacao[${i}] precisa de nome e url https`);
  });
  if (!Array.isArray(d.dicas) || d.dicas.length === 0 || !d.dicas.every(texto)) erros.push(`${p} dicas inválidas`);

  const minQ = Math.max(minimos.questoesMin, d.questoes * minimos.questoesPorPeso);
  if (d.questoesBanco.length < minQ) erros.push(`${p} ${d.questoesBanco.length} questões (mínimo ${minQ})`);
  const nomesTopicos = new Set(d.topicos.map((t) => (typeof t === 'string' ? t : t.nome)));
  d.topicos.forEach((t, i) => {
    if (typeof t !== 'string' && (!texto(t.nome) || ![1, 2, 3].includes(t.relevancia))) erros.push(`${p} topicos[${i}] precisa de nome e relevancia 1..3`);
  });
  const contagem = [0, 0, 0, 0];
  const enunciados = new Set();
  d.questoesBanco.forEach((q, i) => {
    const qp = `${p} questão ${q.id || '#' + i}`;
    if (!texto(q.id) || !q.id.startsWith(d.id + '-')) erros.push(`${qp}: id deve começar com "${d.id}-"`);
    if (ids.has(q.id)) erros.push(`${qp}: id duplicado`);
    ids.add(q.id);
    if (!texto(q.topico)) erros.push(`${qp}: topico ausente`);
    else if (!nomesTopicos.has(q.topico)) erros.push(`${qp}: topico "${q.topico}" não consta da lista de topicos`);
    if (!texto(q.enunciado)) erros.push(`${qp}: enunciado ausente`);
    if (enunciados.has(q.enunciado)) erros.push(`${qp}: enunciado duplicado`);
    enunciados.add(q.enunciado);
    if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4 || !q.alternativas.every(texto)) {
      erros.push(`${qp}: precisa de exatamente 4 alternativas (strings, sem letra inicial)`);
    } else {
      if (q.alternativas.some((a) => /^\s*\(?[A-Da-d][).]\s/.test(a))) erros.push(`${qp}: não prefixe alternativas com letras`);
      if (new Set(q.alternativas).size !== 4) erros.push(`${qp}: alternativas repetidas`);
    }
    if (![0, 1, 2, 3].includes(q.correta)) erros.push(`${qp}: correta deve ser 0..3`);
    else contagem[q.correta]++;
    if (!texto(q.comentario) || q.comentario.length < 60) erros.push(`${qp}: comentário ausente ou curto demais`);
    if (!texto(q.fundamento)) erros.push(`${qp}: fundamento ausente`);
    if (![1, 2, 3].includes(q.dificuldade)) erros.push(`${qp}: dificuldade deve ser 1, 2 ou 3`);
  });
  if (d.questoesBanco.length >= 8) {
    const maxFrac = Math.max(...contagem) / d.questoesBanco.length;
    if (maxFrac > 0.4) erros.push(`${p} gabarito desbalanceado (A/B/C/D = ${contagem.join('/')})`);
  }

  if (d.flashcards.length < minimos.flashcardsMin) erros.push(`${p} ${d.flashcards.length} flashcards (mínimo ${minimos.flashcardsMin})`);
  d.flashcards.forEach((f, i) => {
    const fp = `${p} flashcard ${f.id || '#' + i}`;
    if (!texto(f.id) || !f.id.startsWith(d.id + '-f')) erros.push(`${fp}: id deve começar com "${d.id}-f"`);
    if (ids.has(f.id)) erros.push(`${fp}: id duplicado`);
    ids.add(f.id);
    if (!texto(f.frente) || !texto(f.verso)) erros.push(`${fp}: frente/verso ausentes`);
  });

  totalQ += d.questoesBanco.length;
  totalF += d.flashcards.length;
  linhas.push(`${d.id.padEnd(17)} peso ${String(d.questoes).padStart(2)} | questões ${String(d.questoesBanco.length).padStart(3)} (A/B/C/D ${contagem.join('/')}) | flashcards ${String(d.flashcards.length).padStart(3)} | tópicos ${d.topicos.length}`);
}

console.log(linhas.join('\n'));
console.log(`\nTotal: ${totalQ} questões, ${totalF} flashcards`);
if (erros.length) {
  console.error(`\n${erros.length} problema(s):\n- ` + erros.join('\n- '));
  process.exit(1);
}
console.log('OK — conteúdo válido.');
