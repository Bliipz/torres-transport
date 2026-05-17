/**
 * Génère le set complet de favicons à partir de logo-icon.png :
 * - favicon-16/32/48.png + favicon.ico : fond BLANC (Google SERP, onglets)
 * - apple-touch-icon.png (180×180, fond noir : ressort sur écran d'accueil iOS)
 * - icon-192/512.png (PWA, fond noir maskable)
 *
 * Le fond blanc est volontaire pour les favicons web : Google SERP en mode
 * sombre rend les favicons transparents invisibles, et fond noir crée un
 * carré opaque disgracieux.
 *
 * Lance : node scripts/generate-favicons.mjs
 */

import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');
const SRC = join(PUBLIC, 'logo-icon.png');

const BLACK = { r: 10, g: 10, b: 10, alpha: 1 };
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

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
    // Fond BLANC pour favicons web (SERP Google, onglets navigateurs)
    { name: 'favicon-16.png', size: 16, padding: 0.08, bg: WHITE },
    { name: 'favicon-32.png', size: 32, padding: 0.10, bg: WHITE },
    { name: 'favicon-48.png', size: 48, padding: 0.12, bg: WHITE },
    // Fond noir pour apple touch + PWA (s'intègre aux écrans d'accueil sombres)
    { name: 'apple-touch-icon.png', size: 180, padding: 0.18, bg: BLACK },
    { name: 'icon-192.png', size: 192, padding: 0.18, bg: BLACK },
    { name: 'icon-512.png', size: 512, padding: 0.18, bg: BLACK },
  ];

  for (const t of tasks) {
    const out = await fitOnSquare(src, t.size, t.padding, t.bg);
    await sharp(out).toFile(join(PUBLIC, t.name));
    console.log(`✓ ${t.name} (${t.size}×${t.size})`);
  }

  // favicon.ico multi-tailles (16/32/48) sur fond blanc
  // Utilisé par les anciens navigateurs et le SERP Google
  const icoBuffer = await pngToIco([
    join(PUBLIC, 'favicon-16.png'),
    join(PUBLIC, 'favicon-32.png'),
    join(PUBLIC, 'favicon-48.png'),
  ]);
  writeFileSync(join(PUBLIC, 'favicon.ico'), icoBuffer);
  console.log('✓ favicon.ico (multi-size 16/32/48)');

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
  writeFileSync(join(PUBLIC, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('✓ site.webmanifest');

  console.log('\nDone.\n');
}

run().catch((e) => { console.error(e); process.exit(1); });
