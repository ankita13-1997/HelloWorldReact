import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import logo2 from './assets/logo1.jpg';

class App extends React.Component{

  constructor(){
   super();
   this.state = {
    title : "Hello From Ankita"
  }
  }
  
  render() {
    return (
      <div>
        <img src={logo2} alt="my logo"></img>
        <h1> {this.state.title} </h1>
      </div>
    );
  }
    
}
 
export default App;
