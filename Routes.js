import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  TextInput,
  ToastAndroid,
  NativeModules
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import SetUpScreen from './src/SetUp';
import AboutUsScreen from './src/Mine/AboutUs';
import SettingScreen from './src/Mine/Set';
import HomeScreen from './src/Home';


const SettingStack = StackNavigator ({
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: null,
    }
  },
  AboutUs: {screen: AboutUsScreen}
}, {
  /* navigationOptions:{
     header:null,
   }*/
})

const styles = StyleSheet.create ({
  icon: {
    width: 26,
    height: 26,
  },
  BottomIcon: {
    width: 36,
    height: 36,
  },
});

const TabAllScreen = TabNavigator ({
  首页: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
          (
              <Image
                  style={[{tintColor: tintColor}, styles.BottomIcon]}
                  source={require ('./src/img/Common/home-yellow.png')}
              />
          ),
    },
  },
  我的: {
    screen: SettingStack,
    navigationOptions: {
      
      tabBarIcon: ({tintColor}) =>
          (
              <Image
                  style={[{tintColor: tintColor}, styles.BottomIcon]}
                  source={require ('./src/img/Common/user-grey.png')}
              />
          ),
    },
  },
  
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    style: {backgroundColor: '#fff', height: 60, overflow: 'visible', marginTop: 0, position: 'relative'},
    activeBackgroundColor: 'orange',
    inactiveTintColor: '#000',
    activeTintColor: '#C4271E',
    indicatorStyle: {height: 0},
    showIcon: true,
    iconStyle: {width: 40, height: 40, overflow: 'visible'},
    tabStyle: {paddingTop: 2, paddingBottom: 0},
    labelStyle: {fontSize: 12, marginTop: 0, marginBottom: 5}
  },
  headerMode: 'none'
});
const Routes = StackNavigator (
    {
      SetUp: {screen: SetUpScreen},
      TabAll: {screen: TabAllScreen},
      
    },
    {
      initialRouteName: 'SetUp',
      headerMode: 'none',
      navigationOptions: {
        gesturesEnabled: false
      }
    }
)


export default Routes;
