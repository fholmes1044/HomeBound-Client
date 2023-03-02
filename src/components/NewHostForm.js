import React, {useState} from "react";

function NewHostForm({addNewHost}){
const [newHostData, setNewHostData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    verified: ""
})


function handleHostInput(e){
setNewHostData({
    ...newHostData,
    [e.target.name]: e.target.value
})
}

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/hosts",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            ...newHostData,  
        }),
    })
    .then((data) => data.json())
    .then((newHost) =>{
        setNewHostData({
            full_name: "",
            email: "",
            phone_number: "",
            address: "",
            verified: ""
        })
        addNewHost(newHost)
       
    })
}
 return(
    <div>
        <h2>Add New Host</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={newHostData.full_name} name = "full_name" placeholder="First Name and Last Name" onChange={handleHostInput} />
            <input type="text" value={newHostData.email} name = "email" placeholder="Email" onChange={handleHostInput}  />
            <input type="text"  value={newHostData.phone_number} name = "phone_number" placeholder="Phone Number" onChange={handleHostInput} />
            <input type="text"  value={newHostData.address} name = "address" placeholder="Address" onChange={handleHostInput} />
            <input type="text" value={newHostData.verified} name = "verified" placeholder="Verified" onChange={handleHostInput} />
            <input type="submit"  name="submit"  value="Add New Host"  className="submit" onChange={handleHostInput} />  
        </form>
        </div>
    )

}

export default NewHostForm