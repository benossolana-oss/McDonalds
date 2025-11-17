import React, { useState, useEffect } from 'react';

interface FloatingSquare {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  image: string;
  scale: number;
  loaded: boolean;
}

export const FloatingImageSquares: React.FC = () => {
  const [squares, setSquares] = useState<FloatingSquare[]>([]);

  useEffect(() => {
    // Your custom uploaded images (1-8)
    const customImages = [
      '/images/float1.jpg',
      '/images/float2.jpg', 
      '/images/float3.jpg',
      '/images/float4.jpg',
      '/images/float5.jpg',
      '/images/float6.jpg',
      '/images/float7.jpg',
      '/images/float8.jpg'
    ];

    // Fallback images if custom ones don't load
    const fallbackImages = [
      'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=150',
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=150',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=150',
      'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=150'
    ];

    // Initialize floating squares ONLY at the very bottom of the screen
    const bottomAreaStart = window.innerHeight * 0.8; // Start at 80% down the screen
    const bottomAreaHeight = window.innerHeight * 0.2; // Use only bottom 20% of screen

    const initialSquares: FloatingSquare[] = Array(12).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 120),
      y: bottomAreaStart + Math.random() * (bottomAreaHeight - 120), // Only at the very bottom
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 2, // Slower vertical movement
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
      image: i < customImages.length ? customImages[i] : fallbackImages[i % fallbackImages.length],
      scale: 0.6 + Math.random() * 0.4,
      loaded: false
    }));
    
    setSquares(initialSquares);

    // Animation loop
    const animate = () => {
      setSquares(prevSquares => 
        prevSquares.map(square => {
          let newX = square.x + square.vx;
          let newY = square.y + square.vy;
          let newVx = square.vx;
          let newVy = square.vy;

          // Bounce off walls with some padding
          if (newX <= 0 || newX >= window.innerWidth - 120) {
            newVx = -newVx * 0.8; // Add dampening
            newX = Math.max(0, Math.min(window.innerWidth - 120, newX));
          }
          
          // Keep squares ONLY at the very bottom of the screen
          const bottomAreaStart = window.innerHeight * 0.8; // 80% down
          const bottomAreaEnd = window.innerHeight - 120;
          
          if (newY <= bottomAreaStart || newY >= bottomAreaEnd) {
            newVy = -newVy * 0.8; // Add dampening
            newY = Math.max(bottomAreaStart, Math.min(bottomAreaEnd, newY));
          }

          return {
            ...square,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: square.rotation + square.rotationSpeed
          };
        })
      );
    };

    const interval = setInterval(animate, 60);
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (id: number) => {
    setSquares(prev => prev.map(square => 
      square.id === id ? { ...square, loaded: true } : square
    ));
  };

  const handleImageError = (id: number) => {
    // Use fallback image if custom image fails
    const fallbackImages = [
      'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=150',
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=150',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=150',
      'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=150'
    ];
    
    setSquares(prev => prev.map(square => 
      square.id === id ? { 
        ...square, 
        image: fallbackImages[id % fallbackImages.length],
        loaded: true 
      } : square
    ));
  };

  return (
    <div className="floating-image-squares">
      {squares.map(square => (
        <img
          key={square.id}
          src={square.image}
          alt={`FLOATING MCDC SQUARE ${square.id + 1}`}
          className="floating-square"
          style={{
            left: `${square.x}px`,
            top: `${square.y}px`,
            transform: `rotate(${square.rotation}deg) scale(${square.scale})`,
            filter: `hue-rotate(${Math.sin(Date.now() * 0.002 + square.id) * 180}deg) saturate(2.5) contrast(1.3) brightness(1.1)`,
            opacity: square.loaded ? 1 : 0.5,
            transition: 'opacity 0.3s ease'
          }}
          onLoad={() => handleImageLoad(square.id)}
          onError={() => handleImageError(square.id)}
        />
      ))}
    </div>
  );
};