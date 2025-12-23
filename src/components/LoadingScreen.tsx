import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import logo from '../assets/navra_loading.png'; // Updated to use the new loading image

const LoadingScreen: React.FC<{ onFinished: () => void }> = ({ onFinished }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show loading for at least 1.5 seconds or until window load (simulated here)
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        onFinished();
      }, 500); // Wait for fade out animation
    }, 2000); // 2 seconds minimum loading time

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <img src={logo} alt="NAVRA" className="loading-logo" />
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

