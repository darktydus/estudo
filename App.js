import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Usando o useState, de forma padrão temos um atributo inicial, e um "set" retornando
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  // A ideia aqui é adicionar o atributo retornando uma ID randomica, para facilitar de adicionar ou remover futuramente
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  //filter é um método do Javascript que permite retornar uma nova matriz, de acordo com o critério do filtro
  // A ideia aqui é
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  //onAddGoalHandler recebe uma prop dentro GoalInput, então colocamos no GoalInput props.onAddGoal
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => console.log("Isso não funcionou?")}
            title={itemData.item.value}
          />
        )} //itemData(?). item(objeto). value(key)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
