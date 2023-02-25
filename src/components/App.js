//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import HostsDisplay from "./HostsDisplay"
import NewHostForm from "./NewHostForm"
import NavBar from "./NavBar"
import HomePage from "./HomePage";
import HostDetailsCard from "./HostDetailsCard";


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

  function addNewHost(newHost){
    const updatedHostList = allHosts.map((host) =>{
      return {...host, newHost}
    })
   setAllHosts(updatedHostList)
  }

 console.log(allHosts)
  function handleDeletedHome(home){
    const map = allHosts.map((host) =>{
      if(host.id == home.host_id){
            const updatedHomes = host.homes.filter((listedhome) => listedhome.id !== home.id)
            const mapHomes = updatedHomes.map((mappedHome) =>{ 
              return(mappedHome)})
            return  {...host,homes:[mapHomes]}
    }
    else return{
      host
    }
    })

    // setAllHosts(map)
    //console.log(map)
    //  const findHost = allHosts.find((host) => host.id == home.host_id);
    // // console.log("UP",updatedHomes.homes)
    // const updatedHomes = findHost.homes.filter((listedhome) => listedhome.id !== home.id)
    // console.log(updatedHomes)

        //setAllHosts(updatedHomes);
    }
  
    function handleUpdatedHome(){

    }

  return (
    <div>
      <h1 id="h1">App</h1>
      <h2>Click a host to see their homes</h2>
       <NavBar/>
       <Switch>
        <Route exact path ="/hosts">
      
            {/* <NewHostForm/> */}
            <HostsDisplay  setAllHostes = {setAllHosts} addNewHost={addNewHost} allHosts={allHosts} handleDeletedHome={handleDeletedHome} />
        </Route>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route path = "/hosts/:hostId">
          <HostDetailsCard handleDeletedHome={handleDeletedHome} handleUpdatedHome={handleUpdatedHome}allHosts={allHosts} addNewHome={addNewHome}/>

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
