//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import HostDisplay from "./HostDisplay"
import NewHomeForm from "./NewHomeForm"
import NewHostForm from "./NewHostForm"
import NavBar from "./NavBar"
import HomePage from "./HomePage";



function App() {
const[allHosts, setAllHosts] = useState([])


  useEffect(()=>{
    fetch("http://localhost:9292/hosts")
     .then((data)=> data.json())
     .then((hosts) => {
      setAllHosts(hosts)
      
     })
  }, [])


//console.log("HOSTs", allHosts)
  function addNewHome(newHome){
    const updatedHosts = allHosts.map((host) =>{
      if(host.id === newHome.host_id){
          return {...host,homes:[...host.homes, newHome]}
      } else {
        return host
      }
    })

    

    setAllHosts(updatedHosts)
    //console.log("updted", updatedHosts)
  }
  
 //pass handleDeletedHome= {handleDeletedHome}
  // function handleDeletedHome(host){
//     const updatedHomes = allHosts.filter((host) => host.homes.id !== deletedHome.id);
    //     setAllHosts(updatedHomes);
    // }
  

  return (
    <div>
      <h1 id="h1">App</h1>
      <h2>Click a host to see their homes</h2>
       <NavBar/>
      <Switch>
      
        <Route exact path ="/hosts">
            <NewHomeForm  addNewHome={addNewHome}/>
            <HostDisplay allHosts={allHosts} />

        </Route>

        <Route exact path ="/">
          <HomePage />
          <NewHostForm/>
        </Route>
        
      </Switch>
      
      
    {/* <HomesDisplay />
    <HomePage/>
    <NewHomeForm  setAllHomes= {setAllHomes} allHomes={allHomes}/>
    <NewHostForm/>
    <HostDisplay allHosts={allHosts} /> */}
      
  
    </div>
  )
 
}

export default App;
