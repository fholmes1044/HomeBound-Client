//import logo from './logo.svg';
//import './App.css';
import React from "react"
import { Switch, Route } from "react-router-dom";
import HomesDisplay from "./HomesDisplay"
import NewHomeForm from "./NewHomeForm"
import NewHostForm from "./NewHostForm"
import NavBar from "./NavBar"
import HomePage from "./HomePage";

function App() {
  return (
    <div>
      <h1 id="h1">App</h1>
      {/* <NavBar/>
      <Switch>
      
        <Route exact path ="/homes">
            <HomesDisplay/>
        </Route>

        <Route exact path ="/">
          <HomePage />
          <NewHostForm/>
        </Route>
        
      </Switch>
      <NewHomeForm/> */}
      
    <HomesDisplay/>
    <HomePage/>
    <NewHomeForm/>
    <NewHostForm/>
      
  
    </div>
  )
 
}

export default App;
