import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">Learning Vault</div>
      <nav className="Header-nav">
        <a href="#">Home</a>
        <a href="#">Activity List</a>
        <a href="#">New Arrivals</a>
        <a href="#">Gift Set</a>
        <a href="#">Visit Us</a>
      </nav>
    </header>
  );
}

export default Header;