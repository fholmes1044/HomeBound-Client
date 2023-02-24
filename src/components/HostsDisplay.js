import React, {useState} from "react";

import NewHostForm from "./NewHostForm"
import{
    BrowserRouter as Router, 
    Link,
    Route, 
    useRouteMatch,
    useParams,
    Switch
} from 'react-router-dom'


function HostsDisplay({allHosts, setAllHosts, handleDeletedHome, addNewHost}){
    
const {path, url} = useRouteMatch()
   // console.log(url)
    const hostsMap = allHosts.map((host) => {
        return (
            <div>
                
                <li key={host.id}>
                    <Link to={`${url}/${host.id}`}>{host.full_name}</Link>
                </li>
                

                <hr />
                 
            </div>

            )
    })


    return (
        <>
        <NewHostForm addNewHost={addNewHost}/>
        <ul>
       {hostsMap}
        </ul>
       </>
    )

}

export default HostsDisplay