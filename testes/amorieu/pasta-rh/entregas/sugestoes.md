# O que a IA pode fazer pela Juliana (RH da Amorieu Doces)
Base: mapa do trabalho (`memoria/sobre-mim.md`, respostas simuladas para teste) · Data: 2026-10-26

## Em uma frase
A IA lê os currículos e escreve a vaga por você, e o regulamento passa a responder as dúvidas repetidas da equipe; você fica com a entrevista, a decisão de quem passa e a conversa com as pessoas.

Tempo em jogo, pelo que você contou: umas 8 h por vaga × umas 4 vagas por mês ≈ 32 h por mês em recrutamento, e uns 40 min por dia em dúvidas ≈ 13 h por mês (20 dias úteis). Tudo `estimativa`. Quanto disso a IA poupa: `[a confirmar]` depois de testar em 1 vaga.

## As 3 primeiras (fazer esta semana)

### 1. Triagem de currículos com a IA · skill `/triagem-curriculos`
- **Resolve:** recrutamento, passo "lê 60 a 100 currículos e separa uns 10".
- **Tipo:** Skill · **Impacto 3 · Esforço 2**
- **Como funciona:** você baixa os currículos da vaga para `dados/curriculos/<vaga>/` (pasta privada, fora de qualquer publicação). A skill compara cada um com a descrição da vaga e devolve uma tabela: quem atende os requisitos, por quê (com o trecho do currículo), o que falta e uma sugestão de 10 para entrevistar. **Quem decide quem passa é você.** A skill não descarta ninguém sozinha e não usa idade, gênero, foto, endereço ou estado civil como critério.
- **Próximo passo:** digite "Cria a skill /triagem-curriculos" aqui no Claude Code e teste com os currículos da próxima vaga de confeiteira.

### 2. Projeto "Dúvidas do RH" no claude.ai com o regulamento
- **Resolve:** dúvidas dos funcionários, passo "procura a resposta no regulamento de 20 páginas".
- **Tipo:** Projeto (claude.ai) · **Impacto 3 · Esforço 2**
- **Como funciona:** um projeto com o regulamento em PDF e as instruções abaixo. Chegou a pergunta no WhatsApp, você cola no projeto e recebe a resposta pronta, com a página do regulamento. Você revisa e envia. Se não está no regulamento, ele avisa e já escreve o e-mail para a contabilidade.
- **Próximo passo:** em claude.ai, crie o projeto "Dúvidas do RH", suba o regulamento e cole nas instruções:
  > "Você ajuda a Juliana, do RH da Amorieu Doces, a responder dúvidas de funcionários sobre férias, holerite, vale-transporte, plano de saúde e atestado. Responda só com base no regulamento anexo, citando a página. Escreva curto, gentil e em linguagem de WhatsApp. Se a resposta não estiver no regulamento, diga isso e escreva um e-mail curto para a contabilidade perguntando. Nunca invente regra ou valor."

### 3. Descrição de vaga em 2 minutos · prompt pronto
- **Resolve:** recrutamento, passo "escreve a descrição da vaga do zero no Word".
- **Tipo:** Prompt pronto · **Impacto 2 · Esforço 1**
- **Próximo passo:** cole aqui ou no claude.ai, junto com a mensagem do gestor:
  > "Escreva a descrição de vaga para LinkedIn e Indeed a partir do pedido do gestor abaixo. Empresa: Amorieu Doces, confeitaria em Mogi das Cruzes (SP). Tom acolhedor e direto. Estrutura: sobre a Amorieu (2 linhas), o que a pessoa vai fazer, requisitos (separe obrigatório de desejável), horário e local, como se candidatar. Não use linguagem que exclua por idade ou gênero. O que o gestor não informou (salário, horário, benefícios), deixe como [a confirmar]. Pedido do gestor: <cole aqui>"
- Quando os seus modelos de vaga estiverem em `dados/`, isso vira a skill `/descricao-vaga` no padrão da Amorieu.

## Todas as sugestões

| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |
|---|---|---|---|---|---|---|
| 1 | Triagem de currículos com tabela e motivo | Recrutamento | Skill | 3 | 2 | "Cria a skill /triagem-curriculos" |
| 2 | Projeto "Dúvidas do RH" com o regulamento | Dúvidas | Projeto (claude.ai) | 3 | 2 | Criar o projeto e colar as instruções acima |
| 3 | Descrição de vaga a partir da mensagem do gestor | Recrutamento | Prompt pronto | 2 | 1 | Colar o prompt acima |
| 4 | Trazer regulamento, modelos de vaga, roteiro e checklist | Os dois | Contexto | 3 | 1 | Coloque o regulamento em `dados/regulamento.pdf` e os modelos em `dados/rh/` |
| 5 | Guia de dúvidas da Amorieu: página com férias, holerite, VT, plano e atestado, para mandar o link no WhatsApp | Dúvidas | Artifact | 3 | 2 | Depois do regulamento na pasta: "Monta um guia de dúvidas dos funcionários a partir do regulamento, como Artifact" |
| 6 | Parecer e comparativo dos 3 finalistas para o gestor | Recrutamento | Skill | 2 | 2 | "Cria a skill /parecer-finalistas a partir das minhas anotações de entrevista" |
| 7 | Resumo das vagas abertas para a reunião de segunda | Reunião com gestores | Rotina agendada | 2 | 2 | Depois do item 8: `/schedule` "toda segunda 7h30, resumo da planilha de vagas abertas" |
| 8 | Ligar Google Drive e Gmail no claude.ai | Recrutamento e contabilidade | Conector | 2 | 1 | claude.ai → Configurações → Conectores → Google Drive e Gmail |
| 9 | Publicar a vaga no LinkedIn e no Indeed com o texto pronto | Recrutamento | Claude no navegador | 1 | 1 | "Abra o Indeed e preencha a vaga com este texto; eu reviso antes de publicar" |
| 10 | Mensagens prontas para candidatos (convite, retorno, documentos da admissão) | Recrutamento e admissão | Prompt pronto | 2 | 1 | "Escreva 3 mensagens de WhatsApp para candidatos da Amorieu: convite para entrevista, retorno de não aprovado gentil e lista de documentos para admissão" |

## Rotinas agendadas
| Quando | O que roda | O que deixa pronto para revisar |
|---|---|---|
| Toda segunda, 7h30 | Lê a planilha de vagas abertas no Drive | Resumo para a reunião: vaga, gestor, etapa, há quantos dias está aberta, o que travou |
| Dia 20, 8h | Lembrete do fechamento do ponto | Checklist do fechamento e o rascunho do e-mail para a contabilidade. Passo a passo do fechamento `[a confirmar]` |

Nenhuma rotina envia mensagem ou e-mail sozinha: tudo fica como rascunho para você revisar.

## Skills para criar
| Nome | O que faz | Arquivos que lê |
|---|---|---|
| `/triagem-curriculos` | Compara os currículos com a vaga e devolve a tabela com motivo e sugestão de 10 | `dados/curriculos/<vaga>/`, descrição da vaga |
| `/parecer-finalistas` | Transforma as anotações de entrevista em parecer curto e comparativo dos 3 | Anotações, roteiro de entrevista, descrição da vaga |
| `/descricao-vaga` (depois dos modelos) | Escreve a vaga no padrão da Amorieu | `dados/rh/modelos-vaga.docx` |

## Conexões e arquivos que faltam
- Regulamento interno em PDF: sem ele, as sugestões 2 e 5 não funcionam.
- Modelos de descrição de vaga, roteiro de entrevista e checklist de admissão (Word).
- Planilha de vagas abertas (sem nome de candidato) ou o conector do Google Drive.
- Conector Gmail no claude.ai.
- Tangerino: não há conector. O fechamento do ponto fica fora até você contar o passo a passo `[a confirmar]`.

**Cuidado com dados pessoais (LGPD):** currículos e dúvidas de funcionários têm dado pessoal. Ficam em `dados/` ou no seu projeto do claude.ai, nunca em página pública. Apague os currículos da pasta quando a vaga fechar. O guia de dúvidas (sugestão 5) leva só regras gerais, nunca o caso de uma pessoa.

## O que continua com você (e por quê)
- **Decidir quem passa na triagem:** a IA sugere com motivo; a decisão e a responsabilidade são suas.
- **Entrevistar:** a conversa e a impressão sobre a pessoa não se automatizam.
- **Enviar a resposta ao funcionário ou ao candidato:** a IA rascunha, você confere e envia.
- **Contratação e salário:** continuam com o gestor e o diretor.
- **Casos delicados** (atestado, conflito, desligamento): a IA pode ajudar a escrever, mas a conversa é sua.
