import React from "react"
import "../CSS/response.css"

const Response = (props) => {
    return (
        <div className = "responseBox">
            {props.cityData !== null ? (
                <div>
                    <h3>{props.activeLocation}</h3>
                    <h5>Summary</h5>
                    <p>{props.cityData.currently.summary}</p>
                    <h5>Precipitation Percentage</h5>
                    <p>{props.cityData.currently.precipProbability}</p>
                    <h3>Temperature</h3>
                    <p>{((props.cityData.currently.temperature-32)*(5/9)).toFixed(2)}</p>
                </div>
            ):(
                null
            )
            }
        </div>
    )
}

export default Response