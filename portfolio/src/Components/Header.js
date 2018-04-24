import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='header'>
        <header>
          <h1 className='header-name'>Olivia Burgener</h1>
        </header>
      </div>
    )
  }
}

export default Header;
