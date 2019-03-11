import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import SearchBox from "./components/SearchBox";
import ResultBox from "./components/ResultBox";
import MenuBar from "./components/MenuBar";
import Secrets from "../src/components/Secrets";

class App extends Component {
  state = {
    weatherData: {},
    cityCode: "",
    countryCode: ""
  };

  onChangeCity = e => {
    this.setState({ cityCode: e.target.value });
  };
  onChangeCountry = e => {
    this.setState({ countryCode: e.target.value });
  };

  updateWeatherData = e => {
    e.preventDefault();
    const endpoint = `${Secrets.baseUrl}${this.state.cityCode},${
      this.state.countryCode
    }${Secrets.baseUrl2}`;
    fetch(endpoint)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Issues searching this location, please try again later."
          );
        }
      })
      .then(weatherData => this.setState({ weatherData }))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="App">
        <MenuBar />
        <Container>
          <Row>
            <SearchBox
              weatherData={this.state.weatherData}
              updateWeatherData={this.updateWeatherData}
              cityCode={this.state.cityCode}
              countryCode={this.state.countryCode}
              onChangeCity={this.onChangeCity}
              onChangeCountry={this.onChangeCountry}
            />
          </Row>
          <Row>
            <ResultBox weatherData={this.state.weatherData} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
