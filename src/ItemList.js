import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import ItemDetail from "./ItemDetail";

class ShopList extends Component {
  state = { items: [] };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ items: res.data }));
  }

  renderList() {
    return this.state.items.map(item => (
      <ItemDetail key={item.title} item={item} />
    ));
  }
  render() {
    return <View>{this.renderList()}</View>;
  }
}

export default ShopList;
