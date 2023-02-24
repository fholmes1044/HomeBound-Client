import React, {useState} from "react";
import HostTile from "./HostTile";
import{
    BrowserRouter as Router, 
    Link,
    Route, useRouteMatch
} from 'react-router-dom'

function HostsDisplay({allHosts, setAllHosts, handleDeletedHome}){
    //console.log("ALL", allHosts)
const [selectedValue, setSelectedValue] = useState(false)
    function displayHostHomes(e){
        //console.log("CLICKED",e.target.innerHTML)
    // fetch("http://localhost:9292/hosts/:id")
    //  .then((data)=> data.json())
    //  .then((hosts) => {
    //   setAllHosts(hosts)
      
    //  })
    }
const {path, url} = useRouteMatch()
    console.log(url)
    const hostsMap = allHosts.map((host) => {
        console.log(host)
        return (
            <div>
                <ul>
                <li key={host.id}>
                    <Link to={`${url}/${host.id}`}>{host.full_name}</Link>
                </li>
                </ul>
                <Route path={`${path}/${host.id}`}>
                    <HostsDisplay />
                </Route>
            </div>
            // <div onClick={displayHostHomes}>
            // <HostTile key = {host.id} host={host}  handleDeletedHome={handleDeletedHome} setSelectedValue={setSelectedValue}/>
            // </div> 
            )
    })

    return (
       hostsMap
    )

}

export default HostsDisplay