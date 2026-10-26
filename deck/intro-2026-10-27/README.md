# Deck da turma de 27/10/2026 (nova introdução, manhã e tarde)

Fonte dos slides novos e script que remonta o PDF público `site/downloads/apresentacao-imersao-ia.pdf` (102 páginas, agenda das 9h00 às 18h00).

O deck original (v3, 75 páginas, gerado pelo Chromium com Geist) tem a fonte HTML em outro repositório. Aqui ficam só os slides novos, em HTML, e as páginas que não mudaram são reaproveitadas do PDF original.

- **Introdução (9h00–10h00):** 22 slides novos no visual da nova introdução.
- **Manhã e tarde (10h00–17h05):** 29 páginas refeitas ou novas (classe `.v3` em `slides.html`), recriadas no visual do deck v3: CSS medido sobre o PDF original renderizado a 1280×720 e comparado com `pdftoppm` (diferença de 1 a 3 px nas réplicas de calibração). Conteúdo conferido em `manha/` e `tarde/` deste repo, que são a fonte da verdade (não as Pages).

## Arquivos

| Arquivo | O que é |
|---|---|
| `slides.html` | Os 51 slides novos, um `<section class="slide">` por página, 1280×720 px CSS (= 960×540 pt). `data-id`: número do slide no roteiro da introdução; `m00`–`m22` (manhã) e `t01`–`t06` (tarde) |
| `montar.py` | Monta o PDF final com pypdf. A ordem do deck inteiro está na lista `ORDEM` |
| `build.sh` | Faz tudo: pega o PDF base no git, imprime `slides.html` com o Chrome headless e chama `montar.py` |
| `roteiro.md` | Falas do palestrante da introdução, com horário, slide e fonte (as falas não vão nos slides), e o mapa do resto do dia |
| `fonts/` | Geist (variável) e Geist Mono, do pacote npm `geist` 1.8.2, licença OFL (`LICENSE-Geist.txt`) |
| `assets/fase-*.jpg` | Ícones 3D das 5 fases, extraídos da pág. 54 do PDF original (ativos do próprio deck) |
| `assets/fase-*-cinza.png` | Os mesmos ícones em cinza, para as fases que ainda não chegaram (extraídos da pág. 14 do PDF original) |
| `assets/pausa-estatua.jpg` | A imagem das páginas de pausa (extraída da pág. 48 do PDF original) |
| `build/` | Saídas intermediárias (ignorado pelo git) |

## Como gerar

```bash
pip install --user pypdf        # uma vez
deck/intro-2026-10-27/build.sh  # gera site/downloads/apresentacao-imersao-ia.pdf
```

Requisitos: `google-chrome` (ou `CHROME=/caminho/do/chrome`), `python3` com `pypdf`, `git` e `pdfinfo` (poppler).

**PDF base.** O script não usa uma cópia guardada: ele lê o PDF original direto do histórico com `git show fb89580:site/downloads/apresentacao-imersao-ia.pdf` (variável `BASE_COMMIT`). Assim o build é reproduzível mesmo depois que o PDF publicado for substituído, sem duplicar 25 MB no repo. O script confere que o base tem 75 páginas e que os slides novos saíram em 960×540 pt; `montar.py` confere que nenhuma página original sumiu sem estar na lista de substituídas.

O título do PDF (`IA para empresários · deck v3 · Lucas Santana`) é copiado do original.

Para editar um slide: mude `slides.html`, rode `build.sh` e confira os prints (`pdftoppm -r 100 -png`). Para mudar a ordem: edite `ORDEM` em `montar.py`.

## Ordem final (102 páginas)

"orig pN" = página N do PDF de 75 páginas (commit fb89580); "novo ID" = slide de `slides.html`. Horário: agenda de 27/10/2026 (o início de cada bloco é fixo; os minutos dentro do bloco são estimativa).

