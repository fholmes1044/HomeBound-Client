import React from "react";

function HomesTile ({home}){
    const {title, category, description, price, hostid, location} = home
    //console.log(home)
    return (
        <div>
            <h2>{title}</h2>
            <h4>Address : {location}</h4>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            <button>Delete Home</button>
        </div>
    )
}

export default HomesTile