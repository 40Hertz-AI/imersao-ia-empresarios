# Imersão IA para empresários · Manhã

Esta pasta é o seu projeto da manhã. As skills já estão dentro dela (em `.claude/skills/`) e funcionam assim que você abre a pasta no Claude Code: não precisa instalar nada.

De manhã você aprende o Claude Code fazendo coisas **para você mesmo**. A empresa só entra à tarde, em outra pasta.

---

## Antes de começar

1. Descompacte o ZIP na **Área de Trabalho**. Fica uma pasta chamada `imersao-manha`.
2. Abra o app do Claude → aba **Code** → escolha a pasta `imersao-manha`.
3. Digite `/` e confira se as skills aparecem na lista: `eli5`, `grill-me`, `find-skills`, `frontend-design`, `humanizer`.

## Como a manhã funciona

1. O Lucas explica a ideia em poucos minutos.
2. Vocês fazem junto, um passo por vez.
3. **Post-it verde** na tampa do notebook = deu certo. **Vermelho** = travou, e um monitor vem até você.

Os prompts estão neste arquivo. **Copie e cole**, não precisa digitar. Perdeu o fio? Pergunte ao Claude: `o que falta?`

```
imersao-manha/
├── README.md            este guia
├── CLAUDE.md            as regras que o Claude segue nesta pasta
├── .claude/skills/      as skills da manhã (já funcionando)
├── planilha/            a planilha da Lanchonete Bom Pedaço (fase 2)
└── exemplos/            a reunião usada na demonstração (fase 3)
```

---

## Fase 1: o Claude Code

**A ideia:** o Claude Code é o Claude com acesso a uma pasta do seu computador. **Projeto = uma pasta.** Tudo o que ele cria vira arquivo de verdade ali dentro, e ele pede permissão antes de criar, apagar ou rodar qualquer coisa.

Com a pasta aberta, pergunte:

```
O que você consegue fazer nesta pasta?
```

✅ **Pronto quando:** ele respondeu. Esse é o teste de login do dia.

---

## Fase 2: MCP, ligando o Claude ao seu Google

**A ideia:** MCP é o cabo USB da IA. Liga o Claude às ferramentas que você já usa. Com ele, a IA sai da pasta e age no seu Google Drive.

**1. Conectar o Google Drive**

