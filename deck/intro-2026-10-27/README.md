# Deck da turma de 27/10/2026 (nova introdução, manhã e tarde)

Fonte dos slides novos e script que remonta o PDF público `site/downloads/apresentacao-imersao-ia.pdf` (89 páginas). O deck não mostra horários: nada de agenda, faixas, pausas com hora nem durações.

O deck original (v3, 75 páginas, gerado pelo Chromium com Geist) tem a fonte HTML em outro repositório. Aqui ficam só os slides novos, em HTML, e as páginas que não mudaram são reaproveitadas do PDF original.

- **Introdução:** 22 slides novos no visual da nova introdução.
- **Manhã e tarde:** 23 páginas refeitas ou novas (classe `.v3` em `slides.html`), recriadas no visual do deck v3: CSS medido sobre o PDF original renderizado a 1280×720 e comparado com `pdftoppm` (diferença de 1 a 3 px nas réplicas de calibração). Conteúdo conferido em `manha/` e `tarde/` deste repo, que são a fonte da verdade (não as Pages).

## Arquivos

| Arquivo | O que é |
|---|---|
| `slides.html` | Os 45 slides novos, um `<section class="slide">` por página, 1280×720 px CSS (= 960×540 pt). `data-id`: número do slide no roteiro da introdução; `m01`–`m22` (manhã; o prompt são `m02a` e `m02b`) e `t01`–`t05` (tarde) |
| `montar.py` | Monta o PDF final com pypdf. A ordem do deck inteiro está na lista `ORDEM` |
| `build.sh` | Faz tudo: pega o PDF base no git, imprime `slides.html` com o Chrome headless e chama `montar.py` |
| `roteiro.md` | Falas do palestrante da introdução, com página, slide e fonte (as falas não vão nos slides), e o mapa do resto do dia |
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

## Ordem final (89 páginas)

"orig pN" = página N do PDF de 75 páginas (commit fb89580); "novo ID" = slide de `slides.html`.

