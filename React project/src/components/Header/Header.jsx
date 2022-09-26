import React from 'react';
import "./Header.css";
import logoGyumri from "../../assets/images/logo.jpg";

function Header ()  {
    return(
        <header className="header">
            <img src={logoGyumri} width={110} alt=".Logo"/>
        </header>
    )
}

export default Header;