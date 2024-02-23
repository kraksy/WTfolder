import React from 'react';
import './Header.css';

const Header = () => {
      return (
            <header className="header">
                  <h1 className="header-title">Welcome to My Website</h1>
                  <nav className="header-nav">
                        <ul className="header-nav-list">
                              <li className="header-nav-item">Home</li>
                              <li className="header-nav-item">About</li>
                              <li className="header-nav-item">Services</li>
                              <li className="header-nav-item">Contact</li>
                        </ul>
                  </nav>
            </header>
      );
};

export default Header;