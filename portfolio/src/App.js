import React, { Component } from 'react';
import './App.css';
import projects from './index.js'
import Header from './Components/Header';
import Main  from './Components/Main';
import Project  from './Components/Project';


class App extends Component {
  constructor(props){
     super(props)
     this.state = {
       projects: projects,
     }
   }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Project />
      </div>
    );
  }
}

export default App;
