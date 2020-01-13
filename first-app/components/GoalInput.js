import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState(''); /* Empty string in the useState*/

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return(<View style= {styles.container}>
    <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler}
    value ={enteredGoal}/>
    <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
  </View>);
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
