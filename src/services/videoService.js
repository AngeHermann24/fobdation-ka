import { supabase } from '../supabaseClient';

/**
 * Service pour gérer les vidéos
 */

// Upload d'une vidéo vers Supabase Storage
export const uploadVideo = async (file, bucket = 'videos', folder = '') => {
  try {
    // Validation du fichier
    const maxSize = 50 * 1024 * 1024; // 50 MB
    if (file.size > maxSize) {
      throw new Error('La vidéo est trop volumineuse (max 50 MB)');
    }

    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Format de vidéo non supporté. Utilisez MP4, WebM ou OGG');
    }

    // Générer un nom de fichier unique
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    // Upload vers Supabase Storage
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

    return { 
      success: true, 
      data: { 
        path: filePath, 
        url: publicUrl,
        size: file.size,
        type: file.type
      } 
    };
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
    console.error('Erreur lors de la suppression de la vidéo:', error);
    return { success: false, error: error.message };
  }
};

// Lister toutes les vidéos d'un bucket
export const listVideos = async (bucket = 'videos', folder = '') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      });

    if (error) throw error;

    // Ajouter les URLs publiques
    const videosWithUrls = data.map(video => {
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(folder ? `${folder}/${video.name}` : video.name);
      
      return {
        ...video,
        url: publicUrl
      };
    });

    return { success: true, data: videosWithUrls };
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos:', error);
    return { success: false, error: error.message };
  }
};

// Obtenir l'URL d'une vidéo
export const getVideoUrl = (filePath, bucket = 'videos') => {
  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);
  
  return publicUrl;
};

// Obtenir les métadonnées d'une vidéo
export const getVideoMetadata = async (filePath, bucket = 'videos') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list('', {
        search: filePath
      });

    if (error) throw error;
    
    const videoInfo = data.find(item => item.name === filePath.split('/').pop());
    return { success: true, data: videoInfo };
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées:', error);
    return { success: false, error: error.message };
  }
};

// Créer une miniature de vidéo (nécessite un traitement côté serveur)
export const generateThumbnail = async (videoFile) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    video.addEventListener('loadeddata', () => {
      // Capturer la première frame
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        resolve(new File([blob], 'thumbnail.jpg', { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.8);
    });

    video.addEventListener('error', (error) => {
      reject(error);
    });

    video.src = URL.createObjectURL(videoFile);
    video.currentTime = 1; // Capturer à 1 seconde
  });
};
