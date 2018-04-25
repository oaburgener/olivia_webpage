import React, { Component } from 'react';
import '../styles/ProjectButton.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class ProjectButton extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='project-button'>
        <Link to='/projects'>
          <button className='project_button'>Projects</button>
        </Link>
      </div>
    )
  }
}

export default ProjectButton;
