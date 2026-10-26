#!/usr/bin/env python3
"""Gera os dados fictícios de exemplo da Torra Viva Cafés Especiais.

Saída em torra-viva/dados/: vendas-mensais.csv, produtos.csv, clientes-b2b.csv,
orcamento.csv e torra-viva.xlsx (as mesmas tabelas, uma aba cada, mais a aba Sobre).

Tudo é determinístico (semente fixa): rodar de novo gera os mesmos arquivos.
As vendas do canal B2B Escritórios saem da tabela de clientes, calculadas
com as regras de orcamento.csv, para os arquivos baterem entre si.

Uso: python3 scripts/gerar-dados-torra-viva.py
"""
import csv
import math
import random
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "torra-viva" / "dados"
ROTULO = "Torra Viva Cafés Especiais · dados fictícios de exemplo"
MESES = ["2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
random.seed(2710)

# ---------------------------------------------------------------- produtos
# codigo, produto, categoria, origem, torra, notas, embalagem, preco, custo, lancamento
PRODUTOS = [
    ("TV-001", "Mantiqueira Clássico 250 g", "Café 250 g", "Sul de Minas (Serra da Mantiqueira)", "Média", "chocolate ao leite, caramelo", "250 g", 42.00, 16.00, "2019-05"),
    ("TV-002", "Cerrado Doce 250 g", "Café 250 g", "Cerrado Mineiro", "Média", "amêndoa, rapadura", "250 g", 38.00, 14.50, "2019-05"),
    ("TV-003", "Etiópia Yirgacheffe 250 g", "Café 250 g", "Yirgacheffe, Etiópia (importado)", "Clara", "floral, limão-siciliano, chá preto", "250 g", 68.00, 33.00, "2026-06"),
    ("TV-004", "Descafeinado Suave 250 g", "Café 250 g", "Sul de Minas", "Média", "nozes, cacau", "250 g", 46.00, 20.00, "2021-03"),
    ("TV-005", "Drip Bag Mantiqueira (caixa com 10)", "Prático", "Sul de Minas (Serra da Mantiqueira)", "Média", "chocolate ao leite, caramelo", "10 sachês de 11 g", 35.00, 12.50, "2022-08"),
    ("TV-006", "Kit Degustação (3 × 100 g)", "Presente", "Mantiqueira, Cerrado e Descafeinado", "Média", "três perfis para comparar", "3 × 100 g", 89.00, 36.00, "2023-04"),
    ("TV-007", "Cold Brew 300 ml", "Bebida pronta", "Sul de Minas", "Média", "chocolate amargo, frutas vermelhas", "garrafa 300 ml", 16.00, 5.80, "2026-03"),
    ("TV-101", "Espresso da Casa 1 kg", "Café 1 kg", "Blend Mantiqueira + Cerrado", "Média-escura", "cacau, melaço, corpo alto", "1 kg", 129.00, 56.00, "2020-02"),
    ("TV-102", "Blend Escritório 1 kg", "Café 1 kg", "Blend Cerrado + Sul de Minas", "Média", "chocolate, castanhas", "1 kg", 98.00, 45.00, "2024-09"),
    ("TV-103", "Mantiqueira Clássico 1 kg", "Café 1 kg", "Sul de Minas (Serra da Mantiqueira)", "Média", "chocolate ao leite, caramelo", "1 kg", 140.00, 60.00, "2020-02"),
    ("TV-104", "Cerrado Doce 1 kg", "Café 1 kg", "Cerrado Mineiro", "Média", "amêndoa, rapadura", "1 kg", 128.00, 54.00, "2020-02"),
    ("TV-201", "Clube Torra Viva (assinatura mensal, 2 × 250 g)", "Assinatura", "Muda todo mês", "Varia", "um café do mês + um clássico", "2 × 250 g", 79.00, 33.00, "2022-01"),
]
P = {p[0]: p for p in PRODUTOS}

# ---------------------------------------------------------------- regras de orçamento
REGRAS = [
    ("xicaras_por_pessoa_por_dia", "2", "xícaras", "Padrão. Se o cliente informar outro número, usar o dele."),
    ("gramas_por_xicara", "10", "g", "Dose de um café coado ou espresso."),
    ("dias_uteis_por_mes", "21", "dias", "Padrão. Se o cliente informar outro número, usar o dele."),
    ("arredondamento_kg", "1", "kg", "Arredondar o total de kg do mês para cima (o café vai em pacotes de 1 kg)."),
    ("preco_blend_escritorio", "98.00", "R$/kg", "Blend Escritório 1 kg (TV-102)."),
    ("preco_mantiqueira_classico", "140.00", "R$/kg", "Mantiqueira Clássico 1 kg (TV-103)."),
    ("preco_cerrado_doce", "128.00", "R$/kg", "Cerrado Doce 1 kg (TV-104)."),
    ("desconto_volume_10kg", "5", "%", "A partir de 10 kg/mês. Sobre o valor do café."),
    ("desconto_volume_20kg", "10", "%", "A partir de 20 kg/mês. Substitui o de 10 kg."),
    ("desconto_volume_40kg", "15", "%", "A partir de 40 kg/mês. Substitui os anteriores."),
    ("desconto_contrato_anual", "5", "%", "Contrato de 12 meses. Soma com o desconto de volume; os dois valem sobre o valor do café."),
    ("maquina_comodato_minimo", "8", "kg/mês", "A partir de 8 kg/mês a máquina de café vai em comodato (empréstimo), sem custo."),
    ("maquina_aluguel", "120.00", "R$/mês", "Abaixo de 8 kg/mês, a máquina custa este aluguel. O cliente pode dispensar a máquina."),
    ("frete_mensal", "35.00", "R$/mês", "Uma entrega por mês."),
    ("frete_gratis_a_partir_de", "600.00", "R$", "Frete grátis quando o café com desconto der R$ 600,00 ou mais no mês."),
    ("validade_orcamento", "15", "dias", "Prazo de validade do orçamento."),
    ("ordem_do_calculo", "1 a 7", "passos", "1) kg = pessoas × xícaras × gramas × dias ÷ 1000, arredondado para cima; 2) café = kg × preço do kg; 3) desconto = volume + anual; café com desconto = café × (1 − desconto); 4) máquina; 5) frete; 6) total do mês = café com desconto + máquina + frete; 7) custo por xícara = total ÷ (pessoas × xícaras × dias)."),
]
PRECO_KG = {"Blend Escritório": 98.00, "Mantiqueira Clássico": 140.00, "Cerrado Doce": 128.00}
CODIGO_KG = {"Blend Escritório": "TV-102", "Mantiqueira Clássico": "TV-103", "Cerrado Doce": "TV-104"}


def orcamento(pessoas, cafe, anual, com_maquina=True, xicaras=2, gramas=10, dias=21):
    """As regras de orcamento.csv, na ordem em que estão escritas."""
    kg = math.ceil(pessoas * xicaras * gramas * dias / 1000)
    valor_cafe = kg * PRECO_KG[cafe]
    dv = 15 if kg >= 40 else 10 if kg >= 20 else 5 if kg >= 10 else 0
    desconto = dv + (5 if anual else 0)
    cafe_desc = round(valor_cafe * (1 - desconto / 100), 2)
    maquina = 0.0 if (not com_maquina or kg >= 8) else 120.00
    frete = 0.0 if cafe_desc >= 600 else 35.00
    total = round(cafe_desc + maquina + frete, 2)
    return {"kg": kg, "valor_cafe": valor_cafe, "desconto_pct": desconto, "cafe_com_desconto": cafe_desc,
            "maquina": maquina, "frete": frete, "total": total,
            "custo_por_xicara": round(total / (pessoas * xicaras * dias), 2)}


# ---------------------------------------------------------------- clientes B2B
# id, empresa, segmento, cidade, funcionarios, cafe, contrato, desde, status, status_desde, nps, observacao
CLIENTES = [
    ("B01", "Contábil Horizonte", "Contabilidade", "Mogi das Cruzes", 18, "Blend Escritório", "mensal", "2025-08", "ativo", "", "9", "Pede nota fiscal até o dia 5."),
    ("B02", "Clínica Bem Viver", "Saúde", "Suzano", 32, "Mantiqueira Clássico", "anual", "2025-11", "ativo", "", "10", "Elogiou o café na pesquisa de satisfação."),
    ("B03", "Agência Faro Digital", "Marketing", "São Paulo", 24, "Mantiqueira Clássico", "mensal", "2026-01", "ativo", "", "8", "Quer conhecer o Etiópia para as reuniões com clientes."),
    ("B04", "Rocha & Lima Advogados", "Jurídico", "São Paulo", 40, "Mantiqueira Clássico", "anual", "2026-02", "ativo", "", "9", ""),
    ("B05", "Coworking Ponto de Encontro", "Coworking", "Mogi das Cruzes", 60, "Blend Escritório", "anual", "2026-03", "ativo", "", "7", "Pediu orçamento para incluir chás."),
    ("B06", "Imobiliária Casa Certa", "Imobiliário", "Guarulhos", 12, "Blend Escritório", "mensal", "2026-03", "pausado", "2026-07", "6", "Pausou o plano durante a reforma do escritório; volta em novembro."),
    ("B07", "Fala Mundo Idiomas", "Educação", "Mogi das Cruzes", 22, "Cerrado Doce", "mensal", "2026-04", "ativo", "", "8", ""),
    ("B08", "TechNorte Sistemas", "Tecnologia", "São Paulo", 85, "Blend Escritório", "anual", "2026-04", "ativo", "", "9", "Maior cliente em kg."),
    ("B09", "Laboratório Vida Clara", "Saúde", "Suzano", 28, "Cerrado Doce", "mensal", "2026-05", "cancelado", "2026-08", "4", "Cancelou depois de duas entregas atrasadas em julho."),
    ("B10", "Traço Livre Arquitetura", "Arquitetura", "São Paulo", 9, "Mantiqueira Clássico", "mensal", "2026-06", "ativo", "", "10", ""),
    ("B11", "Construtora Alicerce", "Construção", "Arujá", 45, "Blend Escritório", "anual", "2026-07", "ativo", "", "8", ""),
    ("B12", "Prumo Consultoria", "Consultoria", "São Paulo", 15, "Cerrado Doce", "mensal", "2026-08", "ativo", "", "9", ""),
    ("B13", "Sorriso Pleno Odontologia", "Saúde", "Mogi das Cruzes", 14, "Blend Escritório", "mensal", "2026-09", "ativo", "", "", "Cliente novo: ainda sem pesquisa de satisfação."),
    ("B14", "Hotel Serra Azul", "Hotelaria", "Mogi das Cruzes", 50, "Mantiqueira Clássico", "anual", "2026-09", "ativo", "", "", "Cliente novo: ainda sem pesquisa de satisfação."),
]


def ativo_no_mes(c, mes):
    desde, status, ate = c[7], c[8], c[9]
    if desde > mes:
        return False
    if status in ("pausado", "cancelado") and ate and mes >= ate:
        return False
    return True


# ---------------------------------------------------------------- vendas
FATOR_MES = dict(zip(MESES, [0.95, 0.82, 0.97, 1.00, 1.12, 1.08, 1.10, 1.15, 1.02]))
COLD = dict(zip(MESES, [0, 0, 1.15, 0.95, 0.70, 0.50, 0.48, 0.60, 0.92]))
KIT = dict(zip(MESES, [0.9, 0.7, 0.9, 1.0, 3.4, 1.1, 1.0, 3.0, 1.0]))
ETIOPIA = dict(zip(MESES, [0, 0, 0, 0, 0, 62, 94, 121, 143]))
ASSINANTES = dict(zip(MESES, [181, 186, 197, 211, 229, 246, 262, 281, 298]))
CAFETERIAS = dict(zip(MESES, [6, 6, 6, 7, 7, 7, 8, 8, 8]))


def ruido(x):
    return max(0, round(x * random.uniform(0.94, 1.06)))


def linha(mes, codigo, canal, qtd, preco=None):
    p = P[codigo]
    preco = p[7] if preco is None else preco
    fat = round(qtd * preco, 2)
    custo = round(qtd * p[8], 2)
    return {"mes": mes, "codigo": codigo, "produto": p[1], "categoria": p[2], "canal": canal,
            "quantidade": qtd, "preco_unitario": f"{preco:.2f}", "faturamento": f"{fat:.2f}",
            "custo": f"{custo:.2f}", "lucro_bruto": f"{fat - custo:.2f}"}


vendas = []
for i, mes in enumerate(MESES):
    f = FATOR_MES[mes]
    tendencia = 1 + 0.012 * i
    online = [("TV-001", 300), ("TV-002", 215), ("TV-004", 38), ("TV-005", 140)]
    for cod, base in online:
        vendas.append(linha(mes, cod, "Loja online", ruido(base * f * tendencia)))
    if ETIOPIA[mes]:
        vendas.append(linha(mes, "TV-003", "Loja online", ruido(ETIOPIA[mes])))
    vendas.append(linha(mes, "TV-006", "Loja online", ruido(42 * KIT[mes])))
    if COLD[mes]:
        vendas.append(linha(mes, "TV-007", "Loja online", ruido(130 * COLD[mes] * (1 + 0.05 * (i - 2)))))
    vendas.append(linha(mes, "TV-201", "Assinatura", ASSINANTES[mes]))
    n = CAFETERIAS[mes]
    vendas.append(linha(mes, "TV-101", "Cafeterias parceiras", ruido(11.5 * n * f)))
    vendas.append(linha(mes, "TV-103", "Cafeterias parceiras", ruido(3.6 * n * f)))
    # B2B Escritórios: soma dos clientes ativos no mês, com as regras do orçamento
    por_cafe = {}
    for c in CLIENTES:
        if ativo_no_mes(c, mes):
            o = orcamento(c[4], c[5], c[6] == "anual")
            kg, fat = por_cafe.get(c[5], (0, 0.0))
            por_cafe[c[5]] = (kg + o["kg"], fat + o["cafe_com_desconto"])
    for cafe in ["Blend Escritório", "Mantiqueira Clássico", "Cerrado Doce"]:
        if cafe in por_cafe:
            kg, fat = por_cafe[cafe]
            cod = CODIGO_KG[cafe]
            custo = round(kg * P[cod][8], 2)
            vendas.append({"mes": mes, "codigo": cod, "produto": P[cod][1], "categoria": P[cod][2],
                           "canal": "B2B Escritórios", "quantidade": kg,
                           "preco_unitario": f"{fat / kg:.2f}", "faturamento": f"{fat:.2f}",
                           "custo": f"{custo:.2f}", "lucro_bruto": f"{fat - custo:.2f}"})

# ---------------------------------------------------------------- gravar
SAIDA.mkdir(parents=True, exist_ok=True)


def gravar_csv(nome, cabecalho, linhas):
    with open(SAIDA / nome, "w", newline="", encoding="utf-8") as fh:
        fh.write(f"# {ROTULO}\n")
        w = csv.writer(fh, lineterminator="\n")
        w.writerow(cabecalho)
        w.writerows(linhas)


cab_vendas = ["mes", "codigo", "produto", "categoria", "canal", "quantidade", "preco_unitario", "faturamento", "custo", "lucro_bruto"]
gravar_csv("vendas-mensais.csv", cab_vendas, [[v[k] for k in cab_vendas] for v in vendas])

cab_prod = ["codigo", "produto", "categoria", "origem", "torra", "notas_sensoriais", "embalagem", "preco", "custo", "margem_pct", "a_venda_desde"]
linhas_prod = [[p[0], p[1], p[2], p[3], p[4], p[5], p[6], f"{p[7]:.2f}", f"{p[8]:.2f}", f"{(p[7] - p[8]) / p[7] * 100:.1f}", p[9]] for p in PRODUTOS]
gravar_csv("produtos.csv", cab_prod, linhas_prod)

cab_cli = ["id", "empresa", "segmento", "cidade", "funcionarios", "cafe_do_plano", "kg_mes", "contrato", "valor_mensal", "cliente_desde", "status", "status_desde", "nps", "observacao"]
linhas_cli = []
for c in CLIENTES:
    o = orcamento(c[4], c[5], c[6] == "anual")
    linhas_cli.append([c[0], c[1], c[2], c[3], c[4], c[5], o["kg"], c[6], f"{o['total']:.2f}", c[7], c[8], c[9], c[10], c[11]])
gravar_csv("clientes-b2b.csv", cab_cli, linhas_cli)

cab_orc = ["regra", "valor", "unidade", "como_aplicar"]
gravar_csv("orcamento.csv", cab_orc, [list(r) for r in REGRAS])

# ---------------------------------------------------------------- xlsx
wb = Workbook()
sobre = wb.active
sobre.title = "Sobre"
texto_sobre = [
    ROTULO.upper(),
    "",
    "A Torra Viva Cafés Especiais é uma empresa inventada para a aula. Nomes, clientes e números não representam nenhuma empresa real.",
    "",
    "Abas desta planilha (as mesmas tabelas dos arquivos .csv da pasta dados/):",
    "Vendas: vendas de janeiro a setembro de 2026 por mês, produto e canal (Loja online, Assinatura, Cafeterias parceiras, B2B Escritórios).",
    "Produtos: os 12 produtos, com preço, custo e margem.",
    "Clientes B2B: os escritórios que recebem café todo mês, com plano, valor e satisfação (NPS de 0 a 10).",
    "Orçamento: as regras para montar o orçamento de café para escritório, na ordem do cálculo.",
    "",
    "Faturamento = quantidade × preço unitário. Lucro bruto = faturamento − custo dos produtos (sem aluguel, salários e frete).",
    "No canal B2B Escritórios, o preço unitário é o preço médio do kg depois dos descontos do contrato.",
]
for i, t in enumerate(texto_sobre, start=1):
    sobre.cell(row=i, column=1, value=t)
sobre["A1"].font = Font(bold=True, size=13)
sobre.column_dimensions["A"].width = 120

AZUL = PatternFill("solid", fgColor="3B2416")


def aba(titulo, cabecalho, linhas, numericas=()):
    ws = wb.create_sheet(titulo)
    ws.cell(row=1, column=1, value=f"{ROTULO} · {titulo}").font = Font(bold=True, italic=True)
    for j, h in enumerate(cabecalho, start=1):
        c = ws.cell(row=2, column=j, value=h)
        c.font = Font(bold=True, color="FFFFFF")
        c.fill = AZUL
        c.alignment = Alignment(vertical="center")
    for i, l in enumerate(linhas, start=3):
        for j, v in enumerate(l, start=1):
            h = cabecalho[j - 1]
            if h in numericas and v != "":
                v = float(v) if "." in str(v) else int(v)
            ws.cell(row=i, column=j, value=v)
    for j, h in enumerate(cabecalho, start=1):
        largura = max(len(str(h)), *(len(str(l[j - 1])) for l in linhas)) + 2
        ws.column_dimensions[get_column_letter(j)].width = min(largura, 60)
    ws.freeze_panes = "A3"


aba("Vendas", cab_vendas, [[v[k] for k in cab_vendas] for v in vendas],
    numericas=("quantidade", "preco_unitario", "faturamento", "custo", "lucro_bruto"))
aba("Produtos", cab_prod, linhas_prod, numericas=("preco", "custo", "margem_pct"))
aba("Clientes B2B", cab_cli, linhas_cli, numericas=("funcionarios", "kg_mes", "valor_mensal", "nps"))
aba("Orçamento", cab_orc, [list(r) for r in REGRAS])
wb.save(SAIDA / "torra-viva.xlsx")

# resumo para conferência
tot = {}
for v in vendas:
    tot[v["mes"]] = tot.get(v["mes"], 0) + float(v["faturamento"])
print("linhas de vendas:", len(vendas))
for m in MESES:
    print(m, f"{tot[m]:.2f}")
print("exemplo de orçamento (25 pessoas, Blend, anual):", orcamento(25, "Blend Escritório", True))
