# A skill /resposta-cliente em uso

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 26/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

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

Criei a skill em `.claude/skills/resposta-cliente/SKILL.md`. A `skill-creator` não está disponível nesta máquina, então escrevi o arquivo direto. Ainda não testei a skill.

Como ela funciona, em 5 linhas:
1. **Quando é usada:** quando você digita `/resposta-cliente` ou cola a mensagem de um cliente.
2. **O que lê antes:** o `CLAUDE.md`, o `dados/politicas-atendimento.md` e os outros arquivos de `dados/` quando a mensagem cita produto ou cliente. Se não houver dados da empresa, faz uma pergunta só: o nome da empresa e o tom de voz.
3. **O que entrega:** o tipo da mensagem e a urgência, depois a resposta pronta para copiar, com no máximo 80 palavras e no tom da Torra Viva.
4. **Regra principal:** nunca promete prazo, desconto ou reembolso que não esteja escrito. O que falta vira `[confirmar: ...]`, e o que precisa de aprovação vira `[confirmar com a Helena: ...]`.
5. **Em reclamação:** diz quem resolve (o atendimento, a Marina ou a Helena) e até quando, usando só os prazos que estão na política de atendimento.

Próximo passo: digite `/clear` para abrir uma conversa nova e teste as 3 mensagens de `passos/05-criar-uma-skill/mensagens-de-clientes.md`. Se `/resposta-cliente` não aparecer, use `/exit` e abra o `claude` de novo.


## Mensagem 1

**Você:**

```
/resposta-cliente **Dados fictícios de exemplo.** Pessoas e pedidos inventados para a aula.

## 1 · Reclamação (WhatsApp, cliente do Clube) Oi, pedi 2 pacotes do Mantiqueira na segunda e até agora nada. Ninguém responde o WhatsApp. Se não chegar até sexta vou cancelar o Clube.
```

**Claude:**

**Tipo:** reclamação · **Urgência:** alta
A cliente ameaça cancelar o Clube e diz que ninguém respondeu no WhatsApp, mas a regra é responder em até 4 horas úteis.

**Resposta para copiar** (59 palavras):
> Oi! Desculpa a demora pra responder aqui, isso não devia ter acontecido. Seu pedido dos 2 pacotes do Mantiqueira está [confirmar: status do envio], com previsão de chegada em [confirmar: data de entrega]. Se a previsão passar de sexta, te aviso antes e a gente resolve junto. Me manda o número do pedido? Assim acompanho de perto até chegar.

**Por dentro:**
- Quem resolve: o atendimento, porque é pedido avulso de cliente do Clube. Se a ideia for mandar mais rápido que o prazo escrito, a Helena precisa aprovar antes.
- Até quando: já passou do prazo de resposta de 4 horas úteis. Responder agora.
- O que fazer:
  1. Achar o pedido e ver se a data bate com o ciclo da loja: torra na terça ou quinta, envio em até 2 dias úteis depois da torra e entrega em 2 dias úteis (Mogi e região) ou de 3 a 8 dias úteis (outras cidades, pelos Correios).
  2. Se estiver atrasado, avisar a cliente e oferecer uma solução, que precisa passar pela Helena: [confirmar com a Helena: envio mais rápido ou outra compensação].
  3. Descobrir por que o WhatsApp ficou sem resposta.

**Pontos a confirmar:** status do envio · data de entrega · número do pedido · cidade da cliente · qual Mantiqueira foi pedido (Clássico 250 g ou 1 kg) · se "segunda" é hoje (26/10) ou 19/10 · solução para o atraso (com a Helena)


## Mensagem 2

**Você:**

```
/resposta-cliente Bom dia! Sou do RH de uma escola de idiomas com 30 funcionários. Vocês fazem café para empresa? Quanto ficaria por mês? A gente precisa de máquina.
```

**Claude:**

**Tipo:** pedido (orçamento B2B) · **Urgência:** média
A pessoa está avaliando a compra e precisa do preço para decidir. Não há reclamação nem prazo.

**Resposta para copiar** (78 palavras):
> Bom dia! Fazemos, sim. Para 30 pessoas tomando 2 xícaras por dia, são cerca de 13 kg de Blend Escritório por mês: R$ 1.210,30, já com 5% de desconto por volume. A máquina vai em comodato (empréstimo, sem custo) e o frete é grátis. Dá uns R$ 0,96 por xícara. No contrato anual, cai para R$ 1.146,60. A Marina, que cuida das empresas, pode te mandar o orçamento certinho: quantas xícaras por dia o pessoal toma, em média?

