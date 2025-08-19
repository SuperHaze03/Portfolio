import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import GlassSurface from './GlassSurface';
import "./navbar.css";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <GlassSurface
            
        height={scrolled ? 60 : 80}
        borderRadius={50}          // kasih rounded biar kayak capsule
        displace={8}
        distortionScale={-80}
        opacity={0.5}
        brightness={100}
      
        className="navbar-glass"
      >
       
          <div className="logo">
            <HashLink smooth to="/">YUI</HashLink>
          </div>
          <ul className="nav-links">
            <li><HashLink smooth to="/#about">About Me</HashLink></li>
            <li><HashLink smooth to="/#portfolio">Portfolio</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
     
      </GlassSurface>
    </nav>
  );
};

export default Navbar;
