import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './components/ListItem';
import Item from './model/Item.js'

export default function App() {
  const item = new Item('School','get there asap today');
  return (
    <View style={styles.container}>
      <ListItem item={item}></ListItem>
      <StatusBar style="auto"/>

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
