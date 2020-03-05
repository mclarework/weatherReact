import React from "react"
import image from "../Images/background.png"
import "../CSS/background.css"

const Background = () => {
    return (
        <div className = "imageBox">
            <img className = "image" src={image} alt="tower"/>
        </div>
    )
}

export default Background