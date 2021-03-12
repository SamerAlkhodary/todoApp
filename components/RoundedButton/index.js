import  styles from './styles.js'
import React from 'react';

import { Pressable, View,Text } from 'react-native';
const RoundedButton = (probs) =>{
    const text = probs.text;
    const onPress= probs.onPress; 
    
    return(
        <View style={styles.container}>
        <Pressable onPress={onPress}>
            <View style={styles.roundedButton}>
                <Text style={styles.title}>
                    {text}
                </Text>
            
            </View> 
        </Pressable>
    

        </View>

    );

};
export default RoundedButton;