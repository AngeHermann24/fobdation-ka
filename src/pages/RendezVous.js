import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';
import './RendezVous.css';

const RendezVous = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    date: '',
    time: '',
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
    alert('Votre demande de rendez-vous a été envoyée avec succès ! Nous vous contacterons bientôt.');
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="rdv-page">
      {/* Header */}
      <section className="page-header rdv-header">
        <div className="container">
          <h1>Prendre Rendez-vous</h1>
          <p>Nous sommes à votre écoute</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section intro-rdv-section">
        <div className="container">
          <div className="intro-rdv-content">
            <h2>Planifiez une rencontre avec nous</h2>
            <p>
              Que vous souhaitiez discuter d'un partenariat, proposer un projet, ou simplement 
              en savoir plus sur nos actions, nous serions ravis de vous rencontrer. 
              Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Motifs de rendez-vous */}
      <section className="section motifs-section">
        <div className="container">
          <h2 className="section-title">Motifs de rendez-vous</h2>
          <div className="motifs-grid">
            <div className="motif-card">
              <div className="motif-icon">🤝</div>
              <h3>Partenariat</h3>
              <p>Discuter d'opportunités de collaboration</p>
            </div>
            <div className="motif-card">
              <div className="motif-icon">💡</div>
              <h3>Projet</h3>
              <p>Présenter ou soutenir un projet</p>
            </div>
            <div className="motif-card">
              <div className="motif-icon">🎭</div>
              <h3>Culture</h3>
              <p>Participer au Festitoh Culture</p>
            </div>
            <div className="motif-card">
              <div className="motif-icon">❤️</div>
              <h3>Bénévolat</h3>
              <p>Rejoindre notre équipe de bénévoles</p>
            </div>
            <div className="motif-card">
              <div className="motif-icon">📚</div>
              <h3>Information</h3>
              <p>En savoir plus sur nos actions</p>
            </div>
            <div className="motif-card">
              <div className="motif-icon">💼</div>
              <h3>Autre</h3>
              <p>Toute autre demande</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="section form-rdv-section">
        <div className="container">
          <div className="rdv-form-container">
            <h2>Formulaire de rendez-vous</h2>
            <form onSubmit={handleSubmit} className="rdv-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser /> Nom complet *
                  </label>
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
                  <label htmlFor="email">
                    <FaEnvelope /> Email *
                  </label>
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
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone /> Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+225 XX XX XX XX XX"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FaCommentDots /> Objet du rendez-vous *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Sélectionnez un motif</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="projet">Projet</option>
                    <option value="culture">Culture / Festitoh</option>
                    <option value="benevolat">Bénévolat</option>
                    <option value="information">Information</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">
                    <FaCalendarAlt /> Date souhaitée *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">
                    <FaClock /> Heure souhaitée *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaCommentDots /> Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Décrivez brièvement l'objet de votre rendez-vous..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Info supplémentaire */}
      <section className="section info-rdv-section">
        <div className="container">
          <div className="info-box">
            <h3>Informations importantes</h3>
            <ul>
              <li>Nous vous contacterons dans les 48 heures pour confirmer votre rendez-vous</li>
              <li>Les rendez-vous sont disponibles du lundi au vendredi de 9h à 17h</li>
              <li>Pour toute urgence, contactez-nous directement par téléphone</li>
              <li>Veuillez arriver 10 minutes avant l'heure prévue</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RendezVous;
