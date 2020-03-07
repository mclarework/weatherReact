import React from "react"
import "../CSS/location.css"


const Location = (props) => {
    return (
        <div className = "locationBox">
            <h1 className = "location">{props.location}</h1>
        </div>
    )
}

export default Location