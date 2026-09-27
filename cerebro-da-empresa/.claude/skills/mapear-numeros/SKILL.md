---
name: mapear-numeros
description: Use após a pesquisa pública ou quando pedirem /mapear-numeros. Organiza faturamento, ticket, margem e clientes a partir de planilha ou de 6 perguntas (8 min).
---

# /mapear-numeros: a saúde da empresa em números

Fase 4 do mapa. **Privado.** A IA nunca estima número da empresa: o que o dono não souber fica `[não sei ainda]` com o jeito de medir.

## Escolher a fonte (uma pergunta)

"Como prefere passar os números?
1. Uma planilha na pasta `dados/`
2. O link de uma planilha no Google (precisa do Google conectado)
3. Respondendo 6 perguntas rápidas"

- **1 ou 2:** ler a planilha, dizer em 1 linha o que ela tem e calcular os indicadores abaixo. Se faltar algum, perguntar só esse.
- **3:** uma pergunta por vez. Aceitar faixa ("entre 50 e 80 mil").
  1. Faturamento médio por mês?
  2. Quanto um cliente gasta, em média, por compra (ticket médio)?
  3. Quantos clientes compram por mês?
  4. De cada R$ 100 vendidos, quanto sobra (margem)?
  5. Qual o maior custo da empresa?
  6. Quais os meses mais fortes e mais fracos?

## Escrever `negocio/04-numeros.md` (até 35 linhas)

```markdown
# Números: <Nome>
Fonte: <planilha X | respostas do dono> · Data: <AAAA-MM-DD>

## Indicadores   (tabela: indicador · valor · de onde veio)
## 3 leituras     (o que os números dizem, em linguagem simples)
## 3 perguntas que os números levantam
## O que medir a partir de agora   (para cada [não sei ainda]: como medir, em 1 linha)
```

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: 3 indicadores principais · 1 leitura.
- Desafio: "Pegue um [não sei ainda] e descubra o número até a semana que vem."
- Próximo: `/mapear-comercial` (~8 min).
