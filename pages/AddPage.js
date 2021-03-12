
import React from 'react';
import {  StyleSheet, View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import AddItemPage from '../components/AddItemPage';
export default function AddPage(probs) {

  return (
   
   <PaperProvider>
       <View style={styles.container}>
      <AddItemPage nav={probs.navigation}/>
        
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
