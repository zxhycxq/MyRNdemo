import React, { Component } from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,Button,TextInput,ToastAndroid,NativeModules} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';



class CodeScreen extends React.Component {
  static navigationOptions = {
    // tabBarLabel: '首页',
    header: null,
  };
  
  render() {
    return (
        <Button
            onPress={() => this.props.navigation.navigate ('Setting')}
            title="去我饿页面"
        />
    );
  }
}
export default CodeScreen;
