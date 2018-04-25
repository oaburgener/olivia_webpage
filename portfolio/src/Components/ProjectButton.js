import React, { Component } from 'react';
import '../styles/Project.css';


class ProjectButton extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='project-button'>
        <button>Projects</button>
      </div>
    )
  }
}

export default ProjectButton;
