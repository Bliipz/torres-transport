// ==================== DONNÉES PARTAGÉES CALCULATEUR VOLUME ====================
// Pièces et items avec leurs m³ moyens, utilisés par :
//   - /calculateur-volume (page dédiée)
//   - /estimation (onglet "calcul détaillé")
// Volumes moyens vérifiés par 20 ans d'expérience terrain.

export const pieces = [
  {
    id: 'salon',
    nom: 'Salon / Séjour',
    items: [
      { id: 'canape-2p', label: 'Canapé 2 places', m3: 1.2 },
      { id: 'canape-3p', label: 'Canapé 3 places', m3: 1.8 },
      { id: 'canape-angle', label: "Canapé d'angle", m3: 2.5 },
      { id: 'fauteuil', label: 'Fauteuil', m3: 0.7 },
      { id: 'table-basse', label: 'Table basse', m3: 0.4 },
      { id: 'meuble-tv', label: 'Meuble TV', m3: 0.6 },
      { id: 'bibliotheque', label: 'Bibliothèque', m3: 1.2 },
      { id: 'tv-grand-ecran', label: 'TV grand écran (>55")', m3: 0.3 },
      { id: 'tapis', label: 'Tapis roulé', m3: 0.2 },
    ],
  },
  {
    id: 'cuisine',
    nom: 'Cuisine',
    items: [
      { id: 'frigo', label: 'Réfrigérateur', m3: 0.8 },
      { id: 'congelateur', label: 'Congélateur', m3: 0.7 },
      { id: 'lave-vaisselle', label: 'Lave-vaisselle', m3: 0.4 },
      { id: 'four', label: 'Four', m3: 0.3 },
      { id: 'micro-ondes', label: 'Micro-ondes', m3: 0.1 },
      { id: 'table-cuisine', label: 'Table de cuisine', m3: 0.6 },
      { id: 'chaise', label: 'Chaise (par unité)', m3: 0.15 },
      { id: 'meuble-cuisine', label: 'Meuble haut/bas autonome', m3: 0.5 },
      { id: 'petit-electromenager', label: 'Petit électroménager (lot)', m3: 0.3 },
    ],
  },
  {
    id: 'chambre',
    nom: 'Chambre',
    items: [
      { id: 'lit-1p', label: 'Lit 1 place + matelas', m3: 1.5 },
      { id: 'lit-2p', label: 'Lit 2 places + matelas', m3: 2.3 },
      { id: 'sommier', label: 'Sommier', m3: 0.7 },
      { id: 'armoire-2p', label: 'Armoire 2 portes', m3: 1.5 },
      { id: 'armoire-3p', label: 'Armoire 3 portes', m3: 2.2 },
      { id: 'commode', label: 'Commode', m3: 0.6 },
      { id: 'table-chevet', label: 'Table de chevet', m3: 0.15 },
      { id: 'bureau-chambre', label: 'Bureau', m3: 0.8 },
      { id: 'penderie', label: 'Penderie autonome', m3: 1.0 },
    ],
  },
  {
    id: 'salle-bain',
    nom: 'Salle de bain',
    items: [
      { id: 'lave-linge', label: 'Lave-linge', m3: 0.45 },
      { id: 'seche-linge', label: 'Sèche-linge', m3: 0.45 },
      { id: 'meuble-vasque', label: 'Meuble vasque', m3: 0.5 },
      { id: 'colonne-rangement', label: 'Colonne de rangement', m3: 0.4 },
      { id: 'panier-linge', label: 'Panier à linge', m3: 0.1 },
    ],
  },
  {
    id: 'bureau',
    nom: 'Bureau',
    items: [
      { id: 'bureau', label: 'Bureau standard', m3: 0.7 },
      { id: 'chaise-bureau', label: 'Chaise de bureau', m3: 0.3 },
      { id: 'caisson', label: 'Caisson', m3: 0.3 },
      { id: 'etagere', label: 'Étagère', m3: 0.5 },
      { id: 'ecran-pc', label: 'Écran PC', m3: 0.1 },
      { id: 'unite-centrale', label: 'Unité centrale', m3: 0.15 },
    ],
  },
  {
    id: 'exterieur',
    nom: 'Extérieur / Cave / Garage',
    items: [
      { id: 'velo', label: 'Vélo', m3: 0.6 },
      { id: 'velo-electrique', label: 'Vélo électrique', m3: 0.8 },
      { id: 'salon-jardin', label: 'Salon de jardin (lot)', m3: 1.8 },
      { id: 'barbecue', label: 'Barbecue', m3: 0.5 },
      { id: 'tondeuse', label: 'Tondeuse', m3: 0.4 },
      { id: 'outillage', label: 'Caisses outillage (lot)', m3: 0.6 },
      { id: 'echelle', label: 'Échelle', m3: 0.3 },
      { id: 'piano-droit', label: 'Piano droit', m3: 1.5 },
    ],
  },
  {
    id: 'cartons',
    nom: 'Cartons',
    items: [
      { id: 'carton-standard', label: 'Carton standard (par unité)', m3: 0.06 },
      { id: 'carton-livre', label: 'Carton livres/lourd (par unité)', m3: 0.05 },
      { id: 'carton-penderie', label: 'Carton penderie (par unité)', m3: 0.25 },
      { id: 'carton-vaisselle', label: 'Carton vaisselle (par unité)', m3: 0.07 },
    ],
  },
];
