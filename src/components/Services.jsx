import React, { useEffect, useRef } from 'react';
import { FiMonitor, FiSmartphone, FiSettings, FiGrid, FiDatabase, FiTool } from 'react-icons/fi';

const services = [
  {
    icon: FiMonitor,
    name: 'Web Applications',
    desc: 'Full stack web apps with Django or Spring Boot backends and React frontends. Multi-tenant SaaS, management portals and dashboards.',
    color: '#6c63ff',
    bg: 'rgba(108,99,255,0.12)',
  },
  {
    icon: FiSmartphone,
    name: 'Mobile Apps',
    desc: 'Cross-platform mobile apps using React Native with Expo for Android and iOS. Fast, native-feeling and connected to your existing APIs.',
    color: '#61DAFB',
    bg: 'rgba(97,218,251,0.12)',
  },
  {
    icon: FiSettings,
    name: 'APIs & Backends',
    desc: 'RESTful APIs with Django REST Framework or Spring Boot. Authentication, role-based access and third-party integrations.',
    color: '#6DB33F',
    bg: 'rgba(109,179,63,0.12)',
  },
  {
    icon: FiGrid,
    name: 'Business Systems',
    desc: "Custom ERP, POS, inventory, HR and management systems tailored to your organization's specific processes and workflows.",
    color: '#F7DF1E',
    bg: 'rgba(247,223,30,0.12)',
  },
  {
    icon: FiDatabase,
    name: 'Database Design',
    desc: 'Scalable PostgreSQL and MySQL schemas. Data modeling, optimization, migrations and reporting layers built for growth.',
    color: '#336791',
    bg: 'rgba(51,103,145,0.12)',
  },
  {
    icon: FiTool,
    name: 'Consulting',
    desc: 'System architecture review, tech stack selection and technical roadmaps for NGOs, startups and small enterprises.',
    color: '#ED8B00',
    bg: 'rgba(237,139,0,0.12)',
  },
];

const Services = () => {
  const cardRefs = useRef([]);
  const headerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('up');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0px)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    [...headerRefs.current, ...cardRefs.current].forEach(el => {
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const wh = window.innerHeight;
        if (rect.top < wh && rect.bottom > 0) {
          const progress = (wh - rect.top) / (wh + rect.height);
          card.style.transform = `translateY(${(progress - 0.5) * -20}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToCards = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  const addToHeader = (el) => {
    if (el && !headerRefs.current.includes(el)) headerRefs.current.push(el);
  };

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(20px, 8vw, 120px)',
        background: 'linear-gradient(180deg, var(--sky-light) 0%, var(--white) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <span
          className="eyebrow reveal"
          ref={addToHeader}
        >
          What I Do
        </span>

        <h2
          className="heading-xl reveal"
          ref={addToHeader}
        >
          End-to-end{' '}
          <span style={{ fontStyle: 'italic' }}>solutions</span>
          {' '}for real businesses
        </h2>

        <p
          className="lead reveal"
          ref={addToHeader}
          style={{ marginBottom: 0 }}
        >
          From idea to deployment I build complete systems that solve real problems, not just pretty interfaces.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
        gap: '16px',
      }}>
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              ref={addToCards}
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '22px',
                border: '1px solid rgba(255,255,255,0.9)',
                padding: 'clamp(20px, 2.5vw, 30px)',
                boxShadow: '0 4px 24px rgba(40,114,161,0.07), inset 0 1px 0 rgba(255,255,255,0.8)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = s.bg;
                e.currentTarget.style.border = `1px solid ${s.color}44`;
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.08), 0 0 30px ${s.color}22`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.9)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(40,114,161,0.07), inset 0 1px 0 rgba(255,255,255,0.8)';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '90px', height: '90px', borderRadius: '50%',
                background: `radial-gradient(circle, ${s.color}18, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                width: '52px', height: '52px', borderRadius: '15px',
                background: s.bg,
                border: `1px solid ${s.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: `0 4px 14px ${s.color}20`,
              }}>
                <Icon size={24} color={s.color} />
              </div>

              {/* Name */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '17px', fontWeight: '700',
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
                marginBottom: '8px',
              }}>
                {s.name}
              </h3>

              {/* Desc */}
              <p style={{
                fontSize: '14px',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                fontWeight: '300',
                marginBottom: 0,
              }}>
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
