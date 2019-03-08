import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import {Container, Row, Col} from "reactstrap";
import ResultBox from "./components/ResultBox";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Weather</h1>
        </Row>
        <Row>
          <Col>
            <SearchBox />
          </Col>
          <Col>
            <ResultBox />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
