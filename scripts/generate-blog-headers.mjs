/**
 * Génère un header éditorial pour chaque article de blog.
 * Style "magazine" cohérent avec le design system Torres Transport.
 *
 * Lance : node scripts/generate-blog-headers.mjs
 *
 * Output : public/blog/header-{slug}.webp (1200x630, format OG image)
 */

import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const FONTS_DIR = join(ROOT, 'node_modules', '@fontsource', 'playfair-display', 'files');
const INTER_DIR = join(ROOT, 'node_modules', '@fontsource', 'inter', 'files');
const OUTPUT_DIR = join(ROOT, 'public', 'blog');

mkdirSync(OUTPUT_DIR, { recursive: true });

// Charge les fichiers de fonts
function loadFont(path) {
  return readFileSync(path);
}

const fonts = [
  {
    name: 'Playfair Display',
    data: loadFont(join(FONTS_DIR, 'playfair-display-latin-400-normal.woff')),
    weight: 400,
    style: 'normal',
  },
  {
    name: 'Playfair Display',
    data: loadFont(join(FONTS_DIR, 'playfair-display-latin-500-normal.woff')),
    weight: 500,
    style: 'normal',
  },
  {
    name: 'Playfair Display',
    data: loadFont(join(FONTS_DIR, 'playfair-display-latin-600-normal.woff')),
    weight: 600,
    style: 'normal',
  },
  {
    name: 'Playfair Display',
    data: loadFont(join(FONTS_DIR, 'playfair-display-latin-400-italic.woff')),
    weight: 400,
    style: 'italic',
  },
  {
    name: 'Inter',
    data: loadFont(join(INTER_DIR, 'inter-latin-400-normal.woff')),
    weight: 400,
    style: 'normal',
  },
  {
    name: 'Inter',
    data: loadFont(join(INTER_DIR, 'inter-latin-600-normal.woff')),
    weight: 600,
    style: 'normal',
  },
];

// Couleurs du design system
const C = {
  cream: '#f5f1ea',
  black: '#0a0a0a',
  gold: '#d4b94a',
  goldLight: '#f5de7e',
  gray: '#737373',
};

// Découpe le titre pour mettre en italique le dernier mot ou groupe
function splitTitle(title) {
  // Pattern : "Premier morceau · DernierMot italique."
  // On italique les 1-2 derniers mots si le titre est long
  const words = title.split(' ');
  if (words.length <= 3) {
    return { main: '', italic: title };
  }
  // Italique = dernier ~30% des mots
  const splitAt = Math.max(words.length - 2, Math.floor(words.length * 0.7));
  return {
    main: words.slice(0, splitAt).join(' '),
    italic: words.slice(splitAt).join(' '),
  };
}

function template({ number, title, category }) {
  const { main, italic } = splitTitle(title);
  const titleLen = title.length;
  let fontSize = 64;
  if (titleLen > 60) fontSize = 54;
  if (titleLen > 80) fontSize = 46;

  // satori-html : éviter le whitespace entre balises (compte comme enfant)
  const mainSpan = main ? `<span>${main}</span>` : '';

  // Note : satori bug → on évite les <div> vides en utilisant des <span> stylés
  const tpl = `<div style="width:1200px;height:630px;background:${C.cream};padding:70px 80px;display:flex;flex-direction:column;justify-content:space-between;font-family:'Inter',sans-serif;position:relative;"><div style="display:flex;justify-content:space-between;align-items:flex-start;width:100%;"><span style="font-family:'Playfair Display';font-weight:600;font-size:30px;color:${C.gold};line-height:1;letter-spacing:-0.02em;">${number}</span><div style="display:flex;flex-direction:column;align-items:flex-end;"><span style="font-family:'Inter';font-weight:600;font-size:13px;color:${C.gold};letter-spacing:0.18em;margin-bottom:10px;">${category.toUpperCase()}</span><span style="display:block;width:60px;height:2px;background:${C.gold};"></span></div></div><div style="display:flex;flex-direction:column;font-family:'Playfair Display';font-weight:500;color:${C.black};font-size:${fontSize}px;line-height:1.08;letter-spacing:-0.025em;max-width:95%;">${mainSpan}<span style="font-style:italic;color:${C.gold};">${italic}</span></div><div style="display:flex;justify-content:space-between;align-items:center;padding-top:30px;border-top:1px solid rgba(10,10,10,0.15);width:100%;"><div style="display:flex;align-items:center;"><span style="font-family:'Playfair Display';font-weight:600;font-size:22px;color:${C.black};letter-spacing:-0.01em;margin-right:18px;">Torres Transport</span><span style="color:${C.gray};font-size:18px;margin-right:18px;">·</span><span style="font-family:'Inter';font-weight:400;font-size:14px;color:${C.gray};letter-spacing:0.05em;">JOURNAL</span></div><span style="font-family:'Inter';font-weight:400;font-size:13px;color:${C.gray};letter-spacing:0.08em;">torrestransport.fr</span></div></div>`;

  return html(tpl);
}

async function generateOne(article, idx) {
  const outPath = join(OUTPUT_DIR, `header-${article.slug}.webp`);

  // Skip si l'image existe déjà, sauf si --force passé en argument
  // Utile pour la GitHub Action qui ne doit générer QUE les nouvelles images
  const force = process.argv.includes('--force');
  if (!force && existsSync(outPath)) {
    return { path: outPath, skipped: true };
  }

  const number = String(idx + 1).padStart(2, '0');
  const markup = template({
    number,
    title: article.title,
    category: article.category,
  });

  if (process.env.DEBUG_HEADERS) {
    console.log(JSON.stringify(markup, null, 2));
  }

  const svg = await satori(markup, { width: 1200, height: 630, fonts });

  await sharp(Buffer.from(svg))
    .webp({ quality: 88, effort: 6 })
    .toFile(outPath);

  return { path: outPath, skipped: false };
}

async function run() {
  // Import dynamique du module ESM avec articles
  const { articles } = await import(`file://${join(ROOT, 'src', 'data', 'articles.js')}`);
  console.log(`📰 ${articles.length} articles à traiter\n`);

  let generated = 0;
  let skipped = 0;
  for (let i = 0; i < articles.length; i++) {
    const a = articles[i];
    try {
      const { path: outPath, skipped: wasSkipped } = await generateOne(a, i);
      const filename = outPath.split(/[\\/]/).pop();
      if (wasSkipped) {
        console.log(`⊝ ${filename} (existant, --force pour régénérer)`);
        skipped++;
      } else {
        console.log(`✓ ${filename}`);
        generated++;
      }
    } catch (e) {
      console.error(`✗ ${a.slug} : ${e.message}`);
    }
  }

  console.log(`\nDone. ${generated} générée(s), ${skipped} existante(s) conservée(s).\n`);
}

run().catch((e) => { console.error(e); process.exit(1); });
