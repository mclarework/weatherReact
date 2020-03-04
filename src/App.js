import React, { Component } from "react";
import Main from "./Components/main.js";
import "./CSS/app.css";

class App extends Component {
  state = {
    title: "Weather App",
    userInput:""
  };
  render() {
    return (
      <div>
        <Main title={this.state.title} />
      </div>
    );
  }
}

export default App;
