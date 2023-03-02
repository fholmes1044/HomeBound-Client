 import React, {useState} from "react";

import NewHostForm from "./NewHostForm"
import{
    BrowserRouter as  Router,
    Link,  
    useRouteMatch
} from 'react-router-dom'


function HostsDisplay({allHosts, addNewHost}){
    
    const {url} = useRouteMatch()

    const hostsMap = allHosts.map((host) => {
        return (
            <div>
                
                <li key={host.id}>
                    <Link to={`${url}/${host.id}`}>{host.full_name}</Link>
                    <br/>   
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