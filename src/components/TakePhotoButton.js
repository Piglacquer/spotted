import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Alert,
  NativeModules
} from "react-native";
import { Actions } from "react-native-router-flux";

var ImagePicker = NativeModules.ImageCropPicker;

class TakePhotoButton extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingleWithCamera() {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      includeExif: true
    })
      .then(image => {
        console.log("received image", image);
        this.setState({
          image: { uri: image.path, width: image.width, height: image.height },
          images: null
        });
      })
      .catch(e => alert(e));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickSingleWithCamera.bind(this)}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/takePhoto.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 50,
    width: 50
  }
};

export default TakePhotoButton;
