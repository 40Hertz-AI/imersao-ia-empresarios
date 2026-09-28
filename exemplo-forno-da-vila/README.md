# Cérebro da empresa

Uma pasta que vira o cérebro da sua empresa dentro do Claude Code. Você responde 7 perguntas, a IA pesquisa a fundo o que é público, e fase por fase monta o estudo do seu negócio e as primeiras entregas: oferta, página de vendas e conteúdo. Tudo aparece num relatório só, o `RESULTADO.html`, que cresce a cada comando.

## Como começar

1. Copie esta pasta e dê o nome da sua empresa (ex.: `padaria-sao-jorge`).
2. Abra o app do Claude → aba **Code** → escolha a pasta.
3. Digite `/instalar`.

Parou no meio? Digite "o que falta?".

## A trilha

| # | Comando | O que faz | Tempo |
|---|---|---|---|
| 1 | `/instalar` | 7 perguntas sobre a empresa; cria o `RESULTADO.html` | 6 min |
| 2 | `/mapear-empresa` | Estudo a fundo: a empresa, o mercado, o cliente, gargalos e oportunidades | 10 min |
| 3 | `/mapear-concorrentes` | Quem disputa o seu cliente e onde está o espaço vazio | 6 min |
| 4 | `/criar-oferta` | Proposta de valor, oferta e roteiro de venda | 6 min |
| 5 | `/criar-pagina` | Página de vendas com a sua marca | 8 min |
| 6 | `/criar-conteudo` | Pilares, 12 pautas, calendário e 1 carrossel pronto | 8 min |

Depois da fase 2, as fases 3 a 6 rodam em qualquer ordem.

## As pastas

```
memoria/     o que você contou: empresa, números, foco, jeito de falar
marca/       cores, fontes e logo (salve o logo em marca/logo.png)
pesquisa/    o que a internet diz: empresa, mercado, cliente, concorrentes
entregas/    oferta, página de vendas, conteúdo
controle/    em que fase você está + o modelo do relatório
dados/       solte aqui planilhas e PDFs                    (privado)
RESULTADO.html   o relatório da empresa
```

**Privacidade:** `memoria/numeros.md` e `dados/` ficam só no seu computador e não aparecem no `RESULTADO.html`. Não suba esta pasta preenchida para lugar público.

## Depois da trilha

- **Conecte mais coisas (MCP):** a planilha de vendas no Google, a agenda, o CRM.
- **Ache skills prontas:** peça "procure uma skill para <tarefa>" (skill `find-skills`).
- **Crie as suas:** tarefa que você repete toda semana vira skill com a `skill-creator`.
