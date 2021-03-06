import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Usando o useState, de forma padrão temos um atributo inicial, e um "set" retornando
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  /* A ideia aqui é adicionar o atributo retornando uma ID randomica, para facilitar de adicionar
  ou remover futuramente */
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
    /*quando clicamos no botão alteramos o isAddMode para setIsAddmode, que por sinal
    controlamos a visibilidade em "GoalInput" do "Modal". Então para garantir que esse Modal desapareça
    temos que alterar novamente o isAddMode para torna-lo invisível. Pois como estamos definindo um estado
    após o outro, ele não renderizará novamente. */
  };

  /*filter é um método do Javascript que permite retornar uma nova matriz, de acordo com o critério
  do filtro. A ideia aqui é usar o Filter para filtrar em todos os elementos da Matriz, retornando
  "TRUE", para aqueles que são diferentes do ID em que vamos deletar, pois caso seja igual, irá deletar
  o que desejamos e o que não desejamos, por isso que tem q ser "diferente". */
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
    /* foi adicionado aqui o caminho do botão Cancel, linkado ao "onCancel"
     e no props.onCancel no GoalInput.js */
  };

  //onAddGoalHandler recebe uma prop dentro GoalInput, então colocamos no GoalInput props.onAddGoal
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id} // Aqui foi colocado a localização do id para quando for clicado no "GoalItem" ser deletado
            onDelete={removeGoalHandler}
            title={itemData.item.value} //itemData(?). item(objeto). value(key)
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
