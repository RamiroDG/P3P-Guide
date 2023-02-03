import React from "react";
import logo from "../../imgs/p3pLogo.png";

const NavBar = ({toggleRoute}) => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="P3P Logo"></img>
            </div>
            <div className="toggle">
                <label className="unselectable">
                    {"FeMC?"}
                    <input type="checkbox" defaultChecked={false} onChange={toggleRoute}/>
                </label>
            </div>
        </div>
    )
}

export default NavBar;