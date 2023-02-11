import { Button } from "@mui/material";
import React from "react";
import logo from "../../imgs/p3pLogo.png";

const NavBar = ({toggleRoute, show, toggleShow}) => {
    
    if(!show) {
        return <>
            <header className="navbar">
                <div className="logo">
                    <img src={logo} alt="P3P Logo"></img>
                </div>
                <div className="toggle">
                    <label className="unselectable">
                        {"FeMC?"}
                        <input type="checkbox" defaultChecked={false} onChange={toggleRoute}/>
                    </label>
                </div>
            </header>
        </>
    } else {
        return <>
            <header className="navbar">
                <div className="logo">
                    <img src={logo} alt="P3P Logo"></img>
                </div>
                <Button className="closeButton" onClick={()=>toggleShow(false)} variant="contained">{"Close"}</Button>
            </header>
        </>
    }
    
}

export default NavBar;