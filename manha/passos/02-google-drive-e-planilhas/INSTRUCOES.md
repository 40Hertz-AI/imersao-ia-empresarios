# Passo 2 · Ligar o Claude ao Google Drive e perguntar à planilha

**O que você vai fazer:** subir a planilha da Torra Viva no Google Planilhas, conectar o Google Drive ao Claude e fazer perguntas aos dados. Sem conexão? O plano B lê os arquivos da própria pasta.

**A ideia:** o conector (o nome técnico é MCP) é o cabo USB da IA: liga o Claude às ferramentas que você já usa. Com ele, o Claude lê e cria arquivos no seu Google Drive.

Os dados são **fictícios**, criados para a aula: vendas de janeiro a setembro de 2026, produtos, clientes de empresas e as regras do orçamento. Detalhes em `dados/LEIA-ME.md`.

---

## 1. Levar a planilha para o Google

1. Abra [sheets.new](https://sheets.new) no navegador (cria uma planilha em branco na sua conta Google).
2. **Arquivo → Importar → Fazer upload** → arraste o arquivo `dados/torra-viva.xlsx` desta pasta.
3. Em "Local de importação", escolha **Substituir planilha** → **Importar dados**.
4. Clique no título "Planilha sem título" e renomeie para **Torra Viva (dados fictícios)**.
5. Confira as abas embaixo: Sobre, Vendas, Produtos, Clientes B2B, Orçamento.

## 2. Conectar o Google Drive ao Claude

1. Abra [claude.ai](https://claude.ai) → clique no seu nome (canto inferior esquerdo) → **Configurações** → **Conectores**.
2. Ache **Google Drive** → **Conectar** → entre com a mesma conta Google da planilha → **Permitir**.
3. Volte ao Claude Code e digite `/mcp`. Na lista deve aparecer o Google Drive (às vezes com o nome "claude.ai Google Drive"). Não apareceu? Saia com `/exit` e abra o `claude` de novo.

Conta Google da empresa bloqueada pelo administrador? Use a pessoal.

## 3. Perguntar à planilha

Uma pergunta por vez, na mesma conversa:

```
Procure no meu Google Drive a planilha "Torra Viva (dados fictícios)" e me diga, em poucas linhas, o que tem em cada aba.
```
```
Qual produto mais faturou de janeiro a setembro? E qual vendeu mais unidades?
```
```
Qual mês vendeu mais e qual vendeu menos? Mostre o faturamento de cada um.
```
```
Qual canal de venda mais cresceu de janeiro para setembro? Mostre a conta.
```
```
Quais clientes B2B precisam de atenção (pausados, cancelados ou com nota de satisfação baixa)? Diga o motivo de cada um.
```
```
Salve um Google Doc chamado "Resumo Torra Viva" no meu Drive com essas respostas. Escreva no topo "Dados fictícios de exemplo".
```

Repare na resposta 2: o produto que mais vende em unidades não é o que mais fatura.

## Plano B: sem Google, lendo os arquivos da pasta

Use se o conector não aparecer, se a conta Google estiver bloqueada ou se a internet cair. As perguntas são as mesmas; muda só a primeira:

```
Leia os arquivos .csv da pasta dados/ e me diga, em poucas linhas, o que tem em cada um.
```

Depois faça as perguntas 2 a 5 acima e, no fim:

```
Salve essas respostas em meu-trabalho/resumo-vendas.md, com "Dados fictícios de exemplo" no topo.
```

## Resultado esperado

- Com o Google: o Doc **Resumo Torra Viva** no seu Drive.
- No plano B: o arquivo `meu-trabalho/resumo-vendas.md`.

As respostas certas (calculadas direto dos dados) estão em `gabarito/02-google-drive-e-planilhas/respostas-certas.md`. A resposta que o Claude deu no teste está em `gabarito/02-google-drive-e-planilhas/resumo-vendas.md`.

**O que reparar:** ele pede permissão antes de mexer no seu Drive · conecte só o que você precisa · ele lê a planilha e cria um arquivo novo, sem alterar o original · confira 1 número na planilha com os seus olhos.

✅ **Pronto quando:** o resumo está no Drive (ou em `meu-trabalho/`). Marque o passo 2 em `progresso.md`.
