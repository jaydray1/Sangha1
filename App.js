import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import OpenApp from './components/OpenApp';
import StackNavigator from '../Sangha1/components/StackNavigator';

export default class App extends Component {
  render() {
    return (
      <StackNavigator/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
