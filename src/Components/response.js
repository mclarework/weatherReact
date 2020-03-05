import React from "react"
import "../CSS/response.css"

const Response = (props) => {
    return (
        <div className = "responseBox">
            {props.cityData !== null ? (
                <div>
                    <h3 className="loc">{props.cityData.location}</h3>
                    <h5 className="sub">Summary</h5>
                    <p className="return">{props.cityData.data.currently.summary}</p>
                    <h5 className="sub">Precipitation Percentage</h5>
                    <p className="return">{props.cityData.data.currently.precipProbability}%</p>
                    <h3 className="sub">Temperature</h3>
                    <p className="return">{((props.cityData.data.currently.temperature-32)*(5/9)).toFixed(2)}°C</p>
                </div>
            ):(
                null
            )
            }
        </div>
    )
}

export default Response