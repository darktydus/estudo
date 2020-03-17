import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  //Modal funciona como uma navegação entre telas, mas a outra tela fica invisível pro tras.
  //animationType é a forma em que a nova tela aparecerá
  return (
    <Modal visible={props.visible} animationType="slide" animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Estabelecimento A"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
  /* usaremos o bind e podemos configurar alguns argumentos quando a função for chamada
  sempre o "this" na frente e o segundo sempre serão quando ela é chamada e nesse caso quando
  o botão for acionado.
  */
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // é usado para fracionar o espaçamento entre 2 ou mais(filhos) flex
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "#000000",
    borderWidth: 2,
    padding: 10,
    marginBottom: 15 // Distancia a aba do botão em 10.
  }
});

export default GoalInput;
