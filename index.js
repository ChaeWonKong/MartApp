import React from "react";
import { Text, AppRegistry } from "react-native";
import Header from "./src/header";

const App = () => {
  return <Header headerText="로컬마트" />;
};

AppRegistry.registerComponent("MartApp", () => App);
