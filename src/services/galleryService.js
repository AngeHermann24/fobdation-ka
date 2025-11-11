import { supabase } from '../supabaseClient';

/**
 * Service pour gérer la galerie d'images
 */

// Récupérer toutes les images actives
export const getGalleryImages = async (album = null) => {
  try {
    let query = supabase
      .from('gallery_images')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (album) {
      query = query.eq('album', album);
    }

    const { data, error } = await query;

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la récupération des images:', error);
    return { success: false, error: error.message };
  }
};

// Récupérer les albums disponibles
export const getAlbums = async () => {
  try {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('album')
      .eq('is_active', true);

    if (error) throw error;

    // Extraire les albums uniques
    const uniqueAlbums = [...new Set(data.map(img => img.album))];
    return { success: true, data: uniqueAlbums };
  } catch (error) {
    console.error('Erreur lors de la récupération des albums:', error);
    return { success: false, error: error.message };
  }
};

// Ajouter une image (admin)
export const addGalleryImage = async (imageData) => {
  try {
    const { data, error } = await supabase
      .from('gallery_images')
      .insert([
        {
          title: imageData.title,
          description: imageData.description,
          image_url: imageData.imageUrl,
          album: imageData.album,
          display_order: imageData.displayOrder || 0,
          is_active: true,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'image:', error);
    return { success: false, error: error.message };
  }
};

// Mettre à jour une image (admin)
export const updateGalleryImage = async (imageId, updates) => {
  try {
    const { data, error } = await supabase
      .from('gallery_images')
      .update(updates)
      .eq('id', imageId)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'image:', error);
    return { success: false, error: error.message };
  }
};

// Supprimer une image (admin)
export const deleteGalleryImage = async (imageId) => {
  try {
    const { error } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', imageId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error);
    return { success: false, error: error.message };
  }
};

// Upload d'une image vers Supabase Storage
export const uploadImage = async (file, bucket = 'gallery') => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) throw error;

    // Obtenir l'URL publique
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { success: true, data: { path: filePath, url: publicUrl } };
  } catch (error) {
    console.error('Erreur lors de l\'upload de l\'image:', error);
    return { success: false, error: error.message };
  }
};
