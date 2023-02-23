import React from "react";
import HostTile from "./HostTile";

function HostDisplay({allHosts}){
    console.log("ALL", allHosts)
    const hostMap = allHosts.map((host) => {
        return (
            <HostTile key = {host.id} host={host} />
        )
    })

    return (
       hostMap
    )

}

export default HostDisplay