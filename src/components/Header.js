import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/Logo.jpg" alt="Fondation KALEHAKA" className="logo-img" />
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>
              ACCUEIL
            </Link>
            <Link to="/fondation" className={isActive('/fondation')} onClick={closeMenu}>
              FONDATION KALEHAKA
            </Link>
            <Link to="/festitoh" className={isActive('/festitoh')} onClick={closeMenu}>
              FESTITOH CULTURE
            </Link>
            <Link to="/actions" className={isActive('/actions')} onClick={closeMenu}>
              NOS ACTIONS
            </Link>
            <Link to="/galerie" className={isActive('/galerie')} onClick={closeMenu}>
              GALERIE
            </Link>
            <Link to="/don" className={`${isActive('/don')} btn-don`} onClick={closeMenu}>
              FAIRE UN DON
            </Link>
            <Link to="/rendez-vous" className={isActive('/rendez-vous')} onClick={closeMenu}>
              PRENDRE RENDEZ-VOUS
            </Link>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
