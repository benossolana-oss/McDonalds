import React, { useState, useEffect } from 'react';

interface RandomFrogsProps {
  feinMode: boolean;
}

// Array of bizarre frog messages
const FROG_MESSAGES = [
  "REALITY IS MELTED CHEESE",
  "LICK THE SKY FOR COIN",
  "YOUR BROWSER HISTORY TASTES LIKE VICTORY",
  "BLINK TWICE TO DOWNLOAD FROG CONSCIOUSNESS",
  "ERROR 404: SANITY NOT FOUND",
  "HAVE YOU CHECKED YOUR REFLECTION LATELY?",
  "THE MATRIX HAS FROGS, NEO",
  "CLICK HERE TO INSTALL MORE RAM (THIS IS A LIE)",
  "YOUR WEBCAM SEES YOUR SOUL",
  "ROTATE YOUR EYES 90° FOR HIDDEN MENU"
];

export const RandomFrogs: React.FC<RandomFrogsProps> = ({ feinMode }) => {
  const [frogs, setFrogs] = useState<Array<{id: number, x: number, y: number, message: string}>>([]);
  
  // Create a new random frog
  const createRandomFrog = () => {
    const id = Date.now();
    const x = Math.random() * 80 + 5; // 5% to 85% of viewport width
    const y = Math.random() * 80 + 5; // 5% to 85% of viewport height
    const message = FROG_MESSAGES[Math.floor(Math.random() * FROG_MESSAGES.length)];
    
    setFrogs(prev => [...prev, { id, x, y, message }]);
    
    // Remove the frog after some time
    setTimeout(() => {
      setFrogs(prev => prev.filter(frog => frog.id !== id));
    }, 7000);
  };
  
  // Create random frogs periodically
  useEffect(() => {
    // Determine the interval based on feinMode
    const interval = feinMode ? 2000 : 8000;
    
    const frogInterval = setInterval(() => {
      createRandomFrog();
    }, interval);
    
    return () => clearInterval(frogInterval);
  }, [feinMode]);
  
  return (
    <>
      {frogs.map(frog => (
        <div 
          key={frog.id}
          className="random-frog"
          style={{
            top: `${frog.y}%`,
            left: `${frog.x}%`,
          }}
        >
          <div className="random-frog-message">
            {frog.message}
          </div>
          <img 
            src="https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="RANDOM FROG ENTITY"
          />
        </div>
      ))}
    </>
  );
};