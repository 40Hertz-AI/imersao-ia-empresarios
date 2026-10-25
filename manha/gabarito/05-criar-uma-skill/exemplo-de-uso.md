# A skill /resposta-cliente em uso

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 25/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

## Criando a skill

**Você:**

```
Crie uma skill chamada resposta-cliente, no arquivo .claude/skills/resposta-cliente/SKILL.md.
Ela recebe a mensagem de um cliente (WhatsApp, e-mail ou Instagram) e devolve:
1) o tipo da mensagem (dúvida, pedido, reclamação ou elogio) e a urgência (baixa, média ou alta);
2) a resposta pronta para copiar, no tom da empresa: próxima, direta, sem exagero, com no máximo 80 palavras;
3) se for reclamação: o que fazer por dentro (quem resolve e até quando).
Regras: usar só o que está na pasta (CLAUDE.md, dados/politicas-atendimento.md e os outros arquivos de dados/) ou na própria mensagem; nunca prometer prazo, desconto ou reembolso que não esteja escrito; se faltar informação, escrever [confirmar: ...] dentro da resposta.
Se a pasta não tiver dados da empresa, a skill pergunta antes o nome da empresa e o tom de voz, numa pergunta só.
Use a skill-creator se ela estiver disponível. No fim, me explique a skill em 5 linhas.
```

**Claude:**

Criei a skill em `.claude/skills/resposta-cliente/SKILL.md`. A `skill-creator` não estava disponível, então escrevi a skill sem ela, no mesmo formato da `eli5`.

Ela funciona assim:

1. **Quando entra em ação:** quando você digita `/resposta-cliente` e cola a mensagem do cliente, ou pede ajuda para responder alguém.
2. **Onde busca as informações:** no `CLAUDE.md`, em `dados/politicas-atendimento.md` e nos outros arquivos de `dados/` quando a mensagem fala de produto, preço ou cliente de empresa. Se a pasta não tiver dados da empresa, ela pergunta antes o nome e o tom de voz, numa pergunta só.
3. **O que devolve:** o tipo da mensagem e a urgência, com o motivo. Depois, a resposta pronta para copiar, com no máximo 80 palavras.
4. **Se for reclamação:** diz quem resolve (atendimento, Marina ou Helena), até quando, e 2 ou 3 próximos passos.
5. **O que ela não faz:** prometer prazo, desconto ou reembolso que não esteja escrito. O que faltar aparece como `[confirmar: ...]` na própria resposta.

Ainda não testei a skill. Faça `/clear` e teste as 3 mensagens de `passos/05-criar-uma-skill/mensagens-de-clientes.md`. Se ela não aparecer no `/`, feche com `/exit` e abra de novo com `claude`. Quando as 3 respostas saírem certas, eu marco o passo 5 em `progresso.md`.


## Mensagem 1

**Você:**

```
/resposta-cliente **Dados fictícios de exemplo.** Pessoas e pedidos inventados para a aula.

## 1 · Reclamação (WhatsApp, cliente do Clube) Oi, pedi 2 pacotes do Mantiqueira na segunda e até agora nada. Ninguém responde o WhatsApp. Se não chegar até sexta vou cancelar o Clube.
```

**Claude:**

**1. Classificação**
- **Tipo:** reclamação
- **Urgência:** alta. Ameaça cancelar o Clube e diz que ninguém responde no WhatsApp (o prazo de resposta é de até 4 horas úteis).

**2. Resposta pronta para copiar**

> Oi, [confirmar: nome do cliente]! Desculpa a demora pra te responder, isso não devia ter acontecido. Já estou olhando seu pedido dos 2 pacotes de Mantiqueira feito na segunda. Me passa o número do pedido ou o e-mail da compra? Ainda hoje te digo em que pé ele está e o código de rastreio, se já tiver saído. Seu pedido está em: [confirmar: status e data de envio do pedido].

*(71 palavras. Não promete entrega até sexta porque as políticas não garantem esse prazo.)*

**3. O que fazer por dentro**
- **Quem resolve:** o atendimento (é cliente do Clube). Se for preciso garantir entrega até sexta e o prazo normal não der, só com aprovação da Helena.
- **Até quando:** responder em até 4 horas úteis (WhatsApp, de segunda a sexta, das 8h às 18h). Como ele já está esperando, vale responder agora.
- **Passos:**
  1. Achar o pedido e ver qual Mantiqueira ele comprou (250 g ou 1 kg), se foi na torra de terça e se já foi enviado. Pela regra, sai em até 2 dias úteis depois da torra. A entrega leva até 2 dias úteis na região de Mogi e de 3 a 8 dias úteis pelos Correios.
  2. Mandar status e rastreio. Se o pedido passou do prazo escrito, chamar a Helena antes de oferecer qualquer compensação.
  3. Se ele ainda quiser cancelar o Clube: dá para cancelar sem multa até o dia 20, e vale para o mês seguinte. Hoje é dia 25, então o cancelamento só vale a partir de dezembro.


