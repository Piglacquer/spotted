import React from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingSpinner = ({ size }) => {
  return (
    <View style={styles.loadingSpinnerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  loadingSpinnerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
};
export { LoadingSpinner };
