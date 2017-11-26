import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <View>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
