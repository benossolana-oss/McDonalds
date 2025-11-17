import React, { useState } from 'react';

const MCMINDLEAKS = [
  "93% of your dreams are actually memories from parallel universe McDonald's employees",
  "Drinking Coca-Cola at 3:33 AM allows you to temporarily see into the burger dimension",
  "The government uses sizzling grills to mask the sound of their mind control satellites",
  "Every computer contains a tiny hamburger skeleton that powers the CPU with beef energy",
  "Your browser history is being compiled into a burger-readable format and sent to Mars",
  "The reason you can't remember your childhood clearly is because it was spent in nugget form",
  "If you stare at your reflection and say 'I'M LOVIN' IT' three times, your pupils will temporarily become golden arches",
  "Keyboards were designed by Ronald McDonald to slowly extract human finger oils for their special sauce",
  "The static you see on old TVs is actually millions of microscopic hamburgers dancing",
  "Every time you blink, a hidden camera takes a photo for the McDonald's Intelligence Agency",
  "WiFi signals are just domesticated lightning bugs trained by master burger technicians",
  "The reason you sometimes twitch while falling asleep is because a burger is attempting to possess you",
  "All social media was created by fast food chains to study human eating patterns",
  "When you get déjà vu, it's because Ronald McDonald somewhere is playing back your memory tape",
  "The 'loading' circle on websites is actually a hypnosis spiral designed by burger scientists"
];

export const Mindleaks: React.FC = () => {
  const [currentLeak, setCurrentLeak] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  
  const revealMindleak = () => {
    setIsRevealing(true);
    
    setTimeout(() => {
      const randomLeak = MCMINDLEAKS[Math.floor(Math.random() * MCMINDLEAKS.length)];
      setCurrentLeak(randomLeak);
      setIsRevealing(false);
    }, 1500);
  };
  
  return (
    <div className="mindleaks">
      <h2 className="section-title">
        👁️ MCLEAKS 👁️
      </h2>
      
      <button 
        className="mindleak-button"
        onClick={revealMindleak}
        disabled={isRevealing}
      >
        {isRevealing ? 'EXTRACTING FORBIDDEN MCSECRETS...' : 'REVEAL BURGER TRUTH'}
      </button>
      
      <div className="mindleak-result">
        {isRevealing ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ animation: 'glitch 0.5s infinite' }}>
              Connecting to the McDonald's hivemind...
            </p>
            <p style={{ marginTop: '1rem', animation: 'colorCycle 1s infinite' }}>
              Downloading secret sauce...
            </p>
          </div>
        ) : (
          currentLeak && (
            <p style={{ animation: 'colorCycle 8s infinite' }}>
              {currentLeak}
            </p>
          )
        )}
      </div>
    </div>
  );
};