import React, { useEffect, useRef } from 'react';

const Projects = () => {
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

  const projects = [
    {
      num: 'Project 01', title: 'Multi Tenant School Management System', tech: ['Django REST', 'React', 'PostgreSQL'],
      prob: 'Schools were managing student records, fees and results on paper or in disconnected Excel sheets leading to data loss, billing errors and no visibility for management.',
      sol: 'A SaaS platform supporting multiple schools with student registration, fee collection, academic results, teacher management and SMS notifications using shared database multi tenant architecture.',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80', alt: 'School Management System'
    },
    {
      num: 'Project 02', title: 'Business POS & Inventory System', tech: ['Django', 'React', 'MySQL'],
      prob: 'A retail business was using manual receipts with no inventory tracking making it impossible to know real time stock levels or daily revenue.',
      sol: 'A full featured POS with real time inventory tracking, sales reporting, receipt generation and multi branch support giving the owner full visibility from one dashboard.',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80', alt: 'POS System'
    },
    {
      num: 'Project 03', title: 'Healthcare Appointment & Patient System', tech: ['Spring Boot', 'React Native', 'PostgreSQL'],
      prob: 'Clinics were managing appointments over phone calls and notebooks causing missed appointments, double bookings and inaccessible patient histories.',
      sol: 'A mobile first patient management system with appointment booking, medical records, doctor dashboards and patient notifications built on Spring Boot with a React Native mobile app.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80', alt: 'Healthcare System'
    },
    {
      num: 'Project 04', title: 'NGO Project & Beneficiary Tracker', tech: ['Django REST', 'React', 'PostgreSQL'],
      prob: 'An NGO was tracking beneficiaries and field activities across multiple regions using spreadsheets with no way to generate donor reports or measure impact efficiently.',
      sol: 'A web platform for field data collection, beneficiary registration, project milestone tracking and automated donor reporting reducing report generation time from days to minutes.',
      img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=900&q=80', alt: 'NGO Tracker'
    },
    {
      num: 'Project 05', title: 'Tanzania Job Board Platform', tech: ['Django', 'React', 'PostgreSQL'],
      prob: "Job seekers in Tanzania had no dedicated local platform relying on Facebook groups and generic international job boards that didn't understand the local market.",
      sol: 'A two sided marketplace with separate employer and job seeker portals, advanced filtering by location and sector and email alerts built specifically for the Tanzanian job market.',
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80', alt: 'Job Board'
    }
  ];

  return (
    <section id="projects" className="section-3">
      <div className="projects-header">
        <span className="eyebrow reveal" ref={addToRefs}>Selected Work</span>
        <h2 className="heading-xl reveal" ref={addToRefs}>Projects</h2>
        <p className="lead reveal" ref={addToRefs}>Real systems solving real problems for real clients.</p>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div className="project-item reveal" ref={addToRefs} key={i}>
            <div className="project-image-wrap">
              <img className="project-image" src={p.img} alt={p.alt} loading="lazy"/>
            </div>
            <div className="project-info-wrap">
              <span className="project-number">{p.num}</span>
              <h3 className="project-name">{p.title}</h3>
              <div className="project-tech-row">
                {p.tech.map((t, j) => <span key={j} className="tech-pill">{t}</span>)}
              </div>
              <p className="project-problem">The Challenge</p>
              <p className="project-desc">{p.prob}</p>
              <p className="project-solution-label">The Solution</p>
              <p className="project-solution">{p.sol}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;