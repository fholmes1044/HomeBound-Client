import React, {useState} from "react";

function NewHomeForm({setAllHomes, allHomes}){
const [newHomeData, setNewHomeData] = useState({
    title: "",
    location: "",
    category: "",
    description: "",
    price: "",
    capacity:""

})

function handleHomeInput(e){
    setNewHomeData({
        ...newHomeData,
        [e.target.name] : e.target.value
    })
}
function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/hosts", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newHomeData),
    })
    .then((data)=> data.json())
    .then((newHome) =>{
        setNewHomeData({
            title: "",
            location: "",
            category: "",
            description: "",
            price: "",
            capacity:"" 
        })
        setAllHomes([...allHomes, newHome])
    })
    alert("Your new Home has been added")
}
//console.log(newHomeData)
 return(
    <div>
        <h2>Add New Home</h2>
        <form>
            <input type="text" name = "title" placeholder=" Home Title" onChange={handleHomeInput} />
            <input type="text" name = "location" placeholder="Location Address" onChange={handleHomeInput}/>
            <input type="text" name = "category" placeholder=" Housing Category" onChange={handleHomeInput}/>
            <input type="text" name = "description" placeholder="Home Description " onChange={handleHomeInput}/>
            <input type="text" name = "price" placeholder="Price" onChange={handleHomeInput}/>
            <input type="text" name = "capacity" placeholder="Guest Capacity" onChange={handleHomeInput}/>
            <input type="submit"  name="submit"  value="Add New Home"  className="submit" onChange={handleHomeInput}/>  
        </form>
        </div>
    )

}

export default NewHomeForm