import React, {useState, useEffect} from "react";
import LogoContainer from "../HeaderContainer/LogoContainer"
import "./HeaderContainer.css";

const HeaderContainer = () => {

    return (
        <div className = "header-container">
            <div>
                <LogoContainer />
            </div>
            <div className = "title">
                <h1>Astronomy Picture Of The Day</h1>
            </div>
        </div>
    );
};

export default HeaderContainer;