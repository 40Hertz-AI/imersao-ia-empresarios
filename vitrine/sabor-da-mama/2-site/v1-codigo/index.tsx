import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const WA = "https://wa.me/5511944946653?text=" + encodeURIComponent("Olá! Vim pelo site da Sabor da Mama.");
const C = { cream: "#FBF5EA", terra: "#A8321F", terraDark: "#7E2416", mustard: "#D9A13B", olive: "#4F5A2E", ink: "#3A2A20" };

const produtos = [
  { nome: "Sal de Parrilla", img: "/assets/sal-parrilla.png", txt: "O equilíbrio ideal de temperos e sabor para realçar a carne." },
  { nome: "Ketchup", img: "/assets/ketchup.png", txt: "Sabor caseiro em cada gota, com um toque irresistível." },
  { nome: "Farofa com Alho", img: "/assets/farofa.png", txt: "Com Farofa Sabor da Mama, tudo fica mais gostoso." },
  { nome: "Molho de Pimenta Scorpion", img: "/assets/scorpion.png", txt: "Para quem gosta de um toque picante nas receitas." },
  { nome: "Coco Ralado", img: "/assets/coco.png", txt: "Ingredientes de qualidade para o seu dia a dia." },
];
const categorias = ["Temperos", "Molhos", "Churrasco", "Refogas", "Derivados", "Food Service", "Diversos"];

