// Confere os arquivos que os testes da manhã geraram, sem confiar no que o Claude disse.
// Uso: cd testes/verificar && npm install && node verificar-manha.mjs [pasta-de-provas]
// Escreve testes/manha/verificacao.json e testes/manha/prints/*.png. Sai com código 1 se algo falhar.
import { chromium } from "playwright-core";
import { HtmlValidate } from "html-validate";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const PROVAS = path.resolve(process.argv[2] || path.join(AQUI, "..", "manha"));
const PRINTS = path.join(PROVAS, "prints");
fs.mkdirSync(PRINTS, { recursive: true });
const CERTOS = JSON.parse(fs.readFileSync(path.join(AQUI, "..", "manha", "numeros-certos.json"), "utf8"));
const CHROME = process.env.CHROME || "/usr/bin/google-chrome";

const resultado = {};
let falhou = false;
function anota(teste, nome, ok, detalhe = "") {
  (resultado[teste] ||= []).push({ nome, ok, detalhe });
  if (!ok) falhou = true;
  console.log(`${ok ? "✓" : "✗"} ${teste} · ${nome}${detalhe ? " · " + detalhe : ""}`);
}
const arq = (teste, rel) => path.join(PROVAS, teste, "arquivos", rel);
const existe = (f) => fs.existsSync(f) && fs.statSync(f).size > 0;
const ler = (f) => (existe(f) ? fs.readFileSync(f, "utf8") : "");
const brl = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ------------------------------------------------------------ HTML válido (regras que quebram a página, não estilo)
const validador = new HtmlValidate({
  extends: ["html-validate:recommended"],
  rules: {
    "no-inline-style": "off", "prefer-native-element": "off", "no-trailing-whitespace": "off", "attribute-boolean-style": "off",
    "void-style": "off", "attribute-empty-style": "off", "no-implicit-button-type": "off", "prefer-button": "off",
    "long-title": "off", "text-content": "off", "wcag/h63": "off", "no-redundant-role": "off", "tel-non-breaking": "off",
    "heading-level": "off", "valid-id": "off", "no-raw-characters": "off", "aria-label-misuse": "off", "unique-landmark": "off",
    "no-missing-references": "off", "prefer-tbody": "off", "hidden-focusable": "off", "input-missing-label": "off",
    "svg-focusable": "off", "element-required-attributes": "off", "no-dup-id": "error", "close-order": "error",
    "element-permitted-content": "off", "element-permitted-parent": "off", "no-unknown-elements": "off",
    "attribute-allowed-values": "off", "script-type": "off", "doctype-style": "off", "no-autoplay": "off",
    "wcag/h32": "off", // calculadora que atualiza sozinha não precisa de botão de enviar
  },
});
async function validaHtml(teste, f) {
  const r = await validador.validateFile(f);
  const erros = r.results.flatMap((x) => x.messages).filter((m) => m.severity === 2);
  anota(teste, `HTML válido (${path.basename(f)})`, erros.length === 0,
    erros.length ? erros.slice(0, 3).map((e) => `${e.ruleId} l.${e.line}: ${e.message}`).join(" | ") : "0 erros");
}

