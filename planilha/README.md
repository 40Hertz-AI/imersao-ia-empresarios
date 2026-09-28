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

A aba **Buffet** traz o outro serviço da lanchonete: buffet para festas. Tem os pacotes (preço por convidado), os extras e 11 regras para montar um orçamento (mínimo de convidados, acréscimo de fim de semana, desconto por volume, equipe, horas extras, deslocamento e sinal).

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

## Passo 4: criar um orçamento

Agora o Claude não só responde: ele aplica as regras da empresa. Na mesma conversa:

```
Um cliente pediu orçamento de buffet: aniversário no sábado, 17/10/2026, para 120 convidados, pacote Festa completa, com mesa de doces, 5 horas de festa, a 18 km da lanchonete. Consulte a aba Buffet da planilha e monte o orçamento seguindo as regras. Mostre a conta de cada item.
```
```
E se a festa fosse na quarta-feira, 21/10?
```
```
Salve esse orçamento como um Google Doc chamado "Orçamento Buffet 17/10" no meu Drive.
```

Repare: você não explicou nenhuma regra de preço. Ele leu da planilha. Mudou o preço na planilha, o próximo orçamento já sai com o preço novo.
