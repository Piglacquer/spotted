import React, { Component } from "react";
import { CardSection, Card, Button } from "./common";
import { connect } from "react-redux";
import { Text, View } from "react-native";

class SpotView extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>{this.props.spot.name}</Text>
        </CardSection>
        <CardSection>
          <Text>{this.props.spot.location}</Text>
        </CardSection>
        <CardSection>
          <Text>{this.props.spot.description}</Text>
        </CardSection>
        <CardSection>
          <Button>Edit</Button>
        </CardSection>
      </Card>
    );
  }
}

export default SpotView;
