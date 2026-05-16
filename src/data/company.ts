// ============================================================
// SOURCE UNIQUE DE VÉRITÉ - INFOS SOCIÉTÉ TORRES TRANSPORT
// Toute modification (téléphone, adresse, tarif, horaires...) se fait ICI.
// Importer COMPANY depuis ce fichier dans tous les composants/pages.
// ============================================================

export const COMPANY = {
  name: "Torres Transport",
  legalName: "Torres Transport",
  alternateName: "Torres Transport Annemasse",
  founder: "Ludovic Torres",
  foundingDate: "2024",
  slogan: "Une équipe locale. Un savoir-faire qui se transmet.",

  // Contact
  phone: {
    e164: "+33659926814",
    display: "06 59 92 68 14",
    tel: "tel:+33659926814",
  },
  email: {
    contact: "contact@torrestransport.fr",
    devis: "devis@torrestransport.fr",
  },

  // Adresse postale
  address: {
    street: "8 rue Fernand David",
    locality: "Ville-la-Grand",
    postalCode: "74100",
    region: "Haute-Savoie",
    regionCode: "FR-74",
    country: "FR",
    countryName: "France",
    full: "8 rue Fernand David, 74100 Ville-la-Grand",
  },

  // Coordonnées GPS (Ville-la-Grand)
  geo: {
    latitude: 46.1965,
    longitude: 6.2542,
  },

  // Site / réseaux
  url: "https://torrestransport.fr",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61555592171592",
  },

  // Identifiants légaux
  legal: {
    siret: "528 686 330 00051",
    vat: "FR71528686330",
    iso6523: "0009:528686330",
  },

  // Horaires
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
    display: "Lundi-Samedi, 8h-19h",
  },

  // Tarification
  pricing: {
    perCubicMeter: 47.5,
    perCubicMeterDisplay: "47,50 €/m³",
    transportPerCubicMeter: 30.9,
    transportPerCubicMeterDisplay: "30,90 €/m³",
    paymentAccepted: "Espèces, Virement bancaire, Chèque",
    currency: "EUR",
    priceRange: "€€",
  },

  // Expérience / réputation (chiffres affichés un peu partout)
  stats: {
    yearsOfExperience: 20,
  },
} as const;

export type Company = typeof COMPANY;
