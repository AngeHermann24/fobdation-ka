-- ============================================
-- CRÉATION DES BUCKETS STORAGE
-- Fondation KALEHAKA
-- ============================================

-- Note : Ces commandes doivent être exécutées dans le SQL Editor de Supabase
-- Les buckets seront créés avec accès public pour la lecture

-- ============================================
-- 1. CRÉER LES BUCKETS
-- ============================================

-- Bucket pour la galerie d'images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery',
  'gallery',
  true,
  5242880, -- 5 MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Bucket pour les vidéos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  52428800, -- 50 MB
  ARRAY['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime']
)
ON CONFLICT (id) DO NOTHING;

-- Bucket pour les événements
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'events',
  'events',
  true,
  5242880, -- 5 MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Bucket pour l'équipe
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'team',
  'team',
  true,
  5242880, -- 5 MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Bucket pour les documents
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'documents',
  'documents',
  false, -- Privé
  10485760, -- 10 MB
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- 2. POLITIQUES DE SÉCURITÉ POUR GALLERY
-- ============================================

-- Lecture publique pour gallery
CREATE POLICY "Lecture publique gallery"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery');

-- Upload authentifié pour gallery
CREATE POLICY "Upload authentifié gallery"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- Mise à jour authentifiée pour gallery
CREATE POLICY "Update authentifié gallery"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- Suppression authentifiée pour gallery
CREATE POLICY "Delete authentifié gallery"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- ============================================
-- 3. POLITIQUES DE SÉCURITÉ POUR VIDEOS
-- ============================================

-- Lecture publique pour videos
CREATE POLICY "Lecture publique videos"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');

-- Upload authentifié pour videos
CREATE POLICY "Upload authentifié videos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'videos' 
  AND auth.role() = 'authenticated'
);

-- Mise à jour authentifiée pour videos
CREATE POLICY "Update authentifié videos"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'videos' 
  AND auth.role() = 'authenticated'
);

-- Suppression authentifiée pour videos
CREATE POLICY "Delete authentifié videos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'videos' 
  AND auth.role() = 'authenticated'
);

-- ============================================
-- 4. POLITIQUES DE SÉCURITÉ POUR EVENTS
-- ============================================

-- Lecture publique pour events
CREATE POLICY "Lecture publique events"
ON storage.objects FOR SELECT
USING (bucket_id = 'events');

-- Upload authentifié pour events
CREATE POLICY "Upload authentifié events"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'events' 
  AND auth.role() = 'authenticated'
);

-- Suppression authentifiée pour events
CREATE POLICY "Delete authentifié events"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'events' 
  AND auth.role() = 'authenticated'
);

-- ============================================
-- 5. POLITIQUES DE SÉCURITÉ POUR TEAM
-- ============================================

-- Lecture publique pour team
CREATE POLICY "Lecture publique team"
ON storage.objects FOR SELECT
USING (bucket_id = 'team');

-- Upload authentifié pour team
CREATE POLICY "Upload authentifié team"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'team' 
  AND auth.role() = 'authenticated'
);

-- Suppression authentifiée pour team
CREATE POLICY "Delete authentifié team"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'team' 
  AND auth.role() = 'authenticated'
);

-- ============================================
-- 6. POLITIQUES DE SÉCURITÉ POUR DOCUMENTS (PRIVÉ)
-- ============================================

-- Lecture authentifiée uniquement pour documents
CREATE POLICY "Lecture authentifiée documents"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'documents' 
  AND auth.role() = 'authenticated'
);

-- Upload authentifié pour documents
CREATE POLICY "Upload authentifié documents"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'documents' 
  AND auth.role() = 'authenticated'
);

-- Suppression authentifiée pour documents
CREATE POLICY "Delete authentifié documents"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'documents' 
  AND auth.role() = 'authenticated'
);

-- ============================================
-- 7. VÉRIFICATION DES BUCKETS CRÉÉS
-- ============================================

-- Afficher tous les buckets créés
SELECT id, name, public, file_size_limit, created_at
FROM storage.buckets
ORDER BY created_at DESC;

-- ============================================
-- NOTES IMPORTANTES
-- ============================================

/*
1. Les buckets 'gallery', 'videos', 'events', 'team' sont PUBLICS
   - Tout le monde peut lire les fichiers
   - Seuls les utilisateurs authentifiés peuvent uploader/supprimer

2. Le bucket 'documents' est PRIVÉ
   - Seuls les utilisateurs authentifiés peuvent lire/uploader/supprimer

3. Limites de taille :
   - Images : 5 MB
   - Vidéos : 50 MB
   - Documents : 10 MB

4. Pour permettre l'upload PUBLIC (non recommandé en production) :
   Remplacez "auth.role() = 'authenticated'" par "true"

5. Pour tester si les buckets sont créés :
   SELECT * FROM storage.buckets;

6. Pour voir les politiques :
   SELECT * FROM pg_policies WHERE tablename = 'objects';
*/
