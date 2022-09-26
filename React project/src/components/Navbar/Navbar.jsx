import React from "react";
import "./Navbar․module.css"
import {NavLink} from "react-router-dom";

function Navbar(){
    return(
        <nav className="nav">
            <div className="navDiv">
                <NavLink className="nav__link" to="/" >About</NavLink>
            </div>

            <div className="navDiv">
                <NavLink className="nav__link" to="/slider">Images</NavLink>
            </div>

            <div className="navDiv">
                <NavLink className="nav__link" to="/hotel">Hotels</NavLink>
            </div>

            <div className="navDiv">
                <NavLink className="nav__link" to="/cafe">Cafe</NavLink>
            </div>

            <div className="navDiv">
                <NavLink className="nav__link" to="/square">Square</NavLink>
            </div>

            <div className="navDiv">
                <NavLink className="nav__link" to="/data">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar