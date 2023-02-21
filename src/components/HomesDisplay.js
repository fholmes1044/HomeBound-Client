import React from "react";
import HomeTile from "./HomeTile";

function HomesDisplay ({allHomes}){
    const homesMap = allHomes.map((home) =>{
        return (
            <HomeTile key={home.id} home={home}/>
        )
    })
    //console.log(allHomes)
    console.log(homesMap)
    return (
        <div>
            
                all homes 
                {homesMap}
            
        </div>
    )
}

export default HomesDisplay