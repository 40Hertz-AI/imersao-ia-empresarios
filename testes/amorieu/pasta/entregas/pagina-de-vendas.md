# Página de vendas · Amorieu Doces
Fontes: `entregas/oferta.md`, `pesquisa/cliente.md`, `pesquisa/empresa.md`, `memoria/` · 26/10/2026
Arquivos: `entregas/pagina-de-vendas.html` (a página) e `entregas/formulario.html` (só o pedido, para o link da bio).

## 1. Topo
Opções de título:
1. **Dor:** "Chega de pedir orçamento de docinho e ficar sem resposta"
2. **Resultado:** "Sua mesa de casamento com preço claro, sem susto"
3. **Mecanismo:** "Prove os docinhos, receba o total por escrito e feche tranquila"

**Escolhido: 2.** É a promessa da oferta e usa a palavra da noiva ("sem dor de cabeça" → "sem susto"). Ataca a dor 4 (preço que some) e a objeção nº 1 ("tô chocada com esses preços").
**Subtítulo:** Brigadeiros gourmet e doces finos para casamentos em Mogi, Suzano e Itaquá. Você diz quantos convidados, a Júlia manda o total por escrito.
**Botão:** Pedir meu orçamento

## 2. Problema
> "Mando mensagem para alguns fornecedores, eles visualizam e não respondem."
Noiva no fórum da Casamentos.com.br ([link](https://comunidade.casamentos.com.br/forum/pq-alguns-fornecedores-nao-respondem--t672449)). Frase real, não inferida.
Texto: Você organiza o casamento nas horas livres, pelo celular. Manda mensagem para cinco doceiras e fica esperando. Aqui é diferente: você vê o preço antes de perguntar e recebe o total no mesmo dia.

## 3. Como funciona: Mesa Sem Susto
1. **Total na hora:** você conta quantos convidados e a Júlia responde com o total em até 1 hora, no horário de atendimento [a confirmar].
2. **Prova antes:** a caixa-degustação com os sabores da mesa chega antes de você fechar.
3. **Tudo por escrito:** quantidade, sabores, data, entrega e montagem numa lista. Sem taxa surpresa.
4. **Mesa conferida:** a Júlia confirma na véspera e você recebe a foto da mesa montada no dia.

## 4. O que vai (preços do dono)
- Caixa de 12 brigadeiros gourmet: R$ 45
- Mesa de doces de casamento e festa, com cerca de 500 doces: R$ 1.800, com entrega e montagem [montagem a confirmar]
- Bolo de festa: R$ 120 o kg
Seletor "Quantos doces eu preciso?": convidados × 7 a 9 doces (régua das noivas no fórum). Mostra se a mesa de 500 doces cobre; acima disso, o total vem no orçamento. Conta da IA, marcada como estimativa. Sem preço inventado por faixa.

## 5. Provas
- 4,7 no Google, 190 avaliações (segundo o site amorieudoces.com.br; não conferido direto no Google Maps)
- 13 mil seguidores no Instagram (@amorieudoces)
Sem depoimento: nenhum foi coletado ainda.

## 6. Oferta de entrada
Caixa-degustação: 12 brigadeiros com os sabores da mesa, R$ 45. Fechou o casamento? O valor sai do total [a confirmar]. Fechando casamento de 2027 até 30/11, a caixa é presente.

## 7. Pedido (formulário)
1. É para qual festa? (casamento, aniversário, chá de bebê, outra)
2. Qual a data?
3. Em que cidade?
4. Quantos convidados, mais ou menos?
5. O buffet já inclui algum docinho?
6. Quer a caixa-degustação?
7. Seu nome
Resumo editável → abre o WhatsApp (11) 97464-7928 com a mensagem pronta.

## 8. Onde atende
Rua João Cardoso de Siqueira Primo, 54, Vila Hélio, Centro, Mogi das Cruzes (SP) ([site](https://amorieudoces.com.br/)). Loja: seg. a sex. 10h às 19h30, sáb. 10h às 19h. Encomendas pelo WhatsApp: seg. a sex. 9h às 17h. Entrega em Mogi, Suzano e Itaquá; festas grandes até São Paulo.

## 9. Perguntas frequentes
- **"Achei caro."** Aqui o total já é o final: doces, entrega e montagem. Se quiser, a mesa mista (tradicionais + finos) baixa o valor.
- **"Vou orçar em outros lugares."** Pode! Você recebe tudo por escrito para comparar. A data fica segura com o sinal de 50%.
- **"Minha mãe (ou sogra) vai fazer."** Ela merece curtir a festa. Peça a caixa-degustação e decidam juntas.

## 10. Garantia e chamada final
**Garantia Mesa Conferida:** a lista do que vem vai por escrito; na véspera a Júlia confirma horário e endereço; no dia, você recebe a foto da mesa montada. Faltou doce da lista? A Amorieu devolve o valor proporcional [a confirmar com a Ana].
**Chamada final:** Conte quantos convidados. O resto a gente monta. Botão: Pedir meu orçamento.

## [a confirmar]
Resposta em até 1 hora · montagem incluída · abater a caixa-degustação · devolver o proporcional · nota do Google direto no Maps.

## Plano de design
- **Cor (de `marca/marca.md`):** chocolate #3A2D2A (topo e rodapé, como caixa de bombom), creme #FDF9F6 (fundo), rosa vinho #8D4F57 (títulos), rosa antigo #9E5F66 (botões), rosa claro #F9ECEA e ouro #C9A961 (só fita e detalhe).
- **Tipo:** Cormorant Garamond grande nos títulos (o tom de confeitaria fina), Jost no texto e nos botões.
- **Layout:** alinhado à esquerda, uma coluna no celular. O topo é a peça memorável: fundo chocolate com uma caixa de 12 brigadeiros vista de cima, cortada por uma fita dourada, que se enche um a um ao abrir (a caixa-degustação é o primeiro passo da oferta).
  ```
  [logo]                    [Pedir]
  ┌───────────── chocolate ─────────────┐
  │ Título grande       │ ○ ○ ○ ○       │
  │ subtítulo           │ ○ ○ ○ ○ fita  │
  │ [Pedir orçamento]   │ ○ ○ ○ ○       │
  └─────────────────────────────────────┘
  citação grande · etapas · seletor de convidados · provas · degustação · formulário · mapa · perguntas · garantia
  ```
- **Revisão contra o padrão:** creme + serifa é o clichê nº 1 das páginas de IA, mas aqui é a marca (vence). Para não virar o genérico: o topo é chocolate e não creme, o destaque é a caixa de brigadeiros e não um número grande, sem rótulos em caixa alta, sem setas nos botões e sem cartões iguais com sombra.
- **Movimento:** só a caixa se enchendo no topo; a barra do seletor e os números das provas se desenham uma vez; etapas e perguntas abrem no clique.
