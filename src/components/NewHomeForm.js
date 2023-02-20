import React from "react";

function NewHomeForm(){

 return(
    <div>
        <h2>Add New Home</h2>
        <form>
            <input type="text" name = "title" placeholder=" Home Title" />
            <input type="text" name = "location" placeholder="Location Address" />
            <input type="text" name = "category" placeholder=" Housing Category" />
            <input type="text" name = "description" placeholder="Home Description " />
            <input type="text" name = "price" placeholder="Price" />
            <input type="text" name = "capacity" placeholder="Guest Capacity" />
            <input type="submit"  name="submit"  value="Add New Home"  className="submit"/>  
        </form>
        </div>
    )

}

export default NewHomeForm