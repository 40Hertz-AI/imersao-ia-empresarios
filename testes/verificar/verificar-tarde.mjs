// Confere os arquivos que os testes da tarde geraram.
// Uso: cd testes/verificar && node verificar-tarde.mjs
// Escreve testes/tarde/verificacao.json, testes/pasta-vazia/verificacao-tarde.json e prints em testes/tarde/prints/.
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const TARDE = path.join(AQUI, "..", "tarde");
const VAZIA = path.join(AQUI, "..", "pasta-vazia");
const PRINTS = path.join(TARDE, "prints");
fs.mkdirSync(PRINTS, { recursive: true });
const CHROME = process.env.CHROME || "/usr/bin/google-chrome";

const res = { aula: {}, vazia: {} };
let falhou = false;
function anota(onde, teste, nome, ok, detalhe = "") {
  (res[onde][teste] ||= []).push({ nome, ok, detalhe });
  if (!ok) falhou = true;
  console.log(`${ok ? "✓" : "✗"} [${onde}] ${teste} · ${nome}${detalhe ? " · " + detalhe : ""}`);
}
const existe = (f) => fs.existsSync(f) && fs.statSync(f).size > 0;
const ler = (f) => (existe(f) ? fs.readFileSync(f, "utf8") : "");
const base = (onde, teste) => (onde === "aula" ? path.join(TARDE, teste) : path.join(VAZIA, `tarde-${teste}`));
const arq = (onde, teste, rel) => path.join(base(onde, teste), "arquivos", rel);
const lista = (onde, teste) => ler(path.join(base(onde, teste), "arquivos-gerados.txt"));
const fala = (onde, teste) => ler(path.join(base(onde, teste), "transcricao.txt"));
// o arquivo pode ter sido criado num teste anterior da trilha: procura na pasta de trabalho da trilha também
const TRILHA = "/tmp/teste-tarde-trilha";
const naTrilha = (rel) => path.join(TRILHA, rel);

function bloco(html, id) {
  const m = html.match(new RegExp(`<!-- INICIO:${id} -->([\\s\\S]*?)<!-- FIM:${id} -->`));
  return m ? m[1] : "";
}
function blocoLimpo(onde, teste, html, ids) {
  for (const id of ids) {
    const b = bloco(html, id);
    anota(onde, teste, `RESULTADO: bloco ${id} preenchido`, b.length > 200 && !/class="pendente"/.test(b), `${b.length} caracteres`);
    const sujo = (b.replace(/<style[\s\S]*?<\/style>/g, "").match(/\{[a-z_]+\}|undefined|N\/A/g) || []);
    anota(onde, teste, `RESULTADO: bloco ${id} sem {campo}, undefined ou N/A`, sujo.length === 0, sujo.slice(0, 3).join(" "));
  }
}

const nav = await chromium.launch({ executablePath: CHROME, headless: true });
async function abre(f, w = 1280, h = 900) {
  const p = await nav.newPage({ viewport: { width: w, height: h } });
  const erros = [];
  p.on("pageerror", (e) => erros.push(e.message));
  await p.goto("file://" + f, { waitUntil: "load" });
  await p.waitForTimeout(1200);
  return { p, erros };
}

