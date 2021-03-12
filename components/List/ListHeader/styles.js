import {StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
   
    header:{
        padding:20,
            width:'100%',
            height: Dimensions.get('window').height/10,
            backgroundColor:'#3f4a48',
            flex:1,
            justifyContent:'space-between',
            flexDirection:'row'
     
        
    },
    button:{
        fontSize:40,
    
    },
    title:{
        fontSize:30,
        alignSelf:'center',

        fontWeight:'bold',
       
        color:'white',

    }

    

});
export default styles;