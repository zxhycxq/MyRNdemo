/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Routes from './Routes';



export default class App extends Component<{}> {
  static navigationOptions = {
    headerTitle: null,
  };
  render() {
    return (
        <View style={styles.container}>
          <Routes style={styles.Routes}/>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  Routes:{
    // flex: 1,
    backgroundColor: 'orange',
  }
});
