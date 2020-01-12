import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style= {styles.container}>
        <TextInput placeholder="Course Goal" style={{width: '90%', borderColor: 'black', borderWidth: 1, padding:5}} />
        <Button title="ADD"/>
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
  }
})
