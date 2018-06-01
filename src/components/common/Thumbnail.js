import React, { Component } from "react";
import { TouchableWithoutFeedback, Image } from "react-native";

const clickEnlarge = () => {
  return (
    <Image
      style={{ width: 300, height: 300, resizeMode: "contain" }}
      source={image}
    />
  );
};

const Thumbnail = props => {
  return (
    <TouchableWithoutFeedback onClick={console.log("click")}>
      <Image
        style={[styles.thumbnailStyle, props.style]}
        source={{ uri: props.photo.uri }}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = {
  thumbnailStyle: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    padding: 10
  }
};

export { Thumbnail };
