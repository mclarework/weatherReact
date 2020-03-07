import React from "react"
import "../CSS/temp.css"

const Temp = (props) => {
    return (
        <div className = "temp">
            <h1 className = "tempText">{((props.temp-32)*(5/9)).toFixed(1)}°C</h1>
        </div>
    )
}

export default Temp