# Guia do Claude Code · Imersão IA para empresários

> Material da imersão de 29/09/2026 (Mogi das Cruzes - SP), com Lucas Santana.
> Versão 1 · 30/09/2026. Os fatos técnicos foram conferidos na documentação oficial do Claude Code (https://code.claude.com/docs) nessa data. O Claude Code muda rápido: se algo daqui não bater com a sua tela, vale o que está na documentação.

---

## 0. Para o Claude: como usar este arquivo

Você (Claude) está lendo o guia de um aluno que passou um dia aprendendo o Claude Code. Ele é dono de empresa ou profissional, **não é programador**. Siga estas regras em toda a conversa:

1. **Seja tutor, não enciclopédia.** Responda curto (cerca de 10 linhas por assunto), com um exemplo do negócio dele. Se ele quiser mais, ele pede. Se ele perguntar duas coisas, responda as duas.
2. **Termo técnico só com tradução na mesma frase.** Ex.: "MCP, o cabo que liga a IA às ferramentas".
3. **Pergunte antes de supor.** Se a pergunta depende da empresa dele (setor, ferramentas, tamanho), pergunte uma coisa por vez.
4. **Use este guia como fonte.** Se a dúvida for sobre um recurso que mudou ou não está aqui, diga isso e sugira conferir em https://code.claude.com/docs. Não invente comando, caminho ou botão.
5. **Nada de hype.** Nada de "a IA vai fazer tudo". Diga o que funciona, o que não funciona e o que ele precisa conferir.
6. **Antes de instalar ou mudar qualquer coisa no computador dele, explique o que vai fazer e peça "pode?".**
7. Quando ele pedir ideias: se já sabe a tarefa que ele quer resolver, sugira direto a partir da seção 13. Se ele não sabe por onde começar, conduza a entrevista da seção 14.
8. Se ainda não sabe nada sobre a empresa dele, siga a "Primeira conversa" logo abaixo.
9. Se ele responder várias perguntas de uma vez, não repita o que ele já disse: pule para a próxima que falta. Se ele mudar de assunto, acompanhe e retome o roteiro depois.

### Primeira conversa

Uma pergunta por mensagem. Cumprimente em uma linha e comece pela pasta, porque ela pode já ter tudo:

1. "Você tem a pasta da tarde da imersão (o cérebro da empresa) no seu computador? Onde ela está?"
   - **Se tem:** peça para ele abrir uma conversa nova do Claude Code **nessa pasta** e colar este guia lá dentro (ou mova o guia para a raiz dela). Leia `memoria/` e `controle/`, diga em 3 linhas o que já sabe da empresa e pule as perguntas 2 a 4 que já estiverem respondidas.
   - **Se não tem:** siga com as perguntas 2 a 4.
2. "Qual é a sua empresa, o que ela vende e quantas pessoas trabalham nela?"
3. "Quais ferramentas vocês usam no dia a dia? (planilha, WhatsApp, e-mail, sistema de gestão, CRM, Instagram, nota fiscal...)"
4. "Qual tarefa da sua semana você mais queria tirar das suas costas?"

Depois, **um passo por mensagem**, nesta ordem:
- **Salvar o que aprendeu.** Se está na pasta do cérebro, ofereça atualizar os arquivos de `memoria/`. Se não, ofereça criar a estrutura da seção 5.4 na pasta atual, com as respostas em `memoria/empresa.md`. Nunca guarde a mesma informação em dois lugares.
- **Ideias.** Para a tarefa que ele citou, sugira até 3 caminhos (ex.: uma skill, uma conexão, uma rotina) e pergunte qual ele quer montar primeiro.
- **Skills globais.** Quando fizer sentido (ou antes de ele encerrar), pergunte se ele quer as skills da manhã disponíveis em todas as pastas. Explique com a seção 4.4 e, se ele disser sim, siga a 4.9.

### Nomes na tela
O app do Claude pode aparecer em português ou em inglês, dependendo do idioma configurado. Neste guia o nome do botão aparece como na documentação (em inglês, ex.: **Routines**, **Connectors**), às vezes com a tradução. Se o aluno não achar um botão, pergunte em que idioma está o app dele e peça um print.

---

## 1. O dia em uma página

A imersão seguiu **5 fases**. Cada uma é uma peça do "carro" que a IA precisa para trabalhar de verdade:

| # | Fase | A ideia em uma frase | O que você fez |
|---|---|---|---|
| 1 | Modelo | O LLM é o motor: ele prevê a próxima palavra. Motor sozinho não sai do lugar. | Abriu o Claude Code numa pasta e fez a primeira pergunta. |
| 2 | MCP | O cabo USB da IA: tira o Claude da pasta e liga às suas ferramentas. | Conectou o Google Drive, perguntou à planilha da Lanchonete Bom Pedaço e gerou um orçamento de buffet. |
| 3 | Skills | Um processo que você ensina uma vez e a IA repete sempre. | Usou `/eli5`, `/grill-me` e montou a sua apresentação pessoal com design system. |
| 4 | Contexto | A IA não é burra, ela não tem contexto. | Viu a mesma pergunta ("por que as vendas caíram em abril?") dar duas respostas, sem e com contexto. |
| 5 | Agentes | Modelo + MCP + skills + contexto numa pasta = harness (o arreio que faz o cavalo puxar para onde você quer). | Montou o cérebro da sua empresa com uma trilha de 6 skills (mais `/marca` e `frontend-design` de apoio). |

A frase que fechou o dia: **"A IA executa. Você lidera."** Você deixa de fazer a tarefa e passa a decidir, conferir e aprovar.

---

## 2. Fase 1 · O modelo e o Claude Code

### O que é um LLM
LLM (Large Language Model, modelo grande de linguagem) é um programa feito de números (os "pesos"), treinado com muito texto para prever a próxima palavra. Ele não "sabe" nem "pesquisa" por padrão: calcula a continuação mais provável. Por isso:
- a mesma pergunta pode dar respostas diferentes;
- ele pode errar com confiança quando não tem o dado certo. Ele não mente: completa com o que parece plausível.

Cada modelo é diferente (treino, ajuste, saída). Qual é o melhor muda todo mês; o critério fica: **inteligência × custo × velocidade para a sua tarefa**. O site Artificial Analysis (artificialanalysis.ai) compara modelos.

### O que é o Claude Code
É o Claude com acesso a **uma pasta do seu computador**. Tudo o que ele cria vira arquivo de verdade ali dentro. A diferença para o chat: no chat a resposta morre na conversa; aqui vira arquivo que fica, que você abre, edita e reaproveita.

- **Projeto = pasta.** Cada assunto ou empresa tem a sua pasta.
- **Ele pede permissão** antes de criar, apagar ou rodar algo (dependendo do modo).
- **Você conversa em português.** Não precisa programar.

### Onde fica
No app do Claude (claude.com/download), aba **Code**. O app já traz o Claude Code; não precisa instalar nada de terminal. Precisa de plano pago (Pro ou acima).

Antes da primeira mensagem de cada conversa, você escolhe:
- **Pasta do projeto** (a pasta onde ele vai trabalhar).
- **Ambiente**: *Local* (no seu computador, o que usamos), *Cloud* (na nuvem da Anthropic, continua mesmo com o app fechado), SSH ou WSL.
- **Modelo**: no seletor ao lado do botão enviar.
- **Modo de permissão**: também ao lado do botão enviar.

### Modos de permissão (app Desktop)
| Modo | O que faz | Quando usar |
|---|---|---|
| **Manual** | Pergunta antes de editar ou rodar comandos | Padrão. Use enquanto está aprendendo |
| **Accept edits** | Aceita edições de arquivo sozinho, pergunta o resto | Quando você já confia no que ele está fazendo naquela pasta |
| **Plan** | Só lê e propõe um plano, sem mexer em nada | Antes de tarefas grandes: aprove o plano, depois troque de modo |
| **Auto** | Executa tudo, com checagens de segurança em segundo plano | Usuário experiente, tarefa clara. Depende do modelo escolhido; se não aparecer para você, é por isso |
| **Bypass permissions** | Sem perguntar nada | Não use no seu computador de trabalho. Só em ambiente isolado |

Boa prática da própria documentação: comece tarefas complexas em **Plan**, aprove, depois vá para **Accept edits** ou **Manual**.

### Atalhos úteis no app (Windows usa Ctrl, Mac usa Cmd)
- `Ctrl+N`: nova conversa · `Esc`: para a resposta · `Ctrl+/`: lista de atalhos.
- Digite `/` para ver as skills e comandos. Botão **+**: anexar arquivos, skills, conectores, plugins.
- `@nome-do-arquivo` no prompt: aponta um arquivo da pasta para ele ler.
- Imagem: arraste para a conversa ou cole com Ctrl+V / Cmd+V.
- O painel de pré-visualização abre HTML, PDF, imagens e vídeos da pasta: clique no caminho do arquivo no chat.

---

## 3. Fase 2 · Conexões: MCP, CLI e API

Para a IA trabalhar com as ferramentas da sua empresa, ela precisa de um jeito de "falar" com elas. Existem três caminhos. Pense neles como três jeitos de um funcionário novo acessar um sistema:

| Caminho | Analogia | O que é | Quando usar |
|---|---|---|---|
| **MCP** | Tomada padrão | Um conector pronto, no padrão aberto criado pela Anthropic, que liga a IA a uma ferramenta. Você liga e ele já sabe o que dá para fazer lá | Primeira opção. Se a ferramenta tem conector, use |
| **CLI** | Atalho de teclado do sistema | Programa de linha de comando que a própria ferramenta oferece (ex.: `gh` do GitHub). O Claude Code roda o comando por você | Quando a ferramenta tem CLI. A documentação do Claude Code recomenda preferir CLI quando existe, porque gasta menos contexto. Exige instalar o programa e fazer login pelo terminal |
| **API** | Porta dos fundos do sistema | O endereço técnico que a ferramenta expõe para outros programas conversarem com ela. Precisa de uma chave de acesso (token) | Quando não tem MCP nem CLI. O Claude pode escrever um pequeno script que chama a API |

**Regra prática para quem não é técnico:** procure primeiro um conector MCP oficial, porque liga pelo app, com login na tela, sem terminal. Se não tiver, veja se há CLI (mais econômico, mas precisa de instalação). Se não tiver nenhum dos dois, API. Quem já se sente à vontade com o terminal pode inverter e preferir CLI, como recomenda a documentação.

**E se não tiver conexão nenhuma?** Exporte. Quase todo sistema exporta relatório em Excel ou CSV. Salve o arquivo em `dados/` da pasta e aponte com `@dados/arquivo.xlsx`. É o jeito mais simples e seguro de começar, e serve para planilha que está só no seu computador.

### 3.1 MCP no app (o jeito que usamos)
Conectores do app são servidores MCP com tela de configuração.
- **Pelo claude.ai:** Configurações → Conectores (endereço: claude.ai/customize/connectors). Foi assim que ligamos o Google Drive. O que você liga lá aparece sozinho no Claude Code quando você está logado com a mesma conta.
- **Dentro do app, aba Code:** botão **+** → **Connectors** (em sessões Local). Exemplos que o app lista: Google Calendar, Slack, GitHub, Linear, Notion.
- Diretório de conectores revisados pela Anthropic: claude.ai/directory.
- Gmail, Google Calendar e Microsoft 365 são conectados pelo claude.ai.
- Em planos Team/Enterprise, só administradores adicionam conectores.

### 3.2 MCP pelo terminal (para quem quiser ir além)
Você pode pedir ao Claude: "Adicione o servidor MCP do Notion para mim". Por baixo, ele roda algo assim:

```
claude mcp add --transport http notion https://mcp.notion.com/mcp
```

Depois, dentro da conversa, `/mcp` mostra os servidores e faz o login (abre o navegador). Outros comandos: `claude mcp list`, `claude mcp remove <nome>`.

**Onde a conexão vale (escopo):**
| Escopo | Vale em | Guardado em |
|---|---|---|
| Local (padrão) | Só nesta pasta, só para você | `~/.claude.json` |
| Projeto (`--scope project`) | Nesta pasta, para quem receber a pasta | `.mcp.json` na raiz da pasta |
| Usuário (`--scope user`) | Em todas as suas pastas | `~/.claude.json` |

### 3.3 Cuidados com conexões
- **Conecte só o que precisa.** Cada conexão é uma porta aberta e ocupa espaço no contexto.
- **Confie no servidor antes de ligar.** A documentação avisa: servidores que buscam conteúdo de fora (e-mails, páginas) podem trazer texto malicioso que tenta dar ordens à IA (o nome disso é *prompt injection*, injeção de instrução).
- Ele pede permissão antes de agir numa ferramenta. Leia o que ele vai fazer antes de aprovar, principalmente quando é escrita (mandar, apagar, alterar).
- Conta Google da empresa pode estar bloqueada pelo administrador para conectar. Fale com a TI ou use a pessoal para testar.
- Ferramenta sem conector na lista? O claude.ai permite adicionar um **conector personalizado** com o endereço (URL) de um servidor MCP remoto. Só faça isso com servidor de quem você confia.

**Como avaliar um conector ou MCP que não é da própria empresa da ferramenta** (feito por terceiros):
1. Quem publicou? Empresa conhecida, pessoa com histórico, ou anônimo?
2. Ele só **lê** ou também **escreve** (emite nota, apaga, envia)? Comece só com leitura.
3. Que dados ele vê? Financeiro e dados de clientes pedem mais cuidado.
4. Onde fica a chave de acesso e como revogar? Crie uma chave só para isso, com a menor permissão possível.
5. Na dúvida, exporte o relatório e use o arquivo (acima) até ter certeza.

### 3.3.1 WhatsApp
É a ferramenta que mais aparece nas empresas da turma, então vale o aviso:
- O caminho oficial para automatizar o WhatsApp é a API do WhatsApp Business da Meta (WhatsApp Business Platform). Ela exige configuração de conta empresarial e tem cobrança própria, pela tabela da Meta.
- Ferramentas não oficiais que "controlam" o WhatsApp do celular vão contra os termos do WhatsApp e podem levar ao bloqueio do número. Não arrisque o número da empresa.
- **O fluxo realista para começar:** a IA monta a resposta (orçamento, proposta, tira-dúvidas) na pasta, você confere, copia e envia. Você ganha o tempo de montar, e o envio continua com você.

### 3.4 Como descobrir o caminho para a SUA ferramenta
Peça ao Claude:

```
Eu uso [nome da ferramenta] na minha empresa. Pesquise se ela tem conector MCP oficial, CLI ou API. Me diga qual caminho é o mais simples para mim, o que eu preciso (conta, plano, chave) e os riscos. Não instale nada ainda.
```

Ferramentas comuns para investigar: planilhas (Google Sheets, Excel), e-mail, agenda, CRM, ERP, sistema de nota fiscal, WhatsApp Business, loja virtual, redes sociais, gestor de tarefas. Nem toda ferramenta tem MCP; muitas têm API. Não suponha: pesquise a documentação da ferramenta.

---

## 4. Fase 3 · Skills

### 4.1 O que é
Skill é uma pasta com um arquivo `SKILL.md`. Ele tem duas partes:
- **Em cima (quando usar):** um cabeçalho com `name` (o nome, que vira o comando `/nome`) e `description` (quando usar). O Claude sempre lê a descrição de todas as skills.
- **Embaixo (como fazer):** o passo a passo. Só é carregado quando a skill é chamada. Por isso skill "custa quase nada até você precisar".

Exemplo mínimo:

```
---
name: resumir-reuniao
description: Use quando eu mandar a transcrição de uma reunião. Devolve resumo, decisões, tarefas com responsável e prazo, e pendências.
---

1. Leia a transcrição inteira.
2. Escreva o resumo em até 5 linhas.
3. Liste as decisões.
4. Liste as tarefas: o quê, quem, até quando. Se faltar prazo, escreva [sem prazo].
5. Liste o que ficou pendente.
```

A pasta pode ter arquivos de apoio (modelos, exemplos, planilhas de referência). A documentação sugere manter o `SKILL.md` com menos de 500 linhas e mover detalhe para arquivos separados.

### 4.2 Skill × CLAUDE.md
- **CLAUDE.md:** o que vale **sempre** naquela pasta (regras da casa, quem é a empresa).
- **Skill:** um **procedimento** que só entra quando é usado.
Se você cola as mesmas instruções no chat toda semana, isso deveria ser uma skill.

### 4.3 Como usar
- Digite `/` e escolha, ou `/nome-da-skill` + o pedido. Ex.: `/eli5 como funciona o fluxo de caixa`.
- Ou só peça em linguagem natural: se a descrição da skill bate com o pedido, o Claude usa sozinho.
- Não disparou? Coloque na descrição as palavras que você diria ao pedir. Disparou demais? Deixe a descrição mais específica.
- Criou ou editou uma skill? Vale na conversa atual, sem reiniciar. Exceção: se a pasta de skills não existia quando a conversa começou, digite `/reload-skills` ou abra uma conversa nova.

### 4.4 Skill de projeto × skill global (a diferença que mais importa)
| Tipo | Onde fica | Vale em | Use para |
|---|---|---|---|
| **De projeto** | `.claude/skills/<nome>/SKILL.md` dentro da pasta | Só naquela pasta | Processos da empresa, que dependem dos arquivos daquela pasta (ex.: as skills da tarde) |
| **Global (pessoal)** | `~/.claude/skills/<nome>/SKILL.md` | Todas as suas pastas, no seu computador | Ferramentas pessoais que servem em qualquer lugar (ex.: `humanizer`, `eli5`, `grill-me`) |
| Da conta claude.ai | Ligadas em Customize / configurações de skills | Chat, Cowork, nuvem e Claude Code logado nessa conta | O que já vem com a conta (ex.: `skill-creator`, `pdf`) |

`~` quer dizer a sua pasta de usuário. No Windows: `C:\Users\<seu-usuario>\.claude\skills\`. No Mac: `/Users/<seu-usuario>/.claude/skills/`. A pasta `.claude` começa com ponto e fica escondida (no Mac, `Cmd+Shift+.` mostra no Finder).

**Se duas skills têm o mesmo nome**, vence a global sobre a de projeto. Cuidado ao instalar globalmente uma skill com o nome de uma skill de projeto.

**Atenção com agendamentos:** rotinas que rodam **na nuvem** não enxergam as skills globais do seu computador (seção 9). Tarefas agendadas **locais** do app enxergam.

### 4.5 Os três jeitos de ter uma skill
1. **Receber pronta:** alguém te passa a pasta (foi o caso das pastas da imersão).
2. **Instalar da internet:** skills.sh tem milhares; também o repositório oficial da Anthropic (github.com/anthropics/skills) e repositórios de empresas.
3. **Criar a sua:** conversando com a `skill-creator`.

**Confiança:** qualquer pessoa publica skill. Skill é instrução que a IA segue com as suas permissões: skill ruim faz a IA fazer coisa ruim. Antes de instalar, veja quem fez, quantos instalaram e leia o `SKILL.md`. Leia também a licença: algumas não podem ser redistribuídas (as `pptx`, `pdf`, `docx` e `xlsx` da Anthropic, por exemplo, você instala do repositório oficial, mas não pode copiar e repassar).

### 4.6 Como instalar da internet
Precisa de Node.js e Git instalados (estavam no pré-requisito da imersão). Peça ao Claude, que ele roda o comando por você:

```
Rode no terminal e me avise quando terminar: npx -y skills add <endereço da skill> -a claude-code -y
```

- Sem `-g`: instala na pasta atual (skill de projeto).
- Com `-g`: instala na sua pasta de usuário (skill global).
- `-s <nome>`: escolhe uma skill específica de um repositório com várias.
- `--list`: só lista o que tem no repositório, sem instalar.

Exemplo, a skill de PowerPoint da Anthropic, global:

```
npx -y skills add https://github.com/anthropics/skills -s pptx -g -a claude-code -y
```

Também dá para pedir à `find-skills` (veio na pasta da manhã): "Quero uma skill para [tarefa]. Procure uma para mim."

### 4.7 Como criar a sua
```
Use a skill-creator para criar uma skill chamada [nome]: [o que ela recebe] e devolve [o que ela entrega]. Pergunte o que precisar antes de escrever.
```
Depois teste: `/nome` com um caso real. Corrigiu algo? Peça "atualize a skill com essa correção".

Dicas para uma skill boa:
- A **descrição** começa com "Use quando..." e cita as palavras que você usaria.
- Passos numerados e verificáveis ("até 150 palavras", "cite a fonte"), não vagos ("faça bem feito").
- Diga o formato da entrega e onde salvar.
- Diga o que fazer quando faltar informação (ex.: escrever `[a confirmar]` em vez de inventar).
- Ação com efeito colateral (enviar, publicar, apagar)? Coloque `disable-model-invocation: true` no cabeçalho: assim só roda quando **você** chama.

### 4.8 As skills da imersão
**Pasta da manhã** (`imersao-manha/.claude/skills/`):
| Skill | O que faz | Origem |
|---|---|---|
| `eli5` | Explica qualquer assunto como se você tivesse 5 anos | escrita para a imersão |
| `grill-me` (+ `grilling`) | Te entrevista antes de começar um trabalho | mattpocock/skills (MIT) |
| `frontend-design` | Dá visual de designer a páginas e apresentações | anthropics/skills (Apache 2.0) |
| `humanizer` | Tira a "cara de IA" do texto | blader/humanizer (MIT) |
| `find-skills` | Procura uma skill pronta a partir de uma ideia | vercel-labs/skills (MIT) |

Já vinham com a conta do Claude: `skill-creator` (cria skills conversando) e `pdf` (cria e lê PDFs).

**Pasta da tarde** (`imersao-tarde/.claude/skills/`), a trilha do cérebro da empresa:
| Comando | O que faz |
|---|---|
| `/instalar` | 7 perguntas sobre a empresa; grava a memória e cria o `RESULTADO.html` |
| `/mapear-empresa` | Pesquisa a empresa, o mercado e o cliente; entrega o diagnóstico |
| `/mapear-concorrentes` | 4 a 6 concorrentes, comparação e espaços vazios |
| `/criar-oferta` | Proposta de valor, oferta e roteiro de venda (hipótese a validar) |
| `/criar-pagina` | Página de vendas com a marca, formulário e mapa |
| `/criar-conteudo` | Pilares, 12 pautas, calendário e um carrossel pronto |
| `/marca` | Monta o design system da empresa a partir do site, Instagram ou print |

### 4.9 Deixar as skills da manhã globais (Claude: pergunte antes)
As skills da manhã são ferramentas pessoais: servem em qualquer pasta. Vale deixá-las globais. As da tarde **não**: elas dependem da estrutura da pasta do cérebro (`memoria/`, `pesquisa/`, `RESULTADO.html`), então continuam como skills de projeto dentro da pasta da empresa.

Para o Claude: pergunte ao aluno "Quer que as skills da manhã (eli5, grill-me, humanizer, frontend-design, find-skills) funcionem em qualquer pasta?". Se ele disser sim, confira se o Node.js está instalado (`node -v`), explique o comando e rode:

```
npx -y skills add https://github.com/santanalc/imersao-ia-empresarios -s eli5 -s grill-me -s grilling -s humanizer -s find-skills -s frontend-design -g -a claude-code -y
```

Elas vão para `~/.claude/skills/`. Depois, abra uma conversa nova em qualquer pasta e digite `/` para conferir. Sem Node.js: copie as pastas de dentro de `imersao-manha/.claude/skills/` para `~/.claude/skills/` (crie a pasta se não existir).

Sobre o `frontend-design`: a pasta da tarde também tem uma cópia dele, como skill de projeto. Quando os nomes se repetem, a global vence. Hoje as duas cópias são iguais, então não muda nada. Só lembre disso se um dia você editar uma delas.

---

## 5. Fase 4 · Contexto: por que trabalhar em pastas

### 5.1 A ideia
**A IA não é burra. Ela não tem contexto.** Contexto é tudo o que a IA tem na mão na hora de responder: o que você escreveu, os arquivos que ela leu, o que veio pelas conexões, as skills carregadas e a memória.

O exemplo da aula: "Por que as vendas caíram em abril?" Sem contexto, ele chuta (preço, concorrência, sazonalidade). Com uma frase de contexto ("em abril a lanchonete fechou 2 semanas para reforma"), a queda deixa de ser problema de vendas.

Você deu contexto a manhã inteira: o link da planilha, as respostas do grill-me (a IA **pedindo** contexto), o print das cores (contexto visual), a skill (contexto empacotado).

### 5.2 A janela de contexto
É uma caixa de tamanho fixo. Cada mensagem nova reenvia a conversa inteira. Quando enche, o Claude **resume** o que veio antes (compactação automática) e detalhes podem se perder.

- `/context`: mostra o que está ocupando a caixa.
- `/clear`: esvazia e começa do zero.
- `/compact <foco>`: resume agora, guardando o que você pedir. Ex.: `/compact mantenha os números do orçamento`.
- **Regra: trocou de assunto, conversa nova.** Conversa longa e misturada fica mais cara, mais lenta e erra mais.

### 5.3 Por que pasta
No chat, tudo o que a IA aprendeu sobre você morre quando a conversa acaba. Numa pasta, fica em arquivo:
- **Toda conversa nova começa lendo a pasta.** Você não repete a história da empresa.
- **Uma fase lê o que a anterior gravou.** Foi assim na tarde: o `/criar-oferta` leu o diagnóstico do `/mapear-empresa`.
- **Você pode abrir, corrigir e versionar.** O conhecimento é seu, em texto, no seu computador.
- **Serve para outras IAs.** Arquivo de texto funciona com qualquer assistente.

### 5.4 Como organizar
Uma pasta por "cérebro": uma para a empresa, uma para você, uma por projeto grande. Dentro, o mesmo padrão da pasta da tarde:

```
minha-empresa/
├── CLAUDE.md          a regra da casa (o Claude lê primeiro, sempre)
├── memoria/           o que a empresa é: quem somos, números, foco, jeito de falar
├── dados/             planilhas e PDFs para análise (privado)
├── pesquisa/          o que a IA levantou fora (mercado, cliente, concorrentes)
├── entregas/          o que a IA produziu (propostas, páginas, conteúdo)
├── controle/          em que ponto estão os projetos
└── .claude/skills/    os processos da empresa
```

Hábitos que fazem diferença:
- **Salve o que você explicou.** Explicou algo importante na conversa? Peça: "salve isso em `memoria/`".
- **Corrigiu? Vire regra.** Se ele errou a mesma coisa duas vezes, isso vai para o `CLAUDE.md` ou para a skill.
- **Nome de arquivo claro** (`precos-2026.md`, não `doc1.md`). A IA acha pelo nome.
- **Um assunto por arquivo.** Arquivos pequenos e focados são lidos só quando precisa.
- **Data no que muda** (preço, meta, equipe): "atualizado em 30/09/2026".

---

## 6. Memória

O Claude Code tem dois sistemas de memória que funcionam juntos.

### 6.1 CLAUDE.md (você escreve)
É o arquivo que o Claude lê no começo de **toda** conversa naquela pasta. É a "regra da casa".

| Onde | Vale para |
|---|---|
| `CLAUDE.md` (ou `.claude/CLAUDE.md`) na pasta | Todos que usam aquela pasta |
| `CLAUDE.local.md` na pasta | Só você, naquela pasta (não compartilhe) |
| `~/.claude/CLAUDE.md` | Você, em todas as pastas (ex.: "responda em português, direto") |

- Os arquivos se **somam**, não se substituem. O Claude também lê os CLAUDE.md das pastas acima da atual.
- Mantenha cada um com **menos de 200 linhas**. Arquivo longo gasta contexto e é seguido com menos cuidado.
- Escreva instruções verificáveis: "respostas com até 5 linhas", não "seja objetivo".
- Dá para puxar outro arquivo com `@caminho/arquivo.md` dentro do CLAUDE.md.
- `/init` cria um CLAUDE.md inicial analisando a pasta. `/memory` lista e abre os arquivos de memória.
- É contexto, não trava. Para **impedir** algo de verdade, o recurso é um hook (seção 8).

O CLAUDE.md da pasta da tarde é um bom modelo: lê a memória antes de tudo, não inventa (sem fonte vira `[a confirmar]`), nunca põe faturamento no relatório e pergunta "Salvo na memória?" quando você corrige algo.

### 6.2 Auto memory (o Claude escreve)
Ligada por padrão. O Claude guarda sozinho aprendizados sobre você e o projeto (preferências, correções, decisões) em `~/.claude/projects/<projeto>/memory/`, com um índice `MEMORY.md`. Aparecem mensagens como "Saved 1 memory".
- Pedir "lembre que..." salva na auto memory. Para ir para o CLAUDE.md, peça explicitamente: "adicione isso ao CLAUDE.md".
- Liga e desliga em `/memory`.
- Fica só no seu computador (não sincroniza entre máquinas).

### 6.3 Qual usar
- Regra que vale para todo mundo da empresa → `CLAUDE.md` da pasta.
- Fato da empresa (preços, equipe, clientes) → arquivos em `memoria/`, citados no CLAUDE.md.
- Preferência sua → `~/.claude/CLAUDE.md` ou deixe a auto memory aprender.

---

## 7. Fase 5 · Agentes e orquestração

### 7.1 O que é agente
Agente = a IA executando uma tarefa de várias etapas sozinha, usando ferramentas (ler arquivo, pesquisar, escrever, chamar conexões). O Claude Code já é um agente.

**Harness** (arreio) é o que faz o agente puxar para onde você quer: a pasta com regras (`CLAUDE.md`), memória, skills em trilha e conexões. Foi o que você montou à tarde.

### 7.2 Orquestração
Orquestrar é dividir um trabalho grande em partes, entregar cada parte a um agente e juntar o resultado. O `/mapear-empresa` fez isso: três pesquisas em paralelo (empresa, mercado, cliente) juntadas num diagnóstico.

**Você virou orquestrador:** decide o que fazer, define o critério de "ficou bom" e aprova. O agente executa.

### 7.3 Subagentes
São assistentes especializados que o Claude chama para uma parte do trabalho. Cada um tem a **própria janela de contexto** e devolve só o resumo. Vantagem: a conversa principal não enche de pesquisa e arquivo que você não vai reler.
- Já existem prontos: **Explore** (só lê e busca), **Plan** (pesquisa para o plano) e um de uso geral.
- Você pode criar os seus em `.claude/agents/` (projeto) ou `~/.claude/agents/` (global). Peça: "Crie um subagente chamado revisor-de-propostas que confere preço, prazo e tom antes de eu mandar ao cliente".
- Para usar: "Use o subagente revisor-de-propostas nesta proposta".
- Gastam do mesmo limite do seu plano.

### 7.4 Agent teams
Várias sessões do Claude trabalhando juntas, com um líder e colegas que conversam entre si. **É experimental, gasta bem mais uso e não está disponível no app Desktop** (só no terminal). Para quem está começando: fique com subagentes e skills.

### 7.5 O caminho da empresa AI-native
1. **A IA ajuda cada pessoa** (a manhã da imersão).
2. **Agentes tocam processos** (a pasta da tarde é o começo).
3. **A empresa roda num sistema de IA, com gente decidindo no topo.**

---

## 8. Automação: hooks, plugins e permissões

Estes recursos são mais técnicos. Não precisa dominar para usar bem o Claude Code, mas é bom saber que existem.

### 8.1 Hooks (gatilhos)
Comandos que rodam **sempre** num momento fixo, sem depender da IA decidir. Diferente do CLAUDE.md (que é orientação), hook é garantia. Exemplos da documentação:
- Receber uma notificação no computador quando o Claude precisa de você.
- Bloquear que ele mexa em arquivos protegidos (ex.: `.env`, onde ficam senhas).
- Formatar arquivos automaticamente depois de cada edição.

Ficam em `settings.json`. O jeito fácil: peça ao Claude "crie um hook que me avise quando você precisar da minha aprovação".

### 8.2 Plugins
Pacote que junta skills, subagentes, hooks e conexões para instalar de uma vez. No app: **+** → **Plugins**. Todo plugin ativo ocupa contexto em toda conversa e pode rodar código com as suas permissões: instale só de fonte confiável.

### 8.3 Permissões fixas
Cansou de aprovar a mesma coisa? Quando ele pedir permissão, escolha a opção de sempre permitir. Isso fica salvo em `.claude/settings.local.json` da pasta. Também dá para proibir: por exemplo, impedir que ele leia o arquivo de senhas.

---

## 9. Rotinas e tarefas agendadas

Três formas de fazer a IA trabalhar sem você pedir na hora:

| | Tarefa agendada no app (Local) | Rotina na nuvem (Cloud) | `/loop` |
|---|---|---|---|
| Roda em | Seu computador | Servidores da Anthropic | Seu computador, na conversa aberta |
| Precisa do computador ligado | **Sim, acordado e com o app aberto** | Não | Sim |
| Acessa seus arquivos | Sim | Não (só repositórios do GitHub e conectores) | Sim |
| Intervalo mínimo | 1 minuto | 1 hora | 1 minuto |
| Enxerga as skills globais | Sim | Não | Sim |

### 9.1 Tarefa agendada no app (a mais útil para começar)
1. Aba **Code** → **Routines** na barra lateral → **New routine** → **Local**.
2. Preencha: nome, descrição, **instruções** (o prompt), a **pasta** e o modo de permissão.
3. Escolha a frequência: Manual, De hora em hora, Diária, Dias úteis ou Semanal. Outra frequência (ex.: dia 1 de cada mês): peça ao Claude em português.
4. Clique **Run now** logo depois de criar e aprove as permissões com "sempre permitir". Assim as próximas rodam sozinhas.

Também dá para pedir numa conversa: "todo dia útil às 8h, leia a planilha de vendas e salve um resumo em `controle/vendas-do-dia.md`".

Cuidados:
- Se o computador estiver dormindo no horário, **pula**. Ao acordar, roda uma vez só (a mais recente perdida). Há a opção "manter o computador acordado" em Configurações → Desktop app → Geral; fechar a tampa do notebook ainda põe para dormir.
- Escreva no prompt o que é sucesso e o que fazer com o resultado: a tarefa não tem como tirar dúvida com você.

### 9.2 Rotina na nuvem
Roda mesmo com o notebook fechado. Cria em claude.ai/code/routines ou no app (**New routine** → **Cloud**). Disponível nos planos Pro, Max, Team e Enterprise; é um recurso em prévia (pode mudar). Roda sem pedir permissão e usa os conectores que você deixar ligados: tire os que ela não precisa. Não enxerga as pastas do seu computador.

### 9.3 `/loop`
Repete um pedido enquanto a conversa está aberta. Ex.: `/loop 30m confira se chegou arquivo novo em dados/`. Para quando você fecha a conversa. Bom para acompanhar algo durante o dia.

---

## 10. O segundo cérebro da empresa

"Se o seu melhor operador sair amanhã, o que vai embora com ele?" O cérebro da empresa é a resposta: o que a empresa sabe, **escrito e organizado numa pasta que a IA lê antes de agir**.

### Como ele cresce (a partir da pasta da tarde)
1. **A pasta de hoje:** memória, pesquisa, oferta, página, conteúdo.
2. **Conectar:** planilha de vendas, agenda, CRM (via MCP). A IA passa a ler dado vivo, não só o que você contou.
3. **Novas skills:** cada processo que se repete vira skill (proposta, orçamento, cobrança, onboarding de cliente, relatório semanal).
4. **Rotinas:** as skills passam a rodar sozinhas no horário certo.
5. **A equipe usando a mesma pasta:** o conhecimento deixa de estar na cabeça de uma pessoa.

### O que colocar em `memoria/` primeiro
- Quem somos: o que vende, para quem, diferencial, cidade.
- Produtos e preços (com data).
- Clientes ideais e objeções mais comuns.
- Processos: como vende, como entrega, como cobra (um arquivo por processo).
- Jeito de falar da marca: palavras que usa e que não usa.
- Decisões importantes e o porquê.
- Perguntas frequentes de clientes e as respostas.

### Privacidade
- Faturamento, margem, salários e dados de clientes ficam em arquivos privados (`memoria/numeros.md`, `dados/`), só no seu computador.
- Não suba a pasta preenchida para lugar público.
- As conversas passam pelos servidores da Anthropic. As regras de uso para treino estão em claude.ai → Configurações → Privacidade: confira e decida.
- **Dados pessoais de clientes** (nome, CPF, telefone, endereço) são protegidos pela LGPD. Use só o que a tarefa precisa. Para análise, prefira planilhas sem esses campos (tire as colunas ou troque o nome por um código). Antes de ligar um sistema com dados de clientes, veja com quem cuida do jurídico ou da proteção de dados da empresa.

---

## 11. Custos e limites do plano

O Pro tem limite de uso por janela de horas. Para render mais:
- **Conversa nova a cada assunto** (`/clear`). Contexto longo é reenviado a cada mensagem.
- **CLAUDE.md curto** (menos de 200 linhas). O que é específico vai para skill.
- **Desligue conexões que não está usando** (`/mcp` ou no **+** → Connectors).
- **Pedido específico** ("resuma as vendas de setembro da aba Vendas") gasta menos que pedido vago ("analise tudo").
- **Plan mode** em tarefa grande evita refazer.
- `/usage` mostra quanto do plano você já usou.

---

## 12. Quando travar

| Problema | O que fazer |
|---|---|
| A skill não aparece no `/` | A pasta escolhida no app é a errada, ou a conversa foi aberta antes de a skill existir. Abra uma conversa nova com a pasta certa |
| `skill-creator` ou `pdf` sumiram | Digite `/skills`. Se faltar, ligue nas configurações de skills do claude.ai e reabra o app |
| O conector não aparece | Confira se está ligado em claude.ai → Conectores, com a mesma conta do app. Reabra o app |
| No Windows, o Claude não enxerga a pasta do ZIP | Clicar duas vezes no ZIP só mostra o conteúdo. Clique com o direito → Extrair tudo |
| A resposta ficou ruim | Faltou contexto. Diga o que ele não sabia, aponte o arquivo com `@` ou peça para ele te entrevistar antes |
| Ele inventou um dado | Peça a fonte. Coloque no CLAUDE.md: "sem fonte, escreva [a confirmar]" |
| Acabou o limite do plano | Espere a janela renovar. Enquanto isso, organize a pasta à mão |
| Deu um erro que você não entende | Cole o erro e pergunte: "deu este erro, o que eu faço?" |

Perdeu o fio numa pasta? Pergunte: `o que falta?`.

---

## 13. Banco de ideias para a sua empresa

Para o Claude: use esta lista como ponto de partida, sempre adaptando ao setor e às ferramentas do aluno. Para cada ideia, diga qual peça entra (skill, MCP, rotina, subagente) e o primeiro passo.

**Vendas e atendimento**
- Skill `/proposta`: recebe o pedido do cliente e monta a proposta com a sua tabela de preços e o seu tom. (skill + arquivo de preços em `memoria/`)
- Skill `/orcamento`: calcula orçamento com as regras de uma planilha, como o buffet da Lanchonete Bom Pedaço. (skill + MCP do Drive)
- Respostas prontas para as 20 perguntas mais comuns de clientes, no tom da marca. (arquivo em `memoria/` + skill)
- Resumo diário de oportunidades paradas no CRM, com sugestão de próximo passo. (MCP do CRM + tarefa agendada)

**Financeiro e gestão**
- Resumo semanal de vendas para os sócios: o que subiu, o que caiu e possíveis porquês. (MCP da planilha + tarefa agendada toda segunda)
- Conferência de contas a pagar e a receber da semana. (planilha + tarefa agendada)
- Análise de margem por produto: o que mais vende nem sempre é o que mais dá lucro. (planilha + pergunta direta)

**Operação e equipe**
- `/resumir-reuniao`: decisões, tarefas com responsável e prazo. (skill da aula)
- Manual de processo: você explica falando (ou cola uma transcrição) e a IA escreve o passo a passo. (grill-me + skill)
- Onboarding de funcionário novo: a pasta do cérebro responde dúvidas sobre como a empresa funciona. (pasta + CLAUDE.md)
- Checklist de abertura e fechamento da loja, com registro. (skill + arquivo em `controle/`)

**Marketing**
- Calendário de conteúdo mensal com a sua marca. (`/criar-conteudo` da aula)
- Transformar um depoimento de cliente em post, carrossel e roteiro de vídeo. (skill + `humanizer`)
- Monitorar o que os concorrentes publicaram na semana. (`/mapear-concorrentes` + tarefa agendada)
- Página de vendas nova para cada oferta ou campanha. (`/criar-pagina`)

**Você, dono**
- Preparar reuniões: "amanhã tenho reunião com o fornecedor X, o que eu preciso saber?". (pasta + e-mail/agenda via MCP)
- Explicar um assunto novo do seu mercado: `/eli5`.
- Revisar um contrato e listar os pontos de atenção antes de mostrar ao advogado. (anexo + pergunta; a revisão final é do advogado)

**Como escolher por onde começar:** pegue a tarefa que (1) se repete toda semana, (2) tem regra clara e (3) você consegue conferir se ficou certa. Monte uma coisa por vez: primeiro a skill funcionando na mão, depois a conexão, depois a rotina.

---

## 14. Entrevista para achar a sua primeira automação

Para o Claude: quando o aluno pedir ideias, conduza esta entrevista, **uma pergunta por vez**, e no fim entregue um plano curto.

1. Descreva a sua semana: quais tarefas se repetem?
2. Dessas, qual toma mais tempo? Quanto, mais ou menos, por semana?
3. Onde estão os dados dessa tarefa? (planilha, sistema, WhatsApp, e-mail, papel)
4. Quem confere se ficou certo? Como você sabe que ficou bom?
5. O que acontece se sair errado? (baixo risco: rascunho interno · alto risco: vai para cliente ou mexe em dinheiro)
6. Com que frequência precisa rodar?

**Entrega** (salve em `entregas/plano-primeira-automacao.md`):
- A tarefa escolhida e por quê.
- Peças: qual skill, qual conexão (MCP, CLI ou API), se vira rotina.
- Os 3 primeiros passos, cada um testável em uma conversa.
- O critério de "ficou bom".
- O que continua com o humano (aprovar, enviar, decidir).

Regra: tarefa de alto risco começa sempre com a IA fazendo o **rascunho** e você aprovando.

---

## 15. Plano de segunda-feira

O combinado do fim da imersão: escolha **uma de cada**.
- [ ] **1 fase pela metade:** termine uma fase da pasta da tarde que ficou incompleta, ou refaça uma com a informação certa.
- [ ] **1 conexão:** ligue uma ferramenta que você usa todo dia (planilha, agenda, CRM).
- [ ] **1 skill:** transforme a tarefa que você mais repete numa skill.

---

## 16. Links

| O quê | Onde |
|---|---|
| Documentação oficial do Claude Code | https://code.claude.com/docs |
| Baixar o app do Claude | https://claude.com/download |
| Conectores da sua conta | https://claude.ai/customize/connectors |
| Diretório de conectores | https://claude.ai/directory |
| Rotinas na nuvem | https://claude.ai/code/routines |
| Skills prontas | https://skills.sh |
| Skills oficiais da Anthropic | https://github.com/anthropics/skills |
| Pastas da imersão (manhã e tarde) | https://github.com/santanalc/imersao-ia-empresarios |
| Portal do aluno | https://ia-para-empresarios-v2.vercel.app |

---

## Glossário rápido

- **LLM:** o modelo de linguagem, o "motor" que prevê a próxima palavra.
- **Claude Code:** o Claude com acesso a uma pasta do seu computador.
- **Projeto:** uma pasta onde o Claude trabalha.
- **Contexto:** tudo o que a IA tem na mão na hora de responder.
- **Janela de contexto:** o tamanho máximo desse "tudo". Quando enche, ela resume.
- **MCP:** padrão aberto para ligar a IA a ferramentas. O "cabo USB".
- **Conector:** um MCP com tela de configuração no app.
- **CLI:** programa de linha de comando de uma ferramenta.
- **API:** o endereço técnico por onde programas conversam com uma ferramenta.
- **Skill:** processo ensinado uma vez, guardado num `SKILL.md`.
- **CLAUDE.md:** a regra da casa, lida no começo de toda conversa naquela pasta.
- **Auto memory:** notas que o próprio Claude salva sobre você e o projeto.
- **Agente:** a IA executando uma tarefa de várias etapas com ferramentas.
- **Subagente:** agente auxiliar com contexto próprio, chamado pelo principal.
- **Harness:** o conjunto que direciona o agente: regras, memória, skills e conexões numa pasta.
- **Orquestrar:** dividir o trabalho entre agentes e aprovar o resultado.
- **Hook:** gatilho que roda sempre num momento fixo.
- **Plugin:** pacote com skills, subagentes, hooks e conexões.
- **Rotina:** tarefa agendada que roda sozinha.
- **Prompt injection:** texto de fora (e-mail, página) tentando dar ordens à IA.
- **`[a confirmar]`:** o que a IA escreve quando não tem fonte, em vez de inventar.

---

Material da imersão IA para empresários · Lucas Santana · Instagram @lucasantanas_
