import React from "react";

function HostTile({host, handleDeletedHome}){
    const {full_name, email, phone_number, verified, homes, id} = host
    
    // function displayHomes(){
    //     console.log("displayed", host)  
    // }
 function handleDeletedClick(e){
    // fetch(`http://localhost:9292/hosts/${id}`,{
    //     method: "DELETE",
    // })
    // .then((data) => data.json())
    // .then(() => handleDeletedHome(home))
    console.log("deleted", e)
 }
 
 function handleUpdateClick(e){
//     fetch(`http://localhost:3001/hosts/${id}`,{
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
 
    const homesMap = homes.map((home) => {
        //console.log(home)
        return(
            <div key={home.id}>
            <h4>{home.title}</h4>
            <h5>Address : {home.location}</h5>
            <p> Description :{home.description}</p>
            <p>Type : {home.category} </p>
            <p>Price: ${home.price}</p>
            <p>Capacity: {home.guest_capacity}</p>
            <button>Update Home Listing</button>
            <button onClick={handleDeletedClick}>Delete Home</button>
            </div>
    )} )
   

    return(
        <div >
            <h2> Name: {full_name}</h2>
            <h2> Email: {email}</h2>
            <h2> Phone Number: {phone_number} </h2>
            <h2> Verified Host : {verified.toString()} </h2>
              <h3>Homes</h3>
                {homesMap}
            
        </div>
    )
}

export default HostTile