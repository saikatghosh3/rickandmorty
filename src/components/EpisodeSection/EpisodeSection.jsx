

import React, { useEffect, useState } from 'react';
import './EpisodeSection.css';
import CardCarousel from '../UI/CardCarousel/CardCarousel';
import EpisodeCard from './EpisodeCard';

const EpisodeSection = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();
        setEpisodes(data.results); 
      } catch (error) {
        console.error('Failed to fetch episodes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <section className="episode-section" id="episodes">
      <div className="section-header">
        <h2>Episodes</h2>
       
      </div>

      {loading ? (
        <p>Loading episodes...</p>
      ) : (
        <CardCarousel>
          {episodes.map(episode => (
            <EpisodeCard 
              key={episode.id}
              name={episode.name}
              episode={episode.episode}
            />
          ))}
        </CardCarousel>
      )}
    </section>
  );
};

export default EpisodeSection;
