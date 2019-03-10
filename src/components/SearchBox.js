import React, { Component } from "react";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";

class SearchBox extends Component {
  render() {
    return (
      <Form className="search-form">
        <FormGroup>
          <Label className="label" for="city">
            City
          </Label>
          <Input
            type="text"
            ref={this.input}
            id="cityCode"
            className="search"
            placeholder="Austin, Buston, Seattle..."
            value={this.props.cityCode}
            onChange={this.props.onChangeCity}
          />
          <Label className="label" for="country">
            Country
          </Label>
          <Input
            type="text"
            ref={this.input}
            id="countryCode"
            className="search"
            placeholder="US, DE, CN..."
            value={this.props.countryCode}
            onChange={this.props.onChangeCountry}
          />
        </FormGroup>
        <Button
          color="primary"
          type="submit"
          onClick={this.props.updateWeatherData}
        >
          Search
        </Button>
      </Form>
    );
  }
}
export default SearchBox;
