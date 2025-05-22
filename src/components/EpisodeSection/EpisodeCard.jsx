import React from 'react';
import './EpisodeCard.css';

const EpisodeCard = ({ name, episode }) => {
  return (
    <div className="episode-card">
      <div className="episode-code">{episode}</div>
      <h3 className="episode-name">{name}</h3>
    </div>
  );
};

export default EpisodeCard;