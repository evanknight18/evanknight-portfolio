import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'crypt-keeper',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
