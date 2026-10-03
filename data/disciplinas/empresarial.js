/* Direito Empresarial — conteúdo para a 1ª fase (48º Exame). Base legal vigente em 21/09/2026. */
OAB.registrar({
  id: 'empresarial',
  topicos: [ // edital verticalizado: ordenado do mais cobrado ao menos cobrado na FGV
    { nome: 'Falência', relevancia: 3 },
    { nome: 'Recuperação judicial e extrajudicial', relevancia: 3 },
    { nome: 'Títulos de crédito', relevancia: 3 },
    { nome: 'Sociedade limitada', relevancia: 3 },
    { nome: 'Teoria geral da empresa e empresário', relevancia: 3 },
    { nome: 'Sociedades por ações', relevancia: 2 },
    { nome: 'Propriedade industrial', relevancia: 2 },
    { nome: 'Sociedades não personificadas e sociedade simples', relevancia: 2 },
    { nome: 'Estabelecimento e nome empresarial', relevancia: 2 },
    { nome: 'Desconsideração da personalidade jurídica', relevancia: 2 },
    { nome: 'Contratos empresariais', relevancia: 2 },
    { nome: 'Registro e escrituração', relevancia: 1 },
    { nome: 'Microempresa e empresa de pequeno porte (LC 123/2006)', relevancia: 1 }
  ],
  resumo: [
    {
      titulo: 'Empresário, capacidade e registro',
      itens: [
        'Empresário é quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços (art. 966, CC).',
        'Não é empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, ainda que com auxiliares, salvo se o exercício da profissão constituir elemento de empresa (art. 966, parágrafo único, CC).',
        'A inscrição na Junta Comercial é obrigatória antes do início da atividade (art. 967, CC), mas tem natureza declaratória: o empresário irregular continua sendo empresário.',
        'O empresário rural tem registro facultativo; se registrado, equipara-se ao empresário sujeito a registro (art. 971, CC).',
        'O incapaz não pode iniciar empresa, mas pode continuá-la, por meio de representante ou assistente, mediante autorização judicial (art. 974, CC); para ser sócio, o capital deve estar totalmente integralizado e ele não pode administrar (art. 974, § 3º).',
        'Cônjuges podem contratar sociedade entre si ou com terceiros, salvo se casados no regime da comunhão universal ou da separação obrigatória (art. 977, CC).',
        'O empresário casado pode alienar ou gravar imóveis da empresa sem outorga conjugal, qualquer que seja o regime de bens (art. 978, CC).',
        'Desde a Lei 14.195/2021 (art. 41), as EIRELIs foram transformadas em sociedades limitadas unipessoais, independentemente de alteração do ato constitutivo; o art. 980-A do CC foi revogado pela Lei 14.382/2022.'
      ]
    },
    {
      titulo: 'Sociedades: classificação e tipos não personificados',
      itens: [
        'A sociedade por ações é sempre empresária e a cooperativa é sempre simples, independentemente do objeto (art. 982, parágrafo único, CC).',
        'A personalidade jurídica da sociedade nasce com a inscrição do ato constitutivo no registro próprio (arts. 45 e 985, CC).',
        'Sociedade em comum: os sócios respondem solidária e ilimitadamente; aquele que contratou pela sociedade não tem benefício de ordem (art. 990, CC). Entre sócios, a existência só se prova por escrito; terceiros podem prová-la de qualquer modo (art. 987).',
        'Sociedade em conta de participação: só o sócio ostensivo se obriga perante terceiros; o participante obriga-se apenas perante o ostensivo, salvo se tomar parte nas relações com terceiros (art. 991 e 993, parágrafo único, CC).',
        'A inscrição do contrato da conta de participação em qualquer registro não lhe confere personalidade jurídica (art. 993, CC).',
        'Sociedade simples: sócios respondem subsidiariamente, na proporção de sua participação, salvo cláusula de solidariedade (art. 1.023, CC); o cedente de quotas responde solidariamente por 2 anos após a averbação (art. 1.003, parágrafo único).'
      ]
    },
    {
      titulo: 'Sociedade limitada (pós Leis 13.874/2019 e 14.451/2022)',
      itens: [
        'Responsabilidade de cada sócio restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital (art. 1.052, CC).',
        'A limitada pode ser constituída por uma ou mais pessoas (art. 1.052, § 1º, CC — sociedade limitada unipessoal), sem limite de quantidade por titular.',
        'É vedada contribuição que consista em prestação de serviços (art. 1.055, § 2º, CC).',
        'Na omissão do contrato, o sócio cede quotas livremente a outro sócio; a estranho, se não houver oposição de titulares de mais de 1/4 do capital (art. 1.057, CC).',
        'Quóruns (art. 1.076 com Lei 14.451/2022): mais da metade do capital social para designação e destituição de administradores, remuneração, modificação do contrato social, incorporação, fusão, dissolução e pedido de recuperação; maioria dos presentes nos demais casos.',
        'Administrador não sócio: aprovação de 2/3 dos sócios enquanto o capital não estiver integralizado e de mais da metade do capital após a integralização (art. 1.061, CC).',
        'Assembleia é obrigatória se houver mais de 10 sócios (art. 1.072, § 1º); instala-se com 3/4 do capital em 1ª convocação e com qualquer número em 2ª (art. 1.074); a anual ocorre nos 4 meses seguintes ao término do exercício (art. 1.078).',
        'Exclusão extrajudicial de minoritário: maioria representativa de mais da metade do capital, justa causa (atos de inegável gravidade) e previsão contratual (art. 1.085, CC).',
        'Dissidente de modificação contratual, fusão ou incorporação tem direito de retirada nos 30 dias seguintes à reunião (art. 1.077, CC).'
      ]
    },
    {
      titulo: 'Sociedade anônima (Lei 6.404/1976)',
      itens: [
        'Ações preferenciais sem voto ou com voto restrito não podem ultrapassar 50% do total das ações emitidas (art. 15, § 2º).',
        'Preferencialistas sem voto adquirem esse direito se a companhia deixar de pagar dividendos fixos ou mínimos pelo prazo previsto no estatuto, não superior a 3 exercícios consecutivos (art. 111, § 1º).',
        'Estatuto omisso: dividendo obrigatório de metade do lucro líquido ajustado; se a assembleia alterar o estatuto para introduzir a regra, não pode ser inferior a 25% (art. 202, I e § 2º).',
        'AGO nos 4 primeiros meses seguintes ao término do exercício (art. 132). Convocação com antecedência mínima de 8 dias (fechada) e de 21 dias (aberta, redação da Lei 14.195/2021) em 1ª convocação (art. 124, § 1º).',
        'Instalação da assembleia: 1/4 do capital votante em 1ª convocação; reforma do estatuto exige 2/3 em 1ª convocação (arts. 125 e 135).',
        'Conselho de administração é obrigatório nas companhias abertas, nas de capital autorizado e nas sociedades de economia mista (arts. 138, § 2º, e 239); a diretoria pode ter 1 ou mais membros (art. 143, redação da LC 182/2021).',
        'Acordo de acionistas arquivado na sede deve ser observado pela companhia (art. 118).'
      ]
    },
    {
      titulo: 'Estabelecimento, nome e desconsideração',
      itens: [
        'Trespasse produz efeitos perante terceiros após averbação na Junta e publicação (art. 1.144, CC); sem bens suficientes para solver o passivo, depende do pagamento ou do consentimento dos credores em 30 dias da notificação (art. 1.145).',
        'O adquirente responde pelos débitos anteriores regularmente contabilizados; o alienante fica solidário por 1 ano (vencidos: da publicação; vincendos: do vencimento) (art. 1.146, CC).',
        'Sem autorização expressa, o alienante não pode fazer concorrência ao adquirente por 5 anos (art. 1.147, CC); terceiros podem rescindir contratos em 90 dias com justa causa (art. 1.148).',
        'Nome empresarial: firma ou denominação (art. 1.155, CC); proteção nos limites do Estado do registro (art. 1.166); pode-se usar o número do CNPJ como nome (art. 35-A, Lei 8.934/1994).',
        'Desconsideração (art. 50, CC, Lei 13.874/2019): exige abuso por desvio de finalidade (uso doloso para lesar credores) ou confusão patrimonial; atinge sócios ou administradores beneficiados direta ou indiretamente.',
        'Grupo econômico, por si só, não autoriza a desconsideração (art. 50, § 4º), nem a mera expansão ou alteração da finalidade original da atividade (art. 50, § 5º). A desconsideração inversa é admitida (art. 50, § 3º).',
        'No CDC vale a teoria menor (art. 28, § 5º): basta o obstáculo ao ressarcimento do consumidor.'
      ]
    },
    {
      titulo: 'Títulos de crédito',
      itens: [
        'O Código Civil aplica-se apenas supletivamente: prevalecem as leis especiais (art. 903, CC). Ex.: o CC veda o aval parcial (art. 897, parágrafo único), mas a Lei Uniforme o admite para letra de câmbio e nota promissória (art. 30, LUG).',
        'No CC, salvo cláusula expressa, o endossante não responde pelo cumprimento da prestação (art. 914); na LUG, o endossante garante o pagamento (art. 15). Endosso parcial é nulo (art. 12, LUG; art. 912, parágrafo único, CC).',
        'Endosso posterior ao protesto ou ao prazo para protesto (endosso póstumo) produz efeitos de cessão de crédito (art. 20, LUG).',
        'Nota promissória/letra: prescrição de 3 anos contra emitente/aceitante e avalistas; 1 ano contra endossantes; 6 meses nas ações de regresso entre endossantes (art. 70, LUG).',
        'Cheque: apresentação em 30 dias (mesma praça) ou 60 dias (praça diversa) (art. 33, Lei 7.357/1985); execução prescreve em 6 meses após o prazo de apresentação (art. 59); ação de enriquecimento em 2 anos (art. 61); monitória em 5 anos (Súmula 503 STJ), sem necessidade de mencionar a origem (Súmula 531 STJ).',
        'Cheque pós-datado: a apresentação antecipada caracteriza dano moral (Súmula 370 STJ), embora o cheque seja pagável à vista (art. 32, Lei 7.357/1985).',
        'Duplicata: aceite obrigatório, recusável só nas hipóteses do art. 8º (avaria, vícios, divergências); protesto em 30 dias do vencimento para preservar o regresso (art. 13, § 4º); prescrição de 3 anos contra o sacado (art. 18).',
        'Duplicata sem aceite é título executivo se protestada, acompanhada do comprovante de entrega da mercadoria e sem recusa legítima (art. 15, II, Lei 5.474/1968; Súmula 248 STJ). A duplicata escritural é emitida por lançamento em sistema eletrônico (Lei 13.775/2018).',
        'Endossatário por endosso-mandato só responde por protesto indevido se extrapolar os poderes (Súmula 476 STJ); o endossatário translativo responde por protesto indevido de duplicata sem causa (Súmula 475 STJ).'
      ]
    },
    {
      titulo: 'Propriedade industrial (Lei 9.279/1996)',
      itens: [
        'Patente de invenção vigora por 20 anos e modelo de utilidade por 15 anos, contados do depósito (art. 40). O prazo mínimo contado da concessão (parágrafo único) foi declarado inconstitucional na ADI 5529 e revogado pela Lei 14.195/2021.',
        'Requisitos da patenteabilidade: novidade, atividade inventiva e aplicação industrial (art. 8º); período de graça de 12 meses (art. 12).',
        'Não são invenções: descobertas, teorias científicas, métodos matemáticos, programas de computador em si, técnicas cirúrgicas etc. (art. 10); não são patenteáveis os seres vivos, salvo microrganismos transgênicos (art. 18).',
        'Desenho industrial: 10 anos do depósito, prorrogáveis por 3 períodos sucessivos de 5 anos (art. 108).',
        'Marca: 10 anos da concessão, prorrogáveis por períodos iguais e sucessivos; pedido no último ano de vigência ou nos 6 meses seguintes, com retribuição adicional (art. 133).',
        'Caducidade da marca: a requerimento, se o uso não tiver sido iniciado ou tiver sido interrompido por 5 anos (art. 143).',
        'Marca de alto renome: proteção em todos os ramos de atividade (art. 125); marca notoriamente conhecida: proteção no seu ramo, ainda que não registrada no Brasil (art. 126).',
        'Ação de nulidade de registro de marca prescreve em 5 anos da concessão (art. 174); na de patente, pode ser proposta a qualquer tempo da vigência (art. 56); o INPI intervém e a competência é da Justiça Federal (arts. 57 e 175).'
      ]
    },
    {
      titulo: 'Falência (Lei 11.101/2005 com Lei 14.112/2020)',
      itens: [
        'Impontualidade: obrigação líquida em título executivo protestado acima de 40 salários mínimos; credores podem reunir-se em litisconsórcio (art. 94, I e § 1º).',
        'Citado, o devedor contesta em 10 dias e pode fazer depósito elisivo (art. 98). Decisão que decreta a falência: agravo; sentença de improcedência: apelação (art. 100).',
        'Termo legal: não pode retroagir mais de 90 dias do pedido de falência, do pedido de recuperação ou do 1º protesto por falta de pagamento (art. 99, II).',
        'Ordem (art. 83): I trabalhistas até 150 salários mínimos por credor e acidentes de trabalho; II garantia real até o valor do bem; III tributários (exceto multas); VI quirografários (inclui saldos trabalhistas e de garantia real); VII multas; VIII subordinados; IX juros posteriores à decretação. Os incisos IV e V (privilégios) foram revogados.',
        'Créditos cedidos mantêm a natureza e a classificação originais (art. 83, § 5º, Lei 14.112/2020).',
        'Extraconcursais (art. 84) são pagos antes dos concursais; salários vencidos nos 3 meses anteriores, até 5 salários mínimos, são pagos tão logo haja caixa (art. 151).',
        'Atos ineficazes do art. 129 (ex.: pagamento de dívida não vencida no termo legal; atos gratuitos até 2 anos antes) independem de fraude e podem ser declarados de ofício; a revocatória (art. 130) exige conluio e prejuízo e prescreve/decai em 3 anos (art. 132).',
        'Extinção das obrigações do falido: pagamento de mais de 25% dos quirografários após realizado o ativo ou decurso de 3 anos da decretação, entre outras (art. 158).',
        'Habilitação de créditos em 15 dias da publicação do edital (art. 7º, § 1º); impugnação à relação de credores em 10 dias (art. 8º).'
      ]
    },
    {
      titulo: 'Recuperação judicial e extrajudicial',
      itens: [
        'Requisitos (art. 48): exercício regular há mais de 2 anos; não ser falido; não ter obtido recuperação judicial (inclusive plano especial) há menos de 5 anos; não ter condenação por crime falimentar.',
        'Stay period: 180 dias contados do deferimento do processamento, prorrogável por igual período, uma única vez, em caráter excepcional, se o devedor não concorreu para a superação do prazo (art. 6º, § 4º). Execuções fiscais não se suspendem (art. 6º, § 7º-B).',
        'Plano apresentado em 60 dias da publicação da decisão que deferir o processamento, sob pena de convolação em falência (art. 53); objeções em 30 dias (art. 55); assembleia em até 150 dias do deferimento (art. 56, § 1º).',
        'Classes (art. 41): I trabalhistas; II garantia real; III quirografários, privilégio especial/geral e subordinados; IV ME e EPP. Nas classes I e IV vota-se por cabeça (maioria simples dos presentes); nas II e III, por valor e por cabeça (art. 45).',
        'Créditos trabalhistas: pagamento em até 1 ano (art. 54), com possibilidade de extensão até 2 anos nas condições do § 2º; salariais dos 3 meses anteriores, até 5 salários mínimos, em até 30 dias (art. 54, § 1º).',
        'Cram down (art. 58, § 1º): mais da metade do valor de todos os créditos presentes; aprovação pelas classes exigidas em lei; mais de 1/3 de votos favoráveis na classe que rejeitou; sem tratamento diferenciado aos credores dessa classe (art. 58, § 2º).',
        'Não se sujeitam à recuperação: créditos fiscais, do proprietário fiduciário, do arrendador mercantil, do vendedor com reserva de domínio e de ACC (art. 49, §§ 3º e 4º).',
        'Plano especial ME/EPP: até 36 parcelas mensais com juros pela Selic, 1ª parcela em até 180 dias (art. 71).',
        'Recuperação extrajudicial: homologação com adesão de mais da metade dos créditos de cada espécie abrangida; o pedido pode ser feito com 1/3, para atingir o quórum em 90 dias (art. 163, caput e § 7º). Não abrange créditos trabalhistas sem negociação coletiva nem tributários (art. 161, § 1º).'
      ]
    },
    {
      titulo: 'Contratos empresariais e LC 123/2006',
      itens: [
        'Contratos empresariais presumem-se paritários e simétricos até prova em contrário (art. 421-A, CC, Lei 13.874/2019).',
        'Franquia (Lei 13.966/2019): não gera relação de consumo nem vínculo empregatício (art. 1º); a Circular de Oferta de Franquia deve ser entregue com antecedência mínima de 10 dias da assinatura ou de qualquer pagamento, sob pena de anulabilidade ou nulidade e devolução das quantias pagas (art. 2º, §§ 1º e 2º).',
        'Representação comercial (Lei 4.886/1965): indenização mínima de 1/12 do total das retribuições na rescisão sem justa causa (art. 27, j) e aviso prévio de 30 dias ou 1/3 das comissões dos últimos 3 meses (art. 34).',
        'Agência e distribuição por prazo indeterminado: denúncia com aviso prévio de 90 dias (art. 720, CC).',
        'Alienação fiduciária (DL 911/1969): a mora deve ser comprovada para a busca e apreensão (Súmula 72 STJ).',
        'LC 123/2006 (art. 3º): ME tem receita bruta anual até R$ 360 mil; EPP, acima disso até R$ 4,8 milhões. Ambas têm tratamento diferenciado, inclusive classe própria na recuperação judicial e plano especial.'
      ]
    }
  ],
  legislacao: [
    { nome: 'Código Civil — Lei 10.406/2002 (Livro II — Direito de Empresa)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' },
    { nome: 'Lei 6.404/1976 — Sociedades por Ações', url: 'https://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm' },
    { nome: 'Lei 11.101/2005 — Recuperação Judicial, Extrajudicial e Falência', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11101.htm' },
    { nome: 'Lei 14.112/2020 — Reforma da Lei de Falências', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14112.htm' },
    { nome: 'Decreto 57.663/1966 — Lei Uniforme (letra de câmbio e nota promissória)', url: 'https://www.planalto.gov.br/ccivil_03/decreto/antigos/d57663.htm' },
    { nome: 'Lei 7.357/1985 — Lei do Cheque', url: 'https://www.planalto.gov.br/ccivil_03/leis/l7357.htm' },
    { nome: 'Lei 5.474/1968 — Lei das Duplicatas', url: 'https://www.planalto.gov.br/ccivil_03/leis/l5474.htm' },
    { nome: 'Lei 13.775/2018 — Duplicata escritural', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13775.htm' },
    { nome: 'Lei 9.279/1996 — Propriedade Industrial', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9279.htm' },
    { nome: 'Lei 14.195/2021 — Ambiente de negócios (EIRELI em SLU, S.A., nome empresarial)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14195.htm' },
    { nome: 'Lei 14.451/2022 — Quóruns da sociedade limitada', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14451.htm' },
    { nome: 'Lei 13.966/2019 — Franquia empresarial', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13966.htm' },
    { nome: 'Lei 8.934/1994 — Registro Público de Empresas Mercantis', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8934.htm' },
    { nome: 'Lei Complementar 123/2006 — Estatuto da ME e EPP', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm' },
    { nome: 'Súmulas do STJ', url: 'https://scon.stj.jus.br/SCON/sumstj/' }
  ],
  dicas: [
    'Falência e recuperação judicial respondem por boa parte das questões: memorize prazos (stay de 180 dias, plano em 60 dias, objeção em 30, contestação em 10, habilitação em 15) e a ordem do art. 83 já sem os privilégios especial e geral.',
    'Desconfie de alternativas com quóruns antigos da limitada: após a Lei 14.451/2022 não existe mais o quórum de 3/4 para alterar o contrato social; a regra é mais da metade do capital.',
    'Em títulos de crédito, sempre pergunte qual lei rege o título: a Lei Uniforme (letra e nota promissória), a Lei do Cheque e a Lei das Duplicatas prevalecem sobre o Código Civil (art. 903), o que muda as respostas sobre aval parcial e responsabilidade do endossante.',
    'Na teoria da empresa, a FGV adora o profissional intelectual (médico, advogado, artista) e o registro: lembre que o registro é obrigatório, mas declaratório, e que o produtor rural tem registro facultativo.',
    'Em propriedade industrial, os prazos contam do depósito (patentes e desenho) ou da concessão (marca); não caia na garantia de prazo mínimo após a concessão, que não existe mais.'
  ],
  questoes: [
    {
      id: 'empresarial-001',
      topico: 'Teoria geral da empresa e empresário',
      dificuldade: 1,
      enunciado: 'Paulo, médico cardiologista, atende pacientes em consultório próprio, com o auxílio de uma secretária e de uma enfermeira, cobrando honorários por consulta. Sua atividade é pessoal e o atendimento depende de sua atuação técnica direta. Paulo consulta você sobre a necessidade de inscrição na Junta Comercial. Assinale a afirmativa correta.',
      alternativas: [
        'Paulo é empresário, pois exerce atividade econômica habitual com auxílio de colaboradores, devendo inscrever-se na Junta Comercial antes do início das atividades.',
        'Paulo é empresário, pois toda atividade exercida com intuito de lucro caracteriza empresa, independentemente de sua natureza.',
        'Paulo não é considerado empresário, por exercer profissão intelectual de natureza científica, ainda que com o concurso de auxiliares, salvo se o exercício da profissão constituir elemento de empresa.',
        'Paulo não é considerado empresário apenas porque não está inscrito na Junta Comercial, sendo o registro requisito constitutivo da condição de empresário.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 966, parágrafo único, do CC exclui do conceito de empresário quem exerce profissão intelectual de natureza científica, literária ou artística, ainda que com auxiliares ou colaboradores, salvo se a profissão constituir elemento de empresa. A A erra porque o simples auxílio de colaboradores não transforma a atividade intelectual em empresa. A B ignora a exceção legal: o intuito de lucro não basta. A D erra porque o registro (art. 967) é obrigatório, mas tem natureza declaratória; a condição de empresário decorre do exercício da atividade, não da inscrição.',
      fundamento: 'Art. 966, caput e parágrafo único, e art. 967 do Código Civil'
    },
    {
      id: 'empresarial-002',
      topico: 'Teoria geral da empresa e empresário',
      dificuldade: 2,
      enunciado: 'Joana constituiu, em 2019, uma empresa individual de responsabilidade limitada (EIRELI), que nunca teve seu ato constitutivo alterado. Em 2026, pretendendo iniciar outro negócio, ela pergunta sobre a situação jurídica de sua EIRELI e sobre a possibilidade de constituir uma nova pessoa jurídica sem sócios. Assinale a afirmativa correta.',
      alternativas: [
        'A EIRELI foi transformada em sociedade limitada unipessoal por força de lei, independentemente de alteração do ato constitutivo, e Joana pode constituir nova sociedade limitada unipessoal, pois a lei não limita a uma única sociedade por pessoa natural.',
        'A EIRELI continua existindo como espécie autônoma de pessoa jurídica, mas Joana não pode constituir outra, pois a pessoa natural só pode figurar em uma única empresa individual de responsabilidade limitada.',
        'A EIRELI deve ser transformada pela titular em sociedade limitada unipessoal, sob pena de dissolução, e a nova sociedade exige capital mínimo de 100 salários mínimos integralizado.',
        'A sociedade limitada unipessoal somente pode ser constituída por pessoa jurídica, devendo Joana, pessoa natural, atuar como empresária individual no novo negócio.'
      ],
      correta: 0,
      comentario: 'Correta a A: o art. 41 da Lei 14.195/2021 transformou as EIRELIs existentes em sociedades limitadas unipessoais, independentemente de qualquer alteração do ato constitutivo (o art. 980-A do CC foi depois revogado pela Lei 14.382/2022). O art. 1.052, § 1º, do CC permite a constituição da limitada por uma ou mais pessoas, sem a restrição de uma por titular que existia para a EIRELI. A B erra porque a EIRELI deixou de existir como espécie autônoma. A C erra ao exigir ato da titular e capital mínimo de 100 salários mínimos, requisito próprio da antiga EIRELI e inexistente na limitada. A D erra porque a pessoa natural pode constituir sociedade limitada unipessoal.',
      fundamento: 'Art. 41 da Lei 14.195/2021; art. 1.052, §§ 1º e 2º, do Código Civil; Lei 14.382/2022'
    },
    {
      id: 'empresarial-003',
      topico: 'Títulos de crédito',
      dificuldade: 2,
      enunciado: 'Rafael emitiu nota promissória no valor de R$ 50.000,00 em favor de Tânia. Sérgio lançou seu aval no título, consignando expressamente que o fazia apenas até o limite de R$ 20.000,00. Vencida e não paga a nota, Tânia pretende cobrar de Sérgio o valor integral. Considerando a legislação aplicável, assinale a afirmativa correta.',
      alternativas: [
        'O aval parcial é nulo, pois o Código Civil o veda expressamente, de modo que Sérgio não responde por nenhum valor.',
        'A limitação deve ser considerada não escrita, respondendo Sérgio pela totalidade da dívida, solidariamente com o emitente.',
        'Sérgio responde pelo valor total, mas tem benefício de ordem, devendo Tânia executar primeiro o emitente.',
        'O aval parcial é admitido na nota promissória, regida pela Lei Uniforme, e Sérgio responde apenas até R$ 20.000,00, da mesma maneira que o avalizado.'
      ],
      correta: 3,
      comentario: 'Correta a D: a nota promissória é regida pela Lei Uniforme (Decreto 57.663/1966), cujo art. 30, aplicável à nota por força do art. 77, admite que o pagamento seja garantido por aval no todo ou em parte; o avalista responde da mesma maneira que o avalizado (art. 32). A vedação do aval parcial do art. 897, parágrafo único, do CC não se aplica, pois o art. 903 do CC determina a prevalência da lei especial. Por isso, a A está errada. A B erra ao desconsiderar a limitação válida. A C erra porque o aval é obrigação autônoma e solidária, sem benefício de ordem.',
      fundamento: 'Arts. 30, 32 e 77 da Lei Uniforme (Decreto 57.663/1966); arts. 897, parágrafo único, e 903 do Código Civil'
    },
    {
      id: 'empresarial-004',
      topico: 'Títulos de crédito',
      dificuldade: 2,
      enunciado: 'Bianca recebeu cheque emitido por Caio na cidade de Curitiba, pagável em agência bancária da mesma cidade. Por descuido, Bianca deixou de cobrá-lo por longo período e agora consulta você a respeito dos prazos aplicáveis às medidas judiciais de cobrança. Assinale a afirmativa correta.',
      alternativas: [
        'A execução do cheque prescreve em 6 meses contados da data da emissão; após esse prazo, resta apenas a ação de cobrança pelo procedimento comum, no prazo de 10 anos.',
        'O prazo de apresentação é de 30 dias, por se tratar de cheque da mesma praça, e a execução prescreve em 6 meses contados do término desse prazo; prescrita a execução, ainda é possível ajuizar ação monitória no prazo de 5 anos contados do dia seguinte à data de emissão.',
        'O prazo de apresentação é de 60 dias, e a execução prescreve em 3 anos contados do vencimento, como ocorre com a nota promissória.',
        'Prescrita a execução, a ação monitória fundada no cheque exige que a portadora demonstre a origem do débito expresso no título.'
      ],
      correta: 1,
      comentario: 'Correta a B: o cheque emitido no lugar onde deve ser pago tem prazo de apresentação de 30 dias (art. 33 da Lei 7.357/1985), e a execução prescreve em 6 meses contados da expiração desse prazo (art. 59). Prescrita a execução, cabem a ação de enriquecimento em 2 anos (art. 61) e a monitória em 5 anos contados do dia seguinte à data de emissão (Súmula 503 STJ). A A erra quanto ao termo inicial e quanto à única via restante. A C confunde os prazos: 60 dias é o prazo de apresentação para praça diversa, e o prazo de 3 anos é da Lei Uniforme. A D contraria a Súmula 531 do STJ, que dispensa a menção ao negócio jurídico subjacente.',
      fundamento: 'Arts. 33, 59 e 61 da Lei 7.357/1985; Súmulas 503 e 531 do STJ'
    },
    {
      id: 'empresarial-005',
      topico: 'Títulos de crédito',
      dificuldade: 2,
      enunciado: 'A sociedade Delta Distribuidora Ltda. vendeu mercadorias a Eco Mercado Ltda. e sacou duplicata, que foi remetida para aceite, mas não foi devolvida nem aceita. As mercadorias foram entregues, e Delta possui o canhoto assinado pelo comprador. Eco Mercado não apresentou qualquer recusa ao aceite. Delta pretende executar o título. Assinale a afirmativa correta.',
      alternativas: [
        'A duplicata não aceita jamais constitui título executivo, restando a Delta apenas a ação monitória.',
        'É possível a execução da duplicata não aceita, desde que protestada, acompanhada de documento comprobatório da entrega e do recebimento da mercadoria e sem que o sacado tenha recusado o aceite nas condições e nos prazos legais.',
        'É possível a execução da duplicata não aceita independentemente de protesto, bastando a apresentação da nota fiscal da venda.',
        'A duplicata não aceita é título executivo se protestada, ainda que o sacado tenha comprovadamente recusado o aceite por avaria das mercadorias.'
      ],
      correta: 1,
      comentario: 'Correta a B: o art. 15, II, da Lei 5.474/1968 admite a execução da duplicata não aceita que, cumulativamente, tenha sido protestada, esteja acompanhada de documento hábil comprobatório da entrega e recebimento da mercadoria e cujo sacado não tenha recusado o aceite nas condições dos arts. 7º e 8º; no mesmo sentido, a Súmula 248 do STJ. A A ignora essa hipótese legal. A C dispensa indevidamente o protesto, requisito expresso. A D erra porque a recusa motivada por avaria (art. 8º, I) afasta a executividade.',
      fundamento: 'Arts. 8º e 15, II, da Lei 5.474/1968; Súmula 248 do STJ'
    },
    {
      id: 'empresarial-006',
      topico: 'Falência',
      dificuldade: 3,
      enunciado: 'Na falência de Fênix Indústria Ltda., após o pagamento dos créditos extraconcursais e dos créditos trabalhistas até o limite legal, restam os seguintes créditos: (I) crédito do Banco Alfa com garantia hipotecária, dentro do valor do bem gravado; (II) crédito tributário principal da União; (III) saldo do crédito trabalhista de um ex-diretor que excedeu 150 salários mínimos; (IV) multa tributária. Assinale a ordem correta de pagamento.',
      alternativas: [
        'II, I, III e IV.',
        'I, III, II e IV, pois o saldo trabalhista conserva a natureza trabalhista e a preferência integral.',
        'I, II, IV e III.',
        'I, II, III e IV, pois o saldo trabalhista excedente é classificado como quirografário e as multas são pagas após os quirografários.'
      ],
      correta: 3,
      comentario: 'Correta a D: pelo art. 83 da Lei 11.101/2005, após os trabalhistas até 150 salários mínimos (inciso I), pagam-se os créditos com garantia real até o limite do bem (II), depois os tributários, excetuadas as multas (III), depois os quirografários, entre os quais estão os saldos trabalhistas que excederem o limite do inciso I (VI, c), e só então as multas, inclusive tributárias (VII). A A inverte garantia real e tributário. A B atribui ao excedente uma preferência que a lei não lhe dá. A C coloca a multa antes dos quirografários, contrariando o inciso VII.',
      fundamento: 'Art. 83, I, II, III, VI, c, e VII, da Lei 11.101/2005 (redação da Lei 14.112/2020)'
    },
    {
      id: 'empresarial-007',
      topico: 'Falência',
      dificuldade: 2,
      enunciado: 'Três fornecedores da sociedade Gama Comércio Ltda. são credores de duplicatas aceitas, vencidas e protestadas, cada uma em valor equivalente a 15 salários mínimos. Nenhum deles, isoladamente, atinge o valor mínimo exigido pela lei para o pedido de falência fundado em impontualidade. Sobre a situação, assinale a afirmativa correta.',
      alternativas: [
        'Os credores podem reunir-se em litisconsórcio para perfazer o limite mínimo de 40 salários mínimos, e a devedora, citada, poderá contestar em 10 dias e, no mesmo prazo, depositar o valor total do crédito, com correção monetária, juros e honorários, afastando a decretação da falência.',
        'O pedido é inviável, pois cada credor deve deter, individualmente, crédito superior a 40 salários mínimos.',
        'Os credores podem reunir-se em litisconsórcio, mas a devedora terá 15 dias para contestar, e o depósito elisivo somente pode ser realizado após a sentença.',
        'O pedido fundado em impontualidade dispensa o protesto dos títulos, bastando a comprovação do vencimento.'
      ],
      correta: 0,
      comentario: 'Correta a A: o art. 94, I, exige obrigação líquida materializada em título executivo protestado cuja soma ultrapasse 40 salários mínimos, e o § 1º permite que credores se reúnam em litisconsórcio para perfazer esse limite. O devedor tem 10 dias para contestar (art. 98) e, no mesmo prazo, pode efetuar o depósito elisivo do valor total com correção, juros e honorários (art. 98, parágrafo único). A B contraria o § 1º do art. 94. A C erra o prazo de contestação e o momento do depósito. A D erra porque o protesto é exigido (art. 94, I e § 3º).',
      fundamento: 'Art. 94, I e §§ 1º e 3º, e art. 98, caput e parágrafo único, da Lei 11.101/2005'
    },
    {
      id: 'empresarial-008',
      topico: 'Falência',
      dificuldade: 2,
      enunciado: 'Decretada a falência de Hélix Têxtil Ltda., o administrador judicial constatou que, dentro do termo legal, a falida pagou integralmente a um fornecedor uma dívida que só venceria seis meses depois. Não há prova de que o fornecedor conhecesse a crise da devedora nem de intenção de fraudar credores. Assinale a afirmativa correta.',
      alternativas: [
        'O pagamento é válido e eficaz, pois o devedor pode antecipar o pagamento de dívidas a qualquer tempo, inexistindo prova de fraude.',
        'O pagamento somente pode ser desconstituído por ação revocatória, que exige prova do conluio fraudulento entre devedor e terceiro e do efetivo prejuízo à massa.',
        'O pagamento é ineficaz em relação à massa falida, tenha ou não o credor conhecimento do estado de crise e independentemente de intenção de fraudar, podendo a ineficácia ser declarada de ofício pelo juiz.',
        'O pagamento é nulo de pleno direito, devendo o administrador judicial propor ação anulatória no prazo decadencial de 2 anos.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 129, I, da Lei 11.101/2005 declara ineficaz em relação à massa o pagamento de dívidas não vencidas realizado pelo devedor dentro do termo legal, tenha ou não o contratante conhecimento do estado de crise, seja ou não sua intenção fraudar credores; o parágrafo único permite a declaração de ofício pelo juiz, por defesa ou por ação própria. A A ignora a ineficácia objetiva. A B confunde com a revocatória do art. 130, que se destina aos atos praticados com intenção de prejudicar credores. A D erra porque o vício é de ineficácia, não de nulidade, e não há o prazo indicado.',
      fundamento: 'Art. 129, I e parágrafo único, e art. 130 da Lei 11.101/2005'
    },
    {
      id: 'empresarial-009',
      topico: 'Recuperação judicial e extrajudicial',
      dificuldade: 1,
      enunciado: 'Ômicron Serviços Ltda. foi registrada na Junta Comercial há 18 meses e enfrenta grave crise financeira. Seus sócios nunca foram condenados por crime falimentar e a sociedade jamais teve falência decretada. Os administradores pretendem ajuizar pedido de recuperação judicial. Assinale a afirmativa correta.',
      alternativas: [
        'O pedido pode ser formulado, pois a lei não exige tempo mínimo de atividade, mas apenas a inexistência de falência anterior.',
        'O pedido pode ser formulado, desde que o plano de recuperação seja apresentado com a petição inicial.',
        'O pedido não pode ser formulado, pois sociedades com menos de 3 anos de registro só podem valer-se da recuperação extrajudicial.',
        'O pedido não pode ser formulado, pois a devedora não comprova o exercício regular de suas atividades há mais de 2 anos.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 48, caput, da Lei 11.101/2005 exige que o devedor, no momento do pedido, exerça regularmente suas atividades há mais de 2 anos, requisito que a sociedade, registrada há 18 meses, não atende. A A ignora esse requisito. A B erra porque o plano é apresentado em até 60 dias da publicação da decisão que deferir o processamento (art. 53), e sua apresentação antecipada não supre o requisito temporal. A C cria prazo inexistente; a recuperação extrajudicial também exige os requisitos do art. 48 (art. 161).',
      fundamento: 'Arts. 48, caput, 53 e 161 da Lei 11.101/2005'
    },
    {
      id: 'empresarial-010',
      topico: 'Recuperação judicial e extrajudicial',
      dificuldade: 2,
      enunciado: 'O juiz deferiu o processamento da recuperação judicial de Sigma Alimentos Ltda. Os credores querem saber por quanto tempo ficarão suspensas as execuções ajuizadas contra a devedora relativas a créditos sujeitos à recuperação. Assinale a afirmativa correta.',
      alternativas: [
        'A suspensão perdura por 180 dias improrrogáveis, retomando-se automaticamente todas as execuções após esse prazo.',
        'A suspensão é de 180 dias, contados do deferimento do processamento, prorrogável por igual período, uma única vez, em caráter excepcional, desde que o devedor não haja concorrido com a superação do prazo.',
        'A suspensão alcança inclusive as execuções fiscais, que ficam paralisadas até o encerramento da recuperação judicial.',
        'A suspensão é de 90 dias, prorrogável sucessivamente enquanto durarem as negociações do plano.'
      ],
      correta: 1,
      comentario: 'Correta a B: o art. 6º, § 4º, da Lei 11.101/2005, com a redação da Lei 14.112/2020, fixa o stay period em 180 dias contados do deferimento do processamento, prorrogável por igual período, uma única vez, em caráter excepcional, desde que o devedor não tenha concorrido com a superação do lapso temporal. A A ignora a prorrogação. A C contraria o art. 6º, § 7º-B, que exclui as execuções fiscais da suspensão (admitida apenas a substituição de constrições sobre bens de capital essenciais pelo juízo da recuperação). A D indica prazo e prorrogação inexistentes.',
      fundamento: 'Art. 6º, §§ 4º e 7º-B, e art. 52, III, da Lei 11.101/2005'
    },
    {
      id: 'empresarial-011',
      topico: 'Recuperação judicial e extrajudicial',
      dificuldade: 3,
      enunciado: 'Na assembleia geral de credores da recuperação judicial de Pi Construções Ltda., com as quatro classes votantes, o plano foi aprovado pelas classes dos trabalhistas, dos credores com garantia real e das microempresas e empresas de pequeno porte. Na classe dos quirografários, o plano foi rejeitado, mas obteve votos favoráveis de credores que representavam 40% do valor dos créditos presentes e 40% dos credores presentes. Considerando a assembleia como um todo, votaram a favor credores titulares de 70% do valor de todos os créditos presentes. Assinale a afirmativa correta.',
      alternativas: [
        'O juiz deve decretar a falência, pois a rejeição do plano por qualquer das classes impõe a convolação.',
        'O juiz deve convocar nova assembleia, pois a rejeição por uma classe impede a concessão da recuperação em qualquer hipótese.',
        'O juiz poderá conceder a recuperação judicial com base no plano, desde que este não implique tratamento diferenciado entre os credores da classe que o rejeitou.',
        'O juiz poderá conceder a recuperação, mas os quirografários ficarão excluídos dos efeitos do plano, mantendo seus créditos nas condições originais.'
      ],
      correta: 2,
      comentario: 'Correta a C: trata-se do cram down do art. 58, § 1º, da Lei 11.101/2005. Estão presentes os requisitos cumulativos: voto favorável de credores que representam mais da metade do valor de todos os créditos presentes (70%); aprovação pela maioria das classes (3 das 4 classes votantes); e, na classe que rejeitou, voto favorável de mais de 1/3 dos credores, computados por valor e por cabeça (art. 45, §§ 1º e 2º). O § 2º do art. 58 exige ainda que o plano não implique tratamento diferenciado entre os credores da classe que o rejeitou. A A e a B ignoram o cram down. A D erra porque a concessão vincula todos os credores sujeitos (art. 59).',
      fundamento: 'Art. 45, art. 58, §§ 1º e 2º, e art. 59 da Lei 11.101/2005'
    },
    {
      id: 'empresarial-012',
      topico: 'Sociedade limitada',
      dificuldade: 2,
      enunciado: 'A sociedade Lambda Comércio Ltda. tem três sócios: Carlos, com 55% do capital, Diana, com 25%, e Eduardo, com 20%. O capital está integralizado e o contrato social é omisso quanto a quóruns de deliberação. Carlos pretende alterar o contrato social para transferir a sede da sociedade para outro município, mas Diana e Eduardo discordam. Assinale a afirmativa correta.',
      alternativas: [
        'A alteração pode ser aprovada apenas pelo voto de Carlos, pois a modificação do contrato social exige votos correspondentes a mais da metade do capital social.',
        'A alteração exige votos correspondentes a, no mínimo, 3/4 do capital social, de modo que Carlos necessita do apoio de ambos os demais sócios.',
        'A alteração exige a unanimidade dos sócios, por se tratar de cláusula essencial do contrato social relativa à sede.',
        'A alteração exige votos correspondentes a 2/3 do capital social, de modo que Carlos precisa do apoio de ao menos um dos demais sócios.'
      ],
      correta: 0,
      comentario: 'Correta a A: com a Lei 14.451/2022, foi revogado o inciso I do art. 1.076 do CC (quórum de 3/4) e a modificação do contrato social (art. 1.071, V) passou a depender de votos correspondentes a mais da metade do capital social (art. 1.076, II). Carlos, com 55%, atinge o quórum sozinho. A B reproduz a regra revogada. A C aplica a unanimidade do art. 999 do CC, própria da sociedade simples, afastada pela regra específica da limitada. A D indica quórum que não existe para essa matéria.',
      fundamento: 'Arts. 1.071, V, e 1.076, II, do Código Civil (redação da Lei 14.451/2022)'
    },
    {
      id: 'empresarial-013',
      topico: 'Sociedade limitada',
      dificuldade: 2,
      enunciado: 'Ana, Bruno e Célia são sócios de uma sociedade limitada, com 60%, 20% e 20% do capital, respectivamente, que se encontra totalmente integralizado. O contrato social permite administradores não sócios. Ana pretende designar Daniel, profissional de mercado que não é sócio, como administrador; Bruno e Célia se opõem. Assinale a afirmativa correta.',
      alternativas: [
        'A designação pode ser aprovada apenas com o voto de Ana, pois, integralizado o capital, exige-se a aprovação de titulares de quotas correspondentes a mais da metade do capital social.',
        'A designação exige unanimidade dos sócios enquanto o capital não estiver integralizado e 2/3 do capital após a integralização, de modo que Ana precisa do apoio de outro sócio.',
        'A designação exige a aprovação de titulares de 3/4 do capital social.',
        'A designação é vedada, pois na sociedade limitada a administração é privativa dos sócios.'
      ],
      correta: 0,
      comentario: 'Correta a A: o art. 1.061 do CC, com a redação da Lei 14.451/2022, admite administrador não sócio, se o contrato permitir, exigindo a aprovação de no mínimo 2/3 dos sócios enquanto o capital não estiver integralizado e de titulares de quotas correspondentes a mais da metade do capital social após a integralização. Ana tem 60% do capital integralizado. A B indica quóruns que não correspondem à lei vigente. A C reproduz quórum inexistente para a matéria. A D contraria o próprio art. 1.061.',
      fundamento: 'Art. 1.061 do Código Civil (redação da Lei 14.451/2022)'
    },
    {
      id: 'empresarial-014',
      topico: 'Sociedades por ações',
      dificuldade: 2,
      enunciado: 'O estatuto social de Teta Participações S.A., companhia fechada, é omisso quanto ao dividendo obrigatório. Na assembleia geral ordinária, o acionista controlador propôs reter integralmente o lucro do exercício, sem qualquer distribuição, sob o argumento de que o estatuto nada dispõe. Um acionista minoritário consulta você. Assinale a afirmativa correta.',
      alternativas: [
        'Na omissão do estatuto, não há dividendo obrigatório, cabendo à assembleia decidir livremente a destinação integral do lucro.',
        'Na omissão do estatuto, o dividendo obrigatório corresponde a 25% do lucro líquido ajustado.',
        'Na omissão do estatuto, os acionistas têm direito de receber, como dividendo obrigatório, metade do lucro líquido do exercício, ajustado nos termos da lei.',
        'Na omissão do estatuto, o dividendo obrigatório é fixado anualmente pelo conselho de administração, sem limite mínimo.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 202, I, da Lei 6.404/1976 estabelece que, se o estatuto for omisso, o dividendo obrigatório é de metade do lucro líquido do exercício, ajustado na forma da lei. A A ignora a regra supletiva. A B confunde com o § 2º do art. 202: o piso de 25% aplica-se quando a assembleia altera estatuto omisso para introduzir norma sobre a matéria. A D atribui ao conselho competência inexistente e afasta o mínimo legal.',
      fundamento: 'Art. 202, I e § 2º, da Lei 6.404/1976'
    },
    {
      id: 'empresarial-015',
      topico: 'Propriedade industrial',
      dificuldade: 3,
      enunciado: 'Lúcia depositou no INPI, em 2012, pedido de patente de invenção, que somente foi concedida em 2024, em razão da demora no exame. Lúcia sustenta que, por força da lei, sua patente terá vigência de pelo menos 10 anos contados da concessão. Considerando a legislação vigente, assinale a afirmativa correta sobre o termo final da proteção.',
      alternativas: [
        'A patente vigorará até 2044, pois a patente de invenção vigora por 20 anos contados da concessão.',
        'A patente vigorará até 2034, pois a lei assegura vigência mínima de 10 anos contada da concessão, em caso de demora do INPI.',
        'A patente vigorou até 2027, pois a patente de invenção vigora por 15 anos contados do depósito.',
        'A patente vigorará até 2032, pois a patente de invenção vigora por 20 anos contados da data do depósito, não subsistindo a garantia de prazo mínimo contado da concessão.'
      ],
      correta: 3,
      comentario: 'Correta a D: o art. 40, caput, da Lei 9.279/1996 fixa a vigência da patente de invenção em 20 anos contados do depósito (2012 + 20 = 2032). O parágrafo único, que garantia prazo mínimo de 10 anos após a concessão, foi declarado inconstitucional pelo STF na ADI 5529 (2021), com efeitos que não alcançam patentes concedidas após o julgamento, e foi revogado pela Lei 14.195/2021. Por isso a B está errada. A A conta o prazo da concessão, contrariando o art. 40. A C aplica o prazo de 15 anos, que é o do modelo de utilidade.',
      fundamento: 'Art. 40 da Lei 9.279/1996; ADI 5529 (STF); Lei 14.195/2021'
    },
    {
      id: 'empresarial-016',
      topico: 'Propriedade industrial',
      dificuldade: 2,
      enunciado: 'A sociedade Zeta Cosméticos Ltda. obteve o registro de sua marca no INPI. Por falha interna, deixou de requerer a prorrogação durante o último ano de vigência, e o prazo de 10 anos expirou há dois meses. A marca continua sendo utilizada normalmente. Assinale a afirmativa correta.',
      alternativas: [
        'O registro extinguiu-se automaticamente com o término da vigência, devendo a sociedade depositar novo pedido de registro, sem qualquer prioridade.',
        'A sociedade ainda pode requerer a prorrogação, pois a lei admite o pedido nos 6 meses subsequentes ao término da vigência, mediante o pagamento de retribuição adicional.',
        'A sociedade pode requerer a prorrogação a qualquer tempo, pois o registro de marca é perpétuo enquanto houver uso efetivo.',
        'A prorrogação não é possível, pois o registro de marca vigora por 10 anos, prorrogável uma única vez, apenas durante o último ano de vigência.'
      ],
      correta: 1,
      comentario: 'Correta a B: o registro de marca vigora por 10 anos da concessão, prorrogável por períodos iguais e sucessivos (art. 133 da Lei 9.279/1996). O pedido deve ser formulado no último ano de vigência (§ 1º), mas, se não o for, o titular pode fazê-lo nos 6 meses subsequentes, mediante retribuição adicional (§ 2º). A A ignora esse prazo de graça. A C erra porque a prorrogação depende de pedido e pagamento, não sendo automática nem perpétua. A D erra porque as prorrogações são sucessivas, sem limite de número.',
      fundamento: 'Art. 133, caput e §§ 1º e 2º, da Lei 9.279/1996'
    },
    {
      id: 'empresarial-017',
      topico: 'Sociedades não personificadas e sociedade simples',
      dificuldade: 2,
      enunciado: 'Hélio e Íris celebraram contrato de sociedade em conta de participação para a exploração de um empreendimento imobiliário, figurando Hélio como sócio ostensivo e Íris como sócia participante. Íris apenas aportou recursos e nunca tratou com fornecedores. Uma fornecedora de materiais, credora de Hélio por compras feitas para o empreendimento, ajuizou ação de cobrança também contra Íris. Assinale a afirmativa correta.',
      alternativas: [
        'Íris responde solidária e ilimitadamente com Hélio, pois a sociedade em conta de participação não tem personalidade jurídica.',
        'Íris responde subsidiariamente, após esgotados os bens sociais, na proporção de sua participação no empreendimento.',
        'Íris responde, pois o contrato foi inscrito no registro de títulos e documentos, o que conferiu personalidade jurídica à sociedade.',
        'Somente Hélio, sócio ostensivo, obriga-se perante a fornecedora; Íris obriga-se exclusivamente perante Hélio, salvo se tomasse parte nas relações dele com terceiros, hipótese em que responderia solidariamente.'
      ],
      correta: 3,
      comentario: 'Correta a D: na conta de participação, a atividade é exercida unicamente pelo sócio ostensivo, em seu nome e sob sua responsabilidade exclusiva, e o sócio participante obriga-se apenas perante o ostensivo (art. 991, parágrafo único, do CC); se o participante tomar parte nas relações do ostensivo com terceiros, responde solidariamente (art. 993, parágrafo único). A A aplica a regra da sociedade em comum (art. 990). A B aplica regra da sociedade simples (art. 1.023). A C contraria o art. 993, segundo o qual a inscrição do contrato em qualquer registro não confere personalidade jurídica.',
      fundamento: 'Arts. 991 e 993 do Código Civil'
    },
    {
      id: 'empresarial-018',
      topico: 'Estabelecimento e nome empresarial',
      dificuldade: 2,
      enunciado: 'Marcos, empresário individual, alienou seu estabelecimento a Nádia. O contrato de trespasse foi averbado na Junta Comercial e publicado na imprensa oficial em março de 2026. Em junho de 2026, um credor de Marcos, titular de crédito vencido antes do trespasse e regularmente contabilizado, procura você para saber de quem pode cobrar. Assinale a afirmativa correta.',
      alternativas: [
        'Nádia responde pelo pagamento dos débitos anteriores à transferência, desde que regularmente contabilizados, e Marcos continua solidariamente obrigado pelo prazo de 1 ano, contado, quanto aos créditos vencidos, da publicação.',
        'Somente Marcos responde, pois as dívidas são anteriores ao trespasse e o adquirente não sucede o alienante em nenhuma obrigação.',
        'Nádia responde por todas as dívidas anteriores, contabilizadas ou não, e Marcos fica exonerado desde a averbação.',
        'Marcos e Nádia respondem solidariamente pelo prazo de 5 anos, período em que também vigora a proibição de concorrência.'
      ],
      correta: 0,
      comentario: 'Correta a A: o art. 1.146 do CC estabelece que o adquirente do estabelecimento responde pelos débitos anteriores à transferência, desde que regularmente contabilizados, continuando o devedor primitivo solidariamente obrigado pelo prazo de 1 ano, contado da publicação quanto aos créditos vencidos e do vencimento quanto aos demais. A B e a C contrariam essa regra. A D confunde a solidariedade (1 ano) com o prazo de não concorrência de 5 anos do art. 1.147.',
      fundamento: 'Arts. 1.144, 1.146 e 1.147 do Código Civil'
    },
    {
      id: 'empresarial-019',
      topico: 'Desconsideração da personalidade jurídica',
      dificuldade: 2,
      enunciado: 'Ômega Peças Ltda. não pagou dívida contratual com a fornecedora Kapa Metais Ltda. Na execução, não foram encontrados bens. Kapa requereu a desconsideração da personalidade jurídica, alegando que (i) Ômega está insolvente, (ii) integra grupo econômico com outra sociedade solvente e (iii) ampliou suas atividades para ramo diverso do objeto original. Não há prova de confusão patrimonial nem de uso doloso da pessoa jurídica. Assinale a afirmativa correta.',
      alternativas: [
        'A desconsideração é cabível, pois a insolvência da pessoa jurídica autoriza o credor a atingir o patrimônio de todos os sócios.',
        'A desconsideração não é cabível com base nos fatos narrados, pois exige abuso da personalidade jurídica, caracterizado por desvio de finalidade ou confusão patrimonial, e só alcança bens de administradores ou sócios beneficiados direta ou indiretamente pelo abuso.',
        'A desconsideração é cabível porque a sociedade integra grupo econômico, circunstância que, por si só, autoriza a extensão da responsabilidade às demais sociedades do grupo.',
        'A desconsideração é cabível, pois a ampliação da atividade para ramo diverso do objeto social original caracteriza desvio de finalidade.'
      ],
      correta: 1,
      comentario: 'Correta a B: na relação civil e empresarial aplica-se a teoria maior do art. 50 do CC, que exige abuso da personalidade, caracterizado por desvio de finalidade (utilização dolosa da pessoa jurídica para lesar credores e praticar ilícitos, § 1º) ou confusão patrimonial (§ 2º), atingindo bens de administradores ou sócios beneficiados direta ou indiretamente. A A adota a teoria menor, própria do CDC (art. 28, § 5º). A C contraria o § 4º do art. 50 (a mera existência de grupo econômico não autoriza a desconsideração). A D contraria o § 5º (a expansão ou alteração da finalidade original não constitui desvio de finalidade).',
      fundamento: 'Art. 50, caput e §§ 1º, 2º, 4º e 5º, do Código Civil (Lei 13.874/2019)'
    },
    {
      id: 'empresarial-020',
      topico: 'Contratos empresariais',
      dificuldade: 2,
      enunciado: 'Roberto assinou contrato de franquia com a rede Sabor Mineiro S.A. e pagou a taxa de filiação. Posteriormente, constatou que a Circular de Oferta de Franquia lhe foi entregue apenas três dias antes da assinatura do contrato. Roberto consulta você sobre seus direitos. Assinale a afirmativa correta.',
      alternativas: [
        'Não há irregularidade, pois a lei exige apenas que a Circular de Oferta de Franquia seja entregue até a data da assinatura do contrato.',
        'A relação entre franqueador e franqueado é de consumo, de modo que Roberto pode exercer o direito de arrependimento em 7 dias.',
        'Roberto poderá arguir a anulabilidade ou a nulidade, conforme o caso, e exigir a devolução das quantias pagas a título de filiação ou de royalties, corrigidas monetariamente, pois a Circular deveria ter sido entregue com antecedência mínima de 10 dias.',
        'Roberto poderá pleitear o reconhecimento de vínculo empregatício com o franqueador, em razão da subordinação à padronização da rede.'
      ],
      correta: 2,
      comentario: 'Correta a C: o art. 2º, § 1º, da Lei 13.966/2019 exige a entrega da Circular de Oferta de Franquia no mínimo 10 dias antes da assinatura do contrato ou pré-contrato, ou do pagamento de qualquer taxa; descumprida a regra, o franqueado pode arguir anulabilidade ou nulidade e exigir a devolução das quantias pagas a título de filiação ou royalties, corrigidas (§ 2º). A A contraria o prazo legal. A B e a D contrariam o art. 1º da lei, segundo o qual a franquia não caracteriza relação de consumo nem vínculo empregatício.',
      fundamento: 'Arts. 1º e 2º, §§ 1º e 2º, da Lei 13.966/2019'
    }
  ],
  flashcards: [
    { id: 'empresarial-f001', frente: 'Stay period na recuperação judicial', verso: '180 dias contados do deferimento do processamento, prorrogável por igual período, uma única vez, em caráter excepcional, se o devedor não concorreu para a demora. Não alcança execuções fiscais.', fundamento: 'Art. 6º, §§ 4º e 7º-B, da Lei 11.101/2005' },
    { id: 'empresarial-f002', frente: 'Prazo para apresentar o plano de recuperação judicial', verso: '60 dias da publicação da decisão que deferir o processamento, sob pena de convolação em falência.', fundamento: 'Art. 53 da Lei 11.101/2005' },
    { id: 'empresarial-f003', frente: 'Prazo de objeção ao plano de recuperação', verso: '30 dias contados da publicação da relação de credores (ou do aviso de recebimento do plano, se posterior).', fundamento: 'Art. 55 da Lei 11.101/2005' },
    { id: 'empresarial-f004', frente: 'Habilitação de crédito e impugnação à relação de credores', verso: 'Habilitação: 15 dias da publicação do edital. Impugnação: 10 dias da publicação da relação elaborada pelo administrador judicial.', fundamento: 'Arts. 7º, § 1º, e 8º da Lei 11.101/2005' },
    { id: 'empresarial-f005', frente: 'Pedido de falência por impontualidade: valor mínimo e defesa', verso: 'Títulos executivos protestados que somem mais de 40 salários mínimos (credores podem litisconsorciar-se). Contestação e depósito elisivo em 10 dias.', fundamento: 'Arts. 94, I e § 1º, e 98 da Lei 11.101/2005' },
    { id: 'empresarial-f006', frente: 'Limite da preferência dos créditos trabalhistas na falência', verso: 'Até 150 salários mínimos por credor (além dos créditos de acidente de trabalho); o excedente vira quirografário.', fundamento: 'Art. 83, I e VI, c, da Lei 11.101/2005' },
    { id: 'empresarial-f007', frente: 'Termo legal da falência', verso: 'Não pode retroagir mais de 90 dias contados do pedido de falência, do pedido de recuperação judicial ou do 1º protesto por falta de pagamento.', fundamento: 'Art. 99, II, da Lei 11.101/2005' },
    { id: 'empresarial-f008', frente: 'Extinção das obrigações do falido (principais hipóteses)', verso: 'Pagamento de todos os créditos; pagamento de mais de 25% dos quirografários após realizado o ativo; decurso de 3 anos da decretação; encerramento da falência (arts. 114-A ou 156).', fundamento: 'Art. 158 da Lei 11.101/2005 (Lei 14.112/2020)' },
    { id: 'empresarial-f009', frente: 'Votação nas classes da recuperação judicial', verso: 'Classes I (trabalhistas) e IV (ME/EPP): maioria simples dos credores presentes, por cabeça. Classes II e III: mais da metade do valor dos créditos presentes e, cumulativamente, maioria simples dos presentes.', fundamento: 'Art. 45, §§ 1º e 2º, da Lei 11.101/2005' },
    { id: 'empresarial-f010', frente: 'Quórum da recuperação extrajudicial', verso: 'Mais da metade dos créditos de cada espécie abrangida pelo plano; o pedido pode ser feito com 1/3, para completar o quórum em 90 dias.', fundamento: 'Art. 163, caput e § 7º, da Lei 11.101/2005' },
    { id: 'empresarial-f011', frente: 'Cheque: prazos', verso: 'Apresentação: 30 dias (mesma praça) ou 60 dias (praça diversa). Execução: 6 meses após o fim do prazo de apresentação. Enriquecimento: 2 anos. Monitória: 5 anos do dia seguinte à emissão.', fundamento: 'Arts. 33, 59 e 61 da Lei 7.357/1985; Súmula 503 do STJ' },
    { id: 'empresarial-f012', frente: 'Prescrição da nota promissória e da letra de câmbio', verso: '3 anos contra emitente/aceitante e avalistas (do vencimento); 1 ano contra endossantes (do protesto); 6 meses no regresso entre endossantes.', fundamento: 'Arts. 70 e 77 da Lei Uniforme (Decreto 57.663/1966)' },
    { id: 'empresarial-f013', frente: 'Duplicata: protesto para regresso e prescrição', verso: 'Protesto em 30 dias do vencimento para manter o regresso contra endossantes e avalistas. Prescrição: 3 anos contra sacado e avalistas; 1 ano contra endossantes (do protesto).', fundamento: 'Arts. 13, § 4º, e 18 da Lei 5.474/1968' },
    { id: 'empresarial-f014', frente: 'Aval parcial: CC x Lei Uniforme', verso: 'O CC proíbe (art. 897, parágrafo único), mas a Lei Uniforme admite (art. 30) e prevalece para letra e nota promissória (art. 903 do CC).', fundamento: 'Arts. 897 e 903 do CC; art. 30 da LUG' },
    { id: 'empresarial-f015', frente: 'Prazos de vigência na Lei 9.279/1996', verso: 'Invenção: 20 anos do depósito. Modelo de utilidade: 15 anos do depósito. Desenho industrial: 10 anos do depósito + 3 prorrogações de 5 anos. Marca: 10 anos da concessão, prorrogáveis sucessivamente.', fundamento: 'Arts. 40, 108 e 133 da Lei 9.279/1996' },
    { id: 'empresarial-f016', frente: 'Quóruns da limitada após a Lei 14.451/2022', verso: 'Mais da metade do capital: designar/destituir administradores, remuneração, modificar o contrato, incorporação, fusão, dissolução e pedido de recuperação. Maioria dos presentes: demais casos (ex.: aprovar contas). Não há mais 3/4.', fundamento: 'Arts. 1.071 e 1.076 do Código Civil' },
    { id: 'empresarial-f017', frente: 'Administrador não sócio na limitada', verso: '2/3 dos sócios se o capital não estiver integralizado; mais da metade do capital após a integralização.', fundamento: 'Art. 1.061 do Código Civil (Lei 14.451/2022)' },
    { id: 'empresarial-f018', frente: 'Cessão de quotas na limitada (contrato omisso)', verso: 'A outro sócio: livre. A estranho: possível se não houver oposição de titulares de mais de 1/4 do capital.', fundamento: 'Art. 1.057 do Código Civil' },
    { id: 'empresarial-f019', frente: 'Trespasse: prazos', verso: 'Alienante solidário por 1 ano pelos débitos contabilizados; não concorrência por 5 anos; terceiros podem rescindir contratos em 90 dias com justa causa; credores consentem em 30 dias se não restarem bens suficientes.', fundamento: 'Arts. 1.145 a 1.148 do Código Civil' },
    { id: 'empresarial-f020', frente: 'Limites de receita bruta anual da ME e da EPP', verso: 'ME: até R$ 360 mil. EPP: acima de R$ 360 mil até R$ 4,8 milhões.', fundamento: 'Art. 3º, I e II, da LC 123/2006' }
  ]
});
