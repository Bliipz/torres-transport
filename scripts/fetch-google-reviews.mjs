/**
 * Récupère les avis Google de Torres Transport depuis Google Places API
 * et les sauvegarde dans src/data/google-reviews.json.
 *
 * Usage :
 *   1. Obtenir une clé API Google Places (Google Cloud Console → Places API enabled)
 *   2. Définir GOOGLE_PLACES_API_KEY dans l'env (ou .env.local à la racine)
 *   3. (Optionnel) GOOGLE_PLACE_ID pour skipper la recherche par nom
 *   4. Lancer : node scripts/fetch-google-reviews.mjs
 *
 * Le script peut être ajouté à un cron (Vercel cron, GitHub Action) pour
 * rafraîchir périodiquement les avis.
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'src', 'data', 'google-reviews.json');
const ENV_FILE = join(__dirname, '..', '.env.local');

// Charge .env.local si présent (sans dépendance dotenv)
function loadEnv() {
  if (!existsSync(ENV_FILE)) return;
  const content = readFileSync(ENV_FILE, 'utf-8');
  for (const line of content.split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) {
      const [, key, val] = m;
      const cleaned = val.replace(/^['"]|['"]$/g, '');
      if (!process.env[key]) process.env[key] = cleaned;
    }
  }
}

loadEnv();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const QUERY = process.env.GOOGLE_PLACES_QUERY || 'Torres Transport Déménageurs Annemasse';
let PLACE_ID = process.env.GOOGLE_PLACE_ID || null;

if (!API_KEY) {
  console.error('\n❌ GOOGLE_PLACES_API_KEY manquante.');
  console.error('   Crée-la dans Google Cloud Console (Places API enabled),');
  console.error('   puis ajoute-la dans .env.local :\n');
  console.error('   GOOGLE_PLACES_API_KEY=AIza...\n');
  process.exit(1);
}

async function findPlaceId() {
  if (PLACE_ID) return PLACE_ID;
  console.log(`🔍 Recherche du Place ID pour : "${QUERY}"`);
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(QUERY)}&inputtype=textquery&fields=place_id,name,formatted_address&language=fr&key=${API_KEY}`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.status !== 'OK' || !json.candidates?.length) {
    throw new Error(`Place introuvable. Status=${json.status} ${json.error_message || ''}`);
  }
  const c = json.candidates[0];
  console.log(`   → ${c.name} (${c.formatted_address})`);
  console.log(`   → place_id: ${c.place_id}`);
  return c.place_id;
}

async function fetchReviews(placeId) {
  console.log(`📥 Récupération des avis...`);
  const fields = 'name,rating,user_ratings_total,reviews,url';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&language=fr&reviews_no_translations=true&reviews_sort=newest&key=${API_KEY}`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.status !== 'OK') {
    throw new Error(`Détails introuvables. Status=${json.status} ${json.error_message || ''}`);
  }
  return json.result;
}

async function run() {
  try {
    PLACE_ID = await findPlaceId();
    const result = await fetchReviews(PLACE_ID);

    const data = {
      place_id: PLACE_ID,
      name: result.name,
      rating: result.rating ?? null,
      user_ratings_total: result.user_ratings_total ?? 0,
      url: result.url,
      reviews: (result.reviews || []).map((r) => ({
        author_name: r.author_name,
        author_url: r.author_url,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        time: r.time,
        text: r.text,
      })),
      fetched_at: new Date().toISOString(),
    };

    writeFileSync(OUTPUT, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`\n✅ Sauvegardé dans ${OUTPUT}`);
    console.log(`   ${data.reviews.length} avis · note moyenne ${data.rating} (${data.user_ratings_total} avis au total)\n`);
  } catch (e) {
    console.error('\n❌ Erreur :', e.message, '\n');
    process.exit(1);
  }
}

run();
