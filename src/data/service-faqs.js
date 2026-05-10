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
  'demenagement-senior': [
    {
      question: "Quel est le tarif d'un déménagement senior à Annemasse ?",
      reponse: "Notre tarif unique est de 47,50 €/m³, et nous appliquons une remise sénior/PMR de 10% automatique. Pour un T2 sénior typique de 25 m³, comptez environ 1 070 € au lieu de 1 187 €. Cumulable avec les autres avantages (réservation anticipée, gros volume).",
    },
    {
      question: "Intervenez-vous pour les entrées en EHPAD ou résidence senior ?",
      reponse: "Oui, c'est une part importante de notre activité. Nous accompagnons régulièrement des entrées en EHPAD, foyer-logement, résidence service. Notre équipe sait gérer la dimension émotionnelle et la forte réduction de surface (souvent passage maison → chambre 18 m²).",
    },
    {
      question: "Pouvez-vous gérer la sortie d'hôpital vers un nouveau logement ?",
      reponse: "Oui. Nous coordonnons avec la famille pour préparer le logement d'arrivée pendant que la personne est encore hospitalisée. Délai d'intervention sous 48-72 h pour ces situations urgentes.",
    },
    {
      question: "Que faites-vous des meubles que la personne âgée ne peut pas garder ?",
      reponse: "Nous proposons un service de débarras associé, avec tri systématique : don aux associations partenaires (Emmaüs, Croix-Rouge), recyclage en déchetterie, vente en dépôt-vente si valeur. La famille reçoit un récapitulatif écrit du devenir des biens.",
    },
    {
      question: "Pouvez-vous faire le déménagement sans la personne âgée présente ?",
      reponse: "Absolument. C'est même fréquent quand la personne est déjà en EHPAD ou hospitalisée. Nous travaillons sur procuration ou avec un mandataire familial. Photos avant/pendant/après pour traçabilité totale.",
    },
    {
      question: "Avez-vous l'expérience des successions et de la gestion familiale délicate ?",
      reponse: "Oui, nous gérons régulièrement des situations sensibles : héritiers multiples avec décisions à prendre sur place, désaccords familiaux, succession après décès. Notre approche est patiente, sans pression, sans jugement.",
    },
  ],
  'garde-meuble': [
    {
      question: "Combien coûte un garde-meuble à Annemasse ?",
      reponse: "Nos tarifs démarrent à environ 35 €/mois pour un box de 5 m³ (équivalent studio), 65 €/mois pour 10 m³ (T1/T2), 110 €/mois pour 20 m³ (T3) et sur devis pour plus grand. Aucun frais de dossier. Premier mois offert si combiné avec déménagement.",
    },
    {
      question: "Quelle taille de box choisir selon mon volume ?",
      reponse: "5 m³ pour un studio meublé, 10 m³ pour un T1/T2, 15-20 m³ pour un T3, 25-30 m³ pour un T4 et plus. En cas de doute, on évalue gratuitement sur photos ou en visite. Vous ne payez que ce dont vous avez besoin.",
    },
    {
      question: "Comment accède-t-on au box de stockage ?",
      reponse: "Accès libre du lundi au samedi pendant nos horaires d'ouverture (8h-19h). Demandez-nous au moins 24h à l'avance pour un accès en dehors de ces créneaux. Le box vous est attribué nominativement, vos affaires ne sont jamais déplacées sans votre accord.",
    },
    {
      question: "Mes biens sont-ils assurés dans votre garde-meuble ?",
      reponse: "Oui, notre assurance responsabilité civile professionnelle (contrat n° 149 572 243) couvre les dommages causés par notre fait. Pour une couverture étendue (vol, incendie, dégât des eaux), nous recommandons d'étendre votre assurance habitation au stockage temporaire — démarche simple chez votre assureur.",
    },
    {
      question: "Pour combien de temps minimum / maximum peut-on louer ?",
      reponse: "Pas d'engagement minimum : 1 semaine, 1 mois, 6 mois, 2 ans, à votre rythme. Facturation au mois. Préavis d'1 semaine pour libérer le box.",
    },
    {
      question: "Pouvez-vous combiner déménagement et stockage en une prestation ?",
      reponse: "Oui, c'est même notre spécialité. Pour un dossier groupé 'déménagement aller + stockage X mois + déménagement retour vers nouveau logement', nous remisons généralement 5 à 10% par rapport à deux prestations séparées. Demandez le devis groupé.",
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
};
