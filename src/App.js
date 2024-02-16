import React from 'react';
import {useState} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import storeData from './storeData.json';
import ProductCard from './components/ProductCard';
import styles from './App.styles';

const App = () => {
  const [text, setText] = useState('');
  const dataFilter = storeData.filter(item => {
    const textToLower = text.toLowerCase();
    return item.title.toLowerCase().includes(textToLower);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Ara.."
        onChangeText={setText}
        value={text}
      />
      <FlatList
        numColumns={'2'}
        data={text ? dataFilter : storeData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCard product={item} />}
      />
    </View>
  );
};

export default App;
