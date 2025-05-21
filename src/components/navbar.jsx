import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <HashLink smooth to="/">YUI</HashLink>
        </div>
        
        <ul className="nav-links">
          <li><HashLink smooth to="/#about">About Me</HashLink></li>
          <li><HashLink smooth to="/#portfolio">Portfolio</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact</HashLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
