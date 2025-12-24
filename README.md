# Torres Transport - Site Web

Site web professionnel pour Torres Transport, entreprise de déménagement basée à Annemasse.

## Technologies utilisées

- Astro 4.x
- HTML/CSS/JavaScript

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## Build de production
```bash
npm run build
```

## Aperçu de la production
```bash
npm run preview
```

## Structure du projet
```
/
├── public/          # Fichiers statiques (images, logo)
├── src/
│   ├── components/  # Composants réutilisables
│   ├── data/        # Données (services)
│   ├── layouts/     # Layouts de page
│   ├── pages/       # Pages du site
│   └── styles/      # CSS global
└── package.json
```

## Pages

- `/` - Page d'accueil
- `/services` - Liste des services
- `/services/[slug]` - Pages individuelles des services
- `/contact` - Formulaire de contact
- `/mentions-legales` - Mentions légales