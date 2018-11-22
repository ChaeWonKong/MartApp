import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";

class MartList extends Component {
  renderMartLIst(item) {
    return (
      <View style={styles.container}>
        <CardSection>
          <Text style={styles.textStyle}>{item.title}</Text>
        </CardSection>
      </View>
    );
  }
  render() {
    return (
      <FlatList
        data={this.props.martList}
        renderItem={({ item }) => this.renderMartLIst(item)}
        keyExtractor={item => String(item.id)}
      />
    );
  }
}

const styles = {
  container: {
    flex: 2
  },
  textStyle: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10
  }
};

const mapStateToProps = state => {
  return { martList: state.martList };
};

export default connect(mapStateToProps)(MartList);
