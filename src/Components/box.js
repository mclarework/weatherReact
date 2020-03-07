import React from "react"
import "../CSS/box.css"

const Box = (props) => {
    let temp = null
    if (props.data.temperature) {
        temp = props.data.temperature
    }else{
        temp = props.data.temperatureHigh
    }

    return (
        <div className = "box">
            <p className = "text">+ {props.index+1}</p>
            <p className = "text">{props.data.icon}</p>
            <p className = "text">{((temp-32)*(5/9)).toFixed(1)}°C</p>
            <p className = "text">{Math.round(props.data.precipProbability * 100)}%</p>
        </div>
    )
}

export default Box