import React, { Component } from "react";
import _ from "lodash";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import { spotsFetch, spotsFormat } from "../actions";
import SpotListItem from "./SpotListItem";

let dataSource;

class SpotsList extends Component {
  componentWillMount() {
    this.props.spotsFetch();
  }

  componentWillReceiveProps(nextProps) {
    dataSource = this.createDataSource(nextProps);
  }

  createDataSource = data => {
    return _.flatten(
      Object.entries(data.usersObjects).map(current => {
        return Object.values(current[1].spots);
      })
    );
  };

  renderItem({ item }) {
    return <Text style={styles.textStyle}>{item.name}</Text>;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList data={dataSource} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    alignSelf: "center",
    flex: 1,
    color: "white"
  },
  containerStyle: {
    backgroundColor: "black",
    borderRadius: 10,
    margin: 10
  }
};

const mapStateToProps = state => {
  const { usersObjects } = state.spots;

  return { usersObjects };
};

export default connect(mapStateToProps, { spotsFetch, spotsFormat })(SpotsList);
