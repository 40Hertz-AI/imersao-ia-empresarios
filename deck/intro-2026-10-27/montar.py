#!/usr/bin/env python3
"""Monta o deck final: slides novos (novos.pdf) + páginas reaproveitadas do PDF base.

Uso: python3 montar.py <base.pdf> <novos.pdf> <slides.html> <saida.pdf>
A ordem do deck está em ORDEM, abaixo. ("orig", N) = página N do PDF base (deck v3,
75 páginas, commit fb89580); ("novo", "ID") = slide de slides.html com data-id="ID".
"""
import re
import sys

from pypdf import PdfReader, PdfWriter

INTRO = [
    ("orig", 1),     # 01 capa
    ("orig", 2),     # ruptura: sem internet
    ("orig", 3),     # ruptura silenciosa (plataformas)
    ("orig", 4),     # previsibilidade
    ("orig", 7),     # a IA só dá certo depois de processos e pessoas (voltou em 26/10)
    ("orig", 8),     # hoje vocês saem do chat (voltou em 26/10)
    ("orig", 9),     # quem sou
    ("orig", 11),    # cada virada mudou como se trabalha
    ("novo", "05"),  # 100 mi + selo Stanford 53% (substitui p12)
    ("novo", "07"),  # as empresas desta era
    ("novo", "08"),  # Lovable
    ("novo", "09"),  # Base44
    ("novo", "10"),  # a pergunta
    ("novo", "11"),  # sistemas de inteligência
    ("novo", "12"),  # arquiteto de fluxos
    ("novo", "12b"),
    ("novo", "12c"),
    ("novo", "12d"),
    ("novo", "12e"),
    ("novo", "12f"),
    ("novo", "13"),  # três camadas
    ("novo", "15"),
    ("novo", "16"),
    ("novo", "17"),
    ("novo", "19"),
    ("orig", 10),    # gráfico Anthropic
    ("novo", "21"),
    ("novo", "22"),  # promessa + 5 fases
    ("orig", 13),    # vídeo GPT-6 Astra (opcional)
]
# Manhã: teoria demonstrada (fases 1 a 4), a pasta abre a parte prática, trilha de 6 passos com a
# Torra Viva e almoço. Sem horários no deck. Comentários "pág. NN" = página no PDF anterior, de 102.
MANHA = [
    ("novo", "m01"),  # Fase 1: o modelo (rodapé "só eu mostro")
    ("orig", 15),     # o que é um LLM
    ("orig", 16),     # próxima palavra
    ("orig", 17),     # como um LLM aprende
    ("orig", 18),     # respostas diferentes
    ("orig", 19),     # quem está na frente
    ("orig", 20),     # inteligência x custo
    ("novo", "m02a"), # prompt: as 4 partes (era a pág. 40, dividida em duas)
    ("novo", "m02b"), # prompt ruim x prompt bom, lado a lado
    ("orig", 21),     # o LLM é só o motor
    ("orig", 22),     # Claude Code = o Claude com acesso a uma pasta
    ("novo", "m03"),  # Fase 2: MCP
    ("orig", 25),     # MCP é o cabo USB da IA
    ("novo", "m04"),  # ao vivo: do Drive para a resposta
    ("novo", "m05"),  # Fase 3: skills
    ("orig", 31),     # skill é um arquivo
    ("orig", 32),     # 3 jeitos de ter uma skill
    ("orig", 33),     # ao vivo: onde achar skills
    ("novo", "m06"),  # ao vivo: as skills já vieram na pasta, /eli5
    ("orig", 43),     # Fase 4: contexto
    ("orig", 44),     # a IA não é burra, ela não tem contexto
    ("novo", "m07"),  # mesma pergunta, duas respostas (Torra Viva)
    ("orig", 47),     # janela de contexto
    ("novo", "m08"),  # a pasta imersao-manha: abre a parte prática
    ("novo", "m10"),  # sua vez: a trilha de 6 passos
    ("novo", "m11"),  # passo 1 · abrir a pasta
    ("novo", "m12"),  # passo 2 · a planilha da Torra Viva
    ("orig", 26),     # passo 2 · façam junto: conectar o Google Drive
    ("novo", "m13"),  # passo 2 · pergunte à planilha
    ("novo", "m15"),  # passo 3 · prompts
    ("novo", "m16"),  # passo 4 · /eli5
    ("novo", "m17"),  # passo 5 · /resposta-cliente
    ("novo", "m19"),  # passo 6 · três páginas web com Artifacts
    ("orig", 46),     # vocês deram contexto a manhã inteira (ponte)
    ("novo", "m22"),  # almoço
]
# Tarde. Do "orquestradores" (orig 64) em diante, sem mudança de conteúdo:
# só o Café da tarde (orig 69) entra entre o Apolo (orig 68) e o FDE (orig 70).
TARDE = [
    ("orig", 49),     # como foi a primeira parte?
    ("novo", "t01"),  # abertura: 3 empresas da sala
    ("orig", 56),     # harness = tudo numa pasta
    ("orig", 57),     # a pasta cerebro-da-empresa
    ("orig", 59),     # a empresa em 6 fases
    ("orig", 60),     # baixar e abrir
    ("novo", "t02"),  # bloco A: fases 1 a 3
    ("novo", "t03"),  # bloco B: página com o /criar-pagina
    ("novo", "t04"),  # bloco C: conteúdo em HTML
    ("novo", "t05"),  # bloco D: /sobre-mim
    ("orig", 64),     # vocês acabaram de virar orquestradores
    ("orig", 65),
    ("orig", 66),
    ("orig", 67),
    ("orig", 68),     # Apolo · receita previsível
    ("orig", 69),     # café da tarde (depois do Apolo, antes do FDE)
    ("orig", 70),     # FDE
    ("orig", 71),
    ("orig", 72),
    ("orig", 73),
    ("orig", 74),     # depoimentos
    ("orig", 75),     # a IA executa. Você lidera.
]
ORDEM = INTRO + MANHA + TARDE
# Páginas do PDF base que saíram (com o que as substitui):
SAIRAM = {
    12,                  # intro: virou o slide 05
    5, 6,                # 7% Veeam e 16,3% Microsoft (saíram em 26/10)
    14, 24, 30,          # divisores das fases 1, 2 e 3 ("Façam junto") -> m01, m03, m05
    23,                  # façam junto: abrindo o Claude Code -> passo 1 (m11)
    27, 28, 29,          # Lanchonete Bom Pedaço -> passo 2 da Torra Viva (m12, m13, m14)
    35, 36, 37,          # skills na pasta, duas sessões, ELI5 -> m06 e passo 4 (m16)
    38, 39, 40, 41,      # sessão 2 (entrevista, design system, apresentação, MCP) -> passo 6 (páginas web)
    42,                  # resumir-reuniao com arquivo da lanchonete -> passo 5 (m17)
    45,                  # mesma pergunta com a lanchonete -> m07
    48,                  # almoço sem horário -> m22
    53,                  # vídeo de agentes (citava Higgsfield): fora
    61, 62, 63,          # blocos A, B e C antigos -> t02, t03, t04
    34,                  # ao vivo: primeiro procure, alguém já fez (saiu em 26/10)
    50, 51, 52,          # cases GCC, Miss Wise e Meng, plano B da abertura (saíram em 26/10)
    54, 55,              # Fase 5: agentes e harness = arreio (saíram em 26/10)
    58,                  # CLAUDE.md é a regra da casa (saiu em 26/10)
}


