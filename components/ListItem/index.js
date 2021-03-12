import  styles from './styles.js'
import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ListItem = (probs) =>{
 
    const item = probs.item;
    
    return(
        <View style={styles.ItemContainer}>
            <View style= {styles.header}>
            <AntDesign name ='closecircleo'color='black'style={styles.icons}/>
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