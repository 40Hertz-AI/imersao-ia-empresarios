import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const SITE = "https://gattiquimica.com.br";
const WA = "https://wa.me/5511984470736";

/* Tokens de cor (amostrados do mockup e consolidados por papel) */
const C = {
  ink: "#0A1330", // texto do menu
  hero: "#012348", // fundo do hero
  band: "#012955", // faixa ANVISA
  footer: "#013066", // rodapé
  royal: "#034198", // ação: botão, círculos dos cards, foco
  brand: "#082B86", // títulos e links sobre branco
  steel: "#0E2259", // texto sobre prata
  slate: "#3A4150", // texto corrido sobre branco
  mark: "#2E3E66", // logos de clientes (prova social, mais calma que a marca)
};

const F = {
  body: "'Barlow', system-ui, sans-serif",
  cond: "'Barlow Semi Condensed', 'Barlow', system-ui, sans-serif",
  wide: "'Archivo', 'Barlow', system-ui, sans-serif",
};

const NAV = [
  { label: "A Empresa", href: `${SITE}/a-empresa/` },
  { label: "Produtos", href: `${SITE}/produtos/`, sub: true },
  { label: "Onde Comprar", href: `${SITE}/onde-comprar/` },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Ficha Técnica e FDS", href: `${SITE}/ficha-tecnica-e-fds/` },
  { label: "Contato", href: `${SITE}/contato/` },
];

const LINHAS = [
  { nome: "Refrigeração", d: "Soluções para limpeza profissional para sistemas de refrigeração e climatização.", img: "/assets/refrigeracao.webp", href: "https://materiais.gattiquimica.com.br/refrigeracao", icon: "snow" },
  { nome: "Automotiva", d: "Soluções de limpeza profissional interna e externa para veículos pesados.", img: "/assets/automotiva.webp", href: "https://materiais.gattiquimica.com.br/automotiva", icon: "truck" },
  { nome: "Institucional", d: "Soluções profissionais para limpeza, higienização, lavanderia e perfumação de ambientes.", img: "/assets/institucional.webp", href: "https://materiais.gattiquimica.com.br/institucional", icon: "building" },
  { nome: "Industrial", d: "Soluções profissionais em desengraxe, desenvolvidas para elevar o padrão da sua operação.", img: "/assets/industrial.webp", href: "https://materiais.gattiquimica.com.br/industrial", icon: "factory" },
] as const;

// [arquivo, nome, x, y, largura, altura, ajuste óptico] — área útil de cada logo no canvas 256x173;
// o ajuste compensa logos maciços (caixa cheia) e logos finos (script) para todos pesarem igual
const CLIENTES: [string, string, number, number, number, number, number][] = [
  ["refricril", "Refricril", 0, 60, 256, 51, 1.04],
  ["dufrio", "Dufrio", 4, 46, 248, 82, 0.96],
  ["frigelar", "Frigelar", 0, 68, 256, 36, 0.9],
  ["cimed", "Cimed", 9, 58, 238, 56, 0.86],
  ["rede-dor", "Rede D'Or", 5, 47, 246, 58, 1],
  ["rede-diroma", "Rede diRoma", 11, 33, 235, 110, 1.1],
  ["osmag", "Osmagrio", 1, 39, 255, 96, 1.12],
  ["usina-colorado", "Usina Colorado", 31, 15, 205, 145, 0.98],
  ["disparcon", "Disparcon", 2, 61, 252, 51, 0.84],
];

