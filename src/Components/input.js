import React from "react";
import "../CSS/input.css";

const Input = (props) => {
  return (
    <div className = "midBox">
      <input className = "inputBox" placeholder="Enter City Name" onChange={props.handleChange} onKeyDown={props.handleKeyPress}></input>
    </div>
  );
};

export default Input;
