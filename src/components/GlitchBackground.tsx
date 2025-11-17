import React, { useEffect, useRef } from 'react';

export const GlitchBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Draw scanlines
    const drawScanlines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines with random glitches
      for (let x = 0; x < canvas.width; x += 20) {
        if (Math.random() > 0.97) {
          // Occasionally skip a line for glitch effect
          continue;
        }
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw random glitch rectangles
      if (Math.random() > 0.9) {
        const glitchCount = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < glitchCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const width = Math.random() * 100 + 50;
          const height = Math.random() * 20 + 5;
          
          // Random color for glitch
          const colors = [
            'rgba(57, 255, 20, 0.2)',
            'rgba(255, 0, 255, 0.2)',
            'rgba(255, 49, 49, 0.2)'
          ];
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillRect(x, y, width, height);
        }
      }
      
      // RGB split effect
      if (Math.random() > 0.8) {
        const y = Math.random() * canvas.height;
        const height = Math.random() * 50 + 10;
        
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(0, y, canvas.width, height);
        
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.fillRect(0, y + 2, canvas.width, height);
        
        ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
        ctx.fillRect(0, y + 4, canvas.width, height);
      }
      
      requestAnimationFrame(drawScanlines);
    };
    
    drawScanlines();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="glitch-background"></div>
      <canvas 
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
    </>
  );
};