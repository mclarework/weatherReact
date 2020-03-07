import React from "react";
import "../CSS/input.css";

const Input = (props) => {
  return (
    <div className = "inputBox">
      <input className = "input" placeholder="Search...
      " onChange={props.handleChange} onKeyDown={props.handleKeyPress} value={props.userInput}></input>
    </div>
  );
};

export default Input;
