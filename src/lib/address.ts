// Validation d'adresse française partagée front/back
// Format reconstitué : "12 rue de la Gare, 74100 Annemasse"

export interface AddressInput {
  rue: string;
  cp: string;
  ville: string;
}

/**
 * Construit l'adresse formatée si les 3 champs sont valides, sinon retourne ''.
 * - rue : ≥ 3 caractères
 * - cp : exactement 5 chiffres (format français)
 * - ville : ≥ 2 caractères
 */
export function buildAddress(rue: string, cp: string, ville: string): string {
  const r = (rue || '').trim();
  const c = (cp || '').trim();
  const v = (ville || '').trim();
  if (r.length < 3 || !/^\d{5}$/.test(c) || v.length < 2) return '';
  return `${r}, ${c} ${v}`;
}

/**
 * Validation détaillée renvoyant la liste des champs manquants/invalides.
 * Utile côté front pour afficher des erreurs précises.
 */
export function validateAddressFields(input: AddressInput): string[] {
  const errors: string[] = [];
  if (!input.rue || input.rue.trim().length < 3) errors.push('rue');
  if (!input.cp || !/^\d{5}$/.test(input.cp.trim())) errors.push('code postal (5 chiffres)');
  if (!input.ville || input.ville.trim().length < 2) errors.push('ville');
  return errors;
}
