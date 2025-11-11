-- ============================================
-- SCHÉMA DE BASE DE DONNÉES SUPABASE
-- Fondation KALEHAKA
-- ============================================

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des dons
CREATE TABLE IF NOT EXISTS donations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    donor_name VARCHAR(255) NOT NULL,
    donor_email VARCHAR(255) NOT NULL,
    donor_phone VARCHAR(50),
    amount DECIMAL(10, 2),
    payment_method VARCHAR(100) NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending', -- pending, completed, cancelled
    transaction_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des rendez-vous
CREATE TABLE IF NOT EXISTS appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, cancelled, completed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table de la galerie (optionnel)
CREATE TABLE IF NOT EXISTS gallery_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    album VARCHAR(100) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des événements (optionnel)
CREATE TABLE IF NOT EXISTS events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME,
    location VARCHAR(500),
    image_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEX POUR AMÉLIORER LES PERFORMANCES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_is_read ON contacts(is_read);

CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations(status);

CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);

CREATE INDEX IF NOT EXISTS idx_gallery_album ON gallery_images(album);
CREATE INDEX IF NOT EXISTS idx_gallery_active ON gallery_images(is_active);

-- ============================================
-- POLITIQUES DE SÉCURITÉ (RLS - Row Level Security)
-- ============================================

-- Activer RLS sur toutes les tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Politique pour les contacts (insertion publique, lecture admin uniquement)
CREATE POLICY "Permettre insertion publique contacts" ON contacts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Permettre lecture admin contacts" ON contacts
    FOR SELECT USING (auth.role() = 'authenticated');

-- Politique pour les dons (insertion publique, lecture admin uniquement)
CREATE POLICY "Permettre insertion publique donations" ON donations
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Permettre lecture admin donations" ON donations
    FOR SELECT USING (auth.role() = 'authenticated');

-- Politique pour les rendez-vous (insertion publique, lecture admin uniquement)
CREATE POLICY "Permettre insertion publique appointments" ON appointments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Permettre lecture admin appointments" ON appointments
    FOR SELECT USING (auth.role() = 'authenticated');

-- Politique pour la galerie (lecture publique, modification admin)
CREATE POLICY "Permettre lecture publique gallery" ON gallery_images
    FOR SELECT USING (is_active = true);

CREATE POLICY "Permettre modification admin gallery" ON gallery_images
    FOR ALL USING (auth.role() = 'authenticated');

-- Politique pour les événements (lecture publique, modification admin)
CREATE POLICY "Permettre lecture publique events" ON events
    FOR SELECT USING (is_active = true);

CREATE POLICY "Permettre modification admin events" ON events
    FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- FONCTIONS UTILITAIRES
-- ============================================

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_at
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_donations_updated_at BEFORE UPDATE ON donations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_gallery_updated_at BEFORE UPDATE ON gallery_images
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
