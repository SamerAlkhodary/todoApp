
import React from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../ListItem'
import  styles from './styles.js';

const List = (probs) =>{

  const data = probs.items;

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({item})=> <ListItem item={item}/>}
        keyExtractor={(item,i)=> i}
      >
      </FlatList>

    </View>
  );
  };
  export default List;
