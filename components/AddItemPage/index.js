
import React from 'react';
import { View,Text,TextInput, Pressable } from 'react-native';
import { Appbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import  styles from './styles.js';
import RoundedButton from '../RoundedButton/index.js';


const AddItemPage = (probs) =>{
    const [title, onChangeTitle] = React.useState('Unkown');
    const [description, onChangeDesc] = React.useState('');
    console.log(styles.iconBack);

  return (
   
    <View>
        <Appbar style={styles.bar} >
           
            <Text style ={styles.title}>Add New Item</Text>
            <View>
        <Pressable onPress={()=>{probs.nav.navigate('HomePage')}}>
            <AntDesign name='back' style={styles.iconBack }/>
        </Pressable>
            
    </View>

        </Appbar>
        <View style={styles.container}>
        <TextInput style={styles.titleBox} 
        placeholder="Title"
        maxLength={30}
        onChangeText={text => onChangeTitle(text)}
      />
       <TextInput style={styles.descriptionBox} 
        placeholder="Description ..."
        maxLength={120}
        multiline={true}
        onChangeText={text => onChangeDesc(text)}
      />
      <RoundedButton text="Save" onPress={()=>{}}>

      </RoundedButton>
     </View>  
    
    </View>
    
          

  );
  };
  export default AddItemPage;
