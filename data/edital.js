/*
 * Dados oficiais do 48º Exame de Ordem Unificado (OAB/FGV).
 * Fonte: Edital de abertura publicado pelo CFOAB em 21/09/2026.
 * Datas marcadas como "provável" seguem a redação do próprio edital.
 */
window.OAB = window.OAB || {};

OAB.EXAME = {
  nome: '48º Exame de Ordem Unificado',
  banca: 'FGV',
  editalPublicado: '2026-09-21',
  // Regra do edital: legislação com entrada em vigor após a publicação do
  // edital, bem como alterações posteriores, não será objeto de avaliação.
  dataCorteLegislacao: '2026-09-21',
  prova: '2027-01-10T13:00:00-03:00',
  provaFim: '2027-01-10T18:00:00-03:00',
  duracaoHoras: 5,
  totalQuestoes: 80,
  minimoAcertos: 40,
  alternativas: 4,
  cronograma: [
    { data: '2026-09-21', evento: 'Publicação do edital de abertura' },
    { data: '2026-09-28', fim: '2026-10-05', evento: 'Período de inscrições' },
    { data: '2026-12-04', evento: 'Último dia para pagamento da taxa (R$ 350,00)' },
    { data: '2027-01-10', evento: '1ª fase — prova objetiva (13h às 18h, horário de Brasília)', destaque: true },
    { data: '2027-01-10', evento: 'Gabarito preliminar (até 22h)' },
    { data: '2027-01-12', fim: '2027-01-14', evento: 'Recurso contra o gabarito preliminar' },
    { data: '2027-01-27', evento: 'Resultado preliminar da 1ª fase (provável)' },
    { data: '2027-01-28', fim: '2027-01-29', evento: 'Recurso por erro material no somatório da nota' },
    { data: '2027-02-28', evento: '2ª fase — prova prático-profissional (provável)' }
  ],
  links: [
    { nome: 'Portal do Exame de Ordem (CFOAB)', url: 'https://examedeordem.oab.org.br/' },
    { nome: 'FGV — Exame de Ordem (provas e gabaritos anteriores)', url: 'https://oab.fgv.br/' },
    { nome: 'Notícia oficial: edital do 48º Exame', url: 'https://www.oab.org.br/noticia/64615/confira-o-edital-de-abertura-do-48-exame-de-ordem-unificado' },
    { nome: 'Legislação federal (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/' }
  ]
};

/*
 * Distribuição das 80 questões, na ordem em que aparecem no caderno de prova.
 * Os demais dados (tópicos, resumos, questões e flashcards) de cada disciplina
 * ficam em data/disciplinas/<id>.js e são agregados por OAB.registrar().
 */
OAB.DISCIPLINAS = [
  { id: 'etica', nome: 'Ética Profissional', sigla: 'ÉTI', questoes: 8, cor: '#7c3aed' },
  { id: 'filosofia', nome: 'Filosofia do Direito', sigla: 'FIL', questoes: 2, cor: '#a855f7' },
  { id: 'constitucional', nome: 'Direito Constitucional', sigla: 'CON', questoes: 6, cor: '#2563eb' },
  { id: 'humanos', nome: 'Direitos Humanos', sigla: 'DH', questoes: 2, cor: '#0891b2' },
  { id: 'eleitoral', nome: 'Direito Eleitoral', sigla: 'ELE', questoes: 2, cor: '#0d9488' },
  { id: 'internacional', nome: 'Direito Internacional', sigla: 'INT', questoes: 2, cor: '#0284c7' },
  { id: 'financeiro', nome: 'Direito Financeiro', sigla: 'FIN', questoes: 2, cor: '#ca8a04' },
  { id: 'tributario', nome: 'Direito Tributário', sigla: 'TRI', questoes: 5, cor: '#d97706' },
  { id: 'administrativo', nome: 'Direito Administrativo', sigla: 'ADM', questoes: 5, cor: '#4f46e5' },
  { id: 'ambiental', nome: 'Direito Ambiental', sigla: 'AMB', questoes: 2, cor: '#16a34a' },
  { id: 'civil', nome: 'Direito Civil', sigla: 'CIV', questoes: 6, cor: '#dc2626' },
  { id: 'eca', nome: 'Estatuto da Criança e do Adolescente', sigla: 'ECA', questoes: 2, cor: '#db2777' },
  { id: 'consumidor', nome: 'Direito do Consumidor', sigla: 'CDC', questoes: 2, cor: '#e11d48' },
  { id: 'empresarial', nome: 'Direito Empresarial', sigla: 'EMP', questoes: 4, cor: '#9333ea' },
  { id: 'processocivil', nome: 'Direito Processual Civil', sigla: 'DPC', questoes: 6, cor: '#b91c1c' },
  { id: 'penal', nome: 'Direito Penal', sigla: 'PEN', questoes: 6, cor: '#475569' },
  { id: 'processopenal', nome: 'Direito Processual Penal', sigla: 'DPP', questoes: 6, cor: '#334155' },
  { id: 'previdenciario', nome: 'Direito Previdenciário', sigla: 'PRE', questoes: 2, cor: '#65a30d' },
  { id: 'trabalho', nome: 'Direito do Trabalho', sigla: 'TRA', questoes: 5, cor: '#ea580c' },
  { id: 'processotrabalho', nome: 'Direito Processual do Trabalho', sigla: 'DPT', questoes: 5, cor: '#c2410c' }
];

(function () {
  var inicio = 1;
  OAB.DISCIPLINAS.forEach(function (d, i) {
    d.ordem = i + 1;
    d.faixa = [inicio, inicio + d.questoes - 1];
    inicio += d.questoes;
    d.topicos = [];
    d.resumo = [];
    d.legislacao = [];
    d.dicas = [];
    d.questoesBanco = [];
    d.flashcards = [];
  });
})();

OAB.disciplina = function (id) {
  for (var i = 0; i < OAB.DISCIPLINAS.length; i++) {
    if (OAB.DISCIPLINAS[i].id === id) return OAB.DISCIPLINAS[i];
  }
  return null;
};

/*
 * Cada arquivo data/disciplinas/<id>.js chama OAB.registrar({...}).
 * Campos aceitos: topicos, resumo, legislacao, dicas, questoes, flashcards.
 */
OAB.registrar = function (dados) {
  var d = OAB.disciplina(dados.id);
  if (!d) throw new Error('Disciplina desconhecida: ' + dados.id);
  if (dados.topicos) d.topicos = dados.topicos;
  if (dados.resumo) d.resumo = dados.resumo;
  if (dados.legislacao) d.legislacao = dados.legislacao;
  if (dados.dicas) d.dicas = dados.dicas;
  (dados.questoes || []).forEach(function (q) {
    q.d = d.id;
    d.questoesBanco.push(q);
  });
  (dados.flashcards || []).forEach(function (f) {
    f.d = d.id;
    d.flashcards.push(f);
  });
};
