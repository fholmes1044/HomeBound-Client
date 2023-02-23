import React from "react";
import HostTile from "./HostTile";

function HostDisplay({allHosts, setAllHosts, handleDeletedHome}){
    //console.log("ALL", allHosts)

    function displayHostHomes(e){
        console.log("CLICKED",e.target.innerHTML)
    fetch("http://localhost:9292/hosts/:id")
     .then((data)=> data.json())
     .then((hosts) => {
      setAllHosts(hosts)
      
     })
    }
    const hostMap = allHosts.map((host) => {
        return (
            <div onClick={displayHostHomes}>
            <HostTile key = {host.id} host={host}  handleDeletedHome={handleDeletedHome}/>
            </div> 
            )
    })

    return (
       hostMap
    )

}

export default HostDisplay