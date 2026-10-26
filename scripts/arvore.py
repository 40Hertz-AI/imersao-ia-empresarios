#!/usr/bin/env python3
"""Imprime a árvore de uma pasta como `tree -a -I .git -L <nível>` (o tree nem sempre está instalado).

Uso: python3 scripts/arvore.py <pasta> [nível]
"""
import sys
from pathlib import Path


def arvore(pasta, nivel, prefixo="", profundidade=1, conta=None):
    itens = sorted((p for p in pasta.iterdir() if p.name != ".git"), key=lambda p: p.name)
    for i, p in enumerate(itens):
        ultimo = i == len(itens) - 1
        print(f"{prefixo}{'└── ' if ultimo else '├── '}{p.name}")
        if p.is_dir():
            conta[0] += 1
            if profundidade < nivel:
                arvore(p, nivel, prefixo + ("    " if ultimo else "│   "), profundidade + 1, conta)
        else:
            conta[1] += 1


raiz = Path(sys.argv[1])
nivel = int(sys.argv[2]) if len(sys.argv) > 2 else 3
print(raiz.name)
conta = [0, 0]
arvore(raiz, nivel, conta=conta)
print(f"\n{conta[0]} directories, {conta[1]} files")
