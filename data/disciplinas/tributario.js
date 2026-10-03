/* Direito Tributário — conteúdo para a 1ª fase (48º Exame). Base legal vigente em 21/09/2026. */
OAB.registrar({
  id: 'tributario',
  topicos: [
    { nome: 'Princípios tributários e limitações ao poder de tributar', relevancia: 3 },
    { nome: 'Imunidades tributárias', relevancia: 3 },
    { nome: 'Responsabilidade tributária', relevancia: 3 },
    { nome: 'Crédito tributário: suspensão, extinção e exclusão', relevancia: 3 },
    { nome: 'Decadência e prescrição', relevancia: 3 },
    { nome: 'Execução fiscal e ações tributárias', relevancia: 3 },
    { nome: 'Espécies tributárias', relevancia: 3 },
    { nome: 'Impostos em espécie', relevancia: 2 },
    { nome: 'Competência tributária', relevancia: 2 },
    { nome: 'Reforma tributária (EC 132/2023 e LC 214/2025)', relevancia: 2 },
    { nome: 'Legislação tributária: vigência, aplicação e interpretação', relevancia: 2 },
    { nome: 'Obrigação tributária e sujeição passiva', relevancia: 2 },
    { nome: 'Lançamento tributário', relevancia: 2 },
    { nome: 'Garantias e privilégios do crédito tributário', relevancia: 1 },
    { nome: 'Administração tributária e certidões', relevancia: 1 },
    { nome: 'Repartição de receitas tributárias', relevancia: 1 }
  ],
  resumo: [
    {
      titulo: 'Princípios e limitações ao poder de tributar (arts. 150 a 152 da CF)',
      itens: [
        'Legalidade: exigir ou aumentar tributo só por lei (art. 150, I). O Executivo pode alterar, nos limites da lei, as alíquotas de II, IE, IPI e IOF (art. 153, § 1º). Atualização monetária da base de cálculo não é majoração (art. 97, § 2º, CTN). Alteração do prazo de recolhimento não se sujeita à anterioridade (SV 50).',
        'Anterioridade anual (art. 150, III, b) — exceções clássicas: II, IE, IPI, IOF, empréstimo compulsório de guerra ou calamidade, imposto extraordinário de guerra, contribuições sociais da seguridade (só noventena, art. 195, § 6º) e restabelecimento de alíquotas da CIDE-combustíveis e do ICMS monofásico sobre combustíveis.',
        'Anterioridade nonagesimal (art. 150, III, c) — exceções: II, IE, IR, IOF, empréstimo compulsório de guerra ou calamidade, imposto extraordinário de guerra e fixação da base de cálculo do IPVA e do IPTU (art. 150, § 1º).',
        'Irretroatividade (art. 150, III, a) e vedação ao confisco (art. 150, IV), aplicável também às multas (STF).',
        'Isonomia (art. 150, II), liberdade de tráfego (art. 150, V, ressalvado o pedágio), uniformidade geográfica da tributação federal (art. 151, I) e vedação à isenção heterônoma (art. 151, III).',
        'EC 132/2023: o Sistema Tributário Nacional deve observar os princípios da simplicidade, da transparência, da justiça tributária, da cooperação e da defesa do meio ambiente (art. 145, § 3º); as alterações da legislação buscarão atenuar efeitos regressivos (art. 145, § 4º).'
      ]
    },
    {
      titulo: 'Imunidades (art. 150, VI, e outras)',
      itens: [
        'Imunidades do art. 150, VI, alcançam apenas impostos — não taxas nem contribuições de melhoria.',
        'Recíproca (a): patrimônio, renda e serviços dos entes; estende-se a autarquias e fundações públicas vinculadas às finalidades essenciais (§ 2º); não alcança atividade econômica com contraprestação ou tarifa (§ 3º).',
        'Religiosa (b), com redação da EC 132/2023: entidades religiosas e templos de qualquer culto, inclusive suas organizações assistenciais e beneficentes.',
        'Subjetiva (c): partidos e fundações, entidades sindicais dos trabalhadores, instituições de educação e de assistência social sem fins lucrativos, atendidos os requisitos de lei complementar (art. 14 do CTN).',
        'SV 52: o imóvel de entidade do art. 150, VI, c, ainda que alugado a terceiros, permanece imune ao IPTU se os aluguéis forem aplicados nas finalidades essenciais.',
        'Livros, jornais, periódicos e papel destinado à impressão (d): inclui livros eletrônicos e suportes exclusivamente utilizados para fixá-los (SV 57). Fonogramas e videofonogramas musicais produzidos no Brasil (e).',
        'As imunidades da alínea b e c compreendem somente patrimônio, renda e serviços relacionados com as finalidades essenciais (art. 150, § 4º).',
        'EC 137/2025: IPVA não incide sobre veículos terrestres de passageiros, caminhonetes e mistos com 20 anos ou mais de fabricação, excetuados micro-ônibus, ônibus, reboques e semirreboques (art. 155, § 6º, III, e).'
      ]
    },
    {
      titulo: 'Espécies tributárias e competência',
      itens: [
        'Impostos (fato gerador independente de atividade estatal — art. 16 CTN), taxas (poder de polícia ou serviço público específico e divisível — art. 145, II, CF), contribuições de melhoria (obra pública com valorização), empréstimos compulsórios (art. 148) e contribuições especiais (arts. 149, 149-A e 195).',
        'Taxa não pode ter base de cálculo própria de imposto (art. 145, § 2º), mas pode adotar um ou mais elementos da base de um imposto, sem integral identidade (SV 29). Taxa de coleta de lixo domiciliar é válida (SV 19); serviço de iluminação pública não pode ser remunerado por taxa (SV 41).',
        'Contribuição de iluminação pública (art. 149-A, EC 132/2023): Municípios e DF, para custeio, expansão e melhoria da iluminação pública e de sistemas de monitoramento para segurança e preservação de logradouros, podendo ser cobrada na fatura de energia elétrica.',
        'Empréstimo compulsório: só a União, por lei complementar, em (I) calamidade pública, guerra externa ou sua iminência — sem anterioridade — ou (II) investimento público urgente e relevante — com anterioridade; recursos vinculados à despesa que o fundamentou (art. 148).',
        'Competência residual: União, por lei complementar, impostos não cumulativos com fato gerador e base de cálculo diversos dos discriminados (art. 154, I). Impostos extraordinários de guerra: União, por lei ordinária (art. 154, II).',
        'Competência tributária é indelegável; a capacidade tributária ativa (arrecadar e fiscalizar) pode ser delegada (art. 7º CTN). O Município que optar por fiscalizar e cobrar o ITR fica com 100% da arrecadação, sem poder reduzir o imposto (arts. 153, § 4º, III, e 158, II, CF).',
        'Lei complementar cabe para normas gerais, inclusive obrigação, lançamento, crédito, prescrição e decadência (art. 146, III); por isso, a SV 8 declarou inconstitucionais os prazos de 10 anos da Lei 8.212/1991.'
      ]
    },
    {
      titulo: 'Legislação, obrigação e lançamento (CTN)',
      itens: [
        'Lei tributária retroage quando expressamente interpretativa ou, em ato não definitivamente julgado, quando deixa de definir ato como infração ou comina penalidade menos severa (art. 106).',
        'Interpretação literal para suspensão ou exclusão do crédito, outorga de isenção e dispensa de obrigações acessórias (art. 111); na dúvida, interpretação mais favorável ao acusado quanto a infrações (art. 112).',
        'Obrigação principal (pagar tributo ou penalidade) e acessória (prestações positivas ou negativas); a acessória, pelo simples fato da inobservância, converte-se em principal quanto à penalidade (art. 113).',
        'O fato gerador é interpretado abstraindo-se a validade jurídica dos atos e a natureza do seu objeto (art. 118 — pecunia non olet). Capacidade tributária passiva independe da capacidade civil (art. 126).',
        'Lançamento: de ofício (art. 149), por declaração (art. 147) e por homologação (art. 150). Rege-se pela lei vigente na data do fato gerador, ainda que posteriormente modificada (art. 144), salvo normas sobre fiscalização e garantias (§ 1º). Mudança de critério jurídico só vale para fatos geradores posteriores (art. 146).',
        'LC 236/2026 (vigente desde 04/09/2026): fixou tetos para multas calculadas sobre o tributo (art. 113-A do CTN) — em regra 75%; até 100% em caso de dolo, fraude, sonegação ou conluio; até 150% em reincidência — e reduções escalonadas para pagamento ou parcelamento rápidos, com prazo de 2 anos para adaptação das legislações dos entes.'
      ]
    },
    {
      titulo: 'Responsabilidade tributária (arts. 128 a 138 do CTN)',
      itens: [
        'Solidariedade (art. 124): interesse comum no fato gerador ou previsão legal; não comporta benefício de ordem. Pagamento por um aproveita aos demais; isenção ou remissão exonera todos, salvo se pessoal; interrupção da prescrição favorece ou prejudica a todos (art. 125).',
        'Sucessão imobiliária (art. 130): créditos de impostos sobre o imóvel sub-rogam-se no adquirente, salvo prova de quitação; na arrematação em hasta pública, a sub-rogação ocorre sobre o preço — é inválida cláusula de edital que transfira esses débitos ao arrematante (STJ, Tema 1134).',
        'Sucessão empresarial: fusão, transformação, incorporação e cisão (art. 132); a responsabilidade alcança tributos e multas moratórias ou punitivas (Súmula 554 do STJ).',
        'Aquisição de fundo de comércio (art. 133): responsabilidade integral se o alienante cessar a exploração; subsidiária se ele prosseguir ou iniciar, em 6 meses, nova atividade. Não se aplica à alienação judicial em falência ou recuperação judicial (§ 1º).',
        'Art. 134: responsabilidade de terceiros (pais, tutores, administradores de bens, inventariante, síndico, tabeliães, sócios em liquidação) quando impossível exigir do contribuinte; quanto às penalidades, só as de caráter moratório.',
        'Art. 135: responsabilidade pessoal de diretores, gerentes e representantes por atos com excesso de poderes ou infração de lei, contrato social ou estatutos. O mero inadimplemento não basta (Súmula 430 do STJ); a dissolução irregular presumida legitima o redirecionamento ao sócio-gerente (Súmula 435 do STJ), devendo responder quem detinha poderes de administração na data da dissolução irregular (Tema 981 do STJ).',
        'Denúncia espontânea (art. 138, com a LC 236/2026): exclui a responsabilidade, inclusive quanto à multa de mora, se acompanhada do pagamento do tributo e dos juros de mora (ou do depósito do valor arbitrado); não é espontânea após o início de procedimento administrativo ou medida de fiscalização relacionados com a infração.'
      ]
    },
    {
      titulo: 'Suspensão, extinção e exclusão do crédito',
      itens: [
        'Suspensão (art. 151): moratória; depósito do montante integral (em dinheiro — Súmula 112 do STJ); reclamações e recursos administrativos; liminar em MS; liminar ou tutela antecipada em outras ações; parcelamento.',
        'Novas causas de suspensão (LC 236/2026): instituição da arbitragem especial tributária e aduaneira; proposta de transação aceita pela administração; acordo de mediação, até sua dissolução; aceitação, pelo credor, de seguro garantia ou fiança bancária em execução fiscal, enquanto conformes às normas e não caracterizado o sinistro (art. 151, VII a X).',
        'A suspensão não dispensa o cumprimento das obrigações acessórias (art. 151, parágrafo único).',
        'Extinção (art. 156): pagamento, compensação, transação, remissão, prescrição e decadência, conversão do depósito em renda, pagamento antecipado e homologação, consignação julgada procedente, decisão administrativa irreformável, decisão judicial transitada em julgado, dação em pagamento de bens imóveis e — LC 236/2026 — sentença arbitral favorável ao sujeito passivo transitada em julgado e cumprimento de acordo de mediação.',
        'Compensação: depende de lei (art. 170); vedada antes do trânsito em julgado quando o tributo é contestado judicialmente (art. 170-A); não pode ser deferida por liminar (Súmula 212 do STJ); MS é via adequada para declarar o direito à compensação (Súmula 213 do STJ).',
        'Exclusão (art. 175): isenção e anistia. Isenção decorre de lei, não se estende a taxas e contribuições de melhoria salvo disposição em contrário (art. 177), e, se onerosa e por prazo certo, não pode ser livremente suprimida (art. 178; Súmula 544 do STF). Anistia só alcança infrações anteriores à lei e não se aplica a crimes, contravenções ou atos com dolo, fraude ou simulação (art. 180).'
      ]
    },
    {
      titulo: 'Decadência e prescrição',
      itens: [
        'Decadência (prazo para lançar), regra geral: 5 anos contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado (art. 173, I); ou da decisão que anular, por vício formal, o lançamento anterior (art. 173, II).',
        'Lançamento por homologação com pagamento (ainda que parcial): 5 anos a contar do fato gerador (art. 150, § 4º), salvo dolo, fraude ou simulação, quando se aplica o art. 173, I (regra expressa após a LC 236/2026).',
        'Sem declaração e sem pagamento: aplica-se exclusivamente o art. 173, I (Súmula 555 do STJ).',
        'A declaração do contribuinte reconhecendo o débito constitui o crédito, dispensada outra providência (Súmula 436 do STJ); a prescrição corre do vencimento ou da entrega da declaração, o que for posterior.',
        'Prescrição: 5 anos contados da constituição definitiva do crédito (art. 174, caput). A LC 236/2026 renumerou o parágrafo único para § 1º e ampliou as causas de interrupção: despacho do juiz que ordenar a citação em execução fiscal (I), protesto judicial ou protesto extrajudicial da CDA (II), ato judicial que constitua em mora o devedor (III), ato inequívoco de reconhecimento do débito (IV) e novas hipóteses (V a IX).',
        'Prescrição e decadência são matérias de lei complementar (art. 146, III, b, CF; SV 8).'
      ]
    },
    {
      titulo: 'Garantias, privilégios e administração tributária',
      itens: [
        'O crédito tributário prefere a qualquer outro, ressalvados os decorrentes da legislação do trabalho ou de acidente de trabalho (art. 186). Na falência, não prefere aos extraconcursais, às restituições nem aos créditos com garantia real até o limite do bem; a multa tributária prefere apenas aos subordinados (art. 186, parágrafo único).',
        'A cobrança judicial do crédito tributário não se sujeita a concurso de credores ou habilitação em falência, recuperação judicial, inventário ou arrolamento (art. 187). O STF (ADPF 357) declarou não recepcionado o concurso de preferência entre União, Estados e Municípios (art. 187, parágrafo único).',
        'Fraude à execução fiscal: presume-se fraudulenta a alienação de bens por sujeito passivo em débito inscrito em dívida ativa, salvo reserva de bens suficientes (art. 185); não se aplica a Súmula 375 do STJ (Tema 290).',
        'Indisponibilidade de bens (art. 185-A): devedor citado que não paga nem apresenta bens à penhora no prazo legal, não sendo encontrados bens penhoráveis.',
        'Certidão negativa (art. 205) e certidão positiva com efeitos de negativa quando houver créditos não vencidos, em curso de cobrança com penhora, ou com exigibilidade suspensa (art. 206).',
        'Acesso a dados bancários pelo Fisco sem autorização judicial (LC 105/2001) é constitucional (STF, Tema 225).'
      ]
    },
    {
      titulo: 'Execução fiscal (Lei 6.830/1980) e ações tributárias',
      itens: [
        'A CDA pode ser emendada ou substituída até a decisão de primeira instância, assegurada a devolução do prazo para embargos (art. 2º, § 8º); vedada a modificação do sujeito passivo (Súmula 392 do STJ).',
        'Garantia da execução: depósito em dinheiro, fiança bancária ou seguro garantia, nomeação ou indicação de bens (art. 9º).',
        'Embargos: 30 dias contados do depósito, da juntada da prova da fiança ou do seguro garantia, ou da intimação da penhora (art. 16); não são admissíveis antes de garantida a execução (art. 16, § 1º).',
        'Exceção de pré-executividade: matérias conhecíveis de ofício que não demandem dilação probatória (Súmula 393 do STJ).',
        'É inconstitucional exigir depósito prévio como requisito de admissibilidade de ação judicial que discuta a exigibilidade do crédito (SV 28) ou de recurso administrativo (SV 21).',
        'Mandado de segurança: prazo de 120 dias (art. 23 da Lei 12.016/2009); não substitui ação de cobrança (Súmula 269 do STF) nem produz efeitos patrimoniais pretéritos (Súmula 271 do STF); não cabe contra lei em tese (Súmula 266 do STF).',
        'Repetição de indébito: em tributos indiretos, exige prova de ter assumido o encargo ou autorização de quem o suportou (art. 166; Súmula 546 do STF); prazo de 5 anos da extinção do crédito (art. 168, I).'
      ]
    },
    {
      titulo: 'Impostos em espécie — pontos mais cobrados',
      itens: [
        'ITCMD (EC 132/2023): imóveis — Estado da situação do bem; móveis, títulos e créditos — Estado onde era domiciliado o de cujus ou tiver domicílio o doador (art. 155, § 1º, I e II); progressivo em razão do valor (VI).',
        'IPVA (EC 132/2023): alíquotas diferenciadas por tipo, valor, utilização e impacto ambiental; incide sobre veículos aquáticos e aéreos, com exceções (aeronaves agrícolas e de serviços aéreos a terceiros, embarcações de transporte aquaviário ou de pesca, plataformas e tratores e máquinas agrícolas) e, após a EC 137/2025, veículos de passeio com 20 anos ou mais (art. 155, § 6º).',
        'IPTU: progressividade em razão do valor do imóvel e alíquotas diferentes por localização e uso (art. 156, § 1º); base de cálculo pode ser atualizada pelo Executivo conforme critérios da lei municipal (art. 156, § 1º, III, EC 132/2023).',
        'ISS: não incide sobre locação de bens móveis dissociada de serviço (SV 31); alíquota mínima de 2% (art. 8º-A da LC 116/2003).',
        'ITBI: fato gerador ocorre com o registro da transferência (STF, Tema 1124); a imunidade na integralização de capital não alcança o valor que exceder o capital a integralizar (STF, Tema 796). A LC 227/2026 reescreveu as normas do CTN sobre o ITBI, definindo a base de cálculo como o valor de negociação à vista em condições normais de mercado.',
        'ICMS não compõe a base de cálculo do PIS/Cofins (STF, Tema 69).'
      ]
    },
    {
      titulo: 'Reforma tributária (EC 132/2023, LC 214/2025 e LC 227/2026)',
      itens: [
        'IBS (art. 156-A): competência compartilhada entre Estados, DF e Municípios; legislação única nacional, com alíquota própria de cada ente fixada por lei específica; cobrado pelo somatório das alíquotas do Estado e do Município de destino; não cumulativo amplo; não incide sobre exportações; não integra sua própria base; vedados incentivos e benefícios não previstos na Constituição.',
        'CBS (art. 195, V): contribuição de competência da União, com as mesmas regras básicas do IBS (art. 149-B).',
        'Imposto Seletivo (art. 153, VIII): União; sobre produção, extração, comercialização ou importação de bens e serviços prejudiciais à saúde ou ao meio ambiente; não incide sobre exportações nem sobre operações com energia elétrica e telecomunicações; incide uma única vez; alíquotas fixadas em lei ordinária (art. 153, § 6º).',
        'Transição (ADCT): 2026 — IBS a 0,1% e CBS a 0,9% (fase de teste, compensáveis); 2027 — CBS cobrada, PIS/Cofins extintos, IPI com alíquota zero (salvo produtos da ZFM) e início do Imposto Seletivo; 2027-2028 — IBS a 0,1%; 2029 a 2032 — ICMS e ISS reduzidos a 9/10, 8/10, 7/10 e 6/10; 2033 — extinção do ICMS e do ISS (arts. 125 a 129 do ADCT).',
        'LC 214/2025 instituiu IBS, CBS e IS; LC 227/2026 instituiu o Comitê Gestor do IBS (CGIBS), regulou o processo administrativo do IBS e a distribuição da receita, e trouxe normas gerais de ITCMD.',
        'LC 225/2026 (Código de Defesa do Contribuinte): direitos, deveres e garantias do contribuinte, programas de conformidade e regras contra o devedor contumaz.'
      ]
    }
  ],
  legislacao: [
    { nome: 'Constituição Federal — arts. 145 a 162 e 195; ADCT arts. 125 a 133', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
    { nome: 'Lei 5.172/1966 — Código Tributário Nacional (compilado)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm' },
    { nome: 'Lei 6.830/1980 — Lei de Execução Fiscal', url: 'https://www.planalto.gov.br/ccivil_03/leis/l6830.htm' },
    { nome: 'Lei 12.016/2009 — Mandado de Segurança', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12016.htm' },
    { nome: 'Emenda Constitucional 132/2023 — Reforma Tributária', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm' },
    { nome: 'Emenda Constitucional 137/2025 — imunidade de IPVA', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc137.htm' },
    { nome: 'LC 214/2025 — IBS, CBS e Imposto Seletivo', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
    { nome: 'LC 227/2026 — Comitê Gestor do IBS', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp227.htm' },
    { nome: 'LC 225/2026 — Código de Defesa do Contribuinte', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp225.htm' },
    { nome: 'LC 236/2026 — Alterações no CTN (penalidades, consensualidade e processo administrativo)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp236.htm' },
    { nome: 'LC 116/2003 — ISS', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp116.htm' },
    { nome: 'STF — Súmulas Vinculantes', url: 'https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26' },
    { nome: 'STJ — Súmulas', url: 'https://scon.stj.jus.br/SCON/sumstj/' }
  ],
  dicas: [
    'Tributário tem 5 questões e a FGV cobra muito CTN “seco” (responsabilidade, crédito, decadência e prescrição) e súmulas do STF/STJ: revise as SVs 8, 19, 28, 29, 31, 41, 50, 52 e 57 e as Súmulas 112, 212, 213, 392, 393, 430, 435, 436, 554 e 555 do STJ.',
    'Em anterioridade, monte duas listas (exceções à anual e exceções à noventena) e cruze: IR só respeita a anual; IPI só respeita a noventena; II, IE e IOF não respeitam nenhuma.',
    'Atenção à LC 236/2026 (em vigor desde 04/09/2026, antes do edital): novas causas de suspensão (art. 151, VII a X) e de extinção (art. 156, XII e XIII), denúncia espontânea abrangendo a multa de mora e o art. 174 com § 1º e novas causas de interrupção.',
    'Na reforma tributária, a FGV tende a cobrar o que está no texto constitucional: quem é competente (IBS compartilhado, CBS e IS federais), não cumulatividade, destino e o cronograma 2026-2033.',
    'Em imunidades, lembre-se sempre: imunidade do art. 150, VI, afasta só impostos; taxa continua devida.'
  ],
  questoes: [
    {
      id: 'tributario-001',
      topico: 'Espécies tributárias',
      dificuldade: 1,
      enunciado: 'O Município Alfa editou lei instituindo “taxa de iluminação pública”, cobrada anualmente de todos os proprietários de imóveis urbanos, para custear a manutenção da rede de iluminação das vias públicas. A associação de moradores consulta você sobre a validade do tributo. Assinale a afirmativa correta.',
      alternativas: [
        'A taxa é constitucional, pois remunera serviço público prestado pelo Município e posto à disposição do contribuinte.',
        'A taxa é inconstitucional, pois o serviço de iluminação pública não é específico e divisível; o Município poderia, porém, instituir contribuição para o custeio do serviço, cobrável na fatura de energia elétrica.',
        'A taxa é constitucional, desde que sua base de cálculo não coincida integralmente com a do IPTU.',
        'A taxa é inconstitucional, e o serviço de iluminação pública só pode ser custeado pela receita de impostos, sendo vedada a criação de qualquer tributo específico para esse fim.'
      ],
      correta: 1,
      comentario: 'Correta a B: segundo a SV 41, o serviço de iluminação pública não pode ser remunerado mediante taxa, por não ser específico e divisível (art. 145, II, CF; art. 79 CTN). Os Municípios e o DF podem instituir contribuição para o custeio, a expansão e a melhoria do serviço de iluminação pública (e, após a EC 132/2023, de sistemas de monitoramento de logradouros), facultada a cobrança na fatura de consumo de energia elétrica (art. 149-A, CF). A A ignora a indivisibilidade do serviço. A C desloca o problema para a base de cálculo, quando o vício está no fato gerador. A D desconsidera o art. 149-A.',
      fundamento: 'Art. 145, II, e art. 149-A da CF; Súmula Vinculante 41'
    },
    {
      id: 'tributario-002',
      topico: 'Espécies tributárias',
      dificuldade: 2,
      enunciado: 'O Município Beta instituiu taxa pela coleta, remoção e destinação do lixo proveniente dos imóveis residenciais, calculada com base na área construída de cada imóvel. Um contribuinte alega que a taxa é inconstitucional, porque a área construída também é utilizada no cálculo do valor venal para o IPTU. Assinale a afirmativa correta.',
      alternativas: [
        'A taxa é inconstitucional, pois adota base de cálculo própria de imposto.',
        'A taxa é inconstitucional, pois a coleta de lixo é serviço indivisível, prestado a toda a coletividade.',
        'A taxa é constitucional, pois remunera serviço específico e divisível e pode adotar um ou mais elementos da base de cálculo de um imposto, desde que não haja integral identidade entre as bases.',
        'A taxa é constitucional e poderia também, sem qualquer vício, remunerar a limpeza de ruas, praças e demais logradouros públicos.'
      ],
      correta: 2,
      comentario: 'Correta a C: a SV 19 afirma que a taxa cobrada exclusivamente em razão dos serviços de coleta, remoção e tratamento ou destinação de lixo proveniente de imóveis não viola o art. 145, II, da CF; e a SV 29 admite a adoção, no cálculo da taxa, de um ou mais elementos da base de cálculo de imposto, desde que não haja integral identidade. A área construída é apenas um dos elementos do valor venal. A A ignora a SV 29. A B contraria a SV 19. A D está errada: a limpeza de logradouros é serviço uti universi, não remunerável por taxa (STF, RE 576.321, Tema 146).',
      fundamento: 'Art. 145, II e § 2º, da CF; Súmulas Vinculantes 19 e 29'
    },
    {
      id: 'tributario-003',
      topico: 'Espécies tributárias',
      dificuldade: 2,
      enunciado: 'Para financiar investimento urgente e de relevante interesse nacional em infraestrutura energética, a União editou medida provisória instituindo empréstimo compulsório, exigível a partir da data de publicação. Sobre a medida, assinale a afirmativa correta.',
      alternativas: [
        'É válida, pois a urgência do investimento autoriza a medida provisória e afasta a anterioridade.',
        'É válida quanto ao instrumento, mas deve respeitar apenas a anterioridade nonagesimal.',
        'É inválida apenas porque o empréstimo compulsório é de competência comum da União, dos Estados e do DF, exigindo convênio.',
        'É inválida, pois o empréstimo compulsório exige lei complementar e, na hipótese de investimento público urgente e relevante, deve observar a anterioridade.'
      ],
      correta: 3,
      comentario: 'Correta a D: o empréstimo compulsório é de competência exclusiva da União, mediante lei complementar (art. 148, CF), sendo vedada a medida provisória sobre matéria reservada a lei complementar (art. 62, § 1º, III). Na hipótese de investimento público urgente e relevante (art. 148, II), deve ser observado o art. 150, III, b (anterioridade anual), e também não há exceção à noventena, que só é afastada para o empréstimo de guerra ou calamidade (art. 150, § 1º). A A confunde com a hipótese do inciso I (calamidade ou guerra). A B ignora a exigência de lei complementar e a anterioridade anual. A C está errada: a competência é exclusiva da União.',
      fundamento: 'Arts. 62, § 1º, III, 148 e 150, III, b e c, e § 1º, da CF'
    },
    {
      id: 'tributario-004',
      topico: 'Princípios tributários e limitações ao poder de tributar',
      dificuldade: 2,
      enunciado: 'Lei do Estado Gama, publicada em 10 de dezembro de 2026, (I) majorou a alíquota do IPVA de 3% para 4% e (II) fixou nova tabela de valores venais dos veículos, que serve de base de cálculo do imposto. Sobre a eficácia dessas alterações, assinale a afirmativa correta.',
      alternativas: [
        'A nova base de cálculo pode ser aplicada a partir de 1º de janeiro de 2027, mas a nova alíquota somente poderá ser exigida após 90 dias da publicação da lei.',
        'Ambas as alterações podem ser aplicadas a partir de 1º de janeiro de 2027, pois o IPVA é exceção à anterioridade nonagesimal.',
        'Ambas as alterações só podem ser aplicadas após 90 dias da publicação da lei.',
        'Ambas as alterações só podem ser aplicadas a partir de 1º de janeiro de 2028.'
      ],
      correta: 0,
      comentario: 'Correta a A: a majoração de alíquota do IPVA submete-se à anterioridade anual e à nonagesimal (art. 150, III, b e c), de modo que só pode ser exigida no exercício seguinte e após 90 dias da publicação (em março de 2027). Já a fixação da base de cálculo do IPVA é exceção apenas à noventena (art. 150, § 1º, parte final), bastando observar a anterioridade anual (1º/01/2027). A B generaliza indevidamente a exceção, que alcança apenas a base de cálculo. A C ignora essa exceção. A D cria prazo inexistente.',
      fundamento: 'Art. 150, III, b e c, e § 1º, da CF'
    },
    {
      id: 'tributario-005',
      topico: 'Princípios tributários e limitações ao poder de tributar',
      dificuldade: 1,
      enunciado: 'Em meio a forte instabilidade cambial, o Presidente da República editou decreto aumentando a alíquota do IOF incidente sobre operações de câmbio, dentro dos limites fixados em lei, com aplicação imediata. A empresa Importa Ltda. pretende questionar a cobrança. Assinale a afirmativa correta.',
      alternativas: [
        'O aumento é inválido, pois somente lei em sentido estrito pode alterar alíquota de tributo.',
        'O aumento é válido, mas só poderá ser exigido a partir do exercício financeiro seguinte.',
        'O aumento é válido e pode ser exigido de imediato, pois o Executivo pode alterar as alíquotas do IOF, atendidas as condições e os limites legais, e o IOF é exceção às anterioridades anual e nonagesimal.',
        'O aumento é válido, mas só poderá ser exigido após 90 dias da publicação do decreto.'
      ],
      correta: 2,
      comentario: 'Correta a C: é facultado ao Poder Executivo, atendidas as condições e os limites estabelecidos em lei, alterar as alíquotas do II, IE, IPI e IOF (art. 153, § 1º, CF). Além disso, o IOF não se submete à anterioridade anual nem à nonagesimal (art. 150, § 1º). A A ignora a exceção constitucional à legalidade estrita quanto às alíquotas. A B e a D aplicam anterioridades das quais o IOF está excepcionado (diferente do IPI, que respeita a noventena).',
      fundamento: 'Arts. 150, § 1º, e 153, § 1º, da CF'
    },
    {
      id: 'tributario-006',
      topico: 'Imunidades tributárias',
      dificuldade: 2,
      enunciado: 'A Associação Beneficente Luz, organização assistencial vinculada à Igreja Luz do Mundo, é proprietária de imóvel onde mantém creche gratuita para crianças carentes. O Município lançou contra a associação o IPTU e a taxa de coleta de lixo domiciliar referentes ao imóvel. Com base na Constituição, assinale a afirmativa correta.',
      alternativas: [
        'O IPTU não é devido, pois a imunidade religiosa abrange as organizações assistenciais e beneficentes das entidades religiosas; a taxa de coleta de lixo, porém, é devida.',
        'O IPTU e a taxa são devidos, pois a imunidade religiosa alcança apenas o imóvel utilizado como local de culto.',
        'O IPTU e a taxa não são devidos, pois a imunidade das entidades religiosas abrange todos os tributos.',
        'O IPTU é devido, pois a imunidade religiosa não alcança pessoas jurídicas distintas da igreja, ainda que a ela vinculadas; a taxa é indevida.'
      ],
      correta: 0,
      comentario: 'Correta a A: com a EC 132/2023, o art. 150, VI, b, da CF passou a vedar a instituição de impostos sobre “entidades religiosas e templos de qualquer culto, inclusive suas organizações assistenciais e beneficentes”, abrangendo patrimônio, renda e serviços relacionados às finalidades essenciais (art. 150, § 4º). A creche gratuita está vinculada a essas finalidades. As imunidades do art. 150, VI, alcançam apenas impostos; a taxa de coleta de lixo (SV 19) é devida. A B adota leitura restritiva superada. A C estende a imunidade a taxas. A D contraria o novo texto constitucional e erra quanto à taxa.',
      fundamento: 'Art. 150, VI, b, e § 4º, da CF (redação da EC 132/2023); Súmula Vinculante 19'
    },
    {
      id: 'tributario-007',
      topico: 'Imunidades tributárias',
      dificuldade: 2,
      enunciado: 'A Fundação Educar, instituição de educação sem fins lucrativos que atende aos requisitos legais, é proprietária de uma loja que está alugada a uma rede de farmácias. Todo o valor dos aluguéis é aplicado na manutenção de suas escolas. O Município exige o IPTU da loja. Assinale a afirmativa correta.',
      alternativas: [
        'O IPTU é devido, pois a imunidade só alcança imóveis utilizados diretamente nas atividades essenciais da entidade.',
        'O IPTU é devido pela farmácia locatária, que passa a ser contribuinte do imposto em razão da locação.',
        'O imóvel só seria imune se o locatário também fosse entidade imune.',
        'O imóvel permanece imune ao IPTU, ainda que alugado a terceiros, desde que o valor dos aluguéis seja aplicado nas atividades para as quais a entidade foi constituída.'
      ],
      correta: 3,
      comentario: 'Correta a D: a SV 52 dispõe que, ainda quando alugado a terceiros, permanece imune ao IPTU o imóvel pertencente a entidade referida no art. 150, VI, c, da CF, desde que o valor dos aluguéis seja aplicado nas atividades para as quais a entidade foi constituída. A A contraria a SV 52. A B está errada: o locatário não é contribuinte do IPTU, cujo contribuinte é o proprietário, o titular do domínio útil ou o possuidor com animus domini (art. 34 CTN). A C cria requisito inexistente.',
      fundamento: 'Art. 150, VI, c, e § 4º, da CF; Súmula Vinculante 52; art. 34 do CTN'
    },
    {
      id: 'tributario-008',
      topico: 'Competência tributária',
      dificuldade: 2,
      enunciado: 'O Município Delta celebrou convênio com a União, optando, na forma da lei, por fiscalizar e cobrar o Imposto Territorial Rural. O Prefeito pretende, por lei municipal, reduzir as alíquotas do ITR para atrair produtores rurais, e pergunta qual a parcela da arrecadação que caberá ao Município. Assinale a afirmativa correta.',
      alternativas: [
        'Com a opção, o Município passa a ter competência para legislar sobre o ITR, podendo reduzir suas alíquotas, e fica com 50% da arrecadação.',
        'O Município pode fiscalizar e cobrar o ITR, ficando com a totalidade da arrecadação, mas não pode reduzir o imposto nem conceder qualquer forma de renúncia fiscal, pois a competência tributária permanece com a União.',
        'O Município fica com 50% da arrecadação, independentemente da opção, e pode conceder isenções do ITR por lei municipal.',
        'A opção é inconstitucional, pois as funções de arrecadar e fiscalizar tributos são indelegáveis.'
      ],
      correta: 1,
      comentario: 'Correta a B: o ITR será fiscalizado e cobrado pelos Municípios que assim optarem, na forma da lei, desde que não implique redução do imposto ou qualquer outra forma de renúncia fiscal (art. 153, § 4º, III, CF); nesse caso, pertence ao Município a totalidade da arrecadação (art. 158, II). A competência tributária (legislar) é indelegável, mas as funções de arrecadar e fiscalizar podem ser atribuídas a outra pessoa jurídica de direito público (art. 7º CTN). A A confunde capacidade ativa com competência e erra o percentual. A C erra o percentual em caso de opção e admite isenção heterônoma. A D contraria o art. 7º do CTN.',
      fundamento: 'Arts. 153, § 4º, III, e 158, II, da CF; art. 7º do CTN'
    },
    {
      id: 'tributario-009',
      topico: 'Competência tributária',
      dificuldade: 2,
      enunciado: 'A União editou lei ordinária instituindo novo imposto, cumulativo, cujo fato gerador não corresponde a nenhum dos impostos discriminados na Constituição. Ao mesmo tempo, o Estado Ômega, invocando sua autonomia, instituiu imposto também não previsto na Constituição. Sobre essas leis, assinale a afirmativa correta.',
      alternativas: [
        'Ambas são inconstitucionais: a competência residual pertence apenas à União e exige lei complementar e imposto não cumulativo, com fato gerador e base de cálculo diversos dos discriminados.',
        'A lei federal é válida, pois a competência residual pode ser exercida por lei ordinária; a lei estadual é inconstitucional.',
        'Ambas são válidas, pois União e Estados têm competência residual, desde que respeitem a não cumulatividade.',
        'A lei federal é inconstitucional apenas por ser cumulativa; a lei estadual é válida se aprovada pelo Senado.'
      ],
      correta: 0,
      comentario: 'Correta a A: a União poderá instituir, mediante lei complementar, impostos não previstos no art. 153, desde que sejam não cumulativos e não tenham fato gerador ou base de cálculo próprios dos discriminados na Constituição (art. 154, I). A lei federal viola a exigência de lei complementar e a não cumulatividade; a lei estadual é inconstitucional porque os Estados não têm competência residual para impostos. A B ignora a reserva de lei complementar. A C atribui competência residual aos Estados. A D ignora a exigência de lei complementar e cria hipótese de aprovação pelo Senado sem base constitucional.',
      fundamento: 'Art. 154, I, da CF'
    },
    {
      id: 'tributario-010',
      topico: 'Obrigação tributária e sujeição passiva',
      dificuldade: 2,
      enunciado: 'Ana, Bruno e Carla são coproprietários, em partes iguais, de um imóvel urbano. O IPTU não foi pago e o Município ajuizou execução fiscal apenas contra Bruno, pelo valor total do débito. Bruno alega que só responde por um terço e que o Município deveria cobrar primeiro as irmãs. Assinale a afirmativa correta.',
      alternativas: [
        'Bruno responde apenas por um terço do débito, pois a obrigação se divide entre os coproprietários.',
        'O Município deve primeiro executar Ana e Carla, por força do benefício de ordem, e só depois Bruno.',
        'Há solidariedade entre os coproprietários, que não comporta benefício de ordem; o Município pode exigir o total de Bruno, e a interrupção da prescrição contra ele prejudica os demais.',
        'Se lei municipal conceder isenção pessoal a Ana, todos os coproprietários ficarão exonerados do débito.'
      ],
      correta: 2,
      comentario: 'Correta a C: são solidariamente obrigadas as pessoas que tenham interesse comum na situação que constitua o fato gerador (art. 124, I, CTN), como os coproprietários, e a solidariedade não comporta benefício de ordem (art. 124, parágrafo único). A interrupção da prescrição, em favor ou contra um dos obrigados, favorece ou prejudica os demais (art. 125, III). A A nega a solidariedade. A B invoca benefício de ordem expressamente afastado. A D está errada: a isenção ou remissão exonera todos, salvo se outorgada pessoalmente a um deles, subsistindo a solidariedade quanto aos demais pelo saldo (art. 125, II).',
      fundamento: 'Arts. 124 e 125 do CTN'
    },
    {
      id: 'tributario-011',
      topico: 'Responsabilidade tributária',
      dificuldade: 2,
      enunciado: 'O Restaurante Sabor Ltda. alienou seu fundo de comércio à Delícia Ltda., que continuou a explorar o restaurante no mesmo endereço e com o mesmo nome. Quatro meses depois, os sócios do Sabor iniciaram, com a mesma sociedade, uma loja de roupas. A Fazenda pretende cobrar da Delícia tributos relativos ao restaurante devidos até a data da alienação. Assinale a afirmativa correta.',
      alternativas: [
        'A Delícia responde integralmente pelos tributos, pois continuou a exploração do mesmo estabelecimento.',
        'A Delícia responde subsidiariamente com o alienante, pois este iniciou nova atividade dentro de seis meses da alienação.',
        'A Delícia não responde pelos tributos, pois o alienante iniciou atividade em ramo diverso, o que afasta a sucessão.',
        'A Delícia só responderia se a aquisição tivesse ocorrido em processo de falência.'
      ],
      correta: 1,
      comentario: 'Correta a B: quem adquire fundo de comércio e continua a respectiva exploração responde pelos tributos relativos ao fundo devidos até a data do ato: integralmente, se o alienante cessar a exploração; subsidiariamente com o alienante, se este prosseguir na exploração ou iniciar, dentro de seis meses, nova atividade no mesmo ou em outro ramo (art. 133, I e II, CTN). A A ignora que o alienante iniciou nova atividade no prazo. A C erra porque a lei fala em “mesmo ou em outro ramo”. A D inverte a regra: na alienação judicial em falência ou recuperação judicial, em regra, não há sucessão (art. 133, § 1º).',
      fundamento: 'Art. 133, I e II, e § 1º, do CTN'
    },
    {
      id: 'tributario-012',
      topico: 'Responsabilidade tributária',
      dificuldade: 2,
      enunciado: 'Em execução fiscal contra a sociedade Gama Comércio Ltda., o oficial de justiça certificou que a empresa não funciona mais no endereço cadastrado no Fisco, sem que tenha havido comunicação de mudança aos órgãos competentes. A Fazenda requer o redirecionamento da execução a Rodrigo, sócio-administrador da sociedade à época do encerramento das atividades. Assinale a afirmativa correta.',
      alternativas: [
        'O redirecionamento seria cabível mesmo sem o encerramento irregular, pois o simples inadimplemento do tributo pela sociedade gera responsabilidade solidária do sócio-gerente.',
        'O redirecionamento deve alcançar todos os sócios, inclusive os quotistas sem poderes de gestão, de forma solidária.',
        'O redirecionamento deve alcançar o sócio que se retirou regularmente da sociedade anos antes, sem poderes de administração na data do encerramento.',
        'O redirecionamento é cabível, pois se presume dissolvida irregularmente a empresa que deixa de funcionar no domicílio fiscal sem comunicação aos órgãos competentes, legitimando a responsabilização do sócio-gerente.'
      ],
      correta: 3,
      comentario: 'Correta a D: a Súmula 435 do STJ presume dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente, com base no art. 135, III, do CTN. O STJ (Tema 981) admite o redirecionamento contra quem detinha poderes de administração na data da dissolução irregular. A A contraria a Súmula 430 do STJ (o inadimplemento, por si só, não gera responsabilidade). A B ignora que o art. 135, III, alcança diretores, gerentes e representantes, não meros quotistas. A C contraria o Tema 962 do STJ, que afasta o redirecionamento contra o sócio que se retirou regularmente e não deu causa à dissolução irregular.',
      fundamento: 'Art. 135, III, do CTN; Súmulas 430 e 435 do STJ; Temas 962 e 981 do STJ'
    },
    {
      id: 'tributario-013',
      topico: 'Responsabilidade tributária',
      dificuldade: 3,
      enunciado: 'Marcos arrematou, em leilão judicial, um imóvel urbano com débitos de IPTU anteriores à alienação. O edital previa expressamente que o arrematante responderia por esses débitos. Após a arrematação, o Município notificou Marcos para pagar o IPTU atrasado. Assinale a afirmativa correta.',
      alternativas: [
        'Marcos não responde pelos débitos, pois, na arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço, sendo inválida a previsão editalícia que atribui ao arrematante os débitos tributários anteriores.',
        'Marcos responde pelos débitos, pois a previsão expressa no edital vincula o arrematante.',
        'Marcos responde solidariamente com o antigo proprietário, por se tratar de obrigação propter rem.',
        'Marcos só responde pelos débitos se o preço da arrematação for insuficiente para quitá-los.'
      ],
      correta: 0,
      comentario: 'Correta a A: os créditos relativos a impostos cujo fato gerador seja a propriedade de bens imóveis sub-rogam-se na pessoa do adquirente, salvo quando conste do título a prova da quitação; no caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço (art. 130, parágrafo único, CTN). O STJ (Tema 1134) fixou que é inválida a previsão em edital de leilão atribuindo responsabilidade ao arrematante pelos débitos tributários que já incidiam sobre o imóvel na data da alienação. A B contraria esse entendimento. A C e a D ignoram que a arrematação é aquisição originária quanto a esses débitos, que se satisfazem pelo preço.',
      fundamento: 'Art. 130, parágrafo único, do CTN; STJ, Tema 1134'
    },
    {
      id: 'tributario-014',
      topico: 'Responsabilidade tributária',
      dificuldade: 2,
      enunciado: 'Em 2026, antes de qualquer procedimento administrativo ou medida de fiscalização, a empresa Norte Serviços Ltda. identificou que deixara de declarar e recolher ISS de alguns meses. Comunicou a infração ao Município e pagou o tributo acrescido dos juros de mora. O Município, então, exigiu a multa de mora de 20%. Com base no CTN, na redação vigente em 21/09/2026, assinale a afirmativa correta.',
      alternativas: [
        'A multa de mora é devida, pois a denúncia espontânea afasta apenas as multas punitivas, e não as moratórias.',
        'A multa de mora não é devida, pois a denúncia espontânea, acompanhada do pagamento do tributo e dos juros de mora, exclui a responsabilidade, inclusive quanto à multa de mora.',
        'A denúncia espontânea só produziria efeitos se o débito fosse objeto de parcelamento.',
        'A denúncia espontânea só é admitida depois de iniciado o procedimento de fiscalização, como forma de colaboração com o Fisco.'
      ],
      correta: 1,
      comentario: 'Correta a B: o art. 138 do CTN, com a redação da LC 236/2026, prevê que a responsabilidade é excluída pela denúncia espontânea da infração, inclusive quanto à multa de mora, acompanhada, se for o caso, do pagamento do tributo devido e dos juros de mora. Esse já era o entendimento do STJ (REsp 1.149.022, repetitivo), agora positivado. Como o tributo não havia sido declarado, não incide a Súmula 360 do STJ. A A contraria o texto legal. A C está errada: a denúncia exige pagamento (ou depósito do valor arbitrado), não parcelamento. A D inverte a regra: não se considera espontânea a denúncia apresentada após o início de procedimento administrativo ou medida de fiscalização relacionados com a infração.',
      fundamento: 'Art. 138 do CTN (redação da LC 236/2026)'
    },
    {
      id: 'tributario-015',
      topico: 'Crédito tributário: suspensão, extinção e exclusão',
      dificuldade: 3,
      enunciado: 'Executada pela União, a empresa Ômega S.A. ofereceu apólice de seguro garantia no valor do débito, aceita pela Fazenda Nacional nos termos da regulamentação do órgão de cobrança. Em setembro de 2026, a empresa pede que seja reconhecida a suspensão da exigibilidade do crédito. Com base no CTN, assinale a afirmativa correta.',
      alternativas: [
        'O pedido deve ser negado, pois somente o depósito do montante integral em dinheiro suspende a exigibilidade do crédito tributário.',
        'O seguro garantia aceito extingue o crédito tributário, por equivaler à conversão do depósito em renda.',
        'A aceitação, pelo credor, da apólice de seguro garantia oferecida em execução fiscal suspende a exigibilidade do crédito, enquanto a garantia estiver em conformidade com as normas que regem sua aceitação e não caracterizado o sinistro.',
        'A suspensão da exigibilidade, uma vez reconhecida, dispensa a empresa do cumprimento das obrigações acessórias relacionadas ao tributo.'
      ],
      correta: 2,
      comentario: 'Correta a C: a LC 236/2026 (em vigor desde 04/09/2026) ampliou o art. 151 do CTN, que passou a prever como causa de suspensão a aceitação, pelo credor, de apólice de seguro garantia ou de carta de fiança bancária oferecidas em execução fiscal, enquanto em conformidade com as normas de aceitação e não caracterizada hipótese de sinistro (art. 151, X). A A reflete a leitura anterior (Súmula 112 do STJ quanto ao depósito), que não esgota mais as hipóteses legais. A B confunde suspensão com extinção (art. 156). A D contraria o art. 151, parágrafo único: a suspensão não dispensa o cumprimento das obrigações acessórias.',
      fundamento: 'Art. 151, X e parágrafo único, do CTN (redação da LC 236/2026)'
    },
    {
      id: 'tributario-016',
      topico: 'Execução fiscal e ações tributárias',
      dificuldade: 2,
      enunciado: 'A empresa Sul Metais Ltda. recolheu indevidamente, por cinco anos, contribuição declarada inconstitucional. Pretende impetrar mandado de segurança para ver declarado seu direito de compensar os valores pagos com tributos vincendos, com pedido de liminar para compensar imediatamente. Assinale a afirmativa correta.',
      alternativas: [
        'O mandado de segurança é adequado e a liminar pode autorizar a compensação imediata, desde que haja perigo de dano.',
        'O mandado de segurança é via adequada para a declaração do direito à compensação, mas a compensação não pode ser deferida por medida liminar e só pode ser feita após o trânsito em julgado.',
        'O mandado de segurança é inadequado, pois a compensação só pode ser reconhecida em ação de rito comum.',
        'A compensação pode ser realizada logo após a sentença de primeiro grau, independentemente do trânsito em julgado.'
      ],
      correta: 1,
      comentario: 'Correta a B: o mandado de segurança constitui ação adequada para a declaração do direito à compensação tributária (Súmula 213 do STJ), mas a compensação não pode ser deferida em ação cautelar ou por medida liminar cautelar ou antecipatória (Súmula 212 do STJ), e é vedada, mediante aproveitamento de tributo objeto de contestação judicial, antes do trânsito em julgado da decisão (art. 170-A do CTN). A A contraria a Súmula 212. A C contraria a Súmula 213. A D contraria o art. 170-A.',
      fundamento: 'Art. 170-A do CTN; Súmulas 212 e 213 do STJ'
    },
    {
      id: 'tributario-017',
      topico: 'Crédito tributário: suspensão, extinção e exclusão',
      dificuldade: 2,
      enunciado: 'Lei do Município Pi concedeu isenção de ISS, pelo prazo de 10 anos, às empresas que se instalassem em seu distrito industrial e gerassem ao menos 100 empregos. A empresa Tech Ltda. cumpriu as condições. Três anos depois, nova lei revogou a isenção para todos os beneficiários. Assinale a afirmativa correta.',
      alternativas: [
        'A revogação é válida para todos, pois a isenção pode ser revogada a qualquer tempo por lei.',
        'A revogação só produz efeitos após 90 dias, mas alcança a Tech Ltda.',
        'Qualquer isenção, ainda que concedida sem prazo e sem condições, gera direito adquirido e não pode ser revogada.',
        'A revogação não pode prejudicar a Tech Ltda., pois a isenção concedida por prazo certo e em função de determinadas condições, já cumpridas, não pode ser livremente suprimida.'
      ],
      correta: 3,
      comentario: 'Correta a D: a isenção, salvo se concedida por prazo certo e em função de determinadas condições, pode ser revogada ou modificada por lei a qualquer tempo (art. 178 do CTN); e as isenções concedidas sob condição onerosa não podem ser livremente suprimidas (Súmula 544 do STF). A Tech Ltda. cumpriu as condições, tendo direito à fruição pelo prazo restante. A A ignora a ressalva do art. 178. A B não resolve o problema do direito adquirido. A C generaliza indevidamente: isenções gratuitas e sem prazo são revogáveis.',
      fundamento: 'Art. 178 do CTN; Súmula 544 do STF'
    },
    {
      id: 'tributario-018',
      topico: 'Decadência e prescrição',
      dificuldade: 3,
      enunciado: 'A empresa Leste Ltda., sujeita ao ICMS por lançamento por homologação, realizou operações tributáveis em março de 2020, mas não declarou o débito nem antecipou qualquer pagamento. Não houve dolo, fraude ou simulação. O auto de infração foi lavrado e notificado em fevereiro de 2026. Assinale a afirmativa correta.',
      alternativas: [
        'O direito de lançar decaiu, pois, sem declaração e sem pagamento, o prazo de 5 anos conta-se do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado, encerrando-se em 31/12/2025.',
        'O direito de lançar decaiu, pois, no lançamento por homologação, o prazo de 5 anos conta-se sempre da data do fato gerador.',
        'O direito de lançar não decaiu, pois o prazo de decadência só começa a correr após a notificação do contribuinte.',
        'O direito de lançar não decaiu, pois o prazo decadencial do ICMS é de 10 anos.'
      ],
      correta: 0,
      comentario: 'Correta a A: quando não houver declaração do débito nem pagamento antecipado, o prazo decadencial conta-se exclusivamente na forma do art. 173, I, do CTN (Súmula 555 do STJ): 5 anos a partir de 1º/01/2021, findos em 31/12/2025. O lançamento de fevereiro de 2026 é extemporâneo. A B aplica o art. 150, § 4º, que pressupõe pagamento antecipado (ainda que parcial) — a conclusão “decaiu” coincide, mas o fundamento está errado. A C confunde o termo final (notificação, que deve ocorrer dentro do prazo) com o termo inicial. A D contraria a SV 8 e o CTN: o prazo é de 5 anos e só lei complementar pode dispor sobre decadência (art. 146, III, b, CF).',
      fundamento: 'Arts. 150, § 4º, e 173, I, do CTN; Súmula 555 do STJ; Súmula Vinculante 8'
    },
    {
      id: 'tributario-019',
      topico: 'Decadência e prescrição',
      dificuldade: 3,
      enunciado: 'Em 15 de maio de 2019, a empresa Oeste S.A. entregou declaração ao Fisco federal reconhecendo débito de tributo com vencimento em 30 de abril de 2019, mas não o pagou. Não houve lançamento de ofício, parcelamento, protesto nem qualquer outra causa suspensiva ou interruptiva. A execução fiscal foi ajuizada em agosto de 2024, com despacho ordenando a citação em setembro de 2024. Assinale a afirmativa correta.',
      alternativas: [
        'Ocorreu decadência, pois o Fisco não realizou lançamento de ofício no prazo de cinco anos.',
        'Não ocorreu prescrição, pois o prazo prescricional só começaria a correr após o lançamento de ofício, que não ocorreu.',
        'Ocorreu prescrição, pois a declaração constituiu o crédito, dispensando o lançamento, e o prazo de cinco anos, contado da entrega da declaração (posterior ao vencimento), esgotou-se em maio de 2024.',
        'Não ocorreu prescrição, pois o prazo para a cobrança de créditos declarados e não pagos é de dez anos.'
      ],
      correta: 2,
      comentario: 'Correta a C: a entrega de declaração pelo contribuinte reconhecendo o débito fiscal constitui o crédito tributário, dispensada qualquer outra providência por parte do Fisco (Súmula 436 do STJ). A ação de cobrança prescreve em 5 anos contados da constituição definitiva (art. 174, caput, CTN); segundo o STJ (REsp 1.120.295, repetitivo), o termo inicial é o vencimento ou a entrega da declaração, o que for posterior — no caso, 15/05/2019, esgotando-se o prazo em maio de 2024, antes do ajuizamento. A A erra: com a declaração não há falar em decadência, pois o crédito já está constituído. A B ignora a Súmula 436. A D contraria o prazo quinquenal do art. 174 e a SV 8.',
      fundamento: 'Art. 174 do CTN; Súmula 436 do STJ; STJ, REsp 1.120.295'
    },
    {
      id: 'tributario-020',
      topico: 'Execução fiscal e ações tributárias',
      dificuldade: 2,
      enunciado: 'Citado em execução fiscal, João, empresário individual, não dispõe de bens para garantir o juízo. Verificou, porém, pelas próprias datas constantes da CDA, que o crédito está prescrito. Como advogado(a) de João, assinale a medida adequada.',
      alternativas: [
        'Opor embargos à execução no prazo de 15 dias, independentemente de garantia, aplicando-se subsidiariamente o CPC.',
        'Aguardar a penhora, pois a prescrição só pode ser alegada em embargos à execução fiscal após a garantia do juízo.',
        'Ajuizar ação rescisória contra a decisão que recebeu a execução fiscal.',
        'Apresentar exceção de pré-executividade, admissível para matérias conhecíveis de ofício que não demandem dilação probatória, como a prescrição demonstrável de plano.'
      ],
      correta: 3,
      comentario: 'Correta a D: a exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória (Súmula 393 do STJ), como a prescrição verificável pelas datas da CDA. A A ignora a regra especial da LEF: embargos em 30 dias (art. 16) e não admitidos antes de garantida a execução (art. 16, § 1º). A B está errada porque a prescrição pode ser alegada por exceção, sem garantia. A C é descabida: não há decisão de mérito transitada em julgado a rescindir.',
      fundamento: 'Súmula 393 do STJ; art. 16, caput e § 1º, da Lei 6.830/1980'
    },
    {
      id: 'tributario-021',
      topico: 'Execução fiscal e ações tributárias',
      dificuldade: 2,
      enunciado: 'A empresa Vale Verde Ltda. ajuizou ação anulatória de débito fiscal. O juiz determinou que a autora depositasse previamente 30% do valor do débito, sob pena de extinção do processo, invocando o art. 38 da Lei 6.830/1980. Assinale a afirmativa correta.',
      alternativas: [
        'A exigência é inconstitucional, pois não se pode exigir depósito prévio como requisito de admissibilidade de ação judicial que discuta a exigibilidade do crédito; o depósito integral é faculdade do contribuinte, que suspende a exigibilidade.',
        'A exigência é válida, pois o art. 38 da LEF condiciona a ação anulatória ao depósito preparatório.',
        'A exigência é válida, mas o depósito deve corresponder ao valor integral do débito, e não a 30%.',
        'A exigência é válida apenas para a ação anulatória, não se aplicando ao mandado de segurança.'
      ],
      correta: 0,
      comentario: 'Correta a A: a SV 28 estabelece que é inconstitucional a exigência de depósito prévio como requisito de admissibilidade de ação judicial na qual se pretenda discutir a exigibilidade de crédito tributário. O depósito do montante integral é faculdade do contribuinte e, se realizado, suspende a exigibilidade (art. 151, II, CTN; Súmula 112 do STJ). A B, a C e a D aplicam a literalidade do art. 38 da LEF, na parte afastada pela SV 28.',
      fundamento: 'Súmula Vinculante 28; art. 151, II, do CTN; art. 38 da Lei 6.830/1980'
    },
    {
      id: 'tributario-022',
      topico: 'Impostos em espécie',
      dificuldade: 2,
      enunciado: 'Joaquim, domiciliado em Belo Horizonte (MG), faleceu em 2026, deixando um apartamento em Salvador (BA) e ações de companhia aberta. Seus herdeiros residem em São Paulo (SP), onde foi aberto o inventário judicial. Com base na Constituição, assinale a quem cabe o ITCMD.',
      alternativas: [
        'Ao Estado de São Paulo, quanto a todos os bens, por ser o local do processamento do inventário.',
        'Ao Estado de Minas Gerais, quanto a todos os bens, por ser o Estado do domicílio do de cujus.',
        'Ao Estado da Bahia, quanto ao apartamento, e ao Estado de Minas Gerais, quanto às ações.',
        'Ao Estado de Minas Gerais, quanto ao apartamento, e ao Estado de São Paulo, quanto às ações.'
      ],
      correta: 2,
      comentario: 'Correta a C: o ITCMD relativo a bens imóveis e respectivos direitos compete ao Estado da situação do bem (art. 155, § 1º, I, CF); quanto a bens móveis, títulos e créditos, compete, após a EC 132/2023, ao Estado onde era domiciliado o de cujus, ou tiver domicílio o doador (art. 155, § 1º, II). A A reflete a redação anterior à EC 132/2023, que vinculava os móveis ao local do inventário, e erra também quanto ao imóvel. A B ignora a regra da situação do imóvel. A D inverte os critérios.',
      fundamento: 'Art. 155, § 1º, I e II, da CF (redação da EC 132/2023)'
    },
    {
      id: 'tributario-023',
      topico: 'Impostos em espécie',
      dificuldade: 2,
      enunciado: 'Em 2026, com base em lei estadual que prevê a incidência do imposto sobre veículos terrestres e aquáticos, o Estado Sigma lançou IPVA contra Carlos, proprietário de: (I) automóvel de passeio fabricado em 2004; (II) micro-ônibus fabricado em 2000, utilizado em transporte de turismo; (III) lancha de recreio. Considerando a Constituição na redação vigente em 21/09/2026, assinale a afirmativa correta.',
      alternativas: [
        'O IPVA é devido sobre os três bens, pois a Constituição não prevê hipóteses de não incidência por tempo de fabricação.',
        'O automóvel de passeio está imune ao IPVA; o imposto é devido sobre o micro-ônibus e sobre a lancha.',
        'Nenhum dos bens está sujeito ao IPVA: o automóvel e o micro-ônibus pelo tempo de fabricação, e a lancha por não ser veículo automotor terrestre.',
        'O automóvel e o micro-ônibus estão imunes, pois têm mais de 20 anos de fabricação; a lancha é tributada.'
      ],
      correta: 1,
      comentario: 'Correta a B: a EC 137/2025 incluiu no art. 155, § 6º, III, da CF a alínea e, afastando o IPVA sobre veículos terrestres de passageiros, caminhonetes e mistos com 20 anos ou mais de fabricação, excetuados micro-ônibus, ônibus, reboques e semirreboques. O automóvel de 2004 tem 22 anos em 2026; o micro-ônibus está expressamente excluído do benefício. A EC 132/2023 passou a prever a incidência do IPVA sobre veículos aquáticos e aéreos (art. 155, § 6º, III), e a lancha de recreio de pessoa física não se enquadra nas exceções (que contemplam, p. ex., embarcações de transporte aquaviário e de pesca). A A ignora a EC 137/2025. A C reproduz entendimento anterior à EC 132/2023 sobre embarcações e erra quanto ao micro-ônibus. A D ignora a exceção do micro-ônibus.',
      fundamento: 'Art. 155, § 6º, III, da CF (redação das EC 132/2023 e 137/2025)'
    },
    {
      id: 'tributario-024',
      topico: 'Impostos em espécie',
      dificuldade: 1,
      enunciado: 'A empresa Guindastes Brasil Ltda. aluga guindastes a construtoras, sem fornecer operadores nem prestar qualquer outro serviço associado. O Município exige ISS sobre os valores dos aluguéis. Assinale a afirmativa correta.',
      alternativas: [
        'O ISS é devido, pois a locação de bens móveis é atividade econômica sujeita ao imposto municipal.',
        'Incide ICMS, e não ISS, por se tratar de circulação de mercadorias.',
        'O ISS é devido apenas se o contrato de locação tiver prazo superior a 30 dias.',
        'Não incide ISS, pois é inconstitucional a incidência do imposto sobre operações de locação de bens móveis dissociadas da prestação de serviços.'
      ],
      correta: 3,
      comentario: 'Correta a D: a SV 31 estabelece que é inconstitucional a incidência do ISS sobre operações de locação de bens móveis, dissociadas da prestação de serviços, pois locar é obrigação de dar, e não de fazer. A A contraria a SV 31. A B está errada porque não há circulação jurídica de mercadoria (transferência de titularidade) na locação. A C cria critério inexistente.',
      fundamento: 'Súmula Vinculante 31; art. 156, III, da CF'
    },
    {
      id: 'tributario-025',
      topico: 'Reforma tributária (EC 132/2023 e LC 214/2025)',
      dificuldade: 2,
      enunciado: 'Em palestra sobre a Reforma Tributária do consumo, foram feitas afirmações sobre o IBS, a CBS e o Imposto Seletivo. Assinale a única afirmativa correta, segundo o texto constitucional.',
      alternativas: [
        'O IBS é de competência compartilhada entre Estados, Distrito Federal e Municípios, não incide sobre exportações e é cobrado pelo somatório das alíquotas do Estado e do Município de destino da operação.',
        'O IBS é imposto de competência da União, arrecadado pela Receita Federal e partilhado com Estados e Municípios.',
        'Cada Estado poderá conceder, por lei própria, incentivos e benefícios fiscais relativos ao IBS para atrair investimentos.',
        'O Imposto Seletivo é de competência dos Estados e incide sobre bens e serviços prejudiciais à saúde ou ao meio ambiente, inclusive sobre operações com energia elétrica.'
      ],
      correta: 0,
      comentario: 'Correta a A: lei complementar instituirá imposto sobre bens e serviços de competência compartilhada entre Estados, DF e Municípios (art. 156-A, CF), que não incidirá sobre as exportações (§ 1º, III) e será cobrado pelo somatório das alíquotas do Estado e do Município de destino da operação (§ 1º, VII). A B atribui o IBS à União (a contribuição federal é a CBS — art. 195, V). A C contraria o art. 156-A, § 1º, X, que veda incentivos e benefícios não previstos na Constituição. A D erra quanto à competência (o IS é da União — art. 153, VIII) e quanto à energia elétrica, sobre a qual o IS não incide (art. 153, § 6º, I).',
      fundamento: 'Arts. 153, VIII e § 6º, I, 156-A, § 1º, III, VII e X, e 195, V, da CF (EC 132/2023)'
    },
    {
      id: 'tributario-026',
      topico: 'Reforma tributária (EC 132/2023 e LC 214/2025)',
      dificuldade: 2,
      enunciado: 'Um cliente, empresário do comércio, pede a você um resumo do cronograma de transição da Reforma Tributária previsto no ADCT (EC 132/2023). Assinale a afirmativa correta.',
      alternativas: [
        'Em 2027, o ICMS e o ISS serão extintos, sendo substituídos integralmente pelo IBS.',
        'O PIS e a Cofins coexistirão com a CBS até 2033, quando serão extintos juntamente com o ICMS.',
        'Em 2027, a CBS passa a ser cobrada e o PIS e a Cofins são extintos; o ICMS e o ISS terão suas alíquotas reduzidas gradualmente de 2029 a 2032 e serão extintos a partir de 2033.',
        'Em 2026, o IBS e a CBS passam a ser cobrados com suas alíquotas integrais, em substituição imediata aos tributos anteriores.'
      ],
      correta: 2,
      comentario: 'Correta a C: a partir de 2027, a CBS (art. 195, V) passa a ser cobrada e são extintos o PIS e a Cofins, com redução a zero das alíquotas do IPI, salvo produtos com industrialização incentivada na ZFM (art. 126 do ADCT); de 2029 a 2032, as alíquotas do ICMS e do ISS correspondem a 9/10, 8/10, 7/10 e 6/10 das alíquotas originais (art. 128 do ADCT); a partir de 2033, ICMS e ISS são extintos (art. 129 do ADCT). A A antecipa a extinção. A B erra quanto ao PIS/Cofins. A D está errada: em 2026, IBS e CBS são cobrados em fase de teste, a 0,1% e 0,9% (art. 125 do ADCT).',
      fundamento: 'Arts. 125, 126, 128 e 129 do ADCT (EC 132/2023)'
    },
    {
      id: 'tributario-027',
      topico: 'Legislação tributária: vigência, aplicação e interpretação',
      dificuldade: 2,
      enunciado: 'Em 2024, a empresa Rio Claro Ltda. foi autuada pelo Estado Alfa por falta de recolhimento de imposto à alíquota de 10%, com multa de ofício de 120%. Pendente recurso administrativo, sobreveio em 2026 lei estadual que reduziu a alíquota do imposto para 8% e a multa para 75%. Assinale a afirmativa correta.',
      alternativas: [
        'Aplicam-se retroativamente tanto a nova alíquota quanto a nova multa, em razão do princípio da retroatividade da lei mais benéfica.',
        'Aplica-se retroativamente a multa reduzida, pois o ato não foi definitivamente julgado, mas o tributo continua regido pela alíquota vigente na data do fato gerador.',
        'Nenhuma das alterações se aplica, pois o lançamento reporta-se sempre à data do fato gerador, inclusive quanto às penalidades.',
        'A redução da multa só se aplicaria se o processo estivesse em fase judicial.'
      ],
      correta: 1,
      comentario: 'Correta a B: a lei aplica-se a ato ou fato pretérito, tratando-se de ato não definitivamente julgado, quando lhe comine penalidade menos severa que a prevista na lei vigente ao tempo da sua prática (art. 106, II, c, CTN). Já o lançamento reporta-se à data da ocorrência do fato gerador e rege-se pela lei então vigente, ainda que posteriormente modificada ou revogada (art. 144), de modo que a redução de alíquota não retroage. A A estende a retroatividade benigna ao tributo, o que o CTN não admite. A C ignora o art. 106, II, c. A D cria restrição inexistente: “ato não definitivamente julgado” abrange as esferas administrativa e judicial.',
      fundamento: 'Arts. 106, II, c, e 144 do CTN'
    }
  ],
  flashcards: [
    { id: 'tributario-f001', frente: 'Exceções à anterioridade anual (art. 150, III, b)', verso: 'II, IE, IPI, IOF, empréstimo compulsório de guerra/calamidade, imposto extraordinário de guerra; contribuições da seguridade (só noventena); restabelecimento de alíquotas da CIDE-combustíveis e do ICMS monofásico sobre combustíveis.', fundamento: 'Arts. 150, § 1º, 155, § 4º, IV, c, 177, § 4º, I, b, e 195, § 6º, CF' },
    { id: 'tributario-f002', frente: 'Exceções à anterioridade nonagesimal (art. 150, III, c)', verso: 'II, IE, IR, IOF, empréstimo compulsório de guerra/calamidade, imposto extraordinário de guerra e fixação da base de cálculo do IPVA e do IPTU.', fundamento: 'Art. 150, § 1º, CF' },
    { id: 'tributario-f003', frente: 'Alteração do prazo de recolhimento do tributo respeita anterioridade?', verso: 'Não. Norma que altera o prazo de recolhimento não se sujeita ao princípio da anterioridade.', fundamento: 'Súmula Vinculante 50' },
    { id: 'tributario-f004', frente: 'Princípios do Sistema Tributário Nacional incluídos pela EC 132/2023', verso: 'Simplicidade, transparência, justiça tributária, cooperação e defesa do meio ambiente.', fundamento: 'Art. 145, § 3º, CF' },
    { id: 'tributario-f005', frente: 'Iluminação pública: taxa ou contribuição?', verso: 'Não pode ser taxa (SV 41). Municípios e DF podem instituir contribuição (COSIP) para custeio, expansão e melhoria da iluminação pública e de sistemas de monitoramento de logradouros.', fundamento: 'Art. 149-A, CF; SV 41' },
    { id: 'tributario-f006', frente: 'Imóvel de entidade imune alugado a terceiro paga IPTU?', verso: 'Não, se os aluguéis forem aplicados nas atividades essenciais da entidade.', fundamento: 'Súmula Vinculante 52' },
    { id: 'tributario-f007', frente: 'Imunidade dos livros alcança e-books e leitores?', verso: 'Sim: livro eletrônico e suportes exclusivamente utilizados para fixá-lo (e-readers).', fundamento: 'Súmula Vinculante 57' },
    { id: 'tributario-f008', frente: 'Súmulas 430 e 435 do STJ', verso: '430: o inadimplemento, por si só, não gera responsabilidade do sócio-gerente. 435: presume-se dissolvida irregularmente a empresa que deixa de funcionar no domicílio fiscal sem comunicar, legitimando o redirecionamento ao sócio-gerente.', fundamento: 'Súmulas 430 e 435 do STJ; art. 135, III, CTN' },
    { id: 'tributario-f009', frente: 'Sucessão empresarial abrange multas?', verso: 'Sim: tributos e multas moratórias ou punitivas referentes a fatos geradores anteriores à sucessão.', fundamento: 'Súmula 554 do STJ' },
    { id: 'tributario-f010', frente: 'Novas causas de suspensão da exigibilidade (LC 236/2026)', verso: 'Arbitragem especial tributária e aduaneira; proposta de transação aceita; acordo de mediação; aceitação de seguro garantia ou fiança bancária em execução fiscal.', fundamento: 'Art. 151, VII a X, CTN' },
    { id: 'tributario-f011', frente: 'Novas causas de extinção do crédito (LC 236/2026)', verso: 'Sentença arbitral favorável ao sujeito passivo transitada em julgado (XII) e cumprimento de acordo de mediação (XIII).', fundamento: 'Art. 156, XII e XIII, CTN' },
    { id: 'tributario-f012', frente: 'Denúncia espontânea afasta multa de mora?', verso: 'Sim — inclusive a multa de mora, com pagamento do tributo e dos juros (texto expresso após a LC 236/2026). Não é espontânea após início de fiscalização relacionada à infração.', fundamento: 'Art. 138 do CTN' },
    { id: 'tributario-f013', frente: 'Decadência sem declaração e sem pagamento', verso: 'Conta-se exclusivamente pelo art. 173, I: 5 anos do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido feito.', fundamento: 'Súmula 555 do STJ' },
    { id: 'tributario-f014', frente: 'Declaração do contribuinte constitui o crédito?', verso: 'Sim, dispensada qualquer outra providência do Fisco; a prescrição corre do vencimento ou da entrega da declaração, o que for posterior.', fundamento: 'Súmula 436 do STJ' },
    { id: 'tributario-f015', frente: 'Causas clássicas de interrupção da prescrição (art. 174, § 1º)', verso: 'Despacho que ordena a citação em execução fiscal; protesto judicial ou extrajudicial da CDA (LC 236/2026); ato judicial que constitua em mora; ato inequívoco de reconhecimento do débito. A LC 236/2026 incluiu ainda os incisos V a IX.', fundamento: 'Art. 174, § 1º, CTN' },
    { id: 'tributario-f016', frente: 'Compensação por liminar e momento da compensação', verso: 'Não pode ser deferida por liminar (Súmula 212 STJ); MS é via adequada para declará-la (Súmula 213 STJ); vedada antes do trânsito em julgado (art. 170-A CTN).', fundamento: 'Art. 170-A CTN; Súmulas 212 e 213 do STJ' },
    { id: 'tributario-f017', frente: 'Depósito prévio para discutir crédito tributário', verso: 'Inconstitucional como requisito de ação judicial (SV 28) e de recurso administrativo (SV 21).', fundamento: 'Súmulas Vinculantes 21 e 28' },
    { id: 'tributario-f018', frente: 'Embargos à execução fiscal: prazo e requisito', verso: '30 dias do depósito, da juntada da fiança ou do seguro garantia, ou da intimação da penhora; exigem garantia do juízo.', fundamento: 'Art. 16 da Lei 6.830/1980' },
    { id: 'tributario-f019', frente: 'Até quando a CDA pode ser substituída?', verso: 'Até a sentença dos embargos (decisão de 1ª instância), para corrigir erro material ou formal, vedada a mudança do sujeito passivo; devolve-se o prazo para embargos.', fundamento: 'Art. 2º, § 8º, LEF; Súmula 392 do STJ' },
    { id: 'tributario-f020', frente: 'Tetos de multas da LC 236/2026 (art. 113-A do CTN)', verso: 'Regra: até 75% do tributo; até 100% com dolo, fraude, sonegação ou conluio; até 150% em reincidência. Entes têm 2 anos para adaptar suas leis.', fundamento: 'Art. 113-A do CTN (LC 236/2026)' },
    { id: 'tributario-f021', frente: 'Cronograma da transição IBS/CBS', verso: '2026: teste (IBS 0,1% e CBS 0,9%). 2027: CBS plena, fim do PIS/Cofins, IPI zerado (salvo ZFM), IS. 2029-2032: ICMS/ISS a 9/10, 8/10, 7/10, 6/10. 2033: fim do ICMS e do ISS.', fundamento: 'Arts. 125 a 129 do ADCT' },
    { id: 'tributario-f022', frente: 'Imposto Seletivo: características', verso: 'Competência da União; bens e serviços prejudiciais à saúde ou ao meio ambiente; não incide em exportações nem sobre energia elétrica e telecomunicações; incide uma única vez; alíquotas por lei ordinária; na extração, cobrado independentemente da destinação (máx. 1%).', fundamento: 'Art. 153, VIII e § 6º, CF' },
    { id: 'tributario-f023', frente: 'Imunidade de IPVA da EC 137/2025', verso: 'Veículos terrestres de passageiros, caminhonetes e mistos com 20 anos ou mais de fabricação, exceto micro-ônibus, ônibus, reboques e semirreboques.', fundamento: 'Art. 155, § 6º, III, e, CF' },
    { id: 'tributario-f024', frente: 'Fraude à execução fiscal: marco', verso: 'Alienação após a inscrição em dívida ativa, sem reserva de bens suficientes, presume-se fraudulenta; não se aplica a Súmula 375 do STJ.', fundamento: 'Art. 185 do CTN; STJ, Tema 290' }
  ]
});
