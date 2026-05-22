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
      reponse: "Oui, un acompte est demandé à la réservation pour bloquer définitivement votre date. Cette pratique permet de garantir le créneau et d'éviter les désistements de dernière minute. Le solde est payé après la prestation. Montant précisé dans le devis.",
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
      question: "Faites-vous des déménagements longue distance partout en France ?",
      reponse: "Oui, c'est notre quotidien. Annemasse-Lyon (1h30), Annemasse-Paris (6h), Annemasse-Marseille (5h), Annemasse-Bordeaux (7h). Devis ferme sous 24h sans surcoût caché. Possibilité de groupage si plusieurs clients vont vers la même destination.",
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
      question: "Pouvez-vous faire un transport en groupage avec d'autres clients ?",
      reponse: "Oui, si plusieurs clients particuliers vont vers la même destination dans une fenêtre de temps proche, on peut grouper le transport pour réduire les coûts. Économie pouvant aller jusqu'à -15% sur chaque devis.",
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
      reponse: "Oui, notre assurance responsabilité civile professionnelle (contrat n° 149 572 243) couvre les dommages causés par notre fait. Pour une couverture étendue (vol, incendie, dégât des eaux), nous recommandons d'étendre votre assurance habitation au stockage temporaire, démarche simple chez votre assureur.",
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
      question: "Combien coûte un débarras d'appartement à Annemasse ?",
      reponse: "Le tarif dépend du volume et de l'accessibilité. Indicatif : 300-550€ pour un studio ou T1, 500-950€ pour un F2/F3, 800-1400€ pour un F4/F5, 1300-2500€ pour une maison familiale complète. Si la valeur récupérable du mobilier est élevée, une compensation est possible — parfois jusqu'à un débarras à coût zéro. Devis ferme gratuit après visite à votre domicile.",
    },
    {
      question: "Le débarras peut-il être gratuit ?",
      reponse: "Oui, dans certains cas. Si les biens à évacuer ont une valeur récupérable significative (meubles anciens en bon état, électroménager récent, antiquités, vinyles rares), nous pouvons proposer une compensation qui couvre tout ou partie du coût. Cela dépend de l'évaluation à la visite gratuite — soyez transparent sur ce que contient le logement pour qu'on puisse vous donner une réponse honnête.",
    },
    {
      question: "Faites-vous des débarras après décès et succession ?",
      reponse: "Oui régulièrement. Nous savons gérer les situations complexes : héritiers multiples avec signatures séparées, présence facultative à l'intervention, conservation soigneuse des documents personnels (papiers d'identité, livrets de famille, archives) systématiquement remis à la famille, photos avant/après de chaque pièce. Approche humaine, sans jugement, totale discrétion.",
    },
    {
      question: "Combien de temps prend un débarras complet ?",
      reponse: "Un studio ou T1 se débarrasse en 2 à 4 heures, un F2/F3 en demi-journée à journée complète, un F4/F5 en une journée à une journée et demie, une maison familiale entière entre 1 et 3 jours selon le volume et l'état. Les caves, greniers et garages seuls prennent en général une demi-journée. Délais précis donnés en visite gratuite.",
    },
    {
      question: "Pouvez-vous intervenir en urgence pour une fin de location ?",
      reponse: "Oui, sous 24 à 48 heures pour les urgences locatives. Nous sommes habitués aux situations précipitées : congé de bail rapide, mutation, séparation, expulsion. Devis flash possible par téléphone après description précise du logement. Nous intervenons avant votre état des lieux pour éviter les retenues sur dépôt de garantie.",
    },
    {
      question: "Triez-vous ce qui peut être donné ou recyclé ?",
      reponse: "Oui systématiquement. Sur un débarras moyen, 60 à 75% du volume part au don ou au recyclage : associations locales (Emmaüs Pays de Gex, Secours Populaire 74, Croix-Rouge Annemasse), filière DEEE pour l'électronique, filière REP pour le mobilier, dépôt-vente pour les biens à valeur (Trocadéro, Easy Cash). Vous recevez un récapitulatif écrit du devenir de chaque catégorie.",
    },
    {
      question: "Intervenez-vous sur un logement en syndrome de Diogène ou très insalubre ?",
      reponse: "Oui, c'est une de nos spécialités. Notre équipe est formée et équipée (combinaisons, masques FFP3, gants), capable de retrouver les biens précieux noyés dans l'accumulation. Nous travaillons avec un partenaire pour la désinfection après débarras si nécessaire. Discrétion totale vis-à-vis du voisinage et des proches. Devis sur visite uniquement, intervention personnalisée.",
    },
    {
      question: "Faites-vous le nettoyage après débarras ?",
      reponse: "Oui sur demande, c'est un service complémentaire. Un nettoyage de fin de bail standard est inclus dans certains devis ; un nettoyage approfondi (après Diogène, vente immobilière) est facturé en supplément. Mention obligatoire dans le devis pour transparence.",
    },
    {
      question: "Dois-je être présent pendant le débarras ?",
      reponse: "Non, c'est facultatif. Beaucoup de nos clients (héritiers vivant à l'étranger, propriétaires âgés, locataires en mutation) ne sont pas présents. Nous demandons simplement : (1) une clé ou un moyen d'accès, (2) une liste écrite des biens à conserver absolument s'il y en a, (3) un numéro joignable pendant l'intervention en cas de question. Photos avant/après envoyées systématiquement.",
    },
    {
      question: "Combinez-vous débarras et déménagement dans une même intervention ?",
      reponse: "Oui, c'est fréquent et économique. Si vous déménagez en gardant une partie de vos meubles, nous transportons ce qui suit vers le nouveau logement ET nous débarrassons ce qui ne suit pas dans la même journée. Une seule équipe, un seul devis, un tarif optimisé. À demander en amont pour qu'on planifie correctement les véhicules et l'équipe.",
    },
  ],
};
