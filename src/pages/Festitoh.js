import React from 'react';
import { FaTrophy, FaBook, FaMusic, FaDrum, FaHandshake, FaUtensils } from 'react-icons/fa';
import './Festitoh.css';

const Festitoh = () => {
  return (
    <div className="festitoh-page">
      {/* Header */}
      <section className="page-header festitoh-header">
        <div className="container">
          <div className="festitoh-logo-container">
            <img src="/Fest.jpg" alt="Festitoh Culture Logo" className="festitoh-logo" />
          </div>
          <h1>FESTITOH CULTURE</h1>
          <p>Festival culturel dédié à la promotion du Tohourou</p>
        </div>
      </section>

      {/* Présentation */}
      <section className="section presentation-section">
        <div className="container">
          <h2 className="section-title">Présentation</h2>
          <div className="presentation-content">
            <p className="lead-text">
              Festival culturel créé par <strong>Mme Gisèle GBOBOUO</strong>, dédié à la promotion du 
              <strong> Tohourou</strong> : un art oratoire ancestral du peuple bété.
            </p>
          </div>
        </div>
      </section>

      {/* Historique */}
      <section className="section historique-section">
        <div className="container">
          <h2 className="section-title">Historique du Projet</h2>
          <div className="historique-content">
            <p>
              <strong>FESTITOH CULTURE</strong> est un festival itinérant qui valorise l'art du Tohourou 
              – un art oratoire bété ancestral transmis de génération en génération. Ce festival permet 
              la préservation d'un patrimoine culturel en voie de disparition, tout en créant un espace 
              d'échanges, d'entrepreneuriat et de cohésion sociale.
            </p>
          </div>
        </div>
      </section>

      {/* Origines du Tohourou */}
      <section className="section origines-section">
        <div className="container">
          <h2 className="section-title">Origines du Tohourou</h2>
          <div className="origines-grid">
            <div className="origine-card">
              <h3>TOH</h3>
              <p>Guerre</p>
            </div>
            <div className="origine-card">
              <h3>HOUROU</h3>
              <p>Parole</p>
            </div>
          </div>
          <div className="origines-details">
            <ul>
              <li>Praises, éloges, motivation du guerrier</li>
              <li>Récits, éloges des défunts</li>
              <li>Porté par un parolier</li>
              <li>Héritage des Gnamboua</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contexte - 7e édition */}
      <section className="section contexte-section">
        <div className="container">
          <h2 className="section-title">7e Édition du Festival</h2>
          <p className="section-subtitle">Un festival itinérant qui alterne entre différentes villes</p>
          
          <div className="activites-festival">
            <div className="activite-festival-card">
              <FaTrophy className="activite-icon" />
              <h3>Awards du Tohourou</h3>
              <p>Récompenser les meilleurs paroliers</p>
            </div>
            <div className="activite-festival-card">
              <FaBook className="activite-icon" />
              <h3>Nuit du conte</h3>
              <p>Transmission orale des traditions</p>
            </div>
            <div className="activite-festival-card">
              <FaMusic className="activite-icon" />
              <h3>Nuit tradi-moderne</h3>
              <p>Fusion des styles musicaux</p>
            </div>
            <div className="activite-festival-card">
              <FaDrum className="activite-icon" />
              <h3>Journée Tohourou</h3>
              <p>Célébration de l'art oratoire</p>
            </div>
            <div className="activite-festival-card">
              <FaHandshake className="activite-icon" />
              <h3>Journée de cohésion</h3>
              <p>Renforcer les liens communautaires</p>
            </div>
            <div className="activite-festival-card">
              <FaUtensils className="activite-icon" />
              <h3>Gastronomie</h3>
              <p>Découverte culinaire locale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="section objectifs-section">
        <div className="container">
          <h2 className="section-title">Objectifs du Festival</h2>
          
          <div className="objectif-principal">
            <h3>Objectif Général</h3>
            <p>Sauver et promouvoir un patrimoine culturel ivoirien unique : le Tohourou</p>
          </div>

          <div className="objectifs-specifiques">
            <h3>Objectifs Spécifiques</h3>
            <div className="grid-2">
              <div className="objectif-card">
                <div className="objectif-number">01</div>
                <p>Faire connaître la culture et les traditions du peuple bété</p>
              </div>
              <div className="objectif-card">
                <div className="objectif-number">02</div>
                <p>Renforcer les liens entre les communautés</p>
              </div>
              <div className="objectif-card">
                <div className="objectif-number">03</div>
                <p>Promouvoir les potentialités artistiques, gastronomiques et culturelles</p>
              </div>
              <div className="objectif-card">
                <div className="objectif-number">04</div>
                <p>Contribuer à l'éducation de la jeunesse</p>
              </div>
              <div className="objectif-card">
                <div className="objectif-number">05</div>
                <p>Encourager l'entrepreneuriat</p>
              </div>
              <div className="objectif-card">
                <div className="objectif-number">06</div>
                <p>Promouvoir la paix et la cohésion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biographie Promotrice */}
      <section className="section biographie-section">
        <div className="container">
          <h2 className="section-title">La Promotrice</h2>
          <div className="biographie-content">
            <div className="bio-header">
              <h3>Gisèle GBOBOUO</h3>
              <p className="bio-subtitle">Artiste, éducatrice, promotrice culturelle</p>
            </div>
            <div className="bio-text">
              <p>
                Née le 1er janvier 1979 à Yamoussoukro, Gisèle Gbobouo est une figure majeure de la 
                culture ivoirienne et une ambassadrice engagée de l'art oratoire africain. Entre 
                traditions ancestrales et modernité, elle incarne la transmission, la pédagogie et 
                l'innovation culturelle.
              </p>
            </div>
            <div className="bio-highlights">
              <div className="bio-highlight-item">
                <h4>Formation artistique</h4>
                <p>Parcours riche en arts et culture traditionnelle</p>
              </div>
              <div className="bio-highlight-item">
                <h4>Engagement humanitaire</h4>
                <p>Dévouement aux causes sociales et culturelles</p>
              </div>
              <div className="bio-highlight-item">
                <h4>Création de la Fondation</h4>
                <p>Fondatrice de la Fondation Kalehaka</p>
              </div>
              <div className="bio-highlight-item">
                <h4>Prix et distinctions</h4>
                <p>Reconnue pour son œuvre culturelle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festitoh;
