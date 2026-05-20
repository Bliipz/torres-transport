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
      "Déménageur professionnel à Annemasse (74100). Service complet de déménagement résidentiel pour particuliers par une équipe expérimentée. Devis gratuit en 24h. 20 ans d'expertise locale.",
    keywords:
      'déménageur Annemasse, déménagement Annemasse, entreprise déménagement Annemasse 74, déménageur 74100, prix déménagement Annemasse',

    intro: `Vous cherchez un <strong>déménageur professionnel à Annemasse</strong> ? Torres Transport vous accompagne dans tous vos projets de déménagement résidentiel pour particuliers sur Annemasse et son bassin. Forte de <strong>20 ans d'expérience</strong> dans le transport et la logistique en Haute-Savoie, notre équipe maîtrise parfaitement les spécificités locales : circulation dense en centre-ville, zones piétonnes, accès aux résidences hautes du Brouaz ou du Perrier, contraintes de stationnement aux abords du marché du Salève.`,

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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Annemasse n'est pas une ville comme les autres en Haute-Savoie. <strong>Aux portes de Genève</strong>, traversée par l'Arve, elle est devenue en quelques décennies le deuxième pôle urbain du département après Annecy. Sa transformation est spectaculaire&nbsp;: là où il y avait des friches industrielles dans les années 1990 (Chablais-Parc, ancien site SNCF), des éco-quartiers entiers ont poussé.</p>
<p>La ville accueille aujourd'hui une population de <strong>36 000 habitants</strong>, dont une forte proportion de <strong>travailleurs frontaliers</strong> qui passent chaque jour la frontière suisse pour rejoindre le bassin lémanique. Cette particularité économique explique l'attractivité résidentielle d'Annemasse, et donc l'intensité des mouvements de déménagement&nbsp;: arrivée de familles cherchant un coût du logement inférieur à Genève, départs vers les communes voisines une fois la famille agrandie.</p>
<p>L'arrivée du <strong>Léman Express</strong> en 2019, qui relie Annemasse à Genève-Cornavin en 20 minutes, a accéléré cette dynamique. Notre métier de déménageur à Annemasse a profondément changé en 10 ans&nbsp;: davantage de déménagements courts (intra-bassin), plus de profils internationaux (frontaliers, expatriés), des immeubles toujours plus hauts dans les zones de renouvellement urbain.</p>`,

    marcheImmobilier: `<p>Le parc immobilier d'Annemasse est <strong>marqué par sa diversité</strong>, ce qui change beaucoup les conditions de déménagement d'un quartier à l'autre. En centre-ville et autour de la gare, on trouve principalement de l'<strong>ancien collectif</strong>&nbsp;: immeubles des années 1950-1970, parfois plus anciens, avec ascenseurs étroits voire inexistants, escaliers en colimaçon, parkings rares. Ces logements demandent une préparation soignée, un démontage poussé des meubles, et parfois une autorisation municipale de stationnement.</p>
<p>À l'inverse, des quartiers comme <strong>Chablais-Parc, Étoile-Annemasse-Genève</strong> ou les abords de la <strong>Zone Mont-Blanc</strong> sont dominés par des résidences récentes&nbsp;: ascenseurs adaptés, parkings dédiés, planning de réservation pour les bennes/déménagements imposé par les syndics. Là, c'est le respect du créneau qui prime, pas la gymnastique technique.</p>
<p>Les <strong>maisons individuelles</strong> existent surtout dans les franges (Romagny, Livron, Ile-Verte), souvent sur des parcelles modestes. Une maison à Annemasse fait rarement plus de 100 m², ce qui change complètement le volume vs une maison de Cranves ou Vétraz-Monthoux. Notre estimation moyenne pour une maison à Annemasse&nbsp;: <strong>22 à 30 m³</strong>.</p>`,

    specificitesLogistiques: `<p>Annemasse cumule plusieurs contraintes qu'un déménageur de passage ne peut pas anticiper.</p>
<p><strong>1. La circulation centre-ville.</strong> Les abords de la place Jean-Deffaugt, la rue de Genève et la rue du Commerce sont en grande partie piétonnes ou semi-piétonnes. Les livraisons et déménagements y sont autorisés sur des créneaux matinaux (avant 10h pour le marché du Salève le mardi, jeudi et samedi). On planifie systématiquement nos interventions centre-ville en début de matinée.</p>
<p><strong>2. Les rues étroites du quartier de la Gare.</strong> Beaucoup d'immeubles anciens dans des rues à sens unique étroites&nbsp;: rue du Faucigny, rue de la Tannerie, etc. Nos camions 30 m³ n'y passent pas&nbsp;: on utilise des 12 ou 15 m³, parfois avec navette si le volume est important.</p>
<p><strong>3. Les nouveaux programmes verticaux.</strong> Sur Chablais-Parc et Étoile-Genève, les bâtiments montent à R+8 ou R+10. Les syndics imposent des créneaux ascenseur de 2 ou 3 heures, et un protocole strict (protection des sols et des cabines). On gère ça en routine, mais ça impose une coordination en amont avec le gardien.</p>
<p><strong>4. Le marché du Salève.</strong> Les mardis, jeudis et samedis matin, la place du Marché et les rues attenantes sont totalement bloquées pour le marché de plein air (jusqu'à 13h). Aucun déménagement possible dans ces secteurs pendant ces créneaux. Nous décalons systématiquement les interventions soit avant 6h30, soit après 14h.</p>`,

    accesItineraire: `<p>Notre base est à <strong>Ville-la-Grand, à 2 km du centre d'Annemasse</strong>. L'accès se fait en 5 à 10 minutes selon le quartier de destination&nbsp;:</p>
<p>• <strong>Centre / Gare</strong>&nbsp;: 5 minutes via l'avenue de la Gare ou la rue de Genève.<br />
• <strong>Chablais-Parc / Étoile</strong>&nbsp;: 7 minutes par l'avenue de Verdun.<br />
• <strong>Romagny / Livron</strong>&nbsp;: 10 minutes via le contournement nord.<br />
• <strong>Quartier de la Zone Mont-Blanc</strong>&nbsp;: 6 minutes via l'avenue Émile-Zola.</p>
<p>Cette proximité immédiate nous permet d'<strong>intervenir le jour même en cas d'urgence</strong> (clés perdues, situation d'urgence familiale, sortie de logement précipitée). Pour les déménagements planifiés, nous recommandons une réservation 2 à 3 semaines à l'avance hors saison (octobre à mai) et 4 à 6 semaines en pleine saison (juin à septembre).</p>`,

    faqEtendue: [
      {
        question: "Travaillez-vous avec des syndics de copropriété d'Annemasse pour réserver l'ascenseur ?",
        reponse:
          "Oui, c'est même devenu indispensable sur les programmes récents (Chablais-Parc, Étoile-Annemasse-Genève). Nous prenons contact avec le syndic ou le gardien 5 à 7 jours avant pour réserver un créneau ascenseur (souvent 2 à 3 heures consécutives) et obtenir le protocole de protection. C'est inclus dans notre prestation, le client n'a rien à faire.",
      },
      {
        question: 'Faites-vous des déménagements vers la Suisse (Genève, Carouge, Plan-les-Ouates) ?',
        reponse:
          "Non, nous n'effectuons pas de déménagements transfrontaliers. Torres Transport intervient uniquement côté français&nbsp;: Haute-Savoie principalement, départements limitrophes (Ain, Savoie, Isère), et toute la France métropolitaine sur devis. Pour un déménagement vers la Suisse, nous vous recommandons un déménageur spécialisé dans le transfrontalier qui maîtrise les démarches douanières.",
      },
      {
        question: 'Mon immeuble en centre Annemasse n\'a pas d\'ascenseur, et je suis au 4ème : que faire ?',
        reponse:
          "C'est très fréquent à Annemasse-centre. Nous prévoyons un équipage de 3 à 4 manutentionnaires plutôt que 2, et nous démontons en amont tout le mobilier volumineux (lits, armoires) pour les sortir en pièces. Le tarif est ajusté en conséquence (+15 à 25%) mais reste compétitif vs des concurrents qui sous-traitent. Comptez environ 950-1100€ pour un F3 sans ascenseur en 4ème étage à Annemasse.",
      },
      {
        question: "Avez-vous l'autorisation de stationner sur la zone piétonne du marché du Salève ?",
        reponse:
          "Pour la zone piétonne autour de la place du Marché et la rue du Commerce, nous demandons systématiquement une autorisation de stationnement temporaire à la mairie d'Annemasse (gratuit, délai 5-7 jours ouvrés). Nous gérons cette démarche pour vous. Sans autorisation, c'est verbalisable à 35€ et nous n'intervenons pas dans ces conditions.",
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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Ville-la-Grand est <strong>notre commune d'origine</strong>. Le siège social de Torres Transport est implanté au 8 rue Fernand-David depuis nos débuts&nbsp;: connaître les rues de Ville-la-Grand n'est pas pour nous un argument marketing, c'est notre quotidien depuis 20 ans.</p>
<p>Avec ses <strong>8 500 habitants</strong>, Ville-la-Grand est l'une des trois communes du «&nbsp;tripoint annemassien&nbsp;» (avec Annemasse et Ambilly), formant un continuum urbain qu'aucune frontière administrative ne traduit visuellement. Historiquement plus agricole et résidentielle qu'Annemasse, Ville-la-Grand a vécu ces vingt dernières années une <strong>vague de programmes neufs</strong> (résidences Eaux-Belles, Esserts, Crêt) qui ont transformé son visage tout en préservant son centre-bourg d'origine.</p>
<p>La gare du Léman Express (Ville-la-Grand a sa propre station) et la proximité immédiate des écoles, du collège et de la zone commerciale en font une commune particulièrement prisée par les <strong>jeunes familles frontalières</strong>. C'est notre clientèle dominante&nbsp;: deuxième logement après le premier appartement à Annemasse, ou retour de Suisse pour s'installer durablement côté français.</p>`,

    marcheImmobilier: `<p>Le tissu immobilier de Ville-la-Grand est plus <strong>homogène</strong> qu'à Annemasse. La majorité des biens se répartit entre deux profils&nbsp;:</p>
<p><strong>1. Les maisons individuelles</strong> et pavillons (centre-bourg, Champ-Magnin, Les Voirons). Souvent des constructions des années 1970-1990, des terrains de 400 à 800 m², des volumes domestiques entre 25 et 40 m³ pour une famille avec enfants. Accès véhicule simple dans 95% des cas. Tarif Torres pour une maison Ville-la-Grand&nbsp;: <strong>à partir de 1 400 €</strong>.</p>
<p><strong>2. Les résidences récentes</strong> de petite hauteur (R+3 à R+5)&nbsp;: Eaux-Belles, Les Esserts, Le Crêt. Ascenseurs systématiques et adaptés, parkings privés, syndics professionnels. Idéal pour des déménagements rapides. Beaucoup de F3-F4 dans cette catégorie, volume moyen 18-25 m³.</p>
<p>L'absence de centre commercial dense et de zone piétonne en fait une commune <strong>simple à déménager logistiquement</strong>&nbsp;: pas d'autorisation municipale à demander dans 9 cas sur 10, créneaux d'intervention flexibles, peu de contraintes horaires.</p>`,

    specificitesLogistiques: `<p>En tant que <strong>commune d'attache de Torres Transport</strong>, Ville-la-Grand est l'endroit où nous avons développé tout notre savoir-faire. Voici les particularités locales que nos équipes connaissent par cœur&nbsp;:</p>
<p><strong>1. Le centre-bourg historique.</strong> Quelques rues étroites autour de la mairie et de l'église (rue de la Mairie, rue de l'Ancienne Poste). On utilise nos 15 m³ pour ces secteurs, pas les gros volumes.</p>
<p><strong>2. La zone gare/Léman Express.</strong> Bien que peu encombrée par rapport à celle d'Annemasse, le parking dépose-minute est petit. Pour les déménagements proches de la gare, on prévoit un créneau matinal (avant 8h30) pour éviter la cohue des frontaliers.</p>
<p><strong>3. Les ralentisseurs de la rue de l'Eau-Belle.</strong> Anecdote pratique&nbsp;: cette rue a plusieurs ralentisseurs prononcés qui imposent de descendre à 15-20 km/h avec un camion chargé. C'est un détail mais ça change la durée du trajet si on enchaîne plusieurs allers-retours.</p>
<p><strong>4. La proximité immédiate avec Annemasse, Ambilly et Vétraz.</strong> Nous gérons régulièrement des déménagements Ville-la-Grand ↔ communes voisines en une demi-journée. Souvent un T2 ou T3 qui change de quartier mais reste dans le bassin.</p>`,

    accesItineraire: `<p>Notre base est <strong>sur place</strong>. Il n'y a pas de trajet&nbsp;: nous sommes vos voisins directs. Cette proximité immédiate change concrètement la prestation&nbsp;:</p>
<p>• <strong>Pas de frais kilométriques de déplacement.</strong><br />
• <strong>Intervention le jour même</strong> possible si nous avons un créneau libre.<br />
• <strong>Retour atelier rapide</strong> en cas d'oubli (carton oublié, vis manquante) — c'est arrivé.<br />
• <strong>Coordination en direct</strong>&nbsp;: si quelque chose change le jour J (horaire, contrainte), on s'adapte sans débourser le moindre kilomètre supplémentaire.</p>
<p>Pour un déménagement <strong>intra-Ville-la-Grand</strong> (changement de quartier dans la commune), comptez généralement <strong>une demi-journée pour un T2-T3</strong>, une journée complète pour une maison. Le trajet entre deux quartiers de Ville-la-Grand fait au maximum 3 km.</p>`,

    faqEtendue: [
      {
        question: "Vous êtes au 8 rue Fernand-David : c'est votre vraie adresse ?",
        reponse:
          "Oui. Torres Transport a son siège social et son entrepôt à cette adresse, à Ville-la-Grand. Nos camions sont garés là chaque soir. C'est une vraie entreprise locale, pas une enseigne franchisée ni une boîte aux lettres. Vous pouvez passer nous voir sur rendez-vous, c'est même conseillé pour les déménagements importants.",
      },
      {
        question: 'Faites-vous un tarif "voisin" pour les Ville-la-Grandois ?',
        reponse:
          "Oui, indirectement. Nos tarifs Ville-la-Grand sont les plus bas de notre grille (à partir de 320€ pour un studio vs 350€ à Annemasse) parce qu'il n'y a aucun frais de déplacement. Pas besoin de demander une remise, le tarif intègre déjà cet avantage de proximité.",
      },
      {
        question: 'Vous coordonnez avec le gardien des résidences Eaux-Belles et Les Esserts ?',
        reponse:
          "Oui, nous avons l'habitude de travailler avec les gardiens et syndics des résidences récentes de Ville-la-Grand. Nous réservons l'ascenseur 5-7 jours avant la prestation, et nous appliquons les protocoles de protection (sols, cabine, parties communes) imposés par le règlement intérieur. Aucun stress pour vous.",
      },
      {
        question: "Quand le Léman Express est en grève, est-ce que ça affecte vos prestations ?",
        reponse:
          "Non, nous nous déplaçons en camion, pas en train. Mais ironie, oui, ça augmente la circulation routière côté Annemasse-Ville-la-Grand car beaucoup de frontaliers basculent sur la voiture. Sur les jours de grève annoncés, on programme les interventions plutôt en milieu de journée (11h-14h) que tôt le matin.",
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

    intro: `<strong>Saint-Julien-en-Genevois</strong> est une ville en pleine mutation, à 18 km d'Annemasse. Vitam, ZAE des Vignes Rouges, centre historique : Torres Transport intervient régulièrement à Saint-Julien pour des déménagements résidentiel pour particuliers, en interne ou vers Annemasse et la Haute-Savoie. Notre connaissance des contraintes locales (rues étroites du centre, accès des résidences récentes) fait la différence.`,

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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Saint-Julien-en-Genevois occupe une position singulière dans le bassin&nbsp;: <strong>chef-lieu du Genevois français</strong>, accolée à la frontière suisse au sud-ouest de Genève, elle vit la même dynamique frontalière qu'Annemasse mais selon une géographie différente. Là où Annemasse «&nbsp;regarde&nbsp;» Genève à l'est, Saint-Julien la regarde au nord, par une frontière toute proche.</p>
<p>Avec ses <strong>15 800 habitants</strong>, Saint-Julien est passée d'un gros bourg d'autrefois à une ville moyenne en croissance continue. Le complexe <strong>Vitam</strong> (plus grand parc aquatique de Rhône-Alpes), la ZAE des Vignes-Rouges et l'arrivée du tram TPG ligne 14 puis 17 ont accéléré la transformation. La ville attire désormais autant les frontaliers que les habitants de Genève en quête d'espace.</p>
<p>Pour un déménageur, Saint-Julien est un terrain de jeu particulier&nbsp;: une <strong>configuration géographique étirée</strong> entre le centre historique au sud et les nouveaux quartiers nord (vers la frontière), avec des temps de trajet internes parfois longs malgré la taille modeste de la commune.</p>`,

    marcheImmobilier: `<p>Saint-Julien combine trois types de marchés immobiliers très distincts&nbsp;:</p>
<p><strong>1. Le centre historique.</strong> Petits immeubles anciens, rues étroites autour de la rue du Faubourg-Saint-Gervais et de la place du Crêt. Beaucoup d'appartements anciens rénovés, peu d'ascenseurs, parkings rares. Volumes typiques&nbsp;: 12 à 22 m³ pour des T2-T3.</p>
<p><strong>2. Les résidences modernes</strong> proches de la gare et de la frontière&nbsp;: programmes neufs des Vignes-Rouges, secteur Cervonnex. Standards internationaux (ascenseurs adaptés, parkings souterrains, syndics professionnels). Profil d'acheteur fréquent&nbsp;: cadre frontalier travaillant à Genève.</p>
<p><strong>3. Le pavillonnaire</strong> en périphérie (Therens, Lathoy, route de Lyon). Maisons des années 1980-2000, terrains de 500 à 1000 m². Déménagements simples logistiquement mais volumes importants&nbsp;: <strong>25 à 40 m³</strong> pour une maison.</p>
<p>Tarif Torres pour une maison à Saint-Julien&nbsp;: à partir de <strong>1 700 €</strong> (distance 18 km depuis notre base).</p>`,

    specificitesLogistiques: `<p>Les particularités logistiques de Saint-Julien que nos équipes anticipent systématiquement&nbsp;:</p>
<p><strong>1. La distance depuis notre base (18 km).</strong> Contrairement aux communes du bassin annemassien (2-5 km), un trajet Ville-la-Grand → Saint-Julien prend 25-35 minutes selon le trafic (autoroute A40 + sortie). Cela change la dynamique&nbsp;: on optimise les rotations, et on évite les allers-retours multiples. Pour un déménagement de maison, on prévoit un seul camion de 40 m³ plutôt que des navettes.</p>
<p><strong>2. La fréquentation autour de Vitam.</strong> Le complexe aquatique génère une circulation très dense les mercredis, weekends et vacances scolaires. Si votre déménagement se fait à proximité (secteur Neydens / route de la Lave), on programme tôt le matin pour éviter ces pics.</p>
<p><strong>3. Les pics de circulation frontalière.</strong> Comme tout le Genevois français, Saint-Julien subit des bouchons matin (7h-9h vers la frontière) et soir (17h-19h dans l'autre sens) liés aux déplacements pendulaires. Nous évitons ces créneaux pour les arrivées/départs sur Saint-Julien&nbsp;: les déménagements y sont programmés en milieu de journée (10h-16h) pour rester efficaces.</p>
<p><strong>4. Le centre historique piéton.</strong> Comme Annemasse, certaines rues du centre (rue du Faubourg, place du Crêt) imposent une autorisation de stationnement temporaire. Nous gérons cette demande auprès de la mairie sous 5-7 jours ouvrés.</p>`,

    accesItineraire: `<p>Depuis notre base de Ville-la-Grand, l'accès à Saint-Julien-en-Genevois se fait par <strong>l'autoroute A40 (axe Genève-Annecy)</strong>&nbsp;:</p>
<p>• Trajet 18 km, durée moyenne <strong>25 minutes</strong> hors pointe, jusqu'à 35-40 minutes aux heures de pointe (7h30-9h, 17h-19h).<br />
• Sortie A40 «&nbsp;Saint-Julien&nbsp;» puis route de Lyon.<br />
• Pour le centre historique&nbsp;: pénétration par la D1206 (rue Amédée-VIII-de-Savoie).<br />
• Pour les Vignes-Rouges et le secteur frontière&nbsp;: route de Lyon puis route de la Frontière.</p>
<p>Pour les déménagements vers/depuis Saint-Julien, nous recommandons une <strong>réservation 3 à 4 semaines à l'avance</strong> (5-6 semaines en juin-septembre). La distance et le risque de trafic A40 imposent une organisation plus stricte qu'en bassin annemassien.</p>`,

    faqEtendue: [
      {
        question: "Faites-vous des déménagements Saint-Julien → Suisse (Plan-les-Ouates, Carouge, Genève) ?",
        reponse:
          "Non, nous n'effectuons pas de déménagements transfrontaliers. Torres Transport intervient côté français uniquement&nbsp;: Saint-Julien-en-Genevois, toute la Haute-Savoie et le reste de la France métropolitaine sur devis. Pour un déménagement vers la Suisse, un déménageur spécialisé dans le transfrontalier sera plus adapté (gestion des démarches douanières).",
      },
      {
        question: "Avec quel délai recommandez-vous de réserver pour Saint-Julien ?",
        reponse:
          "3 à 4 semaines à l'avance hors saison (octobre à mai), 5 à 6 semaines en pleine saison (juin à septembre). Saint-Julien étant à 25 minutes de notre base, nous prévoyons un créneau dédié sans possibilité de double prestation dans la journée pour les maisons.",
      },
      {
        question: 'Le quartier des Vignes-Rouges est récent : comment ça se passe pour vous ?',
        reponse:
          "C'est notre type de zone préférée à Saint-Julien&nbsp;: parkings dédiés, ascenseurs adaptés aux gros volumes, syndics professionnels qui gèrent bien la réservation. Pour ces résidences récentes, comptez un déménagement de F3 en demi-journée à journée complète selon le volume.",
      },
      {
        question: 'Le centre historique de Saint-Julien est complexe : pouvez-vous y intervenir ?',
        reponse:
          "Oui, nous intervenons régulièrement dans le centre historique (rue du Faubourg-Saint-Gervais, place du Crêt). Nous utilisons des camions de 12-15 m³ et nous obtenons l'autorisation de stationnement temporaire de la mairie. Comptez un délai supplémentaire pour cette démarche (5-7 jours ouvrés).",
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
      "Déménageur à Gaillard (74240), à 4 km de notre base. Intervention rapide pour particuliers. Devis gratuit, 20 ans d'expérience.",
    keywords:
      'déménageur Gaillard, déménagement Gaillard 74240, entreprise déménagement Gaillard, déménageur 74240',

    intro: `<strong>Gaillard</strong> est une commune dynamique de 12 000 habitants, située à seulement 4 km de notre base de Ville-la-Grand. Torres Transport intervient quotidiennement à Gaillard pour des déménagements résidentiel pour particuliers, que ce soit dans le quartier de la Gare, les résidences neuves de Mon Idée ou le centre historique.`,

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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Gaillard est <strong>la commune la plus proche de la frontière genevoise</strong> dans le bassin annemassien&nbsp;: le poste-frontière de Moillesulaz s'y trouve, ce qui en fait l'un des points de passage les plus fréquentés de Haute-Savoie. Cette position particulière a façonné l'identité de la commune, marquée par une population de travailleurs frontaliers et une circulation très soutenue aux heures de pointe.</p>
<p>Avec ses <strong>12 000 habitants</strong>, Gaillard est l'une des communes les plus densément peuplées du bassin annemassien. Historiquement plus industrielle (l'usine SNR puis NTN-SNR a longtemps dominé l'économie locale), elle s'est <strong>transformée vers le résidentiel</strong> ces vingt dernières années&nbsp;: l'ancienne friche industrielle de Mon-Idée est devenue un éco-quartier complet, le secteur Bois-des-Frères a accueilli plusieurs nouvelles résidences, et la zone du Châtelet s'est urbanisée.</p>
<p>Cette transformation rapide a un effet direct sur notre métier de déménageur à Gaillard&nbsp;: <strong>forte rotation des locataires</strong> (jeunes actifs et frontaliers qui changent de logement régulièrement), beaucoup de déménagements en milieu d'année (pas seulement en juin-septembre), et des programmes immobiliers récents qui imposent une coordination stricte avec les syndics.</p>`,

    marcheImmobilier: `<p>Le parc immobilier de Gaillard est <strong>dominé par le collectif récent</strong>, ce qui en fait l'une des communes les plus uniformes du bassin pour les déménagements&nbsp;:</p>
<p><strong>1. Mon-Idée</strong>&nbsp;: ancienne friche industrielle devenue éco-quartier avec une dizaine de résidences neuves R+5 à R+7. Ascenseurs grand format, parkings souterrains, syndics qui imposent des protocoles précis. Volume typique d'un T3&nbsp;: 18-22 m³.</p>
<p><strong>2. Bois-des-Frères</strong>&nbsp;: résidences plus modestes (R+3 à R+5), construites entre 2010 et 2020. Standards modernes mais sans la sophistication de Mon-Idée. Beaucoup de frontaliers et de jeunes couples.</p>
<p><strong>3. Le centre-ville et le quartier de la Gare</strong>&nbsp;: collectif plus ancien (années 1960-1980), ascenseurs parfois étroits, rues à sens unique. C'est là qu'on trouve les contraintes logistiques les plus marquées de Gaillard.</p>
<p><strong>4. Pré-Vergat et Pré-Bressan</strong>&nbsp;: secteurs avec quelques pavillons individuels, mais en minorité. Une maison à Gaillard fait rarement plus de 90 m².</p>
<p>Tarif Torres pour une maison à Gaillard&nbsp;: à partir de <strong>1 450 €</strong>.</p>`,

    specificitesLogistiques: `<p>Gaillard a une particularité que peu de communes ont&nbsp;: <strong>la frontière suisse au sud, le centre d'Annemasse au nord</strong>. Cela change beaucoup la logistique.</p>
<p><strong>1. Les pics de circulation frontalière.</strong> Avenue Henri-Barbusse, route de Genève, axes autour de la douane de Moillesulaz&nbsp;: ces voies sont saturées entre 7h30 et 9h le matin (départs vers Genève), et entre 17h et 19h le soir (retours). Pour un déménagement à Gaillard, nous évitons ces créneaux et programmons les interventions en milieu de journée (10h-16h). Cela évite de perdre 30-45 minutes dans les bouchons.</p>
<p><strong>2. La proximité du centre d'Annemasse.</strong> Beaucoup de déménagements Gaillard ↔ Annemasse-centre, souvent pour <strong>de petits volumes</strong> (T2 ou T3 jeunes actifs). On les traite en demi-journée, parfois en quelques heures, sans surcoût.</p>
<p><strong>3. Le ralentisseur de la route d'Annemasse.</strong> Détail pratique connu de nos chauffeurs&nbsp;: la route entre Gaillard et Annemasse-centre a un ralentisseur prononcé au niveau de la zone de l'usine. Avec un camion plein, ça impose une descente à 15 km/h. Petit détail, mais qui change la durée du trajet pour les calculs.</p>
<p><strong>4. La forte densité collective récente.</strong> 70% des biens à Gaillard sont en immeuble collectif. Nos équipes sont à l'aise avec les protocoles ascenseur, les créneaux de réservation syndic, et la coordination avec les gardiens.</p>`,

    accesItineraire: `<p>Depuis notre base de Ville-la-Grand, Gaillard est à <strong>4 km, soit 8 à 12 minutes en camion</strong> selon la circulation et le quartier visé&nbsp;:</p>
<p>• <strong>Mon-Idée et Bois-des-Frères</strong>&nbsp;: 7 minutes par la rue de la Fontaine et l'avenue des Vignes.<br />
• <strong>Centre-ville et Gare</strong>&nbsp;: 10 minutes par l'avenue Léon-Blum.<br />
• <strong>Pré-Vergat et Pré-Bressan</strong>&nbsp;: 12 minutes par la route d'Annemasse puis l'avenue de Genève.</p>
<p>Cette proximité immédiate <strong>limite vraiment les frais de déplacement</strong>&nbsp;: pour un studio ou T2, le surcoût lié au trajet est négligeable. Nos tarifs Gaillard sont d'ailleurs très proches de ceux d'Annemasse (+20 à +50€ selon le volume).</p>`,

    faqEtendue: [
      {
        question: 'Faites-vous des déménagements Gaillard vers la Suisse via Moillesulaz ?',
        reponse:
          "Non, Torres Transport n'intervient pas en Suisse. Nous nous concentrons sur la France métropolitaine, principalement la Haute-Savoie et les départements voisins. Pour un déménagement vers Genève ou les communes suisses voisines de Gaillard, un déménageur transfrontalier spécialisé sera plus adapté pour gérer les démarches douanières.",
      },
      {
        question: "Mon-Idée a beaucoup de résidences neuves : comment se passe la coordination avec les syndics ?",
        reponse:
          "Mon-Idée est un secteur que nous connaissons bien. Pour les résidences récentes (résidence Mon-Idée, Le Carré Vert, etc.), nous contactons le gardien ou le syndic 5-7 jours avant pour réserver l'ascenseur (créneau 2-3 heures) et obtenir le protocole de protection. Tout est inclus dans la prestation.",
      },
      {
        question: 'Combien coûte un déménagement Gaillard vers Annemasse pour un T2 ?',
        reponse:
          "Pour un T2 (environ 12-15 m³), comptez 450 à 550€ pour un trajet Gaillard → Annemasse en demi-journée. Le tarif inclut le démontage léger des meubles, le transport, et le remontage. Si la résidence à Gaillard ou Annemasse a des contraintes spécifiques (sans ascenseur, autorisation mairie), un ajustement est possible.",
      },
      {
        question: "Le quartier du Châtelet est en pleine évolution : pouvez-vous y intervenir ?",
        reponse:
          "Oui. Le secteur du Châtelet a vu plusieurs livraisons récentes (résidences 2022-2024). Nos camions accèdent sans problème à toutes ces nouvelles adresses. Pour les premières années suivant la livraison, les syndics imposent souvent des protocoles stricts de protection des parties communes — nous les respectons systématiquement.",
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
      { nom: 'Publier', slug: 'publier' },
      { nom: 'Anthy-sur-Léman', slug: 'anthy-sur-leman' },
      { nom: 'Sciez', slug: 'sciez' },
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
      { nom: 'Publier', slug: 'publier' },
      { nom: 'Thonon-les-Bains', slug: 'thonon-les-bains' },
      { nom: 'Anthy-sur-Léman', slug: 'anthy-sur-leman' },
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

    intro: `<strong>Bonneville</strong>, sous-préfecture de Haute-Savoie, est la porte d'entrée de la vallée de l'Arve. Cette ville de 12 500 habitants attire une population résidentielle stable. Torres Transport intervient à Bonneville (25 km de notre base) pour les déménagements de particuliers, du studio à la maison familiale.`,

    pourquoiNous: `Bonneville et la vallée de l'Arve ont une <strong>logistique particulière</strong> : axes routiers chargés (A40), proximité immédiate avec les communes environnantes (Cluses, Marnaz, Scionzier). Nous savons composer avec les contraintes de circulation en heure de pointe pour livrer les déménagements particuliers dans les meilleurs délais.`,

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
        question: "Quels sont les délais d'intervention sur Bonneville ?",
        reponse:
          "Sous 24-48h pour les urgences. Pour les déménagements planifiés, nous recommandons une réservation 2 à 4 semaines à l'avance, surtout en haute saison juin-septembre.",
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
          "Oui, débarras de caves, greniers, garages, appartements et maisons à Bonneville et alentours. Tri sélectif, recyclage et dons aux associations locales du Faucigny.",
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
    bannier: '/banner-annecy.webp',

    titreH1: 'Déménagement à Annecy (74000) · Préfecture de Haute-Savoie',
    metaTitle: 'Déménageur Annecy · Tarif 47,50 €/m³ tout compris | Torres Transport',
    metaDescription:
      "Déménagement à Annecy (74000) par Torres Transport, déménageur professionnel Haute-Savoie. Tarif transparent 47,50 €/m³, équipe locale, devis gratuit 24h. Annecy-le-Vieux, Cran-Gevrier, Seynod inclus.",
    keywords:
      'déménagement Annecy, déménageur Annecy, déménagement Annecy 74000, entreprise déménagement Annecy, déménagement Annecy-le-Vieux, déménageur Cran-Gevrier, déménagement pas cher Annecy, transport meubles Annecy',

    intro: `Vous cherchez un <strong>déménageur à Annecy</strong> ? <strong>Torres Transport</strong> propose un service complet de <strong>déménagement à Annecy (74000)</strong> : la préfecture de Haute-Savoie, "Venise des Alpes", concentre 130 000 habitants et est l'un des bassins économiques les plus dynamiques de France. Nous intervenons à Annecy (à 45 km de notre base de Ville-la-Grand) pour répondre à la <strong>forte demande de déménagements résidentiels</strong> liée à la pression démographique et économique. Nous accompagnons aussi bien les déménagements vers les nouveaux quartiers (Annecy-le-Vieux, Cran-Gevrier, Meythet, Pringy, Seynod) que les transferts entre Annecy et le bassin annemassien. <strong>Tarif transparent 47,50 €/m³ tout compris</strong>, devis ferme sous 24 h.`,

    pourquoiNous: `Annecy a vu son urbanisation exploser depuis la fusion des communes en 2017 (Annecy-le-Vieux, Cran-Gevrier, Meythet, Pringy, Seynod). Cette <strong>"nouvelle Annecy" de 130 000 habitants</strong> a des besoins de déménagement constants : étudiants à la rentrée, jeunes actifs en mobilité, familles qui s'agrandissent. Choisir un <strong>déménageur Annecy local et indépendant</strong> comme Torres Transport, c'est s'assurer un déménagement sans sous-traitance, avec une équipe qui connaît les contraintes de la ville : rues piétonnes de la vieille ville, parkings éloignés près du lac, contraintes des bâtisses anciennes du centre historique. Notre maîtrise de l'ensemble du département Haute-Savoie nous permet de gérer aussi bien les déménagements internes à Annecy que les transferts vers Lyon, Chambéry ou plus loin en France.`,

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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Étrembières est probablement <strong>la commune la plus contrastée du bassin annemassien</strong>. Avec seulement 1 900 habitants répartis sur trois entités très différentes — le Pas-de-l'Échelle en plaine, le village d'Étrembières accroché aux pentes du Salève, et la ZAC du Mont-Blanc à l'est —, elle concentre toutes les configurations possibles d'un déménagement haut-savoyard sur un territoire minuscule.</p>
<p>Historiquement, Étrembières est un <strong>village savoyard ancien</strong> qui doit beaucoup à sa position au pied du Salève (le téléphérique du Salève partant de Veyrier en Suisse arrive face au village). Pendant longtemps, la commune est restée à l'écart de l'urbanisation rapide de la plaine. Depuis 2000, la <strong>ZAC du Mont-Blanc</strong> — vaste zone commerciale et résidentielle développée à la limite avec Annemasse et Gaillard — a totalement changé sa physionomie démographique.</p>
<p>Pour un déménageur, intervenir à Étrembières signifie souvent <strong>changer de monde en 2 km</strong>&nbsp;: passer d'un appartement neuf de la ZAC au village haut, c'est passer d'une logistique standard à une intervention quasi de montagne.</p>`,

    marcheImmobilier: `<p>Le parc immobilier d'Étrembières est <strong>extrêmement hétérogène</strong> pour une si petite commune&nbsp;:</p>
<p><strong>1. La ZAC du Mont-Blanc</strong>&nbsp;: résidences récentes (2010-2020), R+4 à R+6, ascenseurs adaptés, parkings souterrains. Profil de résident&nbsp;: jeunes cadres frontaliers. Volume moyen d'un T3&nbsp;: 18-22 m³. Tarif Torres&nbsp;: 780€ pour un F2/F3.</p>
<p><strong>2. Le Pas-de-l'Échelle</strong>&nbsp;: zone résidentielle mixte, quelques pavillons, quelques petits collectifs anciens. Profil très familial. Tarif maison&nbsp;: à partir de 1 550 €.</p>
<p><strong>3. Le village d'Étrembières</strong>&nbsp;: <strong>maisons anciennes</strong> en pierre, certaines remontant au 19ème siècle, sur les pentes du Salève. Rues étroites, accès parfois nécessitant des camions de 12 m³ maximum. Volume typique d'une maison de village&nbsp;: 25-35 m³.</p>
<p><strong>4. La plaine de l'Arve</strong>&nbsp;: zone agricole en voie d'urbanisation, quelques pavillons récents construits ces dernières années.</p>`,

    specificitesLogistiques: `<p>Étrembières demande une <strong>vraie planification par quartier</strong> avant tout déménagement&nbsp;:</p>
<p><strong>1. Le village haut.</strong> Les rues du village historique sont étroites, parfois en lacets, avec des accès limités à des camions de 12-15 m³ maximum. Pour les volumes importants (maison entière), on procède par navette&nbsp;: déchargement intermédiaire sur la place du village, puis transbordement dans des véhicules plus petits jusqu'à l'adresse finale. Cette manipulation est facturée mais évite les blocages.</p>
<p><strong>2. Le téléphérique du Salève.</strong> La gare basse du téléphérique se trouve juste à la frontière, sur le territoire d'Étrembières. La route d'accès peut être encombrée les weekends ensoleillés (touristes suisses). On évite ce secteur les samedis et dimanches en haute saison.</p>
<p><strong>3. La ZAC Mont-Blanc.</strong> Zone commerciale dense avec circulation soutenue. Pour les déménagements résidentiels dans la zone, on privilégie les créneaux matinaux (avant 9h) pour éviter les flux du centre commercial Géant Casino et des autres enseignes.</p>
<p><strong>4. La proximité immédiate avec Annemasse, Gaillard et Ville-la-Grand.</strong> Étrembières partage souvent ses déménageurs avec ses voisines. Pour nous, c'est un trajet de 5-7 minutes maximum, comparable à un déménagement intra-Annemasse.</p>`,

    accesItineraire: `<p>Depuis notre base de Ville-la-Grand, Étrembières est à <strong>3 km, soit 7 à 10 minutes</strong>&nbsp;:</p>
<p>• <strong>ZAC du Mont-Blanc</strong>&nbsp;: 6 minutes via l'avenue Émile-Zola puis l'avenue de la Roche-sur-Foron.<br />
• <strong>Pas-de-l'Échelle</strong>&nbsp;: 8 minutes par la D907 (avenue de la République).<br />
• <strong>Village d'Étrembières</strong>&nbsp;: 10 minutes via la D907 puis la route du Salève (lacets en montée).</p>
<p>Cette proximité fait d'Étrembières l'une de nos zones d'intervention les plus rapides. Aucun frais kilométrique appliqué, et possibilité d'intervention le jour même pour les urgences. Pour les déménagements vers le <strong>village haut</strong>, prévoir <strong>30 minutes de plus</strong> dans la durée totale&nbsp;: les rues étroites imposent un débit plus lent et parfois des manœuvres délicates.</p>`,

    faqEtendue: [
      {
        question: "Mes parents habitent dans le village haut d'Étrembières (rue étroite) : pouvez-vous accéder ?",
        reponse:
          "Oui, mais avec des camions de 12 à 15 m³ maximum (pas nos 30 m³). Pour les volumes importants, nous procédons par navette&nbsp;: déchargement intermédiaire sur la place du village, puis transbordement dans des véhicules plus petits. Cette opération ajoute environ 30-45 minutes au déménagement mais évite les blocages dans les rues étroites.",
      },
      {
        question: 'La ZAC du Mont-Blanc est commerciale : ça pose problème pour déménager là-bas ?',
        reponse:
          "Pas du tout — c'est même l'un des secteurs les plus simples à déménager d'Étrembières. Les résidences sont récentes (ascenseurs adaptés, parkings souterrains, syndics professionnels). Le seul ajustement&nbsp;: nous privilégions les créneaux matinaux (avant 9h) pour éviter la circulation du centre commercial Géant Casino et des autres enseignes.",
      },
      {
        question: "Y a-t-il un risque que la route du Salève soit bloquée par la neige ?",
        reponse:
          "C'est rare mais possible en janvier-février. La route du Salève (D45) qui mène vers le village haut peut être verglacée par fortes intempéries. Nous suivons les bulletins Météo France et reportons éventuellement un déménagement de 24-48h si la sécurité de nos équipes ou de votre mobilier est compromise. Aucun frais supplémentaire en cas de report météo.",
      },
      {
        question: "Quels sont les délais à prévoir pour un déménagement à Étrembières ?",
        reponse:
          "Pour un appartement (ZAC Mont-Blanc, Pas-de-l'Échelle), demi-journée à journée complète selon le volume. Pour une maison de village haut, comptez une journée et demie minimum&nbsp;: les contraintes d'accès aux ruelles en pente ajoutent du temps, parfois une navette intermédiaire. Pour les urgences, intervention possible sous 24h depuis notre base de Ville-la-Grand à 3 km.",
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
      "Déménageur à Vétraz-Monthoux (74100), 7 400 habitants, limitrophe d'Annemasse. Le Genevray, Brénaz, Jaillet. Base Ville-la-Grand à 3 km. Devis 24h.",
    keywords:
      'déménageur Vétraz-Monthoux, déménagement Vétraz-Monthoux 74100, déménageur Le Genevray, déménagement entre Annemasse Vétraz, déménageur 74100',

    intro: `<strong>Vétraz-Monthoux</strong> est une commune résidentielle de <strong>7 400 habitants</strong> directement collée à l'est d'Annemasse, et l'une des destinations préférées des familles qui veulent quitter le centre dense d'Annemasse pour une zone pavillonnaire calme. Pour Torres Transport, c'est un <strong>territoire quasi quotidien</strong> : nos camions y passent toutes les semaines pour des déménagements résidentiels.`,

    pourquoiNous: `Vétraz-Monthoux a une particularité : <strong>une grande majorité de pavillons individuels</strong> (Le Genevray, Brénaz, Jaillet, Romagny côté Annemasse), donc des accès véhicules plutôt simples, des distances de portage modérées, et peu de problématiques d'ascenseur ou d'étages élevés. C'est l'inverse exact d'Annemasse-centre. Idéal pour les déménagements de familles qui s'agrandissent.`,

    quartiers: [
      'Le Genevray',
      'Brénaz',
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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Vétraz-Monthoux est <strong>la commune des familles qui s'installent durablement</strong>. Située directement à l'est d'Annemasse, séparée de la ville-centre uniquement par une frontière administrative (les habitants disent souvent «&nbsp;c'est juste de l'autre côté&nbsp;»), elle a vu sa population croître régulièrement depuis trente ans pour atteindre <strong>7 400 habitants</strong>.</p>
<p>Issu de la fusion des deux anciens villages de Vétraz et Monthoux, le territoire a longtemps gardé son caractère <strong>essentiellement agricole et pavillonnaire</strong>. Là où Annemasse densifiait verticalement, Vétraz-Monthoux a privilégié le développement horizontal&nbsp;: lotissements, maisons individuelles, petits collectifs de 2 ou 3 étages maximum. Le résultat&nbsp;: une commune calme, verte, familiale, devenue l'une des destinations privilégiées des couples qui agrandissent leur famille et quittent les T3-T4 d'Annemasse pour des maisons.</p>
<p>Cette typologie a un effet direct sur le métier de déménageur à Vétraz-Monthoux&nbsp;: <strong>volumes plus importants</strong> qu'à Annemasse (maisons entières plutôt qu'appartements), <strong>moins de contraintes logistiques</strong> (parkings privés, rues larges), et beaucoup de déménagements <strong>Annemasse → Vétraz</strong> que nous gérons en demi-journée vu la proximité.</p>`,

    marcheImmobilier: `<p>Le parc immobilier de Vétraz-Monthoux est dominé à <strong>plus de 80% par le pavillonnaire</strong>&nbsp;:</p>
<p><strong>1. Maisons individuelles</strong> dans Le Genevray, Brénaz, Jaillet&nbsp;: constructions des années 1970-2000, terrains de 500 à 1 200 m², volumes domestiques entre <strong>30 et 50 m³</strong> pour une famille avec enfants. Accès véhicule simple dans tous les cas. Tarif Torres pour une maison standard&nbsp;: à partir de 1 550 €.</p>
<p><strong>2. Lotissements récents</strong>&nbsp;: programmes pavillonnaires modernes (2010-2025) avec des standards de construction supérieurs. Souvent des familles de cadres frontaliers. Volumes parfois plus importants (50+ m³ avec garage, mobilier de jardin, équipement extérieur).</p>
<p><strong>3. Petits collectifs</strong> en minorité, principalement dans Romagny (côté limitrophe Annemasse) et le centre village. Maximum R+3, ascenseurs adaptés mais parfois absents pour les anciens immeubles. Volumes typiques&nbsp;: T2-T3 entre 12 et 22 m³.</p>
<p>Vétraz-Monthoux a le <strong>meilleur ratio prix-au-mètre carré</strong> du bassin annemassien pour le pavillonnaire, ce qui explique l'attractivité auprès des familles.</p>`,

    specificitesLogistiques: `<p>Vétraz-Monthoux est <strong>l'une de nos zones d'intervention les plus simples logistiquement</strong>&nbsp;:</p>
<p><strong>1. Des accès véhicule excellents.</strong> 90% des biens disposent d'un parking privé ou d'une rue large permettant un stationnement immédiat de nos camions, même les 30 m³. Aucune autorisation municipale nécessaire dans la grande majorité des cas — contrairement à Annemasse où c'est la règle.</p>
<p><strong>2. Des volumes importants à anticiper.</strong> Une maison à Vétraz avec garage et jardin contient typiquement 35-50 m³. C'est largement plus qu'un T3 d'Annemasse (15-20 m³). Pour ces déménagements, nous prévoyons <strong>un camion de 40 m³ et deux à trois manutentionnaires</strong>, parfois sur deux jours.</p>
<p><strong>3. La gestion du mobilier de jardin et de l'équipement extérieur.</strong> Tondeuse, barbecue, mobilier de jardin, vélos, salon de jardin&nbsp;: ces éléments occupent du volume mais sont parfois oubliés dans l'estimation initiale. Lors de notre visite gratuite, nous vérifions systématiquement ces zones.</p>
<p><strong>4. La proximité avec Cranves-Sales et Annemasse-Romagny.</strong> Beaucoup d'allers-retours entre ces communes voisines. Pour un déménagement Vétraz → Annemasse (un cas typique de jeune couple qui retourne en ville), <strong>la demi-journée suffit</strong> pour un T2-T3.</p>`,

    accesItineraire: `<p>Depuis notre base de Ville-la-Grand, Vétraz-Monthoux est à <strong>3 km, soit 7 à 10 minutes</strong>&nbsp;:</p>
<p>• <strong>Le Genevray</strong>&nbsp;: 7 minutes via la rue du Levant.<br />
• <strong>Brénaz et Jaillet</strong>&nbsp;: 9 minutes par l'avenue de la Libération.<br />
• <strong>Centre village et Romagny</strong>&nbsp;: 10 minutes par la D907.</p>
<p>Cette proximité fait de Vétraz-Monthoux une de nos zones où les tarifs sont identiques à Annemasse, sans surcoût kilométrique. Pour les déménagements <strong>intra-Vétraz</strong> (changement de quartier au sein de la commune), comptez 5 à 10 minutes de trajet en camion maximum. Possibilité d'intervention le jour même en cas d'urgence.</p>`,

    faqEtendue: [
      {
        question: 'Notre maison à Vétraz a un grand jardin et une terrasse aménagée : tout est inclus ?',
        reponse:
          "Oui, à condition que nous le sachions à l'estimation. Mobilier de jardin, barbecue, tondeuse, vélos, salon extérieur, jeux d'enfants : tout fait partie du volume à transporter. Lors de notre visite gratuite, nous chiffrons tout, intérieur ET extérieur. C'est le principal piège des devis basiques qui oublient ces équipements.",
      },
      {
        question: "Combien de temps pour un déménagement Annemasse → Vétraz-Monthoux ?",
        reponse:
          "Pour un T2-T3 (12-22 m³), demi-journée suffit. Pour une maison (30-50 m³), une journée complète. La proximité fait qu'il n'y a quasiment pas de temps mort entre départ et arrivée — c'est l'un de nos trajets les plus efficaces.",
      },
      {
        question: 'Faites-vous le démontage / remontage de cuisines équipées et placards sur mesure ?',
        reponse:
          "Oui, c'est inclus dans la prestation déménagement (sauf cuisine équipée intégrée qui nécessite un cuisiniste). Pour les placards Ikea/Conforama, dressing sur mesure, lits à montage complexe, étagères murales — nous démontons à l'origine et nous remontons à l'arrivée. Beaucoup de pavillons à Vétraz ont des aménagements sur mesure que nous gérons en routine.",
      },
      {
        question: "L'hiver à Vétraz-Monthoux peut être rude (gel, parfois neige) : ça impacte vos prestations ?",
        reponse:
          "Rarement. La plupart des routes de Vétraz sont salées et déneigées par la commune en cas d'épisode. Si vraiment les conditions sont dangereuses (verglas généralisé), nous reportons sans frais de 24-48h. Cela arrive 1 à 2 fois par hiver maximum.",
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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Cranves-Sales est <strong>une commune en deux temps</strong>. Pendant longtemps, elle est restée un village rural d'altitude (avec ses hameaux historiques Laplagne, Borly, Veluz suspendus sur les premières pentes des Voirons), à l'écart de l'effervescence du bassin annemassien. Puis, ces vingt dernières années, le secteur de <strong>Mépaillat en plaine</strong> a accueilli vague après vague de pavillons et de petits collectifs, transformant la commune en l'une des <strong>plus dynamiques en croissance</strong> du bassin.</p>
<p>Avec ses <strong>6 500 habitants</strong>, Cranves-Sales offre quelque chose que peu d'autres communes proches d'Annemasse proposent&nbsp;: la <strong>vue panoramique sur le Salève et les Voirons</strong>, un cadre nature préservé, et l'accès rapide aux services d'Annemasse en moins de 10 minutes. C'est l'argument numéro un des jeunes familles qui s'y installent.</p>
<p>Pour notre métier, déménager à Cranves-Sales signifie souvent <strong>passer d'un environnement urbain à un environnement quasi-rural</strong>&nbsp;: les hameaux historiques imposent des contraintes que peu de déménageurs anticipent correctement.</p>`,

    marcheImmobilier: `<p>Le marché immobilier de Cranves-Sales se segmente clairement en deux mondes&nbsp;:</p>
<p><strong>1. La plaine (Mépaillat, centre village)</strong>&nbsp;: pavillons modernes (2000-2025) et petits collectifs récents. Standards constructifs élevés, parkings privés, accès véhicule excellent. Volumes typiques d'une maison&nbsp;: 30-45 m³. Tarif Torres pour une maison plaine&nbsp;: à partir de 1 600 €.</p>
<p><strong>2. Les hameaux d'altitude (Veluz, Laplagne, Borly)</strong>&nbsp;: <strong>maisons anciennes savoyardes</strong>, parfois rénovées, parfois encore dans leur jus, accessibles par des routes étroites et sinueuses. Volumes très variables (15 à 40 m³ selon l'état). Tarif majoré&nbsp;: à partir de 1 800 € pour une maison équivalente en hameau, vu la contrainte logistique.</p>
<p><strong>3. Quelques lotissements neufs</strong> côté Mépaillat (2018-2024)&nbsp;: profil cadre frontalier, volumes importants (40+ m³ avec garage, jardin équipé). Souvent un premier achat après location à Annemasse-centre.</p>
<p>Cette dualité plaine/hauteur explique nos écarts de tarifs à Cranves-Sales&nbsp;: un déménagement à Mépaillat coûte le même prix qu'à Annemasse, mais à Laplagne ou Borly, comptez 15-20% de plus à cause de la complexité d'accès.</p>`,

    specificitesLogistiques: `<p>Cranves-Sales est <strong>la commune palier 1 où la logistique change le plus selon le quartier</strong>. Voici ce qu'on anticipe systématiquement&nbsp;:</p>
<p><strong>1. L'accès aux hameaux d'altitude.</strong> Les routes vers Laplagne et Borly montent en lacets sur les premières pentes des Voirons. Largeur de chaussée limitée par endroits, virages serrés, parfois sans possibilité de croiser un autre véhicule. Nos camions 30 m³ <strong>n'y vont pas</strong>&nbsp;: on utilise des 12 ou 15 m³, parfois avec navette si le volume dépasse 25 m³.</p>
<p><strong>2. La météo hivernale.</strong> Décembre à mars, les hameaux d'altitude peuvent être impactés par la neige ou le verglas. Nous suivons les bulletins Météo France et reportons si nécessaire, sans frais. Cette précaution évite les blocages et les risques pour le mobilier.</p>
<p><strong>3. Mépaillat en plaine.</strong> Aucune contrainte particulière. Accès véhicule libre, parkings privés, syndics dans les rares résidences collectives. Le secteur le plus simple de Cranves-Sales.</p>
<p><strong>4. Les nouveaux lotissements.</strong> Pour les programmes récents (résidence Les Hauts de Cranves, lotissements Mépaillat-Nord), les accès véhicule sont pensés pour les déménagements. Aucun protocole particulier au-delà des bonnes pratiques (protection sol, ascenseur si bâtiment).</p>`,

    accesItineraire: `<p>Depuis notre base de Ville-la-Grand, Cranves-Sales est à <strong>5 km, soit 10 à 15 minutes</strong> selon le quartier&nbsp;:</p>
<p>• <strong>Mépaillat</strong>&nbsp;: 10 minutes par la D907 puis l'avenue de la Libération.<br />
• <strong>Centre village</strong>&nbsp;: 12 minutes.<br />
• <strong>Veluz</strong>&nbsp;: 14 minutes (mi-hauteur).<br />
• <strong>Laplagne et Borly</strong>&nbsp;: 18 à 22 minutes selon les conditions de route (montée en lacets).</p>
<p>Pour les déménagements <strong>en hauteur</strong>, nous prévoyons <strong>30 minutes supplémentaires</strong> dans la durée totale&nbsp;: la montée freine le rythme et les manœuvres d'accès demandent du temps. Pour les volumes importants vers Laplagne ou Borly, nous procédons par navette&nbsp;: déchargement intermédiaire sur la place du hameau, puis transbordement vers l'adresse finale.</p>`,

    faqEtendue: [
      {
        question: 'Nous habitons Laplagne (hameau en hauteur) : pouvez-vous nous déménager ?',
        reponse:
          "Oui, c'est notre quotidien à Cranves-Sales. Nous utilisons des camions de 12 à 15 m³ adaptés aux routes étroites des hameaux. Pour les gros volumes, nous procédons par navette&nbsp;: déchargement intermédiaire sur la place du hameau, puis transbordement vers votre adresse. Tarif majoré de 15-20% vs un déménagement en plaine, ce qui correspond au temps supplémentaire requis.",
      },
      {
        question: "Les nouveaux lotissements de Mépaillat sont-ils faciles d'accès ?",
        reponse:
          "Très simples. Ces lotissements ont été conçus avec des accès véhicule larges, des parkings privés pour les résidents, et des trottoirs adaptés. Pas de contrainte de stationnement, pas d'autorisation municipale, créneaux flexibles. C'est l'un des secteurs les plus faciles à déménager du bassin annemassien.",
      },
      {
        question: "Avez-vous l'habitude de déménager des seniors qui quittent leur maison de Cranves pour un appartement ?",
        reponse:
          "Oui, c'est un cas fréquent. Beaucoup de propriétaires âgés quittent leur maison de Cranves pour s'installer en appartement à Annemasse, plus pratique pour les déplacements. Nous appliquons notre tarif sénior/PMR (-10%) et nous portons une attention particulière au tri préalable&nbsp;: souvent une maison de 35 m³ devient 18 m³ après tri. Notre service débarras peut compléter la prestation.",
      },
      {
        question: 'Combien de temps prévoir pour un déménagement maison à Cranves-Sales ?',
        reponse:
          "Pour une maison en plaine (Mépaillat), comptez une journée complète. Pour une maison en hauteur (Veluz, Laplagne, Borly), une journée et demie à deux jours selon le volume. La contrainte d'accès et la navette éventuelle ajoutent du temps mais garantissent un déménagement sécurisé pour vos biens.",
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

    intro: `<strong>Ambilly</strong> est cette petite commune dense de <strong>7 000 habitants</strong> directement collée à Annemasse, à 2 km de notre base. Petit territoire mais forte densité urbaine, beaucoup d'immeubles collectifs et de jeunes actifs. Torres Transport y déménage très régulièrement des familles et des jeunes actifs.`,

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

    // -------- ENRICHISSEMENTS PALIER 1 (contenu SEO unique) --------
    histoire: `<p>Ambilly est <strong>la plus discrète des trois communes du tripoint annemassien</strong>. Avec ses <strong>7 000 habitants</strong> sur seulement 1,2 km² (l'une des plus petites superficies du département), elle forme avec Annemasse et Ville-la-Grand un continuum urbain quasiment indissociable visuellement. Beaucoup d'habitants ne savent même pas où s'arrête Annemasse et où commence Ambilly.</p>
<p>Historiquement, Ambilly est une <strong>commune ouvrière</strong> née avec l'industrialisation du bassin annemassien au début du 20ème siècle. Le quartier des Eaux-Vives en est le témoin&nbsp;: un secteur dense d'immeubles collectifs des années 1950-1970, longtemps populaires, désormais en lente requalification. Plus récemment, le secteur des <strong>Mélézins</strong> a vu pousser plusieurs programmes neufs qui changent la physionomie de la commune.</p>
<p>Pour un déménageur, Ambilly est <strong>statistiquement la commune où nous avons le plus de demandes de jeunes actifs frontaliers</strong>&nbsp;: prix attractifs, proximité immédiate avec Annemasse, accès Léman Express via la gare voisine. Beaucoup de T2-T3, beaucoup de rotation locative, des déménagements souvent rapides.</p>`,

    marcheImmobilier: `<p>Le parc immobilier d'Ambilly est <strong>massivement dominé par le collectif</strong>&nbsp;: près de 85% des biens sont en immeuble (contre 70% à Annemasse et 30% à Vétraz-Monthoux).</p>
<p><strong>1. Le centre et les Eaux-Vives</strong>&nbsp;: collectif ancien des années 1950-1970, immeubles R+3 à R+5. Ascenseurs souvent <strong>étroits et anciens</strong>, parfois absents pour les immeubles d'avant 1960. Rues étroites en sens unique, parkings rares. C'est ici qu'on rencontre les contraintes logistiques les plus marquées d'Ambilly. Volumes typiques&nbsp;: T2-T3 entre 12 et 20 m³.</p>
<p><strong>2. Le secteur des Mélézins</strong>&nbsp;: résidences récentes (2010-2025), ascenseurs adaptés aux gros volumes, parkings souterrains, syndics professionnels. Profil de résident&nbsp;: cadres frontaliers, jeunes couples. Le secteur le plus simple à déménager d'Ambilly.</p>
<p><strong>3. Quelques maisons individuelles</strong>&nbsp;: rares, souvent anciennes (avant 1950), en bord de commune. Volumes très variables.</p>
<p>Tarif Torres pour un déménagement à Ambilly&nbsp;: à partir de <strong>380 € pour un studio, 780 € pour un F2/F3, 1 550 € pour une maison</strong>. Identique à Annemasse vu la proximité (2 km).</p>`,

    specificitesLogistiques: `<p>Ambilly cumule des contraintes liées à sa <strong>densité urbaine</strong> qu'il faut absolument anticiper&nbsp;:</p>
<p><strong>1. Les ascenseurs étroits du collectif ancien.</strong> Dans les immeubles d'Ambilly-centre, beaucoup d'ascenseurs ne dépassent pas <strong>0,80 m × 1,20 m</strong>. Les armoires, frigos américains, canapés convertibles n'y passent pas. Nous démontons systématiquement le mobilier volumineux en pièces, ou nous le faisons passer par les escaliers — ce qui demande plus de manutentionnaires et plus de temps.</p>
<p><strong>2. Les rues étroites du centre.</strong> Rue de la Paix, rue des Œillets, rue Etienne-Dolet&nbsp;: rues à sens unique parfois sans aucune possibilité de stationner un utilitaire. Pour ces adresses, nous demandons une autorisation municipale de stationnement temporaire (gratuit, 5-7 jours ouvrés).</p>
<p><strong>3. Le marché du jeudi matin.</strong> Le marché hebdomadaire d'Ambilly se tient sur la place de la Mairie, bloquant la circulation et le stationnement jusqu'à 13h. Nous évitons les interventions ce jour-là dans les rues adjacentes, ou nous programmons après 14h.</p>
<p><strong>4. Le secteur Mélézins.</strong> À l'inverse du centre, c'est le secteur le plus simple&nbsp;: parkings dédiés, ascenseurs adaptés, syndics qui gèrent en routine la réservation pour les déménagements.</p>`,

    accesItineraire: `<p>Depuis notre base de Ville-la-Grand, Ambilly est à <strong>2 km, soit 5 à 8 minutes</strong>&nbsp;:</p>
<p>• <strong>Centre et Eaux-Vives</strong>&nbsp;: 5 minutes par l'avenue de la Libération.<br />
• <strong>Mélézins</strong>&nbsp;: 7 minutes par l'avenue Jules-Ferry.<br />
• <strong>Quartier de la Mairie / Piscine</strong>&nbsp;: 8 minutes.</p>
<p>Cette proximité fait d'Ambilly l'une de nos zones les plus rapides à servir. Aucun frais kilométrique, possibilité d'intervention le jour même pour les urgences. Pour les déménagements <strong>Annemasse ↔ Ambilly</strong> (cas très fréquent vu la proximité), demi-journée suffit pour un T2-T3.</p>`,

    faqEtendue: [
      {
        question: "L'ascenseur de mon immeuble Eaux-Vives est minuscule : comment vous gérez ça ?",
        reponse:
          "C'est notre quotidien à Ambilly. Pour les ascenseurs étroits (souvent 0,80 × 1,20 m dans le collectif ancien d'Ambilly-centre), nous démontons systématiquement le mobilier volumineux en pièces&nbsp;: lits, armoires, canapés convertibles, frigos américains. C'est plus long que par un ascenseur grand format, mais ça évite les dégâts. Nos manutentionnaires sont formés au démontage IKEA, Conforama, BUT et marques équivalentes.",
      },
      {
        question: "Travaillez-vous le jeudi à Ambilly malgré le marché ?",
        reponse:
          "Pour les rues adjacentes au marché de la place de la Mairie, non avant 14h&nbsp;: la circulation et le stationnement sont totalement bloqués. Pour les autres quartiers (Mélézins, Eaux-Vives côté piscine), oui sans restriction. Nous le signalons dès l'estimation pour ne pas créer de mauvaise surprise.",
      },
      {
        question: "Faites-vous des déménagements Ambilly → Annemasse ou inversement souvent ?",
        reponse:
          "Très souvent. C'est même l'un de nos trajets les plus fréquents&nbsp;: changements d'appartement à 1-2 km de distance, jeunes couples qui quittent leur premier T2 d'Ambilly pour un T3 à Annemasse-Chablais-Parc, etc. Pour ces trajets très courts, demi-journée suffit, et nous appliquons souvent une remise (-10 à -15%) car le déplacement camion est négligeable.",
      },
      {
        question: 'Les résidences Mélézins sont-elles compatibles avec vos camions 30 m³ ?',
        reponse:
          "Oui sans problème. Les Mélézins sont parmi les résidences les plus récentes du bassin annemassien&nbsp;: voirie large, parkings d'accès dédiés pour les déménagements, ascenseurs grand format. C'est l'idéal pour une intervention rapide. Aucune contrainte particulière à anticiper.",
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
      { nom: 'Bons-en-Chablais', slug: 'bons-en-chablais' },
      { nom: 'Douvaine', slug: 'douvaine' },
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

  // ------------------------------------------------------------------
  // BONS-EN-CHABLAIS, carrefour du Bas-Chablais (74890)
  // ------------------------------------------------------------------
  'bons-en-chablais': {
    slug: 'bons-en-chablais',
    nom: 'Bons-en-Chablais',
    codePostal: '74890',
    departement: 'Haute-Savoie',
    geo: { lat: 46.265, lng: 6.367 },
    distanceKm: 18,
    population: '7 000 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Bons-en-Chablais (74890), carrefour du Chablais',
    metaTitle: "Déménageur Bons-en-Chablais (74890) | Torres Transport",
    metaDescription:
      "Déménageur à Bons-en-Chablais (74890). 7 000 habitants, carrefour Annemasse-Thonon. Service complet pour particuliers, 20 ans d'expérience, devis 24h.",
    keywords:
      'déménageur Bons-en-Chablais, déménagement Bons-en-Chablais 74890, déménageur Chablais, déménageur 74890',

    intro: `<strong>Bons-en-Chablais</strong> est ce <strong>carrefour stratégique</strong> du Bas-Chablais, à mi-chemin entre Annemasse et Thonon-les-Bains. Avec ses <strong>7 000 habitants</strong> et son tissu résidentiel en pleine expansion (lotissements neufs, maisons individuelles, anciennes fermes rénovées), la commune attire des familles à la recherche d'un cadre village avec accès rapide aux axes routiers. Torres Transport intervient à Bons-en-Chablais pour <strong>déménagements résidentiels complets</strong>, depuis notre base de Ville-la-Grand à 18 km.`,

    pourquoiNous: `Bons-en-Chablais a une <strong>configuration mixte</strong> qui demande une bonne connaissance terrain : le centre village avec ses rues parfois étroites autour de l'église et du Tonkin, les zones résidentielles récentes (Le Vernay, Chez Cudrey, Chez Brun) avec accès véhicule facile, et les hameaux isolés sur les hauteurs (Brécorens, Loisin, Cervens en limite). Notre équipe planifie chaque intervention selon la zone : véhicule adapté aux passages étroits du centre, créneaux matinaux pour éviter le trafic D903 vers Thonon. Le <strong>tarif sénior/PMR −10%</strong> s'applique automatiquement, et nous proposons le <strong>groupage particuliers</strong> avec d'autres déménagements du secteur pour réduire les coûts.`,

    quartiers: [
      'Centre village',
      'Le Tonkin',
      'Le Vernay',
      'Chez Cudrey',
      'Chez Brun',
      'Brécorens',
      'Brens',
      'La Cave',
    ],

    tarifs: {
      studio: 'À partir de 470 €',
      f2f3: 'À partir de 940 €',
      maison: 'À partir de 1 820 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Douvaine', slug: 'douvaine' },
      { nom: 'Sciez', slug: 'sciez' },
      { nom: 'Machilly', slug: 'machilly' },
      { nom: 'Saint-Cergues', slug: 'saint-cergues' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Bons-en-Chablais ?',
        reponse:
          "Comptez à partir de 470 € pour un studio, 940 € pour un F2/F3, 1 820 € pour une maison. Tarif lié à la distance (18 km depuis notre base de Ville-la-Grand). Devis ferme sous 24h après visite gratuite à domicile.",
      },
      {
        question: 'Intervenez-vous dans les hameaux isolés (Brécorens, Brens, La Cave) ?',
        reponse:
          "Oui, toute la commune est couverte. Pour les hameaux avec accès étroit, nous pré-évaluons lors de la visite technique gratuite (chemin praticable, place de retournement camion). Aucun surcoût caché lié à l'accès.",
      },
      {
        question: 'Faites-vous le trajet Bons-en-Chablais vers Thonon, Annemasse ou plus loin ?',
        reponse:
          "Oui, Bons-en-Chablais est central : Thonon est à 12 km, Annemasse à 18 km, Évian à 20 km. Tous ces trajets sont quotidiens pour nous. Pour des déménagements longue distance (Lyon, Paris, Marseille…), tarif au km transparent communiqué avec le devis.",
      },
      {
        question: 'Quels délais pour intervenir à Bons-en-Chablais ?',
        reponse:
          "Sous 24-48 heures pour les urgences. Pour les déménagements planifiés, nous recommandons 2 à 4 semaines à l'avance, notamment entre mai et septembre où la demande Chablais est forte.",
      },
      {
        question: 'Proposez-vous du groupage pour réduire le coût ?',
        reponse:
          "Oui, si un autre client du secteur Bas-Chablais (Douvaine, Sciez, Anthy) déménage à une date proche, nous proposons le groupage : économie pouvant atteindre −10% sur chaque devis. À demander lors du devis.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // DOUVAINE, chef-lieu du Bas-Chablais (74140)
  // ------------------------------------------------------------------
  'douvaine': {
    slug: 'douvaine',
    nom: 'Douvaine',
    codePostal: '74140',
    departement: 'Haute-Savoie',
    geo: { lat: 46.305, lng: 6.305 },
    distanceKm: 16,
    population: '5 500 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Douvaine (74140), chef-lieu du Bas-Chablais',
    metaTitle: "Déménageur Douvaine (74140) | Torres Transport Bas-Chablais",
    metaDescription:
      "Déménageur à Douvaine (74140), chef-lieu du Bas-Chablais, 5 500 habitants. Service complet pour particuliers, équipe expérimentée, devis gratuit sous 24h.",
    keywords:
      'déménageur Douvaine, déménagement Douvaine 74140, déménageur Bas-Chablais, déménageur 74140',

    intro: `<strong>Douvaine</strong> est le <strong>chef-lieu du Bas-Chablais</strong>, commune de <strong>5 500 habitants</strong> à 16 km de notre base de Ville-la-Grand. Avec sa <strong>croissance résidentielle continue</strong>, ses nombreux lotissements récents et son centre-ville commerçant rénové, Douvaine voit beaucoup de mouvements : jeunes familles qui s'installent, retraités qui rejoignent leurs enfants, agrandissements de famille qui demandent une maison plus grande. Torres Transport accompagne ces transitions avec une <strong>équipe basée à proximité</strong> qui connaît parfaitement la commune.`,

    pourquoiNous: `Douvaine combine trois <strong>typologies d'accès</strong> bien distinctes : le <strong>centre-ville</strong> avec ses rues commerçantes (rue de Genève, rue du Mont-Blanc) et son stationnement souvent saturé, les <strong>zones pavillonnaires</strong> (Champs-Plottons, Le Crêt, Les Hutins) avec accès véhicule facile et garages, et les <strong>hameaux ruraux</strong> en périphérie. Notre équipe planifie chaque déménagement Douvaine selon la zone : si centre-ville, créneaux matinaux et demande d'autorisation municipale pour stationner le camion ; si pavillon, intervention standard. Visite technique gratuite à domicile systématique pour ajuster.`,

    quartiers: [
      'Centre-ville',
      'Champs-Plottons',
      'Le Crêt',
      'Les Hutins',
      'Bourg-Dessous',
      'Aux Vignes',
      'Verly',
    ],

    tarifs: {
      studio: 'À partir de 460 €',
      f2f3: 'À partir de 920 €',
      maison: 'À partir de 1 780 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Bons-en-Chablais', slug: 'bons-en-chablais' },
      { nom: 'Sciez', slug: 'sciez' },
      { nom: 'Anthy-sur-Léman', slug: 'anthy-sur-leman' },
      { nom: 'Machilly', slug: 'machilly' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Douvaine ?',
        reponse:
          "Comptez à partir de 460 € pour un studio, 920 € pour un F2/F3, 1 780 € pour une maison. Tarif lié à la distance (16 km). Devis ferme sous 24h après visite technique gratuite chez vous.",
      },
      {
        question: 'Le centre-ville de Douvaine est parfois saturé : comment gérez-vous le stationnement ?',
        reponse:
          "Pour les déménagements en centre-ville (rue de Genève, rue du Mont-Blanc, place de la Mairie), nous pouvons faire la demande d'autorisation auprès de la mairie pour bloquer un emplacement le jour J. Nos camions sont aussi dimensionnés pour les rues plus étroites. Nous privilégions les créneaux matinaux pour limiter la gêne au trafic.",
      },
      {
        question: 'Faites-vous le trajet Douvaine vers Thonon ou Annemasse ?',
        reponse:
          "Oui, ce sont des trajets quotidiens pour nous. Douvaine est à 14 km de Thonon, 16 km d'Annemasse, parfaitement central dans nos tournées Chablais.",
      },
      {
        question: 'Intervenez-vous dans les nouveaux lotissements de Douvaine ?',
        reponse:
          "Bien sûr, les zones récentes comme Champs-Plottons, Le Crêt, Les Hutins font partie de nos interventions habituelles. Accès véhicule en général facile, garages, parkings privatifs : conditions idéales pour un déménagement rapide.",
      },
      {
        question: 'Y a-t-il des frais supplémentaires pour Douvaine ?',
        reponse:
          "Non, aucun frais caché. La distance est incluse dans le devis. Seuls les services additionnels (emballage complet, garde-meuble, démontage spécifique) sont chiffrés à part et toujours validés avec vous avant intervention.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // SCIEZ, port sur le Léman (74140)
  // ------------------------------------------------------------------
  'sciez': {
    slug: 'sciez',
    nom: 'Sciez',
    codePostal: '74140',
    departement: 'Haute-Savoie',
    geo: { lat: 46.330, lng: 6.388 },
    distanceKm: 22,
    population: '6 000 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Sciez (74140), commune lacustre du Chablais',
    metaTitle: "Déménageur Sciez (74140) | Torres Transport Chablais",
    metaDescription:
      "Déménageur à Sciez (74140), 6 000 habitants au bord du Léman. Port, résidences principales et secondaires. Service complet pour particuliers, devis 24h.",
    keywords:
      'déménageur Sciez, déménagement Sciez 74140, déménageur Léman, déménageur Chablais 74140',

    intro: `<strong>Sciez</strong> est cette <strong>commune lacustre</strong> du Chablais, <strong>6 000 habitants</strong> répartis entre le bourg ancien, le port de Sciez sur le Léman, et les hameaux résidentiels en arrière-plan. À 22 km de notre base, c'est une zone à la <strong>typologie variée</strong> : résidences principales de familles installées, résidences secondaires lacustres, propriétés au bord du lac avec accès parfois techniques. Torres Transport intervient pour tous types de déménagements résidentiels à Sciez et villages limitrophes.`,

    pourquoiNous: `Sciez présente des <strong>défis d'accès spécifiques</strong> : les propriétés <strong>au bord du lac</strong> (avenue de la Plage, route du Port) ont parfois des accès en pente raide ou des chemins privés ; les <strong>résidences secondaires</strong> impliquent souvent des déménagements partiels ou des arrivées de meubles d'occasion. Notre équipe ajuste : véhicule adapté à la pente quand nécessaire, créneaux compatibles avec les propriétaires absents, coordination si remise des clés à un tiers. La <strong>visite technique gratuite</strong> est particulièrement utile à Sciez pour anticiper les contraintes du jour J.`,

    quartiers: [
      'Bourg de Sciez',
      'Port de Sciez',
      'Coudrée',
      'Bonnatrait',
      'Le Crozat',
      'Filly',
      'Chavannex',
    ],

    tarifs: {
      studio: 'À partir de 490 €',
      f2f3: 'À partir de 980 €',
      maison: 'À partir de 1 900 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Anthy-sur-Léman', slug: 'anthy-sur-leman' },
      { nom: 'Douvaine', slug: 'douvaine' },
      { nom: 'Bons-en-Chablais', slug: 'bons-en-chablais' },
      { nom: 'Thonon-les-Bains', slug: 'thonon-les-bains' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Sciez ?',
        reponse:
          "Comptez à partir de 490 € pour un studio, 980 € pour un F2/F3, 1 900 € pour une maison. Tarif lié à la distance (22 km). Possibles ajustements selon contraintes d'accès si propriété en bord de lac avec pente.",
      },
      {
        question: 'Pouvez-vous accéder aux propriétés du bord du lac à Sciez ?',
        reponse:
          "Oui, sous réserve de la praticabilité du chemin pour un camion 20 m³. La visite technique gratuite préalable permet d'évaluer : si trop étroit, nous utilisons un véhicule plus petit avec navette, ou prévoyons une portée à la main. Toujours transparent dans le devis.",
      },
      {
        question: 'Gérez-vous les déménagements de résidences secondaires ?',
        reponse:
          "Très fréquemment à Sciez. Cela inclut les arrivées de meubles d'occasion, les rangements saisonniers vers un garde-meuble, ou les retraits complets après vente. Nous coordonnons avec un tiers si vous n'êtes pas sur place le jour J.",
      },
      {
        question: 'Faites-vous le trajet Sciez vers Thonon, Évian ou Annemasse ?',
        reponse:
          "Oui, ces trajets sont quotidiens. Sciez est à 9 km de Thonon, 17 km d'Évian, 22 km d'Annemasse. Ces déménagements de proximité représentent une part importante de notre activité Chablais.",
      },
      {
        question: 'Quelle saison privilégier pour déménager à Sciez ?',
        reponse:
          "Sciez étant lacustre, l'été est très demandé (juin-septembre), notamment pour les résidences secondaires. Pour plus de souplesse et tarifs négociables, le printemps (avril-mai) ou l'automne (octobre-novembre) sont idéaux.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // ANTHY-SUR-LÉMAN, village lacustre (74200)
  // ------------------------------------------------------------------
  'anthy-sur-leman': {
    slug: 'anthy-sur-leman',
    nom: 'Anthy-sur-Léman',
    codePostal: '74200',
    departement: 'Haute-Savoie',
    geo: { lat: 46.367, lng: 6.435 },
    distanceKm: 26,
    population: '2 200 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Anthy-sur-Léman (74200), village au bord du lac',
    metaTitle: "Déménageur Anthy-sur-Léman (74200) | Torres Transport",
    metaDescription:
      "Déménageur à Anthy-sur-Léman (74200), 2 200 habitants au bord du Léman. Village lacustre calme, résidences principales et secondaires. Devis 24h.",
    keywords:
      'déménageur Anthy-sur-Léman, déménagement Anthy 74200, déménageur Léman, déménageur 74200',

    intro: `<strong>Anthy-sur-Léman</strong> est ce <strong>petit village lacustre</strong> de <strong>2 200 habitants</strong>, niché entre Sciez et Thonon, au bord du lac Léman. Cadre paisible, vues sur le lac, résidences cossues et hameaux préservés caractérisent la commune. À 26 km de notre base, nous intervenons pour les déménagements arrivée/départ d'Anthy : familles s'installant pour le cadre nature, retraités cherchant le calme, ou mouvements liés aux résidences secondaires.`,

    pourquoiNous: `Anthy a une <strong>population stable</strong> avec un attachement fort à la commune, les déménagements ici sont souvent des moments importants (installation définitive après une vie active, agrandissement familial, transmission d'une propriété de famille). Notre approche est <strong>patiente et humaine</strong> : la visite technique gratuite chez vous, prise de temps pour comprendre vos meubles de valeur (souvent ancien, parfois transmis), protections renforcées au transport. Nous gérons également les arrivées de meubles d'occasion (très fréquentes en zone lacustre) avec montage si besoin.`,

    quartiers: [
      'Centre village',
      'Anthy plage',
      'Sechex',
      'Margencel limitrophe',
      'Les Granges',
      'Le Devin',
    ],

    tarifs: {
      studio: 'À partir de 510 €',
      f2f3: 'À partir de 1 020 €',
      maison: 'À partir de 1 980 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Sciez', slug: 'sciez' },
      { nom: 'Thonon-les-Bains', slug: 'thonon-les-bains' },
      { nom: 'Publier', slug: 'publier' },
      { nom: 'Douvaine', slug: 'douvaine' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Anthy-sur-Léman ?',
        reponse:
          "Comptez à partir de 510 € pour un studio, 1 020 € pour un F2/F3, 1 980 € pour une maison. Tarif lié à la distance (26 km). Devis ferme sous 24h après visite gratuite.",
      },
      {
        question: 'Gérez-vous les meubles anciens ou de valeur ?',
        reponse:
          "Oui, c'est une spécialité, beaucoup de déménagements à Anthy concernent des familles avec mobilier ancien ou de valeur. Protections renforcées (couvertures, sangles, caisses sur mesure pour œuvres d'art), prise de temps au chargement, assurance ad valorem possible sur demande.",
      },
      {
        question: 'Faites-vous le trajet Anthy-Thonon ou Anthy-Évian ?',
        reponse:
          "Oui, Anthy est à 6 km de Thonon et 16 km d'Évian. Ces trajets sont fréquents, notamment pour les seniors qui rejoignent une résidence à Thonon ou les familles qui agrandissent leur logement.",
      },
      {
        question: 'Proposez-vous le tarif sénior à Anthy-sur-Léman ?',
        reponse:
          "Oui, automatiquement : −10% pour les seniors (65 ans et +) et personnes à mobilité réduite. Approche patiente, accompagnement humain, aide au tri si besoin avant le jour J.",
      },
      {
        question: 'Délais d\'intervention à Anthy ?',
        reponse:
          "Sous 24-48 heures pour les urgences. Pour les déménagements planifiés, 2 à 4 semaines à l'avance idéalement. L'été est très sollicité, anticiper si possible.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // PUBLIER, station thermale Amphion-Léman (74500)
  // ------------------------------------------------------------------
  'publier': {
    slug: 'publier',
    nom: 'Publier',
    codePostal: '74500',
    departement: 'Haute-Savoie',
    geo: { lat: 46.397, lng: 6.535 },
    distanceKm: 32,
    population: '7 000 habitants',
    bannier: '/banner-transport.webp',

    titreH1: 'Déménagement à Publier-Amphion (74500), porte du Pays d\'Évian',
    metaTitle: "Déménageur Publier - Amphion-les-Bains (74500) | Torres Transport",
    metaDescription:
      "Déménageur à Publier (74500), commune de 7 000 habitants intégrant Amphion-les-Bains. Porte du Pays d'Évian, devis 24h.",
    keywords:
      'déménageur Publier, déménagement Publier 74500, déménageur Amphion-les-Bains, déménageur Pays Évian',

    intro: `<strong>Publier</strong> est cette commune de <strong>7 000 habitants</strong> du <strong>Pays d'Évian</strong>, intégrant la station thermale historique d'<strong>Amphion-les-Bains</strong>. Située entre Thonon et Évian, à 32 km de notre base, elle combine plusieurs réalités : résidences principales de familles installées, résidences secondaires de séjour thermal, et appartements en bord de lac. Torres Transport accompagne les déménagements résidentiels sur Publier avec la même rigueur qu'en proximité immédiate d'Annemasse.`,

    pourquoiNous: `Publier-Amphion a une <strong>identité particulière</strong> liée à son passé thermal, beaucoup de bâti ancien (villas Belle Époque, immeubles classés près des sources), couplé à un développement résidentiel récent en hauteur. Pour les déménagements, cela signifie souvent : <strong>escaliers, portes anciennes plus étroites, mobilier de valeur</strong>. Notre équipe adapte : démontage soigneux, protection renforcée du bâti, équipe complète sur place pour ne jamais bricoler dans l'urgence. À 32 km, le tarif inclut la distance, pas de surcoût caché.`,

    quartiers: [
      'Publier centre',
      'Amphion-les-Bains',
      'Le Port d\'Amphion',
      'Tully',
      'Pernod',
      'Marclaz',
    ],

    tarifs: {
      studio: 'À partir de 540 €',
      f2f3: 'À partir de 1 080 €',
      maison: 'À partir de 2 100 €',
      pro: 'Sur devis personnalisé',
    },

    villesVoisines: [
      { nom: 'Évian-les-Bains', slug: 'evian-les-bains' },
      { nom: 'Thonon-les-Bains', slug: 'thonon-les-bains' },
      { nom: 'Anthy-sur-Léman', slug: 'anthy-sur-leman' },
      { nom: 'Sciez', slug: 'sciez' },
      { nom: 'Annemasse', slug: 'annemasse' },
    ],

    faq: [
      {
        question: 'Combien coûte un déménagement à Publier ou Amphion-les-Bains ?',
        reponse:
          "Comptez à partir de 540 € pour un studio, 1 080 € pour un F2/F3, 2 100 € pour une maison. Tarif lié à la distance (32 km). Devis ferme sous 24h, visite gratuite préalable.",
      },
      {
        question: 'Gérez-vous le bâti ancien d\'Amphion-les-Bains (villas, escaliers étroits) ?',
        reponse:
          "Oui, régulièrement. Les villas Belle Époque et immeubles anciens d'Amphion ont souvent des passages étroits ou des paliers exigus : nous utilisons des techniques de portage adaptées (sangles dorsales, démontage poussé du mobilier), avec protection renforcée des huisseries et plafonds.",
      },
      {
        question: 'Faites-vous le trajet Publier vers Évian ou Thonon ?',
        reponse:
          "Oui, Publier est entre les deux : 4 km d'Évian, 6 km de Thonon. Ces trajets très courts sont fréquents, notamment pour des seniors qui passent d'une maison à un appartement en centre Évian, ou des familles qui rejoignent Publier pour le calme.",
      },
      {
        question: 'Le Pays d\'Évian est loin pour vous : y a-t-il un surcoût ?',
        reponse:
          "Non. Notre tarif intègre la distance dès le devis initial, pas de surcoût caché en cours d'intervention. À 32 km, c'est dans notre rayon habituel de Chablais. Nous sommes aussi capables d'aller bien plus loin pour les longues distances (Lyon, Paris…).",
      },
      {
        question: 'Quelle est la meilleure saison pour déménager à Publier ?',
        reponse:
          "Le Pays d'Évian est très demandé en été (juin-septembre) pour les locations saisonnières et résidences secondaires. Pour plus de souplesse et tarifs négociables, privilégier le printemps (avril-mai) ou l'automne (octobre-novembre).",
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
