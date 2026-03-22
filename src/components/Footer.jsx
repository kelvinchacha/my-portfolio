import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import PrivacyModal from './PrivacyModal';

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const openPrivacy = function() { setShowPrivacy(true); };
  const closePrivacy = function() { setShowPrivacy(false); };

  return (
    <footer style={{
      background: '#061018',
      color: 'white',
      padding: '60px 8vw 30px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
      }}>

        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            fontStyle: 'italic',
            fontWeight: '500',
            color: 'white',
            marginBottom: '12px',
          }}>
            Dev. Chacha
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7,
            fontWeight: '300',
            maxWidth: '240px',
            marginBottom: '20px',
          }}>
            Building production ready systems for African businesses. Dodoma, Tanzania.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://linkedin.com/in/kelvin-chacha" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px' }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/kelvinchacha" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px' }}>
              <FaGithub />
            </a>
            <a href="https://wa.me/255750792039" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px' }}>
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '13px', fontWeight: '600', color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#hero" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Home</a>
            <a href="#about" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>About</a>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Services</a>
            <a href="#projects" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Projects</a>
            <a href="#techstack" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Tech Stack</a>
            <a href="#skills" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Skills</a>
            <a href="#contact" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '13px', fontWeight: '600', color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Services
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Web Applications</a>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Mobile Apps</a>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>APIs & Backends</a>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Business Systems</a>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Database Design</a>
            <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>Consulting</a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', fontWeight: '300' }}>
          © 2026 Dev. KelvinnChacha · aXeraf Technologies. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            onClick={openPrivacy}
            style={{
              color: 'rgba(255,255,255,0.25)',
              background: 'none',
              border: 'none',
              fontSize: '13px',
              cursor: 'pointer',
              fontWeight: '300',
              padding: 0,
            }}
            onMouseEnter={function(e) { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={function(e) { e.currentTarget.style.color = 'rgba(255,255,255,0.25)'; }}
          >
            Privacy Policy
          </button>
        </div>
      </div>

      <PrivacyModal open={showPrivacy} onClose={closePrivacy} />
    </footer>
  );
}

export default Footer;