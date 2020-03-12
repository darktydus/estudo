import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity> //Touchable atua como classe pai, pois existem várias versões específicas
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;
