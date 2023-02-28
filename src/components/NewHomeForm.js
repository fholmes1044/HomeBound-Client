import React, {useState} from "react";

function NewHomeForm({addNewHome, host}){
const [newHomeData, setNewHomeData] = useState({
    title: "",
    location: "",
    category: "",
    description: "",
    price: "",
    guest_capacity:""
})

function handleHomeInput(e){
    setNewHomeData({
        ...newHomeData,
        [e.target.name] : e.target.value
    })
}
function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/homes", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            ...newHomeData, 
            host_id: host.id
        }),
    })
    .then((data)=> data.json())
    .then((newHome) =>{
        setNewHomeData({
            title: "",
            location: "",
            category: "",
            description: "",
            price: "",
            guest_capacity:"" , 
            host_id: ""
        })
          addNewHome(newHome)
  
    })
    //alert("Your new Home has been added")
    setNewHomeData({
        title: "",
        location: "",
        category: "",
        description: "",
        price: "",
        guest_capacity:"" , 
        host_id: ""
                })

    document.getElementById("Title").value = ""
    document.getElementById("Location").value = ""
    document.getElementById("Category").value = ""
    document.getElementById("Description").value = ""
    document.getElementById("Price").value = ""
    document.getElementById("Capacity").value = ""

}


 return(
    <div>
        <h2>Add New Home</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" id = "Title" name = "title" placeholder=" Home Title" onChange={handleHomeInput} />
            <input type="text" id = "Location" name = "location" placeholder="Location Address" onChange={handleHomeInput}/>
            <input type="text" id = "Category" name = "category" placeholder=" Housing Category" onChange={handleHomeInput}/>
            <input type="text"  id = "Description" name = "description" placeholder="Home Description " onChange={handleHomeInput}/>
            <input type="text" id = "Price" name = "price" placeholder="Price" onChange={handleHomeInput}/>
            <input type="text" id = "Capacity" name = "guest_capacity" placeholder="Guest Capacity" onChange={handleHomeInput}/>
            <br/>
            <input type="submit"  name="submit"  value="Add New Home"  className="submit" />  
        </form>
        </div>
    )

}

export default NewHomeForm