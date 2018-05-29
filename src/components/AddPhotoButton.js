import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Alert,
  NativeModules
} from "react-native";
import { spotPhotoChoices } from "../actions";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

var ImagePicker = NativeModules.ImageCropPicker;

class AddPhotoButton extends Component {
  pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true
    })
      .then(images => {
        let imagesToSend = images.map(i => {
          console.log("received image", i);
          return {
            uri: i.path,
            width: i.width,
            height: i.height,
            mime: i.mime
          };
        });
        this.props.spotPhotoChoices({
          value: imagesToSend
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickMultiple.bind(this)}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/addPhoto.png")}
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

const mapStateToProps = state => {
  const { photos } = state.spotToPost;

  return { photos };
};

export default connect(mapStateToProps, { spotPhotoChoices })(AddPhotoButton);
