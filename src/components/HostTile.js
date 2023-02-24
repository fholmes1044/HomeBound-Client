import React, {useState, useEffect} from "react";
import{
    BrowserRouter as Router, 
    Link,
    Route
} from 'react-router-dom'

function HostTile({host, handleDeletedHome, setSelectedValue}){
    const {full_name, email, phone_number, verified, homes, id} = host
    const [selectedHost, setSelectedHost] = useState(null)
    // function displayHomes(){
    //     console.log("displayed", host)  
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:9292/hosts/${id}`)
    //       .then((r) => r.json())
    //       .then((clickedHost) => {
    //         setSelectedHost(clickedHost)}); 
    //   }, [id]);
    
      //console.log("selected", selectedHost)


    function displaySelectedHost(){
        
        //console.log(selectedHost, "")
    }

 function handleDeletedClick(){
    fetch(`http://localhost:9292/homes/${id}`,{
        method: "DELETE",
    })
    .then(handleDeletedHome(id))
    // .then(()=> {

    // })
    
 }
 
 function handleUpdateClick(e){
//     fetch(`http://localhost:3001/homes/${id}`,{
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//               },
//             body: JSON.stringify({
//                 price: !recommendStatus,
//               }),
//         })
//         .then((data) => data.json())
//         .then((updatedHome) => handleUpdatedHome(updatedHome))
console.log("updated", e)
    }
 
    //const homesMap = homes.map((home) => {
        //console.log(home)
        //if(selectedHost === null){
            // return(
    //         <div key={home.id} onClick={displaySelectedHost}>
    //         <h4>{home.title}</h4>
    //         <h5>Address : {home.location}</h5>
    //         <p> Description :{home.description}</p>
    //         <p>Type : {home.category} </p>
    //         <p>Price: ${home.price}</p>
    //         <p>Capacity: {home.guest_capacity}</p>
    //         <button>Update Home Listing</button>
    //         <button onClick={handleDeletedClick}>Delete Home</button>
    //         </div>
    // )
        //}

        // else {
           // return selectedHost
        //}
    //     return(
    //         <div key={home.id} onClick={displaySelectedHost}>
    //         <h4>{home.title}</h4>
    //         <h5>Address : {home.location}</h5>
    //         <p> Description :{home.description}</p>
    //         <p>Type : {home.category} </p>
    //         <p>Price: ${home.price}</p>
    //         <p>Capacity: {home.guest_capacity}</p>
    //         <button onClick = {setSelectedValue}>Select</button>
    //         <button>Update Home Listing</button>
    //         <button onClick={handleDeletedClick}>Delete Home</button>
    //         </div>
    // )} )
   function showHostDetails(){
    
   }

    return(
        <div >
            
            <h2><Link to={`/hosts/${id}`}></Link> Name: {full_name}</h2>
            <h4> Email: {email}</h4>
            <h4> Phone Number: {phone_number} </h4>
            <h5> Verified Host : {verified.toString()} </h5>
            <button onClick={showHostDetails}> Select Host</button>
              {/* <h3>Homes</h3> */}
                {/* /*{homesMap}*/ }  
        </div>
    )
}

export default HostTile