function Heart({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>;
}

function Index() {
  return (
    <div style={{ background: C.cream, color: C.ink, fontFamily: "'Lato', system-ui, sans-serif" }} className="min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`.serif{font-family:'Playfair Display',Georgia,serif}`}</style>

      <header className="sticky top-0 z-20 border-b border-[#e8dcc6] bg-[#FBF5EA]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#topo" className="rounded-md bg-black px-2 py-1"><img src="/assets/logo.png" alt="Sabor da Mama Alimentos" className="h-9 w-auto md:h-11" /></a>
          <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide md:flex">
            <a href="#produtos" className="hover:text-[#A8321F]">Produtos</a>
            <a href="#linhas" className="hover:text-[#A8321F]">Linhas</a>
            <a href="#depoimentos" className="hover:text-[#A8321F]">Clientes</a>
            <a href="#franquia" className="hover:text-[#A8321F]">Franquia</a>
            <a href="#contato" className="hover:text-[#A8321F]">Contato</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" style={{ background: C.terra }} className="rounded-md px-4 py-2 text-sm font-bold text-white hover:opacity-90">Seja um Lojista</a>
        </div>
      </header>

      <section id="topo" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: C.olive }}>Temperos · Molhos · Farofas</p>
          <h1 className="serif text-5xl leading-[1.05] md:text-6xl" style={{ color: C.terra }}>Feito com carinho <span className="italic">de uma mãe</span></h1>
          <p className="mt-5 max-w-md text-lg">Há mais de 16 anos, a Sabor da Mama leva molhos, temperos, refogas e derivados com sabor caseiro para a sua mesa.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produtos" style={{ background: C.mustard }} className="rounded-md px-6 py-3 font-bold text-[#3A2A20] shadow hover:brightness-95">Veja nosso catálogo</a>
            <a href={WA} target="_blank" rel="noreferrer" className="rounded-md border-2 px-6 py-3 font-bold" style={{ borderColor: C.terra, color: C.terra }}>Fale pelo WhatsApp</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -rotate-2 rounded-3xl" style={{ background: C.mustard, opacity: 0.25 }} />
          <img src="/assets/cozinha.png" alt="Cozinhando com Sabor da Mama" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
        </div>
      </section>

      <section id="produtos" className="bg-white/60 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="serif text-center text-4xl" style={{ color: C.terraDark }}>Nossos produtos</h2>
          <p className="mx-auto mt-3 max-w-xl text-center">Ingredientes de qualidade. Feito com carinho de uma mãe.</p>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">
            {produtos.map((p) => (
              <div key={p.nome} className="flex flex-col overflow-hidden rounded-2xl border border-[#eadfca] bg-white shadow-sm">
                <div className="aspect-square bg-[#f6eedf]"><img src={p.img} alt={p.nome} className="h-full w-full object-cover" /></div>
                <div className="flex flex-1 flex-col p-4 text-center">
                  <h3 className="serif text-lg" style={{ color: C.terraDark }}>{p.nome}</h3>
                  <p className="mt-1 text-sm text-[#6b5848]">{p.txt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="linhas" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="serif text-4xl" style={{ color: C.terraDark }}>Nosso catálogo</h2>
            <p className="mt-3">Do tempero do dia a dia ao churrasco de domingo, com linhas para casa e para o seu negócio.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {categorias.map((c) => <span key={c} className="rounded-full px-4 py-2 text-sm font-bold text-white" style={{ background: C.olive }}>{c}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/churrasco.png" alt="Linha Churrasco" className="aspect-square w-full rounded-2xl object-cover shadow" />
            <img src="/assets/derivados.png" alt="Linha Derivados" className="aspect-square w-full rounded-2xl object-cover shadow" />
          </div>
        </div>
      </section>

      <section id="depoimentos" style={{ background: C.terra }} className="py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="serif text-center text-4xl">Veja o que nossos clientes dizem</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { q: "Quando eu comprei não imaginava que era tão bom assim. Foi uma surpresa muito agradável. Virei fã e não troco por nada!", n: "Dona Marlene", p: "Comprou Sal de Parrilla" },
              { q: "Comprei e adorei! A tapioca é muito boa!", n: "Dona Lourdes", p: "Comprou Tapioca" },
            ].map((d) => (
              <figure key={d.n} className="rounded-2xl bg-white/10 p-7 ring-1 ring-white/20">
                <Heart className="h-7 w-7 text-[#F2C46B]" />
                <blockquote className="serif mt-3 text-xl italic leading-snug">“{d.q}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold uppercase tracking-wide text-[#F2C46B]">{d.n} · <span className="font-normal normal-case">{d.p}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="franquia" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-8 rounded-3xl border-2 border-[#e2d3b6] bg-white p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: C.olive }}>Cresça com a gente</p>
            <h2 className="serif mt-2 text-4xl" style={{ color: C.terra }}>Seja um Franqueado <span className="italic">Sabor da Mama</span></h2>
            <p className="mt-4">A Sabor da Mama está crescendo e estamos criando lojas em todo o Brasil. Seja um franqueado e vamos juntos compartilhar os melhores temperos.</p>
            <p className="mt-2">Tem um comércio? <strong>Seja um Lojista</strong> e leve nossos produtos para os seus clientes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" style={{ background: C.terra }} className="rounded-md px-6 py-3 font-bold text-white">Quero ser franqueado</a>
              <a href="mailto:contato@sabordamama.com.br?subject=Quero%20ser%20lojista" className="rounded-md border-2 px-6 py-3 font-bold" style={{ borderColor: C.olive, color: C.olive }}>Quero ser lojista</a>
            </div>
          </div>
          <ul className="space-y-3 text-lg">
            {["Mais de 16 anos de tradição", "Ingredientes de qualidade", "Linha completa: temperos a derivados", "Atendimento Food Service"].map((t) => (
              <li key={t} className="flex items-center gap-3"><Heart className="h-5 w-5 shrink-0 text-[#A8321F]" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contato" style={{ background: C.olive }} className="text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <img src="/assets/logo.png" alt="Sabor da Mama" className="h-12 w-auto rounded bg-black px-2 py-1" />
            <p className="mt-4 text-sm text-white/80">Traga amor para a sua comida. Feito com amor, servido com sabor.</p>
          </div>
          <div className="text-sm leading-7">
            <h3 className="serif text-xl">Venha nos visitar</h3>
            <p>R. Martini, 375 – Vila Jau<br />Poá / SP</p>
          </div>
          <div className="text-sm leading-7">
            <h3 className="serif text-xl">Contato</h3>
            <p><a href={WA} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">WhatsApp: +55 (11) 94494-6653</a></p>
            <p><a href="mailto:contato@sabordamama.com.br" className="hover:underline">contato@sabordamama.com.br</a></p>
            <p><a href="https://sabordamama.com.br/" className="hover:underline">sabordamama.com.br</a></p>
          </div>
        </div>
        <p className="border-t border-white/15 py-4 text-center text-xs text-white/70">© Sabor da Mama Alimentos · Protótipo de site para a Imersão IA para Empresários</p>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.2 1.2z"/></svg>
      </a>
    </div>
  );
}
