// Constantes partagées entre l'API contact et les composants front
// Source unique de vérité pour les libellés de services et options

export const SERVICE_LABELS: Record<string, string> = {
  demenagement: 'Déménagement',
  transport: 'Transport simple',
  'montage-meubles': 'Montage de meubles',
  manutention: 'Manutention',
  debarras: 'Débarras',
};

export const ASCENSEUR_LABELS: Record<string, string> = {
  aucun: 'Sans ascenseur',
  '2p': 'Ascenseur 2 personnes',
  '4p': 'Ascenseur 4 personnes',
  grand: 'Ascenseur +4 personnes',
};

export const TYPE_LIEU_LABELS: Record<string, string> = {
  appartement: 'Appartement',
  maison: 'Maison',
  local: 'Local commercial',
  bureau: 'Bureau',
};

// Services qui exigent une adresse de départ valide
export const SERVICES_NEED_DEPART = [
  'demenagement',
  'transport',
  'montage-meubles',
  'manutention',
  'debarras',
];

// Services qui exigent en plus une adresse d'arrivée
export const SERVICES_NEED_ARRIVEE = ['demenagement', 'transport'];
