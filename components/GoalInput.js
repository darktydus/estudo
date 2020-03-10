import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Estabelecimento A"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
  /* usaremos o bind e podemos configurar alguns argumentos quando a função for chamada
  sempre o "this" na frente e o segundo sempre serão quando ela é chamada e nesse caso quando
  o botão for acionado.
  */
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10
  }
});

export default GoalInput;
