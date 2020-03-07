import React from "react"
import Input from "../Components/input"
import Response from "../Components/response"
import "../CSS/main.css"
import Background from "./background"

const Main = (props) => {

    
    return (
        <div className = "main" >
            <Input userInput = {props.userInput} handleChange = {props.handleChange} handleKeyPress = {props.handleKeyPress}/>
            <Response cityData = {props.cityData} time = {props.time} hourly={props.hourly} daily={props.daily}/>
            <Background />
        </div>
    )
}

export default Main