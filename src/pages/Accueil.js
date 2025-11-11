import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGraduationCap, FaHandsHelping, FaTheaterMasks } from 'react-icons/fa';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">Valoriser la culture, promouvoir l'éducation, soutenir les communautés</h1>
            <p className="hero-subtitle">
              La Fondation KALEHAKA œuvre à la préservation de la culture ivoirienne, 
              à l'amélioration des conditions de vie des populations et à la promotion de l'éducation.
            </p>
            <div className="hero-buttons">
              <Link to="/don" className="btn btn-primary">Faire un don</Link>
              <Link to="/festitoh" className="btn btn-outline">Participer au Festival</Link>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">À Propos de la Fondation</h2>
          <p className="section-subtitle">
            Guidée par les valeurs fortes du pardon, de l'humilité, de la solidarité et du don de soi, 
            la Fondation met en place des actions concrètes pour lutter contre la pauvreté, soutenir les 
            femmes actives et encourager les artistes traditionnels, notamment les paroliers du Tohourou.
          </p>
        </div>
      </section>

      {/* Missions Essentielles */}
      <section className="section missions-section">
        <div className="container">
          <h2 className="section-title">Nos Missions Essentielles</h2>
          <div className="grid-3">
            <div className="mission-card mission-culture">
              <div className="mission-icon">
                <FaTheaterMasks />
              </div>
              <h3>Culture</h3>
              <p>Préserver et promouvoir le patrimoine culturel ivoirien, notamment le Tohourou</p>
            </div>
            <div className="mission-card mission-sante">
              <div className="mission-icon">
                <FaHeart />
              </div>
              <h3>Santé</h3>
              <p>Rendre les soins de santé accessibles à tous et améliorer les conditions de vie</p>
            </div>
            <div className="mission-card mission-education">
              <div className="mission-icon">
                <FaGraduationCap />
              </div>
              <h3>Éducation</h3>
              <p>Promouvoir l'éducation et contribuer à la formation de la jeunesse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Activités */}
      <section className="section activities-section">
        <div className="container">
          <h2 className="section-title">Nos Activités</h2>
          <div className="activities-grid">
            <div className="activity-item">
              <FaHandsHelping className="activity-icon" />
              <h4>Conférences & débats</h4>
            </div>
            <div className="activity-item">
              <FaTheaterMasks className="activity-icon" />
              <h4>Sensibilisation sur le rôle du Tohourou</h4>
            </div>
            <div className="activity-item">
              <FaGraduationCap className="activity-icon" />
              <h4>Projets de développement</h4>
            </div>
            <div className="activity-item">
              <FaHeart className="activity-icon" />
              <h4>Festivals de musiques traditionnelles</h4>
            </div>
            <div className="activity-item">
              <FaHandsHelping className="activity-icon" />
              <h4>Gala de bienfaisance</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Rejoignez-nous dans notre mission</h2>
            <p>Ensemble, nous pouvons faire la différence dans la vie de milliers de personnes</p>
            <div className="cta-buttons">
              <Link to="/actions" className="btn btn-primary">Voir nos actions</Link>
              <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
