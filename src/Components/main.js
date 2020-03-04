import React from "react"
import Title from "../Components/title"
import Input from "../Components/input"
import Response from "../Components/response"
import "../CSS/main.css"

const Main = (props) => {
    return (
        <div className = "main">
            <Title title = {props.title}/>
            <Input/>
            <Response/>
        </div>
    )
}

export default Main