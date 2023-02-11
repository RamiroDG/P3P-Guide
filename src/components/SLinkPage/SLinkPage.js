import { Typography } from "@mui/material";
import React from "react";

const SLinkPage = ({ person }) => {
    const guide = person.guide;
    return <div className="sLinkPage">
        <div className="box">
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
        </div>
        <hr style={{backgroundColor:"black"}}></hr>
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
    </div>
}

export default SLinkPage;