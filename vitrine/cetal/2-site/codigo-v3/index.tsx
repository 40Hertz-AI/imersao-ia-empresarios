import { createFileRoute } from "@tanstack/react-router";

const TITLE = "CETAL — Centro Tecnológico de Análise de Alimentos | Mogi das Cruzes/SP";
const DESC = "Análises laboratoriais em microbiologia, microscopia e físico-químico para alimentos. Laboratório fundado em 2002 em Mogi das Cruzes/SP.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESC }] }),
  component: Index,
});

const WA = "https://wa.me/5511971448824?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento de análise.");
const SITE = "https://cetal.com.br/site/";

/*
  Sistema (v3):
  - espaço em passos de 4px: 4·8·12·16·20·24·32·40·48·64·80 · trilhos 48/1392 (moldura) e 88/1352 (conteúdo) em 1440
  - tipo: 52 H1 · 30 H2/telefone · 24 card · 22 faixa/capa · 20 lead/subtítulo · 18 corpo · 16 apoio · 14 miúdo
  - elevação: um tom (navy) em dois níveis; raios 12 contêiner · 8 botão · 4 capa/foto
*/
const css = `
:root{
  color-scheme:light;
  --navy:#0B2A5E; --ink:#14264F; --body:#3A4A6B; --band:#002C62; --teal:#00626E; --teal-d:#004E58;
  --mist:#ECF2F5; --line:#D8DFE7; --cover:#071A3A;
  --e1:0 1px 2px rgba(11,42,94,.06),0 10px 28px -18px rgba(11,42,94,.28);
  --e2:0 1px 2px rgba(11,42,94,.14),0 16px 30px -16px rgba(11,42,94,.5);
  --e2-hover:0 2px 4px rgba(11,42,94,.16),0 24px 38px -18px rgba(11,42,94,.58);
  --ease-out:cubic-bezier(.23,1,.32,1);
}
html{scroll-behavior:smooth}
.cetal{font-family:'Figtree',system-ui,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-kerning:normal}
.cetal ::selection{background:var(--teal);color:#fff}
.cetal [id]{scroll-margin-top:16px}
.cetal a,.cetal summary{-webkit-tap-highlight-color:transparent}
.serif{font-family:'Libre Caslon Text',Georgia,serif}
.cetal h2,.cetal h3,.cetal figcaption{text-wrap:balance} .cetal p,.cetal li{text-wrap:pretty}
.cetal h1{letter-spacing:-.012em} .cetal h2{letter-spacing:-.006em}
.nums{font-variant-numeric:lining-nums}
.c-navy{color:var(--navy)} .c-ink{color:var(--ink)} .c-body{color:var(--body)}
.bg-band{background:var(--band)} .bg-mist{background:var(--mist)} .bg-teal{background:var(--teal)}
.rule{display:block;width:56px;height:3px;background:var(--teal);border-radius:2px}
.stroke-2 *{vector-effect:non-scaling-stroke;stroke-width:2px} .stroke-25 *{vector-effect:non-scaling-stroke;stroke-width:2.25px}
.btn{display:inline-flex;align-items:center;background:var(--teal);color:#fff;border-radius:8px;touch-action:manipulation;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 2px rgba(11,42,94,.16),0 6px 14px -8px rgba(0,78,88,.38);
  transition:background-color .2s ease,box-shadow .2s ease,transform .14s var(--ease-out)}
.btn:active{transform:scale(.97)}
.btn .nudge{transition:transform .2s var(--ease-out)}
.nav-a{position:relative;transition:color .2s ease}
.nav-a::after{content:"";position:absolute;left:0;right:0;bottom:1px;height:2px;border-radius:1px;background:var(--teal);transform:scaleX(0);transform-origin:right;transition:transform .26s var(--ease-out)}
.ulink{text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:5px;text-decoration-color:transparent;transition:text-decoration-color .2s ease,color .2s ease}
.cetal a:focus-visible,.cetal summary:focus-visible{outline:2px solid var(--teal);outline-offset:3px;border-radius:4px}
.on-dark a:focus-visible{outline-color:#fff}
.hero-img{-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 26%,#000 86%,transparent);mask-image:linear-gradient(180deg,transparent 0,#000 26%,#000 86%,transparent)}
@media (min-width:1280px){.hero-img{
  -webkit-mask-image:linear-gradient(90deg,transparent 0,transparent 16%,rgba(0,0,0,.5) 27%,#000 41%),linear-gradient(180deg,#000 84%,transparent);
  -webkit-mask-composite:source-in;
  mask-image:linear-gradient(90deg,transparent 0,transparent 16%,rgba(0,0,0,.5) 27%,#000 41%),linear-gradient(180deg,#000 84%,transparent);
  mask-composite:intersect}}
.card,.frame{background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:var(--e1)}
.photo{position:relative;overflow:hidden;border-radius:4px}
.photo::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(11,42,94,.08);pointer-events:none}
.cover{box-shadow:var(--e2);transition:transform .28s var(--ease-out),box-shadow .28s ease}
.cover .zoom{transition:transform .5s var(--ease-out)}
.cover:active{transform:scale(.985)}
.covers{scrollbar-width:thin;scrollbar-color:var(--teal) transparent}
.mnav summary{list-style:none;cursor:pointer;transition:background-color .15s ease,transform .14s var(--ease-out)} .mnav summary::-webkit-details-marker{display:none}
.mnav summary:active{transform:scale(.96)}
.mnav[open] .i-open{display:none} .mnav:not([open]) .i-close{display:none}
.mnav[open] > nav{animation:menu-in .2s var(--ease-out)}
@keyframes menu-in{from{opacity:0;transform:translateY(-6px)}}
.rise{animation:rise .6s var(--ease-out) both}
.fade{animation:fade .8s ease-out both}
@keyframes rise{from{opacity:0;transform:translateY(10px)}}
@keyframes fade{from{opacity:0}}
@media (hover:hover) and (pointer:fine){
  .btn:hover{background:var(--teal-d);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 2px rgba(11,42,94,.2),0 10px 20px -10px rgba(0,78,88,.5)}
  .btn:hover .nudge{transform:translateY(1px)}
  .nav-a:hover{color:var(--teal)} .nav-a:hover::after{transform:scaleX(1);transform-origin:left}
  a:hover .ulink{text-decoration-color:currentColor}
  .mnav summary:hover{background:var(--mist)}
  .cover:hover{transform:translateY(-3px);box-shadow:var(--e2-hover)}
  .cover:hover .zoom{transform:scale(1.04)}
}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.skip{position:absolute;left:12px;top:-60px;z-index:50;background:var(--teal);color:#fff;padding:10px 16px;border-radius:6px;transition:top .15s}
.skip:focus{top:12px}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .btn,.cover,.mnav summary{transition-property:background-color,box-shadow}
  .nav-a::after,.btn .nudge,.cover .zoom{transition:none}
  .btn:active,.cover:active,.cover:hover,.cover:hover .zoom,.btn:hover .nudge,.mnav summary:active{transform:none}
  .rise,.mnav[open] > nav{animation:fade .3s ease-out both}
}
`;