| Pág. | Slide | Horário | Origem |
|---|---|---|---|
| 1 | IA para empresários (capa) | 9h00 | original p1 |
| 2 | Quem sou: Lucas Santana | 9h01 | original p9 |
| 3 | Ruptura: seu negócio sobreviveria hoje sem internet? | 9h02 | original p2 |
| 4 | Eles não perderam para a tecnologia. Perderam para o novo modelo. | 9h05 | **novo 03** |
| 5 | Cada virada mudou como se trabalha. | 9h08 | original p11 |
| 6 | 100 mi: meses até 100 milhões de usuários (+ Stanford 53%) | 9h10 | **novo 05** |
| 7 | Ruptura silenciosa | 9h12 | original p3 |
| 8 | As empresas desta era. | 9h15 | **novo 07** |
| 9 | Lovable: de 45 para 146 pessoas, de US$ 75 mi para mais de US$ 600 mi. | 9h17 | **novo 08** |
| 10 | Base44: um dono, 6 meses, US$ 80 mi. | 9h20 | **novo 09** |
| 11 | Quantas pessoas a sua empresa precisaria se nascesse hoje? | 9h22 | **novo 10** |
| 12 | Empresas deixaram de ser hierarquias. Viraram sistemas de inteligência. | 9h25 | **novo 11** |
| 13 | O gestor vira arquiteto de fluxos. | 9h27 | **novo 12** |
| 14 | IA como primeiro recurso | 9h29 | **novo 12b** |
| 15 | Antes de contratar, prove que a IA não dá conta (Shopify) | 9h30 | **novo 12c** |
| 16 | Gestor antigo × gestor AI First. | 9h32 | **novo 12d** |
| 17 | IA tem que dar resultado. | 9h33 | **novo 12e** |
| 18 | Troque uma palavra (a pergunta que destrava) | 9h34 | **novo 12f** |
| 19 | A arquitetura de três camadas. | 9h35 | **novo 13** |
| 20 | Mesmo problema, outra conta (exemplo ilustrativo) | 9h37 | **novo 14** |
| 21 | Regra antiga, regra nova. | 9h38 | **novo 15** |
| 22 | Quase todo mundo usa. Poucos escalam. | 9h40 | **novo 16** |
| 23 | 7% das empresas estão de fato prontas para IA | 9h42 | original p5 |
| 24 | 16,3% da população em idade de trabalhar já usou IA generativa | 9h43 | original p6 |
| 25 | O abismo entre grandes e pequenas. | 9h44 | **novo 17** |
| 26 | A fronteira está fugindo. | 9h46 | **novo 18** |
| 27 | As áreas que mais cresceram com agentes. | 9h48 | **novo 19** |
| 28 | Onde a IA já chega no trabalho (Anthropic) | 9h50 | original p10 |
| 29 | Onde está o ganho medido. | 9h52 | **novo 21** |
| 30 | A promessa de hoje + as 5 fases | 9h55 | **novo 22** |
| 31 | Vídeo: tudo o que você faz no computador, a IA já faz (opcional) | 9h57 | original p13 |
| 32 | A manhã: primeiro eu mostro, depois vocês fazem | 10h00 | **novo m00** |
| 33 | Fase 1: o modelo. | 10h00 | **novo m01 (refaz original p14)** |
| 34 | O que é um LLM. | 10h01 | original p15 |
| 35 | Ele escolhe a próxima palavra mais provável. | 10h02 | original p16 |
| 36 | Como um LLM aprende. | 10h03 | original p17 |
| 37 | Mesma pergunta, respostas diferentes. | 10h05 | original p18 |
| 38 | Quem está na frente este mês. | 10h06 | original p19 |
| 39 | Inteligência × custo. | 10h07 | original p20 |
| 40 | Ao vivo: prompt bom é briefing de agência (Papel, Contexto, Tarefa, Formato) | 10h08 | **novo m02** |
| 41 | Fechando a fase 1: o LLM é só o motor. | 10h15 | original p21 |
| 42 | Claude Code = o Claude com acesso a uma pasta. | 10h16 | original p22 |
| 43 | Fase 2: MCP. | 10h18 | **novo m03 (refaz original p24)** |
| 44 | MCP é o cabo USB da IA. | 10h19 | original p25 |
| 45 | Ao vivo: do Drive para a resposta | 10h20 | **novo m04** |
| 46 | Fase 3: skills. | 10h25 | **novo m05 (refaz original p30)** |
| 47 | Skill é um arquivo. | 10h26 | original p31 |
| 48 | 3 jeitos de ter uma skill. | 10h27 | original p32 |
| 49 | Ao vivo: onde achar skills. | 10h28 | original p33 |
| 50 | Ao vivo: primeiro procure. Alguém já fez. | 10h29 | original p34 |
| 51 | Ao vivo: as skills já vieram na pasta (/eli5) | 10h30 | **novo m06** |
| 52 | Fase 4: contexto. | 10h33 | original p43 |
| 53 | A IA não é burra. Ela não tem contexto. | 10h34 | original p44 |
| 54 | A pasta: imersao-manha (a sala de reunião e o CLAUDE.md) | 10h35 | **novo m08** |
| 55 | Ao vivo: mesma pergunta, duas respostas (Torra Viva) | 10h38 | **novo m07** |
| 56 | Janela de contexto: uma caixa que enche. | 10h42 | original p47 |
| 57 | Pausa: intervalo | 10h45–10h55 | **novo m09** |
| 58 | Sua vez: 8 passos com a Torra Viva Cafés Especiais | 10h55 | **novo m10** |
| 59 | Passo 1: abrir a pasta. | 10h55–11h00 | **novo m11** |
| 60 | Passo 2: a planilha da Torra Viva, em 3 passos. | 11h00–11h08 | **novo m12** |
| 61 | Passo 2 · façam junto: conectar o Google Drive | 11h00–11h08 | original p26 |
| 62 | Passo 2: pergunte à planilha. Uma de cada vez. | 11h00–11h08 | **novo m13** |
| 63 | Passo 2 · plano B: sem Google? Os dados estão na pasta. | 11h00–11h08 | **novo m14** |
| 64 | Passo 3: prompt ruim × prompt bom. | 11h08–11h18 | **novo m15** |
| 65 | Passo 4: /eli5, me explique como se eu tivesse 5 anos. | 11h18–11h23 | **novo m16** |
| 66 | Passo 5: crie a /resposta-cliente. | 11h23–11h31 | **novo m17** |
| 67 | Passo 6: o design system. | 11h31–11h40 | **novo m18** |
| 68 | Passo 7: três páginas web. | 11h40–12h00 | **novo m19** |
| 69 | Passo 8: a animação (Claude Motion ou plano B em HTML) | 12h00–12h12 | **novo m20** |
| 70 | Checkpoint da manhã (tempo livre, compartilhamento, checkpoint) | 12h12–12h30 | **novo m21** |
| 71 | Vocês deram contexto a manhã inteira (ponte para a tarde) | 12h28 | original p46 |
| 72 | Pausa: almoço | 12h30–13h30 | **novo m22 (refaz original p48)** |
| 73 | Depois do almoço: como foi a primeira parte? | 13h30 | original p49 |
| 74 | Abertura: três empresas desta sala. Antes e depois. | 13h30–13h40 | **novo t01** |
| 75 | Case GCC Instalações Elétricas (plano B da abertura) | 13h30–13h40 | original p50 |
| 76 | Case Miss Wise (plano B da abertura) | 13h30–13h40 | original p51 |
| 77 | Case Meng Arquitetura (plano B da abertura) | 13h30–13h40 | original p52 |
| 78 | Fase 5: agentes. | 13h40 | original p54 |
| 79 | Harness = arreio. | 13h40 | original p55 |
| 80 | Harness = tudo o que vocês fizeram de manhã, numa pasta. | 13h41 | original p56 |
| 81 | A pasta: cerebro-da-empresa | 13h41 | original p57 |
| 82 | O CLAUDE.md é a regra da casa. | 13h42 | original p58 |
| 83 | A empresa em 6 fases. | 13h42 | original p59 |
| 84 | Façam junto: baixar e abrir. | 13h43 | original p60 |
| 85 | Sem clareza, não existe previsibilidade. | 13h44 | original p4 |
| 86 | Bloco A: o cérebro da empresa, fases 1 a 3 (/instalar, /mapear-empresa, /mapear-concorrentes) | 13h40–14h45 | **novo t02 (no lugar de original p61)** |
| 87 | Bloco B: a página, /criar-pagina + /impeccable critique | 14h45–15h25 | **novo t03 (no lugar de original p62)** |
| 88 | Pausa: café da tarde | 15h25–15h35 | original p69 (movido) |
| 89 | Bloco C: conteúdo só em HTML (/criar-conteudo) | 15h35–16h10 | **novo t04 (no lugar de original p63)** |
| 90 | Bloco D: agora, você (/sobre-mim) | 16h10–16h35 | **novo t05** |
| 91 | Bloco E: o que a IA pode fazer por você (/sugerir-automacoes) | 16h35–17h05 | **novo t06** |
| 92 | Vocês acabaram de virar orquestradores. | 17h05 | original p64 |
| 93 | O cérebro da empresa: se o seu melhor operador sair amanhã, o que vai embora com ele? | 17h05–18h00 | original p65 |
| 94 | Quem monta o cérebro da empresa agora sai na frente. | 17h05–18h00 | original p66 |
| 95 | Onde a IA muda o jogo hoje: comece pela receita. | 17h05–18h00 | original p67 |
| 96 | Apolo: receita previsível em 90 dias. | 17h05–18h00 | original p68 |
| 97 | FDE: Forward Deployed Engineer. | 17h05–18h00 | original p70 |
| 98 | Os quatro lados do FDE. | 17h05–18h00 | original p71 |
| 99 | A empresa AI-native. | 17h05–18h00 | original p72 |
| 100 | A escada da empresa AI-native. | 17h05–18h00 | original p73 |
| 101 | Depoimentos. | 17h05–18h00 | original p74 |
| 102 | A IA executa. Você lidera. | até 18h00 | original p75 |

