import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMiniXMark } from 'react-icons/hi2';
import { IoMailOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

const WHATSAPP_NUMBER = "255750792039";

function Contact() {
  const formRef = useRef();
  const [activeForm, setActiveForm] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [waName, setWaName] = useState('');
  const [waLocation, setWaLocation] = useState('');
  const [waMessage, setWaMessage] = useState('');

  const openEmail = function() {
    setActiveForm('email');
    setStatus(null);
  };

  const openWhatsApp = function() {
    setActiveForm('whatsapp');
  };

  const closeForm = function() {
    setActiveForm(null);
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(function() {
      setStatus('success');
      formRef.current.reset();
      setLoading(false);
    }, function() {
      setStatus('error');
      setLoading(false);
    });
  };

  const handleWhatsApp = function() {
    if (!waName.trim() || !waLocation.trim() || !waMessage.trim()) return;
    const text = 'Hello Dev. Chacha! 👋\n\nName: ' + waName + '\nLocation: ' + waLocation + '\n\nMessage:\n' + waMessage;
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank');
    setActiveForm(null);
    setWaName('');
    setWaLocation('');
    setWaMessage('');
  };

  const waReady = waName.trim() && waLocation.trim() && waMessage.trim();

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: '#1a1a2e',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '12px',
    display: 'block',
    marginBottom: '5px',
    fontWeight: '500',
  };

  const emailInputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.06)',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(20px, 8vw, 120px)',
        background: 'linear-gradient(180deg, var(--ocean-deep) 0%, var(--ocean-dark) 85%, #061018 100%)',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Header */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--sky)',
        marginBottom: '16px',
        display: 'block',
      }}>
        Get In Touch
      </span>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(36px, 5vw, 62px)',
        fontWeight: '400',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        color: 'white',
        marginBottom: '16px',
      }}>
        Let's build something{' '}
        <span style={{ color: 'var(--sky)', fontStyle: 'italic' }}>
          great together
        </span>
      </h2>

      <p style={{
        fontSize: 'clamp(16px, 1.8vw, 18px)',
        color: 'rgba(255,255,255,0.6)',
        fontWeight: '300',
        lineHeight: 1.7,
        maxWidth: '520px',
        marginBottom: '48px',
      }}>
        Have a project in mind? Choose how you want to reach me  I respond within 24 hours.
      </p>

      {/* Two Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
      }}>
        <button
          onClick={openEmail}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            borderRadius: '100px',
            background: 'white',
            border: 'none',
            color: 'var(--ocean-dark)',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
          }}
        >
          <IoMailOutline size={20} />
          Send an Email
        </button>

        <button
          onClick={openWhatsApp}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 16px 32px rgba(37,211,102,0.5)';
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.35)';
          }}
        >
          <FaWhatsapp size={20} />
          Chat on WhatsApp
        </button>
      </div>

      {/* Overlay */}
      {activeForm && (
        <div
          onClick={closeForm}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 10000,
            backdropFilter: 'blur(6px)',
          }}
        />
      )}

      {/* Email Popup */}
      {activeForm === 'email' && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(480px, 92vw)',
          background: '#0f0f1a',
          borderRadius: '24px',
          border: '1px solid rgba(108,99,255,0.3)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
          zIndex: 10001,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IoMailOutline size={22} color="white" />
              <div>
                <div style={{ color: 'white', fontWeight: '700', fontSize: '15px' }}>
                  Send an Email
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>
                  chacha@axeraf.co.tz
                </div>
              </div>
            </div>
            <button
              onClick={closeForm}
              style={{
                background: 'rgba(255,59,48,0.3)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HiMiniXMark size={18} />
            </button>
          </div>

          {/* Form */}
          <div style={{ padding: '20px' }}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" name="from_name" required style={emailInputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="from_email" required style={emailInputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Discussion"
                  style={emailInputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    minHeight: '110px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '13px 28px',
                  borderRadius: '100px',
                  background: loading ? '#1e1e32' : 'white',
                  border: 'none',
                  color: 'var(--ocean-dark)',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'all 0.3s',
                }}
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <p style={{ color: '#25d366', fontSize: '14px' }}>
                  ✓ Message sent! I will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#ff6b6b', fontSize: '14px' }}>
                  Something went wrong. Try WhatsApp instead.
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Popup */}
      {activeForm === 'whatsapp' && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(400px, 92vw)',
          background: '#0f0f1a',
          borderRadius: '22px',
          border: '1px solid rgba(37,211,102,0.25)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
          zIndex: 10001,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 18px',
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaWhatsapp size={22} color="white" />
              <div>
                <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>
                  Chat on WhatsApp
                </div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px' }}>
                  Dev. Chacha · +255 750 792 039
                </div>
              </div>
            </div>
            <button
              onClick={closeForm}
              style={{
                background: 'rgba(255,59,48,0.3)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HiMiniXMark size={16} />
            </button>
          </div>

          {/* Form */}
          <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.5 }}>
              Fill in your details — message opens ready to send in WhatsApp.
            </p>

            <div>
              <label style={labelStyle}>Your Name *</label>
              <input
                style={inputStyle}
                placeholder="e.g. John Mwangi"
                value={waName}
                onChange={function(e) { setWaName(e.target.value); }}
              />
            </div>

            <div>
              <label style={labelStyle}>Region & Area *</label>
              <input
                style={inputStyle}
                placeholder="e.g. Dar es Salaam, Kinondoni"
                value={waLocation}
                onChange={function(e) { setWaLocation(e.target.value); }}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Message *</label>
              <textarea
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: '#1a1a2e',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  minHeight: '90px',
                  resize: 'vertical',
                }}
                placeholder="Tell me about your project..."
                value={waMessage}
                onChange={function(e) { setWaMessage(e.target.value); }}
              />
            </div>

            <button
              onClick={handleWhatsApp}
              disabled={!waReady}
              style={{
                padding: '12px',
                borderRadius: '12px',
                background: waReady ? 'linear-gradient(135deg, #25d366, #128c7e)' : '#1e1e32',
                border: 'none',
                color: 'white',
                fontSize: '14px',
                fontWeight: '700',
                cursor: waReady ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <FaWhatsapp size={17} />
              Send via WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
