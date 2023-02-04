import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import SLinkCard from "../SLinkCard/SLinkCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'white',
    boxShadow: 24,
    borderRadius: 1,
    p: 4,
  };

class SLinkGroup extends Component {
    constructor() {
        super();
        this.state = {
            open:false,
            guide: {}
        }
    }

    setOpen = (bool) => this.setState({open:bool});
    handleOpen = () => this.setOpen(true);
    handleClose = () => this.setOpen(false);
    
    render() {
        const { sLinks } = this.props;
        const { open } = this.state;
        return(
            <> 
                <div className="columns is-centered is-variable is-3 is-mobile"> {
                    sLinks.map((slink) => {
                        return(
                            <SLinkCard 
                            key={slink.name}
                            arcana={slink.arcana} 
                            name={slink.name} 
                            sprite={slink.sprite} 
                            guide={slink.guide}
                            />   
                        )
                    })
                } </div>
                <Button onClick={this.handleOpen}>Open modal</Button>
                
                <Modal
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                    {/* <div className="modal">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                    <p>hello</p>
                    </div> </div> */}
                   
                </Modal>
                
            </>
        )
    }
};

export default SLinkGroup;