## Mensagem 2

**Você:**

```
/resposta-cliente Bom dia! Sou do RH de uma escola de idiomas com 30 funcionários. Vocês fazem café para empresa? Quanto ficaria por mês? A gente precisa de máquina.
```

**Claude:**

**1. Classificação**
- **Tipo:** dúvida
- **Urgência:** média, porque a dúvida trava uma compra (orçamento B2B).

**2. Resposta pronta para copiar**

> Bom dia! Fazemos, sim. Para 30 pessoas tomando 2 cafés por dia, dá cerca de 13 kg por mês. Com o nosso Blend Escritório, fica R$ 1.210,30/mês, já com 5% de desconto por volume. A máquina vai emprestada, sem custo, e o frete é grátis. No contrato anual, o valor cai para R$ 1.146,60. O orçamento vale 15 dias. Me passa seu nome e telefone? A Marina, que cuida das empresas, fala com você.

**Como cheguei no valor** (regras de `dados/orcamento.csv`):
- 30 pessoas × 2 xícaras × 10 g × 21 dias = 12,6 kg. Arredondado para cima, dá **13 kg**.
- 13 kg × R$ 98,00 (Blend Escritório) = R$ 1.274,00. Com 5% de desconto por volume (a partir de 10 kg), fica **R$ 1.210,30**.
- A máquina é emprestada sem custo a partir de 8 kg/mês, e o frete é grátis a partir de R$ 600,00. Isso dá cerca de R$ 0,96 por xícara.
- Contrato anual: são 5% a mais de desconto, 10% no total, e o valor fica em **R$ 1.146,60**.

Não entra a parte "o que fazer por dentro", porque a mensagem não é reclamação. Todos os valores são dados fictícios de exemplo.


## Mensagem 3

**Você:**

```
/resposta-cliente Vi o Etiópia de vocês. Ele fica bom na cafeteira italiana? Vocês moem ou só vendem em grão?
```

**Claude:**

**1. Classificação**
- **Tipo:** dúvida
- **Urgência:** média. É uma dúvida que trava a compra.

**2. Resposta pronta para copiar**

> Oi! O Etiópia Yirgacheffe tem torra clara e notas de floral, limão-siciliano e chá preto. O pacote de 250 g sai por R$ 68,00. Na cafeteira italiana ele [confirmar: se a Helena recomenda o Etiópia para italiana ou indica outro café]. Sobre a moagem, [confirmar: se a loja online vende moído ou só em grão, e quais moagens tem]. Assim que eu confirmar isso, te passo certinho. Combinado?

---
As políticas e o `produtos.csv` não dizem se a loja online vende café moído (só o Clube fala em "trocar a moagem"). Também não dizem qual café vai melhor na italiana. Por isso deixei esses dois pontos como `[confirmar: ...]`. Vale perguntar para a Helena antes de mandar.


## A mesma skill numa pasta vazia, para outra empresa

Sem os arquivos da Torra Viva, a skill pergunta o nome da empresa e o tom antes (aqui o próprio teste respondeu como o dono de uma padaria fictícia).

**Você:**

```
/resposta-cliente Bom dia! Sou do RH de uma escola de idiomas com 30 funcionários. Vocês fazem café para empresa? Quanto ficaria por mês? A gente precisa de máquina.

(Se a skill precisar perguntar algo, responda você mesmo como se fosse o aluno Jorge, dono da Padaria Pão Quente, em Campinas: tom simpático e direto, trata o cliente por você. A padaria faz café da manhã para empresas, mas ainda não tem tabela de preços.)
```

**Claude:**

Não havia dados da empresa na pasta. Então fiz a pergunta da skill (qual é o nome da empresa e como é o tom de voz) e respondi como o Jorge: Padaria Pão Quente, em Campinas, tom simpático e direto, tratando o cliente por "você". A padaria faz café da manhã para empresas, mas ainda não tem tabela de preços.

**1. Classificação**
- **Tipo:** dúvida
- **Urgência:** média, porque a escola precisa saber o preço e se tem máquina antes de fechar.

**2. Resposta pronta para copiar**

> Bom dia! Que bom que você chamou a gente. Sim, a Padaria Pão Quente atende empresas em Campinas com café da manhã. Para 30 funcionários, o valor mensal fica em [confirmar: preço mensal para 30 pessoas]. Sobre a máquina, [confirmar: se a padaria fornece máquina de café e em quais condições]. Me conta quantos dias por semana vocês precisam e o endereço da escola, que eu te mando uma proposta certinha.

**Antes de enviar:**
- Como ainda não tem tabela de preços, preencha os dois `[confirmar]` com valores que você já tenha decidido. Não mande o texto com um número só estimado.
- Não sei se a padaria oferece máquina de café (aluguel, comodato ou nada). Se não oferecer, troque esse trecho por algo como "hoje a gente não fornece máquina, mas entrega o café pronto".
- Não há a parte "O que fazer por dentro", porque ela só entra quando é reclamação.

