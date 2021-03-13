
import React from 'react';
import { View,Text,TextInput, Pressable } from 'react-native';
import { Appbar,RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux';
import {addItem} from '../../redux/ItemStore'
import  styles from './styles.js';
import RoundedButton from '../RoundedButton/index.js';


const AddItemComponent = (probs) =>{




  const dispatch= useDispatch();
  const [title, onChangeTitle] = React.useState('Unkown');
  const [description, onChangeDesc] = React.useState('');
  const {toDoItems,doneItems,count} = useSelector(state => state.items);
  const [value, setValue] = React.useState('work');


  return (
   
    <View>
        <Appbar style={styles.bar} >
           
            <Text style ={styles.title}>Add New Item</Text>
            <View>
        <Pressable onPress={()=>{probs.nav.navigate('ListPage')}}>
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
    <View>
    <RadioButton.Group onValueChange={value => setValue(value)}value={value}>
      <RadioButton.Item label="Work" value="work"/>
      <RadioButton.Item label="Private"value="private"/>

    </RadioButton.Group>

    </View >
    <View style={styles.button}>
      <RoundedButton text="Save" onPress={()=>{
        dispatch(addItem({title:title,description:description,id: count,catagory:value,isDone:(false)}));
        probs.nav.navigate('ListPage');
      }}>

      </RoundedButton>
      </View>
     </View>  
    
    </View>
    
          

  );
  };
  export default AddItemComponent;

