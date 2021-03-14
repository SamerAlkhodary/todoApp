
import React from 'react';
import styles from './styles.js';
import { View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import AddItemComponent from '../../components/AddItemComponent';

export default function AddPage(props) {
    
  return (
   
   <PaperProvider>
       <View style={styles.container}>
      <AddItemComponent navigation={props.navigation}/>
        
    </View>

    </PaperProvider>
   
  );
}
