import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.product}>
      <Image
        style={styles.productImage}
        source={{uri: product.imgURL}}
        resizeMode="contain"
      />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      {product.inStock ? null : <Text style={styles.stock}>STOKTA YOK</Text>}
    </View>
  );
};

export default ProductCard;
