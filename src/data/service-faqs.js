// FAQs spécifiques par service, pour rich snippets Google (FAQPage schema)
// 4 à 6 questions/réponses par service, axées sur les vraies interrogations clients

export const serviceFaqs = {
  demenagement: [
    {
      question: "Quel est le tarif d'un déménagement à Annemasse ?",
      reponse: "Notre tarif unique est de 47,50 €/m³ tout compris : camion, équipe, protection mobilier, sangles, arrimage. Pour un T2 typique de 25 m³ à Annemasse, comptez environ 1 187 €. Aucun supplément caché.",
    },
    {
      question: "Faut-il payer un acompte à la réservation ?",
      reponse: "Non, jamais. Vous payez uniquement après la livraison de vos biens, à la fin de la prestation. C'est notre façon d'assumer la qualité de notre travail.",
    },
    {
      question: "Combien de temps à l'avance faut-il réserver ?",
      reponse: "Pour la haute saison (juin à septembre), réservez 6 à 8 semaines à l'avance. Hors saison, 3 à 4 semaines suffisent. Une réservation anticipée (>30 jours) donne droit à -5% sur le devis.",
    },
    {
      question: "Le démontage et remontage des meubles sont-ils inclus ?",
      reponse: "Le démontage/remontage est une option à environ +10 à 15% du tarif de base, selon le mobilier. Lit, armoire, dressing, cuisine équipée, bureau : on s'occupe de tout, avec l'outillage adapté.",
    },
    {
      question: "Intervenez-vous pour des déménagements transfrontaliers vers la Suisse ?",
      reponse: "Oui, c'est notre quotidien. Annemasse-Genève, Annemasse-Lausanne, Annecy-Genève. Nous gérons les formalités douanières (déclaration de transfert de domicile) et nous connaissons les contraintes des passages frontaliers.",
    },
    {
      question: "Quelles assurances couvrent le déménagement ?",
      reponse: "Notre assurance responsabilité civile professionnelle (contrat n° 149 572 243) couvre tout dommage que nos équipes pourraient causer durant la prestation. Pour les biens de très grande valeur, une déclaration de valeur peut être ajoutée au devis.",
    },
  ],
  transport: [
    {
      question: "Quelle est la différence entre transport simple et déménagement ?",
      reponse: "Le transport simple suppose que vous avez tout préparé vous-même (emballé, démonté, prêt à charger). Vous payez juste le camion + équipe pour le trajet. Tarif environ 30% moins cher que le déménagement complet (~30,90 €/m³).",
    },
    {
      question: "Transportez-vous sur de longues distances ?",
      reponse: "Oui, Annemasse vers Lyon, Grenoble, Paris, Marseille. Devis avec coût km au-delà de la zone locale. Possibilité de groupage si plusieurs clients vont vers la même destination.",
    },
    {
      question: "Acceptez-vous les transports professionnels (B2B) ?",
      reponse: "Bien sûr. Nous transportons mobilier de bureau, archives, marchandises, matériel d'exposition. Facturation entreprise avec TVA, devis sous 24h.",
    },
    {
      question: "Pouvez-vous transporter un seul gros objet (canapé, frigo) ?",
      reponse: "Oui, nous faisons des transports à la pièce. Comptez environ 80 à 150 € selon distance et accessibilité (étages, ascenseur, créneau).",
    },
  ],
  'montage-meubles': [
    {
      question: "Combien coûte le montage d'un meuble IKEA ?",
      reponse: "Pour une armoire Pax standard, comptez 60 à 90 €. Pour une cuisine complète, 200 à 400 € selon nombre de modules. Tarif horaire 45 €/h, ou forfait sur devis pour les chantiers >2h.",
    },
    {
      question: "Quelles marques de meubles montez-vous ?",
      reponse: "Toutes : IKEA, Conforama, BUT, La Foir'Fouille, Maison du Monde, Centrakor, mobilier sur-mesure. Notre équipe a l'outillage et l'expérience pour tout type de notice technique.",
    },
    {
      question: "Pouvez-vous monter le mobilier en weekend ou en soirée ?",
      reponse: "Oui, sur demande. Nous travaillons du lundi au samedi 8h-19h, et nous acceptons les interventions exceptionnelles le dimanche pour les urgences (livraison ratée, état des lieux le lendemain).",
    },
    {
      question: "Que se passe-t-il si une pièce est manquante dans le carton ?",
      reponse: "Nous le remarquons à l'ouverture des cartons et vous prévenons immédiatement. Si une pièce est cassée ou manquante côté fabricant, nous vous aidons à monter le SAV et nous reprogrammons le montage gratuitement.",
    },
  ],
  manutention: [
    {
      question: "Quel est le tarif horaire de la manutention ?",
      reponse: "Comptez 45 €/h par manutentionnaire. Pour un chargement de camion sur 2-3h, prévoyez environ 270 à 405 € pour 2 personnes. Devis ferme sur estimation préalable.",
    },
    {
      question: "Pouvez-vous déplacer un piano ou un coffre-fort ?",
      reponse: "Oui, c'est notre spécialité. Piano droit (180-280 €), piano à queue (350-500 €), coffre-fort selon poids et accès. Sangles spéciales et chariots adaptés. Devis sur photos.",
    },
    {
      question: "Quel est le délai de réservation pour de la manutention ?",
      reponse: "Idéalement 1 semaine à l'avance. Pour les urgences (location de camion déjà prise), nous pouvons intervenir sous 24-48h selon nos créneaux disponibles.",
    },
  ],
  debarras: [
    {
      question: "Le débarras est-il payant ou gratuit ?",
      reponse: "Selon la valeur récupérable des biens. Sur certains débarras (mobilier en bon état, électroménager récent), nous proposons une compensation. Sur les débarras lourds (caves, greniers, encombrants), c'est facturé selon volume et tri à effectuer (entre 200 et 1500 €).",
    },
    {
      question: "Triez-vous ce qui peut être donné/recyclé ?",
      reponse: "Oui systématiquement. Sur un débarras moyen, 60 à 75% du volume part au don ou au recyclage (associations locales d'Annemasse, déchetterie REP, filière DEEE pour l'électronique). Seul 25 à 40% finit en encombrants.",
    },
    {
      question: "Intervenez-vous sur des débarras suite à succession ou syndrome de Diogène ?",
      reponse: "Oui, c'est régulier. Nous savons gérer les situations complexes : héritiers multiples, signatures séparées, intervention discrète, désinfection après débarras pour les cas Diogène. Approche humaine, sans jugement.",
    },
    {
      question: "Combien de temps prend un débarras complet ?",
      reponse: "Un studio se débarrasse en 2-4h, un T3 en une journée, une maison familiale entière en 1-3 jours selon le volume. Devis en visite gratuite.",
    },
  ],
  'location-vehicule': [
    {
      question: "Que comprend la location de véhicule avec chauffeur ?",
      reponse: "Le camion (3,5T, 12 ou 20 m³ selon besoin), le carburant, le chauffeur professionnel et son aide. Vous chargez/déchargez avec eux. Idéal si vous voulez gérer vos affaires mais pas conduire.",
    },
    {
      question: "Quels sont les tarifs en demi-journée et journée complète ?",
      reponse: "Demi-journée (4h) : 250 à 350 €. Journée complète (8h) : 450 à 600 €. Location longue durée sur devis (réduction tarifs progressifs au-delà de 3 jours).",
    },
    {
      question: "Puis-je louer le véhicule sans chauffeur ?",
      reponse: "Non, nos camions ne sont pas en location libre. Pour un camion sans chauffeur, contactez les loueurs traditionnels (Hertz, Europcar, Drivy). En revanche, nous pouvons vous fournir un chauffeur seul si vous avez votre propre véhicule.",
    },
  ],
  nettoyage: [
    {
      question: "Quel est le tarif d'un nettoyage de fin de chantier ?",
      reponse: "Comptez 5 à 8 €/m². Pour un T3 standard de 70m², environ 350 à 560 €. Inclus : aspiration poussières, nettoyage sols/murs/sanitaires, vitres si demandé. Sur devis pour grande surface.",
    },
    {
      question: "Intervenez-vous après un déménagement ou des travaux ?",
      reponse: "Les deux. Nettoyage de fin de bail (état des lieux), nettoyage post-rénovation (peinture, sols, plâtre), nettoyage avant emménagement. Adapté à votre situation.",
    },
    {
      question: "Le nettoyage des vitres est-il inclus ?",
      reponse: "C'est une option (compter +30 à 80 € selon le nombre de fenêtres). Pour les vitres en hauteur, nous avons une perche télescopique adaptée jusqu'à 4 mètres.",
    },
  ],
};
