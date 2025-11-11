/**
 * Configuration du stockage Supabase
 */

export const STORAGE_CONFIG = {
  // Tailles maximales
  maxImageSize: 5 * 1024 * 1024, // 5 MB
  maxVideoSize: 50 * 1024 * 1024, // 50 MB
  
  // Types de fichiers autorisés
  allowedImageTypes: [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml'
  ],
  
  allowedVideoTypes: [
    'video/mp4',
    'video/webm',
    'video/ogg',
    'video/quicktime'
  ],
  
  // Noms des buckets
  buckets: {
    gallery: 'gallery',
    videos: 'videos',
    events: 'events',
    team: 'team',
    documents: 'documents'
  },
  
  // Dossiers dans les buckets
  folders: {
    gallery: {
      events: 'events',
      festitoh: 'events/festitoh',
      gala: 'events/gala',
      team: 'team',
      general: 'general'
    },
    videos: {
      events: 'events',
      testimonials: 'testimonials',
      promotions: 'promotions',
      tutorials: 'tutorials'
    }
  },
  
  // Configuration de compression
  imageCompression: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.85
  },
  
  // Configuration des miniatures
  thumbnails: {
    small: { width: 150, height: 150 },
    medium: { width: 400, height: 300 },
    large: { width: 800, height: 600 }
  }
};

// Fonction utilitaire pour valider un fichier image
export const validateImageFile = (file) => {
  const errors = [];
  
  if (!file) {
    errors.push('Aucun fichier sélectionné');
    return { valid: false, errors };
  }
  
  if (!STORAGE_CONFIG.allowedImageTypes.includes(file.type)) {
    errors.push('Format d\'image non supporté. Utilisez JPG, PNG, GIF ou WebP');
  }
  
  if (file.size > STORAGE_CONFIG.maxImageSize) {
    const maxSizeMB = STORAGE_CONFIG.maxImageSize / (1024 * 1024);
    errors.push(`L'image est trop volumineuse (max ${maxSizeMB} MB)`);
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Fonction utilitaire pour valider un fichier vidéo
export const validateVideoFile = (file) => {
  const errors = [];
  
  if (!file) {
    errors.push('Aucun fichier sélectionné');
    return { valid: false, errors };
  }
  
  if (!STORAGE_CONFIG.allowedVideoTypes.includes(file.type)) {
    errors.push('Format de vidéo non supporté. Utilisez MP4, WebM ou OGG');
  }
  
  if (file.size > STORAGE_CONFIG.maxVideoSize) {
    const maxSizeMB = STORAGE_CONFIG.maxVideoSize / (1024 * 1024);
    errors.push(`La vidéo est trop volumineuse (max ${maxSizeMB} MB)`);
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Fonction pour formater la taille de fichier
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

// Fonction pour obtenir l'extension d'un fichier
export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
};

// Fonction pour générer un nom de fichier unique
export const generateUniqueFileName = (originalName) => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  const extension = getFileExtension(originalName);
  return `${timestamp}_${random}.${extension}`;
};
