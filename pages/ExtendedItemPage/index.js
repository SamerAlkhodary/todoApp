
import React from 'react';
import { View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import Setting from '../../Strings.js';
import styles from './styles.js';

export default function ExtendedItemPage(props) {



  navigation = props.navigation;
  const{state}= navigation; 
  const item=  state.params.item;

  
  return (
    
    <PaperProvider>
       <View style={styles.container}>
      
    
    </View>
    </PaperProvider>
  );
}


