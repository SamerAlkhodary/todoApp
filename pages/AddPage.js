
import React from 'react';
import {  StyleSheet, View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import AddItemComponent from '../components/AddItemComponent';

export default function AddPage(props) {
    
  return (
   
   <PaperProvider>
       <View style={styles.container}>
      <AddItemComponent nav={props.navigation}/>
        
    </View>

    </PaperProvider>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
});
