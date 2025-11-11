import { supabase } from '../supabaseClient';

/**
 * Service pour gérer les dons
 */

// Enregistrer un don
export const recordDonation = async (donationData) => {
  try {
    const { data, error } = await supabase
      .from('donations')
      .insert([
        {
          donor_name: donationData.name,
          donor_email: donationData.email,
          donor_phone: donationData.phone,
          amount: donationData.amount,
          payment_method: donationData.method,
          message: donationData.message,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du don:', error);
    return { success: false, error: error.message };
  }
};

// Récupérer tous les dons
export const getAllDonations = async () => {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la récupération des dons:', error);
    return { success: false, error: error.message };
  }
};

// Mettre à jour le statut d'un don
export const updateDonationStatus = async (donationId, status) => {
  try {
    const { data, error } = await supabase
      .from('donations')
      .update({ status })
      .eq('id', donationId)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du don:', error);
    return { success: false, error: error.message };
  }
};

// Obtenir les statistiques des dons
export const getDonationStats = async () => {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('amount, status');

    if (error) throw error;

    const stats = {
      total: data.length,
      totalAmount: data.reduce((sum, don) => sum + (parseFloat(don.amount) || 0), 0),
      pending: data.filter(d => d.status === 'pending').length,
      completed: data.filter(d => d.status === 'completed').length
    };

    return { success: true, data: stats };
  } catch (error) {
    console.error('Erreur lors du calcul des statistiques:', error);
    return { success: false, error: error.message };
  }
};
