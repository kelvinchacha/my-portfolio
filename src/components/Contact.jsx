import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const revealRefs = useRef([]);
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const addToReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setLoading(false);
      }, () => {
        setStatus('error');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section section-5">
      <span className="eyebrow reveal" ref={addToReveal}>Get In Touch</span>
      <h2 className="heading-xl reveal" ref={addToReveal}>Let's build something <span>great together</span></h2>
      <p className="lead reveal" ref={addToReveal}>Have a project in mind? Send me a message or reach me directly on WhatsApp.</p>
      <div className="contact-layout">
        <div className="contact-left reveal" ref={addToReveal}>
          <p className="lead" style={{marginBottom:'20px'}}>Whether it's a full system, an API, a mobile app or a consultation I'm ready to help you build it right.</p>
          <a href="https://wa.me/255750792039" target="_blank" rel="noopener" className="whatsapp-btn"><FaWhatsapp size={22} /> Chat on WhatsApp</a>
        </div>
        <div className="reveal" ref={addToReveal}>
          <form className="contact-form" id="contactForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div><label className="form-label">Your Name</label><input type="text" name="from_name" className="form-input" placeholder="" required/></div>
              <div><label className="form-label">Email Address</label><input type="email" name="from_email" className="form-input" placeholder="" required/></div>
            </div>
            <div><label className="form-label">Subject</label><input type="text" name="subject" className="form-input" placeholder="Project Discussion" required/></div>
            <div><label className="form-label">Message</label><textarea name="message" className="form-textarea" placeholder="Tell me about your project..." required></textarea></div>
            <button type="submit" className="form-submit">{loading ? 'Sending...' : 'Send Message →'}</button>
          </form>
          {status === 'success' && <p style={{marginTop: '1rem'}}>Message sent! I will get back to you soon.</p>}
          {status === 'error' && <p style={{marginTop: '1rem'}}>Something went wrong. Try WhatsApp instead.</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
