// ============================================================
// Suppression des anciennes images PNG/JPG remplacées par WebP
// Préserve logo.png et fichiers SVG.
// Lance : node scripts/cleanup-old-images.mjs
// ============================================================

import { readdir, stat, unlink, access } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const PRESERVE = [/^logo\./i, /\.svg$/i, /\.webp$/i];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

console.log('🧹 Suppression des anciens .png/.jpg (avec équivalent .webp existant)\n');

let totalFreed = 0;
let count = 0;

for await (const file of walk(PUBLIC_DIR)) {
  const { dir, name, ext, base } = parse(file);
  const lowerExt = ext.toLowerCase();

  if (!['.png', '.jpg', '.jpeg'].includes(lowerExt)) continue;
  if (PRESERVE.some((p) => p.test(base))) continue;

  // Vérifier que le .webp équivalent existe
  const webpPath = join(dir, `${name}.webp`);
  if (!(await fileExists(webpPath))) {
    console.log(`  ⚠️  ${base} — pas de .webp équivalent, fichier conservé`);
    continue;
  }

  const stats = await stat(file);
  await unlink(file);
  totalFreed += stats.size;
  count++;

  console.log(`  🗑️  ${base.padEnd(40)} ${(stats.size / 1024).toFixed(1).padStart(8)} KB libérés`);
}

console.log(`\n✅ ${count} fichiers supprimés`);
console.log(`💾 Espace libéré : ${(totalFreed / 1024 / 1024).toFixed(2)} MB`);
