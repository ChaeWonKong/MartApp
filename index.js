import React from "react";
import { View, Text, AppRegistry } from "react-native";
import { Header } from "./src/components/common";
import ItemList from "./src/components/ItemList";
import MapView from "./src/components/MapView";

const App = () => {
  return (
    <View style={styles.container}>
      <Header headerText="마트갈땐 배트맨" />
      <MapView />
    </View>
  );
};

const styles = {
  container: {
    flex: 1
  }
};
AppRegistry.registerComponent("MartApp", () => App);
