import React from "react";

function HomeTile ({home, handleDeletedHome, handleUpdatedHome}){
    const {title, category, description, price, hostid, location} = home
   
     //function handleDeletedClick(){
        //     fetch(`http://localhost:9292/homes/${id}`,{
        //         method: "DELETE",
        //     })
        //     .then(handleDeletedHome(id))
        //     // .then(()=> {
        
        //     // })
            
        //  }
         
        // function handleUpdateClick(e){
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
        //console.log("updated", e)}
            
    
    return (
        <div>
            <h4>{title}</h4>
            <h5>Address : {location}</h5>
            <p> Description :{description}</p>
            <p>Type : {category} </p>
            <p>Price: ${price}</p>
            {/* <button onClick={handleDeletedClick}>Update Home</button>
            <button onClick={handleUpdateClick}>Delete Home</button>
             */}
        </div>
    )
}

export default HomeTile