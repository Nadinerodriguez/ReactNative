import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]); /* Empty array in the useState*/

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle }]);
  };

  return (
    <View style={styles.screen}>
    <GoalInput onAddGoal ={addGoalHandler} />
      <FlatList data = {courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { /* Set up any name. Screen could be called container if you want */
    padding:100,
  },
})
