# 📦 Configuration Supabase Storage - Buckets Images & Vidéos

## 🎯 Objectif

Créer des buckets de stockage pour :
- 📸 **Images** : Photos de la galerie, événements, équipe
- 🎥 **Vidéos** : Vidéos des événements, témoignages, promotions

## 🚀 Étape 1 : Créer les Buckets

### Dans Supabase Dashboard

1. **Allez dans Storage**
   - Menu latéral → **Storage**

2. **Créer le bucket "gallery"**
   - Cliquez sur **New bucket**
   - Nom : `gallery`
   - Public : ✅ **Coché** (pour que les images soient accessibles publiquement)
   - Cliquez sur **Create bucket**

3. **Créer le bucket "videos"**
   - Cliquez sur **New bucket**
   - Nom : `videos`
   - Public : ✅ **Coché**
   - Cliquez sur **Create bucket**

4. **Créer le bucket "events"** (optionnel)
   - Nom : `events`
   - Public : ✅ **Coché**
   - Pour les photos d'événements spécifiques

5. **Créer le bucket "team"** (optionnel)
   - Nom : `team`
   - Public : ✅ **Coché**
   - Pour les photos de l'équipe

## 🔒 Étape 2 : Configurer les Politiques de Sécurité

### Politique pour Upload Public (Lecture seule)

Dans **Storage** → Sélectionnez le bucket → **Policies** :

#### Pour le bucket "gallery"

```sql
-- Permettre la lecture publique
CREATE POLICY "Lecture publique gallery"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery');

-- Permettre l'upload authentifié uniquement
CREATE POLICY "Upload admin gallery"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- Permettre la suppression admin uniquement
CREATE POLICY "Delete admin gallery"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);
```

#### Pour le bucket "videos"

```sql
-- Lecture publique
CREATE POLICY "Lecture publique videos"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');

-- Upload admin
CREATE POLICY "Upload admin videos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'videos' 
  AND auth.role() = 'authenticated'
);

-- Delete admin
CREATE POLICY "Delete admin videos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'videos' 
  AND auth.role() = 'authenticated'
);
```

### ⚠️ Alternative : Upload Public (Non recommandé en production)

Si vous voulez permettre l'upload public (pour les formulaires) :

```sql
-- Upload public (ATTENTION : Peut être abusé)
CREATE POLICY "Upload public gallery"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'gallery');
```

## 📝 Étape 3 : Configurer les Limites de Fichiers

### Dans Supabase Dashboard

1. **Storage Settings**
   - Taille max par fichier : **50 MB** (par défaut)
   - Types de fichiers autorisés : 
     - Images : `image/jpeg, image/png, image/gif, image/webp`
     - Vidéos : `video/mp4, video/webm, video/ogg`

### Configuration dans le code

Créez un fichier de configuration :

```javascript
// src/config/storageConfig.js
export const STORAGE_CONFIG = {
  maxImageSize: 5 * 1024 * 1024, // 5 MB
  maxVideoSize: 50 * 1024 * 1024, // 50 MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  allowedVideoTypes: ['video/mp4', 'video/webm', 'video/ogg'],
  buckets: {
    gallery: 'gallery',
    videos: 'videos',
    events: 'events',
    team: 'team'
  }
};
```

## 🛠️ Étape 4 : Créer les Services d'Upload

Les services sont déjà créés dans `src/services/galleryService.js` !

### Utilisation du Service

```javascript
import { uploadImage } from '../services/galleryService';

// Upload d'une image
const handleImageUpload = async (file) => {
  const result = await uploadImage(file, 'gallery');
  
  if (result.success) {
    console.log('URL de l\'image:', result.data.url);
    // Enregistrer l'URL dans la base de données
  } else {
    console.error('Erreur:', result.error);
  }
};
```

## 📸 Étape 5 : Créer un Composant d'Upload

Créez un composant React pour uploader des images :

