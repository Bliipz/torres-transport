// ==================== DONNÉES VILLES, SEO LOCAL ====================
// Chaque ville génère une page /demenagement-[slug] optimisée SEO local.
// Plus de villes = plus de mots-clés capturés sur Google.

export const cities = {
  // ------------------------------------------------------------------
  // ANNEMASSE, bassin commercial principal (74100)
  // ------------------------------------------------------------------
  annemasse: {
    slug: 'annemasse',
    nom: 'Annemasse',
    codePostal: '74100',
    departement: 'Haute-Savoie',
    geo: { lat: 46.193, lng: 6.236 },
    distanceKm: 2,
    population: '36 000 habitants',
    bannier: '/banner-demenagement.webp',

    titreH1: 'Déménagement à Annemasse, Service complet en Haute-Savoie',
    metaTitle: "Déménageur Annemasse (74) | Devis Gratuit Torres Transport",
    metaDescription:
      "Déménageur professionnel à Annemasse (74100). Service complet de déménagement résidentiel et professionnel par une équipe expérimentée. Devis gratuit en 24h. 20 ans d'expertise locale.",
    keywords:
      'déménageur Annemasse, déménagement Annemasse, entreprise déménagement Annemasse 74, déménageur 74100, prix déménagement Annemasse',

    intro: `Vous cherchez un <strong>déménageur professionnel à Annemasse</strong> ? Torres Transport vous accompagne dans tous vos projets de déménagement résidentiel et professionnel sur Annemasse et son bassin. Forte de <strong>20 ans d'expérience</strong> dans le transport et la logistique en Haute-Savoie, notre équipe maîtrise parfaitement les spécificités locales : circulation dense en centre-ville, zones piétonnes, accès aux résidences hautes du Brouaz ou du Perrier, contraintes de stationnement aux abords du marché du Salève.`,

    pourquoiNous: `Annemasse est une <strong>ville dynamique</strong> de 36 000 habitants en pleine expansion, avec des spécificités logistiques que seul un déménageur local connaît vraiment. Les nombreuses résidences neuves du quartier Chablais-Parc ou de la Zone d'Activités Mont-Blanc imposent une organisation millimétrée. Notre équipe basée à <strong>Ville-la-Grand</strong>, à seulement 2 km du centre d'Annemasse, intervient sous 24h. Nous connaissons chaque rue, chaque accès difficile, chaque parking utilisable pour stationner un camion sans gêner.`,

    quartiers: [
      'Centre-ville',
      'Vétraz-Monthoux (limitrophe)',
      'Chablais-Parc',
      'Le Perrier',
      'Le Brouaz',
      'Romagny',
      'Quartier de la gare',
      'Zone Mont-Blanc',
      'Livron',
      'Ile-Verte',
    ],

    tarifs: {
      studio: 'À partir de 350 €',
      f2f3: 'À partir de 750 €',
      maison: 'À partir de 1 500 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
      { nom: 'Vétraz-Monthoux', slug: 'vetraz-monthoux' },
      { nom: 'Étrembières', slug: 'etrembieres' },
      { nom: 'Ambilly', slug: 'ambilly' },
      { nom: 'Saint-Julien-en-Genevois', slug: 'saint-julien-en-genevois' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Annemasse ?',
        reponse:
          "Le prix d'un déménagement à Annemasse dépend du volume à transporter, de la distance, des étages et des prestations choisies. Comptez à partir de 350 € pour un studio, 750 € pour un F2/F3, et 1 500 € pour une maison. Torres Transport établit chaque devis sur-mesure, sans frais cachés, après un déplacement gratuit pour évaluer votre volume.",
      },
      {
        question: 'En combien de temps intervenez-vous à Annemasse ?',
        reponse:
          "Notre base étant à Ville-la-Grand, nous intervenons sur Annemasse en moins de 24 heures pour les urgences. Pour les déménagements planifiés, nous recommandons une réservation 2 à 4 semaines à l'avance, particulièrement entre juin et septembre où la demande est forte sur le bassin annemassien.",
      },
      {
        question: 'Quels services proposez-vous à Annemasse ?',
        reponse:
          "Nous proposons 5 prestations à Annemasse : déménagement complet, transport de marchandises, montage de meubles (IKEA, Conforama, BUT), manutention et débarras. Chaque service est réalisé par notre équipe directement, sans sous-traitance.",
      },
      {
        question: 'Le stationnement à Annemasse est compliqué : comment gérez-vous ?',
        reponse:
          "Nous connaissons parfaitement les contraintes de stationnement à Annemasse, notamment en centre-ville et autour de la gare. Si nécessaire, nous pouvons faire la demande d'autorisation auprès de la mairie. Nos camions sont dimensionnés pour passer dans les rues étroites du centre.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // VILLE-LA-GRAND, siège de Torres Transport (74100)
  // ------------------------------------------------------------------
  'ville-la-grand': {
    slug: 'ville-la-grand',
    nom: 'Ville-la-Grand',
    codePostal: '74100',
    departement: 'Haute-Savoie',
    geo: { lat: 46.196, lng: 6.254 },
    distanceKm: 0,
    population: '8 500 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménageur à Ville-la-Grand (74100), Torres Transport, votre voisin',
    metaTitle: "Déménageur Ville-la-Grand (74) | Torres Transport",
    metaDescription:
      "Déménageur basé à Ville-la-Grand (74100) en Haute-Savoie. Intervention immédiate dans toute la commune. 20 ans d'expérience, devis gratuit en 24h. Torres Transport, votre voisin.",
    keywords:
      'déménageur Ville-la-Grand, déménagement Ville-la-Grand 74100, entreprise déménagement Ville-la-Grand, transport meubles Ville-la-Grand',

    intro: `<strong>Torres Transport est basé à Ville-la-Grand</strong>, votre commune. Nous sommes votre voisin déménageur, à quelques minutes de chez vous quel que soit votre quartier. Cette proximité est notre force : pas de frais de déplacement excessifs, intervention rapide, et une parfaite connaissance des spécificités de Ville-la-Grand, du quartier des Voirons aux nouvelles résidences proches d'Eaux-Belles. Avec <strong>20 ans d'expérience</strong>, nous avons accompagné de nombreuses familles et entreprises ville-la-grandoises dans leurs projets.`,

    pourquoiNous: `Ville-la-Grand est une commune de 8 500 habitants directement collée à Annemasse, qui connaît une <strong>forte croissance résidentielle</strong> avec de nouveaux programmes immobiliers récents. Que vous emménagiez dans une maison ancienne du centre, dans une résidence neuve, ou que vous quittiez la commune, notre équipe locale s'adapte à votre situation. Nous connaissons les particularités d'accès à chaque rue, et nous sommes capables d'intervenir <strong>le jour-même en cas d'urgence</strong>.`,

    quartiers: [
      'Centre-bourg',
      'Eaux-Belles',
      'Les Voirons',
      'Le Crêt',
      'La Grangette',
      'Les Esserts',
      'Champ-Magnin',
    ],

    tarifs: {
      studio: 'À partir de 320 €',
      f2f3: 'À partir de 690 €',
      maison: 'À partir de 1 400 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Saint-Julien-en-Genevois', slug: 'saint-julien-en-genevois' },
    ],

    faq: [
      {
        question: "Vous êtes basés à Ville-la-Grand : quels sont vos délais d'intervention ?",
        reponse:
          "Étant basés directement à Ville-la-Grand, nous pouvons intervenir le jour même pour les urgences, et sous 24h pour les demandes standard. Aucun frais de déplacement supplémentaire n'est appliqué pour les interventions dans la commune.",
      },
      {
        question: 'Quel est le prix moyen d\'un déménagement à Ville-la-Grand ?',
        reponse:
          "Pour un déménagement intra-commune à Ville-la-Grand, comptez à partir de 320 € pour un studio, 690 € pour un F2/F3, et 1 400 € pour une maison. Ces tarifs sont inférieurs à la moyenne du bassin grâce à notre proximité immédiate.",
      },
      {
        question: 'Couvrez-vous tous les quartiers de Ville-la-Grand ?',
        reponse:
          "Oui, nous intervenons dans tous les quartiers de Ville-la-Grand : centre-bourg, Eaux-Belles, Les Voirons, Le Crêt, La Grangette, Champ-Magnin et Les Esserts. Notre connaissance fine du terrain nous permet d'optimiser chaque intervention.",
      },
      {
        question: "Faites-vous aussi du montage de meubles à Ville-la-Grand ?",
        reponse:
          "Absolument. Nous proposons le montage de meubles toutes marques (IKEA, Conforama, BUT, Maison du Monde) à Ville-la-Grand et alentours. Un service très demandé après livraison ou déménagement.",
      },
      {
        question: 'Pouvez-vous me débarrasser de meubles à Ville-la-Grand ?',
        reponse:
          "Oui, notre service débarras intervient à Ville-la-Grand pour vider caves, greniers, garages, appartements ou maisons après succession. Nous trions, recyclons et donnons aux associations locales ce qui peut servir.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // SAINT-JULIEN-EN-GENEVOIS (74160)
  // ------------------------------------------------------------------
  'saint-julien-en-genevois': {
    slug: 'saint-julien-en-genevois',
    nom: 'Saint-Julien-en-Genevois',
    codePostal: '74160',
    departement: 'Haute-Savoie',
    geo: { lat: 46.144, lng: 6.082 },
    distanceKm: 18,
    population: '15 800 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Saint-Julien-en-Genevois (74160) en Haute-Savoie',
    metaTitle: "Déménageur Saint-Julien-en-Genevois | Torres Transport",
    metaDescription:
      "Déménageur professionnel à Saint-Julien-en-Genevois (74160). Service complet, équipe expérimentée, devis gratuit. 20 ans d'expérience en Haute-Savoie.",
    keywords:
      'déménageur Saint-Julien-en-Genevois, déménagement Saint-Julien 74160, entreprise déménagement Saint-Julien, déménageur 74160',

    intro: `<strong>Saint-Julien-en-Genevois</strong> est une ville en pleine mutation, à 18 km d'Annemasse. Vitam, ZAE des Vignes Rouges, centre historique : Torres Transport intervient régulièrement à Saint-Julien pour des déménagements résidentiels et professionnels, en interne ou vers Annemasse et la Haute-Savoie. Notre connaissance des contraintes locales (rues étroites du centre, accès des résidences récentes) fait la différence.`,

    pourquoiNous: `Saint-Julien a une <strong>configuration mixte</strong> : un centre historique avec rues étroites où on intervient avec des camions de 12-15 m³, et des extensions résidentielles plus récentes (ZAE, lotissements) sur des voies larges adaptées aux 30 m³. Notre équipe choisit le bon véhicule selon le quartier. Pour les pics estivaux (juin-septembre), nous recommandons une réservation 3-4 semaines à l'avance.`,

    quartiers: [
      'Centre-ville historique',
      'Quartier de la gare',
      'ZAE des Vignes Rouges',
      'Cervonnex',
      'Therens',
      'Quartier du Crêt',
      'Lathoy',
    ],

    tarifs: {
      studio: 'À partir de 420 €',
      f2f3: 'À partir de 850 €',
      maison: 'À partir de 1 700 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Saint-Julien-en-Genevois ?',
        reponse:
          "Comptez à partir de 420 € pour un studio, 850 € pour un F2/F3 et 1 700 € pour une maison à Saint-Julien-en-Genevois. Le tarif inclut le déplacement depuis notre base de Ville-la-Grand.",
      },
      {
        question: 'Intervenez-vous dans toute la commune de Saint-Julien ?',
        reponse:
          "Oui, dans tous les quartiers : centre historique, quartier de la gare, ZAE des Vignes Rouges, Cervonnex, Therens et alentours. Nous adaptons notre intervention aux contraintes de chaque secteur (rues étroites du centre, accès résidences modernes).",
      },
      {
        question: "Quel est le délai d'intervention à Saint-Julien-en-Genevois ?",
        reponse:
          "Saint-Julien étant à 18 km de notre base, nous intervenons sous 24-48h pour les demandes standard, et nous pouvons réserver une journée complète pour les déménagements importants. Pour les pics estivaux (juin-septembre), réservez 3-4 semaines à l'avance.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // GAILLARD (74240)
  // ------------------------------------------------------------------
  gaillard: {
    slug: 'gaillard',
    nom: 'Gaillard',
    codePostal: '74240',
    departement: 'Haute-Savoie',
    geo: { lat: 46.183, lng: 6.214 },
    distanceKm: 4,
    population: '12 000 habitants',
    bannier: '/banner-demenagement.webp',

    titreH1: 'Déménagement à Gaillard (74240), Service de proximité',
    metaTitle: 'Déménageur Gaillard (74) | Torres Transport',
    metaDescription:
      "Déménageur professionnel à Gaillard (74240), à 4 km de notre base. Intervention rapide pour particuliers et professionnels. Devis gratuit, 20 ans d'expérience.",
    keywords:
      'déménageur Gaillard, déménagement Gaillard 74240, entreprise déménagement Gaillard, déménageur 74240',

    intro: `<strong>Gaillard</strong> est une commune dynamique de 12 000 habitants, située à seulement 4 km de notre base de Ville-la-Grand. Torres Transport intervient quotidiennement à Gaillard pour des déménagements résidentiels et professionnels, que ce soit dans le quartier de la Gare, les résidences neuves de Mon Idée ou le centre historique.`,

    pourquoiNous: `Gaillard a une <strong>pression résidentielle</strong> forte (rotation des locataires, beaucoup de programmes neufs). Notre équipe basée à seulement 5 minutes de route connaît parfaitement les rues de Gaillard et les accès aux résidences récentes du Bois-des-Frères. La proximité immédiate avec notre base limite les frais de déplacement.`,

    quartiers: [
      'Centre-ville',
      'Mon Idée',
      'Bois-des-Frères',
      'Châtelet',
      'Quartier de la Gare',
      'Pré-Vergat',
      'Pré-Bressan',
    ],

    tarifs: {
      studio: 'À partir de 340 €',
      f2f3: 'À partir de 720 €',
      maison: 'À partir de 1 450 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: "Combien coûte un déménagement à Gaillard ?",
        reponse:
          "Pour un déménagement à Gaillard, comptez à partir de 340 € pour un studio, 720 € pour un F2/F3, et 1 450 € pour une maison. Notre proximité (4 km de la base) limite les frais de déplacement.",
      },
      {
        question: 'Quels sont vos délais à Gaillard ?',
        reponse:
          "Étant à 4 km, nous intervenons sous 24h pour les urgences et le jour-même si possible. Pour les déménagements importants, réservation 2 semaines à l'avance recommandée.",
      },
      {
        question: 'Intervenez-vous dans toutes les résidences récentes de Gaillard ?',
        reponse:
          "Oui, nous connaissons les accès et contraintes de toutes les résidences récentes : Bois-des-Frères, Mon Idée, programme du Châtelet. Nos camions sont dimensionnés pour passer dans les parkings souterrains si nécessaire.",
      },
      {
        question: 'Faites-vous du débarras à Gaillard ?',
        reponse:
          "Oui, notre service débarras intervient à Gaillard pour vider caves, garages, appartements après succession ou avant déménagement. Tri sélectif inclus, recyclage et dons aux associations locales.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // THONON-LES-BAINS, bord du lac (74200)
  // ------------------------------------------------------------------
  'thonon-les-bains': {
    slug: 'thonon-les-bains',
    nom: 'Thonon-les-Bains',
    codePostal: '74200',
    departement: 'Haute-Savoie',
    geo: { lat: 46.371, lng: 6.481 },
    distanceKm: 35,
    population: '36 000 habitants',
    bannier: '/banner-blog-hero.webp',

    titreH1: 'Déménagement à Thonon-les-Bains (74200), Chablais',
    metaTitle: 'Déménageur Thonon-les-Bains | Torres Transport',
    metaDescription:
      "Déménageur professionnel à Thonon-les-Bains (74200), sous-préfecture du Chablais. Service complet déménagement, montage, transport. Devis gratuit. 20 ans d'expérience en Haute-Savoie.",
    keywords:
      'déménageur Thonon-les-Bains, déménagement Thonon 74200, déménageur Chablais, transport meubles Thonon, déménageur 74200',

    intro: `<strong>Thonon-les-Bains</strong>, sous-préfecture de Haute-Savoie au cœur du Chablais, est un bassin résidentiel attractif avec ses 36 000 habitants. Torres Transport intervient à Thonon depuis Ville-la-Grand (35 km) pour répondre aux besoins de déménagement de cette région. Nous accompagnons aussi bien les <strong>déménagements internes à Thonon</strong> que les transferts vers/depuis Annemasse et toute la Haute-Savoie.`,

    pourquoiNous: `La <strong>région du Chablais</strong> a ses propres spécificités logistiques : centres-villes anciens aux rues étroites (Rives, Vieux Thonon), nouvelles résidences en périphérie (Concise, Tully), accès parfois difficiles aux propriétés du bord du lac. Notre savoir-faire de 20 ans en Haute-Savoie nous permet de traiter ces particularités sans difficulté.`,

    quartiers: [
      'Centre-ville',
      'Rives',
      'Concise',
      'Tully',
      'Vongy',
      'Marclaz',
      'Quartier de la Gare',
      'Champagne',
    ],

    tarifs: {
      studio: 'À partir de 480 €',
      f2f3: 'À partir de 950 €',
      maison: 'À partir de 1 850 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Évian-les-Bains', slug: 'evian-les-bains' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Thonon-les-Bains ?',
        reponse:
          "Pour un déménagement à Thonon, comptez à partir de 480 € pour un studio, 950 € pour un F2/F3, et 1 850 € pour une maison. La distance (35 km de notre base) est intégrée dans les tarifs.",
      },
      {
        question: "Combien de temps pour un déménagement Thonon-Annemasse ?",
        reponse:
          "Un déménagement Thonon-Annemasse se fait en une journée, deux pour les volumes importants (maison F5+). Le trajet entre les deux villes prend environ 45 minutes via l'autoroute du Chablais.",
      },
      {
        question: 'Intervenez-vous aussi à Évian et alentours ?',
        reponse:
          "Bien sûr. Évian-les-Bains, Publier, Marin, Anthy-sur-Léman, Sciez et tout le Chablais jusqu'à Saint-Gingolph sont dans notre zone d'intervention.",
      },
      {
        question: 'Faites-vous du transport de bateaux ou objets nautiques ?',
        reponse:
          "Pour les petits bateaux et matériel nautique léger, oui. Pour les bateaux plus volumineux nécessitant une remorque spéciale, nous travaillons avec des partenaires spécialisés et coordonnons l'opération.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // ÉVIAN-LES-BAINS, bord du lac (74500)
  // ------------------------------------------------------------------
  'evian-les-bains': {
    slug: 'evian-les-bains',
    nom: 'Évian-les-Bains',
    codePostal: '74500',
    departement: 'Haute-Savoie',
    geo: { lat: 46.402, lng: 6.589 },
    distanceKm: 45,
    population: '9 000 habitants',
    bannier: '/banner-form-contact.webp',

    titreH1: 'Déménagement à Évian-les-Bains (74500), Service personnalisé',
    metaTitle: 'Déménageur Évian-les-Bains | Torres Transport',
    metaDescription:
      "Déménageur à Évian-les-Bains (74500). Service personnalisé pour cette ville thermale au bord du lac. Déménagement résidentiel et de luxe. Devis sous 24h.",
    keywords:
      'déménageur Évian-les-Bains, déménagement Évian 74500, transport meubles Évian, déménageur Chablais',

    intro: `<strong>Évian-les-Bains</strong>, ville thermale au bord du lac, attire une clientèle exigeante : résidences secondaires, propriétés de prestige, professionnels du tourisme. Torres Transport intervient à Évian (45 km de notre base) avec un service <strong>personnalisé adapté à la qualité demandée</strong>. Nous traitons aussi bien les déménagements de villas du quartier Hôtel-de-Ville que les transferts d'appartements en résidence touristique.`,

    pourquoiNous: `Évian a une <strong>particularité logistique</strong> : ses propriétés haut de gamme nécessitent un soin particulier (œuvres d'art, mobilier ancien, équipements luxueux). Notre équipe a l'habitude de gérer le matériel sensible avec emballages renforcés et caisses sur mesure pour les pièces les plus délicates.`,

    quartiers: [
      'Centre-ville',
      'Quartier Hôtel-de-Ville',
      'Pré Curieux',
      'Petite Rive',
      'Grande Rive',
      'Quartier des Sources',
      'Maraîche',
    ],

    tarifs: {
      studio: 'À partir de 520 €',
      f2f3: 'À partir de 1 050 €',
      maison: 'À partir de 2 100 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Thonon-les-Bains', slug: 'thonon-les-bains' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: "Combien coûte un déménagement à Évian-les-Bains ?",
        reponse:
          "Pour un déménagement à Évian, comptez à partir de 520 € pour un studio, 1 050 € pour un F2/F3, et 2 100 € pour une maison. Les déménagements de propriétés de prestige (villas, mobilier de valeur) font l'objet d'un devis personnalisé.",
      },
      {
        question: "Pouvez-vous déménager des œuvres d'art ou objets de valeur ?",
        reponse:
          "Absolument. Pour les œuvres d'art, antiquités, instruments de musique ou objets de luxe, nous utilisons un emballage spécialisé (caisses sur mesure, mousse, film bulle haute densité) et déclarons les valeurs pour l'assurance transport.",
      },
      {
        question: "Intervenez-vous dans les résidences secondaires d'Évian ?",
        reponse:
          "Oui, nous accompagnons régulièrement la mise en place ou le débarras de résidences secondaires à Évian. Service à la carte selon la fréquence d'utilisation.",
      },
      {
        question: 'Délai pour un déménagement Évian-Annemasse ?',
        reponse:
          "Le trajet Évian-Annemasse prend environ 1h. Un déménagement complet se fait sur 1 journée pour un volume standard, 2 jours pour une grande maison ou avec services additionnels (emballage, démontage soigné).",
      },
    ],
  },

  // ------------------------------------------------------------------
  // BONNEVILLE, sous-préfecture (74130)
  // ------------------------------------------------------------------
  bonneville: {
    slug: 'bonneville',
    nom: 'Bonneville',
    codePostal: '74130',
    departement: 'Haute-Savoie',
    geo: { lat: 46.078, lng: 6.408 },
    distanceKm: 25,
    population: '12 500 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Bonneville (74130), Vallée de l\'Arve',
    metaTitle: 'Déménageur Bonneville (74) | Torres Transport',
    metaDescription:
      "Déménageur à Bonneville (74130), sous-préfecture de Haute-Savoie au cœur de la vallée de l'Arve. Service complet déménagement résidentiel et industriel. Devis gratuit.",
    keywords:
      'déménageur Bonneville, déménagement Bonneville 74130, déménageur vallée Arve, transport meubles Bonneville, déménagement Cluses',

    intro: `<strong>Bonneville</strong>, sous-préfecture de Haute-Savoie, est la porte d'entrée de la vallée de l'Arve. Cette ville de 12 500 habitants concentre une <strong>activité industrielle importante</strong> (décolletage, mécanique de précision) et une population résidentielle stable. Torres Transport intervient à Bonneville (25 km de notre base) pour les déménagements résidentiels et le transport pour les entreprises locales.`,

    pourquoiNous: `Bonneville et la vallée de l'Arve ont une <strong>logistique particulière</strong> : axes routiers chargés (A40), zones d'activités étendues (Pré Lacombe, Pernand), proximité immédiate avec les communes industrielles environnantes (Cluses, Marnaz, Scionzier). Nous savons composer avec les contraintes de circulation en heure de pointe et avons l'expérience du transport pour les industries locales (mobilier de bureau, équipements légers, archives).`,

    quartiers: [
      'Centre-ville',
      'Pont-de-l\'Arve',
      'Loex',
      'Le Bouchet',
      'ZA Pré Lacombe',
      'ZA Pernand',
      'Vougy (limitrophe)',
    ],

    tarifs: {
      studio: 'À partir de 430 €',
      f2f3: 'À partir de 870 €',
      maison: 'À partir de 1 700 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annecy', slug: 'annecy' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Bonneville ?',
        reponse:
          "Pour un déménagement à Bonneville, comptez à partir de 430 € pour un studio, 870 € pour un F2/F3, et 1 700 € pour une maison. Tarif intégrant les 25 km de trajet depuis Ville-la-Grand.",
      },
      {
        question: "Faites-vous des transferts d'entreprise dans la vallée de l'Arve ?",
        reponse:
          "Oui, nous accompagnons régulièrement les entreprises de Bonneville et alentours (Cluses, Marnaz, Scionzier) dans leurs transferts de bureaux ou d'ateliers légers. Mobilier de bureau, archives, équipements informatiques.",
      },
      {
        question: "Combien de temps pour un déménagement Bonneville-Annemasse ?",
        reponse:
          "Le trajet prend 30-40 minutes via l'A40. Un déménagement complet se fait en une journée pour un volume standard.",
      },
      {
        question: 'Intervenez-vous à Cluses, Sallanches ou plus loin dans la vallée ?',
        reponse:
          "Oui, nous intervenons jusqu'à Sallanches, Megève et Chamonix sur devis. La distance plus longue augmente le coût mais notre savoir-faire reste le même.",
      },
      {
        question: 'Service débarras à Bonneville ?',
        reponse:
          "Oui, débarras de caves, greniers, appartements et locaux professionnels à Bonneville et alentours. Tri sélectif, recyclage et dons aux associations locales du Faucigny.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // ANNECY, gros bassin (74000)
  // ------------------------------------------------------------------
  annecy: {
    slug: 'annecy',
    nom: 'Annecy',
    codePostal: '74000',
    departement: 'Haute-Savoie',
    geo: { lat: 45.900, lng: 6.129 },
    distanceKm: 45,
    population: '130 000 habitants',
    bannier: '/banner-form-contact.webp',

    titreH1: 'Déménagement à Annecy, Préfecture de Haute-Savoie',
    metaTitle: 'Déménageur Annecy (74) | Torres Transport Haute-Savoie',
    metaDescription:
      "Déménageur professionnel à Annecy (74000). Préfecture de Haute-Savoie, ville en pleine croissance. Service complet déménagement résidentiel et professionnel. Devis gratuit.",
    keywords:
      'déménageur Annecy, déménagement Annecy 74000, entreprise déménagement Annecy, déménageur Haute-Savoie, transport meubles Annecy',

    intro: `<strong>Annecy</strong>, préfecture de Haute-Savoie et "Venise des Alpes", concentre 130 000 habitants et est l'un des bassins économiques les plus dynamiques de France. Torres Transport intervient à Annecy (45 km de notre base) pour répondre à la <strong>forte demande de déménagements</strong> liée à la pression démographique et économique. Nous accompagnons aussi bien les déménagements vers les nouveaux quartiers (Annecy-le-Vieux, Cran-Gevrier) que les transferts entre Annecy et le bassin annemassien.`,

    pourquoiNous: `Annecy a vu son urbanisation exploser ces dernières années avec la fusion des communes (Annecy-le-Vieux, Cran-Gevrier, Meythet, Pringy, Seynod). Cette <strong>"nouvelle Annecy" de 130 000 habitants</strong> a des besoins de déménagement constants : étudiants, jeunes actifs, familles. Notre maîtrise de l'ensemble du département de la Haute-Savoie nous permet de gérer aussi bien les déménagements internes à Annecy que les transferts vers Lyon, Chambéry ou plus loin en France.`,

    quartiers: [
      'Vieille Ville',
      'Annecy-le-Vieux',
      'Cran-Gevrier',
      'Meythet',
      'Pringy',
      'Seynod',
      'Quartier des Romains',
      'Bord du Lac',
      'Carré',
      'Novel',
    ],

    tarifs: {
      studio: 'À partir de 520 €',
      f2f3: 'À partir de 1 050 €',
      maison: 'À partir de 2 100 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Bonneville', slug: 'bonneville' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Annecy ?',
        reponse:
          "Pour un déménagement à Annecy, comptez à partir de 520 € pour un studio, 1 050 € pour un F2/F3, et 2 100 € pour une maison. La distance (45 km de notre base) est intégrée dans les tarifs.",
      },
      {
        question: "Faites-vous Annecy-Annemasse régulièrement ?",
        reponse:
          "Oui, c'est l'un des trajets les plus fréquents. Le déménagement s'effectue généralement en une journée, parfois deux pour les volumes importants. Trajet de 45-50 minutes via l'autoroute A41.",
      },
      {
        question: "Pouvez-vous déménager dans la vieille ville d'Annecy ?",
        reponse:
          "Oui, malgré les contraintes (rues piétonnes, arcades du XVe siècle, parkings éloignés). Nous gérons les autorisations municipales si nécessaire et utilisons des camions adaptés. Prévoir une logistique spécifique pour les heures d'autorisation de livraison.",
      },
      {
        question: "Faites-vous Annecy-Lyon ou autres trajets longue distance ?",
        reponse:
          "Oui, Annecy-Lyon (1h30 via A41/A43) est un trajet fréquent pour notre équipe. Nous intervenons également partout en France. Tarifs sur devis selon volume et destination.",
      },
      {
        question: 'Intervenez-vous aussi à Annecy-le-Vieux et Cran-Gevrier ?',
        reponse:
          "Oui, depuis la fusion des communes en 2017, Annecy-le-Vieux, Cran-Gevrier, Meythet, Pringy et Seynod font partie d'Annecy. Nos prestations couvrent l'ensemble du nouveau territoire communal.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // ÉTREMBIÈRES, sud d'Annemasse (74100)
  // ------------------------------------------------------------------
  'etrembieres': {
    slug: 'etrembieres',
    nom: 'Étrembières',
    codePostal: '74100',
    departement: 'Haute-Savoie',
    geo: { lat: 46.166, lng: 6.226 },
    distanceKm: 3,
    population: '1 900 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Étrembières (74100), au pied du Salève',
    metaTitle: "Déménageur Étrembières (74100) | Torres Transport Annemasse",
    metaDescription:
      "Déménageur professionnel à Étrembières (74100). Pas-de-l'Échelle, ZAC Mont-Blanc, village. Base Ville-la-Grand à 3 km. 20 ans d'expérience. Devis gratuit en 24h.",
    keywords:
      'déménageur Étrembières, déménagement Étrembières 74100, déménageur Pas-de-l\'Échelle, déménagement Salève, déménageur 74100',

    intro: `<strong>Étrembières</strong> est cette petite commune de 1 900 habitants posée au pied du <strong>Mont Salève</strong>, au sud d'Annemasse. Trois entités la composent et ont chacune leur logique de déménagement&nbsp;: le <strong>Pas-de-l'Échelle</strong>, la <strong>ZAC du Mont-Blanc</strong> avec ses immeubles récents et zone commerciale, et le village historique d'Étrembières lui-même. Torres Transport intervient sous 24h depuis Ville-la-Grand (3 km).`,

    pourquoiNous: `La spécificité d'Étrembières, c'est sa <strong>topographie variée</strong> qui change tout en pratique : le Pas-de-l'Échelle est plat et accessible, le village d'Étrembières est en hauteur sur les pentes du Salève (rues étroites, accès parfois compliqués pour les utilitaires &gt;&nbsp;20&nbsp;m³), et la ZAC est aux normes immeubles modernes (parking dédié, ascenseur). Notre équipe connaît ces différences et adapte le matériel selon le quartier. Le téléphérique du Salève, juste à côté, reste un repère évident pour expliquer un trajet à un client.`,

    quartiers: [
      'Pas-de-l\'Échelle',
      'ZAC du Mont-Blanc',
      'Étrembières-village',
      'Plaine de l\'Arve',
      'Sous-le-Salève',
    ],

    tarifs: {
      studio: 'À partir de 380 €',
      f2f3: 'À partir de 780 €',
      maison: 'À partir de 1 550 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Gaillard', slug: 'gaillard' },
    ],

    faq: [
      {
        question: 'Quel est le tarif d\'un déménagement à Étrembières ?',
        reponse:
          "Comptez à partir de 380 € pour un studio, 780 € pour un F2/F3, 1 550 € pour une maison. La proximité de Ville-la-Grand (3 km) permet une intervention sans surcoût kilométrique.",
      },
      {
        question: 'Pouvez-vous déménager dans le village haut d\'Étrembières ?',
        reponse:
          "Oui. Les rues étroites du village haut imposent l'utilisation de camions de 12-15 m³ plutôt que des 30 m³. Pour les volumes importants, on fait des navettes avec relais sur la place du village.",
      },
      {
        question: 'Intervenez-vous dans la ZAC Mont-Blanc ?',
        reponse:
          "Oui, c'est l'un de nos secteurs les plus actifs sur Étrembières. Immeubles récents, ascenseurs adaptés, parkings privés. Idéal pour des déménagements rapides sans contrainte de stationnement.",
      },
      {
        question: 'Quelle est la différence de tarif vs Annemasse ?',
        reponse:
          "Aucune. Étrembières étant à 3 km de notre base, nous appliquons le même tarif qu'Annemasse. Pas de frais de déplacement.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // VÉTRAZ-MONTHOUX, limitrophe direct Annemasse (74100)
  // ------------------------------------------------------------------
  'vetraz-monthoux': {
    slug: 'vetraz-monthoux',
    nom: 'Vétraz-Monthoux',
    codePostal: '74100',
    departement: 'Haute-Savoie',
    geo: { lat: 46.183, lng: 6.276 },
    distanceKm: 3,
    population: '7 400 habitants',
    bannier: '/banner-demenagement.webp',

    titreH1: 'Déménagement à Vétraz-Monthoux (74100), commune voisine d\'Annemasse',
    metaTitle: "Déménageur Vétraz-Monthoux (74100) | Torres Transport",
    metaDescription:
      "Déménageur à Vétraz-Monthoux (74100), 7 400 habitants, limitrophe d'Annemasse. ZAE du Mésa, Le Genevray, quartier Brénaz. Base Ville-la-Grand à 3 km. Devis 24h.",
    keywords:
      'déménageur Vétraz-Monthoux, déménagement Vétraz-Monthoux 74100, déménageur Le Genevray, ZAE Mésa Vétraz, déménagement entre Annemasse Vétraz',

    intro: `<strong>Vétraz-Monthoux</strong> est une commune résidentielle de <strong>7 400 habitants</strong> directement collée à l'est d'Annemasse, et l'une des destinations préférées des familles qui veulent quitter le centre dense d'Annemasse pour une zone pavillonnaire calme. Pour Torres Transport, c'est un <strong>territoire quasi quotidien</strong> : nos camions y passent toutes les semaines pour des déménagements résidentiels, et la ZAE du Mésa concentre quelques transferts d'entreprises.`,

    pourquoiNous: `Vétraz-Monthoux a une particularité : <strong>une grande majorité de pavillons individuels</strong> (Le Genevray, Brénaz, Mésa, Jaillet, Romagny côté Annemasse), donc des accès véhicules plutôt simples, des distances de portage modérées, et peu de problématiques d'ascenseur ou d'étages élevés. C'est l'inverse exact d'Annemasse-centre. La ZAE du Mésa concentre quant à elle des entreprises (BTP, services, garages), où les transferts pro nécessitent une logistique différente : weekend ou nocturne pour ne pas perturber l'activité, manutention de matériel lourd, parfois passages de palettes.`,

    quartiers: [
      'Le Genevray',
      'Brénaz',
      'Mésa (ZAE)',
      'Jaillet',
      'Romagny (limitrophe Annemasse)',
      'Centre village',
    ],

    tarifs: {
      studio: 'À partir de 380 €',
      f2f3: 'À partir de 780 €',
      maison: 'À partir de 1 550 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Cranves-Sales', slug: 'cranves-sales' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Vétraz-Monthoux ?',
        reponse:
          "Tarifs identiques à Annemasse vu la proximité (3 km de notre base) : 380 € pour un studio, 780 € pour un F2/F3, 1 550 € pour une maison. Devis personnalisé pour les pavillons avec gros volumes.",
      },
      {
        question: 'Quelles sont les contraintes de stationnement ?',
        reponse:
          "Vétraz-Monthoux est très facile vs Annemasse-centre : la majorité des biens disposent de parkings privés ou de rues larges. Aucune autorisation mairie nécessaire dans 90% des cas.",
      },
      {
        question: 'Pouvez-vous gérer un transfert d\'entreprise dans la ZAE du Mésa ?',
        reponse:
          "Oui, c'est l'un de nos secteurs sur Vétraz. Pour les transferts pro (BTP, garages, services), nous travaillons en weekend ou nocturne pour ne pas couper l'activité. Manutention matériel lourd et palettes incluses.",
      },
      {
        question: 'Faites-vous Annemasse-Vétraz régulièrement ?',
        reponse:
          "Oui, c'est l'un de nos trajets les plus fréquents. Beaucoup de jeunes familles quittent Annemasse-centre pour des pavillons à Vétraz. Trajet 5-10 minutes, déménagement souvent en demi-journée.",
      },
      {
        question: 'Faites-vous des déménagements pavillon-pavillon dans Vétraz ?',
        reponse:
          "Régulièrement. Les déménagements internes à Vétraz (changement de quartier ou agrandissement de famille) sont notre quotidien. Tarif optimisé puisque le trajet est court : remise possible si volume entier dans le camion sans demi-tour.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CRANVES-SALES, est du bassin annemassien (74380)
  // ------------------------------------------------------------------
  'cranves-sales': {
    slug: 'cranves-sales',
    nom: 'Cranves-Sales',
    codePostal: '74380',
    departement: 'Haute-Savoie',
    geo: { lat: 46.184, lng: 6.318 },
    distanceKm: 5,
    population: '6 500 habitants',
    bannier: '/banner-demenagement.webp',

    titreH1: 'Déménagement à Cranves-Sales (74380), bassin annemassien étendu',
    metaTitle: "Déménageur Cranves-Sales (74380) | Torres Transport",
    metaDescription:
      "Déménageur à Cranves-Sales (74380), 6 500 habitants. Quartiers Mépaillat, Veluz, Borly. Vue Salève. Pavillons et résidentiel. Base Ville-la-Grand à 5 km.",
    keywords:
      'déménageur Cranves-Sales, déménagement Cranves-Sales 74380, déménageur Mépaillat, déménagement Veluz Borly, déménageur 74380',

    intro: `<strong>Cranves-Sales</strong> est une commune résidentielle de <strong>6 500 habitants</strong>, à 5 km de notre base, qui a vu sa population augmenter régulièrement avec l'extension du bassin annemassien. Beaucoup de pavillons individuels et de petits collectifs, vue panoramique sur le Salève, calme garanti. Torres Transport intervient régulièrement à Cranves-Sales pour les <strong>déménagements de jeunes familles</strong> qui s'installent durablement après avoir quitté Annemasse-centre.`,

    pourquoiNous: `Cranves-Sales a la particularité d'être <strong>étalée géographiquement</strong> avec plusieurs hameaux (Mépaillat, Veluz, Laplagne, Borly) qui ne sont pas tous au même niveau. Selon le quartier, les contraintes diffèrent : Mépaillat et Veluz sont plats, Laplagne et Borly sont en altitude. Notre équipe choisit le bon véhicule (12 m³ pour les hameaux étroits, 30 m³ pour les pavillons en plaine) après avoir vu les photos. La connaissance fine de cette commune nous permet d'éviter les erreurs de planning (un camion 30 m³ qui n'arrive pas à tourner dans une rue de hameau, ça arrive aux concurrents).`,

    quartiers: [
      'Mépaillat',
      'Veluz',
      'Laplagne',
      'Borly',
      'Centre village',
    ],

    tarifs: {
      studio: 'À partir de 400 €',
      f2f3: 'À partir de 810 €',
      maison: 'À partir de 1 600 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Vétraz-Monthoux', slug: 'vetraz-monthoux' },
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Bonneville', slug: 'bonneville' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Cranves-Sales ?',
        reponse:
          "Comptez à partir de 400 € pour un studio, 810 € pour un F2/F3, 1 600 € pour une maison. Léger surcoût vs Annemasse à cause de la distance (5 km vs 2 km).",
      },
      {
        question: 'Pouvez-vous accéder aux hameaux en altitude (Borly, Laplagne) ?',
        reponse:
          "Oui, mais avec un véhicule adapté. Pour ces hameaux, nous utilisons des camions de 12-15 m³ plutôt que des 30 m³. Si volume important, navette avec relais en bas du hameau.",
      },
      {
        question: 'Faites-vous des déménagements Cranves-Sales vers Annemasse ?',
        reponse:
          "Régulièrement. C'est même un trajet fréquent quand des seniors quittent leur maison de Cranves pour un appartement à Annemasse, plus pratique pour la mobilité.",
      },
      {
        question: 'Intervenez-vous pour les nouveaux lotissements ?',
        reponse:
          "Oui. Cranves-Sales a vu plusieurs lotissements neufs sortir ces dernières années (côté Mépaillat). Aucune contrainte particulière, accès véhicule prévu dans la conception.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // AMBILLY, commune dense limitrophe Annemasse (74100)
  // ------------------------------------------------------------------
  'ambilly': {
    slug: 'ambilly',
    nom: 'Ambilly',
    codePostal: '74100',
    departement: 'Haute-Savoie',
    geo: { lat: 46.198, lng: 6.244 },
    distanceKm: 2,
    population: '7 000 habitants',
    bannier: '/banner-form-contact.webp',

    titreH1: 'Déménagement à Ambilly (74100), limitrophe Annemasse',
    metaTitle: "Déménageur Ambilly (74100) | Torres Transport",
    metaDescription:
      "Déménageur à Ambilly (74100), 7 000 habitants, limitrophe d'Annemasse. Centre dense, immeubles. Base Ville-la-Grand à 2 km. Devis 24h.",
    keywords:
      'déménageur Ambilly, déménagement Ambilly 74100, déménageur Eaux-Vives, déménagement immeuble Ambilly, déménageur 74100',

    intro: `<strong>Ambilly</strong> est cette petite commune dense de <strong>7 000 habitants</strong> directement collée à Annemasse, à 2 km de notre base. Petit territoire mais forte densité urbaine, beaucoup d'immeubles collectifs et de jeunes actifs. Torres Transport y déménage très régulièrement des familles, des jeunes actifs et quelques transferts d'entreprises.`,

    pourquoiNous: `Ambilly est <strong>très dense</strong> par rapport à sa taille : peu de pavillons, beaucoup d'immeubles collectifs, des quartiers historiques (Centre, Eaux-Vives) et des secteurs plus récents (Mélézins). Cette densité urbaine impose des contraintes&nbsp;: rues étroites en centre, parkings limités, ascenseurs parfois petits. Notre équipe connaît ces particularités et planifie en conséquence : créneaux matinaux pour les rues piétonnes, demande d'autorisation municipale pour le stationnement temporaire si nécessaire.`,

    quartiers: [
      'Centre',
      'Eaux-Vives',
      'Mélézins',
      'Piscine',
      'Quartier de la Mairie',
    ],

    tarifs: {
      studio: 'À partir de 380 €',
      f2f3: 'À partir de 780 €',
      maison: 'À partir de 1 550 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Ambilly ?',
        reponse:
          "Tarifs identiques à Annemasse (2 km de notre base) : 380 € pour un studio, 780 € pour un F2/F3, 1 550 € pour une maison.",
      },
      {
        question: 'Quelles sont les contraintes de stationnement à Ambilly ?',
        reponse:
          "Ambilly-centre est dense : peu de places, rues étroites. Nous demandons l'autorisation municipale pour stationner temporairement si nécessaire. Pour Eaux-Vives et Mélézins, c'est plus simple (parkings d'immeubles).",
      },
      {
        question: 'Pouvez-vous accéder aux résidences avec petits ascenseurs ?',
        reponse:
          "Oui. Pour les immeubles avec ascenseurs étroits (commun en centre Ambilly), nous prévoyons un démontage poussé du mobilier (lits, armoires démontés en pièces) plutôt que de tout passer par les escaliers.",
      },
      {
        question: 'Intervenez-vous le weekend ?',
        reponse:
          "Oui, sur demande. Pas de surcoût weekend chez nous, contrairement à beaucoup de concurrents.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // JUVIGNY, petit village hauteur (74100)
  // ------------------------------------------------------------------
  'juvigny': {
    slug: 'juvigny',
    nom: 'Juvigny',
    codePostal: '74100',
    departement: 'Haute-Savoie',
    geo: { lat: 46.176, lng: 6.328 },
    distanceKm: 6,
    population: '1 300 habitants',
    bannier: '/banner-blog-hero.webp',

    titreH1: 'Déménagement à Juvigny (74100), village calme avec vue Mont-Blanc',
    metaTitle: "Déménageur Juvigny (74100) | Torres Transport",
    metaDescription:
      "Déménageur à Juvigny (74100), petit village de 1 300 habitants. Vue Mont-Blanc. Pavillons et résidentiel calme. Base Ville-la-Grand à 6 km.",
    keywords:
      'déménageur Juvigny, déménagement Juvigny 74100, déménageur Le Bourg La Croisette, déménagement résidentiel Juvigny',

    intro: `<strong>Juvigny</strong>, c'est ce <strong>petit village de 1 300 habitants</strong> perché à 600 m d'altitude, qu'on choisit pour le calme, la vue sur le Mont-Blanc et la sensation d'être à la campagne tout en restant à 10 minutes d'Annemasse. Torres Transport intervient à Juvigny pour des <strong>déménagements de couples qui s'installent</strong> (souvent venus d'Annemasse-centre) et de seniors qui veulent finir leur vie dans un cadre paisible.`,

    pourquoiNous: `Juvigny a deux <strong>spécificités logistiques</strong>&nbsp;: (1) la route d'accès est <strong>en pente avec virages serrés</strong>, donc les très gros camions (30+ m³) doivent prévoir leurs manœuvres ; (2) les hameaux comme Les Côtes ou La Rosière sont sur des chemins étroits où on ne passe qu'avec des véhicules de 15 m³ max. Notre connaissance de cette topographie évite les mauvaises surprises le jour J. Beaucoup de nos clients à Juvigny sont aussi des <strong>retraités ou pré-retraités</strong> : nous adaptons le rythme et appliquons systématiquement notre <strong>remise sénior de 10%</strong> pour les 60+.`,

    quartiers: [
      'Le Bourg',
      'Les Côtes',
      'La Croisette',
      'La Rosière',
      'Sous-le-Mont',
    ],

    tarifs: {
      studio: 'À partir de 410 €',
      f2f3: 'À partir de 830 €',
      maison: 'À partir de 1 650 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Cranves-Sales', slug: 'cranves-sales' },
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Bonneville', slug: 'bonneville' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Juvigny ?',
        reponse:
          "Comptez à partir de 410 € pour un studio, 830 € pour un F2/F3, 1 650 € pour une maison. Léger surcoût lié à la distance (6 km) et la topographie pentue.",
      },
      {
        question: 'Pouvez-vous accéder aux hameaux étroits (Les Côtes, La Rosière) ?',
        reponse:
          "Oui, avec des véhicules de 12-15 m³ adaptés. Pour les volumes plus importants, on fait des navettes avec relais en bas du hameau ou sur la place du village.",
      },
      {
        question: 'Beaucoup de seniors à Juvigny : avez-vous une remise dédiée ?',
        reponse:
          "Oui, notre remise sénior/PMR de 10% s'applique automatiquement pour les 60+ ans. Cumulable avec la remise réservation anticipée (-5% si plus de 30 jours).",
      },
      {
        question: 'Quels sont les délais d\'intervention sur Juvigny ?',
        reponse:
          "Sous 24-48 heures pour les urgences, 2 à 4 semaines pour les planifiés. La distance étant courte (6 km), aucune contrainte horaire vs Annemasse.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // BONNE, bourg résidentiel actif (74380)
  // ------------------------------------------------------------------
  'bonne': {
    slug: 'bonne',
    nom: 'Bonne',
    codePostal: '74380',
    departement: 'Haute-Savoie',
    geo: { lat: 46.184, lng: 6.350 },
    distanceKm: 7,
    population: '3 000 habitants',
    bannier: '/banner-demenagement.webp',

    titreH1: 'Déménagement à Bonne (74380), bourg de l\'Annemasse Agglo',
    metaTitle: "Déménageur Bonne (74380) | Torres Transport Annemasse Agglo",
    metaDescription:
      "Déménageur à Bonne (74380), 3 000 habitants. Bourg actif de l'Annemasse Agglo. Centre, Loëx, Martignier. Base Ville-la-Grand à 7 km. Devis 24h, 20 ans d'expertise.",
    keywords:
      'déménageur Bonne, déménagement Bonne 74380, déménageur Loëx, déménagement Annemasse Agglo, déménageur 74380',

    intro: `<strong>Bonne</strong> est ce <strong>bourg de 3 000 habitants</strong> à 7 km à l'est d'Annemasse, l'un des plus actifs de l'Annemasse Agglo. École, commerces, marché, vie associative dense&nbsp;: c'est la commune où s'installent les <strong>jeunes familles</strong> qui veulent un cadre village avec services, plutôt qu'un grand pôle urbain. Torres Transport intervient régulièrement à Bonne pour des déménagements pavillon-pavillon ou des arrivées en provenance d'Annemasse-centre.`,

    pourquoiNous: `Bonne a une <strong>configuration mixte</strong> : un centre village historique avec quelques rues étroites côté église, et des extensions résidentielles plus récentes (Loëx, Martignier, La Côte) sur des voies larges adaptées aux camions. Notre équipe choisit le bon véhicule selon le quartier : 30 m³ possible en lotissement neuf, 12-15 m³ recommandé pour le centre. La déchetterie de Bonne, utile pour le débarras associé à un déménagement, est aussi un repère terrain qu'on connaît bien.`,

    quartiers: [
      'Centre village',
      'Loëx',
      'Martignier',
      'La Côte',
      'Les Esserts',
    ],

    tarifs: {
      studio: 'À partir de 410 €',
      f2f3: 'À partir de 830 €',
      maison: 'À partir de 1 650 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Cranves-Sales', slug: 'cranves-sales' },
      { nom: 'Vétraz-Monthoux', slug: 'vetraz-monthoux' },
      { nom: 'Lucinges', slug: 'lucinges' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Bonne ?',
        reponse:
          "Comptez à partir de 410 € pour un studio, 830 € pour un F2/F3, 1 650 € pour une maison. Tarif identique à Cranves-Sales vu la proximité.",
      },
      {
        question: 'Pouvez-vous accéder au centre village étroit ?',
        reponse:
          "Oui, avec un camion de 12-15 m³ adapté aux rues du centre historique. Pour les volumes plus importants, on planifie le déménagement en 2 navettes ou avec relais sur le parking de la mairie.",
      },
      {
        question: 'Faites-vous des déménagements depuis Bonne vers Annemasse ?',
        reponse:
          "Oui, c'est fréquent quand des familles s'agrandissent ou des seniors veulent se rapprocher des services médicaux d'Annemasse. Trajet 10-15 minutes, déménagement souvent en demi-journée.",
      },
      {
        question: 'Intervenez-vous dans les lotissements neufs (Loëx, Martignier) ?',
        reponse:
          "Oui, ce sont nos chantiers les plus simples : voies larges, parkings privés, ascenseurs si immeuble, accès direct au logement. Aucune contrainte particulière.",
      },
      {
        question: 'Pouvez-vous proposer le débarras associé au déménagement ?',
        reponse:
          "Oui, et nous travaillons régulièrement avec la déchetterie de Bonne pour les évacuations. Notre formule combinée (déménagement + débarras) permet d'économiser une intervention séparée.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // LUCINGES, village hauteur vue Mont-Blanc (74380)
  // ------------------------------------------------------------------
  'lucinges': {
    slug: 'lucinges',
    nom: 'Lucinges',
    codePostal: '74380',
    departement: 'Haute-Savoie',
    geo: { lat: 46.211, lng: 6.352 },
    distanceKm: 9,
    population: '1 800 habitants',
    bannier: '/banner-blog-hero.webp',

    titreH1: 'Déménagement à Lucinges (74380), village hauteur avec vue Mont-Blanc',
    metaTitle: "Déménageur Lucinges (74380) | Torres Transport",
    metaDescription:
      "Déménageur à Lucinges (74380), 1 800 habitants. Village hauteur avec vue Mont-Blanc. Pavillons, retraités. Base Ville-la-Grand à 9 km.",
    keywords:
      'déménageur Lucinges, déménagement Lucinges 74380, déménageur village Lucinges, déménagement résidentiel hauteur 74380',

    intro: `<strong>Lucinges</strong> est ce <strong>village de 1 800 habitants</strong> perché à 700 m d'altitude, célèbre pour sa <strong>vue panoramique sur le Mont-Blanc</strong>. C'est la commune des couples qui veulent du calme, de la nature, et un cadre exceptionnel à 15 minutes d'Annemasse. Beaucoup de retraités, beaucoup de résidences secondaires aussi. Torres Transport intervient à Lucinges pour des arrivées en provenance d'Annemasse et plus largement de la Haute-Savoie.`,

    pourquoiNous: `Lucinges a une <strong>topographie pentue</strong> qui impose une planification spécifique : les routes d'accès en lacets ne permettent pas tous les véhicules, et les hameaux étalés (Les Crues, Le Marais, hauteurs) sont parfois sur des chemins étroits. Pour les très gros volumes (maison familiale 30+ m³), nous arrivons souvent en plusieurs camions de 15 m³ plutôt qu'un seul 30 m³ qui aurait du mal à manœuvrer. Notre tarif <strong>sénior &minus;10%</strong> s'applique automatiquement, ce qui correspond à une grande part de notre clientèle locale (60+).`,

    quartiers: [
      'Le Bourg',
      'Les Crues',
      'Le Marais',
      'Hauteurs (vue Mont-Blanc)',
      'Sous-le-Mont',
    ],

    tarifs: {
      studio: 'À partir de 430 €',
      f2f3: 'À partir de 870 €',
      maison: 'À partir de 1 700 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Bonne', slug: 'bonne' },
      { nom: 'Cranves-Sales', slug: 'cranves-sales' },
      { nom: 'Saint-Cergues', slug: 'saint-cergues' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Lucinges ?',
        reponse:
          "Comptez à partir de 430 € pour un studio, 870 € pour un F2/F3, 1 700 € pour une maison. Surcoût lié à la distance (9 km) et à la pente d'accès.",
      },
      {
        question: 'Pouvez-vous accéder aux hameaux étroits (Les Crues, Le Marais) ?',
        reponse:
          "Oui, avec des camions de 12-15 m³. Pour les hauteurs avec vue Mont-Blanc, l'accès est parfois sur des chemins privés. On vérifie la praticabilité avant d'envoyer un véhicule.",
      },
      {
        question: 'Beaucoup de seniors à Lucinges : remise dédiée ?',
        reponse:
          "Oui, notre remise sénior/PMR de 10% s'applique automatiquement aux 60+ ans. Cumulable avec la réservation anticipée (-5%) et le gros volume (-5%).",
      },
      {
        question: 'Acceptez-vous les résidences secondaires (entrée meubles uniquement) ?',
        reponse:
          "Oui. Pour les résidences secondaires, nous proposons souvent un service réduit (transport + déchargement, sans débarras ni nettoyage). Tarif allégé.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // MACHILLY, petit village paisible (74140)
  // ------------------------------------------------------------------
  'machilly': {
    slug: 'machilly',
    nom: 'Machilly',
    codePostal: '74140',
    departement: 'Haute-Savoie',
    geo: { lat: 46.243, lng: 6.350 },
    distanceKm: 10,
    population: '1 300 habitants',
    bannier: '/banner-form-contact.webp',

    titreH1: 'Déménagement à Machilly (74140), village paisible nord-est Annemasse',
    metaTitle: "Déménageur Machilly (74140) | Torres Transport Haute-Savoie",
    metaDescription:
      "Déménageur à Machilly (74140), 1 300 habitants. Village paisible Annemasse Agglo, axe Évian. Le Bourg, Les Frasses. Base Ville-la-Grand à 10 km.",
    keywords:
      'déménageur Machilly, déménagement Machilly 74140, déménageur axe Évian Annemasse, village 74140',

    intro: `<strong>Machilly</strong> est ce <strong>petit village de 1 300 habitants</strong> situé sur l'axe Annemasse-Évian, à 10 km de notre base. Faisant partie de l'Annemasse Agglo, c'est une commune calme appréciée pour sa proximité avec les commerces de Douvaine et l'accès rapide au lac. Torres Transport intervient à Machilly pour des <strong>déménagements résidentiels</strong> et des transferts entre l'Annemasse Agglo et le Chablais.`,

    pourquoiNous: `Machilly est <strong>tranquille logistiquement</strong> : peu de circulation, des rues larges, des pavillons individuels avec accès direct. Aucune contrainte de stationnement, aucune autorisation à demander. C'est l'inverse d'un déménagement Annemasse-centre&nbsp;: ici tout est plus simple, donc le devis est plus prévisible et le déménagement plus rapide. La proximité avec Douvaine (3 km) et le Bas-Chablais nous permet aussi de mutualiser certains trajets quand on intervient dans le secteur.`,

    quartiers: [
      'Le Bourg',
      'Les Frasses',
      'La Bouvarde',
      'Sous-Machilly',
    ],

    tarifs: {
      studio: 'À partir de 440 €',
      f2f3: 'À partir de 880 €',
      maison: 'À partir de 1 720 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Saint-Cergues', slug: 'saint-cergues' },
      { nom: 'Thonon-les-Bains', slug: 'thonon-les-bains' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Machilly ?',
        reponse:
          "Comptez à partir de 440 € pour un studio, 880 € pour un F2/F3, 1 720 € pour une maison. Tarif lié à la distance (10 km).",
      },
      {
        question: 'Faites-vous le trajet Machilly-Thonon ou Machilly-Évian ?',
        reponse:
          "Oui, c'est un trajet régulier. La position de Machilly sur l'axe Annemasse-Évian permet une intervention rapide vers le Chablais (15-20 minutes vers Thonon).",
      },
      {
        question: 'Quelles sont les contraintes d\'accès dans le village ?',
        reponse:
          "Aucune particulière. Machilly est un village paisible avec des rues larges et des pavillons accessibles. Pas d'autorisation municipale nécessaire.",
      },
      {
        question: 'Pouvez-vous combiner Machilly et un autre déménagement à Douvaine ou Sciez ?',
        reponse:
          "Oui, le groupage est possible quand deux clients du secteur déménagent à des dates proches. Économie pouvant aller jusqu'à -10% sur chaque devis.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // SAINT-CERGUES, versant Voirons (74140)
  // ------------------------------------------------------------------
  'saint-cergues': {
    slug: 'saint-cergues',
    nom: 'Saint-Cergues',
    codePostal: '74140',
    departement: 'Haute-Savoie',
    geo: { lat: 46.232, lng: 6.305 },
    distanceKm: 7,
    population: '3 000 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Saint-Cergues (74140), versant des Voirons',
    metaTitle: "Déménageur Saint-Cergues (74140) | Torres Transport",
    metaDescription:
      "Déménageur à Saint-Cergues (74140), 3 000 habitants sur le versant des Voirons. Station ski Voirons. Centre, Le Pralère, La Côte. Base Ville-la-Grand à 7 km.",
    keywords:
      'déménageur Saint-Cergues, déménagement Saint-Cergues 74140, déménageur Voirons, déménageur 74140',

    intro: `<strong>Saint-Cergues</strong> est cette commune de <strong>3 000 habitants</strong> accrochée au <strong>versant des Voirons</strong>, célèbre pour sa <strong>petite station de ski</strong> familiale et son cadre montagne. À 7 km de notre base, elle attire à la fois des résidents permanents (familles, retraités) et des résidences secondaires d'amateurs de montagne. Torres Transport intervient pour les déménagements arrivée/départ et pour quelques transferts saisonniers.`,

    pourquoiNous: `Saint-Cergues a une <strong>configuration verticale</strong> : le centre du village est à 600 m, mais la commune monte jusqu'aux Voirons (1 480 m). Selon où on intervient, les contraintes diffèrent fortement&nbsp;: centre village = accès véhicule normal, hauteurs = chemins parfois pentus, virages serrés, neige possible en hiver. Notre équipe planifie en conséquence : véhicule 4x4 si nécessaire en hiver, créneaux matinaux pour éviter les redoux qui rendent la route glissante. Pour les arrivées de seniors qui choisissent ce cadre nature, notre tarif <strong>−10% sénior</strong> s'applique automatiquement.`,

    quartiers: [
      'Centre',
      'Le Pralère',
      'Les Voirons (hauteurs)',
      'La Côte',
      'Pas-de-Maule',
    ],

    tarifs: {
      studio: 'À partir de 420 €',
      f2f3: 'À partir de 850 €',
      maison: 'À partir de 1 680 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Machilly', slug: 'machilly' },
      { nom: 'Lucinges', slug: 'lucinges' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Saint-Cergues ?',
        reponse:
          "Comptez à partir de 420 € pour un studio, 850 € pour un F2/F3, 1 680 € pour une maison. Tarif lié à la distance (7 km) et possible accès en pente.",
      },
      {
        question: 'Pouvez-vous accéder aux hauteurs en hiver ?',
        reponse:
          "Oui, sous condition que la route soit déneigée et accessible. Nous évaluons selon météo : si neige fraîche, on reporte ou on intervient avec un véhicule 4x4. Sécurité avant tout.",
      },
      {
        question: 'Y a-t-il des résidences secondaires à Saint-Cergues ?',
        reponse:
          "Oui, beaucoup, notamment liées à la station de ski des Voirons. Nous gérons aussi bien les arrivées meubles que les rangements saisonniers (avec garde-meuble si besoin).",
      },
      {
        question: 'Faites-vous des déménagements pour les seniors qui s\'installent ?',
        reponse:
          "Très régulièrement. Saint-Cergues attire beaucoup de retraités. Notre tarif sénior/PMR -10% est automatique. Approche patiente, accompagnement humain.",
      },
      {
        question: 'Quels délais pour intervenir à Saint-Cergues ?',
        reponse:
          "Sous 24-48 heures pour les urgences hors hiver. En hiver, nous prévoyons une marge de 24h supplémentaires pour adapter selon météo.",
      },
    ],
  },
};

// Helper pour obtenir une ville par slug
export function getCityBySlug(slug) {
  return cities[slug];
}

// Helper pour lister tous les slugs
export function getAllCitySlugs() {
  return Object.keys(cities);
}

// Helper pour lister toutes les villes (array)
export function getAllCities() {
  return Object.values(cities);
}
