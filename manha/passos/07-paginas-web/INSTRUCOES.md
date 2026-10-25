# Passo 7 · Páginas web: calculadora, dashboard e apresentação

**Tempo:** 30 min.
**O que você vai fazer:** criar três páginas que abrem no navegador, todas com o `design-system.md` do passo 6:
1. uma **calculadora de orçamento** de café para escritório, que faz a conta sozinha;
2. um **dashboard de vendas** com os dados da Torra Viva;
3. uma **apresentação** de 6 slides.

No fim, o mesmo pedido no **claude.ai**, com os Artifacts (Docs, Slides e Dashboard).

Não fez o passo 6? Copie `gabarito/06-design-system/design-system.md` para `meu-trabalho/`.

Cada página é um arquivo `.html`: abra com dois cliques (ou peça ao Claude: `abra o arquivo no navegador`). **Conversa nova (`/clear`) para cada página.**

---

## 1. Calculadora de orçamento (10 min)

```
Crie meu-trabalho/calculadora-orcamento.html: uma calculadora de orçamento de café para escritório da Torra Viva, num arquivo só (HTML, CSS e JavaScript juntos).
Campos: número de pessoas, xícaras por pessoa por dia (padrão 2), dias úteis no mês (padrão 21), café (Blend Escritório, Mantiqueira Clássico ou Cerrado Doce), contrato anual (sim ou não) e máquina de café (sim ou não).
Siga as regras de dados/orcamento.csv, na ordem em que estão escritas, e mostre a conta de cada linha: kg por mês, valor do café, desconto, máquina, frete, total do mês e custo por xícara. O resultado muda na hora, a cada alteração.
Use as cores e fontes de meu-trabalho/design-system.md e a skill frontend-design no acabamento. Escreva no rodapé "Dados fictícios de exemplo".
Para dar para testar, deixe a conta numa função calcularOrcamento({pessoas, xicaras, dias, cafe, anual, maquina}) que devolve {kg, valorCafe, descontoPct, cafeComDesconto, maquina, frete, total, custoPorXicara}.
```

**Confira na mão:** 25 pessoas, 2 xícaras, 21 dias, Blend Escritório, contrato anual, com máquina → 11 kg, café R$ 1.078,00, desconto de 10%, café com desconto R$ 970,20, máquina e frete grátis, **total R$ 970,20 por mês**, R$ 0,92 por xícara.

## 2. Dashboard de vendas (10 min)

```
Crie meu-trabalho/dashboard-vendas.html: um painel das vendas da Torra Viva de janeiro a setembro de 2026, num arquivo só, com os dados de dados/vendas-mensais.csv e dados/clientes-b2b.csv embutidos no próprio HTML (para abrir sem internet).
Mostre: 4 números grandes (faturamento total, lucro bruto, melhor mês e clientes B2B ativos em setembro), um gráfico de faturamento por mês, um gráfico por canal, a tabela dos 5 produtos que mais faturaram e um filtro por canal que atualiza tudo.
Desenhe os gráficos com SVG, sem biblioteca de fora. Use meu-trabalho/design-system.md e a skill frontend-design. Escreva "Dados fictícios de exemplo" no topo.
```

**Confira:** faturamento total de janeiro a setembro: R$ 765.578,40 · melhor mês: agosto · 12 clientes B2B ativos em setembro.

## 3. Apresentação (10 min)

```
Crie meu-trabalho/apresentacao.html: uma apresentação de 6 slides com os resultados da Torra Viva de janeiro a setembro de 2026, para a reunião com a equipe.
Use os dados da pasta dados/ (sem inventar número) e meu-trabalho/design-system.md, com a skill frontend-design no visual e a humanizer no texto.
Um arquivo só. Passa de slide com as setas do teclado e com clique, e mostra o número do slide.
Slides: 1) título; 2) os números do período; 3) o canal que mais cresceu; 4) os clientes B2B: quem entrou, quem saiu e por quê; 5) 3 ações para o último trimestre; 6) obrigado.
Rodapé em todos os slides: "Dados fictícios de exemplo".
```

Quer em PDF? Abra no Chrome → **Ctrl+P** (Mac: **Cmd+P**) → Destino: **Salvar como PDF**.

---

## 4. No claude.ai: Artifacts (Docs, Slides e Dashboard)

No [claude.ai](https://claude.ai) (navegador ou app), o Claude cria documentos, apresentações e painéis ao lado da conversa: são os **Artifacts**. Abra uma conversa nova, **anexe o arquivo** (clipe ou arraste) e cole o prompt. Se o seu plano mostrar o botão de tipo de saída no campo de mensagem, escolha o tipo; se não mostrar, o pedido escrito basta.

Docs e Slides estão em todos os planos. Dashboard está em teste (beta) nos planos pagos. Os nomes dos botões podem mudar: se não achar, peça pelo texto.

**Doc** (anexe `dados/vendas-mensais.csv` e `dados/clientes-b2b.csv`):
```
Crie um documento chamado "Relatório de setembro · Torra Viva" para a fundadora: resumo em 5 linhas, faturamento por canal de janeiro a setembro, clientes B2B que entraram e saíram, e 3 recomendações. Use só os dados anexados (são dados fictícios de exemplo) e escreva isso no topo.
```

**Slides** (anexe `dados/vendas-mensais.csv` e `meu-trabalho/design-system.md`):
```
Crie uma apresentação de 6 slides com os resultados da Torra Viva de janeiro a setembro de 2026, com as cores e fontes do design system anexado. Um número grande por slide, pouco texto. Rodapé: "Dados fictícios de exemplo".
```

**Dashboard** (anexe `dados/vendas-mensais.csv`):
```
Crie um dashboard das vendas da Torra Viva: faturamento por mês, por canal e por produto, com filtro por canal e os 4 números principais no topo. São dados fictícios de exemplo.
```

Sem a opção de Dashboard no seu plano? Peça "crie um artifact interativo em HTML com esse painel": o resultado é parecido com o do Claude Code.

## Resultado esperado

Três arquivos em `meu-trabalho/`: `calculadora-orcamento.html`, `dashboard-vendas.html` e `apresentacao.html`. Os prontos estão em `gabarito/07-paginas-web/`.

**O que reparar:** o design system do passo 6 deixou as três páginas com a mesma cara · a calculadora seguiu regras que estão num arquivo (`orcamento.csv`), não na sua cabeça · mudou a regra? Mude o CSV e peça para atualizar a calculadora.

✅ **Pronto quando:** as três páginas abrem no navegador. Marque o passo 7 em `progresso.md`.
