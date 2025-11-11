# 🚀 Pousser le code vers GitHub

## Étape 1 : Créer le dépôt sur GitHub

1. Allez sur https://github.com
2. Cliquez sur "+" → "New repository"
3. Nom : `fondation-kalehaka`
4. Visibilité : **Private** (recommandé)
5. NE cochez PAS "Initialize with README"
6. Cliquez sur "Create repository"

## Étape 2 : Lier et pousser le code

Une fois le dépôt créé, GitHub vous donnera des commandes. Utilisez celles-ci :

```bash
# Remplacez YOUR_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/YOUR_USERNAME/fondation-kalehaka.git

# Renommer la branche en main (standard GitHub)
git branch -M main

# Pousser le code
git push -u origin main
```

## Étape 3 : Commandes pour les futurs commits

Après avoir fait des modifications :

```bash
# Voir les fichiers modifiés
git status

# Ajouter tous les fichiers modifiés
git add .

# Créer un commit avec un message
git commit -m "Description de vos modifications"

# Pousser vers GitHub
git push
```

## 🔒 Sécurité : Vérifier que .env est ignoré

Avant de pousser, vérifiez que le fichier `.env` n'est PAS dans la liste :

```bash
git status
```

Si vous voyez `.env` dans la liste, c'est un problème ! Exécutez :

```bash
git rm --cached .env
git commit -m "Remove .env from tracking"
```

## 📝 Commandes Git utiles

```bash
# Voir l'historique des commits
git log --oneline

# Voir les différences avant de commiter
git diff

# Annuler les modifications locales
git checkout -- nom_du_fichier

# Créer une nouvelle branche
git checkout -b nom-de-la-branche

# Changer de branche
git checkout main

# Fusionner une branche
git merge nom-de-la-branche
```

## 🌐 Déploiement automatique (Optionnel)

Une fois sur GitHub, vous pouvez déployer automatiquement sur :

### Netlify
1. Allez sur https://netlify.com
2. "New site from Git"
3. Connectez votre dépôt GitHub
4. Build command : `npm run build`
5. Publish directory : `build`
6. Ajoutez vos variables d'environnement dans Netlify

### Vercel
1. Allez sur https://vercel.com
2. "Import Project"
3. Connectez votre dépôt GitHub
4. Vercel détecte automatiquement React
5. Ajoutez vos variables d'environnement

---

**Fondation KALEHAKA** © 2024
