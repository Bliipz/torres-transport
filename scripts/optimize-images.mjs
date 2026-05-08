// ============================================================
// Script d'optimisation d'images PNG/JPG → WebP
// Lance : node scripts/optimize-images.mjs
// ============================================================

import sharp from 'sharp';
import { readdir, stat, unlink } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Quality par défaut (82 = sweet spot WebP : 70% plus léger, qualité visuelle quasi identique)
const WEBP_QUALITY = 82;
const MAX_WIDTH = 1920;

// Fichiers à NE PAS toucher (logos, icônes)
const SKIP_PATTERNS = [/^logo\./i, /\.svg$/i, /\.webp$/i];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

function shouldSkip(filename) {
  return SKIP_PATTERNS.some((p) => p.test(filename));
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function convert(inputPath) {
  const { dir, name, ext } = parse(inputPath);
  const lowerExt = ext.toLowerCase();

  if (!['.png', '.jpg', '.jpeg'].includes(lowerExt)) return null;
  if (shouldSkip(parse(inputPath).base)) return null;

  const outputPath = join(dir, `${name}.webp`);
  const inputStat = await stat(inputPath);

  // Resize si > MAX_WIDTH, puis convertir en WebP
  const meta = await sharp(inputPath).metadata();
  const pipeline = sharp(inputPath);

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(outputPath);

  const outputStat = await stat(outputPath);
  const saving = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);

  return {
    input: inputPath.replace(PUBLIC_DIR, '/public'),
    output: outputPath.replace(PUBLIC_DIR, '/public'),
    inSize: inputStat.size,
    outSize: outputStat.size,
    saving: `${saving}%`,
  };
}

console.log('🖼️  Optimisation des images PNG/JPG → WebP\n');
console.log(`Dossier : ${PUBLIC_DIR}`);
console.log(`Qualité WebP : ${WEBP_QUALITY}, largeur max : ${MAX_WIDTH}px\n`);

const results = [];
for await (const file of walk(PUBLIC_DIR)) {
  const r = await convert(file);
  if (r) results.push(r);
}

if (results.length === 0) {
  console.log('Aucune image à optimiser.');
  process.exit(0);
}

console.log('='.repeat(80));
console.log(
  `${'Fichier'.padEnd(45)} ${'Avant'.padStart(11)} ${'Après'.padStart(11)} ${'Gain'.padStart(7)}`
);
console.log('-'.repeat(80));

let totalIn = 0;
let totalOut = 0;
for (const r of results) {
  totalIn += r.inSize;
  totalOut += r.outSize;
  const filename = r.input.split('\\').pop().split('/').pop();
  console.log(
    `${filename.padEnd(45)} ${formatBytes(r.inSize).padStart(11)} ${formatBytes(r.outSize).padStart(11)} ${r.saving.padStart(7)}`
  );
}

console.log('-'.repeat(80));
console.log(
  `${'TOTAL'.padEnd(45)} ${formatBytes(totalIn).padStart(11)} ${formatBytes(totalOut).padStart(11)} ${`${((1 - totalOut / totalIn) * 100).toFixed(1)}%`.padStart(7)}`
);
console.log('='.repeat(80));
console.log(`\n✅ ${results.length} images converties en WebP`);
console.log(`💾 Économie totale : ${formatBytes(totalIn - totalOut)}`);
console.log(`\n💡 Les fichiers .png/.jpg originaux sont conservés. Tu peux les supprimer après avoir mis à jour le code.`);
