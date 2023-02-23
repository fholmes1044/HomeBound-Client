import React, {useState} from "react";

function NewHomeForm({addNewHome}){
const [newHomeData, setNewHomeData] = useState({
    title: "",
    location: "",
    category: "",
    description: "",
    price: "",
    guest_capacity:"",
    host_id: ""

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
            guest_capacity:"" , 
            host_id: ""
        })
          addNewHome(newHome)
  
    })
    //alert("Your new Home has been added")
    
}
//console.log(newHomeData)
//console.log(allHomes)
 return(
    <div>
        <h2>Add New Home</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name = "title" placeholder=" Home Title" onChange={handleHomeInput} />
            <input type="text" name = "location" placeholder="Location Address" onChange={handleHomeInput}/>
            <input type="text" name = "category" placeholder=" Housing Category" onChange={handleHomeInput}/>
            <input type="text" name = "description" placeholder="Home Description " onChange={handleHomeInput}/>
            <input type="text" name = "price" placeholder="Price" onChange={handleHomeInput}/>
            <input type="text" name = "guest_capacity" placeholder="Guest Capacity" onChange={handleHomeInput}/>
            <br/>
            <label> Select Host Name </label>
                <select name = "host_id" id = "host_id" onChange={handleHomeInput}>
                    <option value = "1" > Ashley Jones </option>
                    <option value = "2"> Joseph Banks </option>
                    <option value="3">Lola James</option>
                </select>
            
            <input type="submit"  name="submit"  value="Add New Home"  className="submit" />  
        </form>
        </div>
    )

}

export default NewHomeForm