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

    pourquoiNous: `Annemasse est une <strong>ville frontalière dynamique</strong> de 36 000 habitants en pleine expansion, avec des spécificités logistiques que seul un déménageur local connaît vraiment. La proximité immédiate de Genève, le flux continu de travailleurs frontaliers, les nombreuses résidences neuves du quartier Chablais-Parc ou de la Zone d'Activités Mont-Blanc imposent une organisation millimétrée. Notre équipe basée à <strong>Ville-la-Grand</strong>, à seulement 2 km du centre d'Annemasse, intervient sous 24h. Nous connaissons chaque rue, chaque accès difficile, chaque parking utilisable pour stationner un camion sans gêner.`,

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
      { nom: 'Genève', slug: 'geneve' },
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
        question: "Pouvez-vous déménager d'Annemasse vers la Suisse ?",
        reponse:
          "Oui, nous accompagnons régulièrement les déménagements transfrontaliers depuis Annemasse vers Genève, Lausanne et toute la Suisse romande. Nous gérons les formalités douanières et le remplissage des documents requis. C'est l'une de nos spécialités.",
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

    pourquoiNous: `Ville-la-Grand est une commune de 8 500 habitants directement collée à Annemasse, qui connaît une <strong>forte croissance résidentielle</strong> avec de nouveaux programmes immobiliers récents. Que vous emménagiez dans une maison ancienne du centre, dans une résidence neuve, ou que vous quittiez la commune pour la Suisse voisine, notre équipe locale s'adapte à votre situation. Nous connaissons les particularités d'accès à chaque rue, et nous sommes capables d'intervenir <strong>le jour-même en cas d'urgence</strong>.`,

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
      { nom: 'Genève', slug: 'geneve' },
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
  // SAINT-JULIEN-EN-GENEVOIS, frontalier (74160)
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

    titreH1: 'Déménagement à Saint-Julien-en-Genevois (74160), Spécialiste frontalier',
    metaTitle: "Déménageur Saint-Julien-en-Genevois | Torres Transport",
    metaDescription:
      "Déménageur professionnel à Saint-Julien-en-Genevois (74160). Spécialiste des déménagements frontaliers vers la Suisse. 20 ans d'expérience, devis gratuit, équipe expérimentée.",
    keywords:
      'déménageur Saint-Julien-en-Genevois, déménagement Saint-Julien 74160, déménageur frontalier Suisse, déménagement Saint-Julien Genève',

    intro: `<strong>Saint-Julien-en-Genevois</strong> est une ville frontalière en pleine mutation, à 18 km d'Annemasse. Sa position stratégique aux portes de Genève en fait un lieu de résidence privilégié pour les <strong>travailleurs frontaliers</strong>, mais aussi un carrefour pour les déménagements transfrontaliers. Torres Transport intervient régulièrement à Saint-Julien pour des déménagements internes, des transferts vers Annemasse, ou des passages en Suisse. Notre maîtrise des <strong>formalités douanières</strong> et notre connaissance des contraintes locales (Vitam, ZAE des Vignes Rouges, centre historique) font la différence.`,

    pourquoiNous: `La <strong>spécificité saint-juliénoise</strong>, c'est ce flux constant entre la France et la Suisse. Nos clients sont souvent des frontaliers qui quittent un appartement à Saint-Julien pour la Suisse voisine, ou inversement. Cela implique un <strong>savoir-faire douanier</strong> que tous les déménageurs n'ont pas. Nous remplissons les documents requis (formulaire 1322, certificat de changement de résidence), nous connaissons les heures d'ouverture des douanes de Bardonnex et nous évitons les pièges classiques : objets restreints, valeurs déclarées, justificatifs manquants. Notre équipe parle français et a l'habitude des relations avec les autorités suisses.`,

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
      { nom: 'Genève', slug: 'geneve' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: 'Faites-vous des déménagements de Saint-Julien vers la Suisse ?',
        reponse:
          "Oui, c'est l'une de nos spécialités. Nous gérons régulièrement les déménagements transfrontaliers depuis Saint-Julien-en-Genevois vers Genève, Carouge, Lancy ou plus loin en Suisse romande. Nous nous occupons des formalités douanières (formulaire 1322, certificat de changement de résidence) et coordonnons l'intervention.",
      },
      {
        question: 'Combien coûte un déménagement à Saint-Julien-en-Genevois ?',
        reponse:
          "Comptez à partir de 420 € pour un studio, 850 € pour un F2/F3 et 1 700 € pour une maison à Saint-Julien-en-Genevois. Le tarif inclut le déplacement depuis notre base de Ville-la-Grand. Les tarifs frontaliers vers la Suisse sont calculés au cas par cas.",
      },
      {
        question: 'Quels documents sont nécessaires pour un déménagement vers la Suisse ?',
        reponse:
          "Pour un déménagement Saint-Julien vers la Suisse, vous aurez besoin du formulaire 1322 (déclaration en douane simplifiée), d'une liste détaillée des biens transportés, d'un justificatif de domicile en Suisse (bail, attestation de résidence) et d'une pièce d'identité. Nous vous accompagnons dans la constitution du dossier.",
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
  // GENÈVE, bassin frontalier majeur (Suisse)
  // ------------------------------------------------------------------
  geneve: {
    slug: 'geneve',
    nom: 'Genève',
    codePostal: 'CH-1200',
    departement: 'Suisse romande',
    geo: { lat: 46.204, lng: 6.143 },
    distanceKm: 12,
    population: '200 000 habitants',
    bannier: '/banner-blog-hero.webp',

    titreH1: 'Déménagement Annemasse-Genève, Spécialiste transfrontalier France/Suisse',
    metaTitle: "Déménagement Genève France-Suisse | Torres Transport Annemasse",
    metaDescription:
      "Déménageur transfrontalier France-Suisse spécialiste du bassin Annemasse-Genève. Formalités douanières, transport sécurisé, équipe expérimentée. Devis gratuit. Torres Transport.",
    keywords:
      'déménagement Genève, déménageur Annemasse Genève, déménagement France Suisse, déménageur frontalier, déménagement transfrontalier Suisse',

    intro: `Vous déménagez <strong>entre Annemasse et Genève</strong> ou la Suisse romande ? Torres Transport est votre partenaire spécialiste des <strong>déménagements transfrontaliers France/Suisse</strong>. À seulement 12 km de la frontière, notre équipe maîtrise toutes les formalités liées au passage des biens et accompagne aussi bien les frontaliers que les expatriés. Genève concentre la majorité des emplois du bassin, et chaque mois, des centaines de personnes traversent la frontière dans un sens ou dans l'autre. Notre expertise douanière et logistique vous évite des semaines de stress administratif.`,

    pourquoiNous: `Un <strong>déménagement transfrontalier vers Genève</strong> n'est pas un déménagement comme les autres. Il faut anticiper les <strong>formalités douanières suisses</strong>, déclarer les biens transportés, prévoir des documents que la majorité des déménageurs ignorent. Torres Transport gère ces démarches depuis 20 ans : formulaire 1322 français, certificat de changement de résidence suisse, dédouanement à la frontière de Bardonnex ou de Moillesulaz, planification des horaires douaniers. Nous travaillons régulièrement avec des frontaliers qui s'installent à Carouge, Lancy, Chêne-Bougeries, Vernier ou en plein centre de Genève.`,

    quartiers: [
      'Centre-ville',
      'Carouge',
      'Lancy',
      'Vernier',
      'Chêne-Bougeries',
      'Plan-les-Ouates',
      'Meyrin',
      'Onex',
      'Petit-Saconnex',
    ],

    tarifs: {
      studio: 'À partir de 690 €',
      f2f3: 'À partir de 1 300 €',
      maison: 'À partir de 2 800 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Annemasse', slug: 'annemasse' },
      { nom: 'Saint-Julien-en-Genevois', slug: 'saint-julien-en-genevois' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement entre Annemasse et Genève ?',
        reponse:
          "Pour un déménagement transfrontalier Annemasse-Genève, comptez à partir de 690 € pour un studio, 1 300 € pour un F2/F3 et 2 800 € pour une maison. Le tarif intègre le passage en douane et la gestion des formalités. Un devis sur-mesure est établi après visite gratuite.",
      },
      {
        question: 'Quelles formalités douanières pour déménager en Suisse ?',
        reponse:
          "Pour un déménagement vers la Suisse, vous devez fournir : le formulaire 1322 (déclaration douanière), une liste détaillée des biens transportés (inventaire), un certificat de changement de résidence, une pièce d'identité et un justificatif de domicile en Suisse. Torres Transport prépare l'ensemble du dossier pour vous.",
      },
      {
        question: 'Combien de temps prend un déménagement Annemasse-Genève ?',
        reponse:
          "Un déménagement Annemasse-Genève prend généralement une journée complète, voire deux pour les volumes importants. Le passage en douane ajoute 30 à 60 minutes selon l'affluence. Nous évitons les heures de pointe et planifions le passage à des créneaux fluides.",
      },
      {
        question: 'Êtes-vous habilités pour les déménagements internationaux ?',
        reponse:
          "Oui, Torres Transport intervient régulièrement entre la France et la Suisse, et possède l'expérience des formalités requises. Nous travaillons avec des courtiers en douane partenaires si nécessaire pour les cas complexes (objets de valeur déclarés, œuvres d'art, équipements professionnels).",
      },
      {
        question: 'Travaillez-vous aussi vers Lausanne et Vaud ?',
        reponse:
          "Absolument. Nous intervenons dans toute la Suisse romande : Genève bien sûr, mais aussi Lausanne, Nyon, Morges, Vevey et le canton de Vaud. La distance plus longue augmente le coût mais notre savoir-faire reste le même.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // GAILLARD, frontalier direct (74240)
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
      "Déménageur professionnel à Gaillard (74240), à 4 km de notre base. Intervention rapide pour particuliers et professionnels. Spécialiste frontalier Suisse. Devis gratuit.",
    keywords:
      'déménageur Gaillard, déménagement Gaillard 74240, entreprise déménagement Gaillard, déménageur frontalier Suisse Gaillard',

    intro: `<strong>Gaillard est une commune frontalière directe avec la Suisse</strong>, située à seulement 4 km de notre base de Ville-la-Grand. Cette proximité immédiate avec Genève en fait un lieu de résidence très prisé des travailleurs frontaliers. Torres Transport intervient quotidiennement à Gaillard pour des déménagements résidentiels et professionnels, que ce soit dans le quartier de la Gare, les résidences neuves de Mon Idée ou le centre historique.`,

    pourquoiNous: `Gaillard cumule deux <strong>spécificités logistiques</strong> qu'un bon déménageur doit maîtriser : la pression résidentielle frontalière (rotation rapide des locataires) et les contraintes du passage à la frontière toute proche (douane de Moillesulaz). Notre équipe basée à seulement 5 minutes de route connaît parfaitement les rues de Gaillard, les accès aux résidences récentes du Bois-des-Frères, et nous gérons sans difficulté les déménagements vers Genève la voisine.`,

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
      { nom: 'Genève', slug: 'geneve' },
    ],

    faq: [
      {
        question: "Combien coûte un déménagement à Gaillard ?",
        reponse:
          "Pour un déménagement à Gaillard, comptez à partir de 340 € pour un studio, 720 € pour un F2/F3, et 1 450 € pour une maison. Notre proximité (4 km de la base) limite les frais de déplacement.",
      },
      {
        question: "Pouvez-vous gérer un déménagement Gaillard-Genève ?",
        reponse:
          "Oui, c'est une de nos prestations les plus fréquentes. Le passage à la douane de Moillesulaz est rapide et nous nous occupons des formalités douanières. Comptez environ 800-1 200 € pour un studio, 1 500-2 200 € pour un F2/F3.",
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

    titreH1: 'Déménagement à Thonon-les-Bains (74200), Bord du Léman',
    metaTitle: 'Déménageur Thonon-les-Bains | Torres Transport',
    metaDescription:
      "Déménageur professionnel à Thonon-les-Bains (74200) sur les rives du Léman. Service complet déménagement, montage, transport. Devis gratuit. 20 ans d'expérience en Haute-Savoie.",
    keywords:
      'déménageur Thonon-les-Bains, déménagement Thonon 74200, déménageur Léman, transport meubles Thonon, déménagement Chablais',

    intro: `<strong>Thonon-les-Bains</strong>, sous-préfecture de Haute-Savoie située sur les rives sud du lac Léman, est un bassin résidentiel attractif avec ses 36 000 habitants. Torres Transport intervient à Thonon depuis Ville-la-Grand (35 km) pour répondre aux besoins de déménagement de cette région du Chablais. Nous accompagnons aussi bien les <strong>déménagements internes à Thonon</strong>, les transferts vers/depuis Annemasse, que les déménagements transfrontaliers vers la Suisse via le port de Thonon.`,

    pourquoiNous: `La <strong>région du Chablais</strong> a ses propres spécificités logistiques : centres-villes anciens aux rues étroites (Rives, Vieux Thonon), nouvelles résidences en périphérie (Concise, Tully), accès parfois difficiles aux propriétés du bord du lac. Notre savoir-faire de 20 ans en Haute-Savoie nous permet de traiter ces particularités. Nous travaillons aussi régulièrement entre Thonon et la Suisse via Évian/Lausanne, en gérant les formalités douanières et le ferry si nécessaire.`,

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
      { nom: 'Genève', slug: 'geneve' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Thonon-les-Bains ?',
        reponse:
          "Pour un déménagement à Thonon, comptez à partir de 480 € pour un studio, 950 € pour un F2/F3, et 1 850 € pour une maison. La distance (35 km de notre base) est intégrée dans les tarifs.",
      },
      {
        question: "Pouvez-vous déménager de Thonon vers la Suisse ?",
        reponse:
          "Oui, nous gérons les déménagements transfrontaliers depuis Thonon, soit par voie terrestre via Genève/Annemasse, soit par ferry via Évian-Lausanne pour les déménagements vers le canton de Vaud. Formalités douanières incluses.",
      },
      {
        question: "Combien de temps pour un déménagement Thonon-Annemasse ?",
        reponse:
          "Un déménagement Thonon-Annemasse se fait en une journée, deux pour les volumes importants (maison F5+). Le trajet entre les deux villes prend environ 45 minutes via l'autoroute du Chablais.",
      },
      {
        question: 'Intervenez-vous aussi à Évian et alentours ?',
        reponse:
          "Bien sûr. Évian-les-Bains, Publier, Marin, Anthy-sur-Léman, Sciez et tout le bord du lac jusqu'à Saint-Gingolph sont dans notre zone d'intervention.",
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
      "Déménageur à Évian-les-Bains (74500). Service personnalisé pour cette ville thermale du Léman. Déménagement résidentiel et de luxe. Connexion ferry Évian-Lausanne possible.",
    keywords:
      'déménageur Évian-les-Bains, déménagement Évian 74500, déménageur Léman, transport meubles Évian, déménagement ferry Lausanne',

    intro: `<strong>Évian-les-Bains</strong>, ville thermale au bord du Léman, attire une clientèle exigeante : résidences secondaires, propriétés de prestige, professionnels du tourisme. Torres Transport intervient à Évian (45 km de notre base) avec un service <strong>personnalisé adapté à la qualité demandée</strong>. Nous traitons aussi bien les déménagements de villas du quartier Hôtel-de-Ville que les transferts d'appartements en résidence touristique.`,

    pourquoiNous: `Évian a deux <strong>particularités logistiques</strong> : (1) ses propriétés haut de gamme nécessitent un soin particulier (œuvres d'art, mobilier ancien, équipements luxueux) ; (2) sa position frontalière avec la Suisse via le ferry Évian-Lausanne ouvre des routes alternatives pour les déménagements transfrontaliers vers le canton de Vaud. Notre équipe a l'habitude de coordonner ces traversées et de gérer le matériel sensible avec emballages renforcés.`,

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
      { nom: 'Genève', slug: 'geneve' },
    ],

    faq: [
      {
        question: "Combien coûte un déménagement à Évian-les-Bains ?",
        reponse:
          "Pour un déménagement à Évian, comptez à partir de 520 € pour un studio, 1 050 € pour un F2/F3, et 2 100 € pour une maison. Les déménagements de propriétés de prestige (villas, mobilier de valeur) font l'objet d'un devis personnalisé.",
      },
      {
        question: 'Faites-vous le ferry Évian-Lausanne pour les déménagements ?',
        reponse:
          "Oui, nous coordonnons les traversées par ferry pour les déménagements vers Lausanne et le canton de Vaud. Cette voie évite Genève et permet un trajet plus direct vers le nord du Léman. Formalités douanières gérées.",
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
      { nom: 'Genève', slug: 'geneve' },
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

    pourquoiNous: `Annecy a vu son urbanisation exploser ces dernières années avec la fusion des communes (Annecy-le-Vieux, Cran-Gevrier, Meythet, Pringy, Seynod). Cette <strong>"nouvelle Annecy" de 130 000 habitants</strong> a des besoins de déménagement constants : étudiants, jeunes actifs, familles. Notre maîtrise de l'ensemble du département de la Haute-Savoie nous permet de gérer aussi bien les déménagements internes à Annecy que les transferts vers Genève, Lyon, Chambéry ou la Suisse romande.`,

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
      { nom: 'Genève', slug: 'geneve' },
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
        question: "Faites-vous Annecy-Genève ou Annecy-Lyon ?",
        reponse:
          "Oui, ces axes sont réguliers. Annecy-Genève (45 min via A41) et Annecy-Lyon (1h30 via A41/A43) sont des trajets fréquents pour notre équipe. Tarifs sur devis selon volume et destination.",
      },
      {
        question: 'Intervenez-vous aussi à Annecy-le-Vieux et Cran-Gevrier ?',
        reponse:
          "Oui, depuis la fusion des communes en 2017, Annecy-le-Vieux, Cran-Gevrier, Meythet, Pringy et Seynod font partie d'Annecy. Nos prestations couvrent l'ensemble du nouveau territoire communal.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // ÉTREMBIÈRES, frontière sud d'Annemasse (74100)
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
      "Déménageur professionnel à Étrembières (74100). Pas-de-l'Échelle, ZAC Mont-Blanc, village. Frontalier Suisse, base Ville-la-Grand à 3 km. 20 ans d'expérience. Devis gratuit en 24h.",
    keywords:
      'déménageur Étrembières, déménagement Étrembières 74100, déménageur Pas-de-l\'Échelle, déménagement Salève, déménageur frontalier Suisse Étrembières',

    intro: `<strong>Étrembières</strong> est cette petite commune de 1 900 habitants posée au pied du <strong>Mont Salève</strong>, à la frontière sud d'Annemasse. Trois entités la composent et ont chacune leur logique de déménagement&nbsp;: le <strong>Pas-de-l'Échelle</strong>, frontalier direct avec Genève (côté Veyrier), la <strong>ZAC du Mont-Blanc</strong> avec ses immeubles récents et zone commerciale, et le village historique d'Étrembières lui-même. Torres Transport intervient sous 24h depuis Ville-la-Grand (3 km).`,

    pourquoiNous: `La spécificité d'Étrembières, c'est sa <strong>topographie variée</strong> qui change tout en pratique : le Pas-de-l'Échelle est plat et accessible, le village d'Étrembières est en hauteur sur les pentes du Salève (rues étroites, accès parfois compliqués pour les utilitaires &gt;&nbsp;20&nbsp;m³), et la ZAC est aux normes immeubles modernes (parking dédié, ascenseur). Notre équipe connaît ces différences et adapte le matériel selon le quartier. Le téléphérique du Salève, juste à côté, reste un repère évident pour expliquer un trajet à un client.`,

    quartiers: [
      'Pas-de-l\'Échelle (frontalier)',
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
      { nom: 'Genève', slug: 'geneve' },
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
        question: 'Faites-vous des déménagements Étrembières-Genève ?',
        reponse:
          "Régulièrement. Le Pas-de-l'Échelle est limitrophe direct du canton de Genève (Veyrier, Carouge). Nous gérons les formalités douanières (déclaration de transfert) et connaissons les contraintes du passage frontalier.",
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
  // AMBILLY, frontalier direct Genève (74100)
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

    titreH1: 'Déménagement à Ambilly (74100), commune frontalière avec Genève',
    metaTitle: "Déménageur Ambilly (74100) | Frontalier Genève | Torres Transport",
    metaDescription:
      "Déménageur à Ambilly (74100), commune frontalière avec Genève (tram 17). 7 000 habitants. Centre dense, immeubles, transfrontaliers. Base Ville-la-Grand à 2 km. Devis 24h.",
    keywords:
      'déménageur Ambilly, déménagement Ambilly 74100, déménageur frontalier Genève Ambilly, tram 17 déménagement, déménageur Eaux-Vives',

    intro: `<strong>Ambilly</strong> est cette petite commune dense de <strong>7 000 habitants</strong> coincée entre Annemasse et la frontière suisse, à 2 km de notre base. Sa particularité&nbsp;: elle est <strong>directement reliée à Genève par le tram 17</strong> (terminus Annemasse-Lycée), ce qui en fait l'une des destinations préférées des frontaliers travaillant à Genève qui veulent un loyer plus bas tout en gardant des transports rapides. Torres Transport y déménage très régulièrement des familles, des jeunes actifs frontaliers, et des transferts vers la Suisse.`,

    pourquoiNous: `Ambilly est <strong>très dense</strong> par rapport à sa taille : peu de pavillons, beaucoup d'immeubles collectifs, des quartiers historiques (Centre, Eaux-Vives) et des secteurs plus récents (Mélézins). Cette densité urbaine impose des contraintes&nbsp;: rues étroites en centre, parkings limités, ascenseurs parfois petits. Notre équipe connaît ces particularités et planifie en conséquence : créneaux matinaux pour les rues piétonnes, demande d'autorisation municipale pour le stationnement temporaire si nécessaire. Les <strong>déménagements vers la Suisse</strong> sont quant à eux notre spécialité&nbsp;: nous gérons les formalités douanières et le passage à la frontière sans que vous ayez à vous en occuper.`,

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
      { nom: 'Genève', slug: 'geneve' },
      { nom: 'Ville-la-Grand', slug: 'ville-la-grand' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Ambilly ?',
        reponse:
          "Tarifs identiques à Annemasse (2 km de notre base) : 380 € pour un studio, 780 € pour un F2/F3, 1 550 € pour une maison.",
      },
      {
        question: 'Faites-vous des déménagements Ambilly-Genève ?',
        reponse:
          "Très régulièrement. Le tram 17 reliant Ambilly à Genève fait que beaucoup de frontaliers déménagent dans cette commune ou en partent vers la Suisse. Nous gérons les formalités douanières.",
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
        question: 'Intervenez-vous le weekend pour les frontaliers ?',
        reponse:
          "Oui, sur demande. Beaucoup de frontaliers ne peuvent déménager qu'en weekend (travail à Genève en semaine). Pas de surcoût weekend chez nous.",
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
      "Déménageur à Juvigny (74100), petit village de 1 300 habitants. Vue Mont-Blanc et Léman. Pavillons et résidentiel calme. Base Ville-la-Grand à 6 km.",
    keywords:
      'déménageur Juvigny, déménagement Juvigny 74100, déménageur Le Bourg La Croisette, déménagement résidentiel Juvigny',

    intro: `<strong>Juvigny</strong>, c'est ce <strong>petit village de 1 300 habitants</strong> perché à 600 m d'altitude, qu'on choisit pour le calme, la vue sur le Mont-Blanc et le lac Léman, et la sensation d'être à la campagne tout en restant à 10 minutes d'Annemasse. Torres Transport intervient à Juvigny pour des <strong>déménagements de couples qui s'installent</strong> (souvent venus d'Annemasse-centre ou de la périphérie genevoise) et de seniors qui veulent finir leur vie dans un cadre paisible.`,

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
