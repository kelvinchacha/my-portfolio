import React, { useEffect, useRef } from 'react';

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="about" className="section section-1">
      <div className="about-grid">
        <div className="about-visual reveal" ref={addToRefs}>
          <div className="about-photo-placeholder">👨‍💻</div>
          <div className="about-badge">
            <span className="badge-num">5+</span>
            <span className="badge-label">Projects Delivered</span>
          </div>
        </div>
        <div className="about-text-block reveal" ref={addToRefs}>
          <span className="eyebrow">About Me</span>
          <h2 className="heading-xl">Turning complex problems <span>into elegant systems</span></h2>
          <p>I'm <strong>Kelvin Charles Chacha</strong>, a Full Stack Developer and founder of <strong>aXeraf Technologies</strong> based in Dodoma, Tanzania. I specialize in building complete production ready business systems from architecture to deployment.</p>
          <p>With hands on experience across Python, Django, Java, Spring Boot, React and React Native, I help organizations in Tanzania turn complex challenges into clean reliable software.</p>
          <p>My goal is to become a <strong>System Architect</strong> by 2030, building infrastructure that powers real growth for African enterprises.</p>
          <div className="about-highlights">
            <div className="highlight-item"><span className="highlight-num">5+</span><span className="highlight-label">Projects Built</span></div>
            <div className="highlight-item"><span className="highlight-num">3</span><span className="highlight-label">Certifications</span></div>
            <div className="highlight-item"><span className="highlight-num">2+</span><span className="highlight-label">Years Active</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;