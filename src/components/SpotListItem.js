import React, { Component } from "react";
import { Card, CardSection } from "./common";
import { Actions } from "react-native-router-flux";
import { TouchableWithoutFeedback, Text, View } from "react-native";

class SpotListItem extends Component {
  onRowPress() {
    Actions.SpotView({ spot: this.props.spot });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>Hello</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SpotListItem;
