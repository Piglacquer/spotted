import React, { Component } from "react";
import { Card, CardSection } from "./common";
import { Actions } from "react-native-router-flux";
import { TouchableWithoutFeedback, Text, View } from "react-native";

class SpotListItem extends Component {
  onRowPress() {
    Actions.spotView({ spot: this.props.spot });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}>{this.props.spot.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18
  }
};
export default SpotListItem;
