
import React from 'react';
import './Hero.module.css';
import heroImage from '../../images/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Seguros" className="hero-image" />
      <div className="hero-text">
        <h1>Somos Productores de Seguros con más de 40 años de trayectoria.</h1>
        <h4>Trabajamos con las principales aseguradoras para garantizarle la mejor cobertura y precio.</h4>
      </div>
    </section>
  );
};

export default Hero;
