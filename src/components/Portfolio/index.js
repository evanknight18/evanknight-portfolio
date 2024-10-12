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
      description: 'Express.js/Sequelize/MySQL/Insomnia',
      link: "https://drive.google.com/file/d/1fVoYr0Blaa4DQ7-AbMnf8GrEcewaw4qP/view",
      repo: "https://github.com/evanknight18/ecommerce-backend"
    },
    {
      name: 'password-generator',
      description: 'JavaScript/HTML/CSS',
      link: "https://evanknight18.github.io/Password-Generator/",
      repo: "https://github.com/evanknight18/Password-Generator"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/TailwindCSS/API',
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
