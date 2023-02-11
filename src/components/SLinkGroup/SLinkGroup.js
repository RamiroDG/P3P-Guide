import React, { Component } from "react";
import SLinkCard from "../SLinkCard/SLinkCard";
import SLinkPage from "../SLinkPage/SLinkPage";


class SLinkGroup extends Component {
    constructor() {
        super();
        this.state = {
            person: {}
        }
    }

    setPerson = (person) => {
        this.setState({person:person});
        this.props.toggleShow(true);
    }
    
    render() {
        const { sLinks, show } = this.props;
        const { person } = this.state;

        if(!show) {
            return(
                <div className="cardContainer columns is-centered is-variable is-3 is-mobile"> {
                    sLinks.map((slink) => {
                        return(
                            <SLinkCard 
                            key={slink.name}
                            arcana={slink.arcana} 
                            name={slink.name} 
                            sprite={slink.sprite} 
                            guide={slink.guide}
                            setPerson={this.setPerson}
                            />   
                        )
                    })
                } </div>
            )
        } else {
            return(
                <div className="sLinkPageContainer">
                    <SLinkPage person={person} />
                </div>       
            )
            
        }
    }
};

export default SLinkGroup;