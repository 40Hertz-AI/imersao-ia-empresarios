# Cérebro da empresa

Uma pasta que vira o cérebro da sua empresa dentro do Claude Code. Você responde algumas perguntas, a IA pesquisa o que é público, e fase por fase a pasta monta o mapa completo da sua empresa: quem ela é, para quem vende, contra quem compete, os números, o comercial, a equipe e a oferta. No fim, você abre o `MAPA.html` e vê tudo numa página.

Com esse cérebro pronto, a IA passa a fazer proposta, carrossel e apresentação **com o contexto da sua empresa**, e não mais genéricos.

## Como começar

1. Copie esta pasta e dê o nome da sua empresa (ex.: `padaria-sao-jorge`).
2. Abra o app do Claude → aba **Code** → escolha a pasta.
3. Digite `/instalar`.

Parou no meio? Digite "o que falta?". Ele lê o progresso e diz o próximo passo.

## A trilha

| # | Comando | O que faz | Tempo |
|---|---|---|---|
| 0 | `/instalar` | 6 perguntas rápidas sobre você e a empresa | 5 min |
| 1 | `/mapear-empresa` | Lê o seu site e as redes: o que você vende, a marca, o que falta | 5 min |
| 2 | `/mapear-nicho` | Quem é o seu cliente ideal, as dores dele, como ele fala | 6 min |
| 3 | `/mapear-concorrentes` | Quem disputa o seu cliente e onde está o espaço vazio | 7 min |
| 4 | `/mapear-numeros` | Faturamento, ticket, margem: o que você sabe e o que falta medir | 8 min |
| 5 | `/mapear-comercial` | Como o cliente chega, onde você perde venda | 8 min |
| 6 | `/mapear-equipe` | Quem faz o quê e o que dá para a IA assumir | 8 min |
| 7 | `/criar-oferta` | Proposta de valor, oferta e roteiro de vendas | 8 min |
| 8 | `/mapa-completo` | `MAPA.html`: a empresa inteira numa página | 5 min |

**Entregas** (depois da fase 3): `/criar-proposta` (proposta comercial), `/criar-carrossel` (post para Instagram), `/criar-slides` (apresentação da empresa).

## As pastas

```
memoria/     quem é a empresa, como fala, o foco de agora
controle/    em que fase você está
pesquisa/    o que é público: empresa, nicho, concorrentes
negocio/     o que só você sabe: números, comercial, equipe, oferta   (privado)
marca/       cores, fontes, logo, tom de voz
conteudo/    o que a IA produz para você
dados/       solte aqui planilhas e PDFs                              (privado)
```

**Privacidade:** `negocio/` e `dados/` ficam só no seu computador. Não suba esta pasta preenchida para lugar público.

## Depois do mapa

- **Conecte mais coisas (MCP):** a planilha de vendas no Google, a agenda, o CRM. Quanto mais o cérebro vê, melhor ele ajuda.
- **Ache skills prontas:** peça "procure uma skill para <tarefa>" (skill `find-skills`).
- **Crie as suas:** tarefa que você repete toda semana vira skill com a `skill-creator`.
