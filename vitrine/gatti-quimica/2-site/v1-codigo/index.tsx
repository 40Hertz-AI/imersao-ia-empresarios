import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const WA = "https://wa.me/5511984470736?text=" + encodeURIComponent("Olá! Gostaria de falar com o comercial da Gatti Química.");
const B = "#0B3A78", BD = "#082a57";

const linhas = [
  { t: "Linha Refrigeração", d: "Soluções para limpeza profissional de sistemas de refrigeração e climatização.", img: "/assets/refrigeracao.png" },
  { t: "Linha Automotiva", d: "Soluções de limpeza profissional interna e externa para veículos pesados.", img: "/assets/automotiva.png" },
  { t: "Linha Institucional", d: "Soluções profissionais para limpeza, higienização, lavanderia e perfumação de ambientes.", img: "/assets/institucional.png" },
  { t: "Linha Industrial", d: "Soluções profissionais em desengraxe, desenvolvidas para elevar o padrão da sua operação.", img: "/assets/industrial.png" },
];
const clientes = ["refricril", "dufrio", "frigelar", "cimed", "rede-dor", "rede-diroma", "osmag", "usina-colorado", "disparcon"];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img src="/assets/favicon.webp" alt="" className="h-10 w-10 rounded" />
      <span className="leading-none">
        <span className={`block text-2xl font-extrabold tracking-wide ${light ? "text-white" : "text-[#0B3A78]"}`}>GATTI</span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.35em] ${light ? "text-white/70" : "text-slate-500"}`}>Química</span>
      </span>
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#topo"><Logo /></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-wide lg:flex">
            <a href="#empresa" className="hover:text-[#0B3A78]">A Empresa</a>
            <a href="#linhas" className="hover:text-[#0B3A78]">Produtos</a>
            <a href="https://gattiquimica.com.br/" target="_blank" rel="noreferrer" className="hover:text-[#0B3A78]">Ficha Técnica e FDS</a>
            <a href="#contato" className="hover:text-[#0B3A78]">Contato</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" style={{ background: B }} className="rounded-md px-4 py-2 text-sm font-bold uppercase text-white">Fale com o comercial</a>
        </div>
      </header>

      <section id="topo" className="relative overflow-hidden text-white">
        <img src="/assets/hero.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BD} 0%, ${BD}e6 40%, ${BD}55 100%)` }} />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <h1 className="max-w-2xl text-4xl font-extrabold uppercase leading-[1.05] md:text-6xl">Desde 1964 em soluções de limpeza profissional</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">Produtos e matérias-primas para limpeza e higienização profissional, com formulações altamente concentradas.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#linhas" className="rounded-md bg-white px-6 py-3 font-bold uppercase text-[#0B3A78]">Conheça nossas linhas</a>
            <a href={WA} target="_blank" rel="noreferrer" className="rounded-md border-2 border-white px-6 py-3 font-bold uppercase">WhatsApp</a>
          </div>
          <div className="mt-10 inline-flex items-center gap-4 rounded-xl border border-white/30 bg-gradient-to-r from-slate-100 to-slate-300 px-5 py-3 text-[#0B3A78] shadow-lg">
            <span className="text-3xl font-extrabold">Nº1</span>
            <span className="text-sm font-bold uppercase leading-tight">Líderes no fornecimento de produtos de<br />limpeza para ar-condicionado no Brasil</span>
          </div>
        </div>
      </section>

      <section id="linhas" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold uppercase text-[#0B3A78]">Nossas linhas de produtos</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">A solução perfeita para cada necessidade de limpeza, com formulações altamente concentradas.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {linhas.map((l) => (
            <div key={l.t} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img src={l.img} alt={l.t} className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5 text-center">
                <h3 className="text-lg font-extrabold uppercase text-[#0B3A78]">{l.t}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{l.d}</p>
                <a href={WA} target="_blank" rel="noreferrer" className="mt-4 text-sm font-bold uppercase text-[#0B3A78]">Saiba mais →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: B }} className="text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-5 py-8 text-center text-lg font-bold uppercase tracking-wide md:flex-row md:gap-6 md:text-xl">
          <span>🛡️ Linhas certificadas pela ANVISA</span><span className="hidden md:inline">•</span><span>Licenciadas pelos órgãos fiscais</span><span className="hidden md:inline">•</span><span>Fórmulas concentradas</span>
        </div>
      </section>

      <section id="empresa" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Quem somos</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase text-[#0B3A78]">Mais de 60 anos de experiência</h2>
          <p className="mt-4 text-slate-600">No segmento desde 1964, fornecemos soluções especializadas em produtos e matérias-primas para limpeza e higienização profissional. Sua parceira confiável para soluções inteligentes, com qualidade e inovação.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          {[["Desde 1964", "No segmento"], ["4 linhas", "Refrigeração, Automotiva, Institucional e Industrial"], ["ANVISA", "Linhas certificadas"], ["Concentrados", "Formulações altamente concentradas"]].map(([a, b]) => (
            <div key={a} className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200"><p className="text-2xl font-extrabold text-[#0B3A78]">{a}</p><p className="mt-1 text-sm text-slate-600">{b}</p></div>
          ))}
        </div>
      </section>

      <section style={{ background: B }} className="py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-xl font-extrabold uppercase text-white">Clientes</h2>
          <div className="mt-8 grid grid-cols-3 items-center gap-6 sm:grid-cols-5 lg:grid-cols-9">
            {clientes.map((c) => <img key={c} src={`/assets/cliente-${c}.webp`} alt={c} className="mx-auto max-h-14 w-auto object-contain" />)}
          </div>
        </div>
      </section>

      <footer id="contato" style={{ background: BD }} className="text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div><Logo light /><p className="mt-4 text-sm text-white/70">Soluções em produtos e matérias-primas para limpeza e higienização profissional, desde 1964.</p></div>
          <div className="text-sm leading-7"><h3 className="text-lg font-bold uppercase">Endereço</h3><p>R. Suzano, 1000 – Vila Monte Belo<br />Itaquaquecetuba – SP, 08577-520</p></div>
          <div className="text-sm leading-7"><h3 className="text-lg font-bold uppercase">Contato</h3>
            <p><a href="mailto:comercial@gattiquimica.com.br" className="hover:underline">comercial@gattiquimica.com.br</a></p>
            <p><a href="tel:+551146465800" className="hover:underline">(11) 4646-5800</a></p>
            <p><a href={WA} target="_blank" rel="noreferrer" className="hover:underline">(11) 98447-0736 (WhatsApp)</a></p>
          </div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">© Gatti Química · Protótipo de site para a Imersão IA para Empresários</p>
      </footer>
    </div>
  );
}
