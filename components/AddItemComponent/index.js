
import React from 'react';
import { View,Text,TextInput, Pressable } from 'react-native';
import { Appbar,RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux';
import {addItem} from '../../redux/ItemStore'
import  styles from './styles.js';
import RoundedButton from '../RoundedButton/index.js';
import Setting from '../../Strings.js';


const AddItemComponent = (props) =>{




  const dispatch= useDispatch();
  
  const [title, onChangeTitle] = React.useState('Unkown');
  const [description, onChangeDesc] = React.useState('');
  const {count} = useSelector(state => state.items);
  const {state}= props.navigation;
  const parentState= state.params.title;
  let initValue = parentState==Setting.strings.english.homeTasks?"private":"work";
  const [value, setValue] = React.useState(initValue);
  const [priority, setPrioroty] = React.useState('Low');
  let headerTitle= parentState!=Setting.strings.english.toDoTasks?"Add new "+ parentState.split(" ")[0].toLowerCase()+" task" :Setting.strings.english.addNewTask



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
        placeholder={Setting.strings.english.title}
        maxLength={25}
        autoCorrect={false}
        onChangeText={text => onChangeTitle(text)}
      />
       <TextInput style={styles.descriptionBox} 
        placeholder={Setting.strings.english.description}
        maxLength={120}
        autoCorrect={false}
        multiline={true}
        onChangeText={text => onChangeDesc(text)}
      />
      {parentState == Setting.strings.english.toDoTasks&&
    <View style={styles.catagoryContainer}>
      <Text style={styles.catagoryText}>{Setting.strings.english.chooseCategory}</Text>
    <RadioButton.Group onValueChange={value => setValue(value)}value={value}>
      <RadioButton.Item label={Setting.strings.english.work} value="work"/>
      <RadioButton.Item label={Setting.strings.english.home}value="private"/>

    </RadioButton.Group>
    </View >   
}
<View style={styles.priorityContainer}>
      <Text style={styles.catagoryText}>{Setting.strings.english.choosePriority}</Text>
    <RadioButton.Group onValueChange={priority => setPrioroty(priority)}value={priority} >
      <RadioButton.Item label={Setting.strings.english.low} value={100}/>
      <RadioButton.Item label={Setting.strings.english.medium}value={500}/>
      <RadioButton.Item label={Setting.strings.english.high} value={1000}/>

    </RadioButton.Group>
    </View >
    
    <View style={styles.button}>
      <RoundedButton text={Setting.strings.english.save} onPress={()=>{
        dispatch(addItem({title:title,
          description:description,
          id: count,
          catagory:value,
          isDone:(parentState==Setting.strings.english.completedTasks),
          priority:priority
        }));
        props.navigation.navigate('ListPage');
      }}>

      </RoundedButton>
      </View>
     </View>  
    
    </View>
    
          

  );
  };
  export default AddItemComponent;

