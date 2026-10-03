#!/usr/bin/env node
/*
 * Gera uma versão do app em arquivo único (HTML + CSS + JS embutidos), no formato
 * aceito pelas páginas publicadas no claude.ai (sem <html>/<head>/<body> próprios).
 * Uso: node tools/build-artifact.js [saida.html]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const saida = process.argv[2] || path.join(raiz, 'dist', 'rumo-oab.html');
const index = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const ler = (f) => fs.readFileSync(path.join(raiz, f), 'utf8');

const titulo = (index.match(/<title>[\s\S]*?<\/title>/) || ['<title>Rumo à OAB</title>'])[0];
const corpo = index.slice(index.indexOf('<body>') + 6, index.indexOf('<script'));
const scripts = [...index.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const iconeSvg = 'data:image/svg+xml;base64,' + Buffer.from(ler('icons/icon.svg')).toString('base64');

const css = ler('css/style.css');
const js = scripts.map((f) => {
  const codigo = ler(f);
  if (/<\/script/i.test(codigo)) throw new Error(`${f} contém "</script"`);
  return `<script>/* ${f} */\n${codigo}\n</script>`;
}).join('\n');

const html = [
  titulo,
  `<style>\n${css}\n</style>`,
  corpo.replace(/src="icons\/icon\.svg"/g, `src="${iconeSvg}"`).trim(),
  js
].join('\n');

fs.mkdirSync(path.dirname(saida), { recursive: true });
fs.writeFileSync(saida, html);
console.log(`Gerado ${saida} (${(html.length / 1024).toFixed(0)} KiB, ${scripts.length} scripts)`);
