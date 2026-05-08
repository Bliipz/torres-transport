// ============================================================
// Migration des références d'images : .png/.jpg → .webp
// Préserve logo.png (volontairement non converti)
// Lance : node scripts/migrate-image-refs.mjs
// ============================================================

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SRC_DIR = join(__dirname, '..', 'src');

// Extensions à traiter
const FILE_EXTS = ['.astro', '.js', '.ts', '.mjs', '.css'];

// Fichiers à PRÉSERVER (ne pas migrer)
const PRESERVE = ['/logo.png'];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

function migrate(content) {
  // On regarde chaque référence /xxx.png ou /xxx.jpg ou /xxx.jpeg
  // et on remplace par .webp, sauf si c'est logo.png ou un fichier SVG
  return content.replace(
    /(\/[a-zA-Z0-9_\-\/]+)\.(png|jpe?g)/g,
    (match, path, ext) => {
      // Garde logo.png intact
      if (PRESERVE.some((p) => match.includes(p))) return match;
      // Remplace par .webp
      return `${path}.webp`;
    }
  );
}

console.log('🔄 Migration des références d\'images dans le code source\n');

let totalReplaced = 0;
let filesChanged = 0;

for await (const file of walk(SRC_DIR)) {
  if (!FILE_EXTS.some((ext) => file.endsWith(ext))) continue;

  const original = await readFile(file, 'utf-8');
  const updated = migrate(original);

  if (original !== updated) {
    // Compter les remplacements pour le rapport
    const before = (original.match(/\.(png|jpe?g)/g) || []).length;
    const after = (updated.match(/\.(png|jpe?g)/g) || []).length;
    const replaced = before - after;

    await writeFile(file, updated, 'utf-8');
    filesChanged++;
    totalReplaced += replaced;

    const relPath = file.replace(SRC_DIR, 'src').replace(/\\/g, '/');
    console.log(`  ✅ ${relPath} — ${replaced} remplacement${replaced > 1 ? 's' : ''}`);
  }
}

console.log(`\n📊 Total : ${totalReplaced} références migrées dans ${filesChanged} fichier(s)`);
console.log(`💡 logo.png et fichiers .svg sont préservés.`);
