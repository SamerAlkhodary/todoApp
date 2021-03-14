
import React from 'react';
import { View,Text,Button,Pressable } from 'react-native';

import {useDispatch} from 'react-redux';
import Settings from '../../Strings';
import styles from './styles.js';
import {removeItem} from '../../redux/ItemStore'
import { MaterialIcons } from '@expo/vector-icons';
export default function ExtendedItemPage(props) {



  navigation = props.navigation;
  const{state}= navigation; 
  const dispatch= useDispatch();
  const item=  state.params.item;
  const [editState, setEditState] = React.useState(false);

  let itemPriority = 'Low'
  switch(item.priority){
      case 100: itemPriority = 'Low' ;break;
      case 500: itemPriority = 'Meduim' ;break;
      case 1000: itemPriority = 'High' ;break;
  }

    const donePressed= () =>{
        
        dispatch(removeItem({id:item.id,isComplete:true}));
        navigation.navigate('ListPage');
      }
      const removePressed= () =>{
        
        dispatch(removeItem({id:item.id,isComplete:false}));
        navigation.navigate('ListPage');
      }
      const editPressed= ()=> {
          setEditState(!editState);
      }
      
  return (
        

       <View style={styles.container}>
          <View style={styles.appbar}>
          <Text style={styles.appbarTitle}>{Settings.strings.english.item}</Text>
          <Pressable onPress={editPressed}>
        <MaterialIcons name='edit'color='white'style={styles.iconButton}>

        </MaterialIcons>
        </Pressable>
        
          </View>
        
           
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


