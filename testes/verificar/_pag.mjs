import { chromium } from "playwright-core";
const [f, out, w, h] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
const erros = []; p.on("pageerror", (e) => erros.push(e.message));
await p.goto("file://" + f); await p.waitForTimeout(1500);
for (let y = 0; y < 20000; y += 600) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(100); }
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(600);
await p.screenshot({ path: out, fullPage: true });
console.log("erros", erros.length, "largura", await p.evaluate(() => document.documentElement.scrollWidth));
await b.close();
