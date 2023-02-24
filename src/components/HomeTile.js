import React from "react";

function HomeTile ({home}){
    const {title, category, description, price, hostid, location} = home
   

    
    return (
        <div>
            <h4>{title}</h4>
            <h5>Address : {location}</h5>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            <button>Update Home</button>
            <button>Delete Home</button>
            
        </div>
    )
}

export default HomeTile