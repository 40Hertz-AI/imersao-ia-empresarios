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
# Manhã: o Lucas mostra tudo ao vivo na pasta torra-viva (fases 1 a 4 e os 6 passos da Torra Viva).
# Antes do almoço os alunos baixam a pasta minha-empresa e rodam as fases 1 a 5 (a empresa e eles).
# Sem horários no deck. Mudanças de 26/10 (pedido do Lucas): o prompt em 4 partes (m02a) foi para antes
# do passo 3, o ruim × bom (m02b) e a ponte (orig 46) saíram, e a pasta, as fases e o "baixar" da tarde
# (orig 57, 59, 60) foram refeitos para a minha-empresa (t08, t09, t10) e subiram para antes do almoço.
MANHA = [
    ("novo", "m01"),  # Fase 1: o modelo (rodapé "só eu mostro")
    ("orig", 15),     # o que é um LLM
    ("orig", 16),     # próxima palavra
    ("orig", 17),     # como um LLM aprende
    ("orig", 18),     # respostas diferentes
    ("orig", 19),     # quem está na frente
    ("orig", 20),     # inteligência x custo
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
    ("novo", "m08"),  # a pasta torra-viva: o Lucas trabalha nela daqui em diante
    ("novo", "m10"),  # ao vivo: a trilha de 6 passos
    ("novo", "m11"),  # passo 1 · abrir a pasta
    ("novo", "m12"),  # passo 2 · a planilha da Torra Viva
    ("orig", 26),     # passo 2 · conectar o Google Drive
    ("novo", "m13"),  # passo 2 · pergunte à planilha
    ("novo", "m02a"), # como montar um bom prompt: Papel, Contexto, Tarefa e Formato
    ("novo", "m15"),  # passo 3 · prompts (o exemplo das 4 partes)
    ("novo", "m16"),  # passo 4 · /eli5
    ("novo", "m17"),  # passo 5 · /resposta-cliente
    ("novo", "m19"),  # passo 6 · calculadora, dashboard e apresentação
    ("novo", "t08"),  # a pasta minha-empresa (era orig 57, cerebro-da-empresa)
    ("novo", "t09"),  # a empresa em 8 fases (era orig 59, 6 fases)
    ("novo", "t10"),  # façam junto: baixar e abrir (era orig 60)
    ("novo", "t02"),  # bloco A: fases 1 a 3
    ("novo", "t05"),  # bloco B: /sobre-mim (fase 4)
    ("novo", "t06"),  # bloco C: /sugerir-automacoes (fase 5)
    ("novo", "m22"),  # almoço
]
# Tarde: marketing e vendas (fases 6 a 8) e o fechamento até o café da tarde, que é o último slide.
TARDE = [
    ("orig", 49),     # como foi a primeira parte?
    ("novo", "t01"),  # abertura: 3 empresas da sala, antes e depois
    ("orig", 56),     # harness = tudo numa pasta
    ("novo", "t07"),  # bloco D: /criar-oferta (fase 6)
    ("novo", "t03"),  # bloco E: /criar-pagina (fase 7)
    ("novo", "t04"),  # bloco F: /criar-conteudo, com o prompt de imagem (fase 8)
    ("orig", 64),     # vocês acabaram de virar orquestradores
    ("orig", 65),
    ("orig", 66),
    ("orig", 67),
    ("orig", 68),     # Apolo · receita previsível
    ("orig", 69),     # café da tarde: último slide
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
    46,                  # ponte "vocês deram contexto a manhã inteira" (saiu em 26/10, 2ª rodada)
    57, 59, 60,          # pasta cerebro-da-empresa, 6 fases e baixar e abrir -> t08, t09, t10 (minha-empresa)
    70, 71, 72, 73, 74, 75,  # FDE, quatro lados, AI-native, escada, depoimentos e fecho (saíram em 26/10)
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
