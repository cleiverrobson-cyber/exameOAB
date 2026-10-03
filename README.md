# Rumo à OAB: 1ª fase do 48º Exame de Ordem

Este é um aplicativo de estudos (PWA) para a **prova objetiva do 48º Exame de Ordem Unificado (OAB/FGV)**, marcada para **10/01/2027, das 13h às 18h (horário de Brasília)**.

Ele funciona no navegador do computador ou do celular e pode ser instalado na tela inicial. Depois de aberto uma vez, funciona sem internet. Não precisa de servidor próprio nem de cadastro, e o progresso fica salvo no próprio aparelho.

## O que o aplicativo oferece

| Módulo | O que faz |
|---|---|
| **Painel** | Mostra a contagem regressiva para a prova, a meta diária de questões, o aproveitamento, as horas da semana e a sequência de dias. Traz também as tarefas do dia, as pendências e a lista "onde você mais pode ganhar pontos". |
| **Termômetro de aprovação** | Faz uma projeção da nota em 80 questões: para cada disciplina, multiplica o número de questões na prova pela sua taxa de acerto. A projeção é comparada aos 40 acertos exigidos e à margem de segurança de 48. |
| **Edital verticalizado** | Lista as 20 disciplinas na ordem do caderno de prova, com peso e numeração das questões. Cada tópico tem relevância de ★ a ★★★ e um status (não iniciado → estudando → estudado → revisado). |
| **Resumos, lei seca e dicas** | Cada disciplina tem um resumo dos pontos mais cobrados, links para a legislação oficial (Planalto, STF, STJ, TST, OAB), dicas de prova e um espaço para anotações pessoais. |
| **Cronograma automático** | Monta o plano dia a dia até a prova, conforme as horas disponíveis em cada dia da semana. O plano tem três fases (base, revisão com simulados semanais e reta final) e dá mais tempo às disciplinas de maior peso e de menor aproveitamento. |
| **Banco de questões** | As questões são inéditas, no estilo FGV, com gabarito comentado e fundamento legal. Há filtros por disciplina, tópico, dificuldade, situação (não resolvidas, erradas, favoritas) e palavra-chave. Também é possível riscar alternativas, favoritar, fazer anotações e usar atalhos de teclado. |
| **Simulados** | Podem ser completos (80 questões em 5h), de 40 ou de 20 questões. Seguem a distribuição oficial e a ordem do caderno, com cronômetro e folha de respostas. A correção é comentada e mostra o desempenho por disciplina e a evolução ao longo do tempo. |
| **Flashcards** | Usam repetição espaçada pelo algoritmo SM-2, com respostas Errei, Difícil, Bom e Fácil. Cobrem prazos, quóruns, súmulas e exceções, e você pode criar os seus próprios cartões. |
| **Revisões espaçadas** | Cada tópico marcado como estudado volta para revisão após 1, 7, 15, 30 e 60 dias. |
| **Caderno de erros** | Reúne as questões cuja última resposta foi errada. Dá para refazê-las ou relê-las no modo leitura. |
| **Pomodoro** | Cronômetro de foco e pausa configurável. O tempo estudado é registrado automaticamente por disciplina, e também é possível registrar estudo manualmente. |
| **Desempenho** | Mostra o acerto por disciplina (com a linha de corte de 50%), as questões por dia, um mapa de constância, os tópicos mais fracos e as horas por disciplina. |
| **Estratégia e metas** | Traz orientações sobre como a FGV cobra e sobre a gestão do tempo, uma calculadora de meta de acertos por disciplina e o checklist do dia da prova. |
| **O Exame** | Reúne o calendário oficial, as regras, a distribuição das 80 questões e os links oficiais. |
| **Configurações** | Permite configurar o perfil, o tema claro ou escuro e a meta diária, fazer **backup e restauração** (JSON) e **importar questões** de provas anteriores ou criadas por você. |

### Distribuição das 80 questões (edital do 48º Exame)

| Disciplina | Qtd. | Disciplina | Qtd. |
|---|---|---|---|
| Ética Profissional | 8 | Direito Civil | 6 |
| Filosofia do Direito | 2 | ECA | 2 |
| Direito Constitucional | 6 | Direito do Consumidor | 2 |
| Direitos Humanos | 2 | Direito Empresarial | 4 |
| Direito Eleitoral | 2 | Direito Processual Civil | 6 |
| Direito Internacional | 2 | Direito Penal | 6 |
| Direito Financeiro | 2 | Direito Processual Penal | 6 |
| Direito Tributário | 5 | Direito Previdenciário | 2 |
| Direito Administrativo | 5 | Direito do Trabalho | 5 |
| Direito Ambiental | 2 | Direito Processual do Trabalho | 5 |

