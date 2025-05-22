

import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import './CharactersDetails.css';
import { FaHeart, FaMars, FaGlobe, FaUserAlt } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { MdFormatListBulleted } from 'react-icons/md';
import Logo from '../../assets/images/logo.png';
import backgroundImage  from '../../assets/images/background.png';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data);
        const episodeUrls = data.episode.slice(0, 5);
        Promise.all(episodeUrls.map(url => fetch(url).then(res => res.json())))
          .then(episodesData => setEpisodes(episodesData));
      });
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="character-detail-page">
          <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="logo-wrapper">
        <Link to="/">
          <img src={Logo} alt="Home" style={{ width: '200px', cursor: 'pointer' }} />
        </Link>
      </div>
      <div className="character-detail-container">

        {/* left section  */}
        <div className="left-section">
          <h2 className="character-name">{character.name}</h2>
          <div className="character-img-box">
            <img src={character.image} alt={character.name} />
            
          </div>
        </div>
        <div className="vertical-line"></div>

         {/* right section detail */}
        <div className="right-section">
          <div className="card-row">
            <div className="info-card"><FaHeart className='my-icon' /> <span>Status: </span><span> {character.status}</span></div>
            <div className="info-card"><GiChemicalDrop className='my-icon'  /> <span>Species: </span><span>{character.species}</span></div>
            <div className="info-card"><FaMars className='my-icon'  /> <span>Gender: </span> <span>{character.gender}</span></div>
          </div>
          <div className='info-box1'> 
          <div className="info-box">
            <FaGlobe className='my-icon'  />
            <span>Origin: </span><span> {character.origin.name}</span>
            </div>
            <HiOutlineExternalLink className='my-icon'  />
          </div>
             <div className="info-box1">
          <div className="info-box">
            <FaUserAlt className='my-icon'  />
            <span>Last Known Location : </span> <span>{character.location.name}</span>
            </div>
            <HiOutlineExternalLink className='my-icon'  />
          </div>

          <div className="episode-box">
            <div className="episode-title">
              <MdFormatListBulleted className='my-icon'  />
              <span>Episode(s)</span>
            </div>
            <ul>
              {episodes.map(ep => (
                <li key={ep.id}>{ep.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;








