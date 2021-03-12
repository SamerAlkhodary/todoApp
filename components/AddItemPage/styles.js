import {StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
   
    container:{

            width:'100%',
            height:'100%',
            backgroundColor:'white',
            padding:20,
            

    },
    iconCheck:{
        color:'green',
        fontSize:32,
    },
    iconBack:{
        color:'white',
        fontSize:32,
    },
    titleBox:{
         height: 40,
         borderBottomColor: '#000000',
         borderBottomWidth: 1,
         marginBottom:30
         
    },
    iconGroup:{
        flexDirection:'row',
        flex:1,

    },
    title:{
        fontSize:20,
        color:'white',
    },
    descriptionBox:{
        height: 90,
         borderBottomColor: '#000000',
         borderBottomWidth: 1,
         marginBottom:50
    },
    bar:{
        backgroundColor:'#3f4a48',
        width:"100%",
        height:Dimensions.get('window').height/11,
        justifyContent:'space-between',
        
    },
    

});
export default styles;