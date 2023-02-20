//import logo from './logo.svg';
//import './App.css';
import React from "react"
import HomesDisplay from "./HomesDisplay"
import HomeTile from "./HomeTile"
import NewHomeForm from "./NewHomeForm"

function App() {
  return (
    <div>
      <h1 id="h1">App</h1>
      <NewHomeForm/>
      <HomesDisplay/>
      <HomeTile/>
    </div>
  )
 
}

export default App;
