import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMiniXMark } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

const WHATSAPP_NUMBER = "255750792039";

const Contact = () => {
  const revealRefs = useRef([]);
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showWaForm, setShowWaForm] = useState(false);
  const [waData, setWaData] = useState({ name: '', location: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealRefs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus('success');
      formRef.current.reset();
      setLoading(false);
    }, () => {
      setStatus('error');
      setLoading(false);
    });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, location, message } = waData;
    if (!name.trim() || !location.trim() || !message.trim()) return;
    const text = `Hello Dev. Chacha! 👋\n\nName: ${name}\nLocation: ${location}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShowWaForm(false);
    setWaData({ name: '', location: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1px solid rgba(108,99,255,0.3)',
    background: '#1e1e32',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="section section-5">
      <span className="eyebrow reveal" ref={addToReveal}>Get In Touch</span>
      <h2 className="heading-xl reveal" ref={addToReveal}>
        Let's build something <span>great together</span>
      </h2>
      <p className="lead reveal" ref={addToReveal}>
        Have a project in mind? Send me a message or reach me directly on WhatsApp.
      </p>

      <div className="contact-layout">
        <div className="contact-left reveal" ref={addToReveal}>
          <p className="lead" style={{ marginBottom: '20px' }}>
            Whether it's a full system, an API, a mobile app or a consultation I'm ready to help you build it right.
          </p>

          {/* WhatsApp Button */}
          <button
            onClick={() => setShowWaForm(true)}
            className="whatsapp-btn"
            style={{ cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <FaWhatsapp size={22} /> Chat on WhatsApp
          </button>
        </div>

        {/* Email Form */}
        <div className="reveal" ref={addToReveal}>
          <form className="contact-form" id="contactForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label className="form-label">Your Name</label>
                <input type="text" name="from_name" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" name="from_email" className="form-input" required />
              </div>
            </div>
            <div>
              <label className="form-label">Subject</label>
              <input type="text" name="subject" className="form-input" placeholder="Project Discussion" required />
            </div>
            <div>
              <label className="form-label">Message</label>
              <textarea name="message" className="form-textarea" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="form-submit">
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
          {status === 'success' && <p style={{ marginTop: '1rem' }}>Message sent! I will get back to you soon.</p>}
          {status === 'error' && <p style={{ marginTop: '1rem' }}>Something went wrong. Try WhatsApp instead.</p>}
        </div>
      </div>

      {/* WhatsApp Popup Form */}
      {showWaForm && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setShowWaForm(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 10000,
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Popup */}
          <div style={{
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(420px, 90vw)',
            background: '#0f0f1a',
            borderRadius: '20px',
            border: '1px solid rgba(108,99,255,0.4)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
            zIndex: 10001,
            overflow: 'hidden',
            animation: 'slideUp 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}>

            {/* Header */}
            <div style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaWhatsapp size={24} color="white" />
                <div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '15px' }}>
                    Chat on WhatsApp
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px' }}>
                    Dev. Chacha · +255 750 792 039
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowWaForm(false)}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none', borderRadius: '8px',
                  color: 'white', cursor: 'pointer',
                  width: '30px', height: '30px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <HiMiniXMark size={18} />
              </button>
            </div>

            {/* Form */}
            <div style={{ padding: '20px' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '16px' }}>
                Fill in your details your message will be ready to send on WhatsApp instantly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', display: 'block', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    style={inputStyle}
                    
                    value={waData.name}
                    onChange={e => setWaData(p => ({ ...p, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', display: 'block', marginBottom: '6px' }}>
                    Region & Area (Mkoa / Mtaa) *
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="e.g. Dar es Salaam, Kinondoni"
                    value={waData.location}
                    onChange={e => setWaData(p => ({ ...p, location: e.target.value }))}
                  />
                </div>

                <div>
                  <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', display: 'block', marginBottom: '6px' }}>
                    Your Message *
                  </label>
                  <textarea
                    style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                    placeholder="Tell me about your project or what you need..."
                    value={waData.message}
                    onChange={e => setWaData(p => ({ ...p, message: e.target.value }))}
                  />
                </div>

                <button
                  onClick={handleWhatsApp}
                  disabled={!waData.name.trim() || !waData.location.trim() || !waData.message.trim()}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    background: waData.name && waData.location && waData.message
                      ? 'linear-gradient(135deg, #25d366, #128c7e)'
                      : '#1e1e32',
                    border: 'none',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    cursor: waData.name && waData.location && waData.message ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '8px',
                    transition: 'all 0.2s',
                  }}
                >
                  <FaWhatsapp size={18} /> Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
