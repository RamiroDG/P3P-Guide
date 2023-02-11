import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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

const ModalWrapper = ({open, hc, person}) => {
    const guide = person.guide;
    return(
        <Modal
        open={open}
        onClose={hc}
        >
            <Box sx={style}>
                <Typography id="social-link-info" variant="h4" component="h2">
                    {person?.name + " - " + person?.arcana}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {guide?.unlock}
                </Typography>
                <Typography>
                    {guide?.location}
                </Typography>
                <Typography>
                    {guide?.gifts}
                </Typography>
                <Typography>
                    {guide?.reward}
                </Typography>
                <hr></hr>
                {guide?.ranks.map((rank,num)=>{
                    return <div className="box">
                        <Typography variant="h5">
                            {"Rank "+num+" > "+(num+1)}
                        </Typography>
                        <hr style={{margin:"10px"}}></hr>
                        {rank.map((qa)=>{
                            return <div>
                                <Typography variant="h5" mt={3}>
                                    {qa.q}
                                </Typography>
                                {qa.a.map(a=>{
                                    return <Typography variant="body1">
                                        {a}
                                    </Typography>
                                })}
                            </div>                        
                        })}
                    </div>
                    
                    
                })} 
                <br></br> 
                <Button onClick={hc} variant="contained">Close</Button>              
            </Box>
        </Modal>
    )
}

export default ModalWrapper;
