import  styles from './styles.js'
import React, { Component } from 'react';
import { View,Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ListItem = (probs) =>{
 
    const item = probs.item;
    
    return(
        <View style={styles.ItemContainer}>
            <View style= {styles.header}>
            <View style={styles.cirlceButton}>
                <Pressable onPress={
                    ()=>{
                        console.log("delete me ");
                    }

                }>
                <AntDesign name ='closecircleo' style={styles.icons}/>
                </Pressable>
            </View>
            
            <Text style={styles.title}>
                {item.title}
            </Text>
            </View>
           
            <Text style={styles.description}>
                {item.description}
            </Text>
            

        </View>

    );

};
export default ListItem;