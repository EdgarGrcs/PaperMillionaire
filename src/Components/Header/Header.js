import React from "react";
import "./Header.css";


const Header = () => {

    return (
        <div className="header">
            <a href="#default" className="logo">Paper Millionaire</a>
            <div className="header-right">
                <a href="#home">Balance:</a>
                <a className="price" href="#contact">{50000}</a>
                <a href="#about">Username</a>
    </div>
</div>
    )
}


export default Header;