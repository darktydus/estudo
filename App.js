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
// justifyContent é usado para organizar os elementos no eixo principal

//Tutorial flexDirection - https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction

//Tutorial alignItens - https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
// alignItens é usado para organizar os elementos no eixo transversal (filho)

//flex: é aplicada a itens que estão dentro de um flexbox dentro de uma <View>, ele serve como uma fração
//caso tenha 3 itens, e adicione flex: 1, para um deles, ele irá utilizar 1/1 (um inteiro) do espaço
//disponível/possível para ele. Caso adicione flex: 1 para um segundo, será agora 1/2, ou seja o flexbox
//será dividido, e assim sucessivalmente 1/3 /, 1/4