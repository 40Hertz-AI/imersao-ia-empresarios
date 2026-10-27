import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const WA = "https://wa.me/5511971448824?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento de análise.");
const N = "#0E2A47", T = "#0F7C7A";

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;
}
const ic = {
  flask: "M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-2.5L14 9V3M7 15h10",
  micro: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 9h.01M15 8h.01M10 14h.01M15 14h.01M12 11h.01",
  scope: "M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3h-3v3",
};

const servicos = [
  { t: "Físico-Químico", s: "Controle de qualidade", d: "Ensaios para controle de qualidade dos alimentos.", i: ic.flask },
  { t: "Microbiologia", s: "Controle sanitário", d: "Ensaios para controle sanitário dos alimentos.", i: ic.micro },
  { t: "Microscopia", s: "Composição de alimentos", d: "Ensaios para identificação da composição de alimentos.", i: ic.scope },
];

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#1d2b3a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`.serif{font-family:'Libre Baskerville',Georgia,serif}`}</style>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#topo" className="leading-none" style={{ color: N }}>
            <span className="serif block text-3xl font-bold tracking-wide">CETAL</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: T }}>Centro Tecnológico de Análise de Alimentos</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#quem" className="hover:text-[#0F7C7A]">Quem Somos</a>
            <a href="#analises" className="hover:text-[#0F7C7A]">Análises</a>
            <a href="#qualidade" className="hover:text-[#0F7C7A]">Qualidade</a>
            <a href="#ebooks" className="hover:text-[#0F7C7A]">E-books</a>
            <a href="#contato" className="hover:text-[#0F7C7A]">Contato</a>
          </nav>
          <a href="https://cetal.com.br/site/" target="_blank" rel="noreferrer" style={{ background: T }} className="rounded-md px-4 py-2 text-sm font-semibold text-white">Lab Online</a>
        </div>
      </header>

      <section id="topo" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="serif text-4xl leading-tight md:text-5xl" style={{ color: N }}>Análises de alimentos com precisão e credibilidade</h1>
            <p className="mt-5 max-w-md text-lg text-slate-600">Desde 2002, análises laboratoriais em microbiologia, microscopia e físico-químico para alimentos, com pontualidade e precisão.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" style={{ background: T }} className="rounded-md px-6 py-3 font-semibold text-white shadow hover:brightness-110">Solicitar orçamento</a>
              <a href="#analises" className="rounded-md border px-6 py-3 font-semibold" style={{ borderColor: N, color: N }}>Conheça as análises</a>
            </div>
            <p className="mt-6 text-sm text-slate-500">📍 Mogi das Cruzes / SP</p>
          </div>
          <img src="/assets/hero.png" alt="Laboratório de análise de alimentos" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
        </div>
      </section>

      <section id="analises" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="serif text-center text-3xl" style={{ color: N }}>Análises</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Análises que ajudam a garantir a qualidade, segurança e credibilidade para a sua empresa.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicos.map((s) => (
              <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ background: T }}><Icon d={s.i} /></div>
                <h3 className="serif mt-5 text-xl" style={{ color: N }}>{s.t}</h3>
                <p className="text-sm font-semibold" style={{ color: T }}>{s.s}</p>
                <p className="mt-3 text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: N }} className="text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[["Desde 2002", "Prestação de serviços em análises"], ["Instrumentos modernos", "Equipamentos analíticos de ponta"], ["Corpo técnico", "Altamente qualificado"], ["Metodologias", "Reconhecidas nacional e internacionalmente"]].map(([a, b]) => (
            <div key={a} className="border-l-2 pl-4" style={{ borderColor: "#3FB6B2" }}>
              <p className="serif text-xl">{a}</p><p className="mt-1 text-sm text-white/70">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quem" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <img src="/assets/equipe.png" alt="Equipe CETAL" className="w-full rounded-2xl bg-black object-cover" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: T }}>Quem somos</p>
          <h2 className="serif mt-2 text-3xl" style={{ color: N }}>Metodologias reconhecidas nacional e internacionalmente</h2>
          <p className="mt-4 text-slate-600">Fundado em 2002, o CETAL é um laboratório de prestação de serviços em análises físico-químicas, microbiológicas e microscopia, equipado com instrumentos analíticos modernos e seguindo as tendências e o controle de qualidade exigidos pelo competitivo mercado internacional.</p>
          <ul id="qualidade" className="mt-5 space-y-2 text-slate-700">
            {["Metodologias nacional e internacionalmente reconhecidas", "Instalações construídas dentro das normas exigidas por órgãos oficiais competentes", "Corpo técnico altamente qualificado", "Atendimento com pontualidade e precisão"].map((t) => (
              <li key={t} className="flex gap-3"><span style={{ color: T }}>✓</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ebooks" className="bg-[#E9F4F3] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="serif text-3xl" style={{ color: N }}>E-books: acesse os melhores conteúdos</h2>
            <p className="mt-3 text-slate-600">Uma seleção de e-books exclusivos para auxiliar no dia a dia da sua empresa e entender melhor o universo de acreditações e análises laboratoriais.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="https://cetal.com.br/site/" target="_blank" rel="noreferrer" style={{ background: N }} className="rounded-md px-6 py-3 font-semibold text-white">Acessar e-books</a>
            <a href={WA} target="_blank" rel="noreferrer" className="rounded-md border px-6 py-3 font-semibold" style={{ borderColor: T, color: T }}>Tirar dúvidas</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="serif text-3xl" style={{ color: N }}>Deseja solicitar um orçamento ou esclarecer suas dúvidas?</h2>
        <p className="mt-3 text-slate-600">Fale conosco agora mesmo. Atendimento de segunda a sexta, das 8h às 17h48.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={WA} target="_blank" rel="noreferrer" className="rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white">WhatsApp (11) 97144-8824</a>
          <a href="tel:+551146992001" style={{ background: T }} className="rounded-md px-6 py-3 font-semibold text-white">Ligar (11) 4699-2001</a>
        </div>
      </section>

      <footer id="contato" style={{ background: N }} className="text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <img src="/assets/logo.png" alt="CETAL" className="h-12 w-auto" />
            <p className="mt-4 text-sm text-white/70">Centro Tecnológico de Análise de Alimentos</p>
          </div>
          <div className="text-sm leading-7 text-white/90">
            <h3 className="serif text-lg text-white">Endereço</h3>
            <p>Rua Tenente Onofre Rodrigues de Aguiar, 740<br />Vila Industrial · Mogi das Cruzes / SP<br />CEP 08770-041</p>
          </div>
          <div className="text-sm leading-7 text-white/90">
            <h3 className="serif text-lg text-white">Contato</h3>
            <p><a href="tel:+551146992001" className="hover:underline">+55 11 4699-2001</a></p>
            <p><a href={WA} target="_blank" rel="noreferrer" className="hover:underline">+55 11 97144-8824 (WhatsApp)</a></p>
            <p>Segunda a sexta, das 8h às 17h48</p>
          </div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">© CETAL · Protótipo de site para a Imersão IA para Empresários</p>
      </footer>
    </div>
  );
}
