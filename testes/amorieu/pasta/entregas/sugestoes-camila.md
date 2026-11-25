# O que a IA pode fazer pela Camila
Base: mapa do `/sobre-mim` (`memoria/sobre-mim.md`), `pesquisa/diagnostico.md`, `pesquisa/concorrentes.md`, `memoria/foco.md` · Data: 2026-10-26

## Em uma frase
A IA tira da Camila a parte braçal dos 2 processos que mais pesam (as umas 8 h semanais do conteúdo e o dia inteiro do relatório): ela pesquisa os concorrentes, rascunha pautas e legendas e junta os números; a Camila escolhe, ajusta e leva ao diretor.

## As 3 primeiras (fazer esta semana)

### 1. Pautas e legendas do mês com o `/criar-conteudo`
- **O que é:** a skill que já existe na pasta monta pilares, 12 pautas, calendário de 4 semanas, 1 carrossel e 2 posts com a marca. Acaba com o "fiquei sem ideia de tema" de segunda.
- **Processo:** 1 · Conteúdo do Instagram e do LinkedIn (passos 1 e 3: temas e legendas).
- **Tipo:** Skill (já existe, é só usar) · **Impacto 3 · Esforço 1**
- **Próximo passo:** `/criar-conteudo` (melhor depois do `/criar-oferta`, para as pautas puxarem a mesa de casamento).

### 2. Pesquisa dos 5 concorrentes com o Claude no navegador
- **O que é:** o Claude abre o Instagram de cada concorrente na aba que a Camila já tem logada, lê os posts da semana e devolve um resumo: temas, formatos, o que teve mais curtida, o que ninguém está falando. A Camila assiste; ele não curte, não comenta e não digita senha.
- **Processo:** 1 · Conteúdo (passo 2: pesquisar concorrentes na mão, a dor principal).
- **Tipo:** Claude no navegador · **Impacto 3 · Esforço 1**
- **Próximo passo:** escrever os 5 @ em `dados/concorrentes-instagram.md` e, com a extensão do Claude no Chrome aberta, colar:
  "Abra o Instagram de cada perfil desta lista: <cole os 5 @>. Para cada um, olhe os posts dos últimos 7 dias e me diga: tema, formato (carrossel, reels, foto), o que teve mais curtidas e comentários, e se falam de casamento ou de preço. No fim, 3 temas que nenhum deles cobriu e que combinam com uma confeitaria de Mogi que faz mesa de casamento. Só leia: não curta, não comente, não siga ninguém."

### 3. Skill `/relatorio-mensal`
- **O que é:** a Camila solta em `dados/relatorio-AAAA-MM/` os 4 arquivos do mês (exportação do Meta Business Suite, do Google Analytics, o PDF da agência e a planilha de leads). A skill lê, compara com o mês anterior, escreve os destaques e o texto de cada slide no formato do modelo dela. Ela só cola no Google Slides e revisa.
- **Processo:** 2 · Relatório mensal (passos 1 a 5: copiar número de 4 lugares e montar).
- **Tipo:** Skill · **Impacto 3 · Esforço 2**
- **Próximo passo:** colocar na pasta `dados/` o modelo do relatório (Slides baixado em .pdf ou .pptx) e os 4 arquivos de outubro; depois pedir: "Cria a skill /relatorio-mensal que lê os arquivos de dados/relatorio-AAAA-MM/ e monta o relatório no formato do modelo."

## Todas as sugestões

| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |
|---|---|---|---|---|---|---|
| 1 | Pautas, calendário e legendas do mês | Conteúdo | Skill (já existe) | 3 | 1 | `/criar-conteudo` |
| 2 | Resumo semanal dos 5 concorrentes no Instagram | Conteúdo | Claude no navegador | 3 | 1 | Prompt da sugestão 2 com a extensão do Chrome aberta |
| 3 | Relatório mensal montado a partir dos 4 arquivos | Relatório | Skill | 3 | 2 | Coloque o modelo e os 4 arquivos em `dados/` e peça a skill `/relatorio-mensal` |
| 4 | Trazer a lista de concorrentes, o calendário editorial e o modelo do relatório | Conteúdo e relatório | Contexto | 2 | 1 | Coloque os arquivos de `memoria/falta-trazer.md` em `dados/` |
| 5 | Ligar o Google Drive para o Claude ler a planilha de leads e o calendário sem baixar | Relatório e conteúdo | Conector | 2 | 1 | No claude.ai: Configurações → Conectores → Google Drive |
| 6 | Toda segunda 7h: rascunho da pauta da semana | Conteúdo | Rotina agendada | 2 | 2 | `/schedule` "Toda segunda às 7h, leia o calendário editorial e as datas da semana e deixe 4 temas com legenda em rascunho. Não publique nada." |
| 7 | Toda sexta 8h: rascunho da newsletter com os posts da semana | Newsletter (RD Station) | Rotina agendada | 2 | 2 | `/schedule` "Toda sexta às 8h, junte os posts da semana num rascunho de newsletter no tom de memoria/preferencias.md. Não envie." |
| 8 | Projeto "Marketing Amorieu" com manual da marca, tom de voz e fichas técnicas | Material do comercial, fichas para fornecedores | Projeto (claude.ai) | 2 | 2 | Crie o projeto no claude.ai e suba o manual da marca, `memoria/preferencias.md` e as fichas técnicas |
| 9 | Painel do relatório mensal para o diretor abrir no navegador | Relatório | Artifact | 2 | 2 | Depois da sugestão 3: "Transforma o relatório deste mês num painel com os números principais e o comparativo com o mês anterior." |
| 10 | Saber quais leads viraram venda | Relatório | Prompt pronto | 3 | 3 | Combinar com o comercial onde a venda é registrada; depois: "Cruze dados/leads.csv com dados/vendas.csv pelo e-mail ou telefone e me diga quantos leads de cada canal viraram venda." |

Tempo poupado: só há número para o conteúdo (umas 8 h por semana) e para o relatório (um dia inteiro por mês). Quanto cada sugestão tira desse tempo: `estimativa` `[a confirmar]` depois de testar.

## Rotinas agendadas

| Quando | O que roda | O que deixa pronto para revisar |
|---|---|---|
| Toda segunda, 7h | Lê o calendário editorial (Drive) e as datas da semana (Black Friday, kits de fim de ano, temporada de casamento) | 4 temas com legenda em rascunho. A Camila escolhe, faz a arte e manda ao diretor |
| Toda sexta, 8h | Junta os posts publicados na semana e as novidades do site | Rascunho da newsletter. A Camila revisa e envia pelo RD Station |
| Dia 4 do mês, 18h (depois da skill da sugestão 3) | Lembra de soltar os 4 arquivos em `dados/` e roda o `/relatorio-mensal` assim que eles chegam | Texto do relatório pronto para o dia 5 |

Nenhuma rotina publica, agenda post ou envia e-mail sozinha.

## Skills para criar

| Nome | O que faz | Arquivos que lê |
|---|---|---|
| `/relatorio-mensal` | Junta os números das 4 fontes, compara com o mês anterior, escreve os destaques e o texto de cada slide | `dados/relatorio-AAAA-MM/*` (Meta, Analytics, PDF da agência, planilha de leads), modelo do relatório |
| `/concorrentes-semana` (se a sugestão 2 virar hábito) | Guarda o resumo semanal dos 5 concorrentes num arquivo, para ver a evolução no mês | `dados/concorrentes-instagram.md`, `pesquisa/concorrentes.md` |

Já existem e resolvem parte do trabalho: `/criar-conteudo` (pautas, carrossel, posts), `/criar-oferta` e `/criar-pagina` (mesa de casamento).

## Conexões e arquivos que faltam
- **Google Drive** (conector no claude.ai): calendário editorial, planilha de leads, modelo do relatório.
- **Lista dos 5 concorrentes** com nome e @: hoje só está na cabeça da Camila.
- **Onde o comercial registra a venda:** sem isso, a pergunta "qual lead virou venda" não fecha.
- **Manual da marca e fichas técnicas** em `dados/`.
- Meta Business Suite, Google Analytics e RD Station: por enquanto, exportar o arquivo do mês e soltar na pasta (ligar direto depende de acesso e pode precisar de TI: esforço 3).

## O que continua com você (e por quê)
- **Escolher o que postar e o calendário:** é decisão sua; a IA só traz opções.
- **Aprovação do diretor e verba de anúncio:** decisão dele, pelo WhatsApp.
- **Conversa com a agência:** relação e negociação; a IA pode só preparar a pauta da reunião.
- **Arte final no Canva e fotos dos produtos:** o olho da marca é seu (a IA sugere, você aprova).
- **Enviar newsletter, agendar posts, responder comercial e fornecedores:** sempre depois de você revisar.
