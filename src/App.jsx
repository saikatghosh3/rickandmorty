
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';

import HeroSection from './components/HeroSection/HeroSection';
import CharacterSection from './components/CharacterSection/CharacterSection';
import EpisodeSection from './components/EpisodeSection/EpisodeSection';
import LocationSection from './components/LocationSection/LocationSection';
import CharactersPage from './components/CharacterSection/CharactersPage';

import CharacterDetails from './components/CharacterSection/CharactersDetails';

function App() {
  return (
    <Router>
      <div className="app">
    
        <main>
          <Routes>
          
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <MainContent>
                  <CharacterSection />
                  <EpisodeSection />
                  <LocationSection />
                  </MainContent>
                </>
              }
            />

           
            <Route path="/characters" element={<CharactersPage />} />

       
            <Route path="/characters/:id" element={<CharacterDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