const SILVER = "linear-gradient(180deg,#FDFDFE 0%,#E6E8EB 34%,#C5C9CF 60%,#DADDE1 78%,#F1F2F4 100%)";
const STEEL_BAR = "linear-gradient(90deg,#B9BBBF 0%,#DCDDE0 18%,#F2F2F3 45%,#ECEDEE 60%,#D4D5D8 85%,#B4B6BA 100%)";
// metal escovado: ruído fractal esticado na horizontal (riscos irregulares, sem listras repetidas)
const brush = (seed: number, rgb: string, a: number) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='160'%3E%3Cfilter id='b'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.0025 0.9' numOctaves='2' seed='${seed}' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 ${rgb} 0 0 0 0 ${rgb} 0 0 0 0 ${rgb} ${a} 0 0 0 ${(-a / 2).toFixed(2)}'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23b)'/%3E%3C/svg%3E")`;
const BRUSHED = `${brush(3, "1", 0.5)}, ${brush(11, "0", 0.09)}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=R.+Suzano,+1000+-+Vila+Monte+Belo,+Itaquaquecetuba+-+SP,+08577-520";

/* Gutter único das seções (56px em 1440) e largura máxima do conteúdo */
const WRAP = "mx-auto w-full max-w-[1440px] px-[var(--g)]";

/* Microinterações: curvas e durações num só lugar; hover só com ponteiro fino */
const CSS = `
:root{--g:clamp(20px,3.9vw,56px);--ease-out:cubic-bezier(.23,1,.32,1)}
html{scroll-behavior:smooth}
::selection{background:${C.royal};color:#fff}
a{text-underline-offset:4px}
details>summary{list-style:none}
details>summary::-webkit-details-marker{display:none}

.g-nav{position:relative;transition:color 160ms var(--ease-out)}
.g-nav::after{content:"";position:absolute;left:0;right:0;bottom:5px;height:2px;border-radius:1px;background:${C.royal};transform:scaleX(0);transform-origin:left;transition:transform 220ms var(--ease-out)}
.g-nav:focus-visible::after{transform:scaleX(1)}
.g-chev{transition:transform 200ms var(--ease-out)}
.g-has:hover .g-chev,.g-has:focus-within .g-chev{transform:rotate(180deg)}

.g-sub{opacity:0;visibility:hidden;transform:translateY(4px) scale(.98);transform-origin:top center;transition:opacity 120ms ease,transform 120ms ease,visibility 0s linear 120ms}
.g-has:hover .g-sub,.g-has:focus-within .g-sub{opacity:1;visibility:visible;transform:none;transition:opacity 200ms var(--ease-out),transform 200ms var(--ease-out),visibility 0s}

.g-pop{transform-origin:top right;transition:opacity 200ms var(--ease-out),transform 200ms var(--ease-out)}
@starting-style{.g-pop{opacity:0;transform:translateY(-4px) scale(.97)}}
.g-press{transition:transform 160ms var(--ease-out),background-color 160ms ease}
.g-press:active{transform:scale(.97)}

.g-btn{background:linear-gradient(180deg,#0A4DAE 0%,${C.royal} 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,8,24,.35),0 10px 24px -10px rgba(0,8,24,.7);transition:transform 160ms var(--ease-out),filter 160ms ease}
.g-btn:active{transform:scale(.97)}
.g-arrow{transition:transform 220ms var(--ease-out)}

.g-card{box-shadow:0 0 0 1px rgba(10,30,70,.07),0 1px 2px rgba(10,30,70,.06),0 10px 28px -8px rgba(10,30,70,.14);transition:box-shadow 260ms var(--ease-out)}
.g-card .g-img{filter:saturate(.94) contrast(1.03);transition:transform 700ms var(--ease-out)}
.g-card a::after{content:"";position:absolute;inset:0;border-radius:10px}
.g-card a:focus-visible{outline:none}
.g-card a:focus-visible::after{box-shadow:inset 0 0 0 2px ${C.royal},inset 0 0 0 4px #fff}
.g-badge{background:radial-gradient(circle at 34% 28%,#0B4CAA 0%,${C.royal} 58%,#03387F 100%);box-shadow:0 0 0 3px #fff,0 0 0 4px #CBD1DA,0 8px 16px -6px rgba(2,42,84,.5)}

.g-flink{color:rgba(255,255,255,.8);text-decoration:underline;text-decoration-color:transparent;transition:color 160ms ease,text-decoration-color 160ms ease}
.g-soc{opacity:.9;transition:opacity 160ms ease,transform 200ms var(--ease-out)}
.g-steel a{text-decoration:underline;text-decoration-color:transparent;transition:text-decoration-color 160ms ease}

@media (hover:hover) and (pointer:fine){
  .g-nav:hover{color:${C.royal}}
  .g-nav:hover::after{transform:scaleX(1)}
  .g-btn:hover{filter:brightness(1.12)}
  .g-btn:hover .g-arrow,.g-card:hover .g-arrow{transform:translateX(4px)}
  .g-card:hover{box-shadow:0 0 0 1px rgba(10,30,70,.09),0 2px 4px rgba(10,30,70,.06),0 22px 44px -14px rgba(10,30,70,.26)}
  .g-card:hover .g-img{transform:scale(1.04)}
  .g-flink:hover{color:#fff;text-decoration-color:rgba(255,255,255,.6)}
  .g-soc:hover{opacity:1;transform:translateY(-1px)}
  .g-steel a:hover{text-decoration-color:currentColor}
}

@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .g-nav::after{transform:scaleX(1);opacity:0;transition:opacity 160ms ease}
  .g-nav:hover::after,.g-nav:focus-visible::after{opacity:1}
  .g-sub,.g-has:hover .g-sub,.g-has:focus-within .g-sub,.g-pop{transform:none}
  .g-press:active,.g-btn:active,.g-chev,.g-has:hover .g-chev{transform:none}
  .g-btn:hover .g-arrow,.g-card:hover .g-arrow,.g-card:hover .g-img,.g-soc:hover{transform:none}
}
`;

/* ---------- ícones ---------- */

function LineIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 lg:h-10 lg:w-10" fill="none" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "snow" &&
        [0, 60, 120].map((a) => (
          <g key={a} transform={`rotate(${a} 12 12)`}>
            <path d="M12 2.5v19" />
            <path d="M9.6 4.4 12 6.8l2.4-2.4M9.6 19.6 12 17.2l2.4 2.4" />
          </g>
        ))}
      {name === "truck" && (
        <>
          <rect x="2.2" y="5.6" width="11" height="9.6" rx=".8" fill="currentColor" />
          <path d="M14.6 9h3.3l3 3.6v2.6h-6.3z" fill="currentColor" />
          <path d="M16.2 10.5h1.2l1.5 1.8h-2.7z" fill={C.royal} stroke="none" />
          <path d="M2.2 15.2h18.7" />
          <circle cx="6.6" cy="17.6" r="2" fill={C.royal} strokeWidth="1.8" />
          <circle cx="17.2" cy="17.6" r="2" fill={C.royal} strokeWidth="1.8" />
        </>
      )}
      {name === "building" && (
        <>
          <path d="M4.5 21V8.5L12 4l7.5 4.5V21" />
          <path d="M2.5 21h19M10 21v-4.5h4V21" />
          <path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01M8 14h.01M16 14h.01M12 14h.01" strokeWidth="2.4" />
        </>
      )}
      {name === "factory" && (
        <>
          <path d="M3 21v-9.5l5 3v-3l5 3v-3l5 3V4h3v17z" fill="currentColor" />
          <path d="M6.5 17.5h1.5M11 17.5h1.5" stroke={C.royal} strokeWidth="2" />
          <path d="M2 21h20" />
        </>
      )}
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* Selo "Nº1": roseta, louros e coroa calculados de forma determinística (SSR-safe) */
const pt = (deg: number, r: number) => {
  const t = (deg * Math.PI) / 180;
  return [100 + r * Math.sin(t), 100 - r * Math.cos(t)];
};
const f2 = (n: number) => n.toFixed(2);
const ROSETTE = Array.from({ length: 241 }, (_, i) => {
  const deg = (i / 240) * 360;
  const [x, y] = pt(deg, 94 + 4 * Math.cos(((deg * Math.PI) / 180) * 24));
  return `${f2(x)},${f2(y)}`;
}).join(" ");
const [S0x, S0y] = pt(192, 55);
const [S1x, S1y] = pt(298, 55);
const LEAVES = Array.from({ length: 12 }, (_, i) => {
  const deg = 198 + Math.floor(i / 2) * 17;
  const side = i % 2 === 0 ? -1 : 1;
  const [sx, sy] = pt(deg, 55);
  const rot = deg + side * 34;
  const rr = (rot * Math.PI) / 180;
  return { cx: sx + 6.5 * Math.cos(rr), cy: sy + 6.5 * Math.sin(rr), rot };
});

function Seal() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_6px_14px_rgba(0,10,30,0.5)]" aria-hidden="true">
      <defs>
        <linearGradient id="seal-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".3" stopColor="#DCE0E5" />
          <stop offset=".55" stopColor="#A1A9B3" />
          <stop offset=".78" stopColor="#ECEEF1" />
          <stop offset="1" stopColor="#9DA5AF" />
        </linearGradient>
        <radialGradient id="seal-navy" cx=".42" cy=".32" r=".8">
          <stop offset="0" stopColor="#1C4F98" />
          <stop offset="1" stopColor="#03204B" />
        </radialGradient>
      </defs>
      <polygon points={ROSETTE} fill="url(#seal-silver)" stroke="#8C95A0" strokeWidth=".8" />
      <circle cx="100" cy="100" r="75" fill="url(#seal-silver)" stroke="#7D8691" strokeWidth=".8" />
      <circle cx="100" cy="100" r="68" fill="url(#seal-navy)" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="#D3D8DE" strokeOpacity=".5" strokeWidth="1" />
      <g fill="url(#seal-silver)">
        <path d="M82 70 79 52l10 8 11-13 11 13 10-8-3 18z" />
        <rect x="82" y="72" width="36" height="4" rx="1" />
        <circle cx="79" cy="51" r="2.4" />
        <circle cx="100" cy="46" r="2.6" />
        <circle cx="121" cy="51" r="2.4" />
      </g>
      {[1, -1].map((m) => (
        <g key={m} transform={m === 1 ? undefined : "matrix(-1 0 0 1 200 0)"}>
          <path d={`M${f2(S0x)} ${f2(S0y)} A55 55 0 0 1 ${f2(S1x)} ${f2(S1y)}`} fill="none" stroke="#C9CED5" strokeWidth="1.6" />
          {LEAVES.map((l, i) => (
            <ellipse key={i} cx={f2(l.cx)} cy={f2(l.cy)} rx="7" ry="2.7" fill="url(#seal-silver)" transform={`rotate(${f2(l.rot)} ${f2(l.cx)} ${f2(l.cy)})`} />
          ))}
        </g>
      ))}
      <text x="101" y="133" textAnchor="middle" fill="#FFFFFF" style={{ fontFamily: F.cond, fontWeight: 800 }}>
        <tspan fontSize="46">Nº</tspan>
        <tspan fontSize="80" dx="1">1</tspan>
      </text>
    </svg>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 80 92" className="h-[72px] w-[63px] lg:h-[96px] lg:w-[84px]" aria-hidden="true">
      <defs>
        <linearGradient id="band-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".45" stopColor="#C4CAD2" />
          <stop offset=".7" stopColor="#8E97A2" />
          <stop offset="1" stopColor="#E6E9ED" />
        </linearGradient>
      </defs>
      <path d="M40 4 73 15.5v25.5c0 22-14.5 37-33 46.5C21.5 78 7 63 7 41V15.5z" fill="none" stroke="url(#band-silver)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M26 46l10 10 19-20" fill="none" stroke="url(#band-silver)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Flask() {
  return (
    <svg viewBox="0 0 80 92" className="h-[94px] w-[82px]" aria-hidden="true">
      <path d="M29 5h22M33 5v27L9 76a8 8 0 0 0 7 12h48a8 8 0 0 0 7-12L47 32V5" fill="none" stroke="url(#band-silver)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 62h42l8 14a5 5 0 0 1-4.5 7.5h-49A5 5 0 0 1 11 76z" fill="url(#band-silver)" opacity=".92" />
      <circle cx="44" cy="44" r="3.2" fill="#C9CED5" />
      <circle cx="37" cy="53" r="2.3" fill="#C9CED5" />
      <circle cx="48" cy="56" r="1.9" fill="#C9CED5" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 100 86" className="h-[56px] w-[65px] xl:h-[86px] xl:w-[100px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M37 44 20 50 8 82l28-7 28 7 28-7-12-30-14-4" />
      <path d="M36 75 40 57M64 82l-4-24" />
      <path d="M50 62S33 41 33 28a17 17 0 0 1 34 0c0 13-17 34-17 34z" />
      <circle cx="50" cy="28" r="6.5" />
    </svg>
  );
}

function Social({ kind }: { kind: "in" | "ig" | "wa" }) {
  return (
    <svg viewBox="0 0 32 32" className="h-[40px] w-[40px]" aria-hidden="true">
      {kind === "in" && (
        <>
          <rect x="1" y="1" width="30" height="30" rx="7" fill="#fff" />
          <rect x="7" y="12.5" width="4.2" height="12.5" fill={C.footer} />
          <circle cx="9.1" cy="8.4" r="2.5" fill={C.footer} />
          <path d="M14 12.5h4v1.9c.8-1.4 2.3-2.2 4.1-2.2 3.2 0 4.3 2 4.3 5.4V25h-4.2v-6.6c0-1.6-.4-2.7-1.9-2.7s-2.1 1.2-2.1 2.8V25H14z" fill={C.footer} />
        </>
      )}
      {kind === "ig" && (
        <>
          <rect x="2.5" y="2.5" width="27" height="27" rx="8" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="16" cy="16" r="6.3" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="23.6" cy="8.4" r="1.9" fill="#fff" />
        </>
      )}
      {kind === "wa" && (
        <>
          <path d="M16 2.5A13.5 13.5 0 0 0 4.4 22.9L2.6 29.4l6.7-1.8A13.5 13.5 0 1 0 16 2.5z" fill="#fff" />
          <path d="M11.4 9.2c-.3-.6-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5s-1.4 1.4-1.4 3.4 1.5 3.9 1.7 4.2c.2.3 2.9 4.6 7.1 6.3 3.5 1.4 4.2 1.1 5 1 .8-.1 2.4-1 2.8-2s.4-1.8.3-2c-.1-.2-.4-.3-.8-.5s-2.4-1.2-2.8-1.3c-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.3-.5.3-.9.1s-1.7-.6-3.2-2c-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.2-2.8z" fill={C.footer} />
        </>
      )}
    </svg>
  );
}

function Pin() {
  return (
    <svg viewBox="0 0 24 24" className="h-[28px] w-[24px]" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5A7.5 7.5 0 0 0 4.5 9c0 5.6 7.5 13.5 7.5 13.5S19.5 14.6 19.5 9A7.5 7.5 0 0 0 12 1.5zm0 10.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
    </svg>
  );
}

function Mail() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[32px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="1" />
      <path d="m2.5 5.5 9.5 8 9.5-8M2.5 18.5l7-6.5M21.5 18.5l-7-6.5" />
    </svg>
  );
}

function Phone() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </svg>
  );
}

/* ---------- logo: símbolo original + wordmark tipográfico ---------- */

const LOGO = {
  header: {
    icon: "h-[50px] w-[50px] lg:h-[92px] lg:w-[92px]",
    gap: "gap-3 lg:gap-[30px]",
    box: "w-[132px] lg:w-[242px] lg:pt-[10px]",
    gatti: "text-[35px] lg:text-[67px]",
    quimica: "mt-[6px] text-[15px] lg:mt-[2px] lg:text-[28px]",
    desde: "mt-[5px] lg:mt-[11px]",
    desdeTxt: "text-[9px] lg:text-[15.5px]",
  },
  // abaixo de 360px o logo do rodapé encolhe para não estourar a largura (reflow em 320px)
  footer: {
    icon: "h-[80px] w-[80px] max-[359px]:h-[64px] max-[359px]:w-[64px]",
    gap: "gap-[20px] max-[359px]:gap-[14px]",
    box: "w-[204px] max-[359px]:w-[170px]",
    gatti: "text-[52px] max-[359px]:text-[43px]",
    quimica: "mt-[10px] text-[23.5px] max-[359px]:mt-[8px] max-[359px]:text-[19.5px]",
    desde: "mt-[9px] max-[359px]:mt-[7px]",
    desdeTxt: "text-[13px] max-[359px]:text-[11px]",
  },
};

function Logo({ v }: { v: "header" | "footer" }) {
  const s = LOGO[v];
  const dark = v === "footer";
  return (
    <span className={`flex items-center ${s.gap}`}>
      <img src="/assets/gatti-icon.svg" alt="" width={92} height={92} className={`shrink-0 ${s.icon}`} style={dark ? { filter: "url(#gatti-silver)" } : undefined} />
      <span className={`flex flex-col ${s.box}`}>
        <span className={`block leading-[0.78] ${s.gatti}`} style={{ fontFamily: F.wide, fontStretch: "112%", fontWeight: 900, color: dark ? "#FFFFFF" : "#0A2C7A" }}>
          GATTI
        </span>
        <span className={`flex justify-between leading-none ${s.quimica}`} style={{ fontWeight: 600, color: dark ? "#EEF1F5" : "#6E6C6D" }} aria-hidden="true">
          {"QUÍMICA".split("").map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </span>
        <span className="sr-only"> Química</span>
        <span className={`flex items-center gap-[10px] ${s.desde}`} aria-hidden="true">
          <span className="h-px flex-1" style={{ background: dark ? "rgba(255,255,255,.7)" : "#3A4258" }} />
          <span className={`leading-none tracking-[0.14em] ${s.desdeTxt}`} style={{ fontWeight: 500, color: dark ? "#FFFFFF" : "#192346" }}>
            DESDE 1964
          </span>
          <span className="h-px flex-1" style={{ background: dark ? "rgba(255,255,255,.7)" : "#3A4258" }} />
        </span>
      </span>
    </span>
  );
}

/* ---------- página ---------- */

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#034198]";
const focusDark = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
const NEW_TAB = " (abre em nova aba)";

// degradê do hero: o trecho sólido acompanha o texto, que fica no container centralizado de 1440px
const HERO_FADE = `linear-gradient(90deg, ${C.hero} 0, ${C.hero} max(23%, 330px, calc(50% - 390px)), rgba(1,35,72,.88) max(34%, 500px, calc(50% - 220px)), rgba(1,35,72,.5) max(47%, 690px, calc(50% - 30px)), rgba(1,35,72,.12) max(62%, 900px, calc(50% + 180px)), rgba(1,35,72,0) max(74%, 1060px, calc(50% + 340px)))`;

function Index() {
  return (
    <div className="min-h-screen bg-white antialiased" style={{ fontFamily: F.body, color: C.ink }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,900&family=Barlow+Semi+Condensed:wght@500;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{CSS}</style>

      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="gatti-silver" colorInterpolationFilters="sRGB">
          <feFlood floodColor="#DDE2E8" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="gatti-mark" colorInterpolationFilters="sRGB">
          <feFlood floodColor={C.mark} />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      </svg>

      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:font-semibold">
        Pular para o conteúdo
      </a>

      {/* HEADER (idêntico ao mockup) */}
      <header className="sticky top-0 z-30 border-b border-[#D9DEE6] bg-white lg:static">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 lg:h-[168px] lg:pl-[40px] lg:pr-[57px]">
          <a href={`${SITE}/`} aria-label="Gatti Química — Página Inicial" className={`rounded-sm ${focus}`}>
            <Logo v="header" />
          </a>

          <nav aria-label="Principal" className="ml-[28px] hidden flex-1 justify-end xl:flex">
            <ul className="flex w-full max-w-[871px] items-center justify-between text-[clamp(16px,1.285vw,18.5px)] font-semibold uppercase" style={{ color: C.ink }}>
              {NAV.map((n) =>
                n.sub ? (
                  <li key={n.label} className="g-has relative mr-[-11px]">
                    <a href={n.href} className={`g-nav flex items-center gap-[8px] py-3 ${focus}`}>
                      {n.label}
                      <Chevron className="g-chev h-[16px] w-[16px]" />
                    </a>
                    <ul className="g-sub absolute left-1/2 top-full z-40 -ml-[130px] w-[260px] rounded-md border border-[#E3E7ED] bg-white p-2 text-[16px] normal-case shadow-[0_1px_2px_rgba(2,42,84,.06),0_14px_32px_-8px_rgba(2,42,84,.22)]">
                      {LINHAS.map((l) => (
                        <li key={l.nome}>
                          <a href={l.href} className={`block rounded px-3 py-2.5 font-semibold transition-colors duration-150 hover:bg-[#EEF3FA] hover:text-[#034198] ${focus}`}>
                            Linha {l.nome}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={n.label}>
                    <a href={n.href} className={`g-nav block py-3 ${focus}`}>
                      {n.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <details className="group relative xl:hidden">
            <summary aria-label="Abrir menu" className={`g-press grid h-11 w-11 cursor-pointer place-items-center rounded-md border border-[#D9DEE6] ${focus}`} style={{ color: C.brand }}>
              <svg viewBox="0 0 24 24" className="h-6 w-6 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg viewBox="0 0 24 24" className="hidden h-6 w-6 group-open:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </summary>
            <nav aria-label="Principal (celular)" className="g-pop absolute right-0 top-[calc(100%+17px)] z-40 w-[min(88vw,320px)] rounded-lg border border-[#E3E7ED] bg-white p-2 shadow-[0_1px_2px_rgba(2,42,84,.06),0_18px_40px_-10px_rgba(2,42,84,.28)] lg:top-[calc(100%+62px)]">
              <ul className="text-[16px] font-semibold uppercase tracking-[0.02em]">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className={`block rounded px-4 py-3 transition-colors duration-150 hover:bg-[#EEF3FA] ${focus}`}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="relative overflow-hidden text-white" style={{ background: C.hero }}>
          <img
            src="/assets/hero.webp"
            alt="Linha de envase de produtos de limpeza com galões em esteira de aço inox"
            width={1400}
            height={792}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:left-auto lg:w-[80%]"
          />
          <div className="absolute inset-0 hidden lg:block" style={{ background: HERO_FADE }} />
          <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(180deg, rgba(1,35,72,.9) 0%, rgba(1,35,72,.82) 42%, rgba(1,35,72,.5) 72%, rgba(1,35,72,.66) 100%)" }} />
          <div className="absolute inset-0 mix-blend-multiply" style={{ background: "rgba(40,80,160,.18)" }} />
          <div className="absolute inset-0 hidden mix-blend-color lg:block" style={{ background: "linear-gradient(90deg, rgba(60,110,190,0) 62%, rgba(60,110,190,.55) 100%)" }} />

          <div className={`relative ${WRAP} pb-10 pt-10 lg:pb-12 lg:pt-16`}>
            <h1 className="max-w-[680px] text-balance text-[clamp(36px,10.8vw,42px)] font-bold uppercase leading-[1.06] lg:text-[clamp(52px,4.6875vw,67.5px)] lg:leading-[1.08]" style={{ fontFamily: F.cond }}>
              Desde 1964 em soluções de limpeza profissional
            </h1>
            <p className="mt-5 max-w-[470px] text-pretty text-[18px] leading-[28px] text-white/90 lg:text-[26px] lg:leading-[36px]">
              Produtos e matérias-primas para limpeza e higienização profissional.
            </p>
            <a
              href="#linhas"
              className={`g-btn group mt-7 inline-flex h-[52px] items-center gap-4 rounded-[3px] border border-[#3B6CC0] pl-5 pr-4 text-[16px] font-semibold uppercase tracking-[0.04em] text-white lg:mt-8 lg:h-[56px] lg:gap-5 lg:pl-7 lg:pr-6 lg:text-[20px] ${focusDark}`}
            >
              Conheça nossas linhas
              <Arrow className="g-arrow h-[22px] w-[22px] lg:h-[24px] lg:w-[24px]" />
            </a>

            {/* Selo Nº1 — afirmação real do site oficial */}
            <div className="relative mt-10 flex h-[124px] items-center max-[359px]:h-[100px] lg:-ml-[9px] lg:h-[170px]">
              <div className="relative z-10 h-[124px] w-[124px] shrink-0 max-[359px]:h-[96px] max-[359px]:w-[96px] lg:h-[168px] lg:w-[168px]">
                <Seal />
              </div>
              <div className="-ml-[34px] drop-shadow-[0_4px_10px_rgba(0,10,30,.35)] max-[359px]:-ml-[28px] lg:-ml-[66px]">
                <p
                  className="flex h-[98px] w-[250px] flex-col justify-center pl-[40px] pr-[26px] text-center uppercase max-[359px]:h-[84px] max-[359px]:w-[calc(100vw-108px)] max-[359px]:pl-[32px] max-[359px]:pr-[18px] lg:h-[135px] lg:w-[408px] lg:pl-[76px] lg:pr-[46px]"
                  style={{
                    background: `linear-gradient(0deg, rgba(96,104,116,.45) 0 1.5px, transparent 1.5px), ${BRUSHED}, ${SILVER}`,
                    clipPath: "polygon(0 0,100% 0,91% 100%,0 100%)",
                    color: C.steel,
                    fontFamily: F.cond,
                  }}
                >
                  <span className="sr-only">Nº1: </span>
                  <span className="block text-[19px] font-bold leading-[1.15] max-[359px]:text-[16px] lg:text-[30px]">Líder em limpeza de ar-condicionado</span>
                  <span className="mt-1 block text-[15px] font-medium tracking-[0.08em] max-[359px]:text-[13px] lg:text-[21px]">no Brasil</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LINHAS */}
        <section id="linhas" aria-labelledby="linhas-titulo" className="scroll-mt-24 pb-12 pt-10 lg:pb-16 lg:pt-14">
          <h2 id="linhas-titulo" className="sr-only">
            Linhas de produtos
          </h2>
          <ul className={`${WRAP} grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4`}>
            {LINHAS.map((l) => (
              <li key={l.nome} className="g-card relative flex flex-col overflow-hidden rounded-[10px] bg-white">
                <div className="relative h-[200px] overflow-hidden sm:h-[224px] lg:h-[256px]">
                  <img src={l.img} alt="" width={1000} height={753} fetchPriority="low" className="g-img h-full w-full object-cover" />
                  <span className="absolute inset-x-0 bottom-0 h-px" style={{ background: "rgba(10,30,70,.10)" }} aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col items-center px-5 pb-7 text-center lg:pb-10">
                  <span className="g-badge relative -mt-8 grid h-16 w-16 place-items-center rounded-full text-white lg:-mt-10 lg:h-20 lg:w-20">
                    <LineIcon name={l.icon} />
                  </span>
                  <h3 className="mt-4 text-balance text-[22px] font-bold uppercase leading-[1.15] tracking-[0.01em] lg:text-[26px]" style={{ color: C.brand }}>
                    <span className="sm:block">Linha </span>
                    {l.nome}
                  </h3>
                  <p className="mt-3 max-w-[290px] text-pretty text-[16px] leading-[26px] lg:mt-4 lg:text-[17px] lg:leading-[27px]" style={{ color: C.slate }}>
                    {l.d}
                  </p>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-3 pt-5 text-[15px] font-semibold uppercase tracking-[0.08em] lg:pt-6"
                    style={{ color: C.brand }}
                  >
                    Saiba mais<span className="sr-only"> sobre a Linha {l.nome}{NEW_TAB}</span>
                    <Arrow className="g-arrow h-[20px] w-[20px]" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* FAIXA ANVISA */}
        <section aria-label="Certificações" style={{ background: C.band }}>
          <div className={`${WRAP} flex flex-col items-center justify-center gap-5 py-10 lg:h-[120px] lg:flex-row lg:justify-between lg:gap-8 lg:py-0`}>
            <Shield />
            <p className="text-balance text-center text-[19px] font-bold uppercase leading-tight tracking-[0.03em] text-white lg:whitespace-nowrap lg:text-[clamp(21px,1.95vw,28px)]">
              <span className="block lg:inline">Produtos certificados pela ANVISA</span>
              <span className="mx-auto my-3 block h-px w-10 lg:hidden" style={{ background: "linear-gradient(90deg,transparent,#C4CAD2,transparent)" }} aria-hidden="true" />
              <span className="mx-[clamp(16px,1.67vw,24px)] hidden h-[6px] w-[6px] -translate-y-[0.2em] rounded-full align-middle lg:inline-block" style={{ background: "#C4CAD2" }} aria-hidden="true" />
              <span className="block lg:inline">Fórmulas concentradas</span>
            </p>
            <span className="hidden lg:block">
              <Flask />
            </span>
          </div>
        </section>

        {/* CLIENTES */}
        <section aria-labelledby="clientes-titulo" className="bg-white">
          <div className={`${WRAP} pb-12 pt-10 lg:pb-14 lg:pt-12`}>
            <h2 id="clientes-titulo" className="text-balance text-center text-[18px] font-bold uppercase tracking-[0.05em] lg:text-[22px]" style={{ color: C.brand }}>
              Empresas que confiam na Gatti Química
            </h2>
            <ul className="mx-auto mt-7 grid max-w-[420px] grid-cols-3 items-center justify-items-center gap-x-5 gap-y-7 lg:mt-8 lg:flex lg:max-w-none lg:justify-between lg:gap-0">
              {CLIENTES.map(([k, nome, x, y, w, h, opt]) => {
                // altura óptica uniforme: logos mais alongados ficam mais baixos
                const W = Math.round(((54 * opt) / Math.pow(w / h, 0.42)) * (w / h));
                const pc = (n: number) => `${((n / w) * 100).toFixed(3)}%`;
                return (
                  <li key={k} className="flex w-full justify-center lg:w-auto">
                    <span className="block w-[var(--w)] max-w-full overflow-hidden lg:w-[min(var(--w),var(--wv))]" style={{ aspectRatio: `${w} / ${h}`, ["--w" as string]: `${W}px`, ["--wv" as string]: `${((W / 1440) * 100).toFixed(3)}vw` }}>
                      <img
                        src={`/assets/cliente-${k}.webp`}
                        alt={nome}
                        width={256}
                        height={173}
                        fetchPriority="low"
                        className="block h-auto max-w-none"
                        style={{ width: pc(256), marginLeft: pc(-x), marginTop: pc(-y), filter: "url(#gatti-mark)" }}
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: C.footer }} className="text-white">
        <div className={`${WRAP} grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:gap-x-10 lg:py-14 xl:grid-cols-[561fr_329fr_289fr_261fr] xl:gap-0 xl:pb-12`}>
          <div className="col-span-2 sm:col-span-1 xl:pr-8">
            <a href={`${SITE}/`} aria-label="Gatti Química — Página Inicial" className={`inline-block rounded-sm ${focusDark}`}>
              <Logo v="footer" />
            </a>
            <p className="mt-6 max-w-[340px] text-pretty text-[16px] leading-[26px] text-white/80 lg:text-[17px] lg:leading-[27px]">
              No segmento desde 1964, fornecemos soluções especializadas em produtos e matérias-primas para limpeza e higienização profissional.
            </p>
          </div>
          <nav aria-labelledby="f-nav" className="col-span-2 sm:col-span-1 xl:border-l xl:border-white/20 xl:pl-[clamp(32px,5.6vw,80px)]">
            <h2 id="f-nav" className="text-[16px] font-semibold uppercase leading-none tracking-[0.08em] lg:text-[17px]">
              Navegação
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 text-[16px] xl:mt-5 xl:block">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className={`g-flink block py-[10px] leading-6 xl:inline-block xl:py-[2px] ${focusDark}`}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-[359px]:col-span-2 xl:border-l xl:border-white/20 xl:pl-12">
            <h2 className="text-[16px] font-semibold uppercase leading-none tracking-[0.08em] lg:text-[17px]">Onde estamos</h2>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className={`group mt-5 block rounded-sm xl:mt-7 ${focusDark}`} aria-label={`Ver endereço no mapa: R. Suzano, 1000 – Vila Monte Belo, Itaquaquecetuba/SP${NEW_TAB}`}>
              <span className="block text-white/90 xl:pl-[22px]">
                <MapIcon />
              </span>
              <span className="g-flink mt-3 block text-[16px] font-semibold leading-[26px] xl:mt-4">
                Itaquaquecetuba/SP
                <br />
                Brasil
              </span>
            </a>
          </div>
          <div className="max-[359px]:col-span-2 xl:border-l xl:border-white/20 xl:pl-12">
            <h2 className="text-[16px] font-semibold uppercase leading-none tracking-[0.08em] lg:text-[17px]">Siga-nos</h2>
            <ul className="-ml-[2px] mt-4 flex flex-wrap items-center gap-2 xl:mt-12 xl:gap-3">
              <li>
                <a href="https://www.linkedin.com/company/gatti-qu%C3%ADmica/" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn da Gatti Química${NEW_TAB}`} className={`g-soc block rounded-md p-[2px] ${focusDark}`}>
                  <Social kind="in" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gattiquimica/" target="_blank" rel="noopener noreferrer" aria-label={`Instagram da Gatti Química${NEW_TAB}`} className={`g-soc block rounded-md p-[2px] ${focusDark}`}>
                  <Social kind="ig" />
                </a>
              </li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp comercial: (11) 98447-0736${NEW_TAB}`} className={`g-soc block rounded-md p-[2px] ${focusDark}`}>
                  <Social kind="wa" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-steel" style={{ background: `${BRUSHED}, ${STEEL_BAR}`, boxShadow: "inset 0 1px 0 rgba(255,255,255,.85)", color: C.steel }}>
          <ul className="mx-auto flex w-fit flex-col gap-1 px-5 py-5 text-[16px] tabular-nums lg:h-20 lg:w-auto lg:max-w-[1440px] lg:flex-row lg:items-center lg:justify-center lg:gap-0 lg:py-0 lg:text-[clamp(17px,1.46vw,21px)]">
            <li>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className={`flex min-h-11 items-center gap-4 ${focus}`}>
                <span className="grid w-8 shrink-0 place-items-center">
                  <Pin />
                </span>
                R. Suzano, 1000 – Itaquaquecetuba/SP
                <span className="sr-only">{NEW_TAB}</span>
              </a>
            </li>
            <li className="mx-[clamp(20px,3.3vw,48px)] hidden h-6 w-px lg:block" style={{ background: C.steel, opacity: 0.35 }} aria-hidden="true" />
            <li>
              <a href="mailto:comercial@gattiquimica.com.br" className={`flex min-h-11 items-center gap-4 ${focus}`}>
                <span className="grid w-8 shrink-0 place-items-center">
                  <Mail />
                </span>
                comercial@gattiquimica.com.br
              </a>
            </li>
            <li className="mx-[clamp(20px,3.3vw,48px)] hidden h-6 w-px lg:block" style={{ background: C.steel, opacity: 0.35 }} aria-hidden="true" />
            <li>
              <a href="tel:+551146465800" className={`flex min-h-11 items-center gap-4 ${focus}`}>
                <span className="grid w-8 shrink-0 place-items-center">
                  <Phone />
                </span>
                (11) 4646-5800
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
