import React, {useState, useEffect} from "react";
import LogoContainer from "../HeaderContainer/LogoContainer"

const HeaderContainer = () => {

    return (
        <div className = "header-container">
            <div>
                <LogoContainer />
            </div>
            <div className = "title">
                <h1>Astronomy Picture Of The Day</h1>
            </div>s
        </div>
    );
};

export default HeaderContainer;