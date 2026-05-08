/**
 * Met à jour les chemins d'images des articles pour pointer vers les headers
 * éditoriaux générés automatiquement (header-{slug}.webp).
 *
 * Auto-détecte les slugs depuis articles.js — pas besoin de hardcoder.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, '..', 'src', 'data', 'articles.js');

async function run() {
  const { articles } = await import(`file://${FILE}`);
  const slugs = articles.map((a) => a.slug);
  console.log(`📝 ${slugs.length} articles à traiter\n`);

  let content = readFileSync(FILE, 'utf-8');

  for (const slug of slugs) {
    const re = new RegExp(
      `(slug:\\s*"${slug}"[\\s\\S]{0,30000}?image:\\s*)"[^"]+"`,
      'g'
    );
    const expected = `/blog/header-${slug}.webp`;
    const before = content;
    content = content.replace(re, `$1"${expected}"`);
    if (before === content) {
      console.log(`✗ NOT FOUND: ${slug}`);
    } else if (before.includes(`"${expected}"`) && !before.replace(re, `$1"${expected}"`).includes(`"${expected}"`)) {
      console.log(`= ${slug} (déjà à jour)`);
    } else {
      console.log(`✓ ${slug}`);
    }
  }

  writeFileSync(FILE, content, 'utf-8');
  console.log('\nFichier mis à jour.');
}

run().catch((e) => { console.error(e); process.exit(1); });
