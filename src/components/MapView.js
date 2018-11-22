import React, { Component } from "react";
import { WebView } from "react-native";

export default class MapView extends Component {
  render() {
    return (
      <WebView
        originWhitelist={["*"]}
        source={{
          uri: "http://localhost:5000"
        }}
        style={styles.webViewContainer}
      />
    );
  }
}

const styles = {
  webViewContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  }
};
