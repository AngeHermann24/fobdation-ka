import React, { useState } from 'react';
import { FaMobileAlt, FaCreditCard, FaBox, FaProjectDiagram, FaQrcode } from 'react-icons/fa';
import './FaireUnDon.css';

const FaireUnDon = () => {
  const [selectedMethod, setSelectedMethod] = useState('mobile');
  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setDonationForm({
      ...donationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre générosité ! Nous vous contacterons bientôt.');
  };

  return (
    <div className="don-page">
      <section className="page-header don-header">
        <div className="container">
          <h1>Faire un Don</h1>
          <p>Votre générosité change des vies</p>
        </div>
      </section>

      <section className="section intro-don-section">
        <div className="container">
          <div className="intro-content">
            <h2>Pourquoi faire un don ?</h2>
            <p>
              Votre soutien nous permet de continuer nos actions en faveur de la culture, 
              de l'éducation et du développement des communautés. Chaque contribution, 
              quelle que soit sa taille, fait une réelle différence.
            </p>
          </div>
        </div>
      </section>

      <section className="section methods-section">
        <div className="container">
          <h2 className="section-title">Choisissez votre méthode de don</h2>
          
          <div className="donation-methods">
            <button 
              className={`method-btn ${selectedMethod === 'mobile' ? 'active' : ''}`}
              onClick={() => setSelectedMethod('mobile')}
            >
              <FaMobileAlt />
              <span>Mobile Money</span>
            </button>
            <button 
              className={`method-btn ${selectedMethod === 'card' ? 'active' : ''}`}
              onClick={() => setSelectedMethod('card')}
            >
              <FaCreditCard />
              <span>Carte Bancaire</span>
            </button>
            <button 
              className={`method-btn ${selectedMethod === 'material' ? 'active' : ''}`}
              onClick={() => setSelectedMethod('material')}
            >
              <FaBox />
              <span>Don Matériel</span>
            </button>
            <button 
              className={`method-btn ${selectedMethod === 'project' ? 'active' : ''}`}
              onClick={() => setSelectedMethod('project')}
            >
              <FaProjectDiagram />
              <span>Projet Spécifique</span>
            </button>
          </div>

          <div className="method-content">
            {selectedMethod === 'mobile' && (
              <div className="method-details">
                <h3><FaMobileAlt /> Mobile Money</h3>
                <div className="payment-info">
                  <div className="qr-section">
                    <FaQrcode className="qr-icon" />
                    <p>Scannez le QR Code</p>
                  </div>
                  <div className="payment-numbers">
                    <p><strong>Orange Money:</strong> +225 XX XX XX XX XX</p>
                    <p><strong>MTN Money:</strong> +225 XX XX XX XX XX</p>
                    <p><strong>Moov Money:</strong> +225 XX XX XX XX XX</p>
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === 'card' && (
              <div className="method-details">
                <h3><FaCreditCard /> Carte Bancaire</h3>
                <div className="bank-info">
                  <p><strong>Nom du compte:</strong> Fondation KALEHAKA</p>
                  <p><strong>Banque:</strong> [Nom de la banque]</p>
                  <p><strong>IBAN:</strong> CI XX XXXX XXXX XXXX XXXX XXXX</p>
                  <p><strong>SWIFT:</strong> XXXXXXXX</p>
                </div>
              </div>
            )}

            {selectedMethod === 'material' && (
              <div className="method-details">
                <h3><FaBox /> Don Matériel</h3>
                <p>Vous souhaitez faire un don matériel ? Contactez-nous pour organiser la collecte.</p>
                <ul className="material-list">
                  <li>Fournitures scolaires</li>
                  <li>Vêtements</li>
                  <li>Matériel médical</li>
                  <li>Équipements culturels</li>
                  <li>Denrées alimentaires non périssables</li>
                </ul>
              </div>
            )}

            {selectedMethod === 'project' && (
              <div className="method-details">
                <h3><FaProjectDiagram /> Projet Spécifique</h3>
                <div className="projects-list">
                  <div className="project-item">
                    <h4>Festitoh Culture 2024</h4>
                    <p>Soutenir l'organisation de la 7e édition du festival</p>
                  </div>
                  <div className="project-item">
                    <h4>Programme Éducation</h4>
                    <p>Financer la scolarité d'enfants défavorisés</p>
                  </div>
                  <div className="project-item">
                    <h4>Actions Sociales</h4>
                    <p>Contribuer aux programmes d'aide aux communautés</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section form-section">
        <div className="container">
          <div className="donation-form-container">
            <h2>Formulaire de Don</h2>
            <form onSubmit={handleSubmit} className="donation-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={donationForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={donationForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={donationForm.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount">Montant (FCFA) *</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={donationForm.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={donationForm.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaireUnDon;
