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

# 4. Versão para o navegador, com o vídeo tocando: apresentacao/index.html (ignorada pelo git).
#    Cada página vira slides/NN.jpg; o vídeo do GPT-6 Astra (orig p13) fica por cima, na posição
#    medida no deck v3 (64, 156.5, 1152 x 483.5 px num slide de 1280 x 720).
#    O vídeo não vai para o repo (é da OpenAI): vem da pasta do deck v3, em VIDEOS.
VIDEOS="${VIDEOS:-$HOME/Downloads/imersao-ia-dia-inteiro/img}"
AP="$DIR/apresentacao"
rm -rf "$AP"; mkdir -p "$AP/slides" "$AP/videos"
pdftoppm -r 192 -jpeg -jpegopt quality=85 "$OUT" "$AP/slides/p"
for f in "$AP"/slides/p-*.jpg; do n="${f##*-}"; n="${n%.jpg}"; mv "$f" "$AP/slides/$(printf %02d $((10#$n))).jpg"; done
cp "$VIDEOS/video-astra.mp4" "$VIDEOS/video-astra.jpg" "$AP/videos/"
PAG=$(cd "$DIR" && python3 -c 'import montar; print(montar.ORDEM.index(("orig", 13)) + 1)')
cat > "$AP/deck.js" <<EOF
const DECK={paginas:$(pdfinfo "$OUT" | awk '/^Pages:/{print $2}'),videos:{
  $PAG:{src:'videos/video-astra.mp4',poster:'videos/video-astra.jpg',x:64,y:156.5,w:1152,h:483.5}
}};
EOF
cp "$DIR/apresentacao.html" "$AP/index.html"
echo "Navegador: $AP/index.html (vídeo na pág. $PAG)"
