import React, { useEffect, useRef } from 'react';
import { FiMonitor, FiSmartphone, FiSettings, FiGrid, FiDatabase, FiTool } from 'react-icons/fi';

const Services = () => {
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

  const services = [
    { icon: <FiMonitor size={32} />, name: 'Web Applications', desc: 'Full stack web apps with Django or Spring Boot backends and React frontends. Multi tenant SaaS, management portals and dashboards.' },
    { icon: <FiSmartphone size={32} />, name: 'Mobile Apps', desc: 'Cross platform mobile apps using React Native with Expo for Android and iOS. Fast, native feeling and connected to your existing APIs.' },
    { icon: <FiSettings size={32} />, name: 'APIs & Backends', desc: 'RESTful APIs with Django REST Framework or Spring Boot. Authentication, role based access and third party integrations.' },
    { icon: <FiGrid size={32} />, name: 'Business Systems', desc: "Custom ERP, POS, inventory, HR and management systems tailored to your organization's specific processes and workflows." },
    { icon: <FiDatabase size={32} />, name: 'Database Design', desc: 'Scalable PostgreSQL and MySQL schemas. Data modeling, optimization, migrations and reporting layers built for growth.' },
    { icon: <FiTool size={32} />, name: 'Consulting', desc: 'System architecture review, tech stack selection and technical roadmaps for NGOs, startups and small enterprises.' }
  ];

  return (
    <section id="services" className="section section-2">
      <span className="eyebrow reveal" ref={addToRefs}>What I Do</span>
      <h2 className="heading-xl reveal" ref={addToRefs}>Services</h2>
      <p className="lead reveal" ref={addToRefs}>End to end development for businesses that need real solutions not templates.</p>
      <div className="services-flow reveal" ref={addToRefs}>
        {services.map((s, i) => (
          <div className="service-item" key={i}>
            <span className="s-icon">{s.icon}</span>
            <div className="s-name">{s.name}</div>
            <p className="s-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;