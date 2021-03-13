import {StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
    ItemContainer: {
        width: '90%',
        margin:10,
        borderRadius:20,
        padding:10,
        height: Dimensions.get('window').height/7,
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,

    },

    title: {
        fontSize:20,
        fontWeight:"500",
        marginLeft:20,

    },
    description:{
        fontSize:15,
        marginLeft:20,
        width:"92%",
        color:'grey'
        
    },
    header:{

        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    icons:{
        justifyContent:'center',
        fontSize:30,
        justifyContent:'center',
        color:'white'

        
    },
    cirlceButton:{
        height:30,
        width:30,
        borderRadius:30,
        backgroundColor:'#e6e6fa',
        alignSelf:'flex-end'

    },
 
});
export default styles;