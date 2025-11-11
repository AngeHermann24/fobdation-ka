import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGraduationCap, FaTheaterMasks, FaHandsHelping, FaBullhorn, FaUsers } from 'react-icons/fa';
import './NosActions.css';

const NosActions = () => {
  return (
    <div className="actions-page">
      {/* Header */}
      <section className="page-header actions-header">
        <div className="container">
          <h1>Nos Actions</h1>
          <p>Des initiatives concrètes pour un impact durable</p>
        </div>
      </section>

      {/* Actions Sociales */}
      <section className="section social-section">
        <div className="container">
          <div className="action-category">
            <div className="category-header">
              <FaHeart className="category-icon" />
              <h2>Actions Sociales</h2>
            </div>
            <div className="grid-2">
              <div className="action-card">
                <FaHandsHelping className="action-icon" />
                <h3>Aide aux communautés</h3>
                <p>
                  Soutien direct aux populations vulnérables à travers des programmes d'assistance 
                  alimentaire, vestimentaire et matérielle.
                </p>
              </div>
              <div className="action-card">
                <FaHeart className="action-icon" />
                <h3>Actions humanitaires</h3>
                <p>
                  Interventions d'urgence et programmes de soutien aux personnes en situation de 
                  précarité et aux familles dans le besoin.
                </p>
              </div>
              <div className="action-card">
                <FaUsers className="action-icon" />
                <h3>Noël d'Afrique</h3>
                <p>
                  Événement annuel de partage et de solidarité offrant des cadeaux et des repas 
                  aux enfants et familles défavorisées.
                </p>
              </div>
              <div className="action-card">
                <FaHandsHelping className="action-icon" />
                <h3>Aide aux ONG</h3>
                <p>
                  Collaboration et soutien aux organisations non gouvernementales partageant les 
                  mêmes valeurs et objectifs humanitaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Éducatives */}
      <section className="section education-section">
        <div className="container">
          <div className="action-category">
            <div className="category-header">
              <FaGraduationCap className="category-icon" />
              <h2>Actions Éducatives</h2>
            </div>
            <div className="grid-3">
              <div className="action-card">
                <FaBullhorn className="action-icon" />
                <h3>Sensibilisation</h3>
                <p>
                  Campagnes de sensibilisation sur des thématiques sociales, culturelles et 
                  sanitaires auprès des communautés.
                </p>
              </div>
              <div className="action-card">
                <FaUsers className="action-icon" />
                <h3>Conférences</h3>
                <p>
                  Organisation de conférences et débats sur des sujets d'intérêt général : 
                  éducation, culture, développement.
                </p>
              </div>
              <div className="action-card">
                <FaGraduationCap className="action-icon" />
                <h3>Ateliers</h3>
                <p>
                  Ateliers de formation et de renforcement des capacités pour les jeunes et 
                  les femmes entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Culturelles */}
      <section className="section culture-section">
        <div className="container">
          <div className="action-category">
            <div className="category-header">
              <FaTheaterMasks className="category-icon" />
              <h2>Actions Culturelles</h2>
            </div>
            <div className="grid-3">
              <div className="action-card">
                <FaTheaterMasks className="action-icon" />
                <h3>Promotion du Tohourou</h3>
                <p>
                  Valorisation et préservation de l'art oratoire bété à travers le festival 
                  FESTITOH CULTURE et diverses manifestations.
                </p>
              </div>
              <div className="action-card">
                <FaHeart className="action-icon" />
                <h3>Soutien aux artistes</h3>
                <p>
                  Accompagnement technique, matériel et financier des artistes traditionnels 
                  et paroliers du Tohourou.
                </p>
              </div>
              <div className="action-card">
                <FaUsers className="action-icon" />
                <h3>Organisation de festivals</h3>
                <p>
                  Mise en place d'événements culturels itinérants pour promouvoir la richesse 
                  du patrimoine ivoirien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">Notre Impact</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-number">7</div>
              <div className="stat-label">Éditions du Festival</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Bénéficiaires directs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Artistes soutenus</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-actions-section">
        <div className="container">
          <div className="cta-content">
            <h2>Participez à nos actions</h2>
            <p>Votre soutien peut changer des vies. Rejoignez-nous dans notre mission.</p>
            <div className="cta-buttons">
              <Link to="/don" className="btn btn-primary">Faire un don</Link>
              <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosActions;