A aprovação exige **40 acertos**. Pelo edital, só é cobrada a legislação em vigor na data da sua publicação (**21/09/2026**).

## Como usar

### No computador
Os arquivos podem ser abertos diretamente: basta dar dois cliques em `index.html`. Para ter o modo offline e a instalação como aplicativo, sirva a pasta por HTTP:

```bash
npm start            # equivale a: npx http-server -p 8080 -c-1 .
# abra http://localhost:8080
```

### No celular (recomendado: GitHub Pages)
1. No GitHub, abra **Settings → Pages** do repositório.
2. Em *Build and deployment*, escolha **Deploy from a branch**, selecione o branch e a pasta `/ (root)` e salve.
3. Acesse o endereço gerado (`https://<usuario>.github.io/<repositorio>/`) no celular e escolha **Adicionar à tela inicial**.

> O GitHub Pages publica o site de forma pública. Em repositórios privados, isso depende do plano da conta.

### Backup
O progresso fica no armazenamento local do navegador. Em **Configurações → Exportar backup**, baixe um arquivo `.json` com tudo: respostas, simulados, flashcards, cronograma e anotações. Esse arquivo pode ser importado em outro aparelho.

### Importar questões de provas anteriores
As provas e gabaritos oficiais estão em <https://oab.fgv.br/>. Em **Configurações → Importar questões**, cole ou envie um JSON no formato abaixo:

```json
[
  {
    "disciplina": "etica",
    "topico": "Honorários advocatícios",
    "enunciado": "Texto da questão...",
    "alternativas": ["A...", "B...", "C...", "D..."],
    "correta": "B",
    "comentario": "Opcional",
    "fundamento": "Art. 22 da Lei 8.906/1994",
    "fonte": "XXXIX Exame, questão 4"
  }
]
```

Estes são os IDs das disciplinas: `etica`, `filosofia`, `constitucional`, `humanos`, `eleitoral`, `internacional`, `financeiro`, `tributario`, `administrativo`, `ambiental`, `civil`, `eca`, `consumidor`, `empresarial`, `processocivil`, `penal`, `processopenal`, `previdenciario`, `trabalho` e `processotrabalho`.

## Sobre o conteúdo

- As questões e os resumos são **autorais e inéditos**. Foram elaborados no estilo da FGV, com base na legislação vigente em 21/09/2026, em súmulas e em teses consolidadas, e cada questão indica o seu fundamento.
- Temas em que a jurisprudência está dividida ou em que houve alteração legislativa muito recente e ainda incerta foram evitados de propósito nas questões. Esses pontos aparecem apenas nos resumos, com a ressalva.
- **Apesar do cuidado, o material pode conter imprecisões.** Confira sempre a lei seca pelos links oficiais de cada disciplina. Se houver divergência, prevalece o texto oficial. Datas marcadas como "prováveis" no edital podem mudar, então acompanhe os comunicados da OAB e da FGV.

## Estrutura do projeto

```
index.html               Página única do app
manifest.webmanifest     Manifesto PWA
sw.js                    Service worker (offline)
css/style.css            Estilos (tema claro/escuro, responsivo)
data/edital.js           Datas, regras e distribuição oficial das questões
data/estrategia.js       Orientações gerais e checklist da prova
data/disciplinas/*.js    Conteúdo de cada disciplina: tópicos, resumo, legislação, dicas, questões e flashcards
js/util.js               Utilitários (DOM, datas, formatação)
js/srs.js                Repetição espaçada (SM-2) e revisões de tópicos
js/planner.js            Gerador de cronograma
js/store.js              Estado do usuário (localStorage), backup, estatísticas
js/banco.js              Banco de questões, filtros e montagem de simulados
js/charts.js             Gráficos SVG
js/views/*.js            Telas do aplicativo
js/app.js                Roteamento e inicialização
tools/validate.js        Validador do conteúdo
tools/e2e.js             Teste de ponta a ponta no navegador (Playwright)
tests/unit.test.js       Testes unitários (node --test)
```

### Desenvolvimento

```bash
npm run validar   # confere o formato e as quantidades de todo o conteúdo
npm test          # testes unitários (SM-2, cronograma, distribuição, validação)
npm start & npm run e2e   # teste no navegador (requer Playwright)
```

Para acrescentar questões a uma disciplina, edite o arquivo `data/disciplinas/<id>.js` e rode `npm run validar`. Ao publicar uma versão nova, altere `VERSAO` em `sw.js` para que os aparelhos recebam a atualização.
