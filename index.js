import React from "react";
import { View, Text, AppRegistry } from "react-native";
import Header from "./src/Header";
import ItemList from "./src/ItemList";

const App = () => {
  return (
    <View>
      <Header headerText="로컬마트" />
      <ItemList />
    </View>
  );
};

AppRegistry.registerComponent("MartApp", () => App);
