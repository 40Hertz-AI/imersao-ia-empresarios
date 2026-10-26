# Deck da turma de 27/10/2026 (nova introdução, manhã e tarde)

Fonte dos slides novos e script que remonta o PDF público `site/downloads/apresentacao-imersao-ia.pdf` (75 páginas). O deck não mostra horários: nada de agenda, faixas, pausas com hora nem durações.

O deck original (v3, 75 páginas, gerado pelo Chromium com Geist) tem a fonte HTML em outro repositório. Aqui ficam só os slides novos, em HTML, e as páginas que não mudaram são reaproveitadas do PDF original.

- **Introdução:** 16 slides novos no visual da nova introdução, entre as páginas originais 1 a 3, 4, 7, 9 (a apresentação do Lucas), 10 e 13.
- **Manhã e tarde:** 27 páginas refeitas ou novas (classe `.v3` em `slides.html`), recriadas no visual do deck v3: CSS medido sobre o PDF original renderizado a 1280×720 e comparado com `pdftoppm` (diferença de 1 a 3 px nas réplicas de calibração). Conteúdo conferido em `torra-viva/` e `minha-empresa/` deste repo, que são a fonte da verdade (não as Pages).

## Arquivos

| Arquivo | O que é |
|---|---|
| `slides.html` | Os 44 slides novos, um `<section class="slide">` por página, 1280×720 px CSS (= 960×540 pt). `data-id`: número do slide no roteiro da introdução; `m01`–`m22` (manhã; o prompt é `m02a`) e `t01`–`t10` (a pasta minha-empresa, antes e depois do almoço) |
| `montar.py` | Monta o PDF final com pypdf. A ordem do deck inteiro está na lista `ORDEM` |
| `build.sh` | Faz tudo: pega o PDF base no git, imprime `slides.html` com o Chrome headless e chama `montar.py` |
| `roteiro.md` | Falas do palestrante da introdução, com página, slide e fonte (as falas não vão nos slides), e o mapa do resto do dia |
| `fonts/` | Geist (variável) e Geist Mono, do pacote npm `geist` 1.8.2, licença OFL (`LICENSE-Geist.txt`) |
| `assets/fase-*.jpg` | Ícones 3D das 5 fases, extraídos da pág. 54 do PDF original (ativos do próprio deck) |
| `assets/fase-*-cinza.png` | Os mesmos ícones em cinza, para as fases que ainda não chegaram (extraídos da pág. 14 do PDF original) |
| `assets/pausa-estatua.jpg` | A imagem das páginas de pausa (extraída da pág. 48 do PDF original) |
| `apresentacao.html` | Modelo do player para o navegador: troca de slide pelo teclado ou passador e toca o vídeo |
| `apresentacao/` | Versão para o navegador gerada pelo `build.sh` (ignorada pelo git): `index.html`, as páginas em `slides/NN.jpg` e o vídeo em `videos/` |
| `build/` | Saídas intermediárias (ignorado pelo git) |

## Como gerar

```bash
pip install --user pypdf        # uma vez
deck/intro-2026-10-27/build.sh  # gera site/downloads/apresentacao-imersao-ia.pdf
```

**Para apresentar no navegador:** abra `deck/intro-2026-10-27/apresentacao/index.html` (com dois cliques mesmo). As setas, o PageUp/PageDown (passador), Home e End trocam de slide, e F põe em tela cheia. No slide do vídeo (pág. 24, GPT-6 Astra), clique no vídeo ou aperte espaço para tocar ou pausar, com som. Cada página é a imagem do PDF; o vídeo fica por cima, na posição medida no deck v3. O vídeo não vai para o repo (é da OpenAI): o build copia de `VIDEOS` (padrão `~/Downloads/imersao-ia-dia-inteiro/img`, a pasta do deck v3).

Requisitos: `google-chrome` (ou `CHROME=/caminho/do/chrome`), `python3` com `pypdf`, `git` e `pdfinfo` (poppler).

