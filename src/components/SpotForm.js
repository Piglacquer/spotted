import React, { Component } from "react";
import { connect } from "react-redux";
import { spotUpdate, showCameraRoll } from "../actions";
import { CardSection, Button, Input, LoadingSpinner } from "./common";
import AddPhotoButton from "./AddPhotoButton";
import TakePhotoButton from "./TakePhotoButton";
import { View, Text, TextInput, Image, ScrollView } from "react-native";

class SpotForm extends Component {
  renderImage(image) {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: "contain" }}
        source={image}
      />
    );
  }

  renderAsset(image) {
    return this.renderImage(image);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Spot Name"
            value={this.props.name}
            onChangeText={text => {
              this.props.spotUpdate({ prop: "name", value: text });
            }}
            placeholder="56th St Ditch"
          />
        </CardSection>
        <CardSection style={{ height: 200 }}>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>Description</Text>
            <TextInput
              style={styles.inputStyle}
              multiline={true}
              value={this.props.description}
              onChangeText={text => {
                this.props.spotUpdate({ prop: "description", value: text });
              }}
              placeholder="You would not believe this ditch, its like whats-his-faces dream spot. come check it out, just dont park in the grass."
            />
          </View>
        </CardSection>
        <CardSection>
          <ScrollView>
            {this.props.photos
              ? console.log(this.props, "console")
              : console.log("nothin")}
            {this.props.photos.value
              ? this.props.photos.value.map(i => (
                  <View key={i.uri}>{this.renderAsset(i)}</View>
                ))
              : null}
          </ScrollView>
        </CardSection>
        <CardSection>
          <AddPhotoButton />
          <TakePhotoButton />
        </CardSection>
        <CardSection>
          <Input
            label="Location"
            value={this.props.location}
            onChangeText={text => {
              this.props.spotUpdate({ prop: "location", value: text });
            }}
            placeholder="1161 W 56th St"
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

const mapStateToProps = state => {
  const { name, description, photos, location } = state.spotToPost;

  return { name, description, photos, location };
};

export default connect(mapStateToProps, { spotUpdate, showCameraRoll })(
  SpotForm
);
