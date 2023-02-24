import React, {useState} from "react";
import HostTile from "./HostTile";
import HostDetails from "./HostDetailsCard";
import NewHostForm from "./NewHostForm"
import{
    BrowserRouter as Router, 
    Link,
    Route, 
    useRouteMatch,
    useParams,
    Switch
} from 'react-router-dom'
import HostDetailsCard from "./HostDetailsCard";

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

    // const hostDetails = allHosts.map((host) =>{
    //     return (
    //     <HostDetailsCard key={host.id} host={host}/>
    //     )
    // })

    return (
        <>
        <NewHostForm/>
        <ul>
       {hostsMap}
        </ul>
       </>
    )

}

export default HostsDisplay