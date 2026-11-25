# Sobre mim: Rafael, gerente comercial
Atualizado: 2026-10-26 · Fonte: entrevista /sobre-mim (respostas simuladas para teste)

## Em uma frase
Gerente comercial da Amorieu Doces: lidera as vendedoras Bia e Lu, monta as propostas para empresas e cerimoniais e fecha o relatório de vendas toda sexta.

## Papel e decisões
- Gerente comercial, lidera 2 vendedoras: Bia e Lu.
- Decide sozinho: desconto até 8% e quais clientes cada vendedora atende.
- Desconto acima de 8%: o diretor aprova.

## Minha semana
| Dia | O quê | Tempo |
|---|---|---|
| Segunda | 8h: reunião de vendas com o time (e reunião com o diretor) | [a confirmar] |
| Terça a quinta | Visita empresas e cerimoniais e faz propostas | [a confirmar] |
| Sexta | Relatório de vendas da semana e previsão do mês (à tarde) | ~3 horas |

## Com quem falo e por onde
| Quem | Por onde | Sobre o quê |
|---|---|---|
| Vendedoras (Bia e Lu) | WhatsApp, o dia todo | Pedidos de cotação, clientes |
| Clientes (empresas, cerimoniais) | WhatsApp, e-mail e visita | Propostas |
| Financeiro | [a confirmar] | Cliente bloqueado |
| Diretor | Reunião na segunda | Vendas, descontos acima de 8% |

## Mapa de processos
| # | Processo | Gatilho | Passos (resumo) | Ferramentas | Entrada → Saída | Tempo | Frequência | Dor principal |
|---|---|---|---|---|---|---|---|---|
| 1 | Proposta para cliente novo | Vendedora manda no WhatsApp que o cliente quer cotação | Tabela de preços → cotação item por item → desconto por quantidade → modelo de proposta → PDF → vendedora leva | Excel, PowerPoint, WhatsApp, Omie | Lista do que o cliente usa por mês → proposta em PDF para a vendedora | 45 min cada | ~10 por semana | Montar item por item e não saber quais propostas estão paradas |
| 2 | Relatório semanal de vendas e previsão | Sexta à tarde | Exporta vendas do Omie → cruza com metas no Excel → olha o funil no Pipedrive → gráficos → resumo | Omie, Excel, Pipedrive | Vendas da semana + metas + funil → resumo com gráficos para o diretor | ~3 horas | 1 por semana | Pipedrive sempre desatualizado e tudo montado na mão |

### Processo 1: Proposta para cliente novo
Cliente: empresa que compra kit de fim de ano ou cerimonial de casamento.
1. Pede a cotação com a lista do que o cliente usa por mês · vendedora · WhatsApp
2. Abre a tabela de preços · Rafael · Excel
3. Monta a cotação item por item · Rafael · Excel
4. Aplica o desconto pela quantidade (até 8% decide sozinho; acima, o diretor aprova) · Rafael
5. Coloca no modelo de proposta e gera o PDF · Rafael · PowerPoint
6. Manda para a vendedora levar ao cliente · Rafael · WhatsApp
7. Cliente aceita: a vendedora cadastra no Omie · vendedora · Omie
8. Cliente não responde: a vendedora deveria cobrar em 3 dias, mas muitas vezes esquece · vendedora
Decisões: se o desconto passar de 8%, o diretor aprova. Se o cliente aceitar, cadastro no Omie; se não responder, cobrança em 3 dias (que muitas vezes não acontece).
```mermaid
flowchart LR
  A([Vendedora pede cotação no WhatsApp]) --> B[Abre a tabela de preços] --> C[Monta item por item] --> D{Desconto acima de 8%?}
  D -- sim --> E[Diretor aprova] --> F[Modelo de proposta e PDF]
  D -- não --> F
  F --> G[Manda para a vendedora levar] --> H{Cliente aceita?}
  H -- sim --> I([Vendedora cadastra no Omie])
  H -- não responde --> J([Cobrar em 3 dias: muitas vezes esquece])
```

### Processo 2: Relatório semanal de vendas e previsão
1. Exporta as vendas da semana · Rafael · Omie
2. Cruza com a meta de cada vendedora · Rafael · Excel (planilha de metas)
3. Olha o funil de propostas · Rafael · Pipedrive (as vendedoras atualizam mal)
4. Faz os gráficos · Rafael · Excel [a confirmar]
5. Escreve o resumo para o diretor · Rafael · [a confirmar por onde envia]
```mermaid
flowchart LR
  A([Sexta à tarde]) --> B[Exporta vendas do Omie] --> C[Cruza com metas no Excel] --> D[Olha o funil no Pipedrive] --> E[Faz gráficos] --> F([Resumo para o diretor])
```

## Documentos que deveriam estar na pasta
- Tabela de preços · Excel · onde está: [a confirmar]
- Modelo de proposta · PowerPoint · onde está: [a confirmar]
- Planilha de metas por vendedora · Excel · onde está: [a confirmar]
- Lista de objeções e respostas · só na cabeça do Rafael (escrever)

## Onde estão os dados / conexões possíveis
- Omie (sistema de gestão: vendas, cadastro de clientes)
- Pipedrive (funil de propostas)
- Excel, Google Drive
- Gmail
- WhatsApp
- Sites abertos no navegador todo dia: [a confirmar]

## O que já usa de IA
[a confirmar] (respondeu "não sei")

## A confirmar
- Por onde fala com o financeiro e o que acontece quando o cliente está bloqueado.
- Se o resumo de sexta vai por e-mail ou é apresentado na reunião de segunda.
- Onde ficam hoje a tabela de preços, o modelo de proposta e a planilha de metas.
- Tamanho da equipe: o Rafael fala em uns 25 funcionários; `memoria/empresa.md` diz 4 pessoas.
- Se já usa alguma IA no trabalho.
- Outros processos do comercial além destes 2.
