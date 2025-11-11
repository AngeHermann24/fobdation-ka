import { supabase } from '../supabaseClient';

/**
 * Service pour gérer les messages de contact
 */

// Envoyer un message de contact
export const sendContactMessage = async (messageData) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: messageData.name,
          email: messageData.email,
          phone: messageData.phone,
          subject: messageData.subject,
          message: messageData.message,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return { success: false, error: error.message };
  }
};

// Récupérer tous les messages de contact (pour l'admin)
export const getAllContactMessages = async () => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    return { success: false, error: error.message };
  }
};

// Marquer un message comme lu
export const markMessageAsRead = async (messageId) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .update({ is_read: true })
      .eq('id', messageId)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du message:', error);
    return { success: false, error: error.message };
  }
};
