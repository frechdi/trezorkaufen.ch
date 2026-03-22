export async function GET() {
  const site = 'https://trezorkaufen.ch';
  const pages = [
    '/',
    '/vergleich',
    '/trezor-safe-5',
    '/trezor-safe-3',
    '/trezor-model-t',
    '/trezor-model-one',
    '/ledger-nano-x',
    '/ledger-nano-s-plus',
    '/bitbox02',
    '/dcent-biometric',
    '/vergleich/trezor-safe-5-vs-ledger-nano-x',
    '/vergleich/trezor-vs-ledger',
    '/vergleich/trezor-safe-5-vs-safe-3',
    '/vergleich/trezor-vs-bitbox02',
    '/ratgeber/trezor-einrichten',
    '/ratgeber/trezor-sicherheit',
    '/ratgeber/gehackte-boersen',
    '/ratgeber/seed-phrase-sichern',
    '/blog',
    '/blog/trezor-safe-5-test-2026',
    '/blog/trezor-firmware-update',
    '/blog/hardware-wallet-anfaenger',
    '/impressum',
    '/datenschutz',
    '/disclaimer',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p === '/' ? 'daily' : p.includes('blog') || p.includes('ratgeber') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p === '/' ? '1.0' : p.includes('blog') || p.includes('ratgeber') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
