import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMapPin, FiLink, FiMessageCircle } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Dev. Chacha</h3>
          <p>Building production ready systems for African businesses. Based in Dodoma, Tanzania.</p>
          <div className="footer-social">
            <a href="https://linkedin.com/in/kelvin-chacha" target="_blank" className="footer-social-link" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
            <a href="https://github.com/kelvinchacha" target="_blank" className="footer-social-link" aria-label="GitHub"><FaGithub size={22} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#techstack">Tech Stack</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Applications</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">APIs & Backends</a></li>
            <li><a href="#services">Business Systems</a></li>
            <li><a href="#services">Database Design</a></li>
            <li><a href="#services">Consulting</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Dev. Kelvin Charles Chacha · aXeraf Technologies. All rights reserved.</p>
        <div className="footer-bottom-links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
      </div>
    </footer>
  );
};

export default Footer;