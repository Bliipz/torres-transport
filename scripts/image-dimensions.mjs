// ============================================================
// Liste les dimensions de chaque image dans public/
// Utilisé pour ajouter width/height sur les <img> et éviter le CLS
// ============================================================

import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

console.log('📐 Dimensions des images du dossier public/\n');

const results = [];
for await (const file of walk(PUBLIC_DIR)) {
  const ext = extname(file).toLowerCase();
  if (!['.webp', '.png', '.jpg', '.jpeg', '.svg'].includes(ext)) continue;

  try {
    const meta = await sharp(file).metadata();
    const rel = file.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
    results.push({
      path: rel,
      width: meta.width,
      height: meta.height,
      ratio: (meta.width / meta.height).toFixed(2),
    });
  } catch (e) {
    // SVG peut échouer
  }
}

// Tri alphabétique
results.sort((a, b) => a.path.localeCompare(b.path));

console.log(
  `${'Image'.padEnd(45)} ${'Width'.padStart(7)} ${'Height'.padStart(7)} ${'Ratio'.padStart(7)}`
);
console.log('-'.repeat(75));
for (const r of results) {
  console.log(
    `${r.path.padEnd(45)} ${String(r.width).padStart(7)} ${String(r.height).padStart(7)} ${r.ratio.padStart(7)}`
  );
}