type P = { className?: string };
const sv = (cls = "h-6 w-6", sw = 1.6, viewBox = "0 0 24 24") => ({ viewBox, fill: "none", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: cls, "aria-hidden": true });

const IMonitor = ({ className }: P) => <svg {...sv(className, 1.5)}><rect x="2.5" y="3.5" width="19" height="13" rx="1.5" /><path d="M8 21h8M12 16.5V21" /></svg>;
const IClipboard = ({ className }: P) => <svg {...sv(className, 1.5)}><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M12 11h4M12 16h4M8 11h.01M8 16h.01" /></svg>;
const IPin = ({ className }: P) => <svg {...sv(className, 1.1, "3.4 1.4 17.2 21.2")}><path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const IPinSolid = ({ className }: P) => <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M12 1.5a8.5 8.5 0 0 0-8.5 8.5c0 5.4 5.7 10.8 7.7 12.5a1.3 1.3 0 0 0 1.6 0c2-1.7 7.7-7.1 7.7-12.5A8.5 8.5 0 0 0 12 1.5Zm0 5.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>;
const IFlask = ({ className }: P) => <svg {...sv(className, 1.3)}><path d="M9 2.5h6M10 2.5v6.2L4.6 18.6A2 2 0 0 0 6.4 21.5h11.2a2 2 0 0 0 1.8-2.9L14 8.7V2.5" /><path d="M6.6 15c2-.9 3.7-.9 5.4 0s3.4.9 5.4 0" /><circle cx="10.5" cy="18" r=".6" /><circle cx="14" cy="17.4" r=".9" /></svg>;
const IBacteria = ({ className }: P) => <svg {...sv(className, 1.3)}><rect x="5.2" y="7.6" width="13.6" height="8.8" rx="4.4" transform="rotate(-35 12 12)" /><path d="M9.6 13.6c.9.7 2.4.6 3.4-.4M10 10.2h.01M13.4 9.6h.01M14.6 12.4h.01" /><path d="M4.4 9.8 2.6 9.2M5.6 6.6 4.4 5M8.6 4.4 8.2 2.6M12 3.6l.6-1.6M18.4 14.4l1.8.6M17.6 17.4l1.2 1.6M14.8 19.6l.4 1.8M11.4 20.4 10.8 22M19.6 11.2l1.8-.4M4.4 12.8l-1.8.4" /></svg>;
const IMicroscope = ({ className }: P) => <svg {...sv(className, 1.3)}><path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2ZM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></svg>;
const ICalendar = ({ className }: P) => <svg {...sv(className, 1.1, "1.5 1.5 21 21")}><rect x="2.5" y="4" width="19" height="17" rx="1.8" /><path d="M2.5 9h19M7.5 2v4M16.5 2v4" /><rect x="5.5" y="11.5" width="3" height="2.6" rx=".4" /><rect x="10.5" y="11.5" width="3" height="2.6" rx=".4" /><rect x="15.5" y="11.5" width="3" height="2.6" rx=".4" /><rect x="5.5" y="16" width="3" height="2.6" rx=".4" /><rect x="10.5" y="16" width="3" height="2.6" rx=".4" /><rect x="15.5" y="16" width="3" height="2.6" rx=".4" /></svg>;
const IUsers = ({ className }: P) => <svg {...sv(className, 1.1, "0.5 1.5 23 23")}><circle cx="12" cy="7.5" r="3.6" /><path d="M5 20.5v-1.2A5 5 0 0 1 10 14.3h4a5 5 0 0 1 5 5v1.2Z" /><path d="M7.2 11.4A3.1 3.1 0 1 1 7.6 5.3M16.8 11.4a3.1 3.1 0 1 0-.4-6.1M3.6 13.6A4.2 4.2 0 0 0 1 17.5v1.6h2.6M20.4 13.6a4.2 4.2 0 0 1 2.6 3.9v1.6h-2.6" /></svg>;
const IBeaker = ({ className }: P) => <svg {...sv(className, 1.1, "1.5 1.5 21 21")}><path d="M9 2.5h6M10 2.5v6.2L4.6 18.6A2 2 0 0 0 6.4 21.5h11.2a2 2 0 0 0 1.8-2.9L14 8.7V2.5M6.8 15h10.4" /></svg>;
const IDocCheck = ({ className }: P) => <svg {...sv(className, 1.1, "1.5 1.5 21 21")}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z" /><path d="M14 2v4.5a1.5 1.5 0 0 0 1.5 1.5H20M8.5 14.5l2.4 2.4 4.6-4.8" /></svg>;
const ICheck = ({ className }: P) => <svg {...sv(className, 2)}><path d="M20 6 9 17l-5-5" /></svg>;
const IDownload = ({ className }: P) => <svg {...sv(className, 2)}><path d="M12 3v12M7 10l5 5 5-5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" /></svg>;
const IPhone = ({ className }: P) => <svg {...sv(className, 1.1, "1.4 1.4 21.2 21.2")}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>;
const IChat = ({ className }: P) => <svg {...sv(className, 2)}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>;
const IClock = ({ className }: P) => <svg {...sv(className, 2)}><circle cx="12" cy="12" r="9.5" /><path d="M12 7v5l3 2" /></svg>;
const IMenu = ({ className }: P) => <svg {...sv(className, 1.8)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
const IClose = ({ className }: P) => <svg {...sv(className, 1.8)}><path d="M6 6l12 12M18 6 6 18" /></svg>;

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const NewTab = () => <span className="sr-only"> (abre em nova aba)</span>;
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rua Tenente Onofre Rodrigues de Aguiar, 740, Mogi das Cruzes - SP, 08770-041");
type L = { t: string; h: string; ext?: boolean };
const nav: L[] = [
  { t: "Quem Somos", h: "#quem-somos" },
  { t: "Análises", h: "#analises" },
  { t: "Qualidade", h: "#qualidade" },
  { t: "Legislação", h: SITE, ext: true },
  { t: "Escopos", h: SITE, ext: true },
  { t: "Blog", h: SITE, ext: true },
];
const navMobile: L[] = [
  { t: "Home", h: "#topo" },
  ...nav.slice(0, 5),
  { t: "Compliance", h: SITE, ext: true },
  { t: "Contato", h: "#contato" },
  { t: "Blog", h: SITE, ext: true },
];

const servicos = [
  { t: "Físico-Químico", s: "controle de qualidade", d: "Ensaios para controle de qualidade dos alimentos.", I: IFlask },
  { t: "Microbiologia", s: "controle sanitário", d: "Ensaios para controle sanitário dos alimentos.", I: IBacteria },
  { t: "Microscopia", s: "composição de alimentos", d: "Ensaios para identificação da composição de alimentos.", I: IMicroscope },
];

const pilares = [
  { I: IUsers, t: "Corpo técnico altamente qualificado", d: "Profissionais qualificados para atender com pontualidade." },
  { I: IBeaker, t: "Instrumentos analíticos modernos", d: "Tecnologia de ponta para análises com precisão." },
  { I: IDocCheck, t: "Metodologias reconhecidas", d: "Seguindo as tendências do mercado internacional." },
];

/* Só existem duas artes de capa: a terceira usa outro recorte da primeira. */
const ebooks = [
  { t: "E-book CETAL", s: "Conteúdo exclusivo para o dia a dia da sua empresa", img: "/assets/ebook-1.webp", crop: "" },
  { t: "Acreditações", s: "Entenda melhor o universo das acreditações", img: "/assets/ebook-2.webp", crop: "" },
  { t: "Análises laboratoriais", s: "Entenda melhor as análises laboratoriais", img: "/assets/ebook-1.webp", crop: "origin-bottom-left scale-[1.75] brightness-[1.3] saturate-[.8]" },
];

/* Logo original + descritor sob o nome (o ícone ocupa 0–28% da largura; o nome, 33,6–100%). */
function Lockup({ white = false }: { white?: boolean }) {
  return (
    <>
      <img src={white ? "/assets/cetal-logo-white.svg" : "/assets/cetal-logo.svg"} alt="CETAL" width={1572} height={564} className="block h-auto w-full" />
      <span aria-hidden="true" className={`serif -mt-[5.2%] block whitespace-nowrap pl-[33.6%] text-center uppercase leading-[1.24] tracking-[0.035em] ${white ? "" : "c-navy"}`} style={{ fontSize: "4.1cqw" }}>
        Centro Tecnológico de<br />Análise de Alimentos
      </span>
    </>
  );
}


function Index() {
  const year = new Date().getFullYear();
  return (
    <div className="cetal min-h-screen overflow-x-clip bg-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Figtree:wght@400;500&display=swap" rel="stylesheet" />
      <style>{css}</style>
      <a href="#conteudo" className="skip">Pular para o conteúdo</a>

      {/* HEADER — desktop idêntico ao mockup aprovado */}
      <header id="topo" className="relative z-30 bg-white">
        <div className="mx-auto flex h-[112px] max-w-[1344px] items-center justify-between px-5 min-[1180px]:h-[162px] min-[1180px]:items-start min-[1180px]:px-6 min-[1392px]:px-0">
          <a href="#topo" className="block w-[204px] shrink-0 [container-type:inline-size] min-[1180px]:mt-[24px] min-[1180px]:w-[300px]" aria-label="CETAL — Centro Tecnológico de Análise de Alimentos, início">
            <Lockup />
          </a>
          <nav aria-label="Principal" className="hidden min-[1180px]:mt-[52px] min-[1180px]:flex min-[1180px]:items-center">
            <ul className="serif c-navy flex items-center gap-[30px] text-[17.5px] min-[1400px]:gap-[47px]">
              {nav.map((n) => (
                <li key={n.t}><a href={n.h} {...(n.ext ? ext : {})} className="nav-a -my-2 block py-2">{n.t}{n.ext && <NewTab />}</a></li>
              ))}
            </ul>
            <a href={SITE} {...ext} className="btn ml-[48px] h-[59px] gap-[13px] px-[19px] text-[20px] font-medium">
              <IMonitor className="h-[30px] w-[30px]" /> Lab Online<NewTab />
            </a>
          </nav>
          <details className="mnav min-[1180px]:hidden">
            <summary aria-label="Menu" className="c-navy flex h-12 w-12 items-center justify-center rounded-lg border border-[color:var(--line)]">
              <IMenu className="i-open h-6 w-6" /><IClose className="i-close h-6 w-6" />
            </summary>
            <nav aria-label="Menu" className="absolute inset-x-0 top-full border-y border-[color:var(--line)] bg-white px-5 pb-6 pt-1 shadow-[0_18px_30px_-18px_rgba(11,42,94,.35)]">
              <ul className="serif c-navy mx-auto max-w-[1344px] text-[18px]">
                {navMobile.map((n) => (
                  <li key={n.t} className="border-b border-[color:var(--line)]"><a href={n.h} {...(n.ext ? ext : {})} className="block py-3">{n.t}{n.ext && <NewTab />}</a></li>
                ))}
              </ul>
              <a href={SITE} {...ext} className="btn mt-5 h-[52px] w-full justify-center gap-3 text-[18px] font-medium"><IMonitor className="h-6 w-6" /> Lab Online<NewTab /></a>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section aria-labelledby="hero-h" className="relative xl:h-[661px]">
          <div className="relative mx-auto max-w-[1344px] px-5 pt-8 md:px-10 xl:px-16 min-[1392px]:px-10 xl:z-10 xl:pt-16">
            <h1 id="hero-h" className="rise serif c-navy max-w-[600px] text-[34px] font-bold leading-[1.2] md:text-[44px] xl:text-[52px] xl:leading-[66px]">
              Análises de alimentos com precisão e credibilidade
            </h1>
            <span className="rise rule mt-4 xl:mt-5" style={{ animationDelay: "40ms" }} />
            <p className="rise serif c-body mt-6 max-w-[430px] text-[18px] leading-[30px] xl:text-[20px] xl:leading-[32px]" style={{ animationDelay: "80ms" }}>
              Desde 2002, análises laboratoriais em microbiologia, microscopia e físico-químico para alimentos, com pontualidade e precisão.
            </p>
            <a href={WA} {...ext} className="rise btn mt-8 h-14 gap-3 px-6 text-[18px] font-medium xl:h-[59px] xl:gap-[13px] xl:px-7 xl:text-[20px]" style={{ animationDelay: "120ms" }}>
              <IClipboard className="h-[26px] w-[26px]" /> Solicitar orçamento<span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
            </a>
            <p className="rise serif c-navy mt-8 flex items-center gap-3 text-[18px] xl:text-[20px]" style={{ animationDelay: "160ms" }}>
              <IPinSolid className="h-[21px] w-[18px]" /> Mogi das Cruzes/SP
            </p>
          </div>
          <div className="relative mt-6 xl:pointer-events-none xl:absolute xl:inset-y-0 xl:right-0 xl:mt-0 xl:w-[min(1169px,81.2vw)]">
            <img src="/assets/hero.webp" alt="Analista de laboratório pipetando amostra de alimento" width={1400} height={792} fetchPriority="high" className="fade hero-img block aspect-[16/11] w-full object-cover object-[64%_50%] md:aspect-[16/8] xl:aspect-auto xl:h-full" />
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="analises" aria-labelledby="analises-h" className="relative z-10 mx-auto -mt-10 max-w-[1344px] px-5 md:px-10 xl:-mt-14 xl:px-6 min-[1392px]:px-0">
          <h2 id="analises-h" className="sr-only">Análises laboratoriais</h2>
          <ul className="grid gap-4 lg:grid-cols-3 xl:gap-3">
            {servicos.map(({ t, s, d, I }) => (
              <li key={t} className="card p-6 xl:p-10">
                <div className="flex items-start gap-4 xl:gap-6">
                  <span className="bg-teal flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white xl:h-[88px] xl:w-[88px]">
                    <I className="stroke-25 h-[30px] w-[30px] xl:h-[50px] xl:w-[50px]" />
                  </span>
                  <div className="min-w-0 pt-1 xl:pt-2">
                    <h3 className="serif c-navy text-[22px] font-bold leading-[1.2] xl:text-[24px]">{t}</h3>
                    <p className="serif c-navy mt-1 text-[18px] leading-[1.35] xl:text-[20px]">{s}</p>
                    <span className="rule mt-4 !w-12" />
                  </div>
                </div>
                <p className="c-body mt-5 text-[16px] leading-[26px] xl:mt-6 xl:text-[18px] xl:leading-[28px]">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAIXA */}
        <section id="qualidade" aria-labelledby="qualidade-h" className="bg-band on-dark mt-12 text-white xl:mt-16">
          <h2 id="qualidade-h" className="sr-only">Qualidade CETAL</h2>
          <ul className="mx-auto grid max-w-[1344px] px-5 py-8 sm:grid-cols-2 md:px-10 xl:px-16 min-[1392px]:px-10 xl:grid-cols-4 xl:py-12">
            <li className="py-6 xl:py-0 xl:pr-8">
              <div className="flex items-start gap-5 xl:min-h-[84px]">
                <ICalendar className="stroke-2 h-[52px] w-[52px] shrink-0 xl:h-[60px] xl:w-[60px]" />
                <h3 className="serif font-bold leading-none"><span className="block text-[22px]">Desde</span><span className="nums mt-1.5 block text-[34px] xl:mt-2 xl:text-[38px]">2002</span></h3>
              </div>
              <p className="mt-4 text-[16px] leading-[26px] text-white/80">Prestação de serviços em análises laboratoriais de alimentos.</p>
            </li>
            {pilares.map(({ I, t, d }) => (
              <li key={t} className="border-t border-white/20 py-6 sm:border-t-0 xl:border-l xl:border-white/25 xl:py-0 xl:pl-8 xl:pr-6">
                <div className="flex items-start gap-5 xl:min-h-[84px]">
                  <I className="stroke-2 h-[52px] w-[52px] shrink-0 xl:h-[60px] xl:w-[60px]" />
                  <h3 className="serif max-w-[180px] text-[20px] font-bold leading-[26px] xl:-mt-0.5 xl:leading-[28px] min-[1392px]:text-[22px]">{t}</h3>
                </div>
                <p className="mt-4 text-[16px] leading-[26px] text-white/80">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* QUEM SOMOS / METODOLOGIAS */}
        <section id="quem-somos" aria-labelledby="meto-h" className="mx-auto grid max-w-[1344px] items-center gap-10 px-5 py-16 md:px-10 xl:px-16 min-[1392px]:px-10 xl:grid-cols-[1fr_576px] xl:gap-16 xl:py-20">
          <div>
            <h2 id="meto-h" className="serif c-navy text-[26px] font-bold leading-[1.3] xl:text-[30px] xl:leading-[40px]">
              Metodologias reconhecidas<br className="hidden sm:block" /> nacional e internacionalmente
            </h2>
            <span className="rule mt-4" />
            <p className="c-body mt-6 max-w-[600px] text-[17px] leading-[28px] xl:text-[18px] xl:leading-[30px]">
              Fundado em 2002, o CETAL é um laboratório de prestação de serviços em análises físico-químicas, microbiológicas e microscopia.
            </p>
            <ul className="c-ink mt-6 space-y-3 text-[17px] xl:text-[18px]">
              {["Instrumentos analíticos modernos", "Controle de qualidade exigido pelo mercado internacional", "Corpo técnico altamente qualificado"].map((t) => (
                <li key={t} className="flex items-start gap-4 leading-[28px]"><ICheck className="c-navy mt-[5px] h-[18px] w-[18px] shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <figure className="frame p-3 xl:p-4">
            <div className="photo"><img src="/assets/laboratorio.webp" alt="Laboratório com bancadas e instrumentos analíticos" width={1000} height={566} className="block aspect-[547/256] w-full object-cover object-[50%_60%]" /></div>
            <figcaption className="c-body px-2 pb-1 pt-4 text-center text-[16px] leading-[24px]">Instalações dentro das normas dos órgãos oficiais</figcaption>
          </figure>
        </section>

        {/* E-BOOKS */}
        <section id="ebooks" aria-labelledby="ebooks-h" className="bg-mist">
          <div className="mx-auto grid max-w-[1344px] items-center gap-10 px-5 py-16 md:px-10 xl:px-16 min-[1392px]:px-10 xl:grid-cols-[1fr_720px] xl:gap-16 xl:py-20">
            <div>
              <h2 id="ebooks-h" className="serif c-navy text-[26px] font-bold leading-[1.3] xl:text-[30px] xl:leading-[40px]">Conteúdos sobre acreditações</h2>
              <span className="rule mt-4" />
              <p className="c-body mt-6 max-w-[470px] text-[17px] leading-[28px] xl:text-[18px] xl:leading-[30px]">
                Uma seleção de e-books exclusivos para auxiliar o dia a dia da sua empresa a entender melhor o universo de acreditações e análises laboratoriais.
              </p>
              <a href={SITE} {...ext} className="btn mt-8 h-[52px] gap-3 px-6 text-[18px] font-medium">
                <IDownload className="nudge h-[22px] w-[22px]" /> Baixar e-books<NewTab />
              </a>
            </div>
            <ul className="covers -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 md:-mx-10 md:scroll-px-10 md:px-10 xl:mx-0 xl:grid xl:grid-cols-3 xl:gap-8 xl:overflow-visible xl:p-0">
              {ebooks.map((e) => (
                <li key={e.t} className="w-[60%] shrink-0 snap-start sm:w-[34%] md:w-[28%] xl:w-auto">
                  <a href={SITE} {...ext} className="cover relative block aspect-[222/289] overflow-hidden rounded-[4px] bg-[color:var(--cover)] text-white" aria-label={`${e.t}: acessar e-books (abre em nova aba)`}>
                    <span className="zoom absolute inset-0 overflow-hidden"><img src={e.img} alt="" width={753} height={1000} className={`h-full w-full object-cover ${e.crop}`} /></span>
                    <span className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent via-55% to-black/55" />
                    <span className="relative flex h-full flex-col p-5">
                      <span className="serif min-h-[56px] text-[22px] leading-[28px]">{e.t}</span>
                      <span className="mt-2 max-w-[170px] text-[14px] leading-[20px] text-white/85">{e.s}</span>
                      <span className="serif mt-auto text-[14px] tracking-[0.1em]">CETAL</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contato" className="bg-band on-dark text-white">
        <div className="mx-auto grid max-w-[1344px] items-center gap-8 px-5 py-12 md:px-10 xl:grid-cols-3 xl:gap-3 xl:px-6 xl:py-10 min-[1392px]:px-0 xl:[&>*]:ml-10">
          <div className="w-[232px] [container-type:inline-size]">
            <Lockup white />
          </div>
          <address className="text-[16px] not-italic leading-[26px] text-white/85">
            <a href={MAPS} {...ext} className="flex items-start gap-5">
              <IPin className="mt-0.5 h-[38px] w-[28px] shrink-0 text-white" />
              <span className="ulink"><span className="block text-balance">Rua Tenente Onofre Rodrigues de Aguiar, 740</span><span className="block">Vila Industrial, Mogi das Cruzes/SP</span><span className="block">CEP 08770-041</span><span className="sr-only"> (ver no mapa, abre em nova aba)</span></span>
            </a>
          </address>
          <a href="tel:+551146992001" className="flex items-center gap-5">
            <IPhone className="h-[42px] w-[42px] shrink-0" />
            <span className="ulink serif nums text-[28px] leading-none xl:text-[30px]">(11) 4699-2001</span>
          </a>
        </div>
        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1344px] flex-col gap-1 px-5 py-4 text-[14px] text-white/75 md:px-10 xl:px-16 min-[1392px]:px-10 xl:flex-row xl:items-center xl:gap-8 xl:py-5">
            <a href={WA} {...ext} className="inline-flex min-h-[44px] items-center gap-2 font-medium text-white xl:min-h-[24px]"><IChat className="h-4 w-4" /> <span className="ulink">WhatsApp (11) 97144-8824</span><NewTab /></a>
            <span className="inline-flex min-h-[32px] items-center gap-2 xl:min-h-0"><IClock className="h-4 w-4" /> Segunda a Sexta das 8h às 17h48</span>
            <span className="mt-3 text-balance border-t border-white/10 pt-4 text-white/60 xl:ml-auto xl:mt-0 xl:border-0 xl:pt-0">© {year} CETAL · Centro Tecnológico de Análise de Alimentos</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
