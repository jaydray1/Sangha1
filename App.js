import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Landing from './components/Landing';
import OpenApp from './components/OpenApp';
import StackNavigator from '../Sangha1/components/StackNavigator';

export default class App extends Component {
  render() {
    return (
      <View>
        <StackNavigator></StackNavigator>
        <OpenApp></OpenApp>
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
