 import React from "react";

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
        <div id="hostdisplay">
        <img src="https://i.imgur.com/c8OXgaV.png" id="key"/>
        <NewHostForm addNewHost={addNewHost}/>
        <ul>
       {hostsMap}
        </ul>
       </div>
    )

}

export default HostsDisplay