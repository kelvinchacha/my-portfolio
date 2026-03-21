import React from 'react';
import { DiPython, DiDjango, DiJava, DiReact, DiPhp, DiMysql, DiGit, DiDocker, DiJavascript1 } from 'react-icons/di';
import { SiSpringboot, SiPostgresql } from 'react-icons/si';

const stack = [
  { icon: DiPython, name: 'Python', type: 'Language', color: '#3776AB', bg: 'rgba(55,118,171,0.15)' },
  { icon: DiDjango, name: 'Django / DRF', type: 'Backend', color: '#44B78B', bg: 'rgba(68,183,139,0.15)' },
  { icon: DiJava, name: 'Java', type: 'Language', color: '#ED8B00', bg: 'rgba(237,139,0,0.15)' },
  { icon: SiSpringboot, name: 'Spring Boot', type: 'Backend', color: '#6DB33F', bg: 'rgba(109,179,63,0.15)' },
  { icon: DiReact, name: 'React', type: 'Frontend', color: '#61DAFB', bg: 'rgba(97,218,251,0.15)' },
  { icon: DiReact, name: 'React Native', type: 'Mobile', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
  { icon: DiJavascript1, name: 'JavaScript', type: 'Language', color: '#F7DF1E', bg: 'rgba(247,223,30,0.15)' },
  { icon: DiPhp, name: 'PHP / Laravel', type: 'Backend', color: '#777BB4', bg: 'rgba(119,123,180,0.15)' },
  { icon: SiPostgresql, name: 'PostgreSQL', type: 'Database', color: '#336791', bg: 'rgba(51,103,145,0.15)' },
  { icon: DiMysql, name: 'MySQL', type: 'Database', color: '#4479A1', bg: 'rgba(68,121,161,0.15)' },
  { icon: DiGit, name: 'Git / GitHub', type: 'Version Control', color: '#F05032', bg: 'rgba(240,80,50,0.15)' },
  { icon: DiDocker, name: 'Docker', type: 'DevOps', color: '#2496ED', bg: 'rgba(36,150,237,0.15)' },
];

const TechCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '28px',
        border: `1px solid ${item.color}33`,
        padding: '32px 36px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexShrink: 0,
        width: '320px',
        boxShadow: `0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = item.bg;
        e.currentTarget.style.border = `1px solid ${item.color}77`;
        e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${item.color}33`;
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.border = `1px solid ${item.color}33`;
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)';
        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '120px', height: '120px', borderRadius: '50%',
        background: `radial-gradient(circle, ${item.color}33, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Icon box */}
      <div style={{
        width: '80px', height: '80px', borderRadius: '22px',
        background: item.bg,
        border: `1px solid ${item.color}55`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 8px 24px ${item.color}33`,
      }}>
        <Icon size={48} color={item.iconColor || item.color} />
      </div>

      {/* Text */}
      <div>
        <span style={{
          display: 'block',
          fontSize: '20px',
          fontWeight: '700',
          color: '#ffffff',
          fontFamily: 'var(--font-display)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          {item.name}
        </span>
        <span style={{
          display: 'block',
          fontSize: '13px',
          color: item.color,
          marginTop: '6px',
          fontWeight: '600',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {item.type}
        </span>
      </div>
    </div>
  );
};

const TechStack = () => {
  const duplicated = [...stack, ...stack, ...stack];

  return (
    <section
      id="techstack"
      style={{
        padding: '80px 0 90px',
        background: 'linear-gradient(160deg, var(--ocean-deep) 0%, var(--ocean-dark) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Header — Apple style */}
      <div style={{ padding: '0 12vw', marginBottom: '48px' }}>
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
          Technologies
        </span>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(38px, 5vw, 62px)',
          fontWeight: '400',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'var(--white)',
          marginBottom: '16px',
        }}>
          The tools I use to{' '}
          <span style={{ color: 'var(--sky)', fontStyle: 'italic' }}>
            build systems
          </span>
        </h2>

        <p style={{
          fontSize: 'clamp(16px, 1.8vw, 18px)',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.7,
          maxWidth: '600px',
        }}>
          From backend APIs to mobile apps these are the technologies
          I use daily to deliver production ready solutions for real businesses.
        </p>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative' }}>

        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '180px', zIndex: 2,
          background: 'linear-gradient(to right, #0f3a5c, transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '180px', zIndex: 2,
          background: 'linear-gradient(to left, #0f3a5c, transparent)',
          pointerEvents: 'none',
        }} />

        {/* Row 1 — kushoto */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            animation: 'scrollLeft 32s linear infinite',
            width: 'max-content',
            marginBottom: '20px',
            paddingLeft: '20px',
          }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {duplicated.map((item, i) => (
            <TechCard key={`r1-${i}`} item={item} />
          ))}
        </div>

        {/* Row 2 — kulia */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            animation: 'scrollRight 38s linear infinite',
            width: 'max-content',
            paddingLeft: '20px',
          }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {[...duplicated].reverse().map((item, i) => (
            <TechCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          #techstack { padding: 60px 0 70px !important; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
