import React from "react"
import "./PhotoContainer.css"

const PhotoContainer = props => {
    // console.log(props.props.);
    return (
        <div className = "photo-container">
            <div>
                <h1>{props.props.copyright}</h1>
                <img src = {props.props.hdurl} alt="Galaxies"/>
            </div>
            <div className = "caption">
                <p>{props.props.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoContainer;