import React from "react"
import LogoContainer from "../../Components/HeaderContainer/LogoContainer"
import "./NavigationContainer.css";

const NavigationContainer = () => {

    return (
        <div className = "navigation">
            <nav className = "navigation-bar">
                <li>Home</li>
                <li>Picture</li>
                <li>About</li>
                <li>Contact Us</li>
            </nav>
        </div>
    );
};

export default NavigationContainer;