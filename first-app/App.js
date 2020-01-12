import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:100}}>
    <TextInput placeholder="Email" style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
    <Button title="Submit"/>
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
