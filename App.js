import React from 'react';
import 
{ StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View>
        <TextInput 
        placeholder= "Estabelecimento X"
        style={{ borderColor: 'black',
        borderWidth: 1} 
        }
        />
        <Button title= "ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
