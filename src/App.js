import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Fondation from './pages/Fondation';
import Festitoh from './pages/Festitoh';
import NosActions from './pages/NosActions';
import Galerie from './pages/Galerie';
import FaireUnDon from './pages/FaireUnDon';
import RendezVous from './pages/RendezVous';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/fondation" element={<Fondation />} />
            <Route path="/festitoh" element={<Festitoh />} />
            <Route path="/actions" element={<NosActions />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/don" element={<FaireUnDon />} />
            <Route path="/rendez-vous" element={<RendezVous />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
