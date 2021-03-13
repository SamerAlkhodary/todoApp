
import React from 'react';
import {  StyleSheet, View,Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector } from 'react-redux';
import Setting from '../Strings.js';


import Dashboard from 'react-native-dashboard';

export default function DashBoardPage(props) {
    const {toDoItems} = useSelector(state => state.items);
    const ratio = toDoItems.length==0?0:Math.floor((toDoItems.filter((item)=>(item.isDone)).length/toDoItems.length)*100);
  
    const navigation = props.navigation;
    const card = ({ name,background }) =>{
      navigation.navigate('ListPage',{title:{name},color:background});
          
        
    };
    const data=[{name:Setting.strings.english.toDoTasks,background: '#A7226E'},
    {name:Setting.strings.english.completedTasks,background: '#EC2049'},
    {name:Setting.strings.english.workTasks,background: '#F26B38'},
    {name:Setting.strings.english.homeTasks,background: '#2F9599'}]
  return (
  
     
     <View style={styles.container}>
        <View style={styles.progressBar}>
        <AnimatedCircularProgress
            size={200}
            width={10}
            fill={ratio}
            tintColor="#F7DB4F"
            backgroundColor="#3d5875">
            {
            (fill) => (
                <Text>
                    {ratio}% Completed
                </Text>
            )
            }
        </AnimatedCircularProgress>
    
        </View>
         
      <Dashboard data={data} background={true} card={card} column={2} />
    </View>
        
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
  progressBar: {
    width:"100%",
   justifyContent:'center',
   alignItems:'center',
   marginTop:20,
   marginBottom:20
  
  },
});
