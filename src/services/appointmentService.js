import { supabase } from '../supabaseClient';

/**
 * Service pour gérer les rendez-vous
 */

// Créer une demande de rendez-vous
export const createAppointment = async (appointmentData) => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone,
          subject: appointmentData.subject,
          preferred_date: appointmentData.date,
          preferred_time: appointmentData.time,
          message: appointmentData.message,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error);
    return { success: false, error: error.message };
  }
};

// Récupérer tous les rendez-vous
export const getAllAppointments = async () => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('preferred_date', { ascending: true });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous:', error);
    return { success: false, error: error.message };
  }
};

// Mettre à jour le statut d'un rendez-vous
export const updateAppointmentStatus = async (appointmentId, status) => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('id', appointmentId)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du rendez-vous:', error);
    return { success: false, error: error.message };
  }
};

// Supprimer un rendez-vous
export const deleteAppointment = async (appointmentId) => {
  try {
    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', appointmentId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de la suppression du rendez-vous:', error);
    return { success: false, error: error.message };
  }
};
