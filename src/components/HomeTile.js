import React, {useState} from "react";
import UpdateHomeForm from "./UpdateHomeForm";


function HomeTile ({home, handleDeletedHome, handleUpdatedHome}){
    
    const {title, category, description, price, id, location,guest_capacity} = home
    const [showForm , setShowForm] = useState(false)
    

     function handleDeletedClick(){
            fetch(`http://localhost:9292/homes/${id}`,{
                method: "DELETE",
            })
            .then(() => handleDeletedHome(home))
         }
         
    function handleUpdateClick(){
        setShowForm(true)
    }
            
    
    return (
        <div>
            <h4>{title}</h4>
            <h5>Address : {location}</h5>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            <p>Guest Capacity:{guest_capacity} </p>
            <button onClick={handleDeletedClick}>Delete Home</button>
            <br/>
            {showForm ? <UpdateHomeForm setShowForm={setShowForm} updatedHomeId={id} handleUpdatedHome={handleUpdatedHome}/> : <button onClick={handleUpdateClick}>Update Home</button>} 
        </div>
    )
}

export default HomeTile