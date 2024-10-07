import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'todo-list',
      description: 'MERN Stack',
      link: "https://todo-list-9-b26899755baa.herokuapp.com/",
      repo: "https://github.com/evanknight18/todo-list"
    },
    {
      name: 'e-commerce backend',
      description: 'Express.js, Sequelize, MySQL, Insomnia',
      link: "https://github.com/evanknight18/ecommerce-backend",
      repo: "https://github.com/evanknight18/ecommerce-backend"
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
