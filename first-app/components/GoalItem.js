import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return(<TouchableOpacity activeOpacity={0.8} onPress ={props.onDelete}><View style={styles.listItem}><Text> {props.title} </Text></View></TouchableOpacity>);
};


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10, /* Margin space on top and bottom*/
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
});

export default GoalItem;
