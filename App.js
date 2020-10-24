/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar, Button, TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const [name, setName] = useState('shaun');
  // const [age, setAge] = useState('30');
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'karan', id: '3' },
    { name: 'pankaj', id: '4' },
    { name: 'sk', id: '5' },
    { name: 'harry', id: '6' },
    { name: 'logan', id: '7' },

  ])
  const clickHandler = () => {
    setName('Chun-li');
    setPerson({ name: 'Luigi', age: 45 });
  }

  const list = () => {
    return people.map((item) => {
      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })
  }

  const listflat = () => {
    return ({ item }) => (<Text style={styles.item}>{item.name}</Text>)
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={listflat()}
      />
      {/* <ScrollView>
        {list.call(this)}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});

export default App;
