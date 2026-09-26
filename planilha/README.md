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

## Passo 3: perguntar para a planilha

Cole uma pergunta de cada vez, na mesma conversa. Troque `[LINK]` pelo link que você copiou.

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

Abra o Google Doc no seu Drive. Repare: o Claude **leu** uma ferramenta sua (a planilha) e **escreveu** em outra (o Doc). Isso é o MCP.

**Curiosidade para guardar:** compare a resposta da pergunta 2 com a da 5.
