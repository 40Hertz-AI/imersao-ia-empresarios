#!/usr/bin/env python3
"""Calcula, direto dos CSVs, as respostas certas do passo 2 (e os números que os testes conferem).

Saída: manha/gabarito/02-google-drive-e-planilhas/respostas-certas.md e testes/manha/numeros-certos.json
Uso:   python3 scripts/respostas-certas.py
"""
import csv
import json
from collections import defaultdict
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "manha" / "dados"


def ler(nome):
    with open(DADOS / nome, encoding="utf-8") as fh:
        return list(csv.DictReader(l for l in fh if not l.startswith("#")))


def pct(v):
    return f"{v:+.1f}%".replace(".", ",")


def brl(v):
    return "R$ " + f"{v:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")


vendas = ler("vendas-mensais.csv")
clientes = ler("clientes-b2b.csv")
NOME_MES = {"2026-01": "janeiro", "2026-02": "fevereiro", "2026-03": "março", "2026-04": "abril", "2026-05": "maio",
            "2026-06": "junho", "2026-07": "julho", "2026-08": "agosto", "2026-09": "setembro"}

fat_prod, qtd_prod, fat_mes, lucro_total, fat_total = defaultdict(float), defaultdict(int), defaultdict(float), 0.0, 0.0
canal_mes = defaultdict(lambda: defaultdict(float))
lucro_canal, fat_canal = defaultdict(float), defaultdict(float)
for v in vendas:
    f, l = float(v["faturamento"]), float(v["lucro_bruto"])
    fat_prod[v["produto"]] += f
    fat_mes[v["mes"]] += f
    canal_mes[v["canal"]][v["mes"]] += f
    fat_canal[v["canal"]] += f
    lucro_canal[v["canal"]] += l
    fat_total += f
    lucro_total += l
    qtd_prod[v["produto"]] += int(v["quantidade"])

top_fat = sorted(fat_prod.items(), key=lambda x: -x[1])
top_qtd = sorted(qtd_prod.items(), key=lambda x: -x[1])
melhor = max(fat_mes, key=fat_mes.get)
pior = min(fat_mes, key=fat_mes.get)
crescimento = {c: (d["2026-09"] / d["2026-01"] - 1) * 100 for c, d in canal_mes.items()}
ativos_set = [c for c in clientes if c["status"] == "ativo"]
atencao = [c for c in clientes if c["status"] != "ativo" or (c["nps"] and int(c["nps"]) <= 7)]

linhas = [
    "# Respostas certas do passo 2",
    "",
    "> Calculadas direto de `dados/*.csv` pelo script `scripts/respostas-certas.py` do repositório do curso. **Dados fictícios de exemplo.**",
    "> Use para conferir o que o Claude respondeu.",
    "",
    "## 1. O que tem em cada arquivo",
    "- `vendas-mensais.csv`: vendas de janeiro a setembro de 2026 por mês, produto e canal (107 linhas).",
    "- `produtos.csv`: 12 produtos com preço, custo e margem.",
    f"- `clientes-b2b.csv`: 14 clientes de empresas ({len(ativos_set)} ativos, 1 pausado, 1 cancelado).",
    "- `orcamento.csv`: as regras do orçamento de café para escritório.",
    "",
    "## 2. Produto que mais faturou e o que mais vendeu em unidades",
    f"- Mais faturou: **{top_fat[0][0]}**, {brl(top_fat[0][1])} (depois: {top_fat[1][0]}, {brl(top_fat[1][1])}).",
    f"- Mais unidades: **{top_qtd[0][0]}**, {top_qtd[0][1]} unidades.",
    "",
    "## 3. Melhor e pior mês",
    f"- Melhor: **{NOME_MES[melhor]}**, {brl(fat_mes[melhor])}.",
    f"- Pior: **{NOME_MES[pior]}**, {brl(fat_mes[pior])}.",
    "",
    "| Mês | Faturamento |",
    "|---|---|",
]
linhas += [f"| {NOME_MES[m]} | {brl(fat_mes[m])} |" for m in sorted(fat_mes)]
linhas += [f"| **Total** | **{brl(fat_total)}** |", "", f"Lucro bruto de janeiro a setembro: {brl(lucro_total)}.", "",
           "## 4. Canal que mais cresceu (janeiro → setembro)", "",
           "| Canal | Janeiro | Setembro | Crescimento | Faturamento jan a set | Lucro bruto jan a set |", "|---|---|---|---|---|---|"]
for c in sorted(crescimento, key=lambda c: -crescimento[c]):
    linhas.append(f"| {c} | {brl(canal_mes[c]['2026-01'])} | {brl(canal_mes[c]['2026-09'])} | {pct(crescimento[c])} | {brl(fat_canal[c])} | {brl(lucro_canal[c])} |")
mais = max(crescimento, key=crescimento.get)
vezes = f"{canal_mes[mais]['2026-09'] / canal_mes[mais]['2026-01']:.2f}".replace(".", ",")
linhas += ["", f"Mais cresceu: **{mais}**: {brl(canal_mes[mais]['2026-09'])} ÷ {brl(canal_mes[mais]['2026-01'])} = {vezes} vezes ({pct(crescimento[mais])}).", "",
           "## 5. Clientes B2B que precisam de atenção", ""]
for c in atencao:
    if c["status"] != "ativo":
        linhas.append(f"- **{c['empresa']}** ({c['status']} desde {c['status_desde']}, NPS {c['nps']}): {c['observacao']}")
    else:
        linhas.append(f"- **{c['empresa']}** (ativo, NPS {c['nps']}, a nota mais baixa entre os ativos). Observação na planilha: {c['observacao']}")
linhas.append("")

saida = RAIZ / "manha" / "gabarito" / "02-google-drive-e-planilhas" / "respostas-certas.md"
saida.parent.mkdir(parents=True, exist_ok=True)
saida.write_text("\n".join(linhas), encoding="utf-8")

numeros = {"faturamento_total": round(fat_total, 2), "lucro_total": round(lucro_total, 2),
           "melhor_mes": melhor, "pior_mes": pior, "fat_mes": {m: round(v, 2) for m, v in fat_mes.items()},
           "top_faturamento": top_fat[0][0], "top_unidades": top_qtd[0][0], "canal_mais_cresceu": mais,
           "crescimento_pct": {c: round(v, 1) for c, v in crescimento.items()},
           "b2b_mes": {m: round(v, 2) for m, v in canal_mes["B2B Escritórios"].items()},
           "clientes_ativos_set": len(ativos_set), "top5_produtos": [p for p, _ in top_fat[:5]]}
(RAIZ / "testes" / "manha").mkdir(parents=True, exist_ok=True)
(RAIZ / "testes" / "manha" / "numeros-certos.json").write_text(json.dumps(numeros, ensure_ascii=False, indent=1), encoding="utf-8")
print("\n".join(linhas))
