import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // }
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.screen}>
      <View style= {styles.container}>
        <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler}
        value ={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { /* Set up any name. Screen could be called container if you want */
    padding:100,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    padding:5
  },

})
