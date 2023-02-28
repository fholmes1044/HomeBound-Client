import React, {useState} from "react"

function UpdateHomeForm({updatedHomeId, handleUpdatedHome, setShowForm}){
    const [updatedData, setUpdatedData] = useState({
        title: "",
        description: "",
        price: ""
    })

    function handleUpdatedInput(e){
        setUpdatedData({
            ...updatedData,
            [e.target.name]: e.target.value
        })
    }

    function handleUpdateSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/homes/${updatedHomeId}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({
                        title: updatedData.title,
                        description: updatedData.description,
                        price: updatedData.price
                      }),
                })
                .then((data) => data.json())
                .then((updatedHome) => {
                    handleUpdatedHome(updatedHome)
                    setShowForm(false)
                })

                // setUpdatedData({
                //     title: "",
                //     description: "",
                //     price: ""
                // })
    }
    return(
        <div>
        <h2>Update Home</h2>
        <form onSubmit={handleUpdateSubmit}>
            <input type="text" name = "title" placeholder=" Home Title" onChange={handleUpdatedInput} />
            <input type="text" name = "description" placeholder="Home Description " onChange={handleUpdatedInput}/>
            <input type="text" name = "price" placeholder="Price" onChange={handleUpdatedInput}/>
            <input type="submit"  name="submit"  value="Update Home"  className="submit" />  
        </form>
        </div>
    )
}

export default  UpdateHomeForm