**PDF base.** O script não usa uma cópia guardada: ele lê o PDF original direto do histórico com `git show fb89580:site/downloads/apresentacao-imersao-ia.pdf` (variável `BASE_COMMIT`). Assim o build é reproduzível mesmo depois que o PDF publicado for substituído, sem duplicar 25 MB no repo. O script confere que o base tem 75 páginas e que os slides novos saíram em 960×540 pt; `montar.py` confere que nenhuma página original sumiu sem estar na lista de substituídas.

O título do PDF (`IA para empresários · deck v3 · Lucas Santana`) é copiado do original.

Para editar um slide: mude `slides.html`, rode `build.sh` e confira os prints (`pdftoppm -r 100 -png`). Para mudar a ordem: edite `ORDEM` em `montar.py`.

## Ordem final (75 páginas)

"orig pN" = página N do PDF de 75 páginas (commit fb89580); "novo ID" = slide de `slides.html`.

| Pág. | Slide | Origem |
|---|---|---|
| 1 | IA para empresários (capa) | original p1 |
| 2 | Ruptura: seu negócio sobreviveria hoje sem internet? | original p2 |
| 3 | Ruptura silenciosa: as plataformas mudaram o jeito de consumir | original p3 |
| 4 | 100 mi: meses até 100 milhões de usuários (+ Stanford 53%) | **novo 05** |
| 5 | Lovable: de 45 para 146 pessoas, de US$ 75 mi para mais de US$ 600 mi. | **novo 08** |
| 6 | Base44: um dono, 6 meses, US$ 80 mi. | **novo 09** |
| 7 | Quantas pessoas a sua empresa precisaria se nascesse hoje? | **novo 10** |
| 8 | Empresas deixaram de ser hierarquias. Viraram sistemas de inteligência. | **novo 11** |
| 9 | Antes de contratar, prove que a IA não dá conta (Shopify) | **novo 12c** |
| 10 | Gestor antigo × gestor AI First. | **novo 12d** |
| 11 | IA tem que dar resultado. | **novo 12e** |
| 12 | Troque uma palavra (a pergunta que destrava) | **novo 12f** |
| 13 | A arquitetura de três camadas. | **novo 13** |
| 14 | Regra antiga, regra nova. | **novo 15** |
| 15 | Quase todo mundo usa. Poucos escalam. | **novo 16** |
| 16 | O abismo entre grandes e pequenas. | **novo 17** |
| 17 | Sem clareza, não existe previsibilidade. | original p4 |
| 18 | A IA só dá certo depois de processos e pessoas. | original p7 |
| 19 | As áreas que mais cresceram com agentes. | **novo 19** |
| 20 | Onde a IA já chega no trabalho (Anthropic) | original p10 |
| 21 | Onde está o ganho medido. | **novo 21** |
| 22 | Quem sou: Lucas Santana | original p9 |
| 23 | A promessa de hoje + as 5 fases | **novo 22** |
| 24 | Vídeo: tudo o que você faz no computador, a IA já faz (opcional) | original p13 |
| 25 | Fase 1: o modelo. | **novo m01** |
| 26 | O que é um LLM. | original p15 |
| 27 | Ele escolhe a próxima palavra mais provável. | original p16 |
| 28 | Como um LLM aprende. | original p17 |
| 29 | Mesma pergunta, respostas diferentes. | original p18 |
| 30 | Quem está na frente este mês. | original p19 |
| 31 | Inteligência × custo. | original p20 |
| 32 | Fechando a fase 1: o LLM é só o motor. | original p21 |
| 33 | Claude Code = o Claude com acesso a uma pasta. | original p22 |
| 34 | Fase 2: MCP. | **novo m03** |
| 35 | MCP é o cabo USB da IA. | original p25 |
| 36 | Ao vivo: do Drive para a resposta | **novo m04** |
| 37 | Fase 3: skills. | **novo m05** |
| 38 | Skill é um arquivo. | original p31 |
| 39 | 3 jeitos de ter uma skill. | original p32 |
| 40 | Ao vivo: onde achar skills. | original p33 |
| 41 | Ao vivo: as skills já vieram na pasta (/eli5) | **novo m06** |
| 42 | Fase 4: contexto. | original p43 |
| 43 | A IA não é burra. Ela não tem contexto. | original p44 |
| 44 | Ao vivo: mesma pergunta, duas respostas (Torra Viva) | **novo m07** |
| 45 | Janela de contexto: uma caixa que enche. | original p47 |
| 46 | A pasta: torra-viva (a sala de reunião e o CLAUDE.md) | **novo m08** |
| 47 | Ao vivo: 6 passos com a Torra Viva Cafés Especiais | **novo m10** |
| 48 | Ao vivo · passo 1: abrir a pasta. | **novo m11** |
| 49 | Ao vivo · passo 2: a planilha da Torra Viva, em 3 passos. | **novo m12** |
| 50 | Passo 2: conectar o Google Drive ("Façam junto" no original) | original p26 |
| 51 | Ao vivo · passo 2: pergunte à planilha. Uma de cada vez. | **novo m13** |
| 52 | Prompt bom é briefing de agência: Papel, Contexto, Tarefa e Formato | **novo m02a** |
| 53 | Ao vivo · passo 3: prompt ruim × prompt bom (o exemplo das 4 partes) | **novo m15** |
| 54 | Ao vivo · passo 4: /eli5 | **novo m16** |
| 55 | Ao vivo · passo 5: crie a /resposta-cliente. | **novo m17** |
| 56 | Ao vivo · passo 6: calculadora, dashboard e apresentação | **novo m19** |
| 57 | A pasta: minha-empresa | **novo t08** (era original p57) |
| 58 | A empresa em 8 fases (1 a 5 antes do almoço, 6 a 8 depois) | **novo t09** (era original p59) |
| 59 | Façam junto: baixar e abrir (pasta minha-empresa) | **novo t10** (era original p60) |
| 60 | Bloco A: fases 1 a 3 (/instalar, /mapear-empresa, /mapear-concorrentes) | **novo t02** |
| 61 | Bloco B: agora, você (/sobre-mim, fase 4) | **novo t05** |
| 62 | Bloco C: o que a IA pode fazer por você (/sugerir-automacoes, fase 5) | **novo t06** |
| 63 | Pausa: almoço | **novo m22** |
| 64 | Depois do almoço: como foi a primeira parte? | original p49 |
| 65 | Abertura: três empresas desta sala. Antes e depois. | **novo t01** |
| 66 | Harness = tudo o que vocês fizeram de manhã, numa pasta. | original p56 |
| 67 | Bloco D: a oferta (/criar-oferta, fase 6) | **novo t07** |
| 68 | Bloco E: a página (/criar-pagina, fase 7) | **novo t03** |
| 69 | Bloco F: conteúdo em HTML, com o botão "Gerar prompt de imagem" (/criar-conteudo, fase 8) | **novo t04** |
| 70 | Vocês acabaram de virar orquestradores. | original p64 |
| 71 | O cérebro da empresa: se o seu melhor operador sair amanhã, o que vai embora com ele? | original p65 |
| 72 | Quem monta o cérebro da empresa agora sai na frente. | original p66 |
| 73 | Onde a IA muda o jogo hoje: comece pela receita. | original p67 |
| 74 | Apolo: receita previsível em 90 dias. | original p68 |
| 75 | Pausa: café da tarde (último slide) | original p69 |

