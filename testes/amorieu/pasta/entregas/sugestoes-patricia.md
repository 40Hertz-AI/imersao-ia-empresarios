# O que a IA pode fazer pela Patrícia
Base: mapa do `/sobre-mim` (`memoria/sobre-mim.md`) · Data: 2026-10-26

## Em uma frase
A IA escreve os e-mails de cobrança, lembra de quem prometeu pagar e acha o que não bate na conciliação; a Patrícia revisa, liga, negocia e decide quem bloquear.

## As 3 primeiras (fazer esta semana)

### 1. E-mails de cobrança da semana em um pedido
- **Resolve:** cobrança de inadimplentes (dor: escrever e-mail um por um).
- **Tipo:** prompt pronto (no Claude Code, nesta pasta) · **Impacto 3 / Esforço 1**
- **Tempo:** a parte de escrever e-mails das umas 5 h por semana; quanto sobra `[a confirmar]` depois do primeiro uso.
- **Próximo passo:** exporte do Omie os títulos vencidos para `dados/vencidos.xlsx` (tire CPF e telefone se puder) e cole:
  > "Leia dados/vencidos.xlsx. Separe por faixa de atraso (até 15, 15 a 30, mais de 30 dias). Para cada cliente, escreva um rascunho de e-mail de cobrança com nome, valor e vencimento, tom cordial e firme, e no fim liste os de mais de 30 dias para eu ligar. Salve em entregas/cobranca-AAAA-MM-DD.md. Não envie nada."

### 2. Conciliação dos 3 bancos antes do fechamento de 1/11
- **Resolve:** fechamento mensal (dor: conciliar na mão o que não bate).
- **Tipo:** prompt pronto (no Claude Code, nesta pasta) · **Impacto 3 / Esforço 1**
- **Tempo:** parte dos uns 2 dias do fechamento; quanto `[a confirmar]`.
- **Próximo passo:** coloque em `dados/` os extratos de outubro (Itaú, Sicoob, Inter, em OFX ou Excel) e a exportação dos lançamentos do Omie, e cole:
  > "Compare os extratos em dados/ com o export do Omie. Liste o que bateu, o que está só no banco, o que está só no Omie e, para cada diferença, o lançamento mais provável (mesmo valor, data próxima). Monte uma tabela para eu conferir. Não altere nenhum arquivo de dados/."

### 3. Skill `/cobranca-semana`
- **Resolve:** cobrança inteira, do relatório ao follow-up (dor: esquecer de voltar no cliente que prometeu).
- **Tipo:** skill · **Impacto 3 / Esforço 2**
- **O que faz:** lê o export de vencidos e a planilha de follow-up, separa as faixas, escreve os rascunhos no seu modelo, lista quem ligar e mostra **quem prometeu pagar e a data já passou**. Avisa quem passou de 30 dias para você decidir o bloqueio.
- **Próximo passo:** coloque em `dados/` o modelo de e-mail de cobrança (Word) e a planilha de follow-up, e diga: "Crie a skill /cobranca-semana e teste com os vencidos desta semana."

## Todas as sugestões

| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |
|---|---|---|---|---|---|---|
| 1 | E-mails de cobrança da semana em um pedido | Cobrança | Prompt pronto | 3 | 1 | Export do Omie em `dados/vencidos.xlsx` + o prompt acima |
| 2 | Conciliação dos 3 bancos x Omie | Fechamento | Prompt pronto | 3 | 1 | Extratos e export do Omie em `dados/` + o prompt acima |
| 3 | `/cobranca-semana` (rascunhos + quem prometeu e não pagou) | Cobrança | Skill | 3 | 2 | "Crie a skill /cobranca-semana e teste com os vencidos desta semana" |
| 4 | Trazer os 4 documentos para a pasta | Cobrança e fechamento | Contexto | 3 | 1 | Coloque em `dados/` o modelo de e-mail, a planilha de follow-up, o modelo do DRE e a política de crédito |
| 5 | `/resumo-do-mes`: DRE do Excel vira o resumo de 1 página para o Roberto | Fechamento | Skill | 3 | 2 | Depois do fechamento de 1/11: "Crie a skill /resumo-do-mes a partir do DRE em dados/ e do resumo do mês passado" |
| 6 | Ligar Google Drive e Gmail no claude.ai | Cobrança e fechamento | Conector | 2 | 1 | claude.ai → Configurações → Conectores → Google Drive e Gmail (Gmail só para criar rascunho) |
| 7 | Toda terça 8h: lista de cobrança e follow-up pronta para revisar | Cobrança | Rotina agendada | 3 | 2 | Com o Drive ligado e a skill 3 pronta: `/schedule` "toda terça 8h, rode /cobranca-semana e deixe os rascunhos para eu revisar" |
| 8 | Projeto "Cobrança Amorieu" para as 2 assistentes | Cobrança | Projeto (claude.ai) | 2 | 2 | Criar o projeto com a política de crédito, o modelo de e-mail e as regras de faixa e bloqueio como instruções |
| 9 | Guia da política de crédito para os vendedores ("posso vender para esse cliente?") | Cobrança | Artifact | 2 | 2 | "Transforme a política de crédito em dados/ numa página simples de perguntas e respostas para os vendedores" |
| 10 | Plugin de finanças | Fechamento | Plugin | 2 | 1 | Ver no Claude se o seu plano tem o plugin da área de finanças (conciliação, análise de variação) e instalar |

Fora dos 10, para testar depois: **Claude no navegador** abrindo o Omie e tirando o relatório de vencidos toda terça. Você assiste e aprova cada passo; nunca para internet banking, senha ou pagamento.

## Rotinas agendadas
| Quando | O que roda | O que deixa pronto para revisar |
|---|---|---|
| Toda terça, 8h | `/cobranca-semana` com o export mais recente | Rascunhos de e-mail por faixa, lista de ligação, quem prometeu e não pagou, quem passou de 30 dias |
| Dia 1 do mês, 8h | Conciliação dos extratos do mês x Omie | Tabela do que não bateu, com o lançamento provável de cada diferença |

Nenhuma rotina envia e-mail, bloqueia cliente no Omie ou avisa vendedor: só deixa o rascunho. Rotina na nuvem precisa ler os arquivos de algum lugar (Drive ligado); sem isso, roda quando você abre a pasta.

## Skills para criar
| Nome | O que faz | Arquivos que lê |
|---|---|---|
| `/cobranca-semana` | Faixas de atraso, rascunhos de e-mail no seu modelo, lista de ligação, follow-up de promessas vencidas | `dados/vencidos.xlsx`, modelo de e-mail, planilha de follow-up, política de crédito |
| `/resumo-do-mes` | Resumo de 1 página para o Roberto, sempre no mesmo formato, com o que mudou em relação ao mês anterior | Modelo do DRE preenchido, resumo do mês anterior |

## Conexões e arquivos que faltam
- Os 4 documentos de `memoria/falta-trazer.md` (modelo de e-mail, follow-up, DRE, política de crédito).
- Um export de vencidos do Omie e os extratos de outubro, para testar as 3 primeiras.
- Google Drive e Gmail ligados no claude.ai (para a rotina e o projeto).
- Omie: ver se a empresa tem acesso à API, a "porta" de integração do sistema (precisa de TI ou do suporte Omie; esforço 3, não é para agora).

## O que continua com você (e por quê)
- **Ligar para quem passou de 30 dias e negociar:** é relação com o cliente.
- **Prorrogar boleto e decidir o bloqueio:** é decisão sua (até 15 dias) ou do Roberto; a IA só avisa quem chegou no limite.
- **Enviar cada e-mail:** a IA escreve o rascunho; você confere valor e nome antes de mandar.
- **Aprovar o que não bateu na conciliação:** a IA sugere o lançamento provável; quem lança no Omie é você.
- **Contas a pagar e fluxo de caixa (segunda):** ainda não mapeado. Rode `/sobre-mim` de novo para esse processo e as sugestões vêm.
