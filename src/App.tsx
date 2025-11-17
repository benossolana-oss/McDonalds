import React, { useState, useEffect } from 'react';
import { MainTitle } from './components/MainTitle';
import { GlitchBackground } from './components/GlitchBackground';
import { FrogOfTheDay } from './components/FrogOfTheDay';
import { FeinFrogSpeaks } from './components/FeinFrogSpeaks';
import { Mindleaks } from './components/Mindleaks';
import { NavButtons } from './components/NavButtons';
import { SoundEffects } from './components/SoundEffects';
import { FeinModeToggle } from './components/FeinModeToggle';
import { FloatingImageSquares } from './components/FloatingImageSquares';
import { FakeTaskbar } from './components/FakeTaskbar';
import { CursorTrail } from './components/CursorTrail';
import { useAudio } from './hooks/useAudio';
import './styles/global.css';

function App() {
  const [feinMode, setFeinMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const { isPlaying, toggleAudio } = useAudio();

  useEffect(() => {
    document.title = "🍟 MCDONALDS COIN 🍟 | $MCDC SCHIZO CHAOS ZONE";
    
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=32";
    }
  }, []);

  const toggleFeinMode = () => {
    setFeinMode(!feinMode);
    document.body.classList.toggle('fein-mode-active');
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className={`app-container ${feinMode ? 'fein-mode' : ''}`}>
      <GlitchBackground />
      <FloatingImageSquares />
      <CursorTrail />
      
      <div className="content-container">
        <MainTitle />
        
        <div className="control-panel">
          <FeinModeToggle feinMode={feinMode} toggleFeinMode={toggleFeinMode} />
          <button 
            className="audio-toggle-btn"
            onClick={toggleAudio}
          >
            {isPlaying ? '🔊 MCAUDIO BLESSED' : '🔇 AWAKEN MCSOUNDS'}
          </button>
        </div>
        
        <NavButtons currentPage={currentPage} navigateTo={navigateTo} />
        
        <div className="home-content">
          <FrogOfTheDay />
          <FeinFrogSpeaks />
          <Mindleaks />
        </div>
      </div>
      
      <SoundEffects />
      <FakeTaskbar />
      
      <footer className="footer">
        <p>MCDONALDS COIN EXISTS BEYOND COPYRIGHT © ∞</p>
        <p>𝕐𝕆𝕌ℝ 𝔹ℝ𝔸𝕀ℕ 𝕎𝕀𝕃𝕃 𝔹𝔼 𝔽ℝ𝕀𝔼𝔻 ⚠️</p>
      </footer>
    </div>
  );
}

export default App;