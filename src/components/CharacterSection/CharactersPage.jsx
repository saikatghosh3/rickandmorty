
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import Logo from '../../assets/images/logo.png';
import backgroundImage from '../../assets/images/background.png';
import './CharactersPage.css';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div>
    
      <div
        className="character-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="logo-wrapper">
        <Link to="/">
          <img src={Logo} alt="Home" style={{ width: '250px', cursor: 'pointer' }} />
        </Link>
      </div>

      <div className="characters-page">
        <h2 className="page-title">The Cast</h2>
        <div className="characters-grid">
          {characters.map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
