import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const SITE = "https://sabordamama.com.br/";
const wa = (msg: string) => "https://wa.me/5511944946653?text=" + encodeURIComponent(msg);
const WA = "https://wa.me/5511944946653";
const EMAIL = "contato@sabordamama.com.br";

const menu = [
  { label: "Temperos", href: "#produtos" },
  { label: "Molhos", href: "#produtos" },
  { label: "Churrasco", href: "#produtos" },
  { label: "Refogas", href: "#produtos" },
  { label: "Food Service", href: "#produtos" },
  { label: "Receitas", href: "#receitas" },
  { label: "Contato", href: "#contato" },
];
const menuExtra = [
  { label: "Derivados", href: "#produtos" },
  { label: "Diversos", href: "#produtos" },
];

type IconName = "steak" | "garlic" | "tomato" | "leaf" | "bowl";
const produtos: { nome: string; img: string; txt: string; tag: string; icon: IconName }[] = [
  { nome: "Sal de Parrilla", img: "/assets/sal-parrilla.webp", icon: "steak", tag: "Defumada com pimenta", txt: "Perfeito para carnes, o Sal de Parrilla traz o equilíbrio ideal de temperos e sabor!" },
  { nome: "Alho Triturado", img: "/assets/alho-triturado.webp", icon: "garlic", tag: "Sem sal", txt: "O sabor do alho, sem complicação! Seus pratos ficam mais saborosos e fáceis de preparar!" },
  { nome: "Ketchup", img: "/assets/ketchup.webp", icon: "tomato", tag: "Tradicional", txt: "Sabor caseiro em cada gota de ketchup! Realça o sabor das suas receitas com um toque irresistível!" },
  { nome: "Molho Árabe", img: "/assets/molho-arabe.webp", icon: "leaf", tag: "Com pimenta", txt: "O toque especial das suas receitas árabes!" },
  { nome: "Farofa", img: "/assets/farofa.webp", icon: "bowl", tag: "Com alho", txt: "Com Farofa Sabor da Mama, tudo fica mais gostoso!" },
];

const receitas = [
  { titulo: "Churrasco com Sal de Parrilla", img: "/assets/receita-picanha.webp", alt: "Carne grelhada fatiada sobre tábua de madeira com alecrim e sal grosso" },
  { titulo: "Farofa da Mama", img: "/assets/receita-farofa.webp", alt: "Tigela de farofa com bacon e salsinha" },
];

const franquia = [
  { icon: "medal", txt: "Mais de 16 anos no mercado" },
  { icon: "leaf", txt: "Ingredientes de qualidade" },
  { icon: "pin", txt: "Lojas em todo o Brasil" },
  { icon: "jar", txt: "Linha completa de temperos, molhos e derivados" },
] as const;

/* Escala de espaço (4pt): 4 8 12 16 20 24 32 40 48 56 72 96 · raios: botão 8, card 12, caixa 16
   Tipo: display 96 · h2 56 (38 mobile) · citação 40 · card 26/22 · lead 26/18 · corpo 17 · pequeno 15 · meta 14 */
