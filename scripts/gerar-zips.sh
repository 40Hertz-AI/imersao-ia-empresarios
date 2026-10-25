#!/usr/bin/env bash
# Gera site/downloads/imersao-manha.zip e imersao-tarde.zip a partir do que está commitado (git archive HEAD),
# com a pasta de cima chamada imersao-manha/ e imersao-tarde/, como os ZIPs anteriores.
# Fica de fora: testes/, scripts/ e tudo o que não está dentro de manha/ e tarde/.
# Datas fixas para o ZIP sair igual se nada mudar (compare o hash do ZIP baixado do ar, não o do disco).
# Uso: scripts/gerar-zips.sh
set -euo pipefail
cd "$(dirname "$0")/.."
DATA=${DATA_ZIP:-202610260000}
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
for area in manha tarde; do
  mkdir -p "$tmp/imersao-$area"
  git archive HEAD "$area" | tar -x -C "$tmp/imersao-$area" --strip-components=1
  find "$tmp/imersao-$area" \( -name .DS_Store -o -name Thumbs.db \) -delete
  find "$tmp/imersao-$area" -exec touch -h -t "$DATA" {} +
  rm -f "site/downloads/imersao-$area.zip"
  (cd "$tmp" && find "imersao-$area" -print | LC_ALL=C sort | zip -X -q -9 -@ "$OLDPWD/site/downloads/imersao-$area.zip")
  printf '%s  %s arquivos  %s\n' "site/downloads/imersao-$area.zip" "$(unzip -Z1 "site/downloads/imersao-$area.zip" | grep -vc '/$')" "$(sha256sum "site/downloads/imersao-$area.zip" | cut -c1-16)"
done
