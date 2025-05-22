
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
      </div>
    </Link>
  );
};

export default CharacterCard;


