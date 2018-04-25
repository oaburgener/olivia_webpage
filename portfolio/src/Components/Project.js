import React, { Component } from 'react';
import '../styles/Project.css';

const Project = ({project}) => {
  return (
    <div className='main_container'>
      <div className='project_header'>
        <h1>{project.name}</h1>
      </div>
      <div className='project_content'>
        <p>{project.summary}</p>
        {/* <ul>
          {project.tech.map(tech => (<li key={tech.id}>{tech}</li>))}
        </ul> */}
        <a href={project.repo}>GitHub Repository</a>
        <a href={project.link}>Live Link</a>
      </div>
    </div>
  )
}

export default Project;
