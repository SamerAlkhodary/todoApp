import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    header: {
        padding: 20,
        width: '100%',
        height: Dimensions.get('window').height / 10,
        backgroundColor: '#2F9599',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    iconContainer: {
        flexDirection: 'row',

    },
    button: {
        fontSize: 40,

    },
    title: {
        fontSize: 20,
        alignSelf: 'center',

        fontWeight: 'bold',

        color: 'white',

    }



});
export default styles;