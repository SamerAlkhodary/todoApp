
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import List from '../components/List';
import Item from '../model/Item.js';
import { Provider as PaperProvider } from 'react-native-paper';

export default function HomePage(probs) {

  const data = [new Item("Work","go to work today")
  ,new Item('School','get there asap today'),
  new Item('Laundry','get there asap today'),
  new Item('Gym','get there asap today'),
  new Item('Youtube','get there asap today'),
  new Item('Friends','get there asap today'),
  new Item('School','get there asap today'),
  new Item('School','get there asap today')];
  navigation = probs.navigation;
  return (
    
    <PaperProvider>
       <View style={styles.container}>
      <List items={data} navigation={navigation}></List>
    
    </View>

    </PaperProvider>
   
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
