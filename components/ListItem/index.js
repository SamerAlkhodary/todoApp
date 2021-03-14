import  styles from './styles.js'
import React, { Component } from 'react';
import { View,Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {removeItem} from '../../redux/ItemStore'

const ListItem = (props) =>{
    const dispatch= useDispatch();
    const item = props.item;
    const maxlimit = 30;

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


    
    return(
        <View style={styles.ItemContainer}>
            <Pressable onPress={showDialog}> 
            <View style= {styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.cirlceButton}>
                <Pressable onPress={
                    ()=>{
                        dispatch(removeItem({id:item.id,isComplete:false}));
                    }
                }>
                <AntDesign name ='closecircleo' style={styles.icons}/>
                </Pressable>
            </View>
            
            </View>
            <Text style={styles.description}>
            { ((item.description).length > maxlimit) ? 
            (((item.description).substring(0,maxlimit-3)) + '...') : 
            item.description }
          
            </Text>
            </Pressable>

        <Portal>
       
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{item.title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{item.description}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
          <Button onPress={donePressed}  >Completed</Button>
            <Button onPress={removePressed}  >Remove</Button>
          </Dialog.Actions>
        </Dialog>

      </Portal>

        </View>

    );

};
export default ListItem;