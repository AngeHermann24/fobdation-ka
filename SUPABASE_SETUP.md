# 🚀 Configuration Supabase pour Fondation KALEHAKA

## 📋 Étapes de Configuration

### 1. Créer un Compte Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Créez un compte gratuit
3. Créez un nouveau projet
   - Nom du projet : `fondation-kalehaka`
   - Mot de passe de la base de données : (choisissez un mot de passe fort)
   - Région : Choisissez la plus proche (Europe West par exemple)

### 2. Créer les Tables

1. Dans votre projet Supabase, allez dans **SQL Editor**
2. Copiez tout le contenu du fichier `supabase_schema.sql`
3. Collez-le dans l'éditeur SQL
4. Cliquez sur **Run** pour exécuter le script

Cela créera automatiquement :
- ✅ Table `contacts` (messages de contact)
- ✅ Table `donations` (dons)
- ✅ Table `appointments` (rendez-vous)
- ✅ Table `gallery_images` (galerie photos)
- ✅ Table `events` (événements)
- ✅ Index pour les performances
- ✅ Politiques de sécurité (RLS)
- ✅ Triggers automatiques

### 3. Obtenir les Clés API

1. Dans votre projet Supabase, allez dans **Settings** > **API**
2. Copiez les informations suivantes :
   - **Project URL** (URL du projet)
   - **anon public** key (Clé publique anonyme)

### 4. Configurer les Variables d'Environnement

1. Créez un fichier `.env` à la racine du projet (à côté de `package.json`)
2. Ajoutez vos clés Supabase :

```env
REACT_APP_SUPABASE_URL=https://votre-projet.supabase.co
REACT_APP_SUPABASE_ANON_KEY=votre_cle_anon_publique
```

⚠️ **IMPORTANT** : Ne partagez JAMAIS ces clés publiquement !

### 5. Redémarrer l'Application

```bash
npm start
```

## 📊 Structure des Tables

### Table `contacts`
- Messages de contact du formulaire
- Champs : name, email, phone, subject, message, is_read

### Table `donations`
- Enregistrement des dons
- Champs : donor_name, donor_email, amount, payment_method, status

### Table `appointments`
- Demandes de rendez-vous
- Champs : name, email, phone, subject, preferred_date, preferred_time, status

### Table `gallery_images`
- Images de la galerie
- Champs : title, description, image_url, album

### Table `events`
- Événements de la fondation
- Champs : title, description, event_date, location

## 🔒 Sécurité (RLS - Row Level Security)

Les politiques de sécurité sont configurées pour :
- ✅ **Insertion publique** : Tout le monde peut soumettre des formulaires
- ✅ **Lecture admin** : Seuls les utilisateurs authentifiés peuvent lire les données
- ✅ **Galerie publique** : Tout le monde peut voir les images actives

## 🛠️ Services Disponibles

### Contact Service (`src/services/contactService.js`)
```javascript
import { sendContactMessage } from './services/contactService';

// Envoyer un message
await sendContactMessage({
  name: 'Jean Dupont',
  email: 'jean@example.com',
  phone: '+225 XX XX XX XX',
  subject: 'Demande d\'information',
  message: 'Bonjour...'
});
```

### Donation Service (`src/services/donationService.js`)
```javascript
import { recordDonation } from './services/donationService';

// Enregistrer un don
await recordDonation({
  name: 'Marie Martin',
  email: 'marie@example.com',
  amount: 50000,
  method: 'Mobile Money',
  message: 'Pour l\'éducation'
});
```

### Appointment Service (`src/services/appointmentService.js`)
```javascript
import { createAppointment } from './services/appointmentService';

// Créer un rendez-vous
await createAppointment({
  name: 'Paul Kouassi',
  email: 'paul@example.com',
  phone: '+225 XX XX XX XX',
  subject: 'Partenariat',
  date: '2024-12-15',
  time: '10:00',
  message: 'Je souhaite discuter...'
});
```

## 📈 Dashboard Admin (À venir)

Pour créer un dashboard admin :
1. Utilisez Supabase Auth pour l'authentification
2. Créez des pages protégées
3. Affichez les données des tables
4. Gérez les statuts (pending, completed, etc.)

## 🔗 Ressources Utiles

- [Documentation Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## ⚡ Prochaines Étapes

1. ✅ Installer Supabase : `npm install @supabase/supabase-js`
2. ✅ Créer le projet Supabase
3. ✅ Exécuter le script SQL
4. ✅ Configurer les variables d'environnement
5. 🔄 Intégrer les services dans les formulaires
6. 🔄 Créer un dashboard admin
7. 🔄 Ajouter l'authentification

---

**Fondation KALEHAKA** © 2024
