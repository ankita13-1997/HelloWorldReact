import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';
import logo2 from './assets/logo1.jpg';


class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor(){
   
   super();
   this.state = {
    title : 'Hello From Ankita'
  }
  }

  //onclick function
  //event handling
   onClick = ($event) => {
     console.log("save button is clicked ",$event);
     window.open(this.url, "_blank");
   }
  
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
        <img src={logo2} onClick={this.onClick} alt="The bridgelabz logo:"></img>
        
      </div>
    );
  }
    
}
 
export default App;
