import React from "react"
import Temp from "../Components/temp"
import Location from "../Components/location"
import Current from "../Components/current"
import Hourly from "../Components/hourly"
import Daily from "../Components/daily"
import "../CSS/response.css"

const Response = (props) => {
    return (
        <div className = "responseBox">
            {props.cityData !== null ? (
                <div className = "active">   
                    <Temp temp = {props.cityData.data.currently.temperature}/>
                    <Location location = {props.cityData.location}/>
                    <Current info = {props.cityData.data.currently} time = {props.time}/>
                    <Hourly data = {props.hourly}/>
                    <Daily data = {props.daily}/>
                </div>
            ):(
                null
            )
            }
        </div>
    )
}

export default Response