// ------------------------------------------------------------ regras do orçamento (orcamento.csv), calculadas aqui
const PRECO = { blend: 98, mantiqueira: 140, cerrado: 128 };
function esperado({ pessoas, xicaras, dias, cafe, anual, maquina }) {
  const kg = Math.ceil((pessoas * xicaras * 10 * dias) / 1000);
  const valorCafe = kg * PRECO[cafe];
  const dv = kg >= 40 ? 15 : kg >= 20 ? 10 : kg >= 10 ? 5 : 0;
  const descontoPct = dv + (anual ? 5 : 0);
  const cafeComDesconto = Math.round(valorCafe * (1 - descontoPct / 100) * 100) / 100;
  const maq = !maquina || kg >= 8 ? 0 : 120;
  const frete = cafeComDesconto >= 600 ? 0 : 35;
  const total = Math.round((cafeComDesconto + maq + frete) * 100) / 100;
  return { kg, valorCafe, descontoPct, cafeComDesconto, maquina: maq, frete, total,
    custoPorXicara: Math.round((total / (pessoas * xicaras * dias)) * 100) / 100 };
}
const CASOS = [
  { pessoas: 25, xicaras: 2, dias: 21, cafe: "blend", anual: true, maquina: true },
  { pessoas: 9, xicaras: 2, dias: 21, cafe: "mantiqueira", anual: false, maquina: true },
  { pessoas: 9, xicaras: 2, dias: 21, cafe: "mantiqueira", anual: false, maquina: false },
  { pessoas: 50, xicaras: 2, dias: 21, cafe: "cerrado", anual: true, maquina: true },
  { pessoas: 100, xicaras: 3, dias: 22, cafe: "blend", anual: false, maquina: true },
  { pessoas: 14, xicaras: 2, dias: 21, cafe: "blend", anual: false, maquina: true },
  { pessoas: 1, xicaras: 2, dias: 21, cafe: "blend", anual: false, maquina: true },
  { pessoas: 19, xicaras: 2, dias: 21, cafe: "blend", anual: false, maquina: true },
  { pessoas: 13, xicaras: 2, dias: 21, cafe: "cerrado", anual: false, maquina: true },
  { pessoas: 47, xicaras: 2, dias: 21, cafe: "blend", anual: true, maquina: true },
];
const NOMES_CAFE = {
  blend: ["Blend Escritório", "blend", "Blend", "blend-escritorio", "TV-102", "blend_escritorio"],
  mantiqueira: ["Mantiqueira Clássico", "mantiqueira", "Mantiqueira", "mantiqueira-classico", "TV-103", "mantiqueira_classico"],
  cerrado: ["Cerrado Doce", "cerrado", "Cerrado", "cerrado-doce", "TV-104", "cerrado_doce"],
};
const num = (v) => (typeof v === "string" ? parseFloat(v.replace(/[^\d,.-]/g, "").replace(/\.(?=\d{3})/g, "").replace(",", ".")) : Number(v));

async function abre(navegador, f, largura = 1280, altura = 800) {
  const pagina = await navegador.newPage({ viewport: { width: largura, height: altura } });
  const erros = [];
  pagina.on("pageerror", (e) => erros.push(e.message));
  pagina.on("console", (m) => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)/.test(m.text())) erros.push(m.text()); });
  await pagina.goto("file://" + f, { waitUntil: "load" });
  await pagina.waitForTimeout(800);
  return { pagina, erros };
}

const navegador = await chromium.launch({ executablePath: CHROME, headless: true });

// ------------------------------------------------------------ passo 1
{
  const t = ler(path.join(PROVAS, "passo-01", "transcricao.txt"));
  anota("passo-01", "respondeu citando a Torra Viva", /Torra Viva/.test(t));
}

// ------------------------------------------------------------ passo 2: números do resumo
{
  const f = arq("passo-02", "meu-trabalho/resumo-vendas.md");
  const md = ler(f);
  anota("passo-02", "meu-trabalho/resumo-vendas.md existe", !!md);
  anota("passo-02", "tem o aviso de dados fictícios", /dados fict[ií]cios de exemplo/i.test(md));
  const deve = [
    ["faturamento total", brl(CERTOS.faturamento_total)],
    ["melhor mês (agosto)", brl(CERTOS.fat_mes["2026-08"])],
    ["pior mês (fevereiro)", brl(CERTOS.fat_mes["2026-02"])],
    ["crescimento do B2B", "367,5"],
    ["produto que mais faturou", "Clube Torra Viva"],
    ["produto com mais unidades", "2.910"],
    ["cliente cancelado", "Vida Clara"],
    ["cliente pausado", "Casa Certa"],
  ];
  for (const [nome, valor] of deve) anota("passo-02", `${nome}: ${valor}`, md.includes(valor));
}

// ------------------------------------------------------------ passo 3: as 8 respostas existem; a boa segue o formato
for (let i = 1; i <= 4; i++) for (const tipo of ["ruim", "bom"]) {
  const t = ler(path.join(PROVAS, `passo-03-ex${i}-${tipo}`, "transcricao.txt"));
  anota(`passo-03-ex${i}-${tipo}`, "tem resposta", t.split("resposta do Claude")[1]?.trim().length > 50);
}
{
  const r = ler(path.join(PROVAS, "passo-03-ex4-bom", "transcricao.txt")).split("resposta do Claude")[1] || "";
  const msg = r.trim().split(/\n\s*\n|\n---/)[0];
  const palavras = msg.split(/\s+/).filter(Boolean).length;
  anota("passo-03-ex4-bom", "mensagem de WhatsApp com até 60 palavras e sem preço", palavras <= 62 && !/R\$/.test(msg), `${palavras} palavras`);
  const t3 = ler(path.join(PROVAS, "passo-03-ex3-bom", "transcricao.txt"));
  anota("passo-03-ex3-bom", "tabela com o crescimento do B2B certo (367,5%)", /367,5/.test(t3));
}

