import React from 'react';
import 
{ StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30, backgroundColor: "gray"}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
       
        <TextInput 
        placeholder= "Estabelecimento X"
        style={{width:"80%", borderColor: 'black', borderWidth: 2, padding: 10}}/>

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

//Tutorial justifyContent - https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content 
//Tutorial flexDirection - https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
//Tutorial alignItens - https://developer.mozilla.org/en-US/docs/Web/CSS/align-items