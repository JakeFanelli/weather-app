import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
class ResultBox extends Component {
  formatAMPM = date => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + "" + ampm;
    return strTime;
  };

  renderData = data => {
    let date = new Date(data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let name = days[date.getDay()];
    let time = this.formatAMPM(date);
    let iconSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let temp = Math.round(data.main.temp);
    let desc = data.weather[0].description;
    return (
      <Col
        key={date}
        xs="8"
        sm="5"
        md="4"
        lg="2"
        className="column d-flex pb-3"
      >
        <Card className="w-100">
          <CardImg src={iconSrc} alt="Weather Card" />
          <CardBody>
            <CardSubtitle className="cardTitle">{name}</CardSubtitle>
            <CardSubtitle className="cardTitle lastTitle">{time}</CardSubtitle>
            <CardSubtitle className="bottomDetails">
              {temp}&deg;F
              <br />
              {desc}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    );
  };

  render() {
    const weatherData = this.props.weatherData;
    if (!weatherData.hasOwnProperty("cnt")) {
      return null;
    } else {
      return (
        <Container>
          <Row>{weatherData.list.map(this.renderData)}</Row>
        </Container>
      );
    }
  }
}
export default ResultBox;
