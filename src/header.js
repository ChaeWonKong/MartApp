import React from "react";
import { View, Text } from "react-native";

const Header = props => {
  const { viewStyle, TextStyle } = style;
  return (
    <View style={viewStyle}>
      <Text style={TextStyle}>{props.headerText}</Text>
    </View>
  );
};

const style = {
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    marginTop: 30,
    backgroundColor: "#F8F8F9",
    // shadows
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  TextStyle: {
    fontSize: 40
  }
};

export default Header;
