import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Landing from './components/Landing';

export default class App extends Component {
  render() {
    return (
      <View>
        <Landing></Landing>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
