import React from "react";

function NewHostForm(){

 return(
    <div>
        <h2>Add New Host</h2>
        <form>
            <input type="text" name = "fullname" placeholder="First Name and Last Name" />
            <input type="text" name = "email" placeholder="Email" />
            <input type="text" name = "phone" placeholder="Phone Number" />
            <input type="text" name = "address" placeholder="Address" />
            <input type="text" name = "verfied" placeholder="Verified" />
            <input type="submit"  name="submit"  value="Add New Host"  className="submit"/>  
        </form>
        </div>
    )

}

export default NewHostForm