
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import List from '../components/List';
import Item from '../model/Item.js';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';

export default function HomePage(probs) {

  const {toDoItems,doneItems} = useSelector(state => state.items);
  navigation = probs.navigation;
  return (
    
    <PaperProvider>
       <View style={styles.container}>
      <List items={toDoItems} navigation={navigation}></List>
    
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#d3dadb',
    
  },
});
