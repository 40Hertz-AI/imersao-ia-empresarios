// Trava dos downloads no servidor (Vercel Routing Middleware, sem dependências).
// Antes de LIBERA_EM (00:00 de Brasília), /downloads/* responde 403.
// Para liberar: troque LIBERA_EM aqui e em site/index.html (LIBERA_EM), ou apague a data aqui para liberar já.
const LIBERA_EM = '2026-10-27T00:00:00-03:00';

export const config = { matcher: '/downloads/:path*' };

export default function middleware() {
  if (Date.now() >= Date.parse(LIBERA_EM)) return; // segue para o arquivo estático
  return new Response('Material liberado a partir de 27/10/2026. Volte ao portal: https://ia-para-empresarios-v2.vercel.app/', {
    status: 403,
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
  });
}
