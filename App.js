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
  StatusBar, Button, TextInput, TouchableOpacity
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/header';
import TodoItem from './components/todoItem';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const renderList = () => {
    return ({ item }) => (
      <TodoItem item={item} pressHandler={pressHandler} />
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={renderList()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

export default App;
