

import React, { useEffect, useState } from 'react';
import './CharacterSection.css';
import CardCarousel from '../UI/CardCarousel/CardCarousel';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterSection = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="character-section" id="characters">
      <div className="section-header">
        <h2>Meet The Cast</h2>
        <Link to="/characters" className="view-all-link">View All</Link>
      </div>

      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <CardCarousel>
          {characters.slice(0, 10).map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </CardCarousel>
      )}
    </section>
  );
};

export default CharacterSection;
