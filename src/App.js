import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';
import logo2 from './assets/logo1.jpg';


class App extends React.Component{
  url = 'https://www.bridgelabz.com/' 
  constructor(){
   
   super();
   this.state = {
     userName: ''
     
  }
  }

  //onclick function
  //event handling
   onClick = ($event) => {
     console.log("save button is clicked ",$event);
     window.open(this.url, "_blank");
   }
  
   onNameChange = (event) => {
     console.log("save button is clicked :" , event.target.value); 
     const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s{2,}$]');
     this.setState({userName: event.target.value})
     if (nameRegex.test(event.target.value)){
       this.setState({nameError: ''})
     }

     else{
       this.setState({nameError: 'name is incorrect'})
     }

   }
  render() {
    return (
      <div>
      <div>
        <h1>HELLO {this.state.userName} FROM BRIDGELABZ </h1>
         <h1> <img src={logo2} onClick={this.onClick} alt="The bridgelabz logo:"/> </h1>
      </div>
      <div>
         <input onChange ={this.onNameChange}/>
         <span className="error-output">{this.state.nameError}</span>

      </div>
      </div>
    );
  }
    
}
 
export default App;
