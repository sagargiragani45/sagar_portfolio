import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Global Finance Service',
      description: 'Automated CI/CD pipelines and managed Azure infrastructure for PwC.',
      technologies: ['Azure', 'PowerShell', 'ARM Templates'],
    },
    {
      title: 'PepsiCo',
      description: 'Managed Azure IaaS and PaaS services for PepsiCo.',
      technologies: ['Azure', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Weather App',
      description:
        'A modern, user-friendly weather app that delivers real-time updates and detailed forecasts, all wrapped in a sleek design.',
      technologies: ['React.js', 'Node.js', 'Weather API'],
    },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <animated.div style={fadeIn} className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </animated.div>
    </section>
  );
};

export default Projects;