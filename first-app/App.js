import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(''); /* Empty string in the useState*/
  const [courseGoals, setCourseGoals] = useState([]); /* Empty array in the useState*/

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    // setCourseGoals =([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={styles.screen}>

      <View style= {styles.container}>
        <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler}
        value ={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>

      <FlatList data = {courseGoals} renderItem={itemData => (<View style={styles.listItem}><Text> {itemData.item.value} </Text></View>)}/>


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
  listItem: {
    padding: 10,
    marginVertical: 10, /* Margin space on top and bottom*/
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },

})
