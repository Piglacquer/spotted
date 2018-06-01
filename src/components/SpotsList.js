import React, { Component } from "react";
import { CardSection } from "./common";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import { spotsFetch, spotsFormat } from "../actions";
import SpotListItem from "./SpotListItem";

class SpotsList extends Component {
  componentDidMount() {
    this.props.spotsFetch();
  }

  keyExtractor(item, index) {
    return index.toString();
  }

  renderItem({ item }) {
    return <SpotListItem spot={item} key={item.name} />;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.props.listOfSpots}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = {
  nameStyle: {
    fontSize: 18,
    alignSelf: "center",
    flex: 1,
    color: "black"
  },
  locationStyle: {
    fontSize: 14,
    alignSelf: "center",
    flex: 1,
    color: "black"
  },
  containerStyle: {
    backgroundColor: "black",
    borderRadius: 10,
    margin: 10
  }
};

const mapStateToProps = state => {
  const { usersObjects, listOfSpots } = state.spots;

  return { usersObjects, listOfSpots };
};

export default connect(mapStateToProps, { spotsFetch, spotsFormat })(SpotsList);
