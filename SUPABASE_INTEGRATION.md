# 🗄️ Intégration Supabase - Fondation KALEHAKA

## ✅ Ce qui a été configuré

### 📦 Installation
- ✅ Package `@supabase/supabase-js` installé
- ✅ Client Supabase configuré (`src/supabaseClient.js`)
- ✅ Variables d'environnement préparées (`.env.example`)

### 🛠️ Services Créés

#### 1. **Contact Service** (`src/services/contactService.js`)
Gère les messages du formulaire de contact
- `sendContactMessage()` - Envoyer un message
- `getAllContactMessages()` - Récupérer tous les messages (admin)
- `markMessageAsRead()` - Marquer comme lu

#### 2. **Donation Service** (`src/services/donationService.js`)
Gère les dons et contributions
- `recordDonation()` - Enregistrer un don
- `getAllDonations()` - Récupérer tous les dons (admin)
- `updateDonationStatus()` - Mettre à jour le statut
- `getDonationStats()` - Obtenir les statistiques

#### 3. **Appointment Service** (`src/services/appointmentService.js`)
Gère les demandes de rendez-vous
- `createAppointment()` - Créer un rendez-vous
- `getAllAppointments()` - Récupérer tous les rendez-vous (admin)
- `updateAppointmentStatus()` - Mettre à jour le statut
- `deleteAppointment()` - Supprimer un rendez-vous

#### 4. **Gallery Service** (`src/services/galleryService.js`)
Gère la galerie d'images
- `getGalleryImages()` - Récupérer les images
- `getAlbums()` - Récupérer les albums
- `addGalleryImage()` - Ajouter une image (admin)
- `updateGalleryImage()` - Modifier une image (admin)
- `deleteGalleryImage()` - Supprimer une image (admin)
- `uploadImage()` - Upload vers Supabase Storage

### 🗃️ Base de Données

#### Tables créées (via `supabase_schema.sql`)
1. **contacts** - Messages de contact
2. **donations** - Dons et contributions
3. **appointments** - Rendez-vous
4. **gallery_images** - Images de la galerie
5. **events** - Événements de la fondation

#### Sécurité (RLS)
- ✅ Row Level Security activé sur toutes les tables
- ✅ Insertion publique pour les formulaires
- ✅ Lecture réservée aux admins authentifiés
- ✅ Galerie publique en lecture seule

## 🚀 Prochaines Étapes

### 1. Configuration Supabase (À FAIRE)

1. **Créer un compte Supabase**
   - Allez sur https://supabase.com
   - Créez un nouveau projet

2. **Exécuter le script SQL**
   - Ouvrez le SQL Editor dans Supabase
   - Copiez le contenu de `supabase_schema.sql`
   - Exécutez le script

3. **Configurer les variables d'environnement**
   - Créez un fichier `.env` à la racine
   - Ajoutez vos clés Supabase :
   ```env
   REACT_APP_SUPABASE_URL=https://votre-projet.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=votre_cle_anon
   ```

4. **Redémarrer l'application**
   ```bash
   npm start
   ```

### 2. Intégrer les Services dans les Formulaires

#### Exemple : Formulaire de Contact

```javascript
import { sendContactMessage } from '../services/contactService';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const result = await sendContactMessage({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message
  });

  if (result.success) {
    alert('Message envoyé avec succès !');
    // Réinitialiser le formulaire
  } else {
    alert('Erreur : ' + result.error);
  }
};
```

#### Exemple : Formulaire de Don

```javascript
import { recordDonation } from '../services/donationService';

const handleDonation = async (e) => {
  e.preventDefault();
  
  const result = await recordDonation({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    amount: formData.amount,
    method: selectedMethod,
    message: formData.message
  });

  if (result.success) {
    alert('Don enregistré avec succès !');
  } else {
    alert('Erreur : ' + result.error);
  }
};
```

#### Exemple : Formulaire de Rendez-vous

```javascript
import { createAppointment } from '../services/appointmentService';

const handleAppointment = async (e) => {
  e.preventDefault();
  
  const result = await createAppointment({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    date: formData.date,
    time: formData.time,
    message: formData.message
  });

  if (result.success) {
    alert('Rendez-vous demandé avec succès !');
  } else {
    alert('Erreur : ' + result.error);
  }
};
```

### 3. Créer un Dashboard Admin (Optionnel)

Pour gérer les données reçues :

1. **Authentification Admin**
   ```javascript
   import { supabase } from './supabaseClient';
   
   // Connexion
   const { data, error } = await supabase.auth.signInWithPassword({
     email: 'admin@fondation-kalehaka.org',
     password: 'mot_de_passe_securise'
   });
   ```

2. **Pages Admin**
   - `/admin/contacts` - Voir les messages
   - `/admin/donations` - Gérer les dons
   - `/admin/appointments` - Gérer les rendez-vous
   - `/admin/gallery` - Gérer la galerie

3. **Composants Admin**
   - Tableau de bord avec statistiques
   - Liste des messages non lus
   - Graphiques des dons
   - Calendrier des rendez-vous

## 📊 Exemple de Dashboard

```javascript
import { getAllContactMessages, getAllDonations, getDonationStats } from './services';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    const loadStats = async () => {
      const donationStats = await getDonationStats();
      const contacts = await getAllContactMessages();
      const donations = await getAllDonations();
      
      setStats({
        totalDonations: donationStats.data.totalAmount,
        pendingContacts: contacts.data.filter(c => !c.is_read).length,
        totalDonors: donations.data.length
      });
    };
    
    loadStats();
  }, []);
  
  return (
    <div className="admin-dashboard">
      <h1>Tableau de Bord</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Dons Totaux</h3>
          <p>{stats?.totalDonations} FCFA</p>
        </div>
        <div className="stat-card">
          <h3>Messages Non Lus</h3>
          <p>{stats?.pendingContacts}</p>
        </div>
        <div className="stat-card">
          <h3>Donateurs</h3>
          <p>{stats?.totalDonors}</p>
        </div>
      </div>
    </div>
  );
};
```

## 🔐 Sécurité

### ⚠️ IMPORTANT
- ❌ Ne JAMAIS commiter le fichier `.env`
- ❌ Ne JAMAIS partager vos clés API publiquement
- ✅ Utiliser les politiques RLS de Supabase
- ✅ Valider les données côté serveur
- ✅ Utiliser HTTPS en production

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Storage](https://supabase.com/docs/guides/storage)

## 💡 Conseils

1. **Testez d'abord en local** avant de déployer
2. **Utilisez des transactions** pour les opérations critiques
3. **Ajoutez des logs** pour déboguer facilement
4. **Créez des sauvegardes** régulières de la base de données
5. **Surveillez les quotas** du plan gratuit Supabase

---

**Fondation KALEHAKA** © 2024
