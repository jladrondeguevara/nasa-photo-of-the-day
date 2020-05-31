import React from "react";
import logo from "../../images/nasa-logo.jpg"
import "./LogoContainer.css";

const LogoContainer = () => {
    return (

        // add css to adjust logo size.
        <img src={logo} alt= "NASA Logo"/>
    );
};

export default LogoContainer;