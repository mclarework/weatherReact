import React, { Component } from "react";
import Main from "./Components/main.js";
import "./CSS/app.css";

class App extends Component {
  state = {
    title: "Weather App",
    userInput: "",
    cityData: null
  };

  handleChange = event => {
    const input = event.target.value;
    this.setState({ userInput: input });
  };

  handleKeyPress = async event => {
    if (event.keyCode === 13) {
      if (this.state.userInput !== "") {
        const data = await fetch(
          `http://localhost:3005/weather?address=${this.state.userInput}`
        );
        const response = await data.json()
        console.log(response)
        this.setState({cityData:response, userInput:""})
        
      }
        this.setState({ userInput: "" });
      }
    }

  render() {
    return (
      <div>
        <Main
          title={this.state.title}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          cityData={this.state.cityData}
        />
      </div>
    );
  }
}

export default App;
