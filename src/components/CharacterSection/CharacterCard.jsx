
import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

const CharacterCard = ({ id, name, image }) => {
  return (
    <Link to={`/characters/${id}`} className="character-card-link" style={{ textDecoration: 'none' }}>
      <div className="character-card">
        <div className="character-image-container">
          <img src={image} alt={name} className="character-image" />
        </div>
        <div className="character-info">
          <h3>{name}</h3>
        </div>

       
      <svg
  className="border-outline"
  viewBox="0 0 200 230"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <polygon
    points="0,0 200,0 200,184 160,230 0,230 0,0"
    fill="none"
    stroke="rgba(122, 229, 130, 0.7)"
    strokeWidth="5"
    strokeLinejoin="miter"
    strokeLinecap="butt"
  />
</svg>

      </div>
    </Link>
  );
};

export default CharacterCard;
