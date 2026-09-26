# IA para empresários: material da imersão

Aqui está tudo o que você vai usar na parte da manhã da imersão com o Lucas Santana: as skills e o roteiro do que você vai fazer.

Não precisa decorar nada. Na hora, você acompanha na tela grande e faz no seu computador, um passo por vez.

---

## Baixar tudo de uma vez

[Download da pasta da imersão (ZIP)](https://github.com/santanalc/imersao-ia-empresarios/archive/refs/heads/main.zip): skills, planilha e este guia. Descompacte na Área de Trabalho.

---

## Antes do dia (leva uns 15 minutos)

1. **Assine o Claude Pro** em [claude.ai](https://claude.ai). O plano gratuito não dá acesso ao Claude Code.
2. **Instale o app do Claude** para computador (Mac ou Windows) e entre com a sua conta.
3. **Instale o Node.js** em [nodejs.org](https://nodejs.org) (botão da versão "LTS"). Ele é necessário para instalar as skills.
4. **Tenha o Google Chrome** e uma **conta Google pessoal**. Conta Google da empresa às vezes é bloqueada pelo administrador.
5. **Teste:** abra o app do Claude, vá na aba **Code**, escolha qualquer pasta e escreva "oi". Se ele responder, está pronto.
6. **Confira as skills da Anthropic:** ainda no Claude Code, digite `/skills`. Na parte **claude.ai sync** devem aparecer `skill-creator` e `pdf`. Se o `skill-creator` não aparecer, ligue a skill nas configurações de skills do [claude.ai](https://claude.ai) e abra o Claude Code de novo.

Travou em algum passo? Responda o e-mail da imersão antes do dia.

---

## Como a manhã funciona

A manhã é para aprender a usar o Claude Code. **Não tem nada da sua empresa ainda**: você vai trabalhar em coisas sobre você mesmo. A empresa entra à tarde.

O ritmo de cada parte:

1. O Lucas explica a ideia em poucos minutos.
2. Vocês fazem junto, um passo por vez.
3. **Post-it verde** na tampa do notebook = deu certo. **Vermelho** = travou. Um monitor vai até você.
4. No fim, "o que reparar": as 3 coisas que valem levar para casa.

Os prompts ficam neste arquivo. **Copie e cole**, não precisa digitar.

Tudo o que você criar fica numa pasta só: `imersao`, na sua Área de Trabalho.

---

## Fase 1: o básico do Claude Code e o modelo

**A ideia:** o Claude Code é o Claude com acesso a uma pasta do seu computador. **Projeto = uma pasta.** Ele pede permissão antes de mexer em qualquer coisa.

**O que você faz:**

1. Crie uma pasta chamada `imersao` na Área de Trabalho.
2. No app do Claude, aba **Code**, escolha a pasta `imersao`.
3. Pergunte:
   ```
   O que você consegue fazer nesta pasta?
   ```
4. Agora gere algo de verdade. Cole o texto abaixo e, no fim, a sua bio do LinkedIn (ou 3 linhas sobre você):
   ```
   Crie o arquivo cartao.html, meu cartão de visita digital: nome, o que eu faço e 3 links. Visual limpo e elegante. Minha bio:
   ```
5. Abra o `cartao.html` no navegador (clique duas vezes no arquivo dentro da pasta).
6. Troque o modelo e o esforço: digite `/model` e escolha outro modelo; depois `/effort` e suba o esforço. Então peça:
   ```
   Refaça o cartão em cartao-v2.html
   ```
7. Abra os dois lado a lado. Qual ficou melhor?

✅ **Pronto quando:** você tem `cartao.html` e `cartao-v2.html` na pasta.

**O que reparar:** o resultado é um arquivo seu, na sua pasta · modelo mais forte é mais lento e gasta mais do seu limite · comece no modelo padrão e suba só quando ele errar.

---

## Fase 2: MCP, ligando o Claude às suas ferramentas

**A ideia:** MCP é como um cabo USB. Ele liga a IA às ferramentas que você já usa (Agenda, Drive, Planilhas, Docs). Com ele, o Claude sai da pasta e age nas suas ferramentas.

**O que você faz:**

1. **Conectar o Google:** em [claude.ai](https://claude.ai) → Configurações → **Conectores** → conecte **Google Drive** e **Google Agenda** com a sua conta Google. Volte para o Claude Code.
2. **Aquecimento com a Agenda:**
   ```
   O que eu tenho na agenda esta semana?
   ```
   ```
   Crie um evento amanhã às 10h chamado "Revisar o que aprendi de IA"
   ```
   Abra a agenda no celular e veja o evento lá.
3. **Planilha:** siga o passo a passo em [`planilha/`](planilha/). Em resumo:
   - baixe a `lanchonete-bom-pedaco.xlsx` (dados fictícios de uma lanchonete);
   - importe no Google Planilhas: [sheets.new](https://sheets.new) → **Arquivo → Importar → Fazer upload** → **Substituir planilha**;
   - copie o link da planilha e mande para o Claude com os pedidos que estão lá: o que ele vê, o que mais vende × o que mais dá lucro, mês a mês, balcão × delivery, o produto novo;
   - no fim, peça o `relatorio.html` e o Google Doc "Relatório Bom Pedaço" no seu Drive.

✅ **Pronto quando:** o evento apareceu no celular e o relatório está no seu Drive.

**O que reparar:** ele pede permissão antes de agir · conecte só o que você precisa · ele lê a sua planilha e cria um arquivo novo, sem mexer no original.

---

## Fase 3: skills

**A ideia:** skill é um arquivo que ensina o Claude a fazer uma tarefa do jeito certo. Em cima, **quando usar**. Embaixo, **como fazer**. Você ensina uma vez e usa sempre.

Tem 3 jeitos de ter uma skill:

1. **Receber pronta**: este repositório.
2. **Instalar da internet**: no [skills.sh](https://skills.sh) tem milhares. Olhe quem fez e quantas pessoas instalaram antes de confiar.
3. **Criar a sua**: com a skill `skill-creator`, que já vem com a sua conta do Claude.

### Instalar as skills

Cole no Claude Code:

```
Rode estes dois comandos no terminal e me avise quando terminar. Depois liste as skills instaladas.
1. npx -y skills add https://github.com/santanalc/imersao-ia-empresarios -g -a claude-code -s '*' -y
2. npx -y skills add https://github.com/anthropics/skills -s pptx -g -a claude-code -y
```

Aceite quando ele pedir permissão. Depois **feche e abra de novo** a conversa no Claude Code e digite `/`: as skills aparecem na lista.

| Skill | O que faz |
|---|---|
| `eli5` | Explica qualquer coisa como se você tivesse 5 anos |
| `grill-me` | Te entrevista com perguntas antes de começar um trabalho |
| `frontend-design` | Deixa páginas e apresentações com visual de designer |
| `humanizer` | Tira a "cara de IA" do texto |
| `find-skills` | Procura uma skill para você quando você tem uma ideia |
| `pptx` | Cria apresentações em PowerPoint (oficial da Anthropic, instalada pelo comando 2) |
| `skill-creator` | Cria uma skill nova conversando (**já vem** com a sua conta do Claude) |
| `pdf` | Cria e lê PDFs (**já vem** com a sua conta do Claude) |

Nesta fase você usa **duas conversas**: uma para a apresentação sobre você e outra, nova, para o ELI5. Um assunto por conversa: a IA se confunde menos.

### Sessão 1: uma apresentação sobre você, por partes

**Passo 1: a entrevista.**

```
/grill-me Quero criar uma apresentação pessoal. Me entreviste: faça 5 perguntas sobre mim, uma rodada por vez. No fim, salve tudo em sobre-mim.md.
```

Responda com calma: quanto melhor a resposta, melhor a apresentação. Depois abra o `sobre-mim.md` e leia. É tudo o que a IA sabe sobre você.

**Passo 2: o seu design system.**

Design system é o "manual visual": as cores, as fontes e o estilo que se repetem em tudo.

1. Abra [dribbble.com/search/brand](https://dribbble.com/search/brand).
2. Procure um trabalho com cores de que você gosta.
3. Tire um print da tela.
4. Volte para a **mesma** conversa, cole o print (Ctrl+V no Windows, Cmd+V no Mac) e peça:

```
Crie um design system sobre mim usando esta paleta de cores: cores, fontes e estilo. Salve em design-system.md.
```

O Dribbble é só inspiração de cor. Não é para copiar o trabalho de ninguém.

**Passo 3: a apresentação.**

```
Crie a minha apresentação pessoal de 5 slides com o sobre-mim.md e o design-system.md. Use a skill frontend-design para o visual, a humanizer no texto e a skill pptx para gerar apresentacao.pptx.
```

Na primeira vez, ele pode pedir para instalar uma biblioteca de PowerPoint (`pptxgenjs`). Aceite. Depois abra o `apresentacao.pptx`.

**Passo 4: mandar para o Google Apresentações (MCP de novo).**

```
Suba a apresentacao.pptx no meu Google Drive, convertida para Google Apresentações, e me mande o link.
```

Abra o link. Repare: a skill criou a apresentação e o MCP levou ela para a sua ferramenta.

✅ **Pronto quando:** você tem `sobre-mim.md`, `design-system.md` e a sua apresentação abrindo no Google Apresentações. Dois voluntários mostram no telão.

### Sessão 2: ELI5

Abra uma **conversa nova** e peça:

```
/eli5 me explique o relatorio.html
```

Depois escolha um assunto:

```
/eli5 como funciona uma câmera fotográfica
```
```
/eli5 como funciona o motor de um carro
```

Repare: o assunto muda, mas o jeito de explicar é sempre o mesmo. Isso é a skill trabalhando.

### Parte 3: o Lucas cria uma skill ao vivo

Você assiste (ou faz junto, se quiser). O pedido:

```
Use a skill-creator para criar a skill post-linkedin: eu passo um assunto, ela pesquisa na internet uma notícia recente sobre ele e escreve um post de LinkedIn no meu tom, citando o link da fonte. Não invente número nem notícia.
```

**O que reparar:** primeiro procure uma skill, depois crie · uma skill usou o arquivo da outra, e várias trabalharam juntas: isso é o começo de um agente · skill é um processo que você ensina uma vez.

---

## Fase 4: contexto

Nesta parte você só assiste. O Lucas mostra por que tudo o que funcionou hoje funcionou: **porque a IA tinha contexto**. A sua bio no cartão, a explicação da lanchonete, as respostas do grill-me, o print das cores.

À tarde, vocês vão dar à IA o contexto da empresa inteira.

---

## Checklist antes do almoço

- [ ] `cartao.html`
- [ ] Google conectado e evento na agenda
- [ ] `relatorio.html` e o Google Doc no Drive
- [ ] Skills instaladas (digite `/` para ver)
- [ ] `sobre-mim.md` e `design-system.md`
- [ ] Apresentação no Google Apresentações

Faltou algum? Post-it vermelho: um monitor ajuda você no almoço.

---

## Quando travar

1. Leia de novo o passo em que você está.
2. Pergunte ao vizinho.
3. Post-it vermelho: um monitor vem até você.

Dica: você também pode perguntar ao próprio Claude: "deu este erro, o que eu faço?".

---

## Créditos e licenças

As skills deste repositório vêm de projetos abertos, com as licenças originais dentro de cada pasta:

- `grill-me` e `grilling`: [mattpocock/skills](https://github.com/mattpocock/skills) (MIT)
- `find-skills`: [vercel-labs/skills](https://github.com/vercel-labs/skills) (MIT)
- `frontend-design`: [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0)
- `humanizer`: [blader/humanizer](https://github.com/blader/humanizer) (MIT)
- `eli5`: escrita para esta imersão

Não ficam aqui: `pptx` (instalada direto do repositório oficial da Anthropic) e `skill-creator` e `pdf` (já vêm com a conta do Claude, pela sincronização das skills da Anthropic).
