# Vitrine: três empresas da Imersão IA para Empresários (27/10/2026)

Material que fizemos com IA para três empresas que participam da imersão no Hotel Marbor, em Mogi das Cruzes. Para cada empresa há protótipos de site, a landing page pronta, um carrossel de Instagram, pôsteres e vídeos. As versões antigas ficaram guardadas para mostrar a evolução.

| Empresa | Site original | Site novo (Higgsfield) | Pasta |
|---|---|---|---|
| Sabor da Mama (temperos, molhos e derivados) | https://sabordamama.com.br/ | https://sabor-da-mama-imersao.higgsfield.app | [`sabor-da-mama/`](sabor-da-mama/) |
| CETAL (análises laboratoriais de alimentos) | https://cetal.com.br/site/ | https://cetal-imersao.higgsfield.app | [`cetal/`](cetal/) |
| Gatti Química (limpeza profissional) | https://gattiquimica.com.br/ | https://gatti-quimica-imersao.higgsfield.app | [`gatti-quimica/`](gatti-quimica/) |

> **Atenção:** os sites novos foram implantados no Higgsfield, mas não foram publicados na comunidade. Por isso, só abrem para quem estiver logado na conta Higgsfield do 40hertz. Sem login, abra o HTML estático em `<empresa>/2-site/html-estatico-v3/index.html`.

## Processo
1. **Protótipos:** 3 direções visuais por empresa, geradas no Higgsfield com o GPT Image 2. Lucas escolheu a opção 1 das três. Os mockups que tinham dados inventados foram refeitos; a versão antiga está em `1-prototipos/v1-antigos/`.
2. **Site v1, v2 e v3:** React com TanStack Start, implantado no Higgsfield.
   - v1: primeira versão.
   - v2: fiel ao mockup, com o header idêntico, logos refeitos e fotos novas (as da Sabor são as originais tratadas no Higgsfield).
   - v3: refinamento premium (espaçamento e tipografia), auditado com o Impeccable no Claude Code. As críticas estão em `2-site/auditoria-impeccable/`.
3. **Carrossel:** 6 slides de 1080x1350 com a identidade do site, texto montado em HTML e renderizado com Playwright, só com fatos reais.
4. **Pôsteres:** 3 estilos por empresa (editorial, bold/pop e cinematográfico), feitos a partir das fotos reais ou melhoradas.
5. **Vídeos:**
   - `apresentacao-v1.mp4`: 10s, mais estático, feito com o Kling 3.0.
   - `anuncio-v2.mp4`: 11s, dinâmico, com cortes de 1,5 a 2s, texto animado e música. Usa clipes do Kling 3.0 pro e trilha do Sonilo Music, editados com ffmpeg.

## Créditos Higgsfield (aproximados)
- Vídeos v1: 52,5
- Vídeos v2: 113,75 (13 clipes)
- Música: 2,25
- Carrossel e pôsteres: 0, porque reaproveitamos as imagens que já tínhamos
- Protótipos, imagens do site e foto de topo da Gatti: foram gerados nas fases anteriores; o saldo detalhado está no histórico do Higgsfield.

## Ferramentas
Higgsfield (imagens, vídeo, música, sites), Claude Code com o Impeccable e o emil-design-eng, Playwright, ffmpeg, Pillow e vtracer.
