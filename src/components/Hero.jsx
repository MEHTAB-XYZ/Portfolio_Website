import React from 'react';
import './Hero.css';
import myImage from '../assets/images/profile-picture.png';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Mehtab Arif.</h1>
          <h2 className="role">I build things for the web & AI.</h2>
          <p className="description">
            I'm a Computer Science undergrad based in Trivandrum, Kerala.
            I specialize in building exceptional digital experiences and researching applied AI.
            Currently, I'm focused on solving real-world problems through tech.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">Check out my work</a>
            <a href="#contact" className="btn">Contact me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-section">
            <img src={myImage} alt="Mehtab Arif" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
