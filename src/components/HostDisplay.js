import React from "react";
import HostTile from "./HostTile";

function HostDisplay({allHosts}){
    console.log("ALL", allHosts)
    const hostMap = allHosts.map((host) => {
        return (
            <HostTile key = {host.id} host={host} />
        )
    })
//pass handleDeletedHome= {handleDeletedHome}
    // function handleDeletedHome(deletedHome){
    //     const updatedHomes = allHosts.filter((hosts) => hosts.homes.id !== deletedHome.id);
    //     setAllHosts(updatedHomes);
    // }
    return (
       hostMap
    )

}

export default HostDisplay