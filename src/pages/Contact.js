import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header contact-header">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Nous sommes là pour vous répondre</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Informations de contact */}
            <div className="contact-info-side">
              <h2>Nos Coordonnées</h2>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Adresse</h3>
                  <p>Yopougon Académie, Immeuble Bamba</p>
                  <p>Abidjan, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>kalehakaf@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h3>Téléphone</h3>
                  <p>+225 XX XX XX XX XX</p>
                  <p>+225 XX XX XX XX XX</p>
                </div>
              </div>

              <div className="social-section">
                <h3>Suivez-nous</h3>
                <div className="social-links-contact">
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
            </div>

            {/* Formulaire de contact */}
            <div className="contact-form-side">
              <h2>Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Objet de votre message"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Nous Trouver</h2>
          <div className="map-container">
            <iframe
              title="Localisation Fondation KALEHAKA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4086826847!2d-4.0511!3d5.3599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnMzUuNiJOIDTCsDAzJzA0LjAiVw!5e0!3m2!1sfr!2sci!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="section horaires-section">
        <div className="container">
          <div className="horaires-box">
            <h2>Horaires d'ouverture</h2>
            <div className="horaires-grid">
              <div className="horaire-item">
                <span className="jour">Lundi - Vendredi</span>
                <span className="heure">9h00 - 17h00</span>
              </div>
              <div className="horaire-item">
                <span className="jour">Samedi</span>
                <span className="heure">9h00 - 13h00</span>
              </div>
              <div className="horaire-item">
                <span className="jour">Dimanche</span>
                <span className="heure">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
