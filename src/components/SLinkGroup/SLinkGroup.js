import React from "react";
import SLinkCard from "../SLinkCard/SLinkCard";

const SLinkGroup = ({sLinks}) => { //SlinksRoute tiene que ser un array de Object -> slinks
    return(
         <div className="slinkcontainer"> {
            sLinks.map((slink) => {
                return(
                    <SLinkCard 
                    key={slink.name}
                    className="slinkcard"
                    arcana={slink.arcana} 
                    name={slink.name} 
                    sprite={slink.sprite} 
                    routes={slink.routes} 
                    guide={slink.guide} 
                    />
                )
            })
        } </div>
    )
}

export default SLinkGroup;