// ------------------------------------------------------------ passo 4
for (const t of ["passo-04-margem", "passo-04-arquivo"]) {
  const r = ler(path.join(PROVAS, t, "transcricao.txt"));
  anota(t, "segue as 5 partes da eli5", /Em uma frase/i.test(r) && /Pensa assim/i.test(r) && /passo a passo/i.test(r) && /importa/i.test(r));
}

// ------------------------------------------------------------ passo 5
{
  const f = path.join(PROVAS, "passo-05-criar", "arquivos", ".claude/skills/resposta-cliente/SKILL.md");
  const s = ler(f);
  anota("passo-05-criar", "criou .claude/skills/resposta-cliente/SKILL.md", !!s);
  anota("passo-05-criar", "frontmatter com name e description", /^---\s*\nname:\s*resposta-cliente/m.test(s) && /description:/.test(s));
  anota("passo-05-criar", "não menciona almoço", !/almo[cç]o/i.test(s));
  for (let i = 1; i <= 3; i++) {
    const r = ler(path.join(PROVAS, `passo-05-uso-${i}`, "transcricao.txt"));
    anota(`passo-05-uso-${i}`, "classificou e respondeu", /(d[uú]vida|pedido|reclama[cç][aã]o|elogio)/i.test(r) && r.length > 300);
  }
}

// ------------------------------------------------------------ passo 6
{
  const md = ler(arq("passo-06", "meu-trabalho/design-system.md"));
  anota("passo-06", "design-system.md existe", !!md);
  const hex = new Set((md.match(/#[0-9A-Fa-f]{6}\b/g) || []).map((h) => h.toUpperCase()));
  anota("passo-06", "tem as cores da imagem (Cereja #C23B22 e Folha #234B3F)", hex.has("#C23B22") && hex.has("#234B3F"), `${hex.size} cores`);
  anota("passo-06", "tem bloco :root", /:root\s*{/.test(md));
  anota("passo-06", "tem fontes do Google Fonts", /Bricolage|Albert|fonts\.google/i.test(md));
}

// ------------------------------------------------------------ passo 7: calculadora
{
  const f = arq("passo-07-calculadora", "meu-trabalho/calculadora-orcamento.html");
  anota("passo-07-calculadora", "arquivo existe", existe(f));
  if (existe(f)) {
    await validaHtml("passo-07-calculadora", f);
    const { pagina, erros } = await abre(navegador, f);
    const temFuncao = await pagina.evaluate(() => typeof window.calcularOrcamento === "function");
    anota("passo-07-calculadora", "expõe calcularOrcamento()", temFuncao);
    if (temFuncao) {
      let ok = 0; const detalhes = [];
      for (const c of CASOS) {
        const e = esperado(c);
        let r = null, usado = null;
        for (const nomeCafe of NOMES_CAFE[c.cafe]) {
          try {
            r = await pagina.evaluate((entrada) => window.calcularOrcamento(entrada), { ...c, cafe: nomeCafe });
            if (r && Math.abs(num(r.valorCafe) - e.valorCafe) < 0.01) { usado = nomeCafe; break; }
          } catch { r = null; }
        }
        const campos = ["kg", "valorCafe", "descontoPct", "cafeComDesconto", "maquina", "frete", "total", "custoPorXicara"];
        const errados = r ? campos.filter((k) => Math.abs(num(r[k]) - e[k]) > 0.011 && !(k === "descontoPct" && Math.abs(num(r[k]) * 100 - e[k]) < 0.01)) : campos;
        if (!errados.length) ok++;
        else detalhes.push(`${c.pessoas}p ${c.cafe} ${c.anual ? "anual" : "mensal"}${c.maquina ? "" : " sem máq."}: ${errados.map((k) => `${k} ${r ? r[k] : "?"}≠${e[k]}`).join(", ")}`);
      }
      anota("passo-07-calculadora", `contas certas em ${ok} de ${CASOS.length} casos`, ok === CASOS.length, detalhes.join(" | "));
    }
    // a tela muda quando o número de pessoas muda
    const campo = await pagina.$("input[type=number]");
    const antes = await pagina.evaluate(() => document.body.innerText);
    if (campo) { await campo.fill("60"); await campo.dispatchEvent("input"); await campo.dispatchEvent("change"); await pagina.waitForTimeout(400); }
    const depois = await pagina.evaluate(() => document.body.innerText);
    anota("passo-07-calculadora", "o resultado na tela muda ao trocar o número de pessoas", !!campo && antes !== depois);
    anota("passo-07-calculadora", "aviso de dados fictícios na página", /dados fict[ií]cios de exemplo/i.test(depois));
    anota("passo-07-calculadora", "sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    await pagina.screenshot({ path: path.join(PRINTS, "calculadora.png"), fullPage: true });
    await pagina.close();
  }
}

// ------------------------------------------------------------ passo 7: dashboard
{
  const f = arq("passo-07-dashboard", "meu-trabalho/dashboard-vendas.html");
  anota("passo-07-dashboard", "arquivo existe", existe(f));
  if (existe(f)) {
    await validaHtml("passo-07-dashboard", f);
    const { pagina, erros } = await abre(navegador, f, 1440, 900);
    const texto = await pagina.evaluate(() => document.body.innerText);
    const total = brl(CERTOS.faturamento_total);
    anota("passo-07-dashboard", `faturamento total ${total}`, texto.includes(total) || texto.includes(total.replace(/,\d\d$/, "")) || /765(\.|,)?\d?\s*mil/i.test(texto));
    anota("passo-07-dashboard", "melhor mês: agosto", /agosto|ago/i.test(texto));
    anota("passo-07-dashboard", "12 clientes B2B ativos em setembro", /\b12\b/.test(texto));
    anota("passo-07-dashboard", "gráficos em SVG ou canvas", (await pagina.$$("svg, canvas")).length >= 2);
    anota("passo-07-dashboard", "aviso de dados fictícios", /dados fict[ií]cios de exemplo/i.test(texto));
    const sel = await pagina.$("select");
    let filtrou = false;
    if (sel) {
      const opcoes = await sel.$$eval("option", (os) => os.map((o) => o.value || o.textContent));
      const b2b = opcoes.find((o) => /B2B/i.test(o));
      if (b2b) { await sel.selectOption(b2b); await pagina.waitForTimeout(500); }
    } else {
      const botao = await pagina.$("button:has-text('B2B'), [role=tab]:has-text('B2B'), label:has-text('B2B'), [data-canal*='B2B']");
      if (botao) { await botao.click(); await pagina.waitForTimeout(500); }
    }
    const texto2 = await pagina.evaluate(() => document.body.innerText);
    filtrou = texto2 !== texto && (texto2.includes(brl(112560.4)) || /112[.,]?5/.test(texto2));
    anota("passo-07-dashboard", "filtro B2B mostra R$ 112.560,40", filtrou);
    anota("passo-07-dashboard", "sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    await pagina.screenshot({ path: path.join(PRINTS, "dashboard.png"), fullPage: true });
    await pagina.close();
  }
}

// ------------------------------------------------------------ passo 7: apresentação
{
  const f = arq("passo-07-apresentacao", "meu-trabalho/apresentacao.html");
  anota("passo-07-apresentacao", "arquivo existe", existe(f));
  if (existe(f)) {
    await validaHtml("passo-07-apresentacao", f);
    const { pagina, erros } = await abre(navegador, f, 1280, 720);
    const n = await pagina.evaluate(() => document.querySelectorAll("section.slide, .slide, section[data-slide], .slides > section, main > section").length);
    anota("passo-07-apresentacao", "6 slides", n === 6, `${n} encontrados`);
    await pagina.screenshot({ path: path.join(PRINTS, "apresentacao-1.png") });
    const visivel = () => pagina.evaluate(() => document.body.innerText.slice(0, 400));
    const a = await visivel();
    await pagina.keyboard.press("ArrowRight"); await pagina.waitForTimeout(900);
    const b = await visivel();
    await pagina.screenshot({ path: path.join(PRINTS, "apresentacao-2.png") });
    const shot1 = fs.readFileSync(path.join(PRINTS, "apresentacao-1.png"));
    const shot2 = fs.readFileSync(path.join(PRINTS, "apresentacao-2.png"));
    anota("passo-07-apresentacao", "seta → muda de slide", a !== b || !shot1.equals(shot2));
    const texto = await pagina.evaluate(() => document.body.textContent);
    anota("passo-07-apresentacao", "rodapé de dados fictícios", /dados fict[ií]cios de exemplo/i.test(texto));
    anota("passo-07-apresentacao", "sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    await pagina.close();
  }
}

// ------------------------------------------------------------ passo 8: animação (plano B)
{
  const f = arq("passo-08", "meu-trabalho/animacao-torra-viva.html");
  anota("passo-08", "arquivo existe", existe(f));
  if (existe(f)) {
    await validaHtml("passo-08", f);
    const { pagina, erros } = await abre(navegador, f, 540, 960);
    // tira um print em 4 momentos (a página já está rodando desde o load)
    const t0 = Date.now(); const prints = [];
    for (const s of [1.5, 7, 13, 18]) {
      const espera = s * 1000 - (Date.now() - t0);
      if (espera > 0) await pagina.waitForTimeout(espera);
      const p = path.join(PRINTS, `animacao-${String(s).replace(".", "_")}s.png`);
      await pagina.screenshot({ path: p });
      prints.push(fs.readFileSync(p));
    }
    const diferentes = new Set(prints.map((b) => b.toString("base64"))).size;
    anota("passo-08", "a tela muda ao longo dos 20 s (4 prints)", diferentes >= 3, `${diferentes} quadros diferentes`);
    const texto = await pagina.evaluate(() => document.body.textContent);
    anota("passo-08", "aviso de dados fictícios", /dados fict[ií]cios de exemplo/i.test(texto));
    anota("passo-08", "respeita prefers-reduced-motion", /prefers-reduced-motion/.test(ler(f)));
    anota("passo-08", "sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    await pagina.close();
  }
}

// ------------------------------------------------------------ skills extras
{
  const f = arq("skill-frontend-design", "meu-trabalho/cartao-fidelidade.html");
  anota("skill-frontend-design", "cartao-fidelidade.html existe", existe(f));
  if (existe(f)) {
    await validaHtml("skill-frontend-design", f);
    const { pagina, erros } = await abre(navegador, f, 390, 844);
    const antes = await pagina.evaluate(() => document.body.innerHTML);
    const alvo = await pagina.$("button, [role=button], [data-carimbo], .carimbo");
    if (alvo) { await alvo.click(); await pagina.waitForTimeout(400); }
    const depois = await pagina.evaluate(() => document.body.innerHTML);
    anota("skill-frontend-design", "clicar num carimbo muda a tela", !!alvo && antes !== depois);
    anota("skill-frontend-design", "sem erro de JavaScript", erros.length === 0, erros.slice(0, 2).join(" | "));
    await pagina.screenshot({ path: path.join(PRINTS, "cartao-fidelidade.png"), fullPage: true });
    await pagina.close();
  }
  const g = ler(arq("skill-grill-me", "meu-trabalho/plano-capsulas.md"));
  anota("skill-grill-me", "salvou meu-trabalho/plano-capsulas.md", !!g);
  const fs_ = ler(path.join(PROVAS, "skill-find-skills", "transcricao.txt"));
  anota("skill-find-skills", "listou opções de skills", /skills?\.sh|npx skills|install/i.test(fs_));
  const h = ler(path.join(PROVAS, "skill-humanizer", "transcricao.txt")).split("resposta do Claude")[1] || "";
  // só o texto reescrito (o bloco depois de "Versão final", ou o primeiro bloco citado com >)
  const final = (h.split(/Vers[aã]o final/i)[1] || h).split("\n").filter((l) => l.startsWith(">")).join(" ");
  anota("skill-humanizer", "o texto final não tem 'jornada sensorial' nem 'revolução'", final.length > 50 && !/jornada sensorial|revolu[cç][aã]o/i.test(final));
}

await navegador.close();
fs.writeFileSync(path.join(PROVAS, "verificacao.json"), JSON.stringify(resultado, null, 1));
const total = Object.values(resultado).flat();
console.log(`\n${total.filter((x) => x.ok).length} de ${total.length} conferências passaram`);
process.exit(falhou ? 1 : 0);
