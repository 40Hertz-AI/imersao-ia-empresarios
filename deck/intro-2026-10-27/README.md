# Nova introdução do deck (turma de 27/10/2026)

Fonte dos slides novos da primeira hora (9h00–10h00) e script que remonta o PDF público `site/downloads/apresentacao-imersao-ia.pdf`.

O deck original (v3, 75 páginas, gerado pelo Chromium com Geist) tem a fonte HTML em outro repositório. Aqui ficam só os slides novos, em HTML, e as páginas que não mudaram são reaproveitadas do PDF original.

## Arquivos

| Arquivo | O que é |
|---|---|
| `slides.html` | Os 22 slides novos, um `<section class="slide">` por página, 1280×720 px CSS (= 960×540 pt). `data-id` é o número do slide no roteiro |
| `montar.py` | Monta o PDF final com pypdf. A ordem do deck inteiro está na lista `ORDEM` |
| `build.sh` | Faz tudo: pega o PDF base no git, imprime `slides.html` com o Chrome headless e chama `montar.py` |
| `roteiro.md` | Falas do palestrante, com horário, slide e fonte (as falas não vão nos slides) |
| `fonts/` | Geist (variável) e Geist Mono, do pacote npm `geist` 1.8.2, licença OFL (`LICENSE-Geist.txt`) |
| `assets/fase-*.jpg` | Ícones 3D das 5 fases, extraídos da pág. 54 do PDF original (ativos do próprio deck) |
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

## Ordem final (94 páginas)

"original pN" = página N do PDF de 75 páginas (commit fb89580).

| Pág. | Slide | Origem |
|---|---|---|
| 1 | 01 Capa | original p1 |
| 2 | Quem sou | original p9 |
| 3 | 02 Seu negócio sobreviveria sem internet? | original p2 |
| 4 | 03 Eles não perderam para a tecnologia (Kodak, Blockbuster, Nokia) | **novo** |
| 5 | 04 Cada virada mudou como se trabalha | original p11 |
| 6 | 05 100 mi de usuários + selo Stanford 53% | **novo** (refaz p12 com o selo) |
| 7 | 06 Ruptura silenciosa | original p3 |
| 8 | 07 As empresas desta era | **novo** |
| 9 | 08 Lovable: ARR × funcionários | **novo** |
| 10 | 09 Base44 | **novo** |
| 11 | 10 Quantas pessoas a sua empresa precisaria? | **novo** |
| 12 | 11 Empresas viraram sistemas de inteligência | **novo** |
| 13 | 12 O gestor vira arquiteto de fluxos | **novo** |
| 14 | 12b IA como primeiro recurso | **novo** |
| 15 | 12c Shopify: antes de contratar, prove que a IA não dá conta | **novo** |
| 16 | 12d Gestor antigo × gestor AI First | **novo** |
| 17 | 12e IA tem que dar resultado | **novo** |
| 18 | 12f A pergunta que destrava | **novo** |
| 19 | 13 A arquitetura de três camadas | **novo** (substitui p7) |
| 20 | 14 Mesmo problema, outra conta (exemplo ilustrativo) | **novo** |
| 21 | 15 Regra antiga, regra nova (+32% McKinsey) | **novo** |
| 22 | 16 Quase todo mundo usa. Poucos escalam | **novo** |
| 23 | 7% das empresas prontas (Veeam) | original p5 |
| 24 | 16,3% já usaram IA generativa (Microsoft) | original p6 |
| 25 | 17 O abismo entre grandes e pequenas | **novo** |
| 26 | 18 A fronteira está fugindo | **novo** |
| 27 | 19 As áreas que mais cresceram com agentes | **novo** |
| 28 | 20 Onde a IA já chega no trabalho (Anthropic) | original p10 |
| 29 | 21 Onde está o ganho medido | **novo** |
| 30 | 22 A promessa + as 5 fases | **novo** (substitui p8) |
| 31 | Vídeo GPT-6 Astra (opcional) | original p13 |
| 32–78 | Fase 1: o modelo … "Baixar e abrir" | original p14–p60 |
| 79 | Previsibilidade (movido para a tarde) | original p4 |
| 80–94 | BLOCO A · /mapear-empresa … "A IA executa. Você lidera." | original p61–p75 |

Saíram: p7 (virou o slide 13), p8 (virou o slide 22) e p12 (virou o slide 05).

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
