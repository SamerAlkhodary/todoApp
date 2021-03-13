
import React from 'react';
import { View,Text,TextInput, Pressable } from 'react-native';
import { Appbar,RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux';
import {addItem} from '../../redux/ItemStore'
import  styles from './styles.js';
import RoundedButton from '../RoundedButton/index.js';


const AddItemComponent = (props) =>{




  const dispatch= useDispatch();
  
  const [title, onChangeTitle] = React.useState('Unkown');
  const [description, onChangeDesc] = React.useState('');
  const {count} = useSelector(state => state.items);
  const {state}= props.navigation;
  const parentState= state.params.title;
  let initValue = parentState=="Home Tasks"?"private":"work";
  const [value, setValue] = React.useState(initValue);
  let headerTitle= parentState!="To Do Tasks"?"Add New "+ parentState.split(" ")[0]+" Task" :"Add New Task"



  return (
   
    <View>
        <Appbar style={styles.bar} >
           
            <Text style ={styles.title}>{headerTitle}</Text>
            <View>
        <Pressable onPress={()=>{props.navigation.navigate('ListPage')}}>
            <AntDesign name='back' style={styles.iconBack }/>
        </Pressable>
            
    </View>

        </Appbar>
        <View style={styles.container}>
        <TextInput style={styles.titleBox} 
        placeholder="Title"
        maxLength={30}
        autoCorrect={false}
        onChangeText={text => onChangeTitle(text)}
      />
       <TextInput style={styles.descriptionBox} 
        placeholder="Description ..."
        maxLength={120}
        autoCorrect={false}
        multiline={true}
        onChangeText={text => onChangeDesc(text)}
      />
      {parentState =="To Do Tasks"&&
    <View>
    <RadioButton.Group onValueChange={value => setValue(value)}value={value}>
      <RadioButton.Item label="Work" value="work"/>
      <RadioButton.Item label="Home"value="private"/>

    </RadioButton.Group>

    </View >
}
    <View style={styles.button}>
      <RoundedButton text="Save" onPress={()=>{
        dispatch(addItem({title:title,description:description,id: count,catagory:value,isDone:(parentState=="Completed Tasks")}));
        props.navigation.navigate('ListPage');
      }}>

      </RoundedButton>
      </View>
     </View>  
    
    </View>
    
          

  );
  };
  export default AddItemComponent;

