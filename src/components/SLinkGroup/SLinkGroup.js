import React, { Component } from "react";
import SLinkCard from "../SLinkCard/SLinkCard";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

class SLinkGroup extends Component {
    constructor() {
        super();
        this.state = {
            open:false,
            person: {}
        }
    }

    handleOpen = () => this.setState({open:true});
    handleClose = () => {
        this.setState({
            open:false,
            person:{}
        });
    };

    setPerson = (person) => {
        this.setState({person:person});
        this.handleOpen();
    }
    
    render() {
        const { sLinks } = this.props;
        const { open, person } = this.state;
        return(
            <> 
                {/* <Modal
                open={open}
                onClose={this.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="social-link-info" variant="h6" component="h2">
                            {person?.name + " - " + person?.arcana}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {person?.unlock}
                        </Typography>
                        <Typography>
                            {person?.location}
                        </Typography>
                        
                    </Box>
                </Modal> */}
                <ModalWrapper 
                open={open}
                hc={this.handleClose}
                person={person}
                />
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
            </>
        )
    }
};

export default SLinkGroup;