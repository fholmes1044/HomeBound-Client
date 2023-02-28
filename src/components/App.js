//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import HostsDisplay from "./HostsDisplay"
import NavBar from "./NavBar"
import HomePage from "./HomePage";
import HostDetailsCard from "./HostDetailsCard";


function App() {
const[allHosts, setAllHosts] = useState([])
const[updatedHomeId, setUpdatedHomeId] = useState("")



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

  function addNewHost(newHost){
    const updatedHostList = allHosts.map((host) =>{
      return (
        {...host, newHost}
        )
    })
   setAllHosts(updatedHostList)
  }

  function handleDeletedHost(id){
    const remainingHost = allHosts.filter((host) => host.id !== id)
    setAllHosts(remainingHost)
  }

 
  function handleDeletedHome(home){
    const findHost = allHosts.find((host) => host.id == home.host_id);
    const updatedHomes = findHost.homes.filter((listedhome) => listedhome.id !== home.id)
    const updatedNewHosts = allHosts.map((host) =>{
      if(findHost){
          return {...host,homes:[...updatedHomes]}
      } else {
        return host
      }
    })
        setAllHosts(updatedNewHosts);
    }
  
    function handleUpdatedHome(updatedHome){
      const selectHost = allHosts.find((host) => host.id === updatedHome.host_id);
      const updatedHomeList = selectHost.homes.map((home) => {
        if(home.id === updatedHome.id){
          return updatedHome
        }
        else{
          return home
        }
      })
      const updatedHost = allHosts.map((host) =>{
        if(selectHost){
          return {...host, homes:[...updatedHomeList]}
        }
        else {
          return  host
        }
      })
    
          setAllHosts(updatedHost)
     }

  return (
    <div>
      <h1 id="h1">App</h1>
      <h2>Click a host to see their homes</h2>
       <NavBar/>
       <Switch>
        <Route exact path ="/hosts">
            <HostsDisplay  setAllHostes = {setAllHosts} addNewHost={addNewHost} allHosts={allHosts} handleDeletedHome={handleDeletedHome} />
        </Route>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route path = "/hosts/:hostId">
          <HostDetailsCard updatedHomeId={updatedHomeId} setUpdatedHomeId={setUpdatedHomeId} handleDeletedHome={handleDeletedHome} handleDeletedHost={handleDeletedHost}handleUpdatedHome={handleUpdatedHome}allHosts={allHosts} addNewHome={addNewHome}/>

        </Route> 
      </Switch>
  
    </div>
  )
 
}

export default App;
