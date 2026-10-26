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
    ("orig", 9),     # quem sou (antes p9)
    ("orig", 2),     # 02 ruptura: sem internet
    ("novo", "03"),  # Kodak, Blockbuster, Nokia
    ("orig", 11),    # 04 cada virada mudou como se trabalha
    ("novo", "05"),  # 100 mi + selo Stanford 53% (substitui p12)
    ("orig", 3),     # 06 ruptura silenciosa
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
    ("novo", "13"),  # três camadas (substitui p7)
    ("novo", "14"),  # exemplo ilustrativo
    ("novo", "15"),
    ("novo", "16"),
    ("orig", 5),     # 7% Veeam
    ("orig", 6),     # 16,3% Microsoft
    ("novo", "17"),
    ("novo", "18"),
    ("novo", "19"),
    ("orig", 10),    # 20 gráfico Anthropic
    ("novo", "21"),
    ("novo", "22"),  # promessa + 5 fases (substitui p8)
    ("orig", 13),    # vídeo GPT-6 Astra (opcional)
]
MANHA_E_TARDE = (
    [("orig", n) for n in range(14, 61)]   # Fase 1 ... "Baixar e abrir"
    + [("orig", 4)]                        # Previsibilidade, antes do BLOCO A
    + [("orig", n) for n in range(61, 76)]  # BLOCO A /mapear-empresa ... fim
)
ORDEM = INTRO + MANHA_E_TARDE
SAIRAM = {7, 8, 12}  # substituídas por slides novos (13, 22 e 05)


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
    print(f"{out_path}: {len(ORDEM)} páginas ({len(INTRO)} na introdução)")


if __name__ == "__main__":
    main(*sys.argv[1:5])
