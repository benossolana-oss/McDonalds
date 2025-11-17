import React from 'react';

export const MainTitle: React.FC = () => {
  const contractAddress = "DHS1JnKrzmaxGScdcNigkgBRpY4pNeLeoTaoPZhipump";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    // Visual feedback could be added here
  };

  return (
    <div className="main-title-container">
      {/* Contract Address Banner */}
      <div className="contract-address-banner">
        <div className="ca-label">CONTRACT ADDRESS (CA):</div>
        <div className="ca-address" onClick={copyToClipboard} title="Click to copy">
          {contractAddress}
        </div>
        <div className="ca-copy-hint">👆 CLICK TO COPY 👆</div>
      </div>

      <div className="title-header">
        <div className="chip-logo-container">
          <img 
            src="/images/chip-logo.jpg" 
            alt="Chip Logo" 
            className="chip-logo"
            onError={(e) => {
              // Hide if image doesn't exist
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div className="title-text">
          <h1 className="main-title">
            🍟 MCDONALDS
          </h1>
          <h1 className="main-title-sub">
            COIN
          </h1>
          <div className="mcdc-ticker">
            $MCDC
          </div>
        </div>
      </div>
      <div className="title-effects">
        <span className="glitch-text">I'M LOVIN' IT</span>
        <span className="spinning-burger">🍔</span>
      </div>
    </div>
  );
};