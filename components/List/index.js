
import React from 'react';
import { FlatList, View,Text } from 'react-native';
import ListItem from '../ListItem'
import ListHeader from './ListHeader';
import  styles from './styles.js';

const List = (probs) =>{

  const data = probs.items;
  const nav = probs.navigation;


  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({item})=> <ListItem item={item}/>}
        keyExtractor={(item,i)=> i.toString()}
        ListHeaderComponent={()=><ListHeader navigation={nav}></ListHeader>}
        stickyHeaderIndices={[0]}
      >
      </FlatList>

    </View>
  );
  };
  export default List;
