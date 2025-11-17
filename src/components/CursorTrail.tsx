import React, { useState, useEffect } from 'react';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newDot: TrailDot = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      };

      setTrail(prev => [...prev.slice(-20), newDot]);
    };

    // Fade out trail dots
    const fadeInterval = setInterval(() => {
      setTrail(prev => 
        prev.map(dot => ({ ...dot, opacity: dot.opacity - 0.1 }))
           .filter(dot => dot.opacity > 0)
      );
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <div className="cursor-trail">
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="trail-dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity,
            transform: `scale(${dot.opacity})`,
            backgroundColor: index % 2 === 0 ? '#FFD700' : '#FF0000'
          }}
        />
      ))}
    </div>
  );
};