#!/usr/bin/env python3
"""Gera site/downloads/torra-viva.zip (de manha/) e minha-empresa.zip (de tarde/) a partir do que está commitado (git archive HEAD).

A pasta de cima tem o mesmo nome do ZIP: torra-viva/ e minha-empresa/. Fica de fora tudo o que
não está dentro de manha/ e tarde/ (testes/, scripts/...). Datas fixas e ordem fixa: o ZIP sai igual se nada
mudou (para saber se o material do ar foi atualizado, compare o hash do ZIP baixado do ar, não o do disco).
As permissões Unix vão junto.

Uso: python3 scripts/gerar-zips.py
"""
import hashlib
import io
import subprocess
import tarfile
import zipfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DATA = (2026, 10, 26, 0, 0, 0)
IGNORA = {".DS_Store", "Thumbs.db"}

for area, pasta in (("manha", "torra-viva"), ("tarde", "minha-empresa")):
    tar = subprocess.run(["git", "-C", str(RAIZ), "archive", "--format=tar", "HEAD", area], check=True, capture_output=True).stdout
    destino = RAIZ / "site" / "downloads" / f"{pasta}.zip"
    with tarfile.open(fileobj=io.BytesIO(tar)) as t, zipfile.ZipFile(destino, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        membros = sorted((m for m in t.getmembers() if Path(m.name).name not in IGNORA), key=lambda m: m.name)
        n = 0
        for m in membros:
            nome = pasta + m.name[len(area):]
            if m.isdir():
                info = zipfile.ZipInfo(nome.rstrip("/") + "/", DATA)
                info.external_attr = (0o40755 << 16) | 0x10
                z.writestr(info, b"")
            elif m.isfile():
                info = zipfile.ZipInfo(nome, DATA)
                info.external_attr = ((0o100755 if m.mode & 0o111 else 0o100644) << 16)
                info.compress_type = zipfile.ZIP_DEFLATED
                z.writestr(info, t.extractfile(m).read())
                n += 1
    print(f"{destino.relative_to(RAIZ)}  {n} arquivos  sha256 {hashlib.sha256(destino.read_bytes()).hexdigest()[:16]}")
