import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { content } from './index.js'
import Header from './Components/Header';
import Main  from './Components/Main';
import Project  from './Components/Project';
import ProjectButton  from './Components/ProjectButton';
import ProjectContainer  from './Components/ProjectContainer';


class App extends Component {
  constructor(props){
     super(props)
     this.state = {
       projects: content,
     }
   }
  render() {
    return (
      <Router>
        <div className="App">
<div>{console.log(this.state)}</div>
          <Route exact path="/" render={() => (
            <div className='main-container'>
              <Header />
              <Main />
              <ProjectButton />
            </div>
          )}/>

          <Route exact path="/projects" render={() => (
            <div className='project-container'>
              <ProjectContainer projects={this.state.projects} />
            </div>
          )}/>

        </div>
      </Router>
    )
  }
}

export default App;
