import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import List from './components/List';
import Item from './model/Item.js'

export default function App() {

  const data = [new Item("Work","go to work today")
  ,new Item('School','get there asap today')];

  return (
    <View style={styles.container}>
      <List items={data}></List>
        
        
     
      <StatusBar style="auto"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#d3dadb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