def main(base_path, novos_path, html_path, out_path):
    base = PdfReader(base_path)
    novos = PdfReader(novos_path)
    ids = re.findall(r'<section class="slide[^"]*" data-id="([^"]+)"', open(html_path, encoding="utf-8").read())
    if len(ids) != len(novos.pages):
        sys.exit(f"slides.html tem {len(ids)} slides, mas novos.pdf tem {len(novos.pages)} páginas")
    idx = {sid: i for i, sid in enumerate(ids)}

    usadas = [n for k, n in ORDEM if k == "orig"]
    faltando = set(range(1, len(base.pages) + 1)) - set(usadas) - SAIRAM
    if faltando or len(usadas) != len(set(usadas)):
        sys.exit(f"páginas originais faltando ou repetidas: {sorted(faltando)}")
    if [k for k, n in ORDEM if k == "novo"] and sorted(n for k, n in ORDEM if k == "novo") != sorted(ids):
        sys.exit("ORDEM e slides.html não têm os mesmos slides novos")

    w = PdfWriter()
    for kind, ref in ORDEM:
        w.add_page(base.pages[ref - 1] if kind == "orig" else novos.pages[idx[ref]])
    title = (base.metadata or {}).get("/Title", "IA para empresários")
    w.add_metadata({"/Title": title, "/Author": "Lucas Santana · 40 Hertz", "/Creator": "Chromium + pypdf (deck/intro-2026-10-27)"})
    w.compress_identical_objects()
    with open(out_path, "wb") as f:
        w.write(f)
    print(f"{out_path}: {len(ORDEM)} páginas ({len(INTRO)} na introdução, {len(MANHA)} na manhã, {len(TARDE)} na tarde)")


if __name__ == "__main__":
    main(*sys.argv[1:5])
