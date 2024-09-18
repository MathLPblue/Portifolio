
import React from 'react';
import '../css/HeroSection.css';
import wallpaper from '../assets/wallpaper.jpg'; 

const HeroSection: React.FC = () => {
  return (
    <div>
      <section id="Home">
        <div className='hero-section'>
          <div className="overlay bg-dark"/>
          
          <div 
            className="background-image parallax"
            style={{ backgroundImage: `url(${wallpaper})` }} 
          />
          <div className="content-container section fullscreen d-flex">
            <div className="container align-self-center">
              <div className="row">
                <div className="col text-center">
                  <div className="dynamic-text">
                    <h1>Desenvolvedor de Software</h1>
                  </div>
                  <p className="welcome-text">Bem vindo</p>
                  <a href="#contato" className="btn-contato">Contato</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
