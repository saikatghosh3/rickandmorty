// import React from 'react';
// import './LocationSection.css';
// import CardCarousel from '../UI/CardCarousel/CardCarousel';
// import LocationCard from './LocationCard';

// // Dummy data for locations
// const locations = [
//   { id: 1, name: 'Earth (C-137)', code: '#1' },
//   { id: 2, name: 'Abadango', code: '#2' },
//   { id: 3, name: 'Citadel Of Ricks', code: '#3' },
//   { id: 4, name: 'Worldender\'s Lair', code: '#4' },
//   { id: 5, name: 'Anatomy Park', code: '#5' },
// ];

// const LocationSection = () => {
//   return (
//     <section className="location-section" id="locations">
//       <div className="section-header">
//         <h2>Locations</h2>
//         <a href="#" className="view-all-link">View All</a>
//       </div>
      
//       <CardCarousel>
//         {locations.map(location => (
//           <LocationCard 
//             key={location.id}
//             name={location.name}
//             code={location.code}
//           />
//         ))}
//       </CardCarousel>
//     </section>
//   );
// };

// export default LocationSection;


import React, { useEffect, useState } from 'react';
import './LocationSection.css';
import CardCarousel from '../UI/CardCarousel/CardCarousel';
import LocationCard from './LocationCard';

const LocationSection = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/location');
        const data = await response.json();
        // Set location data with ID and name, use `#` + id as code
        const formattedLocations = data.results.map(loc => ({
          id: loc.id,
          name: loc.name,
          code: `#${loc.id}`
        }));
        setLocations(formattedLocations);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <section className="location-section" id="locations">
      <div className="section-header">
        <h2>Locations</h2>
        
      </div>

      {loading ? (
        <p>Loading locations...</p>
      ) : (
        <CardCarousel>
          {locations.map(location => (
            <LocationCard 
              key={location.id}
              name={location.name}
              code={location.code}
            />
          ))}
        </CardCarousel>
      )}
    </section>
  );
};

export default LocationSection;
