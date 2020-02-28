import React,
{ useState
} from 'react';
import 
{ StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder= "Estabelecimento A"
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        /> 
        <Button title= "ADD" onPress={addGoalHandler}/>  
      </View>
      <View style={styles.inputContainer}>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}  
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center"
  },
  input: {
    width:"80%",
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10}
});