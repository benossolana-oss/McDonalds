import React from 'react';
import { X, MessageCircle } from 'lucide-react';

interface NavButtonsProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const NavButtons: React.FC<NavButtonsProps> = ({ currentPage, navigateTo }) => {
  const buttons = [
    { id: 'home', label: 'HOME DIMENSION' }
  ];
  
  return (
    <div className="nav-buttons">
      {buttons.map(button => (
        <button
          key={button.id}
          className={`nav-button ${currentPage === button.id ? 'nav-button-active' : ''}`}
          onClick={() => navigateTo(button.id)}
        >
          {button.label}
        </button>
      ))}
      
      <a
        href="https://x.com/mcdccto"
        target="_blank"
        rel="noopener noreferrer"
        className="x-community-button"
        style={{ marginTop: '0.5rem' }}
      >
        <X className="inline-block mr-2" size={24} />
        OFFICIAL X ACCOUNT
      </a>
      
      <a
        href="https://x.com/i/communities/1964617869490098481"
        target="_blank"
        rel="noopener noreferrer"
        className="x-community-button"
      >
        <X className="inline-block mr-2" size={24} />
        JOIN THE MCDIMENSION (X Community)
      </a>
      
      <a
        href="https://t.me/MCDCcto"
        target="_blank"
        rel="noopener noreferrer"
        className="x-community-button telegram-button"
      >
        <MessageCircle className="inline-block mr-2" size={24} />
        JOIN THE TG
      </a>
    </div>
  );
};