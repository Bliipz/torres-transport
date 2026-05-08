# 📸 Guide : Ajouter vos propres images de background pour les services

## 📁 Structure des fichiers

Vos images doivent être placées dans : `public/services/`

## 🎯 Noms de fichiers à utiliser

Voici la correspondance entre chaque service et le nom de fichier attendu :

| Service | Nom du fichier | Chemin actuel dans le code |
|---------|---------------|---------------------------|
| **Déménagement** | `demenagement.jpg` | `/services/demenagement.jpg` |
| **Montage de meubles** | `montage-de-meuble.jpg` | `/services/montage-de-meuble.jpg` |
| **Transport** | `transport.jpg` | `/services/transport.jpg` |
| **Location véhicule** | `location-vehicule.jpg` | `/services/location-vehicule.jpg` |
| **Manutention** | `transport.jpg` (partagé) | `/services/transport.jpg` |
| **Nettoyage** | `nettoyage-pro.jpg` | `/services/nettoyage-pro.jpg` |
| **Débarras** | `debarras.png` | `/services/debarras.png` |

## ✅ Méthode simple (recommandée)

1. **Préparez vos 7 images** (ou 6 si Manutention = Transport)
2. **Renommez-les** exactement comme dans le tableau ci-dessus
3. **Copiez-les** dans le dossier `public/services/` en remplaçant les anciennes
4. **C'est tout !** Les images s'afficheront automatiquement

## 🔧 Si vous voulez utiliser d'autres noms

Si vous préférez utiliser vos propres noms de fichiers, modifiez le fichier `src/data/services.js` :

```javascript
"demenagement": {
  titre: "Service Déménagement",
  icone: "🚚",
  image: "/services/VOTRE_NOUVEAU_NOM.jpg",  // ← Changez ici
  // ...
}
```

## 📐 Recommandations pour vos images

### Dimensions optimales
- **Largeur** : 1920px minimum (idéalement 2560px)
- **Hauteur** : 1080px minimum (idéalement 1440px)
- **Ratio** : 16:9 (format paysage)

### Format et poids
- **Format** : JPG (recommandé), PNG ou WebP
- **Poids** : < 500 KB par image (optimisez avec TinyPNG ou ImageOptim)
- **Qualité** : 80-85% pour JPG (bon compromis qualité/poids)

### Contenu de l'image
- **Style** : Image professionnelle et claire
- **Contraste** : Assurez-vous que le texte blanc sera lisible par-dessus
- **Overlay** : Un overlay sombre est automatiquement ajouté pour améliorer la lisibilité

## 🎨 Où les images sont utilisées ?

Les images de background apparaissent sur :
1. **Page individuelle de chaque service** (`/services/[slug]`)
   - En grand format en haut de la page (hero section)
   - Avec un overlay sombre pour la lisibilité du texte

2. **Cartes de services** (page d'accueil et `/services`)
   - En petit format dans les cartes cliquables
   - Utilisent les mêmes images mais en miniature

## 🔍 Vérification

Après avoir ajouté vos images :
1. Lancez le serveur de développement : `npm run dev`
2. Visitez chaque page de service pour vérifier que les images s'affichent
3. Vérifiez sur mobile et desktop

## 💡 Astuce : Image manquante pour Manutention

Actuellement, le service "Manutention" utilise la même image que "Transport". 
Si vous voulez une image spécifique :

1. Ajoutez `manutention.jpg` dans `public/services/`
2. Modifiez dans `src/data/services.js` :
   ```javascript
   "manutention": {
     // ...
     image: "/services/manutention.jpg",  // ← Changez ici
     // ...
   }
   ```

## 🚀 Exemple de modification

Si vous voulez changer l'image du déménagement :

1. Placez votre nouvelle image : `public/services/demenagement.jpg`
2. C'est tout ! Le code utilisera automatiquement cette nouvelle image.

---

**Besoin d'aide ?** Les images doivent être accessibles via le chemin `/services/nom-du-fichier.ext` depuis la racine du site.


