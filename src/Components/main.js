import React from "react"
import Title from "../Components/title"
import Input from "../Components/input"
import Response from "../Components/response"
import "../CSS/main.css"
import Background from "./background"

const Main = (props) => {
let weatherbackground;

if (summary == "sunny"){
    weatherbackground = {backgroundImage: "url(dfasdfasdf)"}
} else if (summary == "cloudy"){
    weatherbackground= {backgroundImage: "url(dfasdfasdf)"}
}
    
  

    return (
        <div className = "main" style={weatherbackground}>
            <Title title = {props.title} subtitle={props.subtitle}/>
            <Input userInput = {props.userInput} handleChange = {props.handleChange} handleKeyPress = {props.handleKeyPress}/>
            <Response cityData = {props.cityData}/>
            <Background />
        </div>
    )
}

export default Main