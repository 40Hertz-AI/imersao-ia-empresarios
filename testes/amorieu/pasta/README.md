# Imersão IA para empresários · Minha empresa: o cérebro da sua empresa

Esta pasta vira o cérebro da sua empresa dentro do Claude Code. Você responde 7 perguntas, a IA pesquisa a fundo o que é público sobre o seu negócio e, fase por fase, monta o estudo da empresa, o mapa do seu trabalho, as automações e as primeiras entregas: oferta, página de vendas e conteúdo. Tudo aparece num relatório só, o `RESULTADO.html`, que cresce a cada comando.

As skills já estão dentro da pasta (em `.claude/skills/`) e funcionam assim que você abre a pasta no Claude Code.

---

## Primeiro, veja como fica no fim

Abra `exemplo-forno-da-vila/RESULTADO.html` no navegador (clique duas vezes no arquivo). É uma padaria **fictícia** que passou pelas fases da empresa (oferta, página e conteúdo incluídos). Os arquivos que a IA produziu para ela estão na mesma pasta: `pesquisa/`, `entregas/`, `memoria/`.

## Como começar

1. Descompacte o ZIP na **Área de Trabalho**. A pasta se chama `minha-empresa`; se quiser, renomeie com o nome da sua empresa (ex.: `padaria-sao-jorge`).
2. Abra o app do Claude → aba **Code** → escolha a pasta. Ou, no terminal, entre na pasta com `cd` e digite `claude`.
3. Digite `/instalar` e responda as 7 perguntas.

Parou no meio? Digite `o que falta?`.

## A trilha

| # | Comando | O que faz | Tempo |
|---|---|---|---|
| 1 | `/instalar` | 7 perguntas sobre a empresa; cria o `RESULTADO.html` | 6 min |
| 2 | `/mapear-empresa` | Estudo a fundo: a empresa, o mercado, o cliente, gargalos e oportunidades | 10 min |
| 3 | `/mapear-concorrentes` | Quem disputa o seu cliente e onde está o espaço vazio | 6 min |
| 4 | `/sobre-mim` | Entrevista sobre o **seu** trabalho: rotina, processos, ferramentas, dores. Grava o mapa em `memoria/sobre-mim.md` | 15 min |
| 5 | `/sugerir-automacoes` | Lê a pasta (e o mapa do `/sobre-mim`) e sugere automações, rotinas e skills por impacto e esforço, cada uma com o próximo passo | 5 a 10 min |
| 6 | `/criar-oferta` | Proposta de valor, oferta e roteiro de venda | 6 min |
| 7 | `/criar-pagina` | Página de vendas completa com a sua marca, formulário de pedido e mapa | 10 min |
| 8 | `/criar-conteudo` | Pilares, 12 pautas, calendário, 1 carrossel e 2 posts em HTML que abrem no navegador, cada lâmina com o botão **Gerar prompt de imagem** | 10 min |

Sem site? Arraste um print do Instagram ou o logo para a conversa e digite `/marca`: tudo sai com as cores da sua empresa.

**Extra** (roda a qualquer hora):

| Comando | O que faz | Tempo |
|---|---|---|
| `/frontend-design` | Skill de design: melhora o visual da página ou dos posts. Ex.: `/frontend-design melhore entregas/pagina-de-vendas.html sem trocar as cores da marca` | 5 min |

**Os posts são HTML.** Abra `entregas/posts/carrossel-1.html` no navegador e passe as lâminas com as setas. Quer uma imagem? Clique em **Gerar prompt de imagem**: o prompt da lâmina na tela é copiado, pronto para colar no ChatGPT. Para postar: abra cada lâmina sozinha (`carrossel-1.html?n=1`, `?n=2`...) em tela cheia e tire um print (Windows: **Win+Shift+S**; Mac: **Cmd+Shift+4**).

Depois da fase 2, as fases 3 a 8 rodam em qualquer ordem. A cada fase, atualize o `RESULTADO.html` no navegador: uma seção nova aparece.

**Na aula:**

| Quando | Comandos | Ficou bom se… |
|---|---|---|
| Antes do almoço · a empresa | `/instalar` → `/mapear-empresa` → `/mapear-concorrentes` | você acha 1 coisa sobre a sua empresa que nunca tinha visto assim e reconhece 2 concorrentes |
| Antes do almoço · você | `/sobre-mim` → `/sugerir-automacoes` | você sai com 3 coisas para a IA fazer por você já na próxima semana |
| Depois do almoço · marketing e vendas | `/criar-oferta` → `/criar-pagina` → `/criar-conteudo` | você diria a oferta a um cliente, mandaria a página e postaria o carrossel esta semana |

## As pastas

```
memoria/              o que você contou: empresa, números, foco, jeito de falar
marca/                cores, fontes e logo (salve o logo em marca/logo.png)
pesquisa/             o que a internet diz: empresa, mercado, cliente, concorrentes
entregas/             oferta, página de vendas, conteúdo
controle/             em que fase você está + o modelo do relatório
dados/                solte aqui planilhas e PDFs                    (privado)
RESULTADO.html        o relatório da empresa (nasce no /instalar)
exemplo-forno-da-vila/  o exemplo pronto, só para consulta
.claude/              as skills
```

No Mac, as pastas que começam com ponto (como `.claude`) ficam escondidas no Finder (**Cmd+Shift+.** mostra). Elas estão lá, e o Claude Code as encontra sozinho.

**Privacidade:** `memoria/numeros.md` e `dados/` ficam só no seu computador e não aparecem no `RESULTADO.html`. Não suba esta pasta preenchida para lugar público.

## Terminou? Vá além

- Crie uma skill para a tarefa que você mais repete: `Use a skill-creator para criar uma skill que…`
- Conecte a sua planilha de vendas pelo Google Drive (MCP) e solte relatórios em `dados/`.
- Corrija algo numa fase, rode de novo e veja o relatório mudar.
- Ache skills prontas em [skills.sh](https://skills.sh).

## Quando travar

1. Digite `o que falta?`.
2. Pergunte ao vizinho.
3. Post-it vermelho: um monitor vem até você.

## Créditos e licenças

- `frontend-design`: [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0), licença dentro da pasta da skill.
- `instalar`, `mapear-empresa`, `mapear-concorrentes`, `criar-oferta`, `criar-pagina`, `criar-conteudo`, `marca`, `sobre-mim` e `sugerir-automacoes`: escritas para esta imersão.

Material da imersão com Lucas Santana · Instagram [@lucasantanas_](https://www.instagram.com/lucasantanas_/)
