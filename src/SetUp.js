import React, { Component } from 'react';
import {View, Text, Button,TouchableOpacity, Image, StyleSheet, TextInput, ToastAndroid,NativeModules } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
// import { width, height } from './Util/Size';

class SetUpScreen extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return(
        <View style={styles.SetUp}>
          <TouchableOpacity
              style={styles.Topnav}
              onPress={()=>{navigate('TabAll', { user: 'TabAll' })}}
          >
            <Text style={{color: '#C4271E', fontSize: 18, marginLeft: 16,}}>进入首页</Text>
            
          </TouchableOpacity>
        </View>
    ) ;
  }
}

const styles = StyleSheet.create ({
  SetUp: {
    flex: 1,
    // width:200,
    // height:200,
    backgroundColor: 'orange',
  },
  Topnav: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

export default SetUpScreen;

