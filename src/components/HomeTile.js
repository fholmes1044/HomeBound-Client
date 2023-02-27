import React, {useState} from "react";
import UpdateHomeForm from "./UpdateHomeForm";

function HomeTile ({home, handleDeletedHome, handleUpdatedHome}){
    const {title, category, description, price, id, location} = home

    // console.log("title", title)
  
     function handleDeletedClick(){
            fetch(`http://localhost:9292/homes/${id}`,{
                method: "DELETE",
            })
            .then(() => handleDeletedHome(home))
            
         }
         
         function handleUpdateClick(){
            fetch(`http://localhost:3001/homes/${id}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        price: price
                      }),
                })
                .then((data) => data.json())
                .then((updatedHome) => handleUpdatedHome(updatedHome))
        console.log("updated", id)}
            
    
    return (
        <div>
            <h4>{title}</h4>
            <h5>Address : {location}</h5>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            <button onClick={handleDeletedClick}>Delete Home</button>
            <button onClick={handleUpdateClick}>Update Home</button>    
        </div>
    )
}

export default HomeTile