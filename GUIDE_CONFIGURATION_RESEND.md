# Guide de configuration Resend pour le formulaire de contact

Ce guide te permet de mettre en place l'envoi d'emails du formulaire de contact en moins de 30 minutes.

## Pourquoi Resend ?

- **Gratuit** jusqu'à 3 000 emails/mois (largement suffisant pour Torres Transport)
- Emails envoyés depuis `devis@torrestransport.fr` (image pro, pas de hotmail)
- Délivrabilité excellente (pas de spam)
- Logs et tableau de bord intégrés

## Étape 1 — Créer le compte Resend

1. Aller sur https://resend.com/signup
2. Créer un compte avec l'email de Ludovic (`torrestransport@hotmail.com` ou un email pro)
3. Vérifier l'email de validation

## Étape 2 — Vérifier le domaine torrestransport.fr

Pour envoyer des emails depuis `@torrestransport.fr`, il faut prouver à Resend qu'on possède ce domaine.

1. Dans le dashboard Resend → onglet **Domains** → bouton **Add Domain**
2. Saisir `torrestransport.fr`
3. Resend affiche **3 enregistrements DNS** à ajouter :
   - 1 enregistrement **TXT** (vérification SPF)
   - 2 enregistrements **CNAME** (DKIM)

4. Aller chez le **registrar du domaine** (probablement SiteGround vu les anciens identifiants WordPress) et ajouter ces 3 enregistrements DNS.

5. Revenir sur Resend, cliquer **Verify DNS Records**. La vérification prend entre 5 minutes et 48h.

> 💡 Si tu n'as plus accès au DNS chez SiteGround, on peut migrer le domaine vers Cloudflare (gratuit) ou Vercel pour gérer plus facilement.

## Étape 3 — Créer une API Key

1. Dashboard Resend → onglet **API Keys** → bouton **Create API Key**
2. Nommer la clé : `torrestransport-prod`
3. Permission : **Sending access** (sending only, pas full access — sécurité)
4. Domain : sélectionner `torrestransport.fr`
5. Copier la clé qui apparaît (elle commence par `re_...`). **Tu ne pourras plus la revoir.**

## Étape 4 — Ajouter la clé sur Vercel

Le site est déployé sur Vercel, c'est là qu'il faut configurer la variable d'environnement.

1. Aller sur https://vercel.com/dashboard → projet Torres Transport
2. Onglet **Settings** → **Environment Variables**
3. Ajouter 3 variables :

| Nom | Valeur | Environnement |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxx` | Production + Preview |
| `RESEND_FROM_EMAIL` | `devis@torrestransport.fr` | Production + Preview |
| `CONTACT_TO_EMAIL` | `contact@torrestransport.fr` (l'email où Ludovic recevra les demandes) | Production + Preview |

4. Sauvegarder
5. Redéployer le site (onglet **Deployments** → ⋯ → **Redeploy**)

## Étape 5 — Tester

1. Aller sur https://torrestransport.fr/contact
2. Remplir le formulaire avec une vraie adresse email (la tienne pour tester)
3. Cocher la case RGPD
4. Cliquer **Envoyer**
5. Vérifier que :
   - Le message **✅ Demande envoyée !** apparaît
   - Ludovic reçoit l'email à `contact@torrestransport.fr` (vérifier les spams aussi)
   - Le tableau de bord Resend affiche l'email envoyé dans **Emails**

## Test en local (développement)

Pour tester avant le déploiement Vercel :

```bash
# Copier le template
cp .env.example .env

# Éditer .env et remplir RESEND_API_KEY
# Puis lancer le serveur local
npm run dev
```

Le formulaire tournera sur http://localhost:4321/contact et enverra de vrais emails.

> ⚠️ Le fichier `.env` est dans `.gitignore` — il ne sera **jamais committé**. C'est normal et sécurisé.

## En cas de problème

| Symptôme | Cause probable | Solution |
|---|---|---|
| "Configuration serveur incomplète" | `RESEND_API_KEY` manquante | Vérifier les env vars Vercel + redéployer |
| L'email arrive mais en spam | Domaine non vérifié | Attendre la propagation DNS (jusqu'à 48h) |
| "Erreur réseau" | Adapter Vercel non actif | Vérifier que `astro.config.mjs` contient bien `adapter: vercel(...)` |
| 403 / 401 | API Key invalide ou expirée | Régénérer une clé sur Resend |

## Coûts

- **Resend** : 0 € jusqu'à 3 000 emails/mois (puis 20 $/mois pour 50 000)
- **Vercel** : 0 € (plan Hobby) tant que < 100 GB-heures de calcul (largement suffisant)
- **Domaine** : déjà payé par Ludovic

**Total mensuel** : 0 €. Que du gratuit tant qu'on reste sous les seuils.

## Prochaines améliorations possibles

- [ ] Email de **confirmation automatique** au client (en plus de la notif à Ludovic)
- [ ] Stocker les demandes dans une **base Supabase** (gratuit) pour ne rien perdre
- [ ] Notification **WhatsApp** ou **SMS** à Ludovic via Twilio
- [ ] Connexion à un **CRM** (Notion, HubSpot Free, Trello)

---

**Document créé le 25 avril 2026 par Evan**
Pour toute question : `evanbdr35@gmail.com`
