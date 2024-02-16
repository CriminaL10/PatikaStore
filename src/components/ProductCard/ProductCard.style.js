import {StyleSheet, Dimensions} from 'react-native';
const dimWidth = Dimensions.get('window').width;
const dimHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  productImage: {
    marginTop: 7,
    marginBottom: 5,
    alignSelf: 'center',
    height: dimHeight * 0.3,
    width: dimWidth * 0.44,
    borderRadius: 5,
  },
  productTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
  productPrice: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
  stock: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 15,
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
