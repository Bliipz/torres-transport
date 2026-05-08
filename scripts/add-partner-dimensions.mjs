// Ajoute width/height/loading sur les <img> partners qui n'en ont pas
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SRC_DIR = join(__dirname, '..', 'src');

// Dimensions partners (lues du dossier public)
const PARTNERS = {
  'centrakor.webp': { w: 505, h: 96 },
  'foir-fouille.svg': { w: 174, h: 53 },
  'locabox.webp': { w: 150, h: 42 },
  'resa-box.webp': { w: 160, h: 72 },
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let totalReplaced = 0;
let filesChanged = 0;

for await (const file of walk(SRC_DIR)) {
  if (!file.endsWith('.astro')) continue;
  const original = await readFile(file, 'utf-8');
  let updated = original;

  for (const [filename, dims] of Object.entries(PARTNERS)) {
    const escapedName = filename.replace(/\./g, '\\.');
    // Pattern : <img src="/partners/centrakor.webp" alt="..." class="..." />
    // qui n'a PAS déjà width
    const regex = new RegExp(
      `(<img\\s+src="/partners/${escapedName}"[^>]*?)(\\s*/?>)`,
      'g'
    );
    updated = updated.replace(regex, (match, before, end) => {
      if (/width=/.test(before)) return match; // déjà fait
      return `${before} width="${dims.w}" height="${dims.h}" loading="lazy" decoding="async"${end}`;
    });
  }

  if (updated !== original) {
    await writeFile(file, updated, 'utf-8');
    filesChanged++;
    const before = (original.match(/<img\s+src="\/partners\//g) || []).length;
    const after = (updated.match(/width="/g) || []).length;
    const rel = file.replace(SRC_DIR, 'src').replace(/\\/g, '/');
    console.log(`  ✅ ${rel}`);
    totalReplaced += before;
  }
}

console.log(`\n📊 ${totalReplaced} <img> partners trouvés dans ${filesChanged} fichier(s)`);
