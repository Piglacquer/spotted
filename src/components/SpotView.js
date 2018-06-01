import React, { Component } from "react";
import { CardSection, Card, Button, Thumbnail } from "./common";
import { connect } from "react-redux";
import PhotosList from "./PhotosList";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

class SpotView extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  renderImage(image) {
    return <Thumbnail photo={image} />;
  }

  renderAsset(image) {
    return this.renderImage(image);
  }

  render() {
    return (
      <Card>
        <ScrollView>
          <CardSection>
            <Text style={styles.titleStyle}>{this.props.spot.name}</Text>
          </CardSection>
          <CardSection style={styles.photoContainerStyle}>
            {this.props.spot.photos.value
              ? this.props.spot.photos.value.map(i => (
                  <View key={i.uri}>{this.renderAsset(i)}</View>
                ))
              : null}
            {/* <PhotosList photos={this.props.spot.photos.value} /> */}
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
        </ScrollView>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22
  },
  photoContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    padding: 10
  }
};
export default SpotView;
