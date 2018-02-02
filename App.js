import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './config/router';

export default class App extends Component {
  render() {
    return (
      <Root/>
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
