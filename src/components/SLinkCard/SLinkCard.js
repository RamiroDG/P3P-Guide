import React from "react";

const SLinkCard = ({arcana, name, sprite, guide, setPerson}) => {
    return(
            <div 
            className="card column is-1-desktop is-one-quarter-mobile is-one-fifth-tablet" 
            onClick={()=>setPerson({arcana,name,guide})}
            >
                <div className="card-image">
                    <figure className="image is-3by4">
                        <img src={sprite} alt={name+"'s sprite"}/>
                    </figure>
                </div>
                <div className="textbox content">
                    <p>
                        <strong>
                            {arcana}
                        </strong>
                    </p>
                    <p>
                        {name}
                    </p>
                </div>
            </div>
    )
};

export default SLinkCard;