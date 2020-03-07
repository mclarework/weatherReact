import React from "react"
import "../CSS/current.css"

const Current = (props) => {
    return (
        <div className = "currentBox">
            <p className = "time">{props.time}</p>
            <div className = "iconAndRain">
                <div className = "icon">
                    <p>{props.info.icon}</p>
                </div>
                <div className = "rain">
                    <p>Chance of rain:</p>
                    <p>{props.info.precipProbability * 100}%</p>
                </div>
            </div>
        </div>
    )
}

export default Current