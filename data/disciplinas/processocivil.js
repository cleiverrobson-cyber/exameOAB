/* Direito Processual Civil — conteúdo para a 1ª fase (48º Exame). Base legal vigente em 21/09/2026. */
OAB.registrar({
  id: 'processocivil',
  topicos: [ // edital verticalizado: ordenado do mais cobrado ao menos cobrado na FGV
    { nome: 'Recursos', relevancia: 3 },
    { nome: 'Tutela provisória', relevancia: 3 },
    { nome: 'Procedimento comum: petição inicial, resposta do réu e saneamento', relevancia: 3 },
    { nome: 'Cumprimento de sentença', relevancia: 3 },
    { nome: 'Processo de execução', relevancia: 3 },
    { nome: 'Atos processuais e prazos', relevancia: 3 },
    { nome: 'Jurisdição e competência', relevancia: 3 },
    { nome: 'Intervenção de terceiros', relevancia: 2 },
    { nome: 'Normas fundamentais do processo civil', relevancia: 2 },
    { nome: 'Procedimentos especiais', relevancia: 2 },
    { nome: 'Honorários, despesas e gratuidade da justiça', relevancia: 2 },
    { nome: 'Precedentes, IRDR e IAC', relevancia: 2 },
    { nome: 'Ação rescisória', relevancia: 2 },
    { nome: 'Partes, procuradores e litisconsórcio', relevancia: 2 },
    { nome: 'Provas, sentença e coisa julgada', relevancia: 2 },
    { nome: 'Juizados Especiais Cíveis', relevancia: 1 }
  ],
  resumo: [
    {
      titulo: 'Normas fundamentais',
      itens: [
        'Vedação da decisão surpresa: o juiz não pode decidir com base em fundamento sobre o qual as partes não puderam se manifestar, ainda que se trate de matéria apreciável de ofício (art. 10, CPC).',
        'Prescrição e decadência não serão reconhecidas sem prévia oportunidade de manifestação das partes, salvo na improcedência liminar (art. 487, parágrafo único).',
        'Cooperação entre os sujeitos do processo (art. 6º) e boa-fé processual (art. 5º).',
        'Os juízes e tribunais atenderão, preferencialmente, à ordem cronológica de conclusão para proferir sentença ou acórdão (art. 12, redação da Lei 13.256/2016).',
        'Negócio jurídico processual atípico é admitido em processos que admitam autocomposição, entre partes plenamente capazes (art. 190); o juiz controla a validade e recusa cláusulas abusivas em contrato de adesão.',
        'Exceções à vedação de decisão sem oitiva prévia da parte: tutela provisória de urgência, tutela da evidência nas hipóteses do art. 311, II e III, e mandado monitório (art. 9º, parágrafo único).'
      ]
    },
    {
      titulo: 'Competência',
      itens: [
        'Regra geral: foro do domicílio do réu (art. 46). Ações reais imobiliárias: foro da situação da coisa, absoluto para propriedade, vizinhança, servidão, divisão, demarcação e nunciação de obra nova (art. 47, § 1º).',
        'Ação possessória imobiliária: foro da situação da coisa, com competência absoluta (art. 47, § 2º).',
        'Divórcio e união estável: domicílio do guardião de filho incapaz; último domicílio do casal; domicílio do réu; domicílio da vítima de violência doméstica (art. 53, I). Alimentos: domicílio do alimentando (art. 53, II).',
        'Eleição de foro (Lei 14.879/2024): só produz efeito se constar de instrumento escrito, aludir a negócio determinado e guardar pertinência com o domicílio/residência de uma das partes ou com o local da obrigação (art. 63, § 1º); o ajuizamento em juízo aleatório é prática abusiva que justifica a declinação de ofício (art. 63, § 5º).',
        'Cláusula de eleição abusiva pode ser reputada ineficaz de ofício antes da citação; depois, cabe ao réu alegá-la na contestação, sob pena de preclusão (art. 63, §§ 3º e 4º).',
        'Incompetência absoluta ou relativa é alegada como preliminar de contestação (art. 64); a relativa prorroga-se se não alegada (art. 65).',
        'Conexão: mesmo pedido ou causa de pedir (art. 55); prevenção pelo registro ou distribuição da petição inicial (art. 59).'
      ]
    },
    {
      titulo: 'Partes, honorários e gratuidade',
      itens: [
        'Litisconsórcio necessário não integrado: sentença nula se a decisão deveria ser uniforme (unitário); ineficaz apenas para os não citados nos demais casos (art. 115).',
        'Honorários de sucumbência: 10% a 20% sobre a condenação, o proveito econômico ou o valor atualizado da causa (art. 85, § 2º); escalonamento contra a Fazenda (§ 3º); equidade só para proveito inestimável ou irrisório ou valor da causa muito baixo (§ 8º; Tema 1.076 STJ).',
        'Honorários recursais: o tribunal majora os honorários ao julgar o recurso, respeitados os limites dos §§ 2º e 3º (art. 85, § 11).',
        'Honorários são direito do advogado, de natureza alimentar, vedada a compensação na sucumbência parcial (art. 85, § 14; Súmula Vinculante 47).',
        'Nas ações de cobrança e execuções de honorários advocatícios, o advogado fica dispensado de adiantar custas (art. 82, § 3º, incluído pela Lei 15.109/2025).',
        'Gratuidade: presume-se verdadeira a alegação de insuficiência da pessoa natural (art. 99, § 3º); advogado particular não impede o benefício (§ 4º); antes de indeferir, o juiz deve permitir a comprovação (§ 2º); pessoa jurídica precisa demonstrar a hipossuficiência (Súmula 481 STJ).',
        'Indeferimento ou revogação da gratuidade: agravo de instrumento, ou apelação se resolvida na sentença (art. 101); a gratuidade não afasta o pagamento das multas processuais (art. 98, § 4º).'
      ]
    },
    {
      titulo: 'Intervenção de terceiros',
      itens: [
        'Assistência simples ou litisconsorcial, admitida em qualquer procedimento e grau de jurisdição (arts. 119 a 124).',
        'Denunciação da lide: ao alienante imediato (evicção) e a quem estiver obrigado a indenizar em ação regressiva; não é obrigatória e admite-se uma única denunciação sucessiva (art. 125, §§ 1º e 2º).',
        'Chamamento ao processo: do afiançado, dos demais fiadores e dos devedores solidários (art. 130).',
        'IDPJ: cabível em todas as fases do conhecimento, no cumprimento de sentença e na execução de título extrajudicial (art. 134); dispensado se requerido na inicial (§ 2º); suspende o processo (§ 3º); citação para manifestação e provas em 15 dias (art. 135); decisão interlocutória recorrível por agravo de instrumento (arts. 136 e 1.015, IV).',
        'Amicus curiae: decisão que o admite é irrecorrível; não altera competência; só pode opor embargos de declaração e recorrer da decisão que julgar o IRDR (art. 138, §§ 1º e 3º).'
      ]
    },
    {
      titulo: 'Atos processuais e prazos',
      itens: [
        'Prazos processuais em dias úteis (art. 219); suspensão entre 20 de dezembro e 20 de janeiro (art. 220).',
        'Prazo em dobro: Ministério Público, Advocacia Pública e Defensoria (arts. 180, 183 e 186), estendido aos núcleos de prática jurídica das faculdades e entidades conveniadas com a Defensoria (art. 186, § 3º); não se aplica quando a lei fixar prazo próprio.',
        'Litisconsortes com procuradores de escritórios distintos têm prazo em dobro, exceto em autos eletrônicos (art. 229, § 2º).',
        'Citação preferencialmente eletrônica (art. 246, Lei 14.195/2021): confirmação em até 3 dias úteis; o prazo começa no 5º dia útil seguinte à confirmação (art. 231, IX); a falta injustificada de confirmação é ato atentatório punível com multa de até 5% do valor da causa (art. 246, § 1º-C).',
        'Prazos do juiz: despachos em 5 dias, decisões interlocutórias em 10 dias e sentenças em 30 dias (art. 226).',
        'Na ausência de prazo legal ou judicial, o prazo para a prática do ato é de 5 dias (art. 218, § 3º).'
      ]
    },
    {
      titulo: 'Tutela provisória',
      itens: [
        'Urgência: probabilidade do direito e perigo de dano ou risco ao resultado útil (art. 300); a antecipada não é concedida se houver perigo de irreversibilidade (art. 300, § 3º).',
        'Tutela antecipada antecedente: aditamento da inicial em 15 dias ou prazo maior fixado pelo juiz (art. 303, § 1º, I).',
        'Estabilização (art. 304): se o réu não interpuser recurso, o processo é extinto; qualquer parte pode propor ação para rever, reformar ou invalidar a tutela em 2 anos da ciência da extinção; a decisão não faz coisa julgada.',
        'Tutela cautelar antecedente: contestação em 5 dias (art. 306); pedido principal em 30 dias após a efetivação (art. 308). A estabilização não se aplica à cautelar.',
        'Evidência (art. 311): independe de perigo de dano; liminar somente nos incisos II (tese em repetitivos ou súmula vinculante + prova documental) e III (contrato de depósito).',
        'Decisão sobre tutela provisória desafia agravo de instrumento (art. 1.015, I); a sentença que a confirma, concede ou revoga produz efeitos imediatos (art. 1.012, § 1º, V).'
      ]
    },
    {
      titulo: 'Procedimento comum',
      itens: [
        'Emenda da inicial em 15 dias (art. 321). Indeferimento da inicial e improcedência liminar admitem retratação em 5 dias na apelação (arts. 331 e 332, § 3º).',
        'Improcedência liminar (art. 332): pedido contrário a súmula do STF/STJ, repetitivos, IRDR/IAC ou súmula de TJ sobre direito local, além de prescrição e decadência.',
        'Audiência de conciliação: designada com antecedência mínima de 30 dias, citando-se o réu com pelo menos 20 dias (art. 334); só não ocorre se ambas as partes manifestarem desinteresse (o réu, com 10 dias de antecedência) ou se não se admitir autocomposição (§ 4º).',
        'Ausência injustificada à audiência: ato atentatório, multa de até 2% da vantagem econômica pretendida ou do valor da causa, revertida à União ou ao Estado (art. 334, § 8º).',
        'Contestação em 15 dias (art. 335), concentrando todas as defesas (art. 336) e preliminares (art. 337); reconvenção na própria contestação (art. 343).',
        'Revelia não produz presunção de veracidade nas hipóteses do art. 345 (pluralidade de réus com contestação, direitos indisponíveis, falta de instrumento indispensável, alegações inverossímeis).',
        'Saneamento: partes pedem esclarecimentos ou ajustes em 5 dias (art. 357, § 1º); rol de testemunhas em prazo comum não superior a 15 dias (§ 4º); máximo de 10 testemunhas, 3 por fato (§ 6º).',
        'Remessa necessária dispensada se a condenação for inferior a 1.000 salários mínimos (União), 500 (Estados, DF e capitais) ou 100 (demais Municípios) (art. 496, § 3º).',
        'Coisa julgada sobre questão prejudicial exige que dela dependa o mérito, contraditório prévio e efetivo (não há em caso de revelia) e competência do juízo (art. 503, § 1º).'
      ]
    },
    {
      titulo: 'Cumprimento de sentença e execução',
      itens: [
        'Cumprimento de quantia certa: pagamento em 15 dias, sob pena de multa de 10% e honorários de 10%; pagamento parcial faz incidir os acréscimos sobre o restante (art. 523, §§ 1º e 2º).',
        'Impugnação em 15 dias, contados do fim do prazo para pagamento, independentemente de penhora ou nova intimação (art. 525).',
        'Fazenda Pública: impugnação em 30 dias, sem multa de 10%; pagamento por precatório ou RPV (arts. 534, § 2º, e 535).',
        'Execução de título extrajudicial: citação para pagar em 3 dias (art. 829); honorários iniciais de 10%, reduzidos à metade se houver pagamento integral nesse prazo (art. 827, § 1º).',
        'Embargos à execução: 15 dias da juntada do mandado de citação, sem necessidade de garantia (arts. 914 e 915); prazo individual para cada executado, salvo cônjuges ou companheiros (art. 915, § 1º); sem efeito suspensivo automático (art. 919).',
        'Parcelamento (art. 916): depósito de 30% + até 6 parcelas mensais com correção e juros de 1% ao mês; implica renúncia aos embargos; não se aplica ao cumprimento de sentença (§ 7º).',
        'Impenhorabilidades (art. 833): salários, salvo para alimentos e valores acima de 50 salários mínimos mensais; poupança até 40 salários mínimos; pequena propriedade rural trabalhada pela família.',
        'Fraude à execução (art. 792): o reconhecimento depende do registro da penhora ou de prova da má-fé do terceiro adquirente (Súmula 375 STJ).'
      ]
    },
    {
      titulo: 'Procedimentos especiais',
      itens: [
        'Monitória: prova escrita sem eficácia de título executivo (art. 700); mandado para pagamento em 15 dias com honorários de 5% e isenção de custas se cumprido (art. 701); embargos em 15 dias, sem garantia (art. 702); cabe contra a Fazenda (art. 700, § 6º; Súmula 339 STJ).',
        'Possessórias: fungibilidade (art. 554); caráter dúplice (art. 556); liminar sem oitiva do réu na posse nova, de menos de ano e dia (arts. 558 e 562); litígio coletivo antigo exige audiência de mediação em até 30 dias (art. 565).',
        'Pendente ação possessória, é vedado ao autor e ao réu propor ação de reconhecimento de domínio, salvo contra terceiro (art. 557).',
        'Embargos de terceiro: no conhecimento, enquanto não transitada em julgado a sentença; na execução, até 5 dias após adjudicação, alienação particular ou arrematação, antes da assinatura da carta (art. 675). Compromisso de compra e venda não registrado legitima (Súmula 84 STJ).',
        'Inventário: instauração em 2 meses da abertura da sucessão e conclusão em 12 meses (art. 611); arrolamento comum para bens de até 1.000 salários mínimos (art. 664).'
      ]
    },
    {
      titulo: 'Recursos',
      itens: [
        'Prazo de 15 dias úteis para todos os recursos, exceto embargos de declaração, de 5 dias (art. 1.003, § 5º).',
        'O feriado local deve ser comprovado na interposição; se não o for, o tribunal determina a correção do vício ou o desconsidera se a informação já constar dos autos eletrônicos (art. 1.003, § 6º, Lei 14.939/2024).',
        'Apelação tem efeito suspensivo, exceto nas hipóteses do art. 1.012, § 1º (alimentos, tutela provisória, interdição, improcedência de embargos do executado etc.); o juízo de admissibilidade é feito no tribunal (art. 1.010, § 3º).',
        'Agravo de instrumento: rol do art. 1.015 com taxatividade mitigada, cabendo diante de urgência decorrente da inutilidade do julgamento na apelação (Tema 988 STJ); cabe contra qualquer interlocutória em liquidação, cumprimento, execução e inventário (parágrafo único).',
        'Embargos de declaração interrompem o prazo dos demais recursos (art. 1.026); protelatórios: multa de até 2% do valor da causa, elevada a até 10% na reiteração (§§ 2º e 3º).',
        'Agravo interno contra decisão do relator, em 15 dias; manifestamente inadmissível ou improcedente por unanimidade: multa de 1% a 5% do valor atualizado da causa (art. 1.021, § 4º).',
        'Prequestionamento ficto: consideram-se incluídos no acórdão os elementos suscitados em embargos de declaração, se o tribunal superior reconhecer erro, omissão, contradição ou obscuridade (art. 1.025).',
        'Recurso ordinário ao STJ: mandado de segurança decidido em única instância pelos TRFs ou TJs, quando denegatória a decisão, e causas entre Estado estrangeiro ou organismo internacional e Município ou pessoa residente no Brasil (art. 1.027, II).'
      ]
    },
    {
      titulo: 'Precedentes, rescisória e Juizados',
      itens: [
        'IRDR: efetiva repetição de processos sobre a mesma questão unicamente de direito e risco à isonomia e à segurança jurídica (art. 976); sem custas (§ 5º); desistência não impede o exame do mérito (§ 1º); incabível se tribunal superior já afetou recurso sobre a questão (§ 4º); julgamento em 1 ano (art. 980).',
        'IAC: relevante questão de direito, com grande repercussão social, sem repetição em múltiplos processos (art. 947).',
        'Ação rescisória: 2 anos do trânsito em julgado da última decisão (art. 975); prova nova: da descoberta, limitado a 5 anos do trânsito (§ 2º); depósito de 5% do valor da causa, limitado a 1.000 salários mínimos (art. 968, II e § 2º).',
        'Juizados Especiais Cíveis: causas até 40 salários mínimos; sem advogado até 20 salários mínimos (art. 9º, Lei 9.099/1995); recurso inominado em 10 dias, com advogado, e preparo em 48 horas (arts. 41 e 42); prazos em dias úteis (art. 12-A).',
        'Nos Juizados não cabem ação rescisória (art. 59), intervenção de terceiros (art. 10, ressalvado o IDPJ — art. 1.062 do CPC) nem recurso especial (Súmula 203 STJ); cabe recurso extraordinário (Súmula 640 STF).'
      ]
    }
  ],
  legislacao: [
    { nome: 'Lei 13.105/2015 — Código de Processo Civil (compilado)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm' },
    { nome: 'Lei 9.099/1995 — Juizados Especiais Cíveis e Criminais', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm' },
    { nome: 'Lei 14.879/2024 — Eleição de foro (art. 63 do CPC)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14879.htm' },
    { nome: 'Lei 14.939/2024 — Comprovação de feriado local (art. 1.003, § 6º)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14939.htm' },
    { nome: 'Lei 15.109/2025 — Dispensa de adiantamento de custas em cobrança de honorários', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15109.htm' },
    { nome: 'Lei 14.195/2021 — Citação eletrônica e prescrição intercorrente', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14195.htm' },
    { nome: 'Constituição Federal de 1988', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
    { nome: 'STJ — Recursos repetitivos (Tema 988 e outros)', url: 'https://processo.stj.jus.br/repetitivos/temas_repetitivos/' },
    { nome: 'Súmulas do STJ', url: 'https://scon.stj.jus.br/SCON/sumstj/' },
    { nome: 'Súmulas Vinculantes do STF', url: 'https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26' }
  ],
  dicas: [
    'Prazos decidem muitas questões: memorize a regra dos 15 dias úteis (recursos, contestação, embargos à execução, impugnação), as exceções de 5 dias (embargos de declaração, retratação, cautelar) e de 30 dias (Fazenda na impugnação, pedido principal na cautelar).',
    'Na FGV, o enunciado costuma esconder o detalhe decisivo: autos eletrônicos (afasta o prazo em dobro do art. 229), Fazenda Pública (sem multa do art. 523), revelia (afasta coisa julgada sobre questão prejudicial).',
    'Em recursos, primeiro identifique a natureza do pronunciamento (sentença, interlocutória, decisão monocrática do relator, acórdão) e depois verifique o rol do art. 1.015 e o Tema 988 do STJ.',
    'Fique atento às leis recentes: eleição de foro (Lei 14.879/2024), feriado local (Lei 14.939/2024), custas na cobrança de honorários (Lei 15.109/2025) e citação eletrônica (Lei 14.195/2021).',
    'Leia as alternativas procurando o “sempre”, o “jamais” e o “independentemente”: no CPC quase toda regra tem exceção expressa, e a FGV explora exatamente essas exceções.'
  ],
  questoes: [
    {
      id: 'processocivil-001',
      topico: 'Recursos',
      dificuldade: 2,
      enunciado: 'Em ação de cobrança, o réu alegou em preliminar de contestação a incompetência do juízo, sustentando que a causa deveria tramitar em outra comarca. O juiz rejeitou a preliminar por decisão interlocutória. O advogado do réu entende que aguardar a apelação tornará inútil a discussão, pois toda a instrução terá ocorrido perante juízo incompetente. Assinale a afirmativa correta.',
      alternativas: [
        'Não cabe recurso imediato, pois a decisão não consta do rol do art. 1.015 do CPC, devendo a questão ser suscitada, sem exceção, apenas em preliminar de apelação.',
        'É cabível agravo de instrumento, pois o rol do art. 1.015 do CPC é de taxatividade mitigada, admitindo a interposição quando verificada urgência decorrente da inutilidade do julgamento da questão no recurso de apelação.',
        'É cabível agravo interno, no prazo de 15 dias, dirigido ao próprio juiz da causa.',
        'É cabível mandado de segurança contra ato judicial, já que a decisão interlocutória é irrecorrível.'
      ],
      correta: 1,
      comentario: 'Correta a B: o STJ, no Tema 988 dos recursos repetitivos, fixou que o rol do art. 1.015 do CPC é de taxatividade mitigada, admitindo agravo de instrumento quando verificada urgência decorrente da inutilidade do julgamento da questão no recurso de apelação, sendo a competência um dos exemplos citados no julgamento. A A ignora a tese vinculante. A C erra porque o agravo interno é cabível contra decisão do relator (art. 1.021), não do juiz de primeiro grau. A D erra porque a decisão é recorrível, ainda que de forma diferida (art. 1.009, § 1º), o que afasta o mandado de segurança.',
      fundamento: 'Art. 1.015 do CPC; Tema 988 do STJ (REsp 1.704.520/MT); arts. 1.009, § 1º, e 1.021 do CPC'
    },
    {
      id: 'processocivil-002',
      topico: 'Recursos',
      dificuldade: 2,
      enunciado: 'Contra sentença de procedência, Helena opôs embargos de declaração, que foram rejeitados e considerados manifestamente protelatórios pelo juiz. Helena pretende apelar e quer saber os efeitos dos embargos opostos e as consequências da qualificação dada pelo juiz. Assinale a afirmativa correta.',
      alternativas: [
        'Os embargos de declaração suspendem o prazo para interposição de outros recursos, e a multa por embargos protelatórios é de até 10% do valor da causa já na primeira oposição.',
        'Os embargos de declaração devem ser opostos em 15 dias e, se considerados protelatórios, não interrompem o prazo da apelação.',
        'Os embargos protelatórios acarretam multa de até 2% sobre o valor atualizado da causa e, por isso, não interrompem o prazo recursal.',
        'Os embargos de declaração, opostos em 5 dias, interrompem o prazo para a interposição de recurso; se manifestamente protelatórios, o embargante é condenado a pagar multa não excedente a 2% sobre o valor atualizado da causa, elevada a até 10% em caso de reiteração.'
      ],
      correta: 3,
      comentario: 'Correta a D: os embargos de declaração são opostos em 5 dias (art. 1.003, § 5º, e art. 1.023) e interrompem o prazo para a interposição de recurso (art. 1.026, caput). Se manifestamente protelatórios, aplica-se multa não excedente a 2% do valor atualizado da causa (§ 2º), elevada a até 10% na reiteração, condicionando-se a interposição de outros recursos ao depósito (§ 3º). A A troca interrupção por suspensão e antecipa a multa majorada. A B erra o prazo e o efeito. A C erra porque a lei não retira o efeito interruptivo dos embargos protelatórios, apenas impõe multa.',
      fundamento: 'Arts. 1.003, § 5º, 1.023 e 1.026, caput e §§ 2º e 3º, do CPC'
    },
    {
      id: 'processocivil-003',
      topico: 'Recursos',
      dificuldade: 1,
      enunciado: 'O juiz julgou procedente ação de alimentos ajuizada por Laura, menor representada por sua mãe, condenando Ricardo a pagar pensão mensal. Ricardo pretende apelar e pergunta se a sentença poderá ser cumprida desde logo. Assinale a afirmativa correta.',
      alternativas: [
        'A sentença começa a produzir efeitos imediatamente após a sua publicação, pois a apelação contra sentença que condena a pagar alimentos não tem efeito suspensivo automático, podendo o apelante requerer a concessão desse efeito ao tribunal.',
        'A apelação terá efeito suspensivo automático, como regra geral, impedindo o cumprimento provisório da sentença.',
        'A apelação deve ser interposta diretamente no tribunal, ao qual cabe o juízo de admissibilidade.',
        'Cabe agravo de instrumento contra a sentença de alimentos, por se tratar de tutela de urgência.'
      ],
      correta: 0,
      comentario: 'Correta a A: a apelação tem, em regra, efeito suspensivo (art. 1.012, caput), mas a sentença que condena a pagar alimentos começa a produzir efeitos imediatamente após a publicação (art. 1.012, § 1º, II), admitindo cumprimento provisório (§ 2º); o apelante pode pedir efeito suspensivo ao tribunal (§§ 3º e 4º). A B ignora a exceção. A C erra porque a apelação é interposta perante o juízo de primeiro grau, embora o juízo de admissibilidade seja feito pelo tribunal (art. 1.010, caput e § 3º). A D erra porque contra sentença cabe apelação (art. 1.009).',
      fundamento: 'Arts. 1.009, 1.010, § 3º, e 1.012, § 1º, II, e §§ 2º a 4º, do CPC'
    },
    {
      id: 'processocivil-004',
      topico: 'Recursos',
      dificuldade: 2,
      enunciado: 'Marcelo, advogado, interpôs recurso especial no último dia do prazo, considerando que houve feriado local na comarca de origem durante o curso do prazo. Na petição de interposição, porém, não juntou documento comprovando o feriado, e a informação não consta dos autos eletrônicos. Assinale a afirmativa correta à luz do CPC vigente.',
      alternativas: [
        'O recurso deve ser considerado intempestivo, pois a comprovação do feriado local deve ocorrer no ato de interposição, sendo vedada a correção posterior.',
        'O feriado local é fato notório e dispensa qualquer comprovação, em qualquer hipótese.',
        'Não comprovado o feriado local no ato de interposição, o tribunal determinará a correção do vício formal, podendo desconsiderá-lo caso a informação já conste do processo eletrônico.',
        'A tempestividade do recurso especial é aferida em dias corridos, de modo que o feriado local é irrelevante.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 1.003, § 6º, do CPC, com a redação da Lei 14.939/2024, determina que o recorrente comprove o feriado local no ato de interposição e, se não o fizer, o tribunal determinará a correção do vício formal, ou poderá desconsiderá-lo caso a informação já conste do processo eletrônico. A A reflete o entendimento anterior à alteração legislativa. A B contraria o dever de comprovação previsto na lei. A D erra porque os prazos processuais são contados em dias úteis (art. 219).',
      fundamento: 'Art. 1.003, § 6º, do CPC (redação da Lei 14.939/2024); art. 219 do CPC'
    },
    {
      id: 'processocivil-005',
      topico: 'Tutela provisória',
      dificuldade: 2,
      enunciado: 'Diante de urgência contemporânea à propositura da ação, Fernanda ajuizou petição inicial limitada ao requerimento de tutela antecipada, indicando expressamente que pretendia valer-se do procedimento da tutela requerida em caráter antecedente. A tutela foi deferida, e o réu, citado e intimado, não interpôs qualquer recurso nem se manifestou nos autos. Assinale a afirmativa correta.',
      alternativas: [
        'A decisão fez coisa julgada material e só pode ser desconstituída por ação rescisória, no prazo de 2 anos.',
        'A tutela não se estabiliza, pois a estabilização exige que o réu apresente contestação reconhecendo o pedido.',
        'A tutela antecipada tornou-se estável e o processo será extinto; qualquer das partes poderá demandar a outra para rever, reformar ou invalidar a tutela no prazo de 2 anos contados da ciência da decisão que extinguiu o processo, sem que a decisão faça coisa julgada.',
        'A estabilização ocorreria da mesma forma se a medida deferida fosse tutela cautelar requerida em caráter antecedente.'
      ],
      correta: 2,
      comentario: 'Correta a C: a tutela antecipada concedida em caráter antecedente torna-se estável se da decisão não for interposto o respectivo recurso (art. 304, caput), extinguindo-se o processo (§ 1º). Qualquer das partes pode propor ação para rever, reformar ou invalidar a tutela (§ 2º) no prazo de 2 anos contados da ciência da decisão extintiva (§ 5º), e a decisão não faz coisa julgada (§ 6º). Por isso a A está errada. A B cria requisito inexistente: basta a ausência de recurso. A D erra porque a estabilização é própria da tutela antecipada antecedente, não da cautelar (arts. 305 a 310).',
      fundamento: 'Arts. 303 e 304, §§ 1º, 2º, 5º e 6º, do CPC'
    },
    {
      id: 'processocivil-006',
      topico: 'Tutela provisória',
      dificuldade: 2,
      enunciado: 'Lucas pretende obter tutela da evidência liminarmente, isto é, antes da oitiva do réu, em ação que ajuizará. Seu advogado analisa as hipóteses legais. Assinale a hipótese em que a tutela da evidência pode ser concedida liminarmente.',
      alternativas: [
        'Quando as alegações de fato puderem ser comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante.',
        'Quando ficar caracterizado o abuso do direito de defesa ou o manifesto propósito protelatório da parte.',
        'Quando a petição inicial for instruída com prova documental suficiente dos fatos constitutivos do direito do autor, a que o réu não oponha prova capaz de gerar dúvida razoável.',
        'Sempre que demonstrado o perigo de dano ou o risco ao resultado útil do processo, ainda que ausente a probabilidade do direito.'
      ],
      correta: 0,
      comentario: 'Correta a A: o art. 311, parágrafo único, do CPC permite a concessão liminar da tutela da evidência apenas nas hipóteses dos incisos II (alegações comprováveis documentalmente e tese firmada em repetitivos ou súmula vinculante) e III (pedido reipersecutório fundado em contrato de depósito). A B (inciso I) e a C (inciso IV) pressupõem manifestação do réu, sendo incompatíveis com a concessão liminar. A D confunde com tutela de urgência e, ainda assim, erra, pois a urgência exige probabilidade do direito (art. 300); a evidência independe de perigo de dano (art. 311, caput).',
      fundamento: 'Arts. 300 e 311, caput, incisos I a IV, e parágrafo único, do CPC'
    },
    {
      id: 'processocivil-007',
      topico: 'Procedimento comum: petição inicial, resposta do réu e saneamento',
      dificuldade: 2,
      enunciado: 'Na petição inicial, Olga manifestou desinteresse na audiência de conciliação. O réu, citado, nada disse sobre a audiência, que foi mantida. No dia designado, o réu não compareceu nem apresentou justificativa. Assinale a afirmativa correta.',
      alternativas: [
        'A audiência não deveria ter sido designada, pois basta o desinteresse manifestado pelo autor para dispensá-la.',
        'A ausência do réu acarreta revelia, presumindo-se verdadeiras as alegações de fato formuladas pela autora.',
        'A ausência injustificada sujeita o réu a multa de até 10% do valor da causa, revertida em favor da autora.',
        'A ausência injustificada é considerada ato atentatório à dignidade da justiça e será sancionada com multa de até 2% da vantagem econômica pretendida ou do valor da causa, revertida em favor da União ou do Estado.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 334, § 8º, do CPC qualifica o não comparecimento injustificado à audiência de conciliação como ato atentatório à dignidade da justiça, punido com multa de até 2% da vantagem econômica pretendida ou do valor da causa, revertida em favor da União ou do Estado. A A erra porque a audiência só não se realiza se ambas as partes manifestarem desinteresse (art. 334, § 4º, I). A B erra porque a revelia decorre da falta de contestação (art. 344), cujo prazo, no caso, inicia-se a partir da audiência (art. 335, I). A C erra o percentual e o destinatário da multa.',
      fundamento: 'Arts. 334, §§ 4º, I, e 8º, 335, I, e 344 do CPC'
    },
    {
      id: 'processocivil-008',
      topico: 'Procedimento comum: petição inicial, resposta do réu e saneamento',
      dificuldade: 2,
      enunciado: 'Pedro ajuizou ação cujo pedido contraria frontalmente enunciado de súmula do STJ. Sem determinar a citação do réu e sem necessidade de instrução, o juiz julgou liminarmente improcedente o pedido. Pedro interpôs apelação. Assinale a afirmativa correta.',
      alternativas: [
        'A sentença é nula, pois o juiz não pode julgar o mérito sem a prévia citação do réu, sob pena de violação ao contraditório.',
        'A sentença é válida; interposta a apelação, o juiz poderá retratar-se em 5 dias e, não havendo retratação, determinará a citação do réu para apresentar contrarrazões em 15 dias.',
        'A improcedência liminar somente é cabível quando o pedido contrariar súmula vinculante do STF.',
        'Contra essa sentença cabe agravo de instrumento, sem possibilidade de retratação pelo juiz.'
      ],
      correta: 1,
      comentario: 'Correta a B: nas causas que dispensem instrução, o juiz julgará liminarmente improcedente o pedido que contrariar enunciado de súmula do STF ou do STJ, independentemente da citação do réu (art. 332, I). Interposta apelação, o juiz pode retratar-se em 5 dias (§ 3º); se não o fizer, determina a citação do réu para contrarrazões em 15 dias (§ 4º). A A ignora a autorização legal; o réu vencedor não sofre prejuízo. A C restringe indevidamente as hipóteses do art. 332. A D erra porque se trata de sentença, impugnável por apelação.',
      fundamento: 'Art. 332, I, e §§ 3º e 4º, do CPC'
    },
    {
      id: 'processocivil-009',
      topico: 'Cumprimento de sentença',
      dificuldade: 2,
      enunciado: 'Transitada em julgado sentença que condenou Sérgio a pagar R$ 100.000,00 a Vânia, ele foi intimado, a requerimento da credora, para pagamento. No prazo legal, Sérgio depositou apenas R$ 40.000,00. Assinale a afirmativa correta.',
      alternativas: [
        'A multa de 10% e os honorários advocatícios de 10% incidirão sobre o restante (R$ 60.000,00), e o prazo de 15 dias para impugnação inicia-se após o término do prazo para pagamento voluntário, independentemente de penhora ou nova intimação.',
        'A multa e os honorários incidirão sobre o valor total da condenação, pois o pagamento parcial não é considerado.',
        'A multa de 10% incidirá sobre o restante, mas não são devidos honorários advocatícios na fase de cumprimento de sentença.',
        'O prazo para impugnação somente se inicia após a penhora e a intimação do executado sobre a constrição.'
      ],
      correta: 0,
      comentario: 'Correta a A: não ocorrendo pagamento voluntário em 15 dias, o débito é acrescido de multa de 10% e de honorários de 10% (art. 523, § 1º); havendo pagamento parcial, ambos incidem sobre o restante (§ 2º). Transcorrido o prazo de pagamento, inicia-se o prazo de 15 dias para impugnação, independentemente de penhora ou nova intimação (art. 525, caput). A B contraria o § 2º do art. 523. A C contraria o § 1º, que prevê honorários na fase de cumprimento. A D reproduz regra do CPC/1973, superada.',
      fundamento: 'Arts. 523, §§ 1º e 2º, e 525, caput, do CPC'
    },
    {
      id: 'processocivil-010',
      topico: 'Cumprimento de sentença',
      dificuldade: 2,
      enunciado: 'Transitou em julgado sentença que condenou o Estado X a pagar indenização a Wagner. Wagner apresentou demonstrativo discriminado do crédito e requereu o cumprimento da sentença. Assinale a afirmativa correta quanto ao procedimento.',
      alternativas: [
        'O Estado será intimado para pagar em 15 dias, sob pena de multa de 10% e de honorários de 10%.',
        'O Estado poderá impugnar a execução em 15 dias, desde que garanta previamente o juízo.',
        'O Estado será intimado para, querendo, impugnar a execução no prazo de 30 dias, nos próprios autos, não se aplicando a multa de 10% prevista para o cumprimento de sentença comum, e o pagamento será feito por precatório ou requisição de pequeno valor.',
        'O Estado será citado para opor embargos à execução em 30 dias, por se tratar de processo autônomo de execução.'
      ],
      correta: 2,
      comentario: 'Correta a C: no cumprimento de sentença contra a Fazenda Pública, não se aplica a multa do art. 523, § 1º (art. 534, § 2º); a Fazenda é intimada para impugnar em 30 dias, nos próprios autos (art. 535), e, não impugnada a execução ou rejeitada a impugnação, expede-se precatório ou requisição de pequeno valor (art. 535, § 3º; art. 100 da CF). A A ignora o regime especial. A B erra o prazo e exige garantia inexistente. A D erra porque, sendo título judicial, adota-se o cumprimento de sentença com impugnação, não embargos (estes são próprios da execução de título extrajudicial, art. 910).',
      fundamento: 'Arts. 534, § 2º, 535, caput e § 3º, e 910 do CPC; art. 100 da CF'
    },
    {
      id: 'processocivil-011',
      topico: 'Processo de execução',
      dificuldade: 2,
      enunciado: 'Tadeu foi citado em execução de título extrajudicial no valor de R$ 60.000,00. Reconhecendo a dívida, mas sem recursos para quitá-la de imediato, pretende parcelá-la. Assinale a afirmativa correta.',
      alternativas: [
        'Tadeu pode parcelar o débito em até 12 parcelas mensais, sem depósito inicial, mantendo o direito de opor embargos.',
        'No prazo para embargos, reconhecendo o crédito e depositando 30% do valor em execução, acrescido de custas e honorários, Tadeu pode requerer o pagamento do restante em até 6 parcelas mensais, com correção monetária e juros de 1% ao mês, o que importa renúncia ao direito de opor embargos.',
        'O parcelamento depende da concordância expressa do exequente, sem a qual o juiz não pode deferi-lo.',
        'O mesmo parcelamento seria cabível caso se tratasse de cumprimento de sentença condenatória.'
      ],
      correta: 1,
      comentario: 'Correta a B: o art. 916 do CPC autoriza o executado, no prazo dos embargos, a reconhecer o crédito, depositar 30% do valor em execução com custas e honorários e pagar o restante em até 6 parcelas mensais, com correção monetária e juros de 1% ao mês; a opção importa renúncia ao direito de opor embargos (§ 6º). A A contraria todos esses requisitos. A C erra porque o exequente é apenas intimado para se manifestar sobre o preenchimento dos requisitos, cabendo ao juiz decidir (§ 1º). A D contraria o § 7º, que veda o parcelamento no cumprimento de sentença.',
      fundamento: 'Art. 916, caput e §§ 1º, 6º e 7º, do CPC'
    },
    {
      id: 'processocivil-012',
      topico: 'Processo de execução',
      dificuldade: 3,
      enunciado: 'Otávio e Paulo, sócios e devedores solidários de nota promissória, foram citados em execução de título extrajudicial. O mandado de citação de Otávio foi juntado aos autos em 2 de março e o de Paulo, em 16 de março. Eles não são cônjuges nem companheiros. Nenhum bem foi penhorado. Assinale a afirmativa correta.',
      alternativas: [
        'O prazo para embargos é comum e somente se inicia com a juntada do último mandado de citação cumprido.',
        'Os embargos dependem de prévia garantia do juízo por penhora, depósito ou caução.',
        'Os embargos opostos têm efeito suspensivo automático, paralisando a execução até seu julgamento.',
        'O prazo de 15 dias para embargos conta-se, para cada executado, a partir da juntada do respectivo comprovante de citação, e os embargos podem ser opostos independentemente de penhora.'
      ],
      correta: 3,
      comentario: 'Correta a D: os embargos são opostos em 15 dias contados da juntada do mandado de citação (art. 915, caput, c/c art. 231, II); havendo mais de um executado, o prazo conta-se para cada um a partir da juntada do respectivo comprovante, salvo no caso de cônjuges ou companheiros (art. 915, § 1º). O executado pode embargar independentemente de penhora, depósito ou caução (art. 914). A A aplica a regra do prazo comum do art. 231, § 1º, afastada pela norma especial. A B contraria o art. 914. A C contraria o art. 919, segundo o qual os embargos, em regra, não têm efeito suspensivo.',
      fundamento: 'Arts. 914, 915, caput e § 1º, e 919 do CPC'
    },
    {
      id: 'processocivil-013',
      topico: 'Atos processuais e prazos',
      dificuldade: 2,
      enunciado: 'Em processo que tramita em autos eletrônicos, Aldo e Beto foram citados como réus e constituíram advogados de escritórios de advocacia distintos. O advogado de Aldo entende que ambos dispõem de prazo em dobro para contestar. Assinale a afirmativa correta.',
      alternativas: [
        'O prazo é de 30 dias úteis, em dobro, pois os litisconsortes têm procuradores de escritórios distintos.',
        'O prazo é em dobro, mas contado em dias corridos, por se tratar de autos eletrônicos.',
        'O prazo é de 15 dias corridos, simples, por se tratar de processo eletrônico.',
        'O prazo é de 15 dias úteis, sem dobra, pois a contagem em dobro para litisconsortes com procuradores distintos não se aplica aos processos em autos eletrônicos.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 229 do CPC concede prazo em dobro aos litisconsortes com procuradores de escritórios distintos, mas o § 2º afasta a regra nos processos em autos eletrônicos. A contestação deve ser apresentada em 15 dias (art. 335), computados apenas os dias úteis (art. 219). A A ignora o § 2º do art. 229. A B e a C erram ao afirmar contagem em dias corridos, pois os prazos processuais contam-se em dias úteis em qualquer meio.',
      fundamento: 'Arts. 219, 229, § 2º, e 335 do CPC'
    },
    {
      id: 'processocivil-014',
      topico: 'Atos processuais e prazos',
      dificuldade: 2,
      enunciado: 'Rosa, hipossuficiente, é assistida em ação de indenização pelo escritório de prática jurídica de uma faculdade de Direito regularmente reconhecida. A parte contrária sustenta que o escritório deveria observar os prazos simples previstos no CPC. Assinale a afirmativa correta.',
      alternativas: [
        'Os escritórios de prática jurídica das faculdades de Direito reconhecidas na forma da lei gozam da prerrogativa de prazo em dobro para todas as manifestações processuais.',
        'Somente a Defensoria Pública tem prazo em dobro, prerrogativa que não se estende aos escritórios de prática jurídica.',
        'O prazo em dobro aplica-se ao escritório de prática jurídica apenas para contestar e recorrer.',
        'O escritório de prática jurídica tem prazo em quádruplo para contestar e em dobro para recorrer.'
      ],
      correta: 0,
      comentario: 'Correta a A: a Defensoria Pública goza de prazo em dobro para todas as suas manifestações processuais (art. 186, caput), e o § 3º estende a regra aos escritórios de prática jurídica das faculdades de Direito reconhecidas na forma da lei e às entidades que prestam assistência jurídica gratuita em razão de convênios com a Defensoria. A B ignora o § 3º. A C restringe indevidamente a prerrogativa, que vale para todas as manifestações. A D reproduz regra do CPC/1973 (prazo em quádruplo para contestar), não mantida no CPC/2015.',
      fundamento: 'Art. 186, caput e § 3º, do CPC'
    },
    {
      id: 'processocivil-015',
      topico: 'Jurisdição e competência',
      dificuldade: 3,
      enunciado: 'Alfa Ltda., com sede em Belo Horizonte, e Beta Ltda., com sede em Salvador, celebraram contrato de fornecimento a ser cumprido em Salvador, com cláusula de eleição do foro de Manaus, cidade sem qualquer relação com as partes ou com o negócio. Alfa ajuizou ação em Manaus. Antes da citação, o juiz declinou da competência de ofício. Assinale a afirmativa correta.',
      alternativas: [
        'O juiz agiu incorretamente, pois em contratos paritários entre empresas a eleição de foro é livre, ainda que sem vínculo com as partes ou com a obrigação.',
        'O juiz agiu corretamente, pois a eleição de foro só produz efeito quando guarda pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação, e o ajuizamento em juízo aleatório constitui prática abusiva que justifica a declinação de competência de ofício.',
        'O juiz agiu incorretamente, pois a incompetência relativa não pode ser declarada de ofício, dependendo sempre de alegação do réu na contestação.',
        'O juiz agiu corretamente, pois a cláusula é nula e a competência passa a ser absoluta do foro da sede do réu.'
      ],
      correta: 1,
      comentario: 'Correta a B: com a Lei 14.879/2024, o art. 63, § 1º, do CPC passou a exigir que a eleição de foro guarde pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação, e o § 5º qualifica o ajuizamento em juízo aleatório como prática abusiva que justifica a declinação de competência de ofício. A A ignora a alteração legislativa. A C reproduz a regra geral (art. 65 e Súmula 33 do STJ), excepcionada pelos §§ 3º e 5º do art. 63. A D erra porque a competência territorial continua relativa; a ineficácia da cláusula não a torna absoluta.',
      fundamento: 'Art. 63, §§ 1º, 3º e 5º, do CPC (redação da Lei 14.879/2024)'
    },
    {
      id: 'processocivil-016',
      topico: 'Jurisdição e competência',
      dificuldade: 2,
      enunciado: 'Vítor pretende ajuizar ação de reintegração de posse de imóvel situado em Campinas/SP, ocupado por Xavier, domiciliado em São Paulo/SP, que se recusa a devolvê-lo após o término do comodato celebrado entre eles. O contrato de comodato previa eleição do foro de São Paulo. Assinale a afirmativa correta sobre o foro competente.',
      alternativas: [
        'É competente o foro do domicílio do réu, em São Paulo, pela regra geral do CPC.',
        'É competente o foro eleito no contrato, em São Paulo, em respeito à autonomia da vontade.',
        'É competente o foro de situação do imóvel, em Campinas, cujo juízo tem competência absoluta para a ação possessória imobiliária.',
        'O autor pode escolher qualquer dos foros, pois se trata de competência territorial e, portanto, relativa.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 47, § 2º, do CPC determina que a ação possessória imobiliária seja proposta no foro de situação da coisa, cujo juízo tem competência absoluta. A A aplica a regra geral do art. 46, afastada pela norma especial. A B ignora que a competência absoluta não pode ser modificada por convenção das partes (art. 62). A D erra porque, embora territorial, essa competência é absoluta por expressa disposição legal.',
      fundamento: 'Arts. 46, 47, § 2º, e 62 do CPC'
    },
    {
      id: 'processocivil-017',
      topico: 'Intervenção de terceiros',
      dificuldade: 2,
      enunciado: 'Na fase de cumprimento de sentença promovido por Joana contra Kappa Ltda., não foram encontrados bens. Joana requereu a desconsideração da personalidade jurídica para atingir o patrimônio do sócio Leonardo, alegando confusão patrimonial. Assinale a afirmativa correta.',
      alternativas: [
        'A instauração do incidente suspenderá o processo; Leonardo será citado para manifestar-se e requerer as provas cabíveis em 15 dias, e a decisão que resolver o incidente será interlocutória, impugnável por agravo de instrumento.',
        'O incidente de desconsideração só é cabível na fase de conhecimento, devendo Joana ajuizar ação autônoma contra Leonardo.',
        'Leonardo será intimado para pagar o débito em 3 dias, sob pena de penhora, sem direito a manifestação prévia.',
        'A decisão que resolver o incidente é sentença, impugnável por apelação.'
      ],
      correta: 0,
      comentario: 'Correta a A: o IDPJ é cabível em todas as fases do processo de conhecimento, no cumprimento de sentença e na execução de título extrajudicial (art. 134, caput); sua instauração suspende o processo, salvo se requerido na inicial (§ 3º); o sócio é citado para manifestar-se e requerer provas em 15 dias (art. 135); a decisão é interlocutória (art. 136) e desafia agravo de instrumento (art. 1.015, IV). A B contraria o art. 134. A C suprime o contraditório prévio exigido pelo art. 135. A D erra a natureza do pronunciamento e o recurso.',
      fundamento: 'Arts. 134, 135, 136 e 1.015, IV, do CPC'
    },
    {
      id: 'processocivil-018',
      topico: 'Intervenção de terceiros',
      dificuldade: 2,
      enunciado: 'Em ação civil de grande repercussão, o juiz admitiu a Associação Nacional de Defesa do Meio Ambiente como amicus curiae. Proferida a sentença, contrária à tese sustentada pela associação, ela pretende interpor apelação. Assinale a afirmativa correta.',
      alternativas: [
        'A associação pode apelar, pois foi admitida no processo e possui interesse institucional na controvérsia.',
        'A admissão do amicus curiae deslocou a competência para o tribunal, que deveria ter julgado a causa originariamente.',
        'A parte contrária poderia ter impugnado a decisão que admitiu a associação por meio de agravo de instrumento.',
        'A associação não pode interpor apelação, pois a intervenção do amicus curiae não autoriza a interposição de recursos, ressalvadas a oposição de embargos de declaração e a interposição de recurso contra a decisão que julgar o IRDR.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 138, § 1º, do CPC estabelece que a intervenção do amicus curiae não implica alteração de competência nem autoriza a interposição de recursos, ressalvados os embargos de declaração e o recurso contra a decisão que julgar o incidente de resolução de demandas repetitivas (§ 3º). A A contraria essa limitação. A B contraria a regra de que não há alteração de competência. A C erra porque a decisão que admite ou solicita a intervenção é irrecorrível (art. 138, caput).',
      fundamento: 'Art. 138, caput e §§ 1º e 3º, do CPC'
    },
    {
      id: 'processocivil-019',
      topico: 'Normas fundamentais do processo civil',
      dificuldade: 2,
      enunciado: 'Em ação de cobrança, o réu contestou apenas o mérito, sem alegar prescrição. Encerrada a instrução, o juiz, sem ouvir as partes sobre o tema, proferiu sentença reconhecendo de ofício a prescrição da pretensão. Assinale a afirmativa correta.',
      alternativas: [
        'A sentença é correta, pois as matérias cognoscíveis de ofício dispensam contraditório prévio.',
        'A sentença é nula, pois o juiz não pode reconhecer a prescrição de ofício em nenhuma hipótese.',
        'A sentença violou a vedação à decisão surpresa, pois, embora a prescrição possa ser reconhecida de ofício, o juiz deveria ter dado às partes oportunidade de se manifestar previamente.',
        'A sentença é válida, pois o contraditório sobre a prescrição poderá ser exercido em sede de apelação.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 10 do CPC proíbe o juiz de decidir com base em fundamento sobre o qual não se tenha dado às partes oportunidade de manifestação, ainda que se trate de matéria apreciável de ofício, e o art. 487, parágrafo único, especifica que, ressalvada a improcedência liminar (art. 332, § 1º), prescrição e decadência não serão reconhecidas sem prévia oportunidade de manifestação. A A contraria o art. 10. A B erra porque a prescrição pode ser reconhecida de ofício (art. 487, II). A D erra porque o contraditório exigido é prévio, não diferido para o recurso.',
      fundamento: 'Arts. 10, 332, § 1º, e 487, II e parágrafo único, do CPC'
    },
    {
      id: 'processocivil-020',
      topico: 'Procedimentos especiais',
      dificuldade: 2,
      enunciado: 'Munida de contrato escrito de prestação de serviços sem eficácia de título executivo e de notas fiscais, a sociedade Rho Serviços Ltda. ajuizou ação monitória contra Sônia. O juiz considerou evidente o direito da autora e deferiu a expedição do mandado. Assinale a afirmativa correta.',
      alternativas: [
        'Sônia será citada para pagar em 3 dias, acrescidos honorários advocatícios de 10% do valor da causa.',
        'Sônia será citada para pagar em 15 dias, com honorários advocatícios de 5% do valor atribuído à causa, ficando isenta de custas se cumprir o mandado; não havendo pagamento nem embargos, constitui-se de pleno direito o título executivo judicial.',
        'Os embargos monitórios dependem de prévia segurança do juízo.',
        'A ação monitória não poderia ser proposta caso a devedora fosse a Fazenda Pública.'
      ],
      correta: 1,
      comentario: 'Correta a B: na monitória, o juiz defere mandado concedendo ao réu 15 dias para cumprimento e pagamento de honorários de 5% do valor atribuído à causa (art. 701, caput); o réu fica isento de custas se cumprir o mandado no prazo (§ 1º); não realizado o pagamento nem opostos embargos, constitui-se de pleno direito o título executivo judicial (§ 2º). A A mistura o prazo e os honorários da execução de título extrajudicial (arts. 827 e 829). A C contraria o art. 702, caput, segundo o qual os embargos independem de prévia segurança do juízo. A D contraria o art. 700, § 6º, e a Súmula 339 do STJ.',
      fundamento: 'Arts. 700, § 6º, 701, caput e §§ 1º e 2º, e 702 do CPC; Súmula 339 do STJ'
    },
    {
      id: 'processocivil-021',
      topico: 'Procedimentos especiais',
      dificuldade: 3,
      enunciado: 'Rita adquiriu imóvel de Tomás por compromisso de compra e venda quitado, mas não registrado no cartório de imóveis, e passou a residir no bem. Em execução movida por credor de Tomás, o imóvel foi penhorado e arrematado há 3 dias, sem que a carta de arrematação tenha sido assinada. Rita consulta você. Assinale a afirmativa correta.',
      alternativas: [
        'Rita pode opor embargos de terceiro, pois na execução eles são cabíveis até 5 dias depois da arrematação, mas sempre antes da assinatura da respectiva carta, e o compromisso de compra e venda, ainda que não registrado, legitima a defesa da posse.',
        'Rita não pode opor embargos de terceiro, pois o compromisso de compra e venda não registrado não confere legitimidade para defender a posse.',
        'O prazo para embargos de terceiro terminou com a arrematação, restando a Rita apenas ação anulatória autônoma.',
        'Rita pode opor embargos de terceiro a qualquer tempo, enquanto não extinta a execução por sentença transitada em julgado.'
      ],
      correta: 0,
      comentario: 'Correta a A: no cumprimento de sentença ou no processo de execução, os embargos de terceiro podem ser opostos até 5 dias depois da adjudicação, da alienação por iniciativa particular ou da arrematação, mas sempre antes da assinatura da respectiva carta (art. 675). A Súmula 84 do STJ admite embargos de terceiro fundados na posse advinda de compromisso de compra e venda, ainda que desprovido de registro. A B contraria a Súmula 84. A C contraria o art. 675. A D aplica a regra do processo de conhecimento (enquanto não transitada em julgado a sentença), inaplicável à execução.',
      fundamento: 'Arts. 674 e 675 do CPC; Súmula 84 do STJ'
    },
    {
      id: 'processocivil-022',
      topico: 'Honorários, despesas e gratuidade da justiça',
      dificuldade: 2,
      enunciado: 'Em ação indenizatória, o autor teve acolhida apenas metade de seus pedidos. Na sentença, o juiz reconheceu a sucumbência recíproca, fixou honorários para os advogados de ambas as partes e determinou a compensação integral entre eles. O advogado do autor consulta você. Assinale a afirmativa correta.',
      alternativas: [
        'A compensação é admitida em caso de sucumbência recíproca, conforme orientação consolidada desde o CPC/1973.',
        'Os honorários de sucumbência pertencem à parte vencedora, que pode compensá-los com débitos que tenha perante a parte contrária.',
        'Os honorários deveriam ter sido fixados por equidade, pois houve sucumbência recíproca.',
        'É vedada a compensação de honorários em caso de sucumbência parcial, pois os honorários constituem direito do advogado e têm natureza alimentar.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 85, § 14, do CPC dispõe que os honorários constituem direito do advogado e têm natureza alimentar, com os privilégios dos créditos trabalhistas, sendo vedada a compensação em caso de sucumbência parcial; no mesmo sentido, a Súmula Vinculante 47 reconhece a natureza alimentar. A A invoca entendimento (Súmula 306 do STJ) superado pelo CPC/2015. A B contraria a titularidade do advogado (art. 85, caput e § 14; art. 23 da Lei 8.906/1994). A C erra porque a equidade só se aplica nas hipóteses do § 8º (proveito inestimável ou irrisório, ou valor da causa muito baixo), não pela sucumbência recíproca.',
      fundamento: 'Art. 85, §§ 8º e 14, do CPC; Súmula Vinculante 47; art. 23 da Lei 8.906/1994'
    },
    {
      id: 'processocivil-023',
      topico: 'Honorários, despesas e gratuidade da justiça',
      dificuldade: 2,
      enunciado: 'Tiago, trabalhador autônomo, ajuizou ação assistido por advogado particular e requereu gratuidade da justiça, declarando insuficiência de recursos. O juiz indeferiu o pedido de plano, sob o único fundamento de que a contratação de advogado particular demonstra capacidade financeira. Assinale a afirmativa correta.',
      alternativas: [
        'O indeferimento está correto, pois a contratação de advogado particular afasta a presunção de insuficiência.',
        'O indeferimento está incorreto, pois a assistência por advogado particular não impede a gratuidade, presume-se verdadeira a alegação de insuficiência da pessoa natural e, antes de indeferir, o juiz deve determinar a comprovação dos pressupostos; contra a decisão cabe agravo de instrumento.',
        'O indeferimento está incorreto, e, se concedida a gratuidade, Tiago ficará isento também das multas processuais que lhe forem impostas.',
        'O indeferimento está incorreto, mas a decisão só pode ser impugnada em preliminar de apelação.'
      ],
      correta: 1,
      comentario: 'Correta a B: presume-se verdadeira a alegação de insuficiência deduzida por pessoa natural (art. 99, § 3º); a assistência por advogado particular não impede a concessão (§ 4º); o juiz só pode indeferir se houver elementos que evidenciem a falta dos pressupostos, devendo antes determinar a comprovação (§ 2º); contra a decisão que indefere a gratuidade cabe agravo de instrumento (arts. 101 e 1.015, V). A A contraria o § 4º. A C contraria o art. 98, § 4º (a gratuidade não afasta o pagamento das multas processuais). A D contraria o art. 101.',
      fundamento: 'Arts. 98, § 4º, 99, §§ 2º a 4º, 101 e 1.015, V, do CPC'
    },
    {
      id: 'processocivil-024',
      topico: 'Precedentes, IRDR e IAC',
      dificuldade: 2,
      enunciado: 'Diversas ações sobre a mesma questão de direito tramitam no Tribunal de Justiça do Estado Y e em seus juízos. Um advogado pretende suscitar incidente de resolução de demandas repetitivas (IRDR) e estuda seus requisitos. Assinale a afirmativa correta.',
      alternativas: [
        'O IRDR pode ser instaurado preventivamente, mesmo sem efetiva repetição de processos, bastando o risco potencial de multiplicação de demandas.',
        'A desistência da parte no processo do qual se originou o incidente impede o exame do mérito do IRDR.',
        'É incabível o IRDR quando um dos tribunais superiores, no âmbito de sua competência, já tiver afetado recurso para definição de tese sobre a mesma questão de direito material ou processual repetitiva.',
        'O processamento do IRDR exige o recolhimento de custas processuais pelo suscitante.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 976, § 4º, do CPC declara incabível o IRDR quando um dos tribunais superiores já tiver afetado recurso para definição de tese sobre a questão repetitiva. A A contraria o art. 976, I, que exige efetiva repetição de processos (o caráter preventivo é próprio do IAC, art. 947, que dispensa repetição). A B contraria o § 1º do art. 976 (a desistência ou o abandono não impedem o exame do mérito, assumindo o MP a titularidade, § 2º). A D contraria o § 5º (não são exigidas custas).',
      fundamento: 'Arts. 947 e 976, I, e §§ 1º, 2º, 4º e 5º, do CPC'
    },
    {
      id: 'processocivil-025',
      topico: 'Ação rescisória',
      dificuldade: 3,
      enunciado: 'A sentença que julgou improcedente o pedido de Ulisses transitou em julgado em março de 2024, sem recurso. Em agosto de 2026, Ulisses descobriu documento cuja existência ignorava e que, por si só, seria capaz de lhe assegurar pronunciamento favorável. Ele pretende ajuizar ação rescisória. Assinale a afirmativa correta.',
      alternativas: [
        'A rescisória fundada em prova nova pode ser ajuizada no prazo de 2 anos contados da descoberta, observado o prazo máximo de 5 anos contado do trânsito em julgado, devendo o autor depositar 5% do valor da causa.',
        'O direito à rescisão está extinto, pois o prazo é de 2 anos contados do trânsito em julgado, sem exceção.',
        'A rescisória fundada em prova nova pode ser proposta a qualquer tempo, por não se sujeitar a prazo decadencial.',
        'A rescisória exige depósito de 10% do valor da causa, que se converterá em multa se a ação for, por unanimidade, declarada inadmissível ou improcedente.'
      ],
      correta: 0,
      comentario: 'Correta a A: a regra geral é o prazo de 2 anos do trânsito em julgado da última decisão (art. 975), mas, fundada a ação em prova nova (art. 966, VII), o termo inicial é a data da descoberta, observado o prazo máximo de 5 anos do trânsito (art. 975, § 2º); o autor deve depositar 5% do valor da causa (art. 968, II). A B ignora o § 2º. A C contraria a existência de prazo máximo. A D erra o percentual do depósito, embora a conversão em multa por unanimidade esteja correta.',
      fundamento: 'Arts. 966, VII, 968, II, e 975, caput e § 2º, do CPC'
    },
    {
      id: 'processocivil-026',
      topico: 'Partes, procuradores e litisconsórcio',
      dificuldade: 3,
      enunciado: 'Zélia ajuizou ação para anular contrato de compra e venda celebrado entre Ari, Bia e Caio, como vendedores, e ela própria, como compradora, cuja validade é incindível. Apenas Ari e Bia foram citados; Caio nunca integrou o processo. Sobreveio sentença de mérito anulando o contrato. Assinale a afirmativa correta.',
      alternativas: [
        'A sentença é válida e eficaz em relação a todos, pois Caio poderia ter intervindo espontaneamente como assistente.',
        'A sentença é apenas ineficaz em relação a Caio, permanecendo válida e eficaz para Ari e Bia.',
        'A sentença é válida, pois cabia aos réus citados alegar a ausência de Caio na contestação, operando-se a preclusão.',
        'A sentença de mérito é nula, pois, tratando-se de litisconsórcio necessário unitário, a decisão deveria ser uniforme em relação a todos que deveriam ter integrado o processo.'
      ],
      correta: 3,
      comentario: 'Correta a D: a anulação de contrato com várias partes exige decisão uniforme para todas, configurando litisconsórcio necessário e unitário (arts. 114 e 116). Nos termos do art. 115, I, a sentença de mérito proferida sem a integração do contraditório é nula se a decisão deveria ser uniforme. A B aplica a regra do inciso II (ineficácia para os não citados), própria do litisconsórcio necessário simples. A A e a C erram porque a integração do litisconsorte necessário é condição de validade do processo, que o juiz deve determinar (art. 115, parágrafo único), não se sujeitando à preclusão nem sendo suprida pela possibilidade de assistência.',
      fundamento: 'Arts. 114, 115, I e II, e parágrafo único, e 116 do CPC'
    },
    {
      id: 'processocivil-027',
      topico: 'Juizados Especiais Cíveis',
      dificuldade: 1,
      enunciado: 'Vera ajuizou, sem advogado, ação no Juizado Especial Cível pleiteando indenização equivalente a 15 salários mínimos. O pedido foi julgado improcedente, e ela pretende recorrer. Assinale a afirmativa correta.',
      alternativas: [
        'Cabe apelação, no prazo de 15 dias, e Vera pode interpô-la sem advogado, pois a causa não excede 20 salários mínimos.',
        'Cabe recurso inominado, no prazo de 10 dias, devendo Vera estar obrigatoriamente representada por advogado, e o preparo deve ser feito nas 48 horas seguintes à interposição, independentemente de intimação.',
        'Cabe recurso inominado, no prazo de 10 dias, e Vera pode interpô-lo sem advogado, pois a causa não excede 20 salários mínimos.',
        'Cabe recurso inominado, no prazo de 5 dias, com preparo comprovado no ato da interposição, sob pena de deserção.'
      ],
      correta: 1,
      comentario: 'Correta a B: contra a sentença do Juizado cabe recurso para o próprio Juizado (recurso inominado), no qual as partes devem estar obrigatoriamente representadas por advogado (art. 41, caput e § 2º, da Lei 9.099/1995), interposto em 10 dias (art. 42), com preparo nas 48 horas seguintes à interposição, independentemente de intimação, sob pena de deserção (art. 42, § 1º). A A erra o recurso e o prazo. A C ignora a exigência de advogado no recurso; a dispensa até 20 salários mínimos (art. 9º) vale apenas no primeiro grau. A D erra o prazo e o momento do preparo.',
      fundamento: 'Arts. 9º, 41 e 42, § 1º, da Lei 9.099/1995'
    },
    {
      id: 'processocivil-028',
      topico: 'Provas, sentença e coisa julgada',
      dificuldade: 3,
      enunciado: 'Em ação de alimentos ajuizada por Yuri, representado por sua mãe, contra Zeca, o juiz, ao fundamentar a sentença de procedência, reconheceu expressamente a paternidade, questão prejudicial ao pedido. Zeca, citado regularmente, não contestou e foi declarado revel. Pergunta-se se a resolução da questão da paternidade fez coisa julgada. Assinale a afirmativa correta.',
      alternativas: [
        'Sim, pois toda questão prejudicial decidida na fundamentação da sentença faz coisa julgada no CPC/2015.',
        'Sim, desde que o autor tenha ajuizado ação declaratória incidental, único meio de estender a coisa julgada à questão prejudicial.',
        'Não, pois a extensão da coisa julgada à questão prejudicial exige contraditório prévio e efetivo, o que não ocorre no caso de revelia.',
        'Não, pois a coisa julgada jamais alcança questões prejudiciais, que só podem ser decididas em ação autônoma.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 503, § 1º, do CPC estende a coisa julgada à questão prejudicial decidida expressa e incidentemente se dela depender o julgamento do mérito, se houver contraditório prévio e efetivo, não se aplicando no caso de revelia (inciso II), e se o juízo for competente em razão da matéria e da pessoa. A A ignora os requisitos cumulativos. A B reproduz o sistema do CPC/1973, que exigia ação declaratória incidental. A D contraria o próprio § 1º do art. 503.',
      fundamento: 'Art. 503, § 1º, I a III, do CPC'
    }
  ],
  flashcards: [
    { id: 'processocivil-f001', frente: 'Prazo geral dos recursos e exceção', verso: '15 dias úteis para todos os recursos; embargos de declaração: 5 dias.', fundamento: 'Art. 1.003, § 5º, do CPC' },
    { id: 'processocivil-f002', frente: 'Prazo de contestação e termo inicial', verso: '15 dias úteis, contados da audiência de conciliação (ou da última sessão), do protocolo do pedido de cancelamento pelo réu ou, se não houver audiência, da data prevista no art. 231.', fundamento: 'Art. 335 do CPC' },
    { id: 'processocivil-f003', frente: 'Audiência de conciliação: antecedências', verso: 'Designada com antecedência mínima de 30 dias; réu citado com pelo menos 20 dias de antecedência; desinteresse do réu manifestado com 10 dias de antecedência.', fundamento: 'Art. 334, caput e § 5º, do CPC' },
    { id: 'processocivil-f004', frente: 'Multa pela ausência injustificada à audiência de conciliação', verso: 'Até 2% da vantagem econômica pretendida ou do valor da causa, revertida à União ou ao Estado (ato atentatório).', fundamento: 'Art. 334, § 8º, do CPC' },
    { id: 'processocivil-f005', frente: 'Emenda da petição inicial', verso: '15 dias, com indicação precisa do que deve ser corrigido.', fundamento: 'Art. 321 do CPC' },
    { id: 'processocivil-f006', frente: 'Retratação do juiz na apelação', verso: '5 dias: indeferimento da inicial (art. 331), improcedência liminar (art. 332, § 3º) e extinção sem resolução do mérito (art. 485, § 7º).', fundamento: 'Arts. 331, 332, § 3º, e 485, § 7º, do CPC' },
    { id: 'processocivil-f007', frente: 'Cumprimento de sentença de quantia certa', verso: 'Pagamento em 15 dias; se não pagar, multa de 10% + honorários de 10%; impugnação em 15 dias após o prazo de pagamento, sem penhora.', fundamento: 'Arts. 523 e 525 do CPC' },
    { id: 'processocivil-f008', frente: 'Cumprimento de sentença contra a Fazenda Pública', verso: 'Impugnação em 30 dias; não incide a multa de 10%; pagamento por precatório ou RPV.', fundamento: 'Arts. 534, § 2º, e 535 do CPC' },
    { id: 'processocivil-f009', frente: 'Execução de título extrajudicial: citação e honorários', verso: 'Pagar em 3 dias; honorários de 10%, reduzidos à metade se houver pagamento integral nesse prazo; embargos em 15 dias, sem garantia.', fundamento: 'Arts. 827, § 1º, 829, 914 e 915 do CPC' },
    { id: 'processocivil-f010', frente: 'Parcelamento na execução (art. 916)', verso: 'Depósito de 30% (com custas e honorários) + até 6 parcelas mensais, correção e juros de 1% ao mês; renúncia aos embargos; não cabe no cumprimento de sentença.', fundamento: 'Art. 916 do CPC' },
    { id: 'processocivil-f011', frente: 'Ação rescisória: prazo e depósito', verso: '2 anos do trânsito da última decisão; prova nova: da descoberta, até 5 anos do trânsito; depósito de 5% do valor da causa, limitado a 1.000 salários mínimos.', fundamento: 'Arts. 968, II e § 2º, e 975 do CPC' },
    { id: 'processocivil-f012', frente: 'Estabilização da tutela antecipada antecedente', verso: 'Ocorre se o réu não recorrer; ação para rever, reformar ou invalidar em 2 anos da ciência da extinção; não faz coisa julgada.', fundamento: 'Art. 304, §§ 5º e 6º, do CPC' },
    { id: 'processocivil-f013', frente: 'Tutela antecedente: prazos', verso: 'Antecipada: aditamento em 15 dias (ou mais, se fixado pelo juiz). Cautelar: contestação em 5 dias; pedido principal em 30 dias da efetivação.', fundamento: 'Arts. 303, § 1º, I, 306 e 308 do CPC' },
    { id: 'processocivil-f014', frente: 'Quem tem prazo em dobro no CPC', verso: 'MP, Advocacia Pública, Defensoria, núcleos de prática jurídica e entidades conveniadas com a Defensoria; litisconsortes com advogados de escritórios distintos (só em autos físicos).', fundamento: 'Arts. 180, 183, 186, § 3º, e 229 do CPC' },
    { id: 'processocivil-f015', frente: 'Suspensão de prazos no fim do ano', verso: 'De 20 de dezembro a 20 de janeiro, inclusive.', fundamento: 'Art. 220 do CPC' },
    { id: 'processocivil-f016', frente: 'Prazos do juiz', verso: 'Despachos: 5 dias. Decisões interlocutórias: 10 dias. Sentenças: 30 dias.', fundamento: 'Art. 226 do CPC' },
    { id: 'processocivil-f017', frente: 'Remessa necessária: valores que a dispensam', verso: 'Condenação ou proveito inferior a 1.000 salários mínimos (União), 500 (Estados, DF e capitais) e 100 (demais Municípios).', fundamento: 'Art. 496, § 3º, do CPC' },
    { id: 'processocivil-f018', frente: 'Limite de testemunhas', verso: 'Até 10 testemunhas no total, sendo no máximo 3 para a prova de cada fato; rol em prazo comum não superior a 15 dias.', fundamento: 'Art. 357, §§ 4º e 6º, do CPC' },
    { id: 'processocivil-f019', frente: 'Embargos de terceiro: prazo na execução', verso: 'Até 5 dias após adjudicação, alienação por iniciativa particular ou arrematação, sempre antes da assinatura da carta.', fundamento: 'Art. 675 do CPC' },
    { id: 'processocivil-f020', frente: 'Inventário: prazos', verso: 'Instauração em 2 meses da abertura da sucessão; conclusão nos 12 meses subsequentes, prorrogáveis.', fundamento: 'Art. 611 do CPC' },
    { id: 'processocivil-f021', frente: 'Tema 988 do STJ', verso: 'O rol do art. 1.015 é de taxatividade mitigada: cabe agravo de instrumento quando há urgência decorrente da inutilidade do julgamento da questão na apelação.', fundamento: 'Tema 988 do STJ' },
    { id: 'processocivil-f022', frente: 'Multas recursais', verso: 'Embargos de declaração protelatórios: até 2% (reiteração: até 10%). Agravo interno manifestamente inadmissível ou improcedente por unanimidade: 1% a 5% do valor atualizado da causa.', fundamento: 'Arts. 1.021, § 4º, e 1.026, §§ 2º e 3º, do CPC' },
    { id: 'processocivil-f023', frente: 'Citação eletrônica (Lei 14.195/2021)', verso: 'Confirmação do recebimento em até 3 dias úteis; prazo começa no 5º dia útil seguinte à confirmação; falta injustificada de confirmação: multa de até 5% do valor da causa.', fundamento: 'Arts. 231, IX, e 246, §§ 1º-A e 1º-C, do CPC' },
    { id: 'processocivil-f024', frente: 'Juizados Especiais Cíveis: limites e recurso', verso: 'Até 40 salários mínimos; sem advogado até 20; recurso inominado em 10 dias, com advogado e preparo em 48 horas; não cabem rescisória nem REsp.', fundamento: 'Arts. 3º, 9º, 41, 42 e 59 da Lei 9.099/1995; Súmula 203 do STJ' }
  ]
});
