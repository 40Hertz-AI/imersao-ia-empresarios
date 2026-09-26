# Planilha da Lanchonete Bom Pedaço

**Dados fictícios**, criados para a imersão. Não representam nenhuma empresa real.

`lanchonete-bom-pedaco.xlsx` traz as vendas de uma lanchonete de bairro de janeiro a junho de 2026. São 9 produtos, vendidos no balcão e por delivery.

| Coluna | O que é |
|---|---|
| Mês | De janeiro a junho |
| Produto e Categoria | Lanche, acompanhamento ou bebida |
| Canal | Balcão ou Delivery |
| Quantidade, Preço unitário, Faturamento | Faturamento = quantidade × preço |
| Custo dos ingredientes | O que o produto custou para fazer |
| Taxa do app de delivery | 25% do faturamento, só no delivery |
| Lucro | Faturamento − ingredientes − taxa do app (sem aluguel, salários e contas) |

A aba **Sobre** repete essa explicação dentro da planilha.

---

## Passo 1: levar a planilha para o Google Planilhas

1. Baixe a pasta da imersão: [download do ZIP](https://github.com/santanalc/imersao-ia-empresarios/archive/refs/heads/main.zip). Descompacte. A planilha está em `planilha/`.
   (Se preferir, baixe só a planilha: [lanchonete-bom-pedaco.xlsx](https://github.com/santanalc/imersao-ia-empresarios/raw/main/planilha/lanchonete-bom-pedaco.xlsx).)
2. Abra [sheets.new](https://sheets.new). Isso cria uma planilha em branco no seu Google.
3. **Arquivo → Importar → Fazer upload** → escolha `lanchonete-bom-pedaco.xlsx`.
4. Em "Local de importação", escolha **Substituir planilha** → **Importar dados**.
5. Clique no título "Planilha sem título", no canto de cima, e renomeie para **Lanchonete Bom Pedaço**.
6. Copie o link da planilha na barra do navegador.

## Passo 2: conectar o Google ao Claude

Se ainda não fez: [claude.ai](https://claude.ai) → Configurações → **Conectores** → **Google Drive** → conecte com a sua conta Google. Depois volte para o Claude Code.

## Passo 3: conversar com a planilha

Cole os pedidos um de cada vez, na mesma conversa, e troque `[LINK]` pelo link que você copiou.

**1. Ele consegue ler?**
```
Leia esta planilha do meu Google Drive: [LINK]. Me diga em 5 linhas o que tem nela.
```

**2. O que mais vende é o que mais dá dinheiro?**
```
Qual produto mais vende em quantidade? E qual dá mais lucro? São o mesmo produto? Explique a diferença.
```

**3. Como foi cada mês?**
```
Como foi o faturamento mês a mês? Algum mês saiu do padrão? Por quê?
```

**4. Balcão ou delivery?**
```
Balcão ou delivery: qual fatura mais e qual dá mais lucro? O que mudou de janeiro a junho?
```

**5. O produto novo está indo bem?**
```
O Smash Duplo começou a ser vendido em março. Ele está indo bem?
```

**6. O relatório para o dono**
```
Com tudo o que você descobriu, gere o arquivo relatorio.html com gráficos e 3 recomendações para o dono da lanchonete. Salve também um Google Doc chamado "Relatório Bom Pedaço" no meu Google Drive.
```

Abra o `relatorio.html` e o Google Doc.

**Repare:** em algum momento o Claude não vai saber explicar *por que* algo aconteceu. Guarde isso: é o assunto da última parte da manhã.