const css = `
.sdm{--cream:#FBF1E5;--cream-2:#F6E6D2;--card:#FDF7EF;--line:#EADCC6;--terra:#94321D;--terra-dk:#7C2715;--band:#8F2C18;--olive:#4C4F2D;--olive-dk:#3F4125;--olive-ink:#35341A;--ink:#3D3A22;--brown:#7B5A1F;--mustard:#DC9A3A;--mustard-dk:#CF8B2A;--mustard-lt:#F2BC5A;--mustard-ink:#3B2A0E;--nav:#3F3A1E;--ink-dk:#2B2912;--olive-text:#4A4824;--olive-line:#56553A;--olive-btn:#45472A;--olive-btn-dk:#36381F;--on-band:#FFF4E8;--on-olive:#EDE3CD;--sand:#F3DCBE;--tagline:#5B4426;--rule:#8C7A4C;--orn:#C9852C;--branch:#B04A33;--hero-line:#EADBC4;--box-line:rgba(86,85,58,.34);--hairline:rgba(251,241,229,.16);--hairline-strong:rgba(251,241,229,.4);--icon-ring:rgba(86,85,58,.5);
  --gutter:20px;--sec:56px;--ease-out:cubic-bezier(.23,1,.32,1);
  --sh-btn:0 1px 1px rgba(59,42,14,.14),0 8px 18px -12px rgba(92,58,20,.55);
  --sh-card:0 1px 2px rgba(74,52,20,.05);
  --sh-lift:0 2px 4px -2px rgba(74,52,20,.08),0 24px 40px -28px rgba(74,52,20,.5);
  background:var(--cream);color:var(--ink);font-family:'Nunito Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}
@media (min-width:768px){.sdm{--gutter:32px;--sec:64px}}
@media (min-width:1280px){.sdm{--gutter:48px;--sec:72px}}
.sdm .wrap{max-width:1440px;margin-inline:auto;padding-inline:var(--gutter)}
.sdm .sec{padding-block:var(--sec)}
.sdm .serif{font-family:'Crimson Pro',Georgia,serif;font-kerning:normal;text-rendering:optimizeLegibility}
.sdm h2{letter-spacing:-.01em}
.sdm .caps{text-transform:uppercase;letter-spacing:.07em;font-weight:600}
.sdm ::selection{background:#EDB24E;color:#2B200C}
.sdm a:focus-visible,.sdm summary:focus-visible{outline:2px solid var(--terra);outline-offset:3px;border-radius:6px}
.sdm .on-dark a:focus-visible,.sdm .on-dark:focus-visible{outline-color:var(--mustard-lt)}
.sdm h1,.sdm h2,.sdm h3{text-wrap:balance}
.sdm p,.sdm li{text-wrap:pretty}
.sdm details>summary{list-style:none;cursor:pointer}
.sdm details>summary::-webkit-details-marker{display:none}
.sdm details[open] .ic-open{display:none}
.sdm details:not([open]) .ic-close{display:none}
.sdm .btn{transition:background-color .2s ease,color .2s ease,transform .16s var(--ease-out),box-shadow .2s ease}
.sdm .btn:active{transform:scale(.97)}
.sdm .cta{display:inline-flex;align-items:center;gap:12px;height:48px;padding-inline:22px;border-radius:8px;font-size:15px;box-shadow:var(--sh-btn)}
@media (min-width:1280px){.sdm .cta-lg{height:56px;padding-inline:24px;font-size:16px}}
.sdm .cta-mustard{background:var(--mustard);color:var(--mustard-ink)}
.sdm .cta-mustard:hover{background:var(--mustard-dk)}
.sdm .ulink{text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:5px;text-decoration-color:transparent;transition:text-decoration-color .2s ease,color .2s ease}
.sdm .ulink:hover{text-decoration-color:currentColor}
.sdm .nav-a{position:relative}
.sdm .nav-a::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:2px;border-radius:2px;background:var(--mustard);transform:scaleX(0);transform-origin:left;transition:transform .25s var(--ease-out)}
.sdm .zoom img{transform-origin:50% 60%;transition:transform .6s var(--ease-out)}
.sdm .nudge,.sdm .pop{transition:transform .18s var(--ease-out)}
.sdm .hero-img{-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 26%);mask-image:linear-gradient(180deg,transparent 0,#000 26%)}
@media (min-width:768px){.sdm .hero-img{clip-path:polygon(0 18px,100% 0,100% 100%,0 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0,transparent 12%,rgba(0,0,0,.5) 22%,#000 35%);mask-image:linear-gradient(90deg,transparent 0,transparent 12%,rgba(0,0,0,.5) 22%,#000 35%)}}
.sdm .strip{scrollbar-width:thin;scrollbar-color:var(--mustard) transparent;scroll-padding-inline:var(--gutter)}
.sdm .lift{box-shadow:var(--sh-card)}
@media (hover:hover) and (pointer:fine){
  .sdm .nav-a:hover::after{transform:scaleX(1)}
  .sdm .zoom:hover img{transform:scale(1.035)}
  .sdm .lift{transition:box-shadow .28s ease,transform .28s var(--ease-out)}
  .sdm .lift:hover{transform:translateY(-4px);box-shadow:var(--sh-lift)}
  .sdm a:hover .nudge{transform:translateX(3px)}
  .sdm a:hover .pop{transform:scale(1.12)}
}
@media (prefers-reduced-motion:reduce){
  .sdm .zoom img,.sdm .lift,.sdm .nudge,.sdm .pop,.sdm .nav-a::after{transition-property:none}
  .sdm .btn{transition-property:background-color,color}
  .sdm .btn:active,.sdm .lift:hover,.sdm .zoom:hover img,.sdm a:hover .nudge,.sdm a:hover .pop{transform:none}
}
`;

