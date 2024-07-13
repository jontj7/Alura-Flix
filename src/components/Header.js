import React from 'react';
import './Header.css';

function Header({ onNewVideo, onHome }) {
  return (
    <header className="header">
      <h1>AluraFlix</h1>
      <div className="header-buttons">
        <button onClick={onNewVideo}>Nuevo Video</button>
        <button onClick={onHome}>Home</button>
      </div>
    </header>
  );
}

export default Header;
