import React, { useEffect, useRef } from 'react';
import { DiPython, DiDjango, DiJava, DiReact, DiPhp, DiMysql, DiGit, DiDocker, DiJavascript1 } from 'react-icons/di';
import { SiSpringboot, SiPostgresql } from 'react-icons/si';

const TechStack = () => {
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

  const stack = [
    { icon: <DiPython size={28} />, name: 'Python', type: 'Language' },
    { icon: <DiDjango size={28} />, name: 'Django / DRF', type: 'Backend' },
    { icon: <DiJava size={28} />, name: 'Java', type: 'Language' },
    { icon: <SiSpringboot size={28} />, name: 'Spring Boot', type: 'Backend' },
    { icon: <DiReact size={28} />, name: 'React', type: 'Frontend' },
    { icon: <DiReact size={28} />, name: 'React Native', type: 'Mobile' },
    { icon: <DiJavascript1 size={28} />, name: 'JavaScript', type: 'Language' },
    { icon: <DiPhp size={28} />, name: 'PHP / Laravel', type: 'Backend' },
    { icon: <SiPostgresql size={28} />, name: 'PostgreSQL', type: 'Database' },
    { icon: <DiMysql size={28} />, name: 'MySQL', type: 'Database' },
    { icon: <DiGit size={28} />, name: 'Git / GitHub', type: 'Version Control' },
    { icon: <DiDocker size={28} />, name: 'Docker', type: 'DevOps' }
  ];

  return (
    <section id="techstack" className="section section-5">
      <span className="eyebrow reveal" ref={addToRefs}>Technologies</span>
      <h2 className="heading-xl reveal" ref={addToRefs}>Tech Stack</h2>
      <p className="lead reveal" ref={addToRefs}>The tools I use to build production ready systems.</p>
      <div className="tech-grid reveal" ref={addToRefs}>
        {stack.map((item, i) => (
          <div className="tech-item" key={i}><span className="tech-item-icon">{item.icon}</span><div><span className="tech-item-name">{item.name}</span><span className="tech-item-type">{item.type}</span></div></div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;