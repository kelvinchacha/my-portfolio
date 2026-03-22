import React, { useEffect, useRef } from 'react';

const BACKEND = [
  { name: 'Python / Django', pct: 85, color: '#3776AB' },
  { name: 'Java / Spring Boot', pct: 75, color: '#6DB33F' },
  { name: 'PHP / Laravel', pct: 70, color: '#777BB4' },
  { name: 'REST API Design', pct: 88, color: '#61DAFB' },
  { name: 'PostgreSQL / MySQL', pct: 82, color: '#336791' },
];

const FRONTEND = [
  { name: 'React', pct: 80, color: '#61DAFB' },
  { name: 'React Native / Expo', pct: 72, color: '#61DAFB' },
  { name: 'JavaScript / ES6+', pct: 78, color: '#F7DF1E' },
  { name: 'HTML / CSS / Tailwind', pct: 85, color: '#38BDF8' },
  { name: 'Git / Docker', pct: 75, color: '#F05032' },
];

function Skills() {
  const barRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(function() {
    const cardObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0px)';
          cardObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const barObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          setTimeout(function() {
            entry.target.style.width = width + '%';
          }, 100);
          barObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cardRefs.current.forEach(function(el) {
      if (el) cardObs.observe(el);
    });

    barRefs.current.forEach(function(el) {
      if (el) barObs.observe(el);
    });

    return function() {
      cardObs.disconnect();
      barObs.disconnect();
    };
  }, []);

  const addToBarRefs = function(el) {
    if (el && !barRefs.current.includes(el)) barRefs.current.push(el);
  };

  const addToCardRefs = function(el) {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(20px, 8vw, 120px)',
        background: 'linear-gradient(180deg, var(--white) 0%, var(--sky-light) 85%, var(--ocean-deep) 100%)',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--ocean)',
        marginBottom: '16px',
        display: 'block',
      }}>
        Proficiency
      </span>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(38px, 5vw, 62px)',
        fontWeight: '400',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        color: 'var(--ink)',
        marginBottom: '16px',
      }}>
        My{' '}
        <span style={{ color: 'var(--ocean)', fontStyle: 'italic' }}>
          skill levels
        </span>
      </h2>

      <p style={{
        fontSize: 'clamp(16px, 1.8vw, 18px)',
        fontWeight: '300',
        color: 'var(--ink-soft)',
        lineHeight: 1.7,
        maxWidth: '560px',
        marginBottom: '40px',
      }}>
        Capability levels across key areas of development.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '20px',
      }}>

        {/* Backend Card */}
        <div
          ref={addToCardRefs}
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.9)',
            padding: 'clamp(24px, 3vw, 36px)',
            boxShadow: '0 4px 24px rgba(40,114,161,0.07)',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(40,114,161,0.15)';
            e.currentTarget.style.transform = 'translateY(-6px)';
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(40,114,161,0.07)';
            e.currentTarget.style.transform = 'translateY(0px)';
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            fontStyle: 'italic',
            fontWeight: '500',
            color: 'var(--ocean)',
            marginBottom: '28px',
          }}>
            Backend Development
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>Python / Django</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#3776AB' }}>85%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="85" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #3776AB, #3776AB99)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>Java / Spring Boot</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#6DB33F' }}>75%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="75" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #6DB33F, #6DB33F99)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>PHP / Laravel</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#777BB4' }}>70%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="70" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #777BB4, #777BB499)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>REST API Design</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#61DAFB' }}>88%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="88" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #61DAFB, #61DAFB99)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>PostgreSQL / MySQL</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#336791' }}>82%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="82" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #336791, #33679199)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Card */}
        <div
          ref={addToCardRefs}
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.9)',
            padding: 'clamp(24px, 3vw, 36px)',
            boxShadow: '0 4px 24px rgba(40,114,161,0.07)',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(40,114,161,0.15)';
            e.currentTarget.style.transform = 'translateY(-6px)';
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(40,114,161,0.07)';
            e.currentTarget.style.transform = 'translateY(0px)';
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            fontStyle: 'italic',
            fontWeight: '500',
            color: 'var(--ocean)',
            marginBottom: '28px',
          }}>
            Frontend & Mobile
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>React</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#61DAFB' }}>80%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="80" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #61DAFB, #61DAFB99)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>React Native / Expo</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#61DAFB' }}>72%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="72" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #61DAFB, #61DAFB99)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>JavaScript / ES6+</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#F7DF1E' }}>78%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="78" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #F7DF1E, #F7DF1E99)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>HTML / CSS / Tailwind</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#38BDF8' }}>85%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="85" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #38BDF8, #38BDF899)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--ink)' }}>Git / Docker</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#F05032' }}>75%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(40,114,161,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div ref={addToBarRefs} data-width="75" style={{ height: '100%', width: '0%', borderRadius: '100px', background: 'linear-gradient(90deg, #F05032, #F0503299)', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
