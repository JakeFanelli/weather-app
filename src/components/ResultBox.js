import React, { Component } from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
class ResultBox extends Component {
  render() {
    if (this.props.weatherData) {
      return null;
    } else {
      return (
        <Container>
          <Row>
            <Card>
              <CardImg
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=poop"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Date:</CardTitle>
                <CardSubtitle>Temperature:</CardSubtitle>
              </CardBody>
            </Card>
          </Row>
        </Container>
      );
    }
  }
}
export default ResultBox;
