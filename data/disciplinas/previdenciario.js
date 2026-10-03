/* Direito Previdenciário — conteúdo para a 1ª fase (48º Exame). Base legal vigente em 21/09/2026. */
OAB.registrar({
  id: 'previdenciario',
  topicos: [
    { nome: 'Aposentadorias e regras de transição (EC 103/2019)', relevancia: 3 },
    { nome: 'Qualidade de segurado e período de graça', relevancia: 3 },
    { nome: 'Segurados e dependentes do RGPS', relevancia: 3 },
    { nome: 'Benefícios por incapacidade e auxílio-acidente', relevancia: 3 },
    { nome: 'Pensão por morte, auxílio-reclusão e salário-maternidade', relevancia: 3 },
    { nome: 'Carência', relevancia: 2 },
    { nome: 'Seguridade social: princípios e custeio', relevancia: 2 },
    { nome: 'Benefício de prestação continuada (BPC/LOAS)', relevancia: 2 },
    { nome: 'Decadência, prescrição e revisão de benefícios', relevancia: 2 },
    { nome: 'Competência e processo previdenciário', relevancia: 2 }
  ],
  resumo: [
    {
      titulo: 'Seguridade social e custeio',
      itens: [
        'Seguridade social = saúde (direito de todos, independe de contribuição), previdência (contributiva e de filiação obrigatória) e assistência social (a quem dela necessitar, independe de contribuição) (arts. 194, 196, 201 e 203 CF).',
        'Objetivos (art. 194, parágrafo único): universalidade da cobertura e do atendimento; uniformidade e equivalência entre populações urbanas e rurais; seletividade e distributividade; irredutibilidade do valor dos benefícios; equidade no custeio; diversidade da base de financiamento; gestão democrática e quadripartite (trabalhadores, empregadores, aposentados e Governo).',
        'Nenhum benefício ou serviço pode ser criado, majorado ou estendido sem a correspondente fonte de custeio total (art. 195, § 5º).',
        'Contribuições sociais sujeitam-se apenas à anterioridade nonagesimal (90 dias), não à anterioridade do exercício (art. 195, § 6º).',
        'Alíquotas progressivas do segurado empregado, doméstico e avulso: 7,5%, 9%, 12% e 14% por faixa (art. 28 da EC 103/2019). Contribuição patronal básica de 20% sobre a folha (art. 22, I, da Lei 8.212/1991).',
        'Nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho terá valor inferior ao salário mínimo (art. 201, § 2º, CF).'
      ]
    },
    {
      titulo: 'Segurados e dependentes',
      itens: [
        'Segurados obrigatórios (art. 11 da Lei 8.213/1991): empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial.',
        'Segurado especial: produtor rural pessoa física em regime de economia familiar (área de até 4 módulos fiscais), seringueiro/extrativista e pescador artesanal, com cônjuge/companheiro e filhos maiores de 16 anos que trabalhem com o grupo familiar (art. 11, VII). Contribui sobre a receita da comercialização da produção (art. 25 da Lei 8.212/1991).',
        'Facultativo: quem não exerce atividade que o filie obrigatoriamente (ex.: dona de casa, estudante). É vedada a filiação como facultativo de participante de regime próprio (art. 201, § 5º, CF).',
        'Dependentes (art. 16): classe I — cônjuge, companheiro e filho não emancipado menor de 21 anos ou inválido ou com deficiência intelectual, mental ou grave; classe II — pais; classe III — irmão nas mesmas condições do filho.',
        'A existência de dependente de uma classe exclui os das classes seguintes (art. 16, § 1º). A dependência econômica da classe I é presumida; a das demais deve ser comprovada (art. 16, § 4º).',
        'Enteado e menor tutelado equiparam-se a filho mediante declaração do segurado e comprovação da dependência econômica (art. 16, § 2º).'
      ]
    },
    {
      titulo: 'Qualidade de segurado, período de graça e carência',
      itens: [
        'Período de graça (art. 15): sem limite para quem está em gozo de benefício (exceto auxílio-acidente); 12 meses após a cessação das contribuições do segurado que deixar de exercer atividade remunerada; 12 meses após cessar a segregação (doença de segregação compulsória) ou o livramento do recluso; 3 meses após o licenciamento do serviço militar; 6 meses para o facultativo.',
        'Os 12 meses do inciso II são prorrogados para 24 se o segurado já tiver pago mais de 120 contribuições sem perda da qualidade (§ 1º), e acrescidos de mais 12 se comprovada a situação de desemprego (§ 2º) — máximo de 36 meses.',
        'A perda da qualidade ocorre no dia seguinte ao do término do prazo para recolhimento da contribuição referente ao mês imediatamente posterior ao fim dos prazos acima (art. 15, § 4º).',
        'Carência (art. 25): 12 contribuições para auxílio por incapacidade temporária e aposentadoria por incapacidade permanente; 180 para aposentadorias programáveis; 24 para auxílio-reclusão; 10 para salário-maternidade da contribuinte individual, segurada especial e facultativa — exigência declarada inconstitucional pelo STF nas ADIs 2110 e 2111 (2024).',
        'Independem de carência (art. 26): pensão por morte, salário-família, auxílio-acidente; benefícios por incapacidade decorrentes de acidente de qualquer natureza, doença profissional ou do trabalho ou doença da lista; salário-maternidade da empregada, doméstica e avulsa.',
        'Perdida a qualidade de segurado, para nova concessão de benefícios por incapacidade, salário-maternidade e auxílio-reclusão exige-se metade da carência a partir da nova filiação (art. 27-A).'
      ]
    },
    {
      titulo: 'Aposentadorias após a EC 103/2019',
      itens: [
        'Regra permanente para quem se filiou após 13/11/2019 (art. 19 da EC 103/2019): 62 anos de idade (mulher) e 65 (homem), com 15 anos de contribuição (mulher) e 20 (homem).',
        'Valor (art. 26 da EC 103/2019): 60% da média de todos os salários de contribuição desde julho de 1994, + 2% por ano que exceder 20 anos de contribuição (homem) ou 15 (mulher).',
        'Transição por pontos (art. 15): 30/35 anos de contribuição e soma idade + contribuição de 86/96 pontos em 2019, +1 ponto por ano até 100/105. Em 2026: 93 pontos (mulher) e 103 (homem).',
        'Transição por idade mínima progressiva (art. 16): 30/35 anos de contribuição e idade de 56/61 anos em 2019, +6 meses por ano até 62/65. Em 2026: 59 anos e 6 meses (mulher) e 64 anos e 6 meses (homem).',
        'Pedágio de 50% (art. 17): para quem, em 13/11/2019, faltava até 2 anos para 30/35 anos de contribuição; sem idade mínima, com fator previdenciário. Pedágio de 100% (art. 20): idade de 57/60 anos, 30/35 anos de contribuição e pedágio igual ao tempo que faltava; valor de 100% da média.',
        'Aposentadoria por idade na transição para filiados antes da EC (art. 18): 15 anos de contribuição para ambos os sexos; idade de 65 (homem) e 60 anos para a mulher em 2019, + 6 meses por ano até 62 (atingidos em 2023).'
      ]
    },
    {
      titulo: 'Benefícios por incapacidade e acidentários',
      itens: [
        'Auxílio por incapacidade temporária: 91% do salário de benefício (art. 61), limitado à média dos 12 últimos salários de contribuição (art. 29, § 10). Para o empregado, a empresa paga os primeiros 15 dias e o INSS paga a partir do 16º dia (art. 60, caput e § 3º).',
        'Aposentadoria por incapacidade permanente: 60% + 2% por ano excedente (art. 26, § 2º, EC 103/2019); 100% da média se decorrente de acidente do trabalho, doença profissional ou do trabalho (art. 26, § 3º, II). Acréscimo de 25% para quem necessita de assistência permanente (art. 45 da Lei 8.213/1991), não extensível a outras aposentadorias (Tema 982/STF).',
        'Auxílio-acidente: natureza indenizatória, 50% do salário de benefício, devido após a consolidação das lesões que reduzam a capacidade para o trabalho habitual (art. 86); sem carência; só para empregado, doméstico, avulso e segurado especial (art. 18, § 1º); não acumula com aposentadoria (art. 86, § 2º).',
        'Equipara-se a acidente do trabalho o acidente de trajeto (art. 21, IV, d).',
        'Ações acidentárias contra o INSS são da Justiça Estadual (art. 109, I, CF; Súmula 15/STJ; Súmula 501/STF).'
      ]
    },
    {
      titulo: 'Pensão por morte, auxílio-reclusão e salário-maternidade',
      itens: [
        'Pensão por morte não exige carência (art. 26, I). Valor: cota familiar de 50% + 10 pontos percentuais por dependente, até 100%; cotas não reversíveis (art. 23 da EC 103/2019); 100% se houver dependente inválido ou com deficiência grave (art. 23, § 2º).',
        'Cônjuge ou companheiro: pensão de apenas 4 meses se o segurado não verteu 18 contribuições ou se o casamento/união estável tinha menos de 2 anos na data do óbito (art. 77, § 2º, V, b), salvo óbito por acidente de qualquer natureza ou doença profissional/do trabalho (§ 2º-A).',
        'Cumpridos esses requisitos, a duração varia conforme a idade do beneficiário na data do óbito, de 3 anos a vitalícia (art. 77, § 2º, V, c, com faixas atualizáveis por ato ministerial — § 2º-B).',
        'Auxílio-reclusão: dependentes do segurado de baixa renda recolhido em regime FECHADO, que não receba remuneração da empresa nem outro benefício (art. 80); carência de 24 contribuições (art. 25, IV).',
        'Salário-maternidade: 120 dias, podendo iniciar 28 dias antes do parto (art. 71); também devido na adoção ou guarda judicial para fins de adoção de criança, por 120 dias (art. 71-A). À empregada, é pago pela empresa, que compensa os valores (art. 72, § 1º).'
      ]
    },
    {
      titulo: 'BPC/LOAS (Lei 8.742/1993)',
      itens: [
        'Garantia de 1 salário mínimo mensal à pessoa com deficiência e ao idoso com 65 anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida pela família (art. 203, V, CF; art. 20 da Lei 8.742/1993).',
        'Critério de renda: renda familiar mensal per capita igual ou inferior a 1/4 do salário mínimo (art. 20, § 3º), admitidos outros elementos probatórios da miserabilidade (art. 20, § 11).',
        'Independe de contribuição; não pode ser acumulado com outro benefício da seguridade ou de outro regime, ressalvadas, entre outras exceções legais, a assistência médica e a pensão especial de natureza indenizatória (art. 20, § 4º).',
        'Deve ser revisto a cada 2 anos (art. 21). É intransferível e não gera pensão por morte (art. 23 do Decreto 6.214/2007). Benefício concedido a outro idoso ou pessoa com deficiência da família não entra no cálculo da renda (art. 20, § 14).',
        'A Lei 15.077/2024 reforçou exigências cadastrais para concessão, manutenção e renovação do BPC, como o cadastro biométrico.'
      ]
    },
    {
      titulo: 'Decadência, prescrição, competência e teses',
      itens: [
        'Decadência de 10 anos para o segurado revisar o ato de concessão, contada do dia 1º do mês seguinte ao do recebimento da primeira prestação (art. 103). O STF (ADI 6096) afastou a decadência sobre o próprio direito ao benefício (indeferimento, cancelamento ou cessação).',
        'Prescrição quinquenal das prestações vencidas (art. 103, parágrafo único; Súmula 85/STJ). O INSS tem 10 anos para anular atos favoráveis, salvo má-fé (art. 103-A).',
        'Competência: Justiça Federal para ações contra o INSS (art. 109, I); JEF até 60 salários mínimos (Lei 10.259/2001). Competência delegada à Justiça Estadual quando a comarca de domicílio do segurado ficar a mais de 70 km de Município sede de vara federal (art. 109, § 3º, CF; art. 15, III, da Lei 5.010/1966, com redação da Lei 13.876/2019); recurso ao TRF (art. 109, § 4º).',
        'Prévio requerimento administrativo é condição para ação de concessão, sem exigência de exaurimento da via administrativa (Tema 350/STF).',
        'Revisão da vida toda: o STF, nas ADIs 2110 e 2111 (2024), declarou constitucional e obrigatória a regra de transição do art. 3º da Lei 9.876/1999; nos embargos do Tema 1102 (nov./2025), a tese favorável aos segurados foi cancelada.'
      ]
    }
  ],
  legislacao: [
    { nome: 'Constituição Federal de 1988 (arts. 194 a 204)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
    { nome: 'Emenda Constitucional 103/2019 — Reforma da Previdência', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
    { nome: 'Lei 8.213/1991 — Planos de Benefícios da Previdência Social', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
    { nome: 'Lei 8.212/1991 — Custeio da Seguridade Social', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
    { nome: 'Lei 8.742/1993 — Lei Orgânica da Assistência Social (LOAS)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8742.htm' },
    { nome: 'Decreto 3.048/1999 — Regulamento da Previdência Social', url: 'https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm' },
    { nome: 'Lei 9.876/1999 — Cálculo dos benefícios (fator previdenciário)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9876.htm' },
    { nome: 'Lei 5.010/1966 — Justiça Federal (competência delegada, art. 15)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l5010.htm' },
    { nome: 'Lei 10.259/2001 — Juizados Especiais Federais', url: 'https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10259.htm' }
  ],
  dicas: [
    'Previdenciário costuma ter 2 questões: priorize período de graça (art. 15), carência (arts. 25 e 26), regras da EC 103/2019 e pensão por morte.',
    'Monte uma tabela de números: 12/24/36 meses de graça, 6 meses do facultativo, 12/180/24 contribuições de carência, 4 meses de pensão, 120 dias de salário-maternidade, 10 anos de decadência e 5 de prescrição.',
    'Em competência, separe: acidente do trabalho contra o INSS = Justiça Estadual; demais benefícios = Justiça Federal (ou delegada, se a comarca estiver a mais de 70 km da vara federal).',
    'Desconfie de alternativas que concedem auxílio-acidente ao contribuinte individual ou ao facultativo, que exigem carência para pensão por morte ou que tratam a revisão da vida toda como direito reconhecido.'
  ],
  questoes: [
    {
      id: 'previdenciario-001',
      topico: 'Qualidade de segurado e período de graça',
      dificuldade: 2,
      enunciado: 'Paulo trabalhou como empregado por 11 anos consecutivos, com 132 contribuições mensais sem interrupção que acarretasse perda da qualidade de segurado. Dispensado sem justa causa, comprovou a situação de desemprego mediante registro no órgão próprio do Ministério do Trabalho e Emprego e não voltou a contribuir. Segundo a Lei 8.213/1991, Paulo mantém a qualidade de segurado, independentemente de contribuições, por até',
      alternativas: [
        '12 meses após a cessação das contribuições.',
        '24 meses após a cessação das contribuições.',
        '36 meses após a cessação das contribuições.',
        'tempo indeterminado, enquanto perdurar o desemprego.'
      ],
      correta: 2,
      comentario: 'Correta a C: o prazo básico é de 12 meses após a cessação das contribuições (art. 15, II, da Lei 8.213/1991), prorrogado para 24 meses se o segurado já tiver pago mais de 120 contribuições mensais sem interrupção que acarrete a perda da qualidade de segurado (§ 1º) e acrescido de 12 meses para o desempregado que comprove essa situação (§ 2º), totalizando 36 meses. A ignora as duas prorrogações. B ignora o acréscimo pelo desemprego. D está errada: o período de graça é limitado; só não há limite para quem está em gozo de benefício (art. 15, I).',
      fundamento: 'Art. 15, I e II, §§ 1º e 2º, da Lei 8.213/1991'
    },
    {
      id: 'previdenciario-002',
      topico: 'Qualidade de segurado e período de graça',
      dificuldade: 1,
      enunciado: 'Helena, dona de casa sem renda própria, contribuiu por 5 anos como segurada facultativa do RGPS. Em razão de dificuldades financeiras, deixou de recolher as contribuições. Segundo a Lei 8.213/1991, Helena mantém a qualidade de segurada, independentemente de contribuições, até',
      alternativas: [
        '6 meses após a cessação das contribuições.',
        '3 meses após a cessação das contribuições.',
        '12 meses após a cessação das contribuições.',
        '24 meses após a cessação das contribuições.'
      ],
      correta: 0,
      comentario: 'Correta a A: o segurado facultativo mantém a qualidade de segurado até 6 meses após a cessação das contribuições (art. 15, VI, da Lei 8.213/1991). B está errada: 3 meses é o prazo do segurado incorporado às Forças Armadas, após o licenciamento (art. 15, V). C está errada: 12 meses é o prazo de quem deixa de exercer atividade abrangida pela previdência (art. 15, II). D está errada: 24 meses decorre da prorrogação do § 1º, aplicável ao inciso II.',
      fundamento: 'Art. 15, II, V e VI, da Lei 8.213/1991'
    },
    {
      id: 'previdenciario-003',
      topico: 'Benefícios por incapacidade e auxílio-acidente',
      dificuldade: 2,
      enunciado: 'Carlos é pintor autônomo e contribui regularmente para o RGPS como contribuinte individual há 8 anos. Após sofrer queda de uma escada durante um serviço, ficou com sequela definitiva que reduziu sua capacidade para o trabalho que habitualmente exercia, embora possa continuar trabalhando. Carlos requereu auxílio-acidente. Sobre o caso, assinale a afirmativa correta.',
      alternativas: [
        'Carlos faz jus ao auxílio-acidente, no valor de 50% do salário de benefício, por se tratar de benefício que independe de carência.',
        'Carlos faz jus ao auxílio-acidente, desde que comprove carência de 12 contribuições mensais.',
        'Carlos faz jus à aposentadoria por incapacidade permanente, no valor de 100% da média dos salários de contribuição, por se tratar de acidente.',
        'Carlos não faz jus ao auxílio-acidente, pois esse benefício é restrito ao empregado, ao empregado doméstico, ao trabalhador avulso e ao segurado especial.'
      ],
      correta: 3,
      comentario: 'Correta a D: somente poderão beneficiar-se do auxílio-acidente os segurados incluídos nos incisos I (empregado), II (empregado doméstico), VI (avulso) e VII (segurado especial) do art. 11 da Lei 8.213/1991 (art. 18, § 1º). O contribuinte individual não está entre eles. A está errada: embora o valor seja de 50% e não haja carência (arts. 26, I, e 86, § 1º), Carlos não é destinatário do benefício. B está errada: o auxílio-acidente independe de carência e, de todo modo, não alcança o contribuinte individual. C está errada: não há incapacidade total e permanente, e o percentual de 100% é reservado à incapacidade decorrente de acidente do trabalho ou doença profissional/do trabalho (art. 26, § 3º, II, da EC 103/2019).',
      fundamento: 'Arts. 11, 18, § 1º, 26, I, e 86 da Lei 8.213/1991'
    },
    {
      id: 'previdenciario-004',
      topico: 'Pensão por morte, auxílio-reclusão e salário-maternidade',
      dificuldade: 2,
      enunciado: 'Pedro, segurado do RGPS com 10 anos de contribuição, faleceu em razão de câncer, doença sem relação com o trabalho. Ele era casado com Joana, de 40 anos de idade, capaz e sem deficiência, havia 1 ano e 3 meses. Joana requereu pensão por morte. Segundo a Lei 8.213/1991, assinale a afirmativa correta.',
      alternativas: [
        'Joana não tem direito à pensão, pois o casamento tinha menos de 2 anos na data do óbito.',
        'Joana tem direito à pensão por morte pelo prazo de 4 meses, porque o casamento foi iniciado menos de 2 anos antes do óbito do segurado.',
        'Joana tem direito à pensão vitalícia, pois Pedro havia vertido mais de 18 contribuições mensais.',
        'Joana tem direito à pensão por 3 anos, prazo mínimo aplicável a qualquer cônjuge.'
      ],
      correta: 1,
      comentario: 'Correta a B: o direito à pensão do cônjuge cessa em 4 meses se o óbito ocorrer sem que o segurado tenha vertido 18 contribuições mensais OU se o casamento ou a união estável tiverem sido iniciados em menos de 2 anos antes do óbito (art. 77, § 2º, V, b, da Lei 8.213/1991). A exceção do § 2º-A (óbito por acidente de qualquer natureza ou doença profissional ou do trabalho) não se aplica. A está errada: o casamento curto limita a duração, mas não exclui o direito. C está errada: os requisitos de 18 contribuições e de 2 anos de casamento são cumulativos para afastar a pensão de 4 meses. D está errada: a duração por faixa etária (alínea c) só se aplica se cumpridos ambos os requisitos.',
      fundamento: 'Art. 77, § 2º, V, b e c, e § 2º-A, da Lei 8.213/1991'
    },
    {
      id: 'previdenciario-005',
      topico: 'Aposentadorias e regras de transição (EC 103/2019)',
      dificuldade: 1,
      enunciado: 'Ricardo filiou-se ao RGPS pela primeira vez em 2021, como empregado. Ele procura um advogado para saber quais os requisitos para a aposentadoria programada, considerando a regra aplicável até que lei disponha sobre o tema. Segundo a EC 103/2019, Ricardo poderá aposentar-se aos',
      alternativas: [
        '60 anos de idade, com 15 anos de tempo de contribuição.',
        '62 anos de idade, com 20 anos de tempo de contribuição.',
        '65 anos de idade, com 15 anos de tempo de contribuição.',
        '65 anos de idade, com 20 anos de tempo de contribuição.'
      ],
      correta: 3,
      comentario: 'Correta a D: o segurado filiado ao RGPS após a entrada em vigor da EC 103/2019 será aposentado aos 65 anos de idade, se homem, com 20 anos de tempo de contribuição (art. 19, caput, da EC 103/2019). A está errada: reproduz requisito da antiga aposentadoria por idade urbana feminina. B está errada: 62 anos é a idade exigida da mulher. C está errada: 15 anos de contribuição é a exigência para a mulher na regra permanente e para os homens filiados antes da EC na regra de transição do art. 18.',
      fundamento: 'Arts. 18 e 19 da EC 103/2019; art. 201, § 7º, I, CF'
    },
    {
      id: 'previdenciario-006',
      topico: 'Aposentadorias e regras de transição (EC 103/2019)',
      dificuldade: 3,
      enunciado: 'Ana, filiada ao RGPS desde 1994, completou em julho de 2026 exatamente 61 anos de idade e 32 anos de tempo de contribuição. Considerando exclusivamente a regra de transição por pontos do art. 15 da EC 103/2019, assinale a afirmativa correta.',
      alternativas: [
        'Ana preenche os requisitos, pois em 2026 exigem-se da mulher 30 anos de contribuição e 93 pontos no somatório da idade e do tempo de contribuição.',
        'Ana não preenche os requisitos, pois a regra por pontos exige da mulher, desde 2019, 100 pontos.',
        'Ana não preenche os requisitos, pois a regra por pontos exige idade mínima de 62 anos para a mulher.',
        'Ana preenche os requisitos, mas o valor do benefício será calculado obrigatoriamente com a aplicação do fator previdenciário.'
      ],
      correta: 0,
      comentario: 'Correta a A: a regra do art. 15 da EC 103/2019 exige da mulher 30 anos de contribuição e somatório de idade e tempo de contribuição de 86 pontos em 2019, acrescido de 1 ponto a cada ano a partir de 1º/01/2020, até 100 pontos (§ 1º). Em 2026, são 93 pontos; Ana soma 61 + 32 = 93. B está errada: 100 pontos é o limite final, não a exigência inicial. C está errada: a regra por pontos não exige idade mínima. D está errada: o valor segue o art. 26 da EC 103/2019 (60% da média + 2% por ano que exceder 15 anos, para a mulher), sem fator previdenciário, que é próprio do pedágio de 50% (art. 17).',
      fundamento: 'Arts. 15, 17 e 26 da EC 103/2019'
    },
    {
      id: 'previdenciario-007',
      topico: 'Carência',
      dificuldade: 2,
      enunciado: 'Lucas foi contratado como empregado há 3 meses. Num domingo, sofreu acidente de moto em passeio particular, sem relação com o trabalho, e ficou incapacitado para suas atividades por 60 dias. Sobre o direito de Lucas, assinale a afirmativa correta.',
      alternativas: [
        'Lucas não tem direito ao auxílio por incapacidade temporária, pois não cumpriu a carência de 12 contribuições mensais.',
        'Lucas tem direito ao auxílio por incapacidade temporária, pago pelo INSS desde o primeiro dia de afastamento.',
        'Lucas tem direito ao auxílio por incapacidade temporária independentemente de carência, por se tratar de acidente de qualquer natureza, cabendo à empresa pagar os primeiros 15 dias e ao INSS o benefício a partir do 16º dia.',
        'Lucas só teria direito ao benefício sem carência se o acidente fosse do trabalho, hipótese em que a competência para eventual ação seria da Justiça Estadual.'
      ],
      correta: 2,
      comentario: 'Correta a C: independe de carência o auxílio por incapacidade temporária nos casos de acidente de qualquer natureza ou causa (art. 26, II, da Lei 8.213/1991); para o segurado empregado, o benefício é devido a contar do 16º dia do afastamento, cabendo à empresa pagar o salário integral dos primeiros 15 dias (art. 60, caput e § 3º). A está errada porque ignora a dispensa de carência. B está errada quanto ao termo inicial para o empregado. D está errada: a dispensa abrange acidente de QUALQUER natureza, não apenas o do trabalho.',
      fundamento: 'Arts. 25, I, 26, II, e 60, caput e § 3º, da Lei 8.213/1991'
    },
    {
      id: 'previdenciario-008',
      topico: 'Decadência, prescrição e revisão de benefícios',
      dificuldade: 2,
      enunciado: 'Teresa obteve aposentadoria em março de 2014 e recebeu a primeira prestação em abril de 2014. Em setembro de 2026, percebeu que o INSS deixou de computar salários de contribuição no cálculo da renda mensal inicial e pretende ajuizar ação de revisão do ato de concessão. Segundo a Lei 8.213/1991, assinale a afirmativa correta.',
      alternativas: [
        'A revisão é possível, aplicando-se apenas a prescrição das parcelas vencidas antes dos 5 anos que antecedem o ajuizamento.',
        'Operou-se a decadência do direito de revisar o ato de concessão, cujo prazo é de 10 anos contados do dia 1º do mês seguinte ao do recebimento da primeira prestação.',
        'Operou-se a decadência, cujo prazo é de 5 anos contados da concessão do benefício.',
        'O direito à revisão é imprescritível e não se sujeita à decadência, por se tratar de direito fundamental.'
      ],
      correta: 1,
      comentario: 'Correta a B: o prazo de decadência do direito do segurado à revisão do ato de concessão é de 10 anos, contado do dia 1º do mês subsequente ao do recebimento da primeira prestação (art. 103, I, da Lei 8.213/1991). Iniciado em 1º/05/2014, encerrou-se em 2024. A está errada: a prescrição quinquenal (art. 103, parágrafo único) atinge parcelas, mas não afasta a decadência do direito de revisar o ato. C está errada quanto ao prazo e ao termo inicial. D está errada: o STF afastou a decadência apenas quanto ao fundo de direito ao benefício (ADI 6096), não quanto à revisão do ato de concessão (Tema 313/STF).',
      fundamento: 'Art. 103, I e parágrafo único, da Lei 8.213/1991; Tema 313/STF; ADI 6096/STF'
    },
    {
      id: 'previdenciario-009',
      topico: 'Competência e processo previdenciário',
      dificuldade: 1,
      enunciado: 'José, empregado de uma metalúrgica, sofreu acidente do trabalho que o deixou temporariamente incapacitado. O INSS indeferiu o auxílio por incapacidade temporária acidentário, alegando ausência de nexo causal. José pretende ajuizar ação contra o INSS. A competência para processar e julgar a ação é da',
      alternativas: [
        'Justiça Federal, por ser o INSS autarquia federal.',
        'Justiça do Trabalho, por envolver acidente ocorrido na relação de emprego.',
        'Justiça Federal, por meio do Juizado Especial Federal, obrigatoriamente.',
        'Justiça Estadual, por se tratar de causa de acidente do trabalho.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 109, I, CF exclui da competência da Justiça Federal as causas de acidente do trabalho, que tramitam na Justiça Estadual mesmo quando o INSS é réu (Súmula 15/STJ; Súmula 501/STF). A e C estão erradas por ignorarem essa exceção. B está errada: a Justiça do Trabalho é competente para a ação indenizatória contra o EMPREGADOR (art. 114, VI, CF; SV 22), não para a ação acidentária contra o INSS.',
      fundamento: 'Art. 109, I, CF; Súmula 15/STJ; Súmula 501/STF'
    },
    {
      id: 'previdenciario-010',
      topico: 'Competência e processo previdenciário',
      dificuldade: 2,
      enunciado: 'Benedita reside em Município que é sede de comarca da Justiça Estadual, mas não de vara federal. A sede de vara federal mais próxima fica a 50 km de distância. Em 2026, ela pretende ajuizar ação para obter aposentadoria por idade negada pelo INSS. Segundo a Constituição e a legislação vigente, a ação deve ser proposta',
      alternativas: [
        'na Justiça Federal, pois a competência delegada à Justiça Estadual só se aplica quando a comarca de domicílio do segurado estiver localizada a mais de 70 km de Município sede de vara federal.',
        'na Justiça Estadual de seu domicílio, pois basta que a comarca não seja sede de vara federal para que se aplique a competência delegada.',
        'na Justiça Estadual, que é sempre competente para benefícios previdenciários, por opção do segurado.',
        'na Justiça do Trabalho, por se tratar de benefício decorrente de contribuições sobre a remuneração.'
      ],
      correta: 0,
      comentario: 'Correta a A: após a EC 103/2019, o art. 109, § 3º, CF passou a prever que a lei poderá autorizar o processamento na Justiça Estadual quando a comarca do domicílio do segurado não for sede de vara federal; a Lei 13.876/2019 deu nova redação ao art. 15, III, da Lei 5.010/1966, restringindo a delegação às comarcas localizadas a mais de 70 km de Município sede de vara federal. B reproduz a regra anterior, já superada. C está errada: a competência é, em regra, da Justiça Federal (art. 109, I). D está errada: a Justiça do Trabalho não julga ações de benefício contra o INSS.',
      fundamento: 'Art. 109, I e § 3º, CF; art. 15, III, da Lei 5.010/1966 (redação da Lei 13.876/2019)'
    },
    {
      id: 'previdenciario-011',
      topico: 'Benefício de prestação continuada (BPC/LOAS)',
      dificuldade: 1,
      enunciado: 'Antônio, de 67 anos, nunca contribuiu para a previdência social. Mora com a esposa, que não tem renda, e a renda familiar mensal per capita é inferior a 1/4 do salário mínimo. Ele procura a Defensoria Pública para saber se tem direito a algum benefício. Assinale a afirmativa correta.',
      alternativas: [
        'Antônio não tem direito a benefício algum, pois a seguridade social exige contribuição prévia para qualquer prestação.',
        'Antônio tem direito à aposentadoria por idade do RGPS, que dispensa carência para maiores de 65 anos.',
        'Antônio tem direito ao benefício de prestação continuada, no valor de 1 salário mínimo mensal, independentemente de contribuição, benefício que deve ser revisto a cada 2 anos.',
        'Antônio tem direito ao benefício de prestação continuada, no valor de meio salário mínimo, por ser idoso sem contribuições.'
      ],
      correta: 2,
      comentario: 'Correta a C: a assistência social é prestada a quem dela necessitar, independentemente de contribuição, garantindo 1 salário mínimo mensal ao idoso que comprove não possuir meios de prover a própria manutenção (art. 203, V, CF); a Lei 8.742/1993 considera idoso, para esse fim, quem tem 65 anos ou mais, com renda familiar per capita igual ou inferior a 1/4 do salário mínimo (art. 20, caput e § 3º), e determina a revisão a cada 2 anos (art. 21). A está errada: a assistência social não é contributiva. B está errada: a aposentadoria por idade exige carência (art. 25, II, da Lei 8.213/1991). D está errada quanto ao valor.',
      fundamento: 'Art. 203, V, CF; arts. 20 e 21 da Lei 8.742/1993'
    },
    {
      id: 'previdenciario-012',
      topico: 'Seguridade social: princípios e custeio',
      dificuldade: 2,
      enunciado: 'Lei federal publicada em 10 de março de 2026 majorou contribuição social do empregador destinada ao financiamento da seguridade social. Uma empresa consulta seu advogado sobre a partir de quando a majoração pode ser exigida. Segundo a Constituição Federal, a nova contribuição',
      alternativas: [
        'pode ser exigida imediatamente, pois as contribuições sociais não se submetem a qualquer regra de anterioridade.',
        'somente pode ser exigida após decorridos 90 dias da data da publicação da lei, não se lhe aplicando a anterioridade do exercício financeiro.',
        'somente pode ser exigida a partir de 1º de janeiro de 2027, por força da anterioridade do exercício financeiro.',
        'somente pode ser exigida a partir de 1º de janeiro de 2027 e, cumulativamente, após 90 dias da publicação.'
      ],
      correta: 1,
      comentario: 'Correta a B: as contribuições sociais para a seguridade só podem ser exigidas após decorridos 90 dias da data da publicação da lei que as houver instituído ou modificado, não se lhes aplicando o disposto no art. 150, III, b (anterioridade do exercício) (art. 195, § 6º, CF). A está errada: há a anterioridade nonagesimal específica. C e D estão erradas porque aplicam a anterioridade anual, expressamente afastada.',
      fundamento: 'Art. 195, § 6º, CF'
    },
    {
      id: 'previdenciario-013',
      topico: 'Decadência, prescrição e revisão de benefícios',
      dificuldade: 3,
      enunciado: 'João aposentou-se pelo RGPS em 2019, antes da EC 103/2019, com o cálculo feito pela regra de transição do art. 3º da Lei 9.876/1999, que considera os salários de contribuição a partir de julho de 1994. Como suas contribuições anteriores a 1994 eram elevadas, ele pretende ajuizar ação para que seja aplicada a regra definitiva do art. 29 da Lei 8.213/1991, incluindo todo o período contributivo ("revisão da vida toda"). Considerando o entendimento do STF vigente em 2026, assinale a afirmativa correta.',
      alternativas: [
        'O pedido procede, pois o STF assegurou ao segurado o direito de optar pela regra mais favorável, conforme a tese originalmente fixada no Tema 1102.',
        'O pedido procede apenas se João comprovar que as contribuições anteriores a 1994 foram recolhidas em moeda corrente.',
        'O pedido não procede, pois o STF declarou constitucional o art. 3º da Lei 9.876/1999, cuja regra de transição é de aplicação obrigatória, não havendo direito de opção pela regra definitiva, o que levou ao cancelamento da tese anterior do Tema 1102.',
        'O pedido não procede, exclusivamente porque o direito de revisar o ato de concessão já foi atingido pela decadência.'
      ],
      correta: 2,
      comentario: 'Correta a C: no julgamento das ADIs 2110 e 2111 (2024), o STF declarou a constitucionalidade do art. 3º da Lei 9.876/1999, reconhecendo que a regra de transição é obrigatória e não admite opção pela regra definitiva; em consequência, nos embargos de declaração do Tema 1102 (RE 1.276.977, julgados em novembro de 2025), a tese anterior favorável à "revisão da vida toda" foi cancelada. A está errada porque a tese foi superada. B está errada por criar requisito inexistente. D está errada: concedido o benefício em 2019, o prazo decenal do art. 103 da Lei 8.213/1991 ainda não se esgotou; a improcedência decorre do mérito.',
      fundamento: 'Art. 3º da Lei 9.876/1999; ADIs 2110 e 2111/STF; Tema 1102/STF (RE 1.276.977); art. 103 da Lei 8.213/1991'
    },
    {
      id: 'previdenciario-014',
      topico: 'Segurados e dependentes do RGPS',
      dificuldade: 1,
      enunciado: 'Roberto, segurado do RGPS, faleceu deixando a esposa, Sandra, e a mãe, Lourdes, que comprovadamente dependia economicamente dele. Não deixou filhos. Ambas requereram pensão por morte. Segundo a Lei 8.213/1991, assinale a afirmativa correta.',
      alternativas: [
        'A pensão deve ser dividida em partes iguais entre Sandra e Lourdes, pois ambas são dependentes.',
        'A pensão é devida apenas a Lourdes, pois a dependência econômica dos pais prevalece quando comprovada.',
        'A pensão é devida a Sandra e a Lourdes, cabendo 2/3 à esposa e 1/3 à mãe.',
        'A pensão é devida apenas a Sandra, pois a existência de dependente da classe I exclui do direito às prestações os dependentes das classes seguintes, como os pais.'
      ],
      correta: 3,
      comentario: 'Correta a D: o cônjuge integra a classe I de dependentes (art. 16, I, da Lei 8.213/1991), com dependência econômica presumida (§ 4º), enquanto os pais compõem a classe II (art. 16, II); a existência de dependente de qualquer classe exclui do direito às prestações os das classes seguintes (art. 16, § 1º). A e C estão erradas porque não há concorrência entre classes distintas. B está errada porque inverte a hierarquia legal: a dependência comprovada dos pais só lhes aproveita na falta de dependentes da classe I.',
      fundamento: 'Art. 16, I e II, §§ 1º e 4º, da Lei 8.213/1991'
    }
  ],
  flashcards: [
    { id: 'previdenciario-f001', frente: 'Período de graça: prazos do art. 15 da Lei 8.213/1991', verso: 'Em gozo de benefício: sem limite. Deixou de contribuir: 12 meses (+12 se mais de 120 contribuições; +12 se desempregado). Segregado e recluso: 12 meses. Serviço militar: 3 meses. Facultativo: 6 meses.', fundamento: 'Art. 15 da Lei 8.213/1991' },
    { id: 'previdenciario-f002', frente: 'Quando ocorre a perda da qualidade de segurado?', verso: 'No dia seguinte ao do término do prazo para recolhimento da contribuição referente ao mês imediatamente posterior ao fim do período de graça.', fundamento: 'Art. 15, § 4º, da Lei 8.213/1991' },
    { id: 'previdenciario-f003', frente: 'Carências do art. 25 da Lei 8.213/1991', verso: 'Incapacidade temporária e permanente: 12. Aposentadorias programáveis: 180. Auxílio-reclusão: 24. Salário-maternidade (CI, especial e facultativa): 10 — exigência declarada inconstitucional pelo STF (ADIs 2110 e 2111).', fundamento: 'Art. 25 da Lei 8.213/1991; ADIs 2110 e 2111/STF' },
    { id: 'previdenciario-f004', frente: 'Benefícios que independem de carência (principais)', verso: 'Pensão por morte, salário-família, auxílio-acidente; incapacidade por acidente de qualquer natureza, doença profissional/do trabalho ou doença da lista; salário-maternidade da empregada, doméstica e avulsa.', fundamento: 'Art. 26 da Lei 8.213/1991' },
    { id: 'previdenciario-f005', frente: 'Aposentadoria programada (regra permanente da EC 103/2019)', verso: 'Mulher: 62 anos + 15 anos de contribuição. Homem: 65 anos + 20 anos de contribuição (filiados após 13/11/2019).', fundamento: 'Art. 19 da EC 103/2019' },
    { id: 'previdenciario-f006', frente: 'Regra de transição por pontos em 2026', verso: 'Mulher: 30 anos de contribuição e 93 pontos. Homem: 35 anos de contribuição e 103 pontos. Sobe 1 ponto por ano até 100/105.', fundamento: 'Art. 15 da EC 103/2019' },
    { id: 'previdenciario-f007', frente: 'Valor da aposentadoria após a EC 103/2019 (regra geral)', verso: '60% da média de todos os salários de contribuição desde 07/1994 + 2% por ano que exceder 20 anos (homem) ou 15 anos (mulher) de contribuição.', fundamento: 'Art. 26, § 2º, da EC 103/2019' },
    { id: 'previdenciario-f008', frente: 'Cota da pensão por morte após a EC 103/2019', verso: '50% (cota familiar) + 10 pontos percentuais por dependente, até 100%; cotas não reversíveis. Com dependente inválido ou com deficiência grave: 100% até o teto.', fundamento: 'Art. 23 da EC 103/2019' },
    { id: 'previdenciario-f009', frente: 'Pensão de apenas 4 meses ao cônjuge/companheiro', verso: 'Quando o segurado não verteu 18 contribuições ou o casamento/união estável tinha menos de 2 anos na data do óbito — salvo morte por acidente de qualquer natureza ou doença profissional/do trabalho.', fundamento: 'Art. 77, § 2º, V, b, e § 2º-A, da Lei 8.213/1991' },
    { id: 'previdenciario-f010', frente: 'Auxílio-acidente: valor, natureza e destinatários', verso: '50% do salário de benefício, indenizatório, sem carência; só para empregado, doméstico, avulso e segurado especial; não acumula com aposentadoria.', fundamento: 'Arts. 18, § 1º, e 86 da Lei 8.213/1991' },
    { id: 'previdenciario-f011', frente: 'Acréscimo de 25% (grande invalidez)', verso: 'Só para aposentadoria por incapacidade permanente de quem necessita de assistência permanente de outra pessoa; não se estende às demais aposentadorias.', fundamento: 'Art. 45 da Lei 8.213/1991; Tema 982/STF' },
    { id: 'previdenciario-f012', frente: 'Auxílio-reclusão: requisitos', verso: 'Segurado de baixa renda recolhido em regime fechado, sem remuneração da empresa nem outro benefício; carência de 24 contribuições.', fundamento: 'Arts. 25, IV, e 80 da Lei 8.213/1991; art. 27 da EC 103/2019' },
    { id: 'previdenciario-f013', frente: 'Decadência e prescrição previdenciárias', verso: 'Decadência de 10 anos para revisar o ato de concessão (do 1º dia do mês seguinte ao 1º pagamento). Prescrição de 5 anos das parcelas. INSS: 10 anos para anular atos favoráveis, salvo má-fé.', fundamento: 'Arts. 103 e 103-A da Lei 8.213/1991' },
    { id: 'previdenciario-f014', frente: 'Competência delegada previdenciária', verso: 'Justiça Estadual julga causas contra o INSS quando a comarca de domicílio do segurado está a mais de 70 km de Município sede de vara federal; recurso vai ao TRF.', fundamento: 'Art. 109, §§ 3º e 4º, CF; art. 15, III, da Lei 5.010/1966' },
    { id: 'previdenciario-f015', frente: 'BPC/LOAS: requisitos', verso: 'Pessoa com deficiência ou idoso com 65+ anos; renda familiar per capita igual ou inferior a 1/4 do salário mínimo; valor de 1 salário mínimo; independe de contribuição; revisão a cada 2 anos.', fundamento: 'Art. 203, V, CF; arts. 20 e 21 da Lei 8.742/1993' },
    { id: 'previdenciario-f016', frente: 'Revisão da vida toda (Tema 1102): situação atual', verso: 'Superada. O STF (ADIs 2110 e 2111) declarou obrigatória a regra de transição do art. 3º da Lei 9.876/1999, e a tese do Tema 1102 foi cancelada nos embargos (nov./2025).', fundamento: 'ADIs 2110 e 2111/STF; Tema 1102/STF' },
    { id: 'previdenciario-f017', frente: 'Anterioridade das contribuições sociais da seguridade', verso: 'Apenas a nonagesimal: 90 dias da publicação da lei; não se aplica a anterioridade do exercício.', fundamento: 'Art. 195, § 6º, CF' },
    { id: 'previdenciario-f018', frente: 'É preciso requerer administrativamente antes de ajuizar ação previdenciária?', verso: 'Sim, para concessão (prévio requerimento), mas sem exigência de exaurimento da via administrativa; dispensado quando o entendimento do INSS for notória e reiteradamente contrário.', fundamento: 'Tema 350/STF (RE 631.240)' }
  ]
});