| Pág. | Slide | Origem |
|---|---|---|
| 1 | IA para empresários (capa) | original p1 |
| 2 | Quem sou: Lucas Santana | original p9 |
| 3 | Ruptura: seu negócio sobreviveria hoje sem internet? | original p2 |
| 4 | Sem clareza, não existe previsibilidade. | original p4 |
| 5 | Eles não perderam para a tecnologia. Perderam para o novo modelo. | **novo 03** |
| 6 | Cada virada mudou como se trabalha. | original p11 |
| 7 | 100 mi: meses até 100 milhões de usuários (+ Stanford 53%) | **novo 05** |
| 8 | Ruptura silenciosa | original p3 |
| 9 | As empresas desta era. | **novo 07** |
| 10 | Lovable: de 45 para 146 pessoas, de US$ 75 mi para mais de US$ 600 mi. | **novo 08** |
| 11 | Base44: um dono, 6 meses, US$ 80 mi. | **novo 09** |
| 12 | Quantas pessoas a sua empresa precisaria se nascesse hoje? | **novo 10** |
| 13 | Empresas deixaram de ser hierarquias. Viraram sistemas de inteligência. | **novo 11** |
| 14 | O gestor vira arquiteto de fluxos. | **novo 12** |
| 15 | IA como primeiro recurso | **novo 12b** |
| 16 | Antes de contratar, prove que a IA não dá conta (Shopify) | **novo 12c** |
| 17 | Gestor antigo × gestor AI First. | **novo 12d** |
| 18 | IA tem que dar resultado. | **novo 12e** |
| 19 | Troque uma palavra (a pergunta que destrava) | **novo 12f** |
| 20 | A arquitetura de três camadas. | **novo 13** |
| 21 | Mesmo problema, outra conta (exemplo ilustrativo) | **novo 14** |
| 22 | Regra antiga, regra nova. | **novo 15** |
| 23 | Quase todo mundo usa. Poucos escalam. | **novo 16** |
| 24 | 7% das empresas estão de fato prontas para IA | original p5 |
| 25 | 16,3% da população em idade de trabalhar já usou IA generativa | original p6 |
| 26 | O abismo entre grandes e pequenas. | **novo 17** |
| 27 | A fronteira está fugindo. | **novo 18** |
| 28 | As áreas que mais cresceram com agentes. | **novo 19** |
| 29 | Onde a IA já chega no trabalho (Anthropic) | original p10 |
| 30 | Onde está o ganho medido. | **novo 21** |
| 31 | A promessa de hoje + as 5 fases | **novo 22** |
| 32 | Vídeo: tudo o que você faz no computador, a IA já faz (opcional) | original p13 |
| 33 | Fase 1: o modelo. | **novo m01** |
| 34 | O que é um LLM. | original p15 |
| 35 | Ele escolhe a próxima palavra mais provável. | original p16 |
| 36 | Como um LLM aprende. | original p17 |
| 37 | Mesma pergunta, respostas diferentes. | original p18 |
| 38 | Quem está na frente este mês. | original p19 |
| 39 | Inteligência × custo. | original p20 |
| 40 | Ao vivo: prompt bom é briefing de agência. As 4 partes: Papel, Contexto, Tarefa e Formato | **novo m02a** |
| 41 | Ao vivo: mesmo pedido, dois prompts (prompt ruim × prompt bom, lado a lado) | **novo m02b** |
| 42 | Fechando a fase 1: o LLM é só o motor. | original p21 |
| 43 | Claude Code = o Claude com acesso a uma pasta. | original p22 |
| 44 | Fase 2: MCP. | **novo m03** |
| 45 | MCP é o cabo USB da IA. | original p25 |
| 46 | Ao vivo: do Drive para a resposta | **novo m04** |
| 47 | Fase 3: skills. | **novo m05** |
| 48 | Skill é um arquivo. | original p31 |
| 49 | 3 jeitos de ter uma skill. | original p32 |
| 50 | Ao vivo: onde achar skills. | original p33 |
| 51 | Ao vivo: as skills já vieram na pasta (/eli5) | **novo m06** |
| 52 | Fase 4: contexto. | original p43 |
| 53 | A IA não é burra. Ela não tem contexto. | original p44 |
| 54 | Ao vivo: mesma pergunta, duas respostas (Torra Viva) | **novo m07** |
| 55 | Janela de contexto: uma caixa que enche. | original p47 |
| 56 | A pasta: imersao-manha (a sala de reunião e o CLAUDE.md) | **novo m08** |
| 57 | Sua vez: 6 passos com a Torra Viva Cafés Especiais | **novo m10** |
| 58 | Passo 1: abrir a pasta. | **novo m11** |
| 59 | Passo 2: a planilha da Torra Viva, em 3 passos. | **novo m12** |
| 60 | Passo 2 · façam junto: conectar o Google Drive | original p26 |
| 61 | Passo 2: pergunte à planilha. Uma de cada vez. | **novo m13** |
| 62 | Passo 3: prompt ruim × prompt bom. | **novo m15** |
| 63 | Passo 4: /eli5, me explique como se eu tivesse 5 anos. | **novo m16** |
| 64 | Passo 5: crie a /resposta-cliente. | **novo m17** |
| 65 | Passo 6: três páginas web (calculadora, dashboard e apresentação, em HTML com Claude Artifacts) | **novo m19** |
| 66 | Vocês deram contexto a manhã inteira (ponte para a tarde) | original p46 |
| 67 | Pausa: almoço | **novo m22** |
| 68 | Depois do almoço: como foi a primeira parte? | original p49 |
| 69 | Abertura: três empresas desta sala. Antes e depois. | **novo t01** |
| 70 | Harness = tudo o que vocês fizeram de manhã, numa pasta. | original p56 |
| 71 | A pasta: cerebro-da-empresa | original p57 |
| 72 | A empresa em 6 fases. | original p59 |
| 73 | Façam junto: baixar e abrir. | original p60 |
| 74 | Bloco A: o cérebro da empresa, fases 1 a 3 (/instalar, /mapear-empresa, /mapear-concorrentes) | **novo t02** |
| 75 | Bloco B: a página, /criar-pagina | **novo t03** |
| 76 | Pausa: café da tarde | original p69 |
| 77 | Bloco C: conteúdo só em HTML (/criar-conteudo) | **novo t04** |
| 78 | Bloco D: agora, você (/sobre-mim) | **novo t05** |
| 79 | Vocês acabaram de virar orquestradores. | original p64 |
| 80 | O cérebro da empresa: se o seu melhor operador sair amanhã, o que vai embora com ele? | original p65 |
| 81 | Quem monta o cérebro da empresa agora sai na frente. | original p66 |
| 82 | Onde a IA muda o jogo hoje: comece pela receita. | original p67 |
| 83 | Apolo: receita previsível em 90 dias. | original p68 |
| 84 | FDE: Forward Deployed Engineer. | original p70 |
| 85 | Os quatro lados do FDE. | original p71 |
| 86 | A empresa AI-native. | original p72 |
| 87 | A escada da empresa AI-native. | original p73 |
| 88 | Depoimentos. | original p74 |
| 89 | A IA executa. Você lidera. | original p75 |

Saíram do PDF base: p7, p8 e p12 (viraram os slides 13, 22 e 05); p14, p24 e p30 (divisores das fases 1 a 3 com "Façam junto", refeitos com "só eu mostro"); p23 (abrindo o Claude Code, virou o passo 1); p27 a p29 (Lanchonete Bom Pedaço, viraram o passo 2 da Torra Viva); p35 a p42 (sessões de skills da manhã antiga e a skill de reunião com arquivo da lanchonete, substituídas pela trilha de passos); p45 (mesma pergunta com a lanchonete); p48 (almoço sem horário); p34 (ao vivo: "primeiro procure, alguém já fez", saiu em 26/10); p53 (vídeo de agentes que citava Higgsfield); p61 a p63 (blocos A, B e C antigos da tarde); p50 a p52 (cases plano B), p54 e p55 (Fase 5 e harness = arreio) e p58 (CLAUDE.md é a regra da casa), que saíram em 26/10. A lista com o motivo de cada uma está em `SAIRAM`, em `montar.py`.

Slides novos que saíram em 26/10 (pedido do Lucas): a agenda da manhã (m00), o intervalo (m09), o plano B do passo 2 (m14), o design system (m18), o Motion (m20) e o checkpoint (m21). Na tarde, saiu o Bloco E (t06, /sugerir-automacoes), o Bloco B ficou só com o /criar-pagina (sem Impeccable) e a previsibilidade (p4) subiu para a introdução, logo depois da pág. 3. O prompt (m02) virou dois: as 4 partes (m02a) e ruim × bom lado a lado (m02b).

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