[claude.ai](https://claude.ai) → Configurações → **Conectores** → ligue o **Google Drive** e permita com a sua conta Google. Volte ao Claude Code: a conexão aparece lá sozinha.
Conta Google da empresa bloqueada pelo administrador? Use a pessoal.

**2. Levar a planilha para o Google (8 min)**

A planilha está em `planilha/lanchonete-bom-pedaco.xlsx`. Os dados são **fictícios**, criados para a aula.

1. Abra [sheets.new](https://sheets.new).
2. **Arquivo → Importar → Fazer upload** → escolha `lanchonete-bom-pedaco.xlsx` (dentro da pasta `planilha`).
3. Em "Local de importação", escolha **Substituir planilha** → **Importar dados**.
4. Renomeie para **Lanchonete Bom Pedaço** (clique no título "Planilha sem título").
5. Copie o link da planilha na barra do navegador.

**3. Pergunte à planilha (10 min).** Uma pergunta de cada vez, na mesma conversa. Troque `[LINK]` pelo seu link:

```
Leia esta planilha do meu Google Drive: [LINK]. O que tem nela?
```
```
Qual produto mais vendeu?
```
```
Qual mês vendeu mais e qual vendeu menos?
```
```
Vende mais no balcão ou no delivery?
```
```
Qual produto dá mais lucro?
```
```
Salve um Google Doc chamado "Resumo Bom Pedaço" no meu Drive com essas respostas.
```

Compare a resposta da pergunta 2 com a da 5.

**4. Crie um orçamento (7 min).** A lanchonete também faz buffet. Os pacotes, os extras e as regras de preço estão na aba **Buffet** da mesma planilha. Na mesma conversa:

```
Um cliente pediu orçamento de buffet: aniversário no sábado, 17/10/2026, para 120 convidados, pacote Festa completa, com mesa de doces, 5 horas de festa, a 18 km da lanchonete. Consulte a aba Buffet da planilha e monte o orçamento seguindo as regras. Mostre a conta de cada item.
```
```
E se a festa fosse na quarta-feira, 21/10?
```
```
Salve esse orçamento como um Google Doc chamado "Orçamento Buffet 17/10" no meu Drive.
```

Você não explicou nenhuma regra de preço: ele leu da planilha.

✅ **Pronto quando:** o "Resumo Bom Pedaço" e o "Orçamento Buffet 17/10" estão no seu Drive.

**O que reparar:** ele pede permissão antes de agir · conecte só o que você precisa · ele lê a sua planilha e cria um arquivo novo, sem mexer no original.

---

## Fase 3: skills

**A ideia:** skill é um arquivo que ensina o Claude a fazer uma tarefa do jeito certo. Em cima, **quando usar**. Embaixo, **como fazer**. Você ensina uma vez e ele repete sempre.

Há 3 jeitos de ter uma skill:

1. **Receber pronta:** as desta pasta, em `.claude/skills/`.
2. **Instalar da internet:** no [skills.sh](https://skills.sh) tem milhares. Olhe quem fez e quantas pessoas instalaram antes de confiar.
3. **Criar a sua:** com a `skill-creator`, que já vem com a sua conta do Claude.

| Skill | O que faz | De onde vem |
|---|---|---|
| `eli5` | Explica qualquer assunto como se você tivesse 5 anos | nesta pasta |
| `grill-me` (+ `grilling`) | Te entrevista antes de começar um trabalho | nesta pasta |
| `frontend-design` | Deixa páginas e apresentações com visual de designer | nesta pasta |
| `humanizer` | Tira a "cara de IA" do texto | nesta pasta |
| `find-skills` | Procura uma skill pronta quando você tem uma ideia | nesta pasta |
| `skill-creator` | Cria uma skill nova conversando | já vem com a conta do Claude |
| `pdf` | Cria e lê PDFs | já vem com a conta do Claude |

Não aparecem `skill-creator` e `pdf`? Digite `/skills` e veja a parte **claude.ai sync**. Se faltar, ligue a skill nas configurações de skills do [claude.ai](https://claude.ai) e abra o Claude Code de novo.

**Regra: um assunto por conversa.** Trocou de assunto? Conversa nova (botão de nova conversa, ou `/clear`).

### Sessão 1: ELI5 (5 min)

Escolha um:

```
/eli5 como funciona o mercado financeiro
```
```
/eli5 como funciona o motor de um carro
```
```
/eli5 por que as estrelas brilham
```

O assunto muda, o jeito de explicar é sempre o mesmo. Isso é a skill trabalhando.

### Sessão 2: uma apresentação sobre você (conversa nova)

**Passo 1: a entrevista (7 min).**

```
/grill-me Quero criar uma apresentação pessoal. Me entreviste: faça 5 perguntas sobre mim, uma rodada por vez. No fim, salve tudo em sobre-mim.md.
```

Abra o `sobre-mim.md` e leia. É tudo o que a IA sabe sobre você.

**Passo 2: o seu design system (10 min).** Design system é o "manual visual": as cores, as fontes e o estilo que se repetem em tudo.

1. Abra [dribbble.com/search/brand](https://dribbble.com/search/brand) e escolha um trabalho com cores de que você gosta.
2. Tire um print da tela.
3. Na **mesma** conversa, cole o print (Ctrl+V no Windows, Cmd+V no Mac) e peça:

```
Crie um design system sobre mim usando esta paleta de cores: cores, fontes e estilo. Salve em design-system.md.
```

O Dribbble é só referência de cor: não copie o trabalho de ninguém.

**Passo 3: a apresentação (12 min).**

```
Crie a minha apresentação pessoal de 5 slides com o sobre-mim.md e o design-system.md. Use a frontend-design para o visual e a humanizer no texto. Gere em HTML: apresentacao.html.
```

Abra o `apresentacao.html` no navegador (clique duas vezes no arquivo).

**Passo 4: MCP de novo (5 min).** A skill criou, o MCP entrega.

```
Transforme a apresentacao.html em PDF e suba os dois arquivos no meu Google Drive. Me mande o link.
```

✅ **Pronto quando:** você tem `sobre-mim.md`, `design-system.md`, `apresentacao.html` e o PDF no seu Drive.

### O Lucas mostra: criar a sua skill

Você assiste (ou faz junto, se quiser):

```
Use a skill-creator para criar uma skill chamada resumir-reuniao: recebe a transcrição de uma reunião e devolve o resumo, as decisões, as tarefas com responsável e prazo, e o que ficou pendente.
```

Depois, o teste:

```
/resumir-reuniao exemplos/reuniao-bom-pedaco.md
```

**O que reparar:** primeiro procure uma skill, depois crie · uma skill usou o arquivo da outra, e várias trabalharam juntas: isso é o começo de um agente · skill é um processo que você ensina uma vez.

---

## Fase 4: contexto

Nesta parte você só assiste. O Lucas mostra por que tudo o que funcionou hoje funcionou: **porque a IA tinha contexto**. O link da planilha, as respostas do grill-me, o print das cores.

À tarde, vocês vão dar à IA o contexto da empresa inteira, em outra pasta.

---

## Checklist antes do almoço

- [ ] O Claude Code abriu a pasta e respondeu
- [ ] Google Drive conectado
- [ ] "Resumo Bom Pedaço" e "Orçamento Buffet 17/10" no Drive
- [ ] `sobre-mim.md` e `design-system.md`
- [ ] Apresentação em HTML e PDF no Drive

Faltou algum? Post-it vermelho: um monitor ajuda você no almoço.

## Quando travar

1. Leia de novo o passo em que você está.
2. Pergunte ao vizinho.
3. Post-it vermelho.

Você também pode perguntar ao próprio Claude: "deu este erro, o que eu faço?".

---

## Créditos e licenças

As skills vêm de projetos abertos, com a licença original dentro de cada pasta:

- `grill-me` e `grilling`: [mattpocock/skills](https://github.com/mattpocock/skills) (MIT)
- `find-skills`: [vercel-labs/skills](https://github.com/vercel-labs/skills) (MIT)
- `frontend-design`: [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0)
- `humanizer`: [blader/humanizer](https://github.com/blader/humanizer) (MIT)
- `eli5`: escrita para esta imersão

Material da imersão com Lucas Santana · Instagram [@lucasantanas_](https://www.instagram.com/lucasantanas_/)
