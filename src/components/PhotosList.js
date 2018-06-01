import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { CardSection, Thumbnail } from "./common";

class PhotosList extends Component {
  keyExtractor(item, index) {
    return index;
  }

  renderItem({ item }) {
    return <Thumbnail photo={item} key={item.name} />;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.props.photos}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: "black",
    borderRadius: 10,
    margin: 10
  }
};

export default PhotosList;
