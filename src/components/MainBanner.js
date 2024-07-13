// MainBanner.js
import React from 'react';
import './MainBanner.css';

function MainBanner() {
  return (
    <div className="main-banner">
      <img src="/banner.png" alt="Banner" className="banner-image" />
      <img src="/card.png" alt="Centered" className="centered-image" />
      <div className="banner-info">
      </div>
    </div>
  );
}

export default MainBanner;
