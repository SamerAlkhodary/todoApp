
import React from 'react';
import { FlatList, View,Text, Pressable } from 'react-native';
import  styles from './styles.js';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import Setting from '../../../Strings.js';


const ListHeader = (props) =>{
  const nav= props.navigation;
  const header= props.header;
  const color= props.color;
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const donePressed= () =>{
    setVisible(false);
    dispatch(removeItem({id:item.id,isComplete:true}));
  }
  const removePressed= () =>{
    setVisible(false);
    dispatch(removeItem({id:item.id,isComplete:false}));
  }

  return (
    <View style={[styles.header,{backgroundColor:color}]}>
        <Text style={styles.title}>{header}</Text>

       <View style={styles.iconContainer}>
       <Pressable onPress={()=>{nav.navigate('AddItemPage',{title:props.header})}}>
        <MaterialIcons name='add'color='white'style={styles.button}>

        </MaterialIcons>
        </Pressable>
        <Pressable onPress={showDialog}>
        <AntDesign name='filter'color='white'style={styles.button}>

        </AntDesign>
        </Pressable>
        
       </View>
       <Portal>
       
       <Dialog visible={visible} onDismiss={hideDialog}>
         <Dialog.Title>{Setting.strings.english.filterBy}</Dialog.Title>
         <Dialog.Actions>
         <Button onPress={donePressed}  >{Setting.strings.english.priority}</Button>
           <Button onPress={removePressed} >{Setting.strings.english.title}</Button>
         </Dialog.Actions>
       </Dialog>

     </Portal>  
      
    </View>
  );
  };
  export default ListHeader;
