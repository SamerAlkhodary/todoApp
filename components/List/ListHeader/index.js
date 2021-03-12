
import React from 'react';
import { FlatList, View,Text, Pressable } from 'react-native';
import RoundedButton from '../../RoundedButton/index.js';
import  styles from './styles.js';
import { MaterialIcons } from '@expo/vector-icons';

const ListHeader = (probs) =>{
  const nav= probs.navigation;

  return (
    <View style={styles.header}>
        <Text style={styles.title}>To Do List</Text>
        <Pressable onPress={()=>{nav.navigate('AddItemPage')}}>
        <MaterialIcons name='add'color='white'style={styles.button}>

        </MaterialIcons>
        </Pressable>
        
      
    </View>
  );
  };
  export default ListHeader;
