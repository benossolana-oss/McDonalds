import React from 'react';

interface FeinModeToggleProps {
  feinMode: boolean;
  toggleFeinMode: () => void;
}

export const FeinModeToggle: React.FC<FeinModeToggleProps> = ({ feinMode, toggleFeinMode }) => {
  return (
    <button 
      className="fein-mode-toggle"
      onClick={toggleFeinMode}
      style={{
        animation: feinMode ? 'pulse 0.5s infinite' : 'pulse 2s infinite'
      }}
    >
      {feinMode ? '🔴 DEACTIVATE FEIN MODE 🔴' : '🟢 ACTIVATE FEIN MODE 🟢'}
    </button>
  );
};