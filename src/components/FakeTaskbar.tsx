import React, { useState, useEffect } from 'react';

export const FakeTaskbar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fake-taskbar">
      <div className="taskbar-start">
        <button className="start-button">
          🍟 Start
        </button>
      </div>
      
      <div className="taskbar-programs">
        <div className="program-button active">🍔 McDONALD'S COIN</div>
      </div>
      
      <div className="taskbar-tray">
        <span className="tray-icon">🔊</span>
        <span className="tray-icon">📶</span>
        <span className="tray-icon">🔋</span>
        <span className="taskbar-time">
          {time.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};