Saíram do PDF base: p7, p8 e p12 (viraram os slides 13, 22 e 05); p14, p24 e p30 (divisores das fases 1 a 3 com "Façam junto", refeitos com "só eu mostro"); p23 (abrindo o Claude Code, virou o passo 1); p27 a p29 (Lanchonete Bom Pedaço, viraram o passo 2 da Torra Viva); p35 a p42 (sessões de skills da manhã antiga e a skill de reunião com arquivo da lanchonete, substituídas pela trilha de 8 passos); p45 (mesma pergunta com a lanchonete); p48 (almoço sem horário); p53 (vídeo de agentes que citava Higgsfield); p61 a p63 (blocos A, B e C antigos da tarde). A lista com o motivo de cada uma está em `SAIRAM`, em `montar.py`.

## Dados: regras seguidas

- Só entram números com status "Verificado" no estudo da nova introdução, com "Fonte:" no rodapé.
- Fora: "800 funcionários / US$ 93,7 mil por pessoa" (sem fonte) e Gamma (fonte primária não conferida).
- Slide 14: "US$ 15 mil/mês × US$ 200 em tokens" aparece só como **Exemplo ilustrativo**, com o rótulo no topo e no rodapé, sem fonte.
- Slides 12, 12b, 12d, 12e e 12f: conceito de referência da aula Acelera IA (@leosoares.ia), com desenho próprio.
- Slides 11 e 13: desenho próprio a partir de ilustrações de referência enviadas pelo Lucas, sem imagens nem logos de terceiros.

## Conferir antes da aula

- **Slide 03 (Kodak, Blockbuster, Nokia):** os fatos usados (câmera digital em 1975 e recuperação judicial em 2012; falência da Blockbuster em 2010; venda da divisão de celulares da Nokia à Microsoft em 2013) são amplamente documentados, mas os links estão como "conferir" no estudo. O valor de US$ 50 mi da Netflix ficou de fora.
- **Slide 08:** os pontos nov/25 (US$ 200 mi) e jan/26 (US$ 300 mi) vêm do gráfico do estudo; o rodapé cita os artigos do TechCrunch. Vale abrir o artigo de 11/03/2026 e confirmar os dois pontos intermediários.
- **Slides 11 e 13:** autoria das ilustrações de referência não identificada. O rodapé diz só "Redesenho 40 Hertz a partir de ilustração de referência".
- **Roteiro:** falas marcadas com ⚠️ em `roteiro.md` citam dados não verificados (Gartner, Blockbuster/Netflix, Base44 com 8 funcionários).
