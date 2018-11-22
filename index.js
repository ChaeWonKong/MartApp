import React from "react";
import { View, AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import { Header } from "./src/components/common";
import MapView from "./src/components/MapView";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Header headerText="마트갈땐 배트맨" />
        <MapView />
      </View>
    </Provider>
  );
};

const styles = {
  container: {
    flex: 1
  }
};
AppRegistry.registerComponent("MartApp", () => App);
