/**
 * Optimisation des images flagged par Google PageSpeed
 * - Ludovic.webp : 1478x1536 → 1200x1248 (qualité 80)
 * - hero-banner.webp : 1904x560 → reste mais qualité 72
 * - logo.png → logo.webp à 322x96 (taille affichage retina)
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

const formatKB = (n) => (n / 1024).toFixed(1) + ' KB';

async function processImage(name, processor) {
  const input = join(PUBLIC, name);
  const before = statSync(input).size;
  // Lire le fichier en buffer d'abord pour éviter le lock Windows
  const inputBuffer = readFileSync(input);
  const buffer = await processor(sharp(inputBuffer));
  writeFileSync(input, buffer);
  const after = statSync(input).size;
  const saved = before - after;
  console.log(`✓ ${name}: ${formatKB(before)} → ${formatKB(after)} (économie ${formatKB(saved)}, -${(saved / before * 100).toFixed(0)}%)`);
}

async function main() {
  // 1. Ludovic.webp — resize + recompress
  await processImage('Ludovic.webp', (s) =>
    s.resize({ width: 1200, height: 1248, fit: 'cover', position: 'top' })
     .webp({ quality: 80, effort: 6 })
     .toBuffer()
  );

  // 2. hero-banner.webp — recompress (garder dimensions)
  await processImage('hero-banner.webp', (s) =>
    s.webp({ quality: 72, effort: 6 })
     .toBuffer()
  );

  // 3. logo.png → resize + génération webp
  const logoInput = join(PUBLIC, 'logo.png');
  const logoBefore = statSync(logoInput).size;
  const logoBuffer = readFileSync(logoInput);

  // Resize PNG à 322x96 (taille affichage 2x retina)
  const optimizedPng = await sharp(logoBuffer)
    .resize({ width: 322, height: 96, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 95 })
    .toBuffer();
  writeFileSync(logoInput, optimizedPng);

  // Génère aussi logo.webp pour usage moderne (à partir du PNG optimisé)
  const logoWebp = await sharp(optimizedPng)
    .webp({ quality: 90, effort: 6 })
    .toBuffer();
  writeFileSync(join(PUBLIC, 'logo.webp'), logoWebp);

  const logoAfter = statSync(logoInput).size;
  const logoWebpSize = statSync(join(PUBLIC, 'logo.webp')).size;
  console.log(`✓ logo.png: ${formatKB(logoBefore)} → ${formatKB(logoAfter)} (-${((logoBefore - logoAfter) / logoBefore * 100).toFixed(0)}%)`);
  console.log(`✓ logo.webp (nouveau): ${formatKB(logoWebpSize)}`);

  console.log('\nDone.');
}

main().catch(console.error);
