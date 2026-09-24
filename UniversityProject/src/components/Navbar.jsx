import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './logo.jpeg';

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('');

  // Automatically detect which page the user is currently viewing
  useEffect(() => {
    setCurrentPath(window.location.pathname.toLowerCase());
  }, []);

  // Helper function to match paths
  const getActiveClass = (path) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/home')) {
      return 'active';
    }
    return currentPath.includes(path) && path !== '/' ? 'active' : '';
  };

  return (
    <header className="site-header">
      <nav className="nav-container">
        {/* Brand Logo & Name */}
        <a href="/" className="nav-logo">
          <img src={logo} alt="Vertex Technology Logo" className="logo-img" />
          
          <span className="logo-text">
            Vertex <span className="logo-highlight">Technology</span>
          </span>
        </a>

        {/* Center Navigation Links (Automatically Dynamic) */}
        <ul className="nav-menu">
          <li>
            <a href="/" className={getActiveClass('/')}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={getActiveClass('/about')}>
              About Us
            </a>
          </li>
          <li>
            <a href="/research" className={getActiveClass('/research')}>
              Research
            </a>
          </li>
          <li>
            <a href="/ai" className={getActiveClass('/ai')}>
              AI
            </a>
          </li>
          <li>
            <a href="/development" className={getActiveClass('/development')}>
              Development
            </a>
          </li>
          <li>
            <a href="/iot" className={getActiveClass('/iot')}>
              IoT
            </a>
          </li>
        </ul>

        {/* Right CTA Button */}
        <div className="nav-actions">
          <a href="mailto:hello@vertextechnologies.io" className="nav-cta-btn">
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}