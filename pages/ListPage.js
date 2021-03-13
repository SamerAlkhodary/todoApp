
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import List from '../components/List';
import { Provider as PaperProvider } from 'react-native-paper';
  import { useSelector } from 'react-redux';

export default function ListPage(props) {



  navigation = props.navigation;
  const{toDoItems}=useSelector(state => state.items);
  const{state}= navigation; 
  const title=  state.params.title.name
  let list=[]
  switch(title){
    case "To Do List":
      list=toDoItems.filter((item)=>!item.isDone);
      break;
    case "Completed List":
      list=toDoItems.filter((item)=>item.isDone);
      break;
      case "Work List":
      list=toDoItems.filter((item)=>item.catagory==="work" && !item.isDone);
      break;
      case "Private List":
      list=toDoItems.filter((item)=>item.catagory==="private"&& !item.isDone);
      break;

  }
  return (
    
    <PaperProvider>
       <View style={styles.container}>
      <List items={list} navigation={navigation} header={title}></List>
    
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
