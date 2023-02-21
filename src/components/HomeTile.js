import React from "react";

function HomesTile ({home}){
    const {title, category, description, price, hostid, location} = home
   

    
    return (
        <div>
            <h2>{title}</h2>
            <h4>Address : {location}</h4>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            <ul>
                <li>h</li>
            
            </ul>
            <button>Delete Home</button>
            
        </div>
    )
}

export default HomesTile