/* ---------- ícones (traço 1.7, cantos arredondados) ---------- */
type SvgProps = { className?: string };
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Heart({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" /></svg>;
}
function Store({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true"><path d="M3 9l1.6-5h14.8L21 9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M5 11.6V20h14v-8.4" /><path d="M10 20v-4.6h4V20" /></svg>;
}
function Sprout({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true"><path d="M12 21v-9.5" /><path d="M12 13.5c0-4.2 2.8-6.6 7.5-6.6 0 4.3-2.9 6.6-7.5 6.6z" /><path d="M12 11.5c0-3.6-2.4-5.8-6.4-5.8 0 3.7 2.5 5.8 6.4 5.8z" /><path d="M6.5 21h11" /></svg>;
}
function Book({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true"><path d="M2.8 5.6C5.6 4.4 8.6 4.6 12 6.6c3.4-2 6.4-2.2 9.2-1V19c-2.8-1.1-5.8-.9-9.2 1.1-3.4-2-6.4-2.2-9.2-1.1z" /><path d="M12 6.6v13.5" /><path d="M5.6 9.4c1.5-.3 2.9 0 4 .6M5.6 12.6c1.5-.3 2.9 0 4 .6M14.4 10c1.1-.6 2.5-.9 4-.6M14.4 13.2c1.1-.6 2.5-.9 4-.6" /></svg>;
}
function Chevron({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.2} aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5" /></svg>;
}
function Sprig({ className = "", flip = false }: SvgProps & { flip?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M5 29c3-4 6.2-7.8 10-10.6" />
      <path d="M14.4 19.2C9.6 16.4 8 10.4 10 4.2c4.8 3.4 6.4 9.2 4.4 15z" fill="currentColor" fillOpacity=".22" />
      <path d="M15.4 18.6c2.4-5 7.8-7.6 13.4-6.6-2.4 5.2-7.8 7.6-13.4 6.6z" fill="currentColor" fillOpacity=".22" />
      <path d="M14.4 19.2c-1.2-4.4-2.4-9.2-4.4-15M15.4 18.6c4-2.4 8.4-4.8 13.4-6.6" strokeWidth="1.2" />
    </svg>
  );
}
function ProdIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const c = className;
  if (name === "steak")
    return (
      <svg viewBox="0 0 32 32" className={c} aria-hidden="true">
        <path d="M4.5 17c0-6.3 5.8-10.5 13-10.5 6.7 0 11 3.6 11 8.4 0 4.2-3 6.6-6.6 6.6-2.4 0-3.6 1.2-5.7 3C12.6 27.6 4.5 24.6 4.5 17z" fill="#B4472C" stroke="#7C2715" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 17.5c.8-3.6 4.4-6.2 9-6.4M10.5 21.4c3.6.6 6.4-.6 8-2.6" fill="none" stroke="#F2C9A8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23.2" cy="14.6" r="2.6" fill="#FBF1E5" stroke="#7C2715" strokeWidth="1.4" />
      </svg>
    );
  if (name === "garlic")
    return (
      <svg viewBox="0 0 32 32" className={c} {...stroke} strokeWidth={1.5} aria-hidden="true">
        <path d="M16 4c0 2.6-1.4 4-3.4 5.8C9.6 12.4 7 15 7 19c0 5.2 4 8.6 9 8.6s9-3.4 9-8.6c0-4-2.6-6.6-5.6-9.2C17.4 8 16 6.6 16 4z" />
        <path d="M16 10.4c-2 3.4-2.6 9.2-1.2 17M16 10.4c2 3.4 2.6 9.2 1.2 17M12.4 12.6c-1.6 3.2-1.6 8.6.6 14.4M19.6 12.6c1.6 3.2 1.6 8.6-.6 14.4" />
      </svg>
    );
  if (name === "tomato")
    return (
      <svg viewBox="0 0 32 32" className={c} aria-hidden="true">
        <path d="M16 9.5c-6.2 0-10.8 4-10.8 9.2S9.8 28 16 28s10.8-4.1 10.8-9.3S22.2 9.5 16 9.5z" fill="#B23A22" />
        <path d="M10.5 15.5c1.2-1.6 2.8-2.5 4.6-2.8" fill="none" stroke="#E98A6E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10c-1.4-2-4-2.6-6-1.8 1.4 1.4 3.4 2 5.2 1.9M16 10c1.4-2 4-2.6 6-1.8-1.4 1.4-3.4 2-5.2 1.9M16 10V5.6" fill="none" stroke="#56612C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === "leaf")
    return (
      <svg viewBox="0 0 32 32" className={c} aria-hidden="true">
        <path d="M6 26C6 14.8 12.6 7.4 26.5 5.5 26.5 18.6 19.6 26 6 26z" fill="#5E6A31" />
        <path d="M6 26c4.2-6.8 9.4-11.6 15.6-15" fill="none" stroke="#FBF1E5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg viewBox="0 0 32 32" className={c} aria-hidden="true">
      <path d="M8 15.5c1.2-3.6 4.4-5.8 8-5.8s6.8 2.2 8 5.8" fill="#EBC98F" stroke="#7C2715" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12.5" cy="12.8" r=".9" fill="#7C2715" /><circle cx="17" cy="11.4" r=".9" fill="#7C2715" /><circle cx="20.4" cy="13.4" r=".9" fill="#7C2715" />
      <path d="M3.5 15.5h25c0 6-5.4 10.2-12.5 10.2S3.5 21.5 3.5 15.5z" fill="#B4472C" stroke="#7C2715" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.2 19.2h17.6" stroke="#F2C9A8" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function BulletIcon({ name, className = "" }: { name: (typeof franquia)[number]["icon"]; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={1.5} aria-hidden="true">
      {name === "medal" && (<><circle cx="12" cy="9.5" r="5" /><circle cx="12" cy="9.5" r="2.4" /><path d="M9.2 13.6 8 20.5l4-2.2 4 2.2-1.2-6.9" /></>)}
      {name === "leaf" && (<><path d="M5 19C5 11 9.6 5.8 19.6 4.6 19.6 14 14.6 19 5 19z" /><path d="M5 19c3-4.8 6.6-8.2 11-10.6" /></>)}
      {name === "pin" && (<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" /><circle cx="12" cy="10" r="2.4" /></>)}
      {name === "jar" && (<><path d="M8.2 3.5h7.6v2.8H8.2z" /><path d="M7.4 6.3h9.2l1.2 2.6v10.4a1.7 1.7 0 0 1-1.7 1.7H7.9a1.7 1.7 0 0 1-1.7-1.7V8.9z" /><path d="M6.2 11h11.6v5.4H6.2" /></>)}
    </svg>
  );
}

/* ---------- ilustrações ---------- */
function Whisk({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 100 180" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 124 36 84" stroke="#6E5233" strokeWidth="11" />
      <path d="M8 124 36 84" stroke="#CFA86C" strokeWidth="7.5" />
      <path d="M35 86l7-9" stroke="#6E5233" strokeWidth="8" />
      <g stroke="#6E5233" strokeWidth="2.6">
        <path d="M41 77C24 54 40 13 70 7c26-4 30 22 12 42-14 15-28 22-41 28" />
        <path d="M41 77c-3-24 12-54 33-63 14-6 19 8 9 25-10 18-26 30-42 38" />
        <path d="M41 77c6-22 19-45 38-61" />
      </g>
      <path fill="#DC9A3A" d="M84 97c-2.6-3-7.4-1.4-6.6 2.6.6 3 6.6 6.6 6.6 6.6s6-3.6 6.6-6.6c.8-4-4-5.6-6.6-2.6z" />
      <path stroke="#A8442B" strokeWidth="2.2" d="M66 124c-3-3.4-8.6-1.6-7.6 3 .7 3.4 7.6 7.6 7.6 7.6s6.9-4.2 7.6-7.6c1-4.6-4.6-6.4-7.6-3z" />
      <path stroke="#A8442B" strokeWidth="2.4" d="M28 150c-4.4-5-12.6-2.4-11.2 4.4 1 5 11.2 11.2 11.2 11.2s10.2-6.2 11.2-11.2c1.4-6.8-6.8-9.4-11.2-4.4z" />
    </svg>
  );
}
function QuoteAvatar({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="100" fill="#F6E6D2" />
      <path d="M100 152s-46-28-56-55c-7-19 5-40 27-40 12 0 22 7 29 17 7-10 17-17 29-17 22 0 34 21 27 40-10 27-56 55-56 55z" fill="#94321D" />
    </svg>
  );
}
function DrawnHeart({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 290 240" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M128 226C74 190 18 142 16 88 14 48 40 22 76 22c24 0 42 13 52 34 9-22 28-36 54-35 36 2 60 30 57 70-4 56-55 98-111 135z" strokeWidth="4.5" />
      <path d="M124 216C76 182 28 138 25 90 23 56 44 32 74 30" strokeWidth="1.8" opacity=".75" />
      <path d="M246 26l9-17M262 50l20-9M264 72l17 3" strokeWidth="4" />
    </svg>
  );
}
function Branch({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 196C46 150 58 96 96 8" />
      <path d="M45 150c-18-4-30-16-32-32 18 3 30 15 32 32zM45 150c14-12 32-14 46-6-13 11-31 13-46 6z" />
      <path d="M58 110c-16-6-25-19-25-34 16 5 25 18 25 34zM58 110c12-14 29-18 43-12-11 13-28 17-43 12z" />
      <path d="M73 70c-13-8-19-21-17-35 14 7 20 20 17 35zM73 70c10-12 25-16 38-11-10 12-25 16-38 11z" />
    </svg>
  );
}
function Storefront({ className = "" }: SvgProps) {
  const stripes = Array.from({ length: 10 }, (_, i) => i);
  return (
    <svg viewBox="0 0 290 180" className={className} role="img" aria-label="Ilustração de uma loja Sabor da Mama">
      <defs>
        <clipPath id="awn"><path d="M44 18h202l16 44H28z" /></clipPath>
      </defs>
      <ellipse cx="145" cy="170" rx="138" ry="7" fill="#E7D3B5" />
      <rect x="44" y="58" width="202" height="108" fill="#E8C99B" />
      <rect x="44" y="58" width="202" height="10" fill="#D9B27D" />
      <rect x="40" y="160" width="210" height="8" rx="2" fill="#C99C68" />
      <g clipPath="url(#awn)">
        {stripes.map((i) => <rect key={i} x={28 + i * 23.4} y="18" width="23.4" height="44" fill={i % 2 ? "#C8603E" : "#9C3A24"} />)}
      </g>
      <path d="M44 18h202" stroke="#7C2715" strokeWidth="3" strokeLinecap="round" />
      {stripes.map((i) => <path key={i} d={`M${28 + i * 23.4} 62a11.7 9 0 0 0 23.4 0z`} fill={i % 2 ? "#C8603E" : "#9C3A24"} />)}
      <rect x="68" y="84" width="74" height="76" rx="2" fill="#4A4E2C" />
      <path d="M92.7 84v76M117.3 84v76M68 109.3h74M68 134.7h74" stroke="#E8C99B" strokeWidth="3" />
      <rect x="64" y="80" width="82" height="82" rx="3" fill="none" stroke="#B88A55" strokeWidth="3" />
      <path d="M162 80h70M178 80v8M218 80v8" stroke="#6E5233" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="164" y="88" width="68" height="54" rx="4" fill="#FBF1E5" stroke="#8A6A3F" strokeWidth="2.4" />
      <text x="198" y="112" textAnchor="middle" fontFamily="'Crimson Pro',Georgia,serif" fontWeight="700" fontSize="18" fill="#94321D">Sabor</text>
      <text x="198" y="130" textAnchor="middle" fontFamily="'Crimson Pro',Georgia,serif" fontStyle="italic" fontWeight="600" fontSize="13" fill="#4C4F2D">da Mama</text>
      {[{ x: 20 }, { x: 270 }].map(({ x }) => (
        <g key={x}>
          <path d={`M${x - 11} 146h22l-3 20h-16z`} fill="#B4572F" />
          <path d={`M${x} 146c0-14-2-26-8-34M${x} 146c0-14 3-26 9-34M${x} 146c0-10-1-18 0-30`} stroke="#5E6A31" strokeWidth="1.8" fill="none" />
          <path d={`M${x - 8} 112c-8 2-12 8-12 14 8-1 12-7 12-14zM${x + 9} 112c8 2 12 8 12 14-8-1-12-7-12-14zM${x} 116c-5-4-5-12 0-17 5 5 5 13 0 17zM${x - 5} 128c-8 0-12 5-13 10 8 1 12-4 13-10zM${x + 5} 128c8 0 12 5 13 10-8 1-12-4-13-10z`} fill="#5E6A31" />
        </g>
      ))}
    </svg>
  );
}
function SprigHearts({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 130 140" className={className} aria-hidden="true">
      <path d="M78 134C84 100 82 60 64 8" fill="none" stroke="#C99A4C" strokeWidth="2" strokeLinecap="round" />
      <g fill="#DAAA5A">
        <path d="M80 112c-14-1-22-9-24-20 13 1 22 8 24 20zM82 98c10-9 22-11 32-6-9 9-21 11-32 6z" />
        <path d="M78 78c-13-3-20-12-20-23 12 3 19 11 20 23zM79 64c9-10 20-13 31-9-8 10-20 13-31 9z" />
        <path d="M71 44c-11-4-16-13-15-23 11 4 16 13 15 23zM72 32c7-9 17-12 26-9-7 9-17 12-26 9z" />
      </g>
      <g fill="#DC9A3A">
        <path transform="translate(14 28) scale(.62)" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
        <path transform="translate(22 66) scale(.9)" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
      </g>
    </svg>
  );
}

/* ---------- ícones de contato ---------- */
function Pin({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 15.4 12 22 12 22s7.5-6.6 7.5-12.5A7.5 7.5 0 0 0 12 2zm0 10.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" /></svg>;
}
function WhatsApp({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.3 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1-.7-.3-1.6-.8-2.4-1.6-.6-.6-1.1-1.3-1.3-1.7-.1-.2 0-.3.1-.4l.4-.4.2-.4v-.4l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 4 3.5 1.5.6 2 .7 2.8.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.5-.3z" /></svg>;
}
function Instagram({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r=".6" fill="currentColor" /></svg>;
}
function Facebook({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 12 2z" /></svg>;
}
function LinkedIn({ className = "" }: SvgProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.3 8.8h3.4V21H3.3zM9 8.8h3.3v1.7c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7V21H17v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6H9z" /></svg>;
}

/* ---------- página ---------- */
function Index() {
  return (
    <div className="sdm min-h-screen overflow-x-clip">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,600..700;1,600..700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600&display=swap" rel="stylesheet" />
      <style>{css}</style>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-[var(--terra)] focus:px-4 focus:py-2 focus:font-semibold focus:text-white">Pular para o conteúdo</a>

      {/* HEADER */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-[1440px] items-start justify-between px-5 pt-4 md:px-8 xl:pr-[32px] xl:pl-[58px] xl:pt-[50px]">
          <a href="/" className="flex w-[176px] shrink-0 flex-col items-center md:w-[230px] xl:w-[262px]" aria-label="Sabor da Mama Alimentos — início">
            <img src="/assets/logo.png" alt="Sabor da Mama Alimentos" width={700} height={200} className="h-auto w-full" />
            <span className="mt-[10px] hidden w-full items-center gap-2 xl:flex" aria-hidden="true">
              <span className="h-px flex-1 bg-[#8C7A4C]/60" />
              <Heart className="h-[11px] w-[11px] text-[var(--mustard)]" />
              <span className="h-px flex-1 bg-[#8C7A4C]/60" />
            </span>
            <span className="mt-[7px] hidden text-center text-[11.5px] font-semibold uppercase leading-[1.65] tracking-[0.06em] text-[var(--tagline)] xl:block">
              Temperos • Molhos • Farofas<br />Poá/SP
            </span>
            <Heart className="mt-[3px] hidden h-[11px] w-[11px] text-[var(--mustard)] xl:block" />
          </a>

          <nav aria-label="Principal" className="hidden items-center xl:flex xl:pt-[24px]">
            <ul className="flex items-center gap-[20px] min-[1400px]:gap-[33px]">
              {menu.map((m) => (
                <li key={m.label}>
                  <a href={m.href} className="nav-a whitespace-nowrap text-[14px] font-semibold uppercase min-[1400px]:text-[15.5px] tracking-[0.01em] text-[var(--nav)] transition-colors hover:text-[var(--terra)]">{m.label}</a>
                </li>
              ))}
            </ul>
            <a href={wa("Olá! Quero ser lojista Sabor da Mama.")} target="_blank" rel="noreferrer" className="btn ml-[24px] inline-flex h-[42px] items-center gap-[10px] whitespace-nowrap rounded-[7px] bg-[var(--terra)] px-[17px] text-[14px] min-[1400px]:ml-[32px] min-[1400px]:text-[15.5px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_2px_6px_-2px_rgba(124,39,21,.45)] hover:bg-[var(--terra-dk)]">
              <Store className="h-[21px] w-[21px]" />Seja um Lojista
            </a>
          </nav>

          {/* menu mobile */}
          <details className="relative xl:hidden">
            <summary aria-label="Menu" className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg bg-[#FBF1E5]/90 text-[var(--olive-ink)] ring-1 ring-[#D9C6A6] md:mt-4">
              <svg viewBox="0 0 24 24" className="ic-open h-6 w-6" {...stroke} strokeWidth={2} aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              <svg viewBox="0 0 24 24" className="ic-close h-6 w-6" {...stroke} strokeWidth={2} aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </summary>
            <nav aria-label="Menu" className="absolute right-0 top-[calc(100%+10px)] z-30 w-[min(84vw,320px)] rounded-xl border border-[var(--line)] bg-[var(--card)] p-2 shadow-[0_18px_40px_-16px_rgba(70,45,15,.45)]">
              <ul className="grid grid-cols-2 gap-x-1">
                {[...menu.slice(0, 5), ...menuExtra, ...menu.slice(5)].map((m) => (
                  <li key={m.label}><a href={m.href} className="block rounded-lg px-3 py-[11px] text-[15px] font-semibold uppercase tracking-[0.02em] text-[var(--nav)] hover:bg-[var(--cream-2)]">{m.label}</a></li>
                ))}
                <li className="col-span-2"><a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Trabalhe Conosco")}`} className="block rounded-lg px-3 py-[11px] text-[15px] font-semibold uppercase tracking-[0.02em] text-[var(--nav)] hover:bg-[var(--cream-2)]">Trabalhe Conosco</a></li>
              </ul>
              <a href={wa("Olá! Quero ser lojista Sabor da Mama.")} target="_blank" rel="noreferrer" className="btn mt-1 flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--terra)] text-[15px] font-semibold uppercase tracking-[0.02em] text-white">
                <Store className="h-5 w-5" />Seja um Lojista
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="relative border-b border-[var(--hero-line)] md:-mt-[60px] xl:-mt-[33px]" aria-labelledby="hero-title">
          <div className="relative mx-auto max-w-[1440px] md:h-[500px] xl:h-[540px]">
            <div className="relative z-10 px-[var(--gutter)] pb-8 pt-8 md:pt-[148px] xl:pl-[104px] xl:pt-[64px]">
              <h1 id="hero-title" className="serif text-[clamp(50px,6.7vw,96px)] font-[640] leading-[0.85] tracking-[-0.015em] text-[var(--terra)]">
                Feito com<br />carinho de<br /><em className="font-[640] italic">uma mãe</em>
              </h1>
              <p className="mt-5 max-w-[340px] text-[20px] font-medium leading-[1.25] text-[var(--olive-text)] md:max-w-[290px] md:text-[22px] lg:max-w-[330px] lg:text-[24px] xl:mt-8 xl:max-w-[360px] xl:text-[26px]">
                Mais de 16 anos levando sabor caseiro à sua mesa
              </p>
              <a href="#produtos" className="btn cta cta-lg cta-mustard caps mt-6 xl:mt-8">
                <Sprout className="h-[26px] w-[26px]" />Veja nosso catálogo
              </a>
            </div>
            <div className="hero-img relative -mt-8 h-[250px] w-full md:absolute md:inset-y-0 md:left-[30%] md:right-0 md:mt-0 md:h-auto md:w-auto lg:left-[22%] xl:left-[15%]">
              <img src="/assets/hero.webp" alt="Farofa, Sal de Parrilla, Alho Triturado, Ketchup e Molho Árabe Sabor da Mama sobre mesa rústica de madeira" width={1400} height={792} fetchPriority="high" className="h-full w-full object-cover object-[78%_70%] md:object-[50%_74%]" />
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="sec scroll-mt-4" aria-labelledby="produtos-title">
          <div className="wrap flex flex-col items-center">
            <div className="flex items-center gap-[10px] md:gap-5">
              <Sprig className="h-[26px] w-[26px] text-[var(--mustard)] md:h-10 md:w-10" flip />
              <h2 id="produtos-title" className="serif whitespace-nowrap text-[38px] font-semibold leading-none text-[var(--olive-ink)] md:text-[56px]">Nossos produtos</h2>
              <Sprig className="h-[26px] w-[26px] text-[var(--mustard)] md:h-10 md:w-10" />
            </div>
            <div className="mt-3 flex w-[min(100%,456px)] items-center gap-2" aria-hidden="true">
              <span className="h-px flex-1 bg-[var(--mustard)]" />
              <Heart className="h-[14px] w-[14px] text-[var(--orn)]" />
              <span className="h-px flex-1 bg-[var(--mustard)]" />
            </div>
          </div>

          <ul className="strip mx-auto mt-8 flex max-w-[1440px] snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4 md:mt-12 md:grid md:grid-cols-6 md:gap-6 md:overflow-visible md:pb-0 xl:grid-cols-5 xl:gap-5 min-[1400px]:gap-6">
            {produtos.map((p) => (
              <li key={p.nome} className="lift zoom flex w-[70vw] max-w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)] md:col-span-2 md:w-auto md:max-w-none md:[&:nth-child(4)]:col-start-2 xl:col-span-1 xl:[&:nth-child(4)]:col-start-auto">
                <div className="aspect-square overflow-hidden border-b border-[var(--line)]">
                  <img src={p.img} alt={`${p.nome} Sabor da Mama`} width={1000} height={1000} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col items-center p-5 text-center md:px-4 min-[1400px]:px-5">
                  <h3 className="serif text-[26px] font-semibold leading-[1.15] text-[var(--olive-ink)]">{p.nome}</h3>
                  <p className="mt-2 text-[15px] leading-[1.45] text-[var(--brown)]">{p.txt}</p>
                  <span className="mt-auto block w-[112px] pt-4" aria-hidden="true"><span className="block h-px bg-[var(--mustard)]" /></span>
                  <p className="mt-3 flex items-center justify-center gap-2 text-[15px] text-[var(--ink-dk)] md:text-[14px] min-[1400px]:gap-[10px] min-[1400px]:text-[15px]">
                    <ProdIcon name={p.icon} className="h-[26px] w-[26px] shrink-0 min-[1400px]:h-7 min-[1400px]:w-7" /><span className="text-left">{p.tag}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* RECEITAS */}
        <section id="receitas" className="scroll-mt-4 bg-[var(--cream-2)]" aria-labelledby="receitas-title">
          <div className="wrap sec grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)_auto] lg:items-center lg:gap-0">
            <div className="flex gap-4">
              <Whisk className="hidden w-[88px] shrink-0 self-start md:block" />
              <div>
                <h2 id="receitas-title" className="serif text-[38px] font-semibold leading-[0.95] text-[var(--olive-ink)] md:text-[48px] xl:text-[56px]">
                  Receitas<br /><em className="font-semibold italic text-[var(--terra)]">da Mama</em>
                </h2>
                <p className="mt-4 max-w-[240px] text-[18px] font-medium leading-[1.4] text-[var(--ink-dk)]">Inspiração e sabor para momentos especiais.</p>
                <a href={SITE} target="_blank" rel="noreferrer" className="btn cta cta-mustard caps mt-6">
                  <Book className="h-[22px] w-[22px]" />Ver receitas
                </a>
              </div>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:pl-8">
              {receitas.map((r) => (
                <li key={r.titulo}>
                  <a href={SITE} target="_blank" rel="noreferrer" className="zoom group block">
                    <div className="aspect-[16/9] overflow-hidden rounded-xl">
                      <img src={r.img} alt={r.alt} width={1000} height={753} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="serif mt-4 text-[22px] font-semibold leading-tight text-[var(--ink-dk)] transition-colors duration-200 group-hover:text-[var(--terra)]">{r.titulo}</h3>
                    <span className="mt-1 flex items-center gap-2 text-[15px] text-[var(--ink-dk)]"><Heart className="pop h-[18px] w-[18px] text-[var(--terra)]" />Ver receita</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={SITE} target="_blank" rel="noreferrer" aria-label="Mais receitas no site da Sabor da Mama" className="btn hidden h-11 w-11 items-center justify-center self-center rounded-full bg-[var(--mustard)] text-[var(--mustard-ink)] shadow-[var(--sh-btn)] hover:bg-[var(--mustard-dk)] lg:mb-[72px] lg:ml-8 lg:flex">
              <Chevron className="nudge h-5 w-5" />
            </a>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="on-dark relative overflow-hidden bg-[var(--band)] text-white" aria-label="Depoimentos de clientes">
          <Branch className="pointer-events-none absolute left-[18px] top-2 hidden h-[190px] w-[114px] text-[var(--branch)] opacity-80 md:block" />
          <Branch className="pointer-events-none absolute -bottom-4 right-[14px] hidden h-[200px] w-[120px] -scale-x-100 text-[var(--branch)] opacity-80 md:block" />
          <div className="wrap relative">
            <div className="mx-auto grid max-w-[1104px] items-center gap-8 py-14 md:grid-cols-[168px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[168px_minmax(0,1fr)_248px] lg:gap-x-14">
              <div className="mx-auto h-24 w-24 rounded-full border-[3px] border-[var(--sand)] md:h-[168px] md:w-[168px]">
                <QuoteAvatar className="h-full w-full" />
              </div>
              <figure>
                <blockquote>
                  <p className="serif flex items-start gap-4 text-[30px] font-semibold italic leading-[1.1] text-[var(--on-band)] [text-wrap:balance] md:text-[32px] xl:text-[40px]">
                    <svg viewBox="0 0 32 26" className="mt-[6px] h-5 w-[26px] shrink-0 text-[var(--sand)]" fill="currentColor" aria-hidden="true"><path d="M0 26V15C0 6.6 4.2 1.6 12 0l1.6 3.8C9 5.4 6.8 8.4 6.6 12.4H13V26zm18 0V15c0-8.4 4.2-13.4 12-15l1.6 3.8c-4.6 1.6-6.8 4.6-7 8.6H31V26z" /></svg>
                    Virei fã e não troco por nada!
                  </p>
                  <p className="mt-3 max-w-[460px] text-[18px] leading-[1.5] text-[var(--on-band)] md:pl-[42px]">Quando eu comprei não imaginava que era tão bom assim. Foi uma surpresa muito agradável.</p>
                </blockquote>
                <figcaption className="mt-4 text-[16px] text-[var(--mustard-lt)] md:pl-[42px]">– Dona Marlene <span className="text-[var(--sand)]">· comprou Sal de Parrilla</span></figcaption>
              </figure>
              <figure className="relative mx-auto h-[205px] w-[248px] md:col-span-2 lg:col-span-1">
                <DrawnHeart className="pointer-events-none absolute inset-0 h-full w-full text-[var(--mustard)]" />
                <div className="absolute left-[14px] top-[50px] flex w-[208px] flex-col items-center text-center">
                  <blockquote>
                    <p className="serif text-[20px] font-semibold italic leading-[1.12] text-[var(--on-band)]">Comprei e adorei!<br />A tapioca é<br />muito boa!</p>
                  </blockquote>
                  <figcaption className="mt-2 text-[14px] leading-tight text-[var(--mustard-lt)]">– Dona Lourdes<span className="sr-only">, comprou Tapioca</span></figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* FRANQUIA */}
        <section id="franquia" className="relative z-10 pb-[72px] pt-14 xl:pb-20" aria-labelledby="franquia-title">
          <div className="wrap">
            <div className="relative rounded-2xl border border-[var(--box-line)] bg-[var(--card)] px-5 pb-14 pt-6 shadow-[var(--sh-card)] md:px-8 md:pt-8 xl:px-10 xl:py-10">
              <div className="grid items-center gap-6 md:grid-cols-[260px_minmax(0,1fr)] md:gap-x-8 xl:grid-cols-[260px_minmax(0,1fr)_280px] min-[1400px]:grid-cols-[280px_minmax(0,1fr)_300px_96px]">
                <Storefront className="mx-auto w-[240px] md:mx-0 md:w-full" />
                <div>
                  <h2 id="franquia-title" className="serif text-[38px] font-semibold leading-[0.98] text-[var(--olive-ink)] md:text-[48px] xl:text-[56px]">
                    Seja um Franqueado<br /><em className="text-[44px] font-semibold italic text-[var(--terra)] md:text-[56px] xl:text-[64px]">Sabor da Mama</em>
                  </h2>
                  <p className="mt-4 max-w-[480px] text-[17px] leading-[1.5] text-[var(--ink-dk)]">A Sabor da Mama está crescendo e estamos criando lojas em todo o Brasil. Vamos juntos compartilhar os melhores temperos!</p>
                </div>
                <ul className="grid gap-3 md:col-span-2 md:grid-cols-2 md:gap-x-8 xl:col-span-1 xl:grid-cols-1">
                  {franquia.map((f) => (
                    <li key={f.txt} className="flex items-center gap-3 text-[17px] leading-snug text-[var(--ink-dk)]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--icon-ring)] text-[var(--olive-btn)]"><BulletIcon name={f.icon} className="h-5 w-5" /></span>
                      {f.txt}
                    </li>
                  ))}
                </ul>
                <SprigHearts className="hidden h-[130px] w-[96px] min-[1400px]:block" />
              </div>
              <a href={wa("Olá! Quero ser franqueado Sabor da Mama.")} target="_blank" rel="noreferrer" className="btn cta caps on-dark absolute -bottom-6 left-0 right-0 mx-auto w-fit gap-4 whitespace-nowrap border border-[var(--sand)] bg-[var(--olive-btn)] px-6 text-[var(--on-band)] hover:bg-[var(--olive-btn-dk)] md:left-auto md:right-8 md:mx-0 xl:right-auto xl:left-[calc(100%-320px)] min-[1400px]:left-[calc(100%-468px)]">
                Quero saber mais <Chevron className="nudge h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contato" className="on-dark bg-[var(--olive)] text-[var(--cream)]">
        <div className="wrap grid items-center gap-3 pb-10 pt-12 md:grid-cols-2 md:gap-6 xl:flex xl:justify-between xl:gap-0 xl:py-10">
          <img src="/assets/logo.png" alt="Sabor da Mama Alimentos" width={700} height={200} loading="lazy" className="mb-4 w-[184px] md:mb-0 xl:w-[176px]" />
          <span className="hidden h-12 w-px bg-[var(--hairline-strong)] xl:block" aria-hidden="true" />
          <a href="https://www.google.com/maps/search/?api=1&query=R.+Martini,+375+-+Vila+Jau,+Po%C3%A1+-+SP" target="_blank" rel="noreferrer" className="ulink flex min-h-11 items-center gap-3 whitespace-nowrap text-[18px] md:text-[19px] xl:text-[20px]">
            <Pin className="h-[26px] w-[26px] shrink-0" />R. Martini, 375 – Vila Jau, Poá/SP
          </a>
          <span className="hidden h-12 w-px bg-[var(--hairline-strong)] xl:block" aria-hidden="true" />
          <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp (11) 94494-6653" className="ulink flex min-h-11 items-center gap-3 whitespace-nowrap text-[18px] md:text-[19px] xl:text-[20px]">
            <WhatsApp className="h-[26px] w-[26px] shrink-0" />(11) 94494-6653
          </a>
          <span className="hidden h-12 w-px bg-[var(--hairline-strong)] xl:block" aria-hidden="true" />
          <ul className="-ml-[10px] flex items-center gap-1 xl:-mr-[10px] xl:ml-0">
            {[
              { n: "Instagram", I: Instagram },
              { n: "Facebook", I: Facebook },
              { n: "LinkedIn", I: LinkedIn },
            ].map(({ n, I }) => (
              <li key={n}><a href={SITE} target="_blank" rel="noreferrer" aria-label={`${n} da Sabor da Mama`} className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"><I className="h-6 w-6" /></a></li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[var(--hairline)] bg-[var(--olive-dk)]">
          <div className="wrap flex flex-col py-2 text-[14px] leading-[1.5] text-[var(--on-olive)] md:flex-row md:items-center md:justify-between">
            <p className="py-3"><span className="block md:inline">© Sabor da Mama Alimentos</span><span className="hidden md:inline"> · </span><span className="block md:inline">Feito com carinho de uma mãe</span></p>
            <p className="flex flex-wrap gap-x-6">
              <a href={`mailto:${EMAIL}`} className="ulink inline-flex min-h-11 items-center">{EMAIL}</a>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Trabalhe Conosco")}`} className="ulink inline-flex min-h-11 items-center">Trabalhe Conosco</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
