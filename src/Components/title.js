import React from "react"
import "../CSS/title.css"


const Title = (props) => {
    return (
        <div className = "titleBox">
            <h1 className = "title">{props.title}</h1>
        </div>
    )
}

export default Title