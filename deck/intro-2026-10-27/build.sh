#!/usr/bin/env bash
# Gera site/downloads/apresentacao-imersao-ia.pdf com a nova introdução.
# Requisitos: google-chrome (ou CHROME=...), python3 com pypdf, git, pdfinfo (poppler).
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(git -C "$DIR" rev-parse --show-toplevel)"
CHROME="${CHROME:-google-chrome}"
BASE_COMMIT="${BASE_COMMIT:-fb89580}"   # último commit com o PDF original (deck v3, 75 páginas)
OUT="${OUT:-$REPO/site/downloads/apresentacao-imersao-ia.pdf}"
BUILD="$DIR/build"
mkdir -p "$BUILD"

# 1. PDF base, direto do histórico do git (não guardamos cópia no repo)
git -C "$REPO" show "$BASE_COMMIT:site/downloads/apresentacao-imersao-ia.pdf" > "$BUILD/base.pdf"
[ "$(pdfinfo "$BUILD/base.pdf" | awk '/^Pages:/{print $2}')" = "75" ] || { echo "PDF base não tem 75 páginas"; exit 1; }

# 2. Slides novos: HTML -> PDF (1280x720 px CSS = 960x540 pt por página)
"$CHROME" --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --allow-file-access-from-files --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="$BUILD/novos.pdf" "file://$DIR/slides.html" 2>/dev/null
pdfinfo "$BUILD/novos.pdf" | grep -q "960 x 540 pts" || { echo "novos.pdf não saiu em 960x540pt"; exit 1; }

# 3. Montagem na ordem final
python3 "$DIR/montar.py" "$BUILD/base.pdf" "$BUILD/novos.pdf" "$DIR/slides.html" "$OUT"
pdfinfo "$OUT" | grep -E "^(Title|Pages|Page size)"
