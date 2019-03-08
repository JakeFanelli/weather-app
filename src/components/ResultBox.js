import React, { Component } from "react";
import Secrets from "./Secrets";
const endpoint =
  "http://api.openweathermap.org/data/2.5/find?q=New+York,us&units=imperial&APPID=";
const endpointKey = endpoint + Secrets.apiKey;
const dataArr = [];
class ResultBox extends Component {
  componentDidMount() {
    fetch(endpointKey)
      .then(blob => blob.json())
      .then(data => dataArr.push(data));
    console.log(dataArr);
  }

  render() {
    console.log("butt");
    return <div />;
  }
}
export default ResultBox;
