/**import logo from './logo.svg';**/
//import './App.css';
import Home from './component/home/home';

import React, { Component } from 'react';


import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
class App extends React.Component{
  
  render() {
    return( 
    
    <div className="app-main">
     <Router>
      <Switch>
        <Route path="">
          <Home />
        </Route>
      </Switch>
    </Router>
   
  </div>
  );
   
    
  
  }
    
}
 
export default App;
