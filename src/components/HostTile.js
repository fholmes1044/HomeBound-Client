import React from "react";

function HostTile({host}){
    const {full_name, email, phone_number, address, verified, homes} = host
    console.log(host.verified)
    function displayHomes(){
        console.log("displayed", host)  
    }

    const homesMap = homes.map((home) => {
        return(
            <div key={home.id}>
            <h4>{home.title}</h4>
            <h5>Address : {home.location}</h5>
            <p> Description :{home.description}</p>
            <p>Type : {home.category} </p>
            <p>Price: ${home.price}</p>
            </div>
    )} )
   

    return(
        <div onClick={displayHomes}>
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