import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const revealRefs = useRef([]);
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          setTimeout(() => { entry.target.style.width = width + '%'; }, 200);
          barObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });
    barRefs.current.forEach(el => {
      if (el) barObs.observe(el);
    });

    return () => { observer.disconnect(); barObs.disconnect(); };
  }, []);

  const addToReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
  const addToBars = (el) => { if (el && !barRefs.current.includes(el)) barRefs.current.push(el); };

  const skills = {
    backend: [
      { name: 'Python / Django', pct: 85 }, { name: 'Java / Spring Boot', pct: 75 }, { name: 'PHP / Laravel', pct: 70 },
      { name: 'REST API Design', pct: 88 }, { name: 'PostgreSQL / MySQL', pct: 82 }
    ],
    frontend: [
      { name: 'React', pct: 80 }, { name: 'React Native / Expo', pct: 72 }, { name: 'JavaScript / ES6+', pct: 78 },
      { name: 'HTML / CSS / Tailwind', pct: 85 }, { name: 'Git / Docker', pct: 75 }
    ]
  };

  return (
    <section id="skills" className="section section-6">
      <span className="eyebrow reveal" ref={addToReveal}>Proficiency</span>
      <h2 className="heading-xl reveal" ref={addToReveal}>Skills</h2>
      <p className="lead reveal" ref={addToReveal}>My capability levels across key areas of development.</p>
      <div className="skills-layout">
        {Object.entries(skills).map(([key, list], i) => (
          <div className="skill-group reveal" ref={addToReveal} key={i}>
            <div className="skill-group-title">{key === 'backend' ? 'Backend Development' : 'Frontend & Mobile'}</div>
            <div className="skill-list">{list.map((s, j) => <div className="skill-item" key={j}><span className="skill-name">{s.name}</span><div className="skill-bar"><div className="skill-fill" data-width={s.pct} ref={addToBars}></div></div><span className="skill-percent">{s.pct}%</span></div>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;