import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import './Fondation.css';

const Fondation = () => {
  return (
    <div className="fondation-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Fondation KALEHAKA</h1>
          <p>Œuvrer pour un avenir meilleur</p>
        </div>
      </section>

      {/* Siège Social */}
      <section className="section siege-section">
        <div className="container">
          <div className="siege-card">
            <h2><FaMapMarkerAlt /> Siège Social</h2>
            <div className="siege-info">
              <p><strong>Adresse :</strong> Abidjan – Yopougon Académie, Immeuble Bamba</p>
              <p><strong>Pays :</strong> République de Côte d'Ivoire</p>
              <p><FaEnvelope /> <strong>Email :</strong> kalehakaf@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objet et Missions */}
      <section className="section missions-detail-section">
        <div className="container">
          <h2 className="section-title">Objet et Missions</h2>
          <div className="missions-grid">
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Préserver et faire rayonner le patrimoine culturel ivoirien, en particulier le Tohourou, à travers le FESTITOH CULTURE</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Promouvoir des valeurs humaines : pardon, humilité, solidarité, partage</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Lutter contre la pauvreté sous toutes ses formes</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Rendre l'éducation et les soins accessibles à tous</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Renforcer la place de la femme dans le tissu socio-économique</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Soutenir les ONG et structures partageant les mêmes objectifs</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Encourager les artistes et acteurs culturels à travers un appui technique, matériel et financier</p>
            </div>
            <div className="mission-detail-card">
              <FaCheckCircle className="check-icon" />
              <p>Mettre en œuvre tout moyen nécessaire pour atteindre ces objectifs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Actions */}
      <section className="section actions-overview-section">
        <div className="container">
          <h2 className="section-title">Nos Actions</h2>
          <div className="grid-2">
            <div className="action-overview-card">
              <div className="action-number">7e</div>
              <h3>FESTITOH CULTURE</h3>
              <p>Édition du festival culturel dédié à la promotion du Tohourou</p>
            </div>
            <div className="action-overview-card">
              <h3>Programmes sociaux</h3>
              <p>Aide aux communautés, soutien aux populations vulnérables</p>
            </div>
            <div className="action-overview-card">
              <h3>Actions éducatives</h3>
              <p>Sensibilisation, conférences, ateliers de formation</p>
            </div>
            <div className="action-overview-card">
              <h3>Activités culturelles</h3>
              <p>Promotion des artistes, préservation du patrimoine</p>
            </div>
            <div className="action-overview-card">
              <h3>Projets communautaires</h3>
              <p>Développement local, cohésion sociale</p>
            </div>
            <div className="action-overview-card">
              <h3>Gala de bienfaisance</h3>
              <p>Événements de collecte de fonds pour nos projets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Galerie */}
      <section className="section mini-gallery-section">
        <div className="container">
          <h2 className="section-title">Galerie Photos</h2>
          <div className="mini-gallery">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400" alt="Événement culturel" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=400" alt="Action sociale" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400" alt="Festival" />
            </div>
          </div>
          <div className="gallery-link">
            <a href="/galerie" className="btn btn-primary">Voir plus</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fondation;
