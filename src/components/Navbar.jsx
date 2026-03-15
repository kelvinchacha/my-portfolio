import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobile = () => setIsOpen(false);

  return (
    <>
      <nav id="navbar" style={{ background: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)', boxShadow: isScrolled ? '0 5px 20px rgba(40,114,161,0.1)' : 'none' }}>
        <a href="#hero" class="nav-brand">Dev. Chacha</a>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact" class="nav-cta-btn">Contact</a></li>
        </ul>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} id="hamburger" aria-label="Menu" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        {['hero', 'about', 'services', 'projects', 'techstack', 'skills', 'contact'].map(item => (
          <a key={item} href={`#${item}`} onClick={closeMobile}>{item === 'hero' ? 'Home' : item === 'techstack' ? 'Tech Stack' : item.charAt(0).toUpperCase() + item.slice(1)}</a>
        ))}
      </div>
    </>
  );
};

export default Navbar;