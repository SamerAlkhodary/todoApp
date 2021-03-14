import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 0

    },
    colContainer: {

        width: "90%",
        marginTop: 40,
        marginBottom: 30,
        marginLeft: 10

    },

    rowContainer: {
        marginTop: 30,
        width: "90%",
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10,
    },
    data: {
        fontSize: 16,
    },
    iconButton: {
        marginTop: 10,
        fontSize: 30,

    },
    appbarTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'

    },
    appbar: {
        padding: 10,
        width: "100%",
        height: Dimensions.get('window').height / 10,
        justifyContent: 'space-between',
        backgroundColor: '#228ae6',
        flexDirection: 'row',
    },

});

export default styles;