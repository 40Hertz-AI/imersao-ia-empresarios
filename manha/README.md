# Imersão IA para empresários · Manhã

Esta pasta é o seu projeto da manhã. Você aprende o Claude Code em **6 passos**, usando uma empresa de mentira: a **Torra Viva Cafés Especiais**, uma torrefação de cafés especiais. Os dados dela são **fictícios de exemplo**, criados para a aula.

As skills já estão dentro da pasta (em `.claude/skills/`) e funcionam assim que você abre a pasta no Claude Code. Cada passo tem uma pasta em `passos/` com as instruções e os prompts prontos para copiar.

---

## Antes de começar: o que você precisa

- Um computador com **Windows 10 ou 11** ou **Mac** (macOS 13 ou mais novo) e internet.
- Uma conta do **Claude paga** (Pro, Max, Team ou Enterprise). O plano grátis não tem o Claude Code.
- Uma conta **Google** (para o passo 2). Se a da empresa for bloqueada, use a pessoal.
- Recomendado: **Node.js** ([nodejs.org](https://nodejs.org), versão LTS) para instalar skills da internet, e no Windows o **Git** ([git-scm.com/downloads/win](https://git-scm.com/downloads/win)).

## Começar em 5 passos

O passo a passo detalhado, tela por tela, no Windows e no Mac, está em [`passos/01-abrir-a-pasta/INSTRUCOES.md`](passos/01-abrir-a-pasta/INSTRUCOES.md). O resumo:

| | Windows | Mac |
|---|---|---|
| **1. Baixar** | No portal da aula, **Baixar a pasta torra-viva**. Em Downloads, botão direito no ZIP → **Extrair tudo** → Área de Trabalho | No portal, **Baixar a pasta torra-viva**. Em Downloads, dois cliques no ZIP e arraste a pasta `torra-viva` para a Mesa |
| **2. Abrir o terminal** | Menu Iniciar → digite `PowerShell` → abrir | **Cmd+Espaço** → digite `Terminal` → Enter |
| **3. Instalar** (só 1ª vez) | Cole o comando do Windows (abaixo) → Enter, depois feche e abra o PowerShell | Cole o comando do Mac (abaixo) → Enter, depois feche e abra o Terminal |
| **4. Entrar na pasta** | Abra a pasta no Explorador, clique na barra de endereço, digite `powershell` e Enter | Digite `cd ` (com espaço), arraste a pasta para o Terminal e Enter |
| **5. Abrir o Claude Code** | `claude` → Enter | `claude` → Enter |

Comando de instalação no **Windows** (PowerShell):

```powershell
irm https://claude.ai/install.ps1 | iex
```

Comando de instalação no **Mac** (Terminal):

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Na primeira vez ele pede o login (abre o navegador: entre com a conta do Claude e autorize) e pergunta se você confia nesta pasta: responda **Sim**.

Sem terminal? Use o **app do Claude** no computador: aba **Code** → escolha a pasta `torra-viva`.

**Mac:** a pasta `.claude` fica escondida no Finder (**Cmd+Shift+.** mostra). Ela está lá, e o Claude Code a encontra sozinho.

---

## Os 6 passos

| # | Passo | O que você faz |
|---|---|---|
| 1 | [Abrir a pasta](passos/01-abrir-a-pasta/INSTRUCOES.md) | Instala, abre esta pasta e faz a primeira pergunta |
| 2 | [Google Drive e planilhas](passos/02-google-drive-e-planilhas/INSTRUCOES.md) | Sobe a planilha da Torra Viva, conecta o Drive e pergunta aos dados |
| 3 | [Prompts que funcionam](passos/03-prompts-que-funcionam/INSTRUCOES.md) | Compara prompt ruim × prompt com Papel, Contexto, Tarefa e Formato |
| 4 | [Usar uma skill pronta](passos/04-usar-uma-skill-pronta/INSTRUCOES.md) | `/eli5` explica um conceito de negócio |
| 5 | [Criar uma skill](passos/05-criar-uma-skill/INSTRUCOES.md) | Cria a `/resposta-cliente` e testa com mensagens de clientes |
| 6 | [Páginas web com Artifacts](passos/06-paginas-web/INSTRUCOES.md) | Calculadora de orçamento, dashboard de vendas e apresentação como Artifacts no claude.ai (o dashboard e os slides com os tipos prontos) |

**Como cada passo funciona:** abra o `INSTRUCOES.md` do passo (dois cliques, ou peça ao Claude `abra as instruções do passo 3`), **copie e cole** os prompts, e confira o resultado. Marque o passo em `progresso.md`.

Perdeu o fio? Pergunte ao Claude: `o que falta?`

**Regra: um assunto por conversa.** Mudou de passo? Digite `/clear` (conversa nova).

## O que tem na pasta

```
torra-viva/
├── README.md          este guia
├── CLAUDE.md          as regras e o contexto da Torra Viva que o Claude lê sozinho
├── progresso.md       o checklist dos 6 passos
├── .claude/skills/    as skills da manhã (já funcionando)
├── dados/             vendas, produtos, clientes e regras de orçamento (fictícios) + a planilha .xlsx
├── passos/            as instruções de cada passo, com os prompts
└── meu-trabalho/      onde ficam os arquivos que você criar
```

## As skills desta pasta

| Skill | O que faz | Usada no passo |
|---|---|---|
| `eli5` | Explica qualquer assunto como se você tivesse 5 anos | 4 |
| `frontend-design` | Deixa páginas e apresentações com visual de designer | 6 |
| `humanizer` | Tira a "cara de IA" do texto | 6 |
| `find-skills` | Procura uma skill pronta na internet quando você tem uma ideia | extra |
| `grill-me` (+ `grilling`) | Te entrevista antes de começar um trabalho, para afinar o plano | extra |
| `skill-creator` | Ajuda a criar uma skill nova | 5 (vem com a conta do Claude, se estiver ligada) |

Não aparece a `skill-creator`? Digite `/skills`. Se faltar, ligue em claude.ai → Configurações → Capacidades e abra o Claude Code de novo. O passo 5 funciona sem ela.

## Quando travar

1. Leia de novo o passo em que você está.
2. Pergunte ao Claude: `deu este erro, o que eu faço?` (cole o erro).
3. Pergunte ao vizinho.
4. Post-it vermelho na tampa do notebook: um monitor vem até você.

## Terminou? Vá além

- Refaça o passo 6 com os dados da **sua** empresa: troque os arquivos de `dados/` por uma planilha sua (exportada em CSV).
- Crie uma skill para a tarefa que você mais repete no trabalho.
- À tarde, em outra pasta, a IA trabalha na sua empresa de verdade.

---

## Créditos e licenças

As skills vêm de projetos abertos, com a licença original dentro de cada pasta:

- `grill-me` e `grilling`: [mattpocock/skills](https://github.com/mattpocock/skills) (MIT)
- `find-skills`: [vercel-labs/skills](https://github.com/vercel-labs/skills) (MIT)
- `frontend-design`: [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0)
- `humanizer`: [blader/humanizer](https://github.com/blader/humanizer) (MIT)
- `eli5`: escrita para esta imersão

A Torra Viva Cafés Especiais, os clientes e todos os números são fictícios.

Material da imersão com Lucas Santana · Instagram [@lucasantanas_](https://www.instagram.com/lucasantanas_/)
