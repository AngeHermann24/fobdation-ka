import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

// Créer le client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fonction pour vérifier la connexion
export const checkConnection = async () => {
  try {
    const { data, error } = await supabase.from('_health').select('*').limit(1);
    if (error) throw error;
    console.log('✅ Connexion Supabase réussie');
    return true;
  } catch (error) {
    console.error('❌ Erreur de connexion Supabase:', error.message);
    return false;
  }
};
