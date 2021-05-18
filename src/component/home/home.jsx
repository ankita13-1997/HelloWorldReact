//import logo from './logo.svg';
import './home.css';


import React, { Component } from 'react';
import logo3 from '../assets/logo.png'


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
      <div className="mainColoumn">
        <div className="headingColoumn">
         <b>HELLO {this.state.userName} FROM BRIDGELABZ</b>
        </div>
        <div>
         <input onChange ={this.onNameChange}/>
         <span className="error-output">{this.state.nameError}</span>
        </div>
         <div className="logoClass">
            <img src={logo3} onClick={this.onClick} alt="The bridgelabz logo:" height="150px" width="150px"/> 
         </div>
      </div>
      
      </div>
    );
  }
    
}
 
export default App;
