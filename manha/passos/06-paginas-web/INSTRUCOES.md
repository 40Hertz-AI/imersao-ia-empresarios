# Passo 6 · Páginas web com Artifacts: calculadora, dashboard e apresentação

**O que você vai fazer:** pedir ao Claude Code três páginas com os dados da Torra Viva:
1. uma **calculadora de orçamento** de café para escritório, que faz a conta sozinha;
2. um **dashboard de vendas**;
3. uma **apresentação** de 6 slides.

**A ideia:** cada pedido vira um **Artifact**, uma página publicada no claude.ai num endereço privado (só você vê). O Claude Code abre o Artifact sozinho no navegador.
- A **calculadora** é uma página comum: também fica um arquivo `.html` em `meu-trabalho/`, que abre com dois cliques.
- O **dashboard** e a **apresentação** usam os tipos prontos dos Artifacts, **Dashboard** e **Slides**: o Claude só põe o conteúdo, e o visual, os gráficos e os botões já vêm prontos.

Você não precisa subir arquivo nenhum: o Claude lê os dados da pasta `dados/`.

Os Artifacts do Claude Code funcionam nos planos Pro, Max, Team e Enterprise, com o login da conta do Claude que você fez no passo 1. Não deu para publicar? O Claude faz a página em `meu-trabalho/`, e ela abre com dois cliques.

**Conversa nova (`/clear`) para cada página.**

---

## 1. Calculadora de orçamento

```
Crie uma calculadora e publique no artefato.

Uma calculadora de orçamento de café para escritório da Torra Viva.

Campos: número de pessoas, xícaras por pessoa por dia (padrão 2), dias úteis no mês (padrão 21), café (Blend Escritório, Mantiqueira Clássico ou Cerrado Doce), contrato anual (sim ou não) e máquina de café (sim ou não).

Siga as regras de dados/orcamento.csv, na ordem em que estão escritas, e mostre a conta de cada linha: kg por mês, valor do café, desconto, máquina, frete, total do mês e custo por xícara. O resultado muda na hora, a cada alteração.

Use a skill frontend-design no acabamento.
```

**Confira na mão:** 25 pessoas, 2 xícaras, 21 dias, Blend Escritório, contrato anual, com máquina → 11 kg, café R$ 1.078,00, desconto de 10%, café com desconto R$ 970,20, máquina e frete grátis, **total R$ 970,20 por mês**, R$ 0,92 por xícara.

## 2. Dashboard de vendas

```
Crie um dashboard com o tipo Dashboard dos Artifacts.

Um painel das vendas da Torra Viva de janeiro a setembro de 2026, com os dados de dados/vendas-mensais.csv e dados/clientes-b2b.csv.

Mostre: 4 números grandes (faturamento total, lucro bruto, melhor mês e clientes B2B ativos em setembro), um gráfico de faturamento por mês, um gráfico por canal, a tabela dos 5 produtos que mais faturaram e um filtro por canal que atualiza tudo.
```

**Confira:** faturamento total de janeiro a setembro: R$ 765.578,40 · melhor mês: agosto · 12 clientes B2B ativos em setembro.

## 3. Apresentação

```
Crie uma apresentação com o tipo Slides dos Artifacts.

Uma apresentação de 6 slides com os resultados da Torra Viva de janeiro a setembro de 2026, para a reunião com a equipe.

Use os dados da pasta dados e a skill humanizer no texto.

Slides: 1) título; 2) os números do período; 3) o canal que mais cresceu; 4) os clientes B2B: quem entrou, quem saiu e por quê; 5) 3 ações para o último trimestre; 6) obrigado.
```

Quer em PDF ou PowerPoint? Abra o Artifact → **Share** (Compartilhar) → **Export** (Exportar).

---

## Onde ficam as páginas

| O quê | Onde |
|---|---|
| A calculadora | `meu-trabalho/calculadora-orcamento.html`. Dois cliques abrem no navegador |
| Os Artifacts | No link que o Claude Code mostra no fim da resposta. Para achar depois: digite `/artifacts` no Claude Code ou abra [claude.ai/code/artifacts](https://claude.ai/code/artifacts) |

O Artifact começa privado. Para mostrar a alguém, abra o Artifact e clique em **Share** (Compartilhar), no topo da página.

Quer mudar algo? Peça na mesma conversa (`deixe o total do mês maior e em verde`). O Claude muda e publica de novo no mesmo link.

## Plano B · Sem Claude Code: o mesmo pedido no claude.ai

Use se o Claude Code não abriu no seu computador. Comece pela calculadora.

1. Abra [claude.ai](https://claude.ai) no navegador e comece uma conversa nova.
2. **Leve os dados:** clique no **+** (ou no clipe) do campo de mensagem, ou arraste os arquivos para a conversa. Anexe o `CLAUDE.md` desta pasta (a ficha da Torra Viva) e os arquivos de `dados/` que o pedido usa:
   - calculadora: `dados/orcamento.csv`;
   - dashboard: `dados/vendas-mensais.csv` e `dados/clientes-b2b.csv`;
   - apresentação: `dados/vendas-mensais.csv`, `dados/clientes-b2b.csv` e `dados/produtos.csv`.
3. Cole o prompt do item 1, 2 ou 3 e troque só a primeira linha por:
   ```
   Com os arquivos anexados, crie um artifact.
   ```
4. A página aparece ao lado da conversa. Para guardar: clique no **título do Artifact** → **Export** (Exportar) → **HTML**. O arquivo vai para a pasta Downloads: mova para `meu-trabalho/` com o mesmo nome do item (`calculadora-orcamento.html`, `dashboard-vendas.html` ou `apresentacao.html`).

A página não apareceu ao lado? Em claude.ai → **Configurações** → **Capacidades**, ligue **Criar e editar arquivos** (*Create and edit files*). Os nomes dos botões podem mudar; se não achar, peça pelo texto: `exporte este artifact em HTML`.

Repare: no claude.ai, o Claude só sabe o que você anexou. Na pasta, ele já lia tudo sozinho.

## Resultado esperado

Três Artifacts no claude.ai (calculadora, dashboard e apresentação) e a calculadora em `meu-trabalho/calculadora-orcamento.html`.

**O que reparar:** a calculadora seguiu regras que estão num arquivo (`orcamento.csv`), não na sua cabeça · o tipo pronto (Dashboard, Slides) cuidou do visual e o Claude só pôs os dados · mudou a regra? Mude o CSV e peça para atualizar a calculadora.

✅ **Pronto quando:** os três Artifacts abrem no navegador. Marque o passo 6 em `progresso.md`. Fim da manhã!
