
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import List from '../components/List';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
  import Setting from '../Strings.js';

export default function ListPage(props) {



  navigation = props.navigation;
  const{toDoItems}=useSelector(state => state.items);
  const{state}= navigation; 
  const title=  state.params.title.name;
  const color=  state.params.color;
  let list=[]
  switch(title){
    case Setting.strings.english.toDoTasks:
      list=toDoItems.filter((item)=>!item.isDone);
      break;
    case Setting.strings.english.completedTasks:
      list=toDoItems.filter((item)=>item.isDone);
      break;
      case Setting.strings.english.workTasks:
      list=toDoItems.filter((item)=>item.catagory==="work" && !item.isDone);
      break;
      case Setting.strings.english.homeTasks:
      list=toDoItems.filter((item)=>item.catagory==="private"&& !item.isDone);
      break;

  }
  return (
    
    <PaperProvider>
       <View style={styles.container}>
      <List items={list} navigation={navigation} header={title}color ={color}></List>
    
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
