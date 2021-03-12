import {StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
    ItemContainer: {
        width: '90%',
        margin:20,
        borderRadius:20,
        height: Dimensions.get('window').height/8,
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,

    },
    title: {
        fontSize:25,
        fontWeight:"500",
        marginLeft:20,

    },
    description:{
        fontSize:15,
        marginLeft:20,
        color:'grey'
        
    },
    header:{
        marginTop:10,

    },
    icons:{
        justifyContent:'center',
        fontSize:25,
        alignSelf:'flex-end'
    }
    

});
export default styles;