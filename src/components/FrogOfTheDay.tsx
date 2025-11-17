import React from 'react';

// Array of McDonald's themed captions
const BURGER_CAPTIONS = [
  "BEHOLD THE GOLDEN ARCHES OF FINANCIAL FREEDOM",
  "THIS VIDEO CONTAINS THE SECRET TO CRYPTO SUCCESS",
  "WITNESS THE PROPHET OF MCNUGGET ASCENSION",
  "THE FRIES DEMAND YOUR WALLET ADDRESS AS TRIBUTE",
  "DIGITAL DIVINITY IN THE FORM OF A BIG MAC",
  "HIS SESAME SEEDS CONTAIN THE BLOCKCHAIN PASSWORD",
  "THE KEEPER OF FORBIDDEN MCDONALD'S KNOWLEDGE",
  "MCMEMECOIN JUDGES YOUR PORTFOLIO WITH LASER EYES",
  "PRAISE HIS SPECIAL SAUCE, FOR IT CONTAINS THE UNIVERSE",
  "THE BURGER DECLARES THE MOON MADE OF CHEESE"
];

export const FrogOfTheDay: React.FC = () => {
  const [currentCaption, setCurrentCaption] = React.useState('');
  const [videoError, setVideoError] = React.useState(false);
  
  React.useEffect(() => {
    const randomCaption = BURGER_CAPTIONS[Math.floor(Math.random() * BURGER_CAPTIONS.length)];
    setCurrentCaption(randomCaption);
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };
  
  return (
    <div className="frog-of-the-day">
      <h2 className="section-title">
        🍔 BURGER OF THE DAY 🍔
      </h2>
      
      <div className="video-container">
        {!videoError ? (
          <video 
            className="burger-video" 
            controls
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
          >
            <source src="/images/burger-video.mp4.MOV" type="video/mp4" />
            <source src="/images/burger-video.mp4.MOV" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            className="burger-video" 
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="MCMEMECOIN PROPHET" 
          />
        )}
      </div>
      
      <p className="frog-caption">{currentCaption}</p>
    </div>
  );
};