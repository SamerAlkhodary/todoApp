import  styles from './styles.js'
import React, { Component } from 'react';
import { View,Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import RoundedButton from '../RoundedButton';

const ListItem = (probs) =>{
 
    const item = probs.item;
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);


    
    return(
        <View style={styles.ItemContainer}>
            <Pressable onPress={showDialog}> 
            <View style= {styles.header}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <View style={styles.cirlceButton}>
                <Pressable onPress={
                    ()=>{
                        console.log("delete me ");
                    }

                }>
                <AntDesign name ='closecircleo' style={styles.icons}/>
                </Pressable>
            </View>
            
            
            </View>
           
            <Text style={styles.description}>
                {item.description}
            </Text>
            </Pressable>

        <Portal>
       
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{item.title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{item.description}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <RoundedButton onPress={hideDialog} text="Done"></RoundedButton>
          </Dialog.Actions>
        </Dialog>

      </Portal>

        </View>

    );

};
export default ListItem;