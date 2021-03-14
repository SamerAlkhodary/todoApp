import  styles from './styles.js'
import React, { Component } from 'react';
import { View,Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {removeItem} from '../../redux/ItemStore'

const ListItem = (props) =>{
    const dispatch= useDispatch();
    const item = props.item;
    const maxlimit = 30;

    
    const itemPressed=()=>{
      props.navigation.navigate('ExtendedItemPage',{item:item});

    }

    return(
        <View style={styles.ItemContainer}>
            <Pressable onPress={itemPressed}> 
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


        </View>

    );

};
export default ListItem;