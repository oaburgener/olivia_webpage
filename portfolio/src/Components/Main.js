import React, { Component } from 'react';
import '../styles/Main.css';

class Main extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='main_holder'>
          <div className='main'></div>
      </div>
    )
  }
}

export default Main;
