
import React from 'react';
import { FlatList, View,Text, Pressable } from 'react-native';
import  styles from './styles.js';
import { MaterialIcons } from '@expo/vector-icons';

const ListHeader = (props) =>{
  const nav= props.navigation;
  const header= props.header;
  const color= props.color;
  console.log(color);

  return (
    <View style={[styles.header,{backgroundColor:color}]}>
        <Text style={styles.title}>{header}</Text>
        <Pressable onPress={()=>{nav.navigate('AddItemPage',{title:props.header})}}>
        <MaterialIcons name='add'color='white'style={styles.button}>

        </MaterialIcons>
        </Pressable>
        
      
    </View>
  );
  };
  export default ListHeader;