Saíram do PDF base: p12 (virou o slide 05); p5 e p6 (7% e 16,3%, saíram em 26/10); p14, p24 e p30 (divisores das fases 1 a 3 com "Façam junto", refeitos com "só eu mostro"); p23 (abrindo o Claude Code, virou o passo 1); p27 a p29 (Lanchonete Bom Pedaço, viraram o passo 2 da Torra Viva); p35 a p42 (sessões de skills da manhã antiga e a skill de reunião com arquivo da lanchonete, substituídas pela trilha de passos); p45 (mesma pergunta com a lanchonete); p48 (almoço sem horário); p34 (ao vivo: "primeiro procure, alguém já fez", saiu em 26/10); p53 (vídeo de agentes que citava Higgsfield); p61 a p63 (blocos A, B e C antigos da tarde); p50 a p52 (cases plano B), p54 e p55 (Fase 5 e harness = arreio) e p58 (CLAUDE.md é a regra da casa), que saíram em 26/10. A lista com o motivo de cada uma está em `SAIRAM`, em `montar.py`.

Slides novos que saíram em 26/10 (pedido do Lucas): Kodak/Blockbuster/Nokia (03), o exemplo ilustrativo (14), a fronteira está fugindo (18), a agenda da manhã (m00), o intervalo (m09), o plano B do passo 2 (m14), o design system (m18), o Motion (m20) e o checkpoint (m21). Na tarde, saiu o Bloco E (t06, /sugerir-automacoes), o Bloco B ficou só com o /criar-pagina (sem Impeccable) e a previsibilidade (p4) subiu para a introdução, logo depois da pág. 3, e o café da tarde foi para depois do Apolo. O prompt (m02) virou dois: as 4 partes (m02a) e ruim × bom lado a lado (m02b).

