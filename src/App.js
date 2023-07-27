import React from 'react';
import './App.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    link: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    link: 'https://github.com/your-username/project2',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Ali Sajjad</h1>
        <p>Welcome to my portfolio showcasing some of my projects.</p>
      </header>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