// carrossel e posts em HTML: abre, conta lâminas, ?n= mostra uma só, setas funcionam
async function confereLaminas(onde, teste, pasta) {
  const car = path.join(pasta, "entregas/posts/carrossel-1.html");
  anota(onde, teste, "carrossel-1.html existe", existe(car));
  for (const f of ["post-1.html", "post-2.html", "legendas.md"]) anota(onde, teste, `${f} existe`, existe(path.join(pasta, "entregas/posts", f)));
  const pngs = fs.existsSync(path.join(pasta, "entregas/posts")) ? fs.readdirSync(path.join(pasta, "entregas/posts")).filter((f) => /\.png$/i.test(f)) : [];
  anota(onde, teste, "nenhum PNG gerado (só HTML)", pngs.length === 0, pngs.join(" "));
  if (!existe(car)) return;
  const html = ler(car);
  anota(onde, teste, "não usa Playwright nem imagem de fora", !/playwright/i.test(html) && !/<img[^>]+src="https?:/i.test(html));
  const { p, erros } = await abre(car, 1280, 900);
  const n = await p.evaluate(() => document.querySelectorAll(".lamina").length);
  anota(onde, teste, "carrossel com 6 a 8 lâminas de 1080 × 1350", n >= 6 && n <= 8, `${n} lâminas`);
  const visiveis = () => p.evaluate(() => [...document.querySelectorAll(".lamina")].filter((l) => l.offsetParent !== null || getComputedStyle(l).display !== "none" && !l.hidden).length);
  anota(onde, teste, "abre mostrando 1 lâmina por vez", (await visiveis()) === 1);
  const tam = await p.evaluate(() => { const l = document.querySelector(".lamina"); return [l.offsetWidth, l.offsetHeight]; });
  anota(onde, teste, "lâmina mede 1080 × 1350", tam[0] === 1080 && tam[1] === 1350, tam.join(" × "));
  await p.screenshot({ path: path.join(PRINTS, `${teste}-${onde}-carrossel-1.png`) });
  const a = await p.evaluate(() => [...document.querySelectorAll(".lamina")].findIndex((l) => !l.hidden && getComputedStyle(l).display !== "none"));
  await p.keyboard.press("ArrowRight"); await p.waitForTimeout(300);
  const b = await p.evaluate(() => [...document.querySelectorAll(".lamina")].findIndex((l) => !l.hidden && getComputedStyle(l).display !== "none"));
  anota(onde, teste, "seta → passa para a lâmina 2", a === 0 && b === 1, `${a} → ${b}`);
  await p.screenshot({ path: path.join(PRINTS, `${teste}-${onde}-carrossel-2.png`) });
  anota(onde, teste, "sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
  await p.close();
  // ?n=3 no tamanho do feed (como o relatório usa)
  const q = await nav.newPage({ viewport: { width: 1080, height: 1350 } });
  await q.goto("file://" + car + "?n=3"); await q.waitForTimeout(1200);
  const so = await q.evaluate(() => [...document.querySelectorAll(".lamina")].map((l, i) => (!l.hidden && getComputedStyle(l).display !== "none" ? i : -1)).filter((i) => i >= 0));
  anota(onde, teste, "?n=3 mostra só a lâmina 3", so.length === 1 && so[0] === 2, JSON.stringify(so));
  const corta = await q.evaluate(() => { const l = [...document.querySelectorAll(".lamina")][2]; return [...l.querySelectorAll("*")].filter((e) => { const r = e.getBoundingClientRect(); const L = l.getBoundingClientRect(); return r.width && (r.right > L.right + 1 || r.bottom > L.bottom + 1 || r.left < L.left - 1); }).length; });
  anota(onde, teste, "nada sai da lâmina 3", corta === 0, `${corta} elementos para fora`);
  await q.screenshot({ path: path.join(PRINTS, `${teste}-${onde}-n3.png`) });
  await q.close();
  for (const f of ["post-1.html", "post-2.html"]) {
    const pf = path.join(pasta, "entregas/posts", f);
    if (!existe(pf)) continue;
    const { p: pp, erros: e2 } = await abre(pf, 1080, 1350);
    const nl = await pp.evaluate(() => document.querySelectorAll(".lamina").length);
    anota(onde, teste, `${f}: 1 lâmina, abre sem erro`, nl === 1 && e2.length === 0, `${nl} lâmina(s)`);
    await pp.screenshot({ path: path.join(PRINTS, `${teste}-${onde}-${f.replace(".html", "")}.png`) });
    await pp.close();
  }
}

// ------------------------------------------------------------ pasta da aula: a trilha da Torra Viva
{
  const html = ler(arq("aula", "instalar", "RESULTADO.html"));
  anota("aula", "instalar", "criou RESULTADO.html a partir do modelo", html.includes("<!-- INICIO:capa -->"));
  blocoLimpo("aula", "instalar", html, ["capa", "ficha"]);
  for (const f of ["memoria/empresa.md", "memoria/foco.md", "memoria/numeros.md", "marca/marca.md"]) anota("aula", "instalar", `gravou ${f}`, lista("aula", "instalar").includes(f));
  const ficha = bloco(html, "ficha") + bloco(html, "capa");
  anota("aula", "instalar", "faturamento não aparece no RESULTADO", !/100 mil|100\.000|faturamento/i.test(ficha.replace(/<details[\s\S]*?<\/details>/g, "")));
  anota("aula", "instalar", "fechou no formato ✓ … Próximo", /✓[\s\S]*Próximo:/.test(fala("aula", "instalar")));
}
{
  const l = lista("aula", "mapear-empresa");
  for (const f of ["pesquisa/empresa.md", "pesquisa/mercado.md", "pesquisa/cliente.md", "pesquisa/diagnostico.md"]) anota("aula", "mapear-empresa", `gravou ${f}`, l.includes(f));
  const merc = ler(arq("aula", "mapear-empresa", "pesquisa/mercado.md"));
  anota("aula", "mapear-empresa", "mercado.md tem fontes com link", (merc.match(/https?:\/\//g) || []).length >= 3);
  blocoLimpo("aula", "mapear-empresa", ler(arq("aula", "mapear-empresa", "RESULTADO.html")), ["empresa", "mercado", "cliente", "diagnostico"]);
}
{
  const l = lista("aula", "marca");
  anota("aula", "marca", "atualizou marca/marca.md", l.includes("marca/marca.md"));
  const m = ler(naTrilha("marca/marca.md"));
  anota("aula", "marca", "usou as cores do print (#C23B22 ou #234B3F)", /#C23B22|#234B3F/i.test(m));
}
{
  const c = ler(arq("aula", "mapear-concorrentes", "pesquisa/concorrentes.md"));
  anota("aula", "mapear-concorrentes", "gravou pesquisa/concorrentes.md", !!c);
  anota("aula", "mapear-concorrentes", "tem tabela, mapa e espaços vazios", /Tabela comparativa/i.test(c) && /Mapa de posicionamento/i.test(c) && /Espa[cç]os vazios/i.test(c));
  blocoLimpo("aula", "mapear-concorrentes", ler(arq("aula", "mapear-concorrentes", "RESULTADO.html")), ["concorrentes"]);
}
{
  anota("aula", "criar-oferta", "gravou entregas/oferta.md", existe(arq("aula", "criar-oferta", "entregas/oferta.md")));
  blocoLimpo("aula", "criar-oferta", ler(arq("aula", "criar-oferta", "RESULTADO.html")), ["oferta"]);
}
{
  const f = arq("aula", "criar-pagina", "entregas/pagina-de-vendas.html");
  anota("aula", "criar-pagina", "gravou pagina-de-vendas.html e formulario.html", existe(f) && existe(arq("aula", "criar-pagina", "entregas/formulario.html")));
  if (existe(f)) {
    const { p, erros } = await abre(naTrilha("entregas/pagina-de-vendas.html"), 390, 844);
    const larg = await p.evaluate(() => document.documentElement.scrollWidth);
    anota("aula", "criar-pagina", "no celular (390 px) não rola para o lado", larg <= 392, `${larg} px`);
    anota("aula", "criar-pagina", "abre sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    anota("aula", "criar-pagina", "formulário manda para o WhatsApp", /wa\.me/.test(ler(f) + ler(arq("aula", "criar-pagina", "entregas/formulario.html"))));
    await p.screenshot({ path: path.join(PRINTS, "criar-pagina-aula-celular.png"), fullPage: true });
    await p.close();
  }
  blocoLimpo("aula", "criar-pagina", ler(arq("aula", "criar-pagina", "RESULTADO.html")), ["pagina"]);
}
for (const [teste, pasta] of [["criar-conteudo", TRILHA], ["criar-conteudo-forno", "/tmp/teste-tarde-criar-conteudo-forno"]]) {
  if (!fs.existsSync(path.join(base("aula", teste)))) { anota("aula", teste, "teste rodou", false); continue; }
  anota("aula", teste, "gravou entregas/conteudo.md", lista("aula", teste).includes("entregas/conteudo.md"));
  await confereLaminas("aula", teste, pasta);
  const html = ler(path.join(pasta, "RESULTADO.html"));
  blocoLimpo("aula", teste, html, ["conteudo"]);
  const b = bloco(html, "conteudo");
  const iframes = (b.match(/class="slide html"><iframe src="entregas\/posts\/carrossel-1\.html\?n=\d+"/g) || []).length;
  anota("aula", teste, "RESULTADO: um .slide html por lâmina", iframes >= 6, `${iframes} lâminas`);
  anota("aula", teste, "RESULTADO: nenhum .slide img (PNG)", !/slide img/.test(b));
  // o relatório mostra a lâmina escalada dentro do post
  const { p, erros } = await abre(path.join(pasta, "RESULTADO.html"), 1280, 900);
  const sec = await p.$("#conteudo, section:has(> * code:text('/criar-conteudo'))");
  const alvo = (await p.$("[id='conteudo']")) || (await p.$(".post"));
  if (alvo) { await alvo.scrollIntoViewIfNeeded(); await p.waitForTimeout(2500); }
  const escala = await p.evaluate(() => { const s = document.querySelector(".slide.html"); return s ? getComputedStyle(s).getPropertyValue("--s") : ""; });
  anota("aula", teste, "RESULTADO: lâmina escalada no post (--s)", parseFloat(escala) > 0.2 && parseFloat(escala) < 1, `--s = ${escala}`);
  const post = await p.$(".post");
  if (post) await post.screenshot({ path: path.join(PRINTS, `${teste}-resultado-post.png`) });
  anota("aula", teste, "RESULTADO abre sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
  await p.close();
  const fl = fala("aula", teste);
  anota("aula", teste, "não rodou Playwright nem gerou PNG", !/playwright|\.png/i.test(lista("aula", teste)) );
}
{
  const s = ler(arq("aula", "sobre-mim", "memoria/sobre-mim.md"));
  anota("aula", "sobre-mim", "gravou memoria/sobre-mim.md (usou a pasta memoria/ da aula)", !!s);
  anota("aula", "sobre-mim", "mapa com processos, gatilho e diagrama", /Mapa de processos/.test(s) && /Gatilho/i.test(s) && /flowchart/.test(s));
  anota("aula", "sobre-mim", "gravou memoria/falta-trazer.md", existe(arq("aula", "sobre-mim", "memoria/falta-trazer.md")));
  anota("aula", "sobre-mim", "acrescentou 'Quem trabalha aqui' no CLAUDE.md", /## Quem trabalha aqui/.test(ler(arq("aula", "sobre-mim", "CLAUDE.md"))));
  const g = ler(arq("aula", "sugerir-automacoes", "entregas/sugestoes.md"));
  anota("aula", "sugerir-automacoes", "gravou entregas/sugestoes.md", !!g);
  anota("aula", "sugerir-automacoes", "tem as 3 primeiras e a tabela de sugestões", /As 3 primeiras/i.test(g) && /Todas as sugest/i.test(g));
  anota("aula", "sugerir-automacoes", "usou o mapa do /sobre-mim", /sobre-mim/.test(g));
}

// ------------------------------------------------------------ testes refeitos depois dos ajustes finais
{
  const html = ler(arq("aula", "instalar-revisado", "RESULTADO.html"));
  if (html) {
    anota("aula", "instalar-revisado", "capa sem contagem de fases na frase", !/de 6 fases/.test(bloco(html, "capa")));
    blocoLimpo("aula", "instalar-revisado", html, ["capa", "ficha"]);
  }
  const t = fala("aula", "criar-pagina-de-novo");
  if (t) {
    const final = t.split("resposta do Claude").pop();
    anota("aula", "criar-pagina-de-novo", "a última mensagem é o fechamento da fase (✓ Página de vendas … Próximo)", /✓ Página de vendas[\s\S]*Próximo:/.test(final));
    const pag = ler("/tmp/teste-tarde-criar-pagina-de-novo/entregas/pagina-de-vendas.html");
    const cli = ler("/tmp/teste-tarde-criar-pagina-de-novo/pesquisa/cliente.md");
    const inferidas = [...cli.matchAll(/"([^"]{15,})"[^\n]*\(inferida\)/g)].map((m) => m[1].slice(0, 30));
    const usadas = inferidas.filter((f) => pag.includes(f));
    anota("aula", "criar-pagina-de-novo", "frase (inferida) da pesquisa não aparece como citação na página", usadas.length === 0, usadas.join(" | "));
  }
}

// ------------------------------------------------------------ pasta vazia: cada skill sozinha
const vazias = {
  instalar: ["memoria/empresa.md", "memoria/foco.md", "memoria/numeros.md", "marca/marca.md", "controle/progresso.md"],
  "mapear-empresa": ["memoria/empresa.md", "pesquisa/empresa.md", "pesquisa/mercado.md", "pesquisa/cliente.md", "pesquisa/diagnostico.md"],
  "mapear-concorrentes": ["memoria/empresa.md", "pesquisa/concorrentes.md"],
  "criar-oferta": ["memoria/empresa.md", "entregas/oferta.md"],
  "criar-pagina": ["entregas/pagina-de-vendas.html", "entregas/formulario.html"],
  "criar-conteudo": ["entregas/conteudo.md", "entregas/posts/carrossel-1.html"],
  marca: ["marca/marca.md"],
  "sobre-mim": ["contexto/sobre-mim.md", "contexto/falta-trazer.md", "CLAUDE.md"],
  "sugerir-automacoes": ["entregas/sugestoes.md"],
};
for (const [s, arqs] of Object.entries(vazias)) {
  const l = lista("vazia", s);
  if (!fs.existsSync(base("vazia", s))) { anota("vazia", s, "teste rodou", false); continue; }
  for (const f of arqs) anota("vazia", s, `criou ${f}`, l.includes(f));
  anota("vazia", s, "não criou RESULTADO.html (não há modelo na pasta vazia)", !l.includes("RESULTADO.html"));
}
await confereLaminas("vazia", "criar-conteudo", "/tmp/vazia-tarde-criar-conteudo");
{
  const f = arq("vazia", "frontend-design", "pagina.html");
  anota("vazia", "frontend-design", "criou pagina.html", existe(f));
  if (existe(f)) {
    const { p, erros } = await abre(path.join("/tmp/vazia-tarde-frontend-design", "pagina.html"), 390, 844);
    anota("vazia", "frontend-design", "abre sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    await p.screenshot({ path: path.join(PRINTS, "frontend-design-vazia-celular.png"), fullPage: true });
    await p.close();
  }
}

// ------------------------------------------------------------ as skills não falam de almoço
{
  const raiz = path.join(AQUI, "..", "..");
  const achados = [];
  for (const area of ["torra-viva", "minha-empresa"]) {
    const dir = path.join(raiz, area, ".claude");
    const anda = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = path.join(d, e.name); if (e.isDirectory()) anda(f); else if (/almoço|almoco/i.test(fs.readFileSync(f, "latin1") + fs.readFileSync(f, "utf8"))) achados.push(path.relative(raiz, f)); } };
    anda(dir);
  }
  anota("aula", "todas-as-skills", "nenhuma skill menciona almoço", achados.length === 0, achados.join(" "));
}

await nav.close();
fs.writeFileSync(path.join(TARDE, "verificacao.json"), JSON.stringify(res.aula, null, 1));
fs.writeFileSync(path.join(VAZIA, "verificacao-tarde.json"), JSON.stringify(res.vazia, null, 1));
const tudo = [...Object.values(res.aula), ...Object.values(res.vazia)].flat();
console.log(`\n${tudo.filter((x) => x.ok).length} de ${tudo.length} conferências passaram`);
process.exit(falhou ? 1 : 0);
