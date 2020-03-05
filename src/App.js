import React, { Component } from "react";
import Main from "./Components/main.js";
import "./CSS/app.css";
import Axios from "axios";

class App extends Component {
  state = {
    title: "Weather App",
    userInput: "",
    cityData: null,
    mapKey:
      "pk.eyJ1IjoiY2xvdWR3YWxrIiwiYSI6ImNrN2J1bGthdjAwNmgzZW5zdHo0bWdqcmkifQ.xJs1a1LpduxDMC6ueXzZfg",
    lat: null,
    lng: null,
    location: null,
    weatherKey: "fe4fce40a84459165693c45b9787d939",
    activeLocation: null
  };

  async componentDidUpdate() {
    if (this.state.location !== null) {
      const lat = this.state.lat;
      const lng = this.state.lng;
      const key = this.state.weatherKey;
      const location = this.state.location;
      const URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${lng}`;
      try {
        const response = await Axios.get(URL);
        this.setState({
          cityData: response.data,
          activeLocation: location,
          location: null
        });
      } catch (error) {
        console.log("error");
      }
    }
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ userInput: input });
  };

  handleKeyPress = async event => {
    if (event.keyCode === 13) {
      const input = this.state.userInput;
      const key = this.state.mapKey;
      const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${key}`;
      console.log(URL);
      try {
        const response = await Axios.get(URL);
        const lat = response.data.features[0].center[1];
        const lng = response.data.features[0].center[0];
        const location = response.data.features[0].place_name;
        this.setState({
          lat: lat,
          lng: lng,
          location: location,
          userInput: ""
        });
      } catch {
        console.log("error");
        this.setState({ userInput: "", cityData: null });
      }
    }
  };

  render() {
    return (
      <div>
        <Main
          title={this.state.title}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          cityData={this.state.cityData}
          activeLocation={this.state.activeLocation}
        />
      </div>
    );
  }
}

export default App;
