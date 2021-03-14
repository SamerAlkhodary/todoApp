
import React from 'react';
import { View,Text,Button } from 'react-native';

import {useDispatch} from 'react-redux';
import Settings from '../../Strings';
import styles from './styles.js';
import {removeItem} from '../../redux/ItemStore'
export default function ExtendedItemPage(props) {



  navigation = props.navigation;
  const{state}= navigation; 
  const dispatch= useDispatch();
  const item=  state.params.item;

  let itemPriority = 'Low'
  switch(item.priority){
      case 100: itemPriority = 'Low' ;break;
      case 500: itemPriority = 'Meduim' ;break;
      case 1000: itemPriority = 'High' ;break;
  }
  console.log(item);

    const donePressed= () =>{
        
        dispatch(removeItem({id:item.id,isComplete:true}));
        navigation.navigate('ListPage');
      }
      const removePressed= () =>{
        
        dispatch(removeItem({id:item.id,isComplete:false}));
        navigation.navigate('ListPage');
      }

  
  return (
    

       <View style={styles.container}>
           
        <View style={styles.colContainer}>
        <Text style={styles.label}>
           {Settings.strings.english.title}
        </Text>
        <Text style={styles.data}>
            {item.title}
        </Text>
        </View>

        <View style={styles.colContainer}>
        <Text style={styles.label}>
           {Settings.strings.english.description}
        </Text>
        <Text  style={styles.data}>
            {item.description}
        </Text>
        </View>

        <View style={styles.colContainer}>
        <Text style={styles.label}>
           {Settings.strings.english.priority}
        </Text>
        <Text style={styles.data} >
            {itemPriority}
        </Text>
        </View>

        <View style={styles.colContainer}>

        <Text style={styles.label}>
           {Settings.strings.english.category}
        </Text>
        <Text style={styles.data}>
            {item.catagory}
        </Text>
        </View>
        <View  style={styles.rowContainer} >
        <Button onPress={donePressed} title= {Settings.strings.english.completed} />
        <Button onPress={removePressed} title={Settings.strings.english.remove} />
        </View>
    </View>
  
  );
}


