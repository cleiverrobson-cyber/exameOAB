/* Service worker: deixa o app disponível offline. Altere VERSAO a cada publicação. */
var VERSAO = 'rumo-oab-v1';
var ARQUIVOS = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png',
  'data/edital.js', 'data/estrategia.js',
  'data/disciplinas/etica.js', 'data/disciplinas/filosofia.js', 'data/disciplinas/constitucional.js',
  'data/disciplinas/humanos.js', 'data/disciplinas/eleitoral.js', 'data/disciplinas/internacional.js',
  'data/disciplinas/financeiro.js', 'data/disciplinas/tributario.js', 'data/disciplinas/administrativo.js',
  'data/disciplinas/ambiental.js', 'data/disciplinas/civil.js', 'data/disciplinas/eca.js',
  'data/disciplinas/consumidor.js', 'data/disciplinas/empresarial.js', 'data/disciplinas/processocivil.js',
  'data/disciplinas/penal.js', 'data/disciplinas/processopenal.js', 'data/disciplinas/previdenciario.js',
  'data/disciplinas/trabalho.js', 'data/disciplinas/processotrabalho.js',
  'js/util.js', 'js/srs.js', 'js/planner.js', 'js/store.js', 'js/banco.js', 'js/charts.js', 'js/app.js',
  'js/views/painel.js', 'js/views/disciplinas.js', 'js/views/questoes.js', 'js/views/simulado.js',
  'js/views/flashcards.js', 'js/views/revisoes.js', 'js/views/cronograma.js', 'js/views/pomodoro.js',
  'js/views/estatisticas.js', 'js/views/estrategia.js', 'js/views/exame.js', 'js/views/config.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSAO).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (chaves) {
    return Promise.all(chaves.filter(function (k) { return k !== VERSAO; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Rede primeiro (para receber atualizações), com o cache como reserva offline. */
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req).then(function (resp) {
    if (resp && resp.ok) {
      var copia = resp.clone();
      caches.open(VERSAO).then(function (c) { c.put(req, copia); });
    }
    return resp;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); });
  }));
});
