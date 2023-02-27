import React, {useState} from "react";


function HomeTile ({home, handleDeletedHome, setUpdatedHomeId}){
    const {title, category, description, price, id, location} = home

    
  
     function handleDeletedClick(){
            fetch(`http://localhost:9292/homes/${id}`,{
                method: "DELETE",
            })
            .then(() => handleDeletedHome(home))
            
         }
         
         function handleUpdateClick(){
            console.log("id")
            setUpdatedHomeId(id)
        
    }
            
    
    return (
        <div>
            <h4>{title}</h4>
            <h5>Address : {location}</h5>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            <button onClick={handleDeletedClick}>Delete Home</button>
            <br/>
            <button onClick={handleUpdateClick}>Update Home</button>    
        </div>
    )
}

export default HomeTile