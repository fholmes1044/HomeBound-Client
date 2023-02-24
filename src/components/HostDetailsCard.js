import React from "react";
import NewHomeForm from "./NewHomeForm"
import{
    useParams,  
} from 'react-router-dom'

function HostDetailsCard({allHosts, addNewHome}){
    const {hostId} = useParams()
    const id = parseInt(hostId)
    if(allHosts.length > 0){
      const currentHost = allHosts.find((host) => host.id === id )
        return(
            <div>
                <NewHomeForm  addNewHome={addNewHome} host={currentHost}/> 
                HOST DETAILS
                <h2>{currentHost.full_name}</h2> 
            </div>
        )  
    }else{
        return(
            <h2>Loading...</h2>
        )
    }
    
}

export default HostDetailsCard