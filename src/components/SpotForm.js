import React, { Component } from "react";
import { CardSection, Button, Input, LoadingSpinner } from "./common";
import { View, Text, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class SpotForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Spot Name"
            value=""
            onChangeText={() => {
              console.log("hi");
            }}
            placeholder="56th St Ditch"
          />
        </CardSection>
        <CardSection style={{ height: 200 }}>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>Description</Text>
            <TextInput style={styles.inputStyle} multiline={true} />
          </View>
        </CardSection>
        <CardSection>
          <Input
            label="Photos"
            value=""
            onChangeText={() => {
              console.log("hi");
            }}
            placeholder="One day youll be able to..."
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    height: 200,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20,
    alignSelf: "flex-start"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 180,
    alignSelf: "flex-start"
  }
};
export default SpotForm;
