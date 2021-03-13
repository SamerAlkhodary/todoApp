import {StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
   
    container:{

            width:'100%',
            height:'100%',
            backgroundColor:'white',
            padding:20,
            

    },

    button:{
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
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

    title:{
        fontSize:20,
        color:'white',
        marginLeft:20,
        fontWeight:"bold"
    },
    descriptionBox:{
        height: 90,
         borderBottomColor: '#000000',
         borderBottomWidth: 1,
         marginBottom:50
    },
    bar:{
        backgroundColor:'#2F9599',
        width:"100%",
        height:Dimensions.get('window').height/11,
        justifyContent:'space-between',
        
    },
    

});
export default styles;