# Mudanças no deck da imersão: nova introdução (turma de 27/10/2026)

PDF: `site/downloads/apresentacao-imersao-ia.pdf`. Antes 75 páginas, agora **94** (introdução: 13 → 31 páginas). Fonte dos slides novos e script de build em `deck/intro-2026-10-27/`.

Os prints desta pasta saem do PDF final (`pdftoppm -r 100`). O prefixo é a página nova. Também há prints da pág. 32 (Fase 1, para conferir a emenda) e da pág. 79 (Previsibilidade, na tarde).

## O que saiu

| Pág. antiga | Slide | Para onde foi |
|---|---|---|
| p7 | "A IA só dá certo depois de processos e pessoas" | Substituída pelo slide novo 13, "A arquitetura de três camadas" (pág. 19) |
| p8 | "A promessa de hoje" | Juntou-se às 5 fases no slide novo 22 (pág. 30), com a mesma frase |
| p12 | "100 mi de usuários em 2 meses" | Refeita como slide novo 05 (pág. 6), com o mesmo conteúdo e gráfico, mais o selo Stanford AI Index 2026: 53% em 3 anos |

Nenhuma página da manhã depois da introdução nem da tarde foi apagada.

## O que mudou de lugar

| Slide | Pág. antiga | Pág. nova |
|---|---|---|
| Capa | 1 | 1 |
| Quem sou | 9 | 2 |
| Ruptura: sem internet? | 2 | 3 |
| Cada virada mudou como se trabalha | 11 | 5 |
| Ruptura silenciosa | 3 | 7 |
| 7% (Veeam) | 5 | 23 |
| 16,3% (Microsoft) | 6 | 24 |
| Gráfico Anthropic | 10 | 28 |
| Vídeo GPT-6 Astra (agora opcional) | 13 | 31 |
| Fase 1 … "Baixar e abrir" | 14–60 | 32–78 (+18) |
| **Previsibilidade** (saiu da manhã) | 4 | **79**, logo antes de "BLOCO A · /mapear-empresa" |
| BLOCO A … fim | 61–75 | 80–94 (+19) |

## O que é novo (22 slides)

| Pág. | Slide | Conteúdo |
|---|---|---|
| 4 | 03 | Eles não perderam para a tecnologia: Kodak, Blockbuster, Nokia (sem logos) |
| 6 | 05 | 100 mi de usuários + selo Stanford 53% |
| 8 | 07 | As empresas desta era: Lovable (US$ 2,77 mi por funcionário) e Base44 (US$ 80 mi) |
| 9 | 08 | Lovable: ARR jun/25 75 → set/26 600+ (US$ mi), 45 pessoas (jul/25) e 146 (fev/26) |
| 10 | 09 | Base44: um dono, 6 meses, US$ 80 mi |
| 11 | 10 | Quantas pessoas a sua empresa precisaria se nascesse hoje? |
| 12 | 11 | Empresas viraram sistemas de inteligência (hierarquia × cérebro da empresa) |
| 13 | 12 | O gestor vira arquiteto de fluxos (5 decisões) |
| 14 | 12b | IA como primeiro recurso (o prompt "me faz as perguntas…") |
| 15 | 12c | Shopify: antes de contratar, prove que a IA não dá conta |
| 16 | 12d | Gestor antigo × gestor AI First |
| 17 | 12e | IA tem que dar resultado (receita, custo, produtividade) |
| 18 | 12f | "Será que" → "Como" |
| 19 | 13 | A arquitetura de três camadas (dados, sistemas, inteligência) |
| 20 | 14 | Mesmo problema, outra conta (**exemplo ilustrativo**) |
| 21 | 15 | Regra antiga, regra nova + 32% (McKinsey) |
| 22 | 16 | 88% usam, 44% escalam, 6% high performers |
| 25 | 17 | Agentes em escala: grandes 27% → 40%, menores 22% → 22% |
| 26 | 18 | Fronteira: 8,3x mais tokens por usuário; plugins 21% × 9%, skills 19% × 3% |
| 27 | 19 | Áreas: jurídico 108x, vendas 41x, recrutamento 41x, marketing 26x, engenharia 5x; agentes = 64% dos tokens |
| 29 | 21 | Ganho medido: atendimento +14 a 15%, software +26%, marketing +50% |
| 30 | 22 | A promessa + roadmap das 5 fases ("para orquestrar, primeiro é preciso entender o motor") |

As falas estão em `deck/intro-2026-10-27/roteiro.md`, não nos slides.

## Dados deixados de fora ou só ilustrativos

| Dado | Tratamento | Motivo |
|---|---|---|
| "Empresa tradicional: 800 funcionários, US$ 93,7 mil por pessoa" | **Fora** | Sem fonte (slide de @leosoares.ia) |
| Gamma: ~US$ 2 mi por funcionário | **Fora** (o slide 07 ficou só com Lovable e Base44) | Fonte primária não conferida |
| US$ 15 mil/mês em SDRs × US$ 200 em tokens | **Exemplo ilustrativo** (rótulo no topo e no rodapé, sem fonte) | Origem não identificada |
| Blockbuster recusou a Netflix por US$ 50 mi | **Fora** do slide; fala marcada com ⚠️ no roteiro | "Conferir link" |
| Kodak 1975/2012, Blockbuster 2010, Nokia/Microsoft 2013 | No slide 03, só os fatos, sem valores | Amplamente documentados, mas **conferir antes da aula** |
| Base44: 8 funcionários, 250 mil usuários, "projeto paralelo" | **Fora**; o slide usa só "um dono" (título do TechCrunch), 6 meses e US$ 80 mi | Não estão na lista de dados verificados |
| Gartner: US$ 2 mi por funcionário em 2030 | **Fora** do slide; fala marcada com ⚠️ | Não está na lista de dados verificados |
| "Custo marginal caiu duas ordens de grandeza" (fala do 14) | Fala reescrita sem número | Depende do exemplo ilustrativo |
| OpenAI 95%/93% (uso interno de plugins/skills) | Fora do gráfico do slide 18 | Verificado, mas tirado para simplificar |

## Pendências

- Conferir os links do slide 03 e os pontos nov/25 e jan/26 do gráfico da Lovable (slide 08).
- Autoria das ilustrações de referência dos slides 11 e 13.
- O portal (`site/index.html`) continua com a data 29/09 na trava e na contagem. Não mexi porque a trava não é sobre o deck. Ao publicar este PDF, ele substitui o material da turma de 29/09.
- Atualizar o guia do palestrante no Notion com a nova numeração (o estudo lista os passos).
- Não publicado: commit só local, sem push nem deploy.
