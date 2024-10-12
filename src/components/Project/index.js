import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

// Import images
import todoListImage from '../../assets/projects/todo-list.jpg';
import ecommerceBackendImage from '../../assets/projects/e-commerce backend.jpg';
import passwordGeneratorImage from '../../assets/projects/password-generator.jpg';
import weatherForcastImage from '../../assets/projects/weather-forcast.jpg';
import calculatorImage from '../../assets/projects/calculator.jpg';

function Project({ project }) {

  const { name, repo, link, description } = project;

  // Map project names to the respective imported images
  const projectImages = {
    'todo-list': todoListImage,
    'e-commerce backend': ecommerceBackendImage,
    'password-generator': passwordGeneratorImage,
    'weather-forcast': weatherForcastImage,
    'calculator': calculatorImage
  };

  return (
    <div className="project" key={name}>
      <img
        src={projectImages[name]} // Use mapped image here
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
