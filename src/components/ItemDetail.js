import React from "react";
import { Text } from "react-native";
import { Card, CardSection } from "./common";

const ItemDetail = props => {
  const { title } = props.item;
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
};

export default ItemDetail;
