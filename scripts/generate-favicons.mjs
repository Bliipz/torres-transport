/**
 * Génère le set complet de favicons à partir de logo-icon.png :
 * - favicon-16.png, favicon-32.png, favicon-48.png (transparent)
 * - apple-touch-icon.png (180×180, fond noir, icône dorée)
 * - icon-192.png, icon-512.png (PWA, fond noir, icône dorée)
 *
 * Lance : node scripts/generate-favicons.mjs
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');
const SRC = join(PUBLIC, 'logo-icon.png');

const BLACK = { r: 10, g: 10, b: 10, alpha: 1 };

async function fitOnSquare(srcBuf, size, padding = 0.18, background = { r: 0, g: 0, b: 0, alpha: 0 }) {
  const inner = Math.round(size * (1 - padding * 2));
  const resized = await sharp(srcBuf)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toBuffer();
}

async function run() {
  const src = await sharp(SRC).ensureAlpha().toBuffer();

  const tasks = [
    // Transparent backgrounds
    { name: 'favicon-16.png', size: 16, padding: 0.06, bg: { r: 0, g: 0, b: 0, alpha: 0 } },
    { name: 'favicon-32.png', size: 32, padding: 0.08, bg: { r: 0, g: 0, b: 0, alpha: 0 } },
    { name: 'favicon-48.png', size: 48, padding: 0.10, bg: { r: 0, g: 0, b: 0, alpha: 0 } },
    // Solid black for apple touch + PWA
    { name: 'apple-touch-icon.png', size: 180, padding: 0.18, bg: BLACK },
    { name: 'icon-192.png', size: 192, padding: 0.18, bg: BLACK },
    { name: 'icon-512.png', size: 512, padding: 0.18, bg: BLACK },
  ];

  for (const t of tasks) {
    const out = await fitOnSquare(src, t.size, t.padding, t.bg);
    await sharp(out).toFile(join(PUBLIC, t.name));
    console.log(`✓ ${t.name} (${t.size}×${t.size})`);
  }

  // Manifest PWA
  const manifest = {
    name: 'Torres Transport',
    short_name: 'Torres Transport',
    description: 'Déménagement, transport et montage de meubles à Annemasse, Ville-la-Grand et toute la Haute-Savoie.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  };
  const { writeFileSync } = await import('fs');
  writeFileSync(join(PUBLIC, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('✓ site.webmanifest');

  console.log('\nDone.\n');
}

run().catch((e) => { console.error(e); process.exit(1); });
