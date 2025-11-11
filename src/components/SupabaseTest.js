import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const SupabaseTest = () => {
  const [status, setStatus] = useState('Vérification...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test simple de connexion
        const { data, error } = await supabase
          .from('contacts')
          .select('count')
          .limit(1);

        if (error) {
          // Si l'erreur est "relation does not exist", c'est que la connexion fonctionne mais la table n'existe pas encore
          if (error.message.includes('does not exist')) {
            setStatus('✅ Connexion Supabase OK ! Exécutez le script SQL pour créer les tables.');
            setIsConnected(true);
          } else {
            setStatus('❌ Erreur : ' + error.message);
            setIsConnected(false);
          }
        } else {
          setStatus('✅ Connexion Supabase réussie ! Tables créées.');
          setIsConnected(true);
        }
      } catch (err) {
        setStatus('❌ Erreur de connexion : ' + err.message);
        setIsConnected(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '15px 20px',
      background: isConnected ? '#75B843' : '#E12147',
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 9999,
      fontSize: '14px',
      fontWeight: '600'
    }}>
      {status}
    </div>
  );
};

export default SupabaseTest;