Segunda rodada de 26/10 (pedido do Lucas): de manhã os alunos não fazem a prática, só o Lucas mostra na pasta `torra-viva` (os slides de passo viraram "Ao vivo"). O m02b saiu (o exemplo já é o passo 3) e o m02a foi para logo antes do passo 3. Saíram a ponte (p46) e, no fim, o FDE até "A IA executa. Você lidera." (p70 a p75): o café da tarde é o último slide. A pasta, as fases e o baixar e abrir (p57, p59, p60) viraram t08, t09 e t10 com a pasta `minha-empresa` em 8 fases, e subiram para antes do almoço com os Blocos A (fases 1 a 3), B (/sobre-mim) e C (/sugerir-automacoes, o t06 de volta). Depois do almoço: Blocos D (/criar-oferta, t07, novo), E (/criar-pagina) e F (/criar-conteudo).

Terceira rodada de 26/10 (pedido do Lucas), na introdução: saíram o "hoje vocês saem do chat" (p8, repetia a promessa), o "cada virada" (p11), as empresas desta era (07), o arquiteto de fluxos (12) e a IA como primeiro recurso (12b). A previsibilidade (p4) e o processos e pessoas (p7) desceram para depois do abismo (17), e o "quem sou" (p9) para logo antes da promessa (22). O slide novo do contexto (05a), que entrou nessa rodada, também saiu. Deck com 75 páginas.

## Dados: regras seguidas

- Só entram números com status "Verificado" no estudo da nova introdução, com "Fonte:" no rodapé.
- Fora: "800 funcionários / US$ 93,7 mil por pessoa" (sem fonte) e Gamma (fonte primária não conferida).
- Slides 12, 12b, 12d, 12e e 12f: conceito de referência da aula Acelera IA (@leosoares.ia), com desenho próprio.
- Slides 11 e 13: desenho próprio a partir de ilustrações de referência enviadas pelo Lucas, sem imagens nem logos de terceiros.

## Conferir antes da aula

- **Slide 08:** os pontos nov/25 (US$ 200 mi) e jan/26 (US$ 300 mi) vêm do gráfico do estudo; o rodapé cita os artigos do TechCrunch. Vale abrir o artigo de 11/03/2026 e confirmar os dois pontos intermediários.
- **Slides 11 e 13:** autoria das ilustrações de referência não identificada. O rodapé diz só "Redesenho 40 Hertz a partir de ilustração de referência".
- **Roteiro:** falas marcadas com ⚠️ em `roteiro.md` citam dados não verificados (Gartner, Blockbuster/Netflix, Base44 com 8 funcionários).
