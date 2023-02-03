import React from "react";

const SLinkCard = ({arcana, name, sprite, routes, guide}) => {
    return(
        <div className="slinkcard">
            <img src={sprite} alt={name+"'s sprite"}/>
            <div className="textbox">
                <p><strong>{arcana}</strong></p>
                <p>{name}</p>
            </div>
            <p hidden={true}>{guide}</p>
        </div>
    )
}

export default SLinkCard;