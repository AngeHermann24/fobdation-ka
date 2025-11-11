import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/Logo.jpg" alt="Fondation KALEHAKA" className="footer-logo" />
            <h3>FONDATION KALEHAKA</h3>
            <p>Valoriser la culture, promouvoir l'éducation, soutenir les communautés</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/fondation">Fondation</Link></li>
              <li><Link to="/festitoh">Festitoh Culture</Link></li>
              <li><Link to="/actions">Nos Actions</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Nous Soutenir</h4>
            <ul>
              <li><Link to="/don">Faire un don</Link></li>
              <li><Link to="/rendez-vous">Prendre rendez-vous</Link></li>
              <li><Link to="/contact">Nous contacter</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Yopougon Académie, Immeuble Bamba<br />Abidjan, Côte d'Ivoire</p>
              <p><FaEnvelope /> kalehakaf@gmail.com</p>
              <p><FaPhone /> +225 XX XX XX XX XX</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Fondation KALEHAKA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
