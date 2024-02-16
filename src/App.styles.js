import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 33,
    color: '#800080',
    margin: 3,
  },
  searchBar: {
    margin: 5,
    backgroundColor: '#ECEFF1',
    borderRadius: 5,
    padding: 10,
  },

  product: {
    flex: 1,
    margin: 5,
    //    borderWidth: 1,
    backgroundColor: '#ECEFF1',
    borderRadius: 7,
    verticalAlign: 'auto',
    justifyContent: 'space-between',
  },
});
export default styles;
