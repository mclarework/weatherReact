import React, { Component } from "react";
import Main from "./Components/main.js";
import "./CSS/app.css";

class App extends Component {
  state = {
    title: "Weather App",
    subtitle:
      "Enter a location name in the bar below and seach for the weather there...",
    userInput: "",
    cityData: null,
    summary: null,
    image: "../Images/rain.gif",
    time: new Date().toLocaleString(),
    hourly: null,
    daily: null
  };

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ userInput: input });
  };

  handleKeyPress = async event => {
    if (event.keyCode === 13) {
      if (this.state.userInput !== "") {
        const data = await fetch(
          `https://dry-beyond-13373.herokuapp.com/weather?address=${this.state.userInput}`
        );
        const response = await data.json();
        let i;
        const hour = [];
        const day = [];
        for (i = 0; i < 5; i++) {
          hour.push(response.data.hourly.data[i]);
          day.push(response.data.daily.data[i]);
        }
        this.setState({
          cityData: response,
          userInput: "",
          hourly: hour,
          daily: day
        });
      }
    }
  };

  render() {
    return (
      <div className="mainBody">
        <Main
          title={this.state.title}
          subtitle={this.state.subtitle}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          cityData={this.state.cityData}
          summary={this.state.summary}
          image={this.state.image}
          time={this.state.time}
          hourly={this.state.hourly}
          daily={this.state.daily}
        />
      </div>
    );
  }
}

export default App;
