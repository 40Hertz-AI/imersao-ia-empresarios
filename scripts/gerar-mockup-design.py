#!/usr/bin/env python3
"""Desenha a imagem de referência que o teste do /marca da tarde usa como "print do site".

É um mockup próprio, feito do zero com PIL, no estilo de um "shot" do Dribbble:
uma janela de navegador com a página de uma torrefação e, embaixo, a paleta e as
fontes. Era o plano B do antigo passo 6 da manhã (design system), que saiu da trilha em 26/10/2026;
hoje só o teste da tarde usa (testes/rodar-tarde.sh).

Saída: testes/insumos/referencia-design.png
Uso:   python3 scripts/gerar-mockup-design.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "testes" / "insumos" / "referencia-design.png"
FONTES = Path("/usr/share/fonts/truetype/sand-box/google")

FOLHA = "#234B3F"     # verde da folha do cafeeiro (fundo do shot)
LEITE = "#F6F1EA"     # fundo da página
GRAO = "#2B1D14"      # texto e títulos
CEREJA = "#C23B22"    # botões e destaques
BOURBON = "#E8B547"   # selos
CINZA = "#6B5E55"     # texto de apoio
LINHA = "#E2D8CB"     # bordas


def fonte(familia, arquivo, tamanho, peso=None):
    f = ImageFont.truetype(str(FONTES / familia / arquivo), tamanho)
    if peso is not None:
        try:
            f.set_variation_by_axes([peso] if "opsz" not in arquivo else [min(96, max(12, tamanho)), peso, 100])
        except (OSError, ValueError):
            pass
    return f


TIT = "Bricolage Grotesque", "BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf"
TXT = "Albert Sans", "AlbertSans-VariableFont_wght.ttf"

L, A = 1600, 1200
img = Image.new("RGB", (L, A), FOLHA)
d = ImageDraw.Draw(img)

# janela do navegador
jx, jy, jl, ja = 110, 70, 1380, 820
d.rounded_rectangle([jx + 8, jy + 14, jx + jl + 8, jy + ja + 14], 22, fill="#17332B")  # sombra
d.rounded_rectangle([jx, jy, jx + jl, jy + ja], 22, fill=LEITE)
d.rounded_rectangle([jx, jy, jx + jl, jy + 46], 22, fill="#EDE5DA")
d.rectangle([jx, jy + 30, jx + jl, jy + 46], fill="#EDE5DA")
for i, cor in enumerate(["#E0695A", "#E8B547", "#7DAA6A"]):
    d.ellipse([jx + 22 + i * 24, jy + 16, jx + 36 + i * 24, jy + 30], fill=cor)
d.rounded_rectangle([jx + 520, jy + 12, jx + 860, jy + 34], 11, fill=LEITE)
d.text((jx + 545, jy + 15), "torraviva.exemplo", font=fonte(*TXT, 15, 500), fill=CINZA)

# menu
px = jx + 70
d.text((px, jy + 82), "torra viva", font=fonte(*TIT, 34, 800), fill=GRAO)
menu = fonte(*TXT, 18, 500)
for i, item in enumerate(["Cafés", "Clube", "Para escritórios", "Sobre a torra"]):
    d.text((jx + 560 + i * 150, jy + 92), item, font=menu, fill=GRAO)
d.rounded_rectangle([jx + 1150, jy + 80, jx + 1310, jy + 124], 22, fill=CEREJA)
d.text((jx + 1171, jy + 91), "Assine o clube", font=fonte(*TXT, 17, 700), fill="white")

# hero: texto
d.rounded_rectangle([px, jy + 190, px + 190, jy + 222], 16, fill=BOURBON)
d.text((px + 16, jy + 196), "torra desta semana", font=fonte(*TXT, 15, 700), fill=GRAO)
tit = fonte(*TIT, 66, 800)
for i, l in enumerate(["Torrado esta semana,", "na sua xícara", "na próxima."]):
    d.text((px, jy + 245 + i * 74), l, font=tit, fill=GRAO)
apoio = fonte(*TXT, 22, 400)
for i, l in enumerate(["Cafés especiais de pequenos produtores do Sul de Minas,", "torrados em lotes pequenos e entregues frescos."]):
    d.text((px, jy + 480 + i * 32), l, font=apoio, fill=CINZA)
d.rounded_rectangle([px, jy + 568, px + 220, jy + 622], 27, fill=CEREJA)
d.text((px + 34, jy + 583), "Escolher meu café", font=fonte(*TXT, 18, 700), fill="white")
d.rounded_rectangle([px + 240, jy + 568, px + 470, jy + 622], 27, outline=FOLHA, width=3)
d.text((px + 268, jy + 583), "Café no escritório", font=fonte(*TXT, 18, 700), fill=FOLHA)

# hero: ilustração (xícara vista de cima + grãos)
cx, cy = jx + 1010, jy + 400
d.ellipse([cx - 230, cy - 230, cx + 230, cy + 230], fill=FOLHA)
d.ellipse([cx - 165, cy - 165, cx + 165, cy + 165], fill="white")
d.ellipse([cx - 135, cy - 135, cx + 135, cy + 135], fill="#5A3A25")
d.ellipse([cx - 95, cy - 95, cx + 95, cy + 95], fill="#7A5236")
d.ellipse([cx - 40, cy - 60, cx + 30, cy - 20], fill="#A97C55")
d.arc([cx + 140, cy - 40, cx + 230, cy + 40], 270, 90, fill="white", width=18)


def grao(x, y, ang):
    g = Image.new("RGBA", (90, 120), (0, 0, 0, 0))
    gd = ImageDraw.Draw(g)
    gd.ellipse([5, 5, 85, 115], fill=GRAO)
    gd.arc([30, 10, 70, 110], 100, 260, fill="#5A3A25", width=6)
    g = g.rotate(ang, expand=True, resample=Image.BICUBIC)
    img.paste(g, (x, y), g)


grao(jx + 730, jy + 560, 30)
grao(jx + 1180, jy + 180, -25)
grao(jx + 1220, jy + 560, 60)
d.rounded_rectangle([cx + 70, cy + 150, cx + 270, cy + 205], 28, fill=BOURBON)
d.text((cx + 92, cy + 164), "notas de caramelo", font=fonte(*TXT, 18, 700), fill=GRAO)

# cartões de produto
cy0 = jy + 680
for i, (nome, notas, preco, cor) in enumerate([
    ("Mantiqueira Clássico", "chocolate ao leite · caramelo", "R$ 42", CEREJA),
    ("Cerrado Doce", "amêndoa · rapadura", "R$ 38", BOURBON),
    ("Etiópia Yirgacheffe", "floral · limão-siciliano", "R$ 68", FOLHA),
]):
    x = px + i * 420
    d.rounded_rectangle([x, cy0, x + 390, cy0 + 110], 18, fill="white", outline=LINHA, width=2)
    d.rounded_rectangle([x + 18, cy0 + 18, x + 92, cy0 + 92], 14, fill=cor)
    d.text((x + 112, cy0 + 14), nome, font=fonte(*TIT, 24, 700), fill=GRAO)
    d.text((x + 112, cy0 + 46), notas, font=fonte(*TXT, 17, 400), fill=CINZA)
    d.text((x + 112, cy0 + 74), preco, font=fonte(*TXT, 19, 700), fill=CEREJA)

# faixa de estilo (paleta + fontes), fora da janela
by = 935
rot = fonte(*TXT, 16, 600)
cores = [("Grão", GRAO), ("Cereja", CEREJA), ("Folha", FOLHA), ("Bourbon", BOURBON), ("Leite", LEITE), ("Apoio", CINZA)]
for i, (nome, hexa) in enumerate(cores):
    x = 110 + i * 150
    d.rounded_rectangle([x, by, x + 128, by + 128], 18, fill=hexa, outline="#3E6A5D", width=2)
    d.text((x, by + 140), nome, font=rot, fill=LEITE)
    d.text((x, by + 162), hexa.upper(), font=fonte(*TXT, 15, 400), fill="#C9D6CF")
fx = 1060
d.text((fx, by - 4), "Aa", font=fonte(*TIT, 84, 800), fill=LEITE)
d.text((fx + 130, by + 18), "Bricolage Grotesque", font=fonte(*TXT, 20, 700), fill=LEITE)
d.text((fx + 130, by + 46), "títulos · extra negrito", font=fonte(*TXT, 16, 400), fill="#C9D6CF")
d.text((fx, by + 100), "Aa", font=fonte(*TXT, 70, 400), fill=LEITE)
d.text((fx + 130, by + 112), "Albert Sans", font=fonte(*TXT, 20, 700), fill=LEITE)
d.text((fx + 130, by + 140), "texto · regular e negrito", font=fonte(*TXT, 16, 400), fill="#C9D6CF")

SAIDA.parent.mkdir(parents=True, exist_ok=True)
img.save(SAIDA, optimize=True)
print(SAIDA, img.size)
