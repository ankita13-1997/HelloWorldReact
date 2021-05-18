//import logo from './logo.svg';
import './home.css';


import React, { Component } from 'react';
import logo3 from '../assets/party.jpg'


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
      <div className="bodeShaping">
      <div className="mainColoumn">
        <div className="headingColoumn">
         <b>Hello {this.state.userName} from dawn-ball ... !!!</b>
        </div>
        <div>
         <input onChange ={this.onNameChange}/>
         <span className="error-output">{this.state.nameError}</span>
        </div>
         <div className="logoClass">
            <img src={logo3} onClick={this.onClick} alt="The bridgelabz logo:" height="180px" width="180px"/> 
         </div>

         <div className="listing">
         <p>Performance of sole peace</p> 
            <ul>
                <li>professional artist</li>
                <li>single ball</li>
                <li>couple ball</li>

            </ul>
         </div>
          
          <div className="description">
            <p>
              <div className="rowStyle">
                Join us at the beutiful moment and feel all the sensational performance with ....!!!
              </div>
            </p>

            <p>Cordianting you to the program of best and lovely performance of the evening, with the honoured chief
               guest Mr and Mrs.Jonathan, arenowed Bussinessmaen and global dancer Miss.claria,
               Couple and single ball can be presnt in fieta with the lavisious dinner !!!! come and enjoy a night with open stars.
                
                awaiting all the peoples of indiana,

                warm regards,
                Presidency Cuisine.
            </p>

          </div>
      </div>
      
      </div>
    );
  }
    
}
 
export default App;