**Pontos a confirmar:** nenhum dentro da resposta. A conta usa o padrão de `orcamento.csv` (2 xícaras por pessoa por dia, 21 dias úteis). Se o cliente disser outro número, refaça a conta.

**Como cheguei no valor** (dados fictícios de exemplo):
- 30 pessoas × 2 xícaras × 10 g × 21 dias = 12,6 kg, arredondado para 13 kg
- 13 kg × R$ 98,00 = R$ 1.274,00, com 5% de desconto = **R$ 1.210,30**
- Máquina sem custo porque passa de 8 kg por mês. Frete grátis porque passa de R$ 600,00
- No contrato anual o desconto é 5% de volume + 5% do anual = 10%, o que dá R$ 1.146,60


## Mensagem 3

**Você:**

```
/resposta-cliente Vi o Etiópia de vocês. Ele fica bom na cafeteira italiana? Vocês moem ou só vendem em grão?
```

**Claude:**

**Tipo:** dúvida · **Urgência:** média
É uma dúvida que trava a compra: o cliente quer saber se o café serve para o jeito que ele prepara.

**Resposta para copiar** (75 palavras):
> Oi! O Etiópia Yirgacheffe é de torra clara, com notas de floral, limão-siciliano e chá preto. Na cafeteira italiana ele funciona, mas sai mais leve e ácido que um café de torra média. Se você prefere algo mais encorpado, o Mantiqueira Clássico (chocolate ao leite e caramelo) é uma boa. Sobre moagem: [confirmar: se a loja online vende moído e em quais moagens]. Me diz qual prefere que eu já te passo o link do pedido.

**Pontos a confirmar:**
- `[confirmar: se a loja online vende moído e em quais moagens]`. A política só fala em "trocar a moagem" no Clube. Para a loja online não há nada escrito.


## A mesma skill numa pasta vazia, para outra empresa

Sem os arquivos da Torra Viva, a skill pergunta o nome da empresa e o tom antes (aqui o próprio teste respondeu como o dono de uma padaria fictícia).

**Você:**

```
/resposta-cliente Bom dia! Sou do RH de uma escola de idiomas com 30 funcionários. Vocês fazem café para empresa? Quanto ficaria por mês? A gente precisa de máquina.

(Se a skill precisar perguntar algo, responda você mesmo como se fosse o aluno Jorge, dono da Padaria Pão Quente, em Campinas: tom simpático e direto, trata o cliente por você. A padaria faz café da manhã para empresas, mas ainda não tem tabela de preços.)
```

**Claude:**

A pasta não tem `CLAUDE.md` nem `dados/`, então a skill faz uma pergunta antes de responder:

> Para responder no jeito da sua empresa, me diga numa mensagem só: qual é o nome da empresa e como é o tom de voz (por exemplo: próximo e direto, formal, bem-humorado)?

*Resposta (como Jorge):* "Padaria Pão Quente, em Campinas. Tom simpático e direto, tratando o cliente por você. A gente faz café da manhã para empresas, mas ainda não tem tabela de preços."

---

**Tipo:** pedido (orçamento) · **Urgência:** média
A cliente quer contratar e não consegue seguir sem um valor e sem saber se tem máquina.

**Resposta para copiar** (71 palavras):
> Bom dia! Que bom o seu contato. Sim, a Padaria Pão Quente atende empresas com café da manhã. Para montar o valor mensal para os 30 funcionários, me conta: quantos dias por semana, em que horário vocês precisam e o endereço da escola? Sobre a máquina, [confirmar: se a padaria fornece máquina de café e em que condições]. Com essas respostas, te mando o orçamento [confirmar: prazo para enviar o orçamento].

**Pontos a confirmar:**
- Se a padaria fornece máquina de café e em que condições (comodato, aluguel, venda). A cliente disse que precisa de máquina, e isso não está escrito em lugar nenhum.
- Prazo para enviar o orçamento.
- O preço não entrou na resposta porque ainda não há tabela. O valor mensal precisa ser calculado antes de ir para a cliente.

A resposta não diz "café da manhã para empresas" como se fosse a mesma coisa que "café com máquina". A cliente pode estar pedindo só o fornecimento de café e uma máquina, e não o café da manhã completo. Vale esclarecer isso quando ela responder.

