import {  StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      

      padding:10
      
    },
    colContainer: {
       
        width:"90%",
        marginTop:40,
        marginBottom:30
        
    },
    rowContainer: {
        marginTop:30,
        width:"90%",
        justifyContent:'center',
        flexDirection:'row',
        flex:1,


    },
    label: {
        fontSize:18,
        fontWeight:"500",
        marginBottom:10,
      },    
    data: {
        fontSize:16,
        
      }, 
    
  });

  export default styles;