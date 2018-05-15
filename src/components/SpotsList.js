import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";

SpotsList = () => {
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={[
          { key: "P" },
          { key: "A" },
          { key: "T" },
          { key: "R" },
          { key: "I" },
          { key: "C" },
          { key: "K" },
          { key: "X" }
        ]}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>{item.key}</Text>
        )}
      />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    alignSelf: "center",
    flex: 1
  },
  containerStyle: {
    backgroundColor: "blue",
    borderRadius: 10,
    margin: 10
  }
};
export default SpotsList;
