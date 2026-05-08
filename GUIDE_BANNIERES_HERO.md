# 🎨 Guide : Bannières Hero pour les Pages de Services

## ✅ Ce qui a été configuré

J'ai séparé les **images de services** (pour les cartes) des **bannières hero** (pour le haut de chaque page) :

- **`image`** : Utilisée dans les cartes de services (page d'accueil, liste des services)
- **`banner`** : Utilisée comme background hero en haut de chaque page de service individuelle

## 📁 Structure des bannières

Placez vos bannières dans le dossier `public/` avec ces noms :

| Service | Nom de la bannière | Chemin dans le code |
|---------|-------------------|---------------------|
| **Déménagement** | `banner-demenagement.png` | `/banner-demenagement.png` ✅ (déjà existante) |
| **Montage de meubles** | `banner-montage-meubles.png` | `/banner-montage-meubles.png` |
| **Transport** | `banner-transport.png` | `/banner-transport.png` |
| **Location véhicule** | `banner-location-vehicule.png` | `/banner-location-vehicule.png` |
| **Manutention** | `banner-manutention.png` | `/banner-manutention.png` |
| **Nettoyage** | `banner-nettoyage.png` | `/banner-nettoyage.png` |
| **Débarras** | `banner-debarras.png` | `/banner-debarras.png` |

## 🎯 Comment ajouter vos bannières

### Étape 1 : Préparer vos bannières
- **Format** : PNG, JPG ou WebP
- **Dimensions** : 1920x1080px minimum (format paysage)
- **Poids** : < 500 KB (optimisez si nécessaire)

### Étape 2 : Nommer et placer les fichiers
1. Renommez vos bannières exactement comme dans le tableau ci-dessus
2. Placez-les dans le dossier `public/` (à la racine, pas dans `public/services/`)

### Étape 3 : C'est tout !
Les bannières s'afficheront automatiquement sur chaque page de service.

## 📍 Où les bannières apparaissent ?

Les bannières hero apparaissent **uniquement** en haut de chaque page de service individuelle :
- `/services/demenagement`
- `/services/montage-meubles`
- `/services/transport`
- `/services/location-vehicule`
- `/services/manutention`
- `/services/nettoyage`
- `/services/debarras`

## 🔄 Images de services vs Bannières

### Images de services (`public/services/`)
- Utilisées dans les **cartes cliquables** (page d'accueil, liste des services)
- Format carré/paysage adapté aux cartes
- **Ne changent pas** - elles restent telles quelles

### Bannières hero (`public/`)
- Utilisées comme **background hero** en haut de chaque page de service
- Format paysage large (1920x1080px+)
- **Vous pouvez les personnaliser** pour chaque service

## 📝 Exemple concret

Pour le service "Montage de meubles" :

1. **Image de service** : `public/services/montage-de-meuble.jpg`
   - Utilisée dans la carte sur la page d'accueil
   - **Ne change pas**

2. **Bannière hero** : `public/banner-montage-meubles.png`
   - Utilisée comme background en haut de `/services/montage-meubles`
   - **Vous pouvez la personnaliser**

## ⚠️ Important

- Si une bannière n'existe pas, le système utilisera automatiquement l'image du service comme fallback
- Les bannières doivent être dans `public/` (pas dans `public/services/`)
- Utilisez le format PNG pour les bannières (comme `banner-demenagement.png`)

## 🚀 Vérification

Après avoir ajouté vos bannières :
1. Lancez le serveur : `npm run dev`
2. Visitez chaque page de service pour vérifier que les bannières s'affichent
3. Vérifiez sur mobile et desktop

---

**Besoin d'aide ?** Les bannières doivent être accessibles via le chemin `/banner-[nom-service].png` depuis la racine du site.


