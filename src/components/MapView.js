import React, { Component } from "react";
import { View, WebView } from "react-native";
import MartList from "./MartList";

class MapView extends Component {
  render() {
    const { container, webViewContainer } = styles;
    return (
      <View style={container}>
        <View style={webViewContainer}>
          <WebView
            source={{
              uri: "http://localhost:3000"
            }}
          />
        </View>
        <MartList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  webViewContainer: {
    flex: 1
  }
};

export default MapView;
