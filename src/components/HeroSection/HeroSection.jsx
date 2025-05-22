import React from 'react';
import './HeroSection.css';
import backgroundImage from '../../assets/images/background.png';
import bubble from '../../assets/images/bubble.png';
import portal from '../../assets/images/portal.png';
import logo from '../../assets/images/logo.png';
import Button from '../UI/Button/Button';

const HeroSection = () => {
  return (
    <section className="hero">
    
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo" />
        
         <div className="title">
        <h2 className="hero-title">
          <img src={bubble} alt="Bubble" className="hero-bubble" />
          <span className="hero-title-first">
            THE
            <img src={portal} alt="Portal" className="hero-portal" />
          </span>
          <span className="hero-title-highlight">RICK</span></h2 >
          </div>
          <br />
          <h2 className="hero-title">
          <span className="hero-title-highlight morty">MORTY</span>
          <span className="hero-title-last">WIKI</span>
        </h2>

        <div className="hero-bottom">
         
          <Button
            className="hero-button"
            icon="play"
            onClick={() =>
              window.open('https://www.youtube.com/embed/KQ9Cgdsa9tc?autoplay=1', '_blank')
            }
          >
            Watch Now
          </Button>

           <p className="hero-description">
            Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
