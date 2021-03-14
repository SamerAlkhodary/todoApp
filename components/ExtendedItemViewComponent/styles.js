import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0

  },

  colContainer: {

    width: "90%",
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 10

  },
  rowContainer: {
    marginTop: 30,
    width: "90%",
    justifyContent: 'center',
    flexDirection: 'row',

  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  data: {
    fontSize: 16,
  },
  priorityContainer: {
    flexDirection: 'row',
  }

});

export default styles;