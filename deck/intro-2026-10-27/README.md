# Deck da turma de 27/10/2026 (nova introdução, manhã e tarde)

Fonte dos slides novos e script que remonta o PDF público `site/downloads/apresentacao-imersao-ia.pdf` (96 páginas). O deck não mostra horários: nada de agenda, faixas, pausas com hora nem durações.

O deck original (v3, 75 páginas, gerado pelo Chromium com Geist) tem a fonte HTML em outro repositório. Aqui ficam só os slides novos, em HTML, e as páginas que não mudaram são reaproveitadas do PDF original.

- **Introdução:** 22 slides novos no visual da nova introdução.
- **Manhã e tarde:** 24 páginas refeitas ou novas (classe `.v3` em `slides.html`), recriadas no visual do deck v3: CSS medido sobre o PDF original renderizado a 1280×720 e comparado com `pdftoppm` (diferença de 1 a 3 px nas réplicas de calibração). Conteúdo conferido em `manha/` e `tarde/` deste repo, que são a fonte da verdade (não as Pages).

## Arquivos

| Arquivo | O que é |
|---|---|
| `slides.html` | Os 46 slides novos, um `<section class="slide">` por página, 1280×720 px CSS (= 960×540 pt). `data-id`: número do slide no roteiro da introdução; `m01`–`m22` (manhã; o prompt são `m02a` e `m02b`) e `t01`–`t06` (tarde) |
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

## Ordem final (96 páginas)

"orig pN" = página N do PDF de 75 páginas (commit fb89580); "novo ID" = slide de `slides.html`.

| Pág. | Slide | Origem |
|---|---|---|
| 1 | IA para empresários (capa) | original p1 |
| 2 | Quem sou: Lucas Santana | original p9 |
| 3 | Ruptura: seu negócio sobreviveria hoje sem internet? | original p2 |
| 4 | Eles não perderam para a tecnologia. Perderam para o novo modelo. | **novo 03** |
| 5 | Cada virada mudou como se trabalha. | original p11 |
| 6 | 100 mi: meses até 100 milhões de usuários (+ Stanford 53%) | **novo 05** |
| 7 | Ruptura silenciosa | original p3 |
| 8 | As empresas desta era. | **novo 07** |
| 9 | Lovable: de 45 para 146 pessoas, de US$ 75 mi para mais de US$ 600 mi. | **novo 08** |
| 10 | Base44: um dono, 6 meses, US$ 80 mi. | **novo 09** |
| 11 | Quantas pessoas a sua empresa precisaria se nascesse hoje? | **novo 10** |
| 12 | Empresas deixaram de ser hierarquias. Viraram sistemas de inteligência. | **novo 11** |
| 13 | O gestor vira arquiteto de fluxos. | **novo 12** |
| 14 | IA como primeiro recurso | **novo 12b** |
| 15 | Antes de contratar, prove que a IA não dá conta (Shopify) | **novo 12c** |
| 16 | Gestor antigo × gestor AI First. | **novo 12d** |
| 17 | IA tem que dar resultado. | **novo 12e** |
| 18 | Troque uma palavra (a pergunta que destrava) | **novo 12f** |
| 19 | A arquitetura de três camadas. | **novo 13** |
| 20 | Mesmo problema, outra conta (exemplo ilustrativo) | **novo 14** |
| 21 | Regra antiga, regra nova. | **novo 15** |
| 22 | Quase todo mundo usa. Poucos escalam. | **novo 16** |
| 23 | 7% das empresas estão de fato prontas para IA | original p5 |
| 24 | 16,3% da população em idade de trabalhar já usou IA generativa | original p6 |
| 25 | O abismo entre grandes e pequenas. | **novo 17** |
| 26 | A fronteira está fugindo. | **novo 18** |
| 27 | As áreas que mais cresceram com agentes. | **novo 19** |
| 28 | Onde a IA já chega no trabalho (Anthropic) | original p10 |
| 29 | Onde está o ganho medido. | **novo 21** |
| 30 | A promessa de hoje + as 5 fases | **novo 22** |
| 31 | Vídeo: tudo o que você faz no computador, a IA já faz (opcional) | original p13 |
| 32 | Fase 1: o modelo. | **novo m01** |
| 33 | O que é um LLM. | original p15 |
| 34 | Ele escolhe a próxima palavra mais provável. | original p16 |
| 35 | Como um LLM aprende. | original p17 |
| 36 | Mesma pergunta, respostas diferentes. | original p18 |
| 37 | Quem está na frente este mês. | original p19 |
| 38 | Inteligência × custo. | original p20 |
| 39 | Ao vivo: prompt bom é briefing de agência. As 4 partes: Papel, Contexto, Tarefa e Formato | **novo m02a** |
| 40 | Ao vivo: mesmo pedido, dois prompts (prompt ruim × prompt bom, lado a lado) | **novo m02b** |
| 41 | Fechando a fase 1: o LLM é só o motor. | original p21 |
| 42 | Claude Code = o Claude com acesso a uma pasta. | original p22 |
| 43 | Fase 2: MCP. | **novo m03** |
| 44 | MCP é o cabo USB da IA. | original p25 |
| 45 | Ao vivo: do Drive para a resposta | **novo m04** |
| 46 | Fase 3: skills. | **novo m05** |
| 47 | Skill é um arquivo. | original p31 |
| 48 | 3 jeitos de ter uma skill. | original p32 |
| 49 | Ao vivo: onde achar skills. | original p33 |
| 50 | Ao vivo: as skills já vieram na pasta (/eli5) | **novo m06** |
| 51 | Fase 4: contexto. | original p43 |
| 52 | A IA não é burra. Ela não tem contexto. | original p44 |
| 53 | Ao vivo: mesma pergunta, duas respostas (Torra Viva) | **novo m07** |
| 54 | Janela de contexto: uma caixa que enche. | original p47 |
| 55 | A pasta: imersao-manha (a sala de reunião e o CLAUDE.md) | **novo m08** |
| 56 | Sua vez: 6 passos com a Torra Viva Cafés Especiais | **novo m10** |
| 57 | Passo 1: abrir a pasta. | **novo m11** |
| 58 | Passo 2: a planilha da Torra Viva, em 3 passos. | **novo m12** |
| 59 | Passo 2 · façam junto: conectar o Google Drive | original p26 |
| 60 | Passo 2: pergunte à planilha. Uma de cada vez. | **novo m13** |
| 61 | Passo 3: prompt ruim × prompt bom. | **novo m15** |
| 62 | Passo 4: /eli5, me explique como se eu tivesse 5 anos. | **novo m16** |
| 63 | Passo 5: crie a /resposta-cliente. | **novo m17** |
| 64 | Passo 6: três páginas web (calculadora, dashboard e apresentação, em HTML com Claude Artifacts) | **novo m19** |
| 65 | Vocês deram contexto a manhã inteira (ponte para a tarde) | original p46 |
| 66 | Pausa: almoço | **novo m22** |
| 67 | Depois do almoço: como foi a primeira parte? | original p49 |
| 68 | Abertura: três empresas desta sala. Antes e depois. | **novo t01** |
| 69 | Case GCC Instalações Elétricas (plano B da abertura) | original p50 |
| 70 | Case Miss Wise (plano B da abertura) | original p51 |
| 71 | Case Meng Arquitetura (plano B da abertura) | original p52 |
| 72 | Fase 5: agentes. | original p54 |
| 73 | Harness = arreio. | original p55 |
| 74 | Harness = tudo o que vocês fizeram de manhã, numa pasta. | original p56 |
| 75 | A pasta: cerebro-da-empresa | original p57 |
| 76 | O CLAUDE.md é a regra da casa. | original p58 |
| 77 | A empresa em 6 fases. | original p59 |
| 78 | Façam junto: baixar e abrir. | original p60 |
| 79 | Sem clareza, não existe previsibilidade. | original p4 |
| 80 | Bloco A: o cérebro da empresa, fases 1 a 3 (/instalar, /mapear-empresa, /mapear-concorrentes) | **novo t02** |
| 81 | Bloco B: a página, /criar-pagina + /impeccable critique | **novo t03** |
| 82 | Pausa: café da tarde | original p69 |
| 83 | Bloco C: conteúdo só em HTML (/criar-conteudo) | **novo t04** |
| 84 | Bloco D: agora, você (/sobre-mim) | **novo t05** |
| 85 | Bloco E: o que a IA pode fazer por você (/sugerir-automacoes) | **novo t06** |
| 86 | Vocês acabaram de virar orquestradores. | original p64 |
| 87 | O cérebro da empresa: se o seu melhor operador sair amanhã, o que vai embora com ele? | original p65 |
| 88 | Quem monta o cérebro da empresa agora sai na frente. | original p66 |
| 89 | Onde a IA muda o jogo hoje: comece pela receita. | original p67 |
| 90 | Apolo: receita previsível em 90 dias. | original p68 |
| 91 | FDE: Forward Deployed Engineer. | original p70 |
| 92 | Os quatro lados do FDE. | original p71 |
| 93 | A empresa AI-native. | original p72 |
| 94 | A escada da empresa AI-native. | original p73 |
| 95 | Depoimentos. | original p74 |
| 96 | A IA executa. Você lidera. | original p75 |

Saíram do PDF base: p7, p8 e p12 (viraram os slides 13, 22 e 05); p14, p24 e p30 (divisores das fases 1 a 3 com "Façam junto", refeitos com "só eu mostro"); p23 (abrindo o Claude Code, virou o passo 1); p27 a p29 (Lanchonete Bom Pedaço, viraram o passo 2 da Torra Viva); p35 a p42 (sessões de skills da manhã antiga e a skill de reunião com arquivo da lanchonete, substituídas pela trilha de passos); p45 (mesma pergunta com a lanchonete); p48 (almoço sem horário); p34 (ao vivo: "primeiro procure, alguém já fez", saiu em 26/10); p53 (vídeo de agentes que citava Higgsfield); p61 a p63 (blocos A, B e C antigos da tarde). A lista com o motivo de cada uma está em `SAIRAM`, em `montar.py`.

Slides novos que saíram em 26/10 (pedido do Lucas): a agenda da manhã (m00), o intervalo (m09), o plano B do passo 2 (m14), o design system (m18), o Motion (m20) e o checkpoint (m21). O prompt (m02) virou dois: as 4 partes (m02a) e ruim × bom lado a lado (m02b).

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
