# Imersão IA para empresários · Tarde: o cérebro da sua empresa

Esta pasta vira o cérebro da sua empresa dentro do Claude Code. Você responde 7 perguntas, a IA pesquisa a fundo o que é público sobre o seu negócio e, fase por fase, monta o estudo da empresa e as primeiras entregas: oferta, página de vendas e conteúdo. Tudo aparece num relatório só, o `RESULTADO.html`, que cresce a cada comando.

As skills já estão dentro da pasta (em `.claude/skills/`) e funcionam assim que você abre a pasta no Claude Code.

---

## Primeiro, veja como fica no fim

Abra `exemplo-forno-da-vila/RESULTADO.html` no navegador (clique duas vezes no arquivo). É uma padaria **fictícia** que passou pelas 6 fases. Os arquivos que a IA produziu para ela estão na mesma pasta: `pesquisa/`, `entregas/`, `memoria/`.

## Como começar

1. Descompacte o ZIP na **Área de Trabalho** e renomeie a pasta `imersao-tarde` com o nome da sua empresa (ex.: `padaria-sao-jorge`).
2. Abra o app do Claude → aba **Code** → escolha a pasta.
3. Digite `/instalar` e responda as 7 perguntas.

Parou no meio? Digite `o que falta?`.

## A trilha

| # | Comando | O que faz | Tempo |
|---|---|---|---|
| 1 | `/instalar` | 7 perguntas sobre a empresa; cria o `RESULTADO.html` | 6 min |
| 2 | `/mapear-empresa` | Estudo a fundo: a empresa, o mercado, o cliente, gargalos e oportunidades | 10 min |
| 3 | `/mapear-concorrentes` | Quem disputa o seu cliente e onde está o espaço vazio | 6 min |
| 4 | `/criar-oferta` | Proposta de valor, oferta e roteiro de venda | 6 min |
| 5 | `/criar-pagina` | Página de vendas com a sua marca | 8 min |
| 6 | `/criar-conteudo` | Pilares, 12 pautas, calendário e 1 carrossel pronto | 8 min |

Depois da fase 2, as fases 3 a 6 rodam em qualquer ordem. A cada fase, atualize o `RESULTADO.html` no navegador: uma seção nova aparece.

**Na aula, em 3 blocos:**

| Bloco | Comandos | Ficou bom se… |
|---|---|---|
| A · A base | `/instalar` → `/mapear-empresa` | você lê o diagnóstico e acha 1 coisa sobre a sua empresa que nunca tinha visto assim |
| B · Contra quem e o que vender | `/mapear-concorrentes` → `/criar-oferta` | você reconhece os concorrentes e diria a proposta de valor para um cliente |
| C · Colocar na rua | `/criar-pagina` → `/criar-conteudo` | você mandaria a página para um cliente e postaria o carrossel esta semana |

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
```

**Privacidade:** `memoria/numeros.md` e `dados/` ficam só no seu computador e não aparecem no `RESULTADO.html`. Não suba esta pasta preenchida para lugar público.

## Terminou? Vá além

- Crie uma skill para a tarefa que você mais repete: `Use a skill-creator para criar uma skill que…`
- Conecte a sua planilha de vendas pelo Google Drive (MCP) e solte relatórios em `dados/`.
- Peça o carrossel em imagens: `gera as lâminas do carrossel em PNG`.
- Corrija algo numa fase, rode de novo e veja o relatório mudar.
- Ache skills prontas em [skills.sh](https://skills.sh).

## Quando travar

1. Digite `o que falta?`.
2. Pergunte ao vizinho.
3. Post-it vermelho: um monitor vem até você.

Material da imersão com Lucas Santana · Instagram [@lucasantanas_](https://www.instagram.com/lucasantanas_/)
