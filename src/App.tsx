import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import './App.css';
import Portifolio from './components/Portifolio';
import Contatos from './components/Contatos';

function App() {
  useEffect(() => {
    document.title = "Portifolio";
  }, []);

  return (
    <div className="container">
      <Header/>
      <div className="main-content">
        <HeroSection/>
        <Sobre/>
        <Habilidades/>
        <Portifolio/>
        <Contatos/>
      </div>
    </div>
  );
}

export default App;
