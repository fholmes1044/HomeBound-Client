//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import HomesDisplay from "./HomesDisplay"
import HostDisplay from "./HostDisplay"
import NewHomeForm from "./NewHomeForm"
import NewHostForm from "./NewHostForm"
import NavBar from "./NavBar"
import HomePage from "./HomePage";



function App() {
const[allHosts, setAllHosts] = useState([])
const[allHomes, setAllHomes] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/hosts")
     .then((data)=> data.json())
     .then((hosts) => {
      setAllHosts(hosts)
     })
  }, [])

  

  return (
    <div>
      <h1 id="h1">App</h1>
      <h2>Click a host to see their homes</h2>
       <NavBar/>
      <Switch>
      
        <Route exact path ="/hosts">
            <HostDisplay allHosts={allHosts} />
        </Route>

        <Route exact path ="/">
          <HomePage />
          <NewHostForm/>
        </Route>
        
      </Switch>
      <NewHomeForm/>
      
    {/* <HomesDisplay />
    <HomePage/>
    <NewHomeForm  setAllHomes= {setAllHomes} allHomes={allHomes}/>
    <NewHostForm/>
    <HostDisplay allHosts={allHosts} /> */}
      
  
    </div>
  )
 
}

export default App;
