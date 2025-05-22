import React from 'react';
import './LocationCard.css';

const LocationCard = ({ name, code }) => {
  return (
    <div className="location-card">
      <div className="location-code">{code}</div>
      <h3 className="location-name">{name}</h3>
    </div>
  );
};

export default LocationCard;