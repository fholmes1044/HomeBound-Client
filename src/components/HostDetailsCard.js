import React from "react";
import NewHomeForm from "./NewHomeForm"
import{ useParams} from 'react-router-dom'
import HomeTile from "./HomeTile";
import UpdateHomeForm from "./UpdateHomeForm";

function HostDetailsCard({allHosts,updatedHomeId, addNewHome, handleDeletedHost, handleDeletedHome, setUpdatedHomeId, handleUpdatedHome}){
    const {hostId} = useParams()
    const id = parseInt(hostId)
    if(allHosts.length > 0){
      const currentHost = allHosts.find((host) => host.id === id )
      const currentHostHomes = currentHost.homes.map((home) => {
          return ( 
            <HomeTile key={home.id} home={home} handleDeletedHome={handleDeletedHome} setUpdatedHomeId={setUpdatedHomeId} handleUpdatedHome={handleUpdatedHome}/>
            )
      })
   function deleteHost(){
       // console.log("Host",id)
        fetch(`http://localhost:9292/hosts/${id}`,{
                method: "DELETE",
            })
            .then(() => handleDeletedHost(id))

   }
        return(
            <div>
                <NewHomeForm  addNewHome={addNewHome} host={currentHost}/> 
                <UpdateHomeForm updatedHomeId={updatedHomeId} handleUpdatedHome={handleUpdatedHome}/>
                HOST DETAILS
                <h2>{currentHost.full_name}</h2> 
                <h3>Email: {currentHost.email}</h3>
                <h4>Phone Number: {currentHost.phone_number}</h4>
                <h5>Verified: {currentHost.verified.toString()}</h5>
                <button onClick={deleteHost}>Delete Host</button>
                 <hr/>
                <h4>Host's Homes</h4>
                    {currentHostHomes}
            
            </div>
        )  
    }else{
        return(
            <h2>Loading...</h2>
        )
    }
    
}

export default HostDetailsCard