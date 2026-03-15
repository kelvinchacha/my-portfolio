import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 0,
    bg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1800&q=80',
    eyebrow: 'Full Stack Developer from Dodoma, Tanzania',
    title: <>Building Systems <span>That Drive Business</span></>,
    desc: 'I design and develop complete web and mobile systems for enterprises, NGOs, and startups. From database architecture to user interface, I build what works.',
    btnText: 'View My Work',
    btnLink: '#projects'
  },
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1800&q=80',
    eyebrow: 'Web · Mobile · APIs · Architecture',
    title: <>Clean Code, <span>Scalable Architecture</span></>,
    desc: 'From Django REST APIs to Spring Boot microservices and React frontends. I build systems that grow with your organization.',
    btnText: 'Explore Services',
    btnLink: '#services'
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80',
    eyebrow: 'Founder of aXeraf Technologies',
    title: <>Your Vision, <span>My Expertise</span></>,
    desc: "Let's collaborate on your next project. Whether it's a management system, mobile app, SaaS product, or custom API integration.",
    btnText: "Let's Talk",
    btnLink: '#contact'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [total]);

  const goSlide = (n) => setCurrent(n);
  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <section id="hero">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === current ? 'active' : ''}`} id={`slide-${index}`}>
          <div className="slide-bg" style={{ backgroundImage: `url('${slide.bg}')` }}></div>
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <span className="slide-eyebrow">{slide.eyebrow}</span>
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-desc">{slide.desc}</p>
            <a href={slide.btnLink} className="slide-btn">
              {slide.btnText}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button key={index} className={`dot-btn ${index === current ? 'active' : ''}`} onClick={() => goSlide(index)}></button>
        ))}
      </div>
      <div className="slider-arrows">
        <button className="arrow-btn" onClick={prevSlide}>←</button>
        <button className="arrow-btn" onClick={nextSlide}>→</button>
      </div>
    </section>
  );
};

export default HeroSlider;