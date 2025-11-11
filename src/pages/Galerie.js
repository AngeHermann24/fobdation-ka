import React, { useState } from 'react';
import './Galerie.css';

const Galerie = () => {
  const [selectedAlbum, setSelectedAlbum] = useState('all');

  const albums = [
    { id: 'all', name: 'Toutes les photos', count: 24 },
    { id: 'festitoh', name: 'Festitoh Culture', count: 8 },
    { id: 'social', name: 'Actions sociales', count: 6 },
    { id: 'conferences', name: 'Conférences', count: 4 },
    { id: 'visites', name: 'Visites de terrain', count: 4 },
    { id: 'promotrice', name: 'La promotrice', count: 2 }
  ];

  // Images de démonstration (à remplacer par vos vraies images)
  const photos = [
    { id: 1, album: 'festitoh', url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400', title: 'Festival Festitoh' },
    { id: 2, album: 'festitoh', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400', title: 'Spectacle traditionnel' },
    { id: 3, album: 'social', url: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=400', title: 'Action sociale' },
    { id: 4, album: 'social', url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400', title: 'Aide communautaire' },
    { id: 5, album: 'conferences', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', title: 'Conférence' },
    { id: 6, album: 'conferences', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400', title: 'Débat public' },
    { id: 7, album: 'visites', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400', title: 'Visite terrain' },
    { id: 8, album: 'visites', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400', title: 'Rencontre communauté' },
    { id: 9, album: 'festitoh', url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', title: 'Danse traditionnelle' },
    { id: 10, album: 'festitoh', url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400', title: 'Musique africaine' },
    { id: 11, album: 'social', url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400', title: 'Distribution' },
    { id: 12, album: 'social', url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400', title: 'Soutien enfants' },
    { id: 13, album: 'promotrice', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', title: 'Gisèle GBOBOUO' },
    { id: 14, album: 'promotrice', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', title: 'En action' },
    { id: 15, album: 'festitoh', url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400', title: 'Cérémonie' },
    { id: 16, album: 'conferences', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400', title: 'Atelier formation' },
    { id: 17, album: 'visites', url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400', title: 'Terrain' },
    { id: 18, album: 'festitoh', url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400', title: 'Performance' },
    { id: 19, album: 'social', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400', title: 'Solidarité' },
    { id: 20, album: 'festitoh', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400', title: 'Public festival' },
    { id: 21, album: 'conferences', url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400', title: 'Séminaire' },
    { id: 22, album: 'visites', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400', title: 'Échange' },
    { id: 23, album: 'festitoh', url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400', title: 'Awards' },
    { id: 24, album: 'social', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400', title: 'Noël Afrique' }
  ];

  const filteredPhotos = selectedAlbum === 'all' 
    ? photos 
    : photos.filter(photo => photo.album === selectedAlbum);

  return (
    <div className="galerie-page">
      {/* Header */}
      <section className="page-header galerie-header">
        <div className="container">
          <h1>Galerie Photos</h1>
          <p>Découvrez nos actions en images</p>
        </div>
      </section>

      {/* Albums Filter */}
      <section className="section filter-section">
        <div className="container">
          <div className="album-filters">
            {albums.map(album => (
              <button
                key={album.id}
                className={`filter-btn ${selectedAlbum === album.id ? 'active' : ''}`}
                onClick={() => setSelectedAlbum(album.id)}
              >
                {album.name} ({album.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="section photos-section">
        <div className="container">
          <div className="photos-grid">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="photo-item">
                <img src={photo.url} alt={photo.title} />
                <div className="photo-overlay">
                  <h3>{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