```javascript
// src/components/ImageUploader.js
import React, { useState } from 'react';
import { uploadImage } from '../services/galleryService';
import { addGalleryImage } from '../services/galleryService';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    // 1. Upload l'image vers Supabase Storage
    const uploadResult = await uploadImage(file, 'gallery');

    if (uploadResult.success) {
      // 2. Enregistrer l'URL dans la table gallery_images
      const imageData = {
        title: file.name,
        description: '',
        imageUrl: uploadResult.data.url,
        album: 'general',
        displayOrder: 0
      };

      const dbResult = await addGalleryImage(imageData);

      if (dbResult.success) {
        alert('✅ Image uploadée avec succès !');
        setFile(null);
        setPreview(null);
      } else {
        alert('❌ Erreur lors de l\'enregistrement : ' + dbResult.error);
      }
    } else {
      alert('❌ Erreur lors de l\'upload : ' + uploadResult.error);
    }

    setUploading(false);
  };

  return (
    <div className="image-uploader">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange}
        disabled={uploading}
      />
      
      {preview && (
        <div className="preview">
          <img src={preview} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}

      <button 
        onClick={handleUpload} 
        disabled={!file || uploading}
      >
        {uploading ? 'Upload en cours...' : 'Uploader'}
      </button>
    </div>
  );
};

export default ImageUploader;
```

## 🎥 Service pour les Vidéos

Créez un service similaire pour les vidéos :

```javascript
// src/services/videoService.js
import { supabase } from '../supabaseClient';

// Upload d'une vidéo
export const uploadVideo = async (file, bucket = 'videos') => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // Obtenir l'URL publique
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { success: true, data: { path: filePath, url: publicUrl } };
  } catch (error) {
    console.error('Erreur lors de l\'upload de la vidéo:', error);
    return { success: false, error: error.message };
  }
};

// Supprimer une vidéo
export const deleteVideo = async (filePath, bucket = 'videos') => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return { success: false, error: error.message };
  }
};

// Lister toutes les vidéos
export const listVideos = async (bucket = 'videos') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos:', error);
    return { success: false, error: error.message };
  }
};
```

## 📊 Structure Recommandée des Buckets

```
gallery/
├── events/
│   ├── festitoh-2024/
│   ├── gala-2024/
│   └── ...
├── team/
│   ├── board/
│   ├── volunteers/
│   └── ...
└── general/

videos/
├── events/
├── testimonials/
├── promotions/
└── tutorials/

events/
└── [event-name]/
    ├── photos/
    └── videos/

team/
└── members/
```

## 🔧 Optimisation des Images

### Compression avant upload

```javascript
// Fonction pour compresser une image
const compressImage = async (file, maxWidth = 1920, quality = 0.8) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, { type: 'image/jpeg' }));
          },
          'image/jpeg',
          quality
        );
      };
    };
  });
};
```

## 📱 Exemple d'Utilisation Complète

```javascript
// Page Admin pour uploader des photos d'événement
import React, { useState } from 'react';
import { uploadImage } from '../services/galleryService';
import { addGalleryImage } from '../services/galleryService';

const AdminGallery = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    album: 'general',
    file: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Upload l'image
    const uploadResult = await uploadImage(formData.file, 'gallery');

    if (uploadResult.success) {
      // 2. Enregistrer dans la DB
      const result = await addGalleryImage({
        title: formData.title,
        description: formData.description,
        imageUrl: uploadResult.data.url,
        album: formData.album,
        displayOrder: 0
      });

      if (result.success) {
        alert('✅ Photo ajoutée à la galerie !');
        // Reset form
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        required
      />
      
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />

      <select
        value={formData.album}
        onChange={(e) => setFormData({...formData, album: e.target.value})}
      >
        <option value="general">Général</option>
        <option value="festitoh-2024">Festitoh 2024</option>
        <option value="gala-2024">Gala 2024</option>
        <option value="team">Équipe</option>
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
        required
      />

      <button type="submit">Ajouter à la galerie</button>
    </form>
  );
};
```

## ✅ Checklist de Configuration

- [ ] Créer le bucket "gallery" (public)
- [ ] Créer le bucket "videos" (public)
- [ ] Configurer les politiques de sécurité
- [ ] Créer le service videoService.js
- [ ] Tester l'upload d'une image
- [ ] Tester l'upload d'une vidéo
- [ ] Créer un composant d'upload admin
- [ ] Ajouter la compression d'images

## 🔗 Ressources

- [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)
- [Storage Policies](https://supabase.com/docs/guides/storage/security/access-control)
- [Image Optimization](https://supabase.com/docs/guides/storage/serving/image-transformations)

---

**Fondation KALEHAKA** © 2024
