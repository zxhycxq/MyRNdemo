  import React, { Component } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Button,
  } from 'react-native';
  import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
  import SetUpScreen from './src/SetUp';
  import AboutUsScreen from './src/Mine/AboutUs';
  import SettingScreen from './src/Mine/Set';
  import HomeScreen from './src/Home';
  import CodeScreen from './src/Code';
  import Icon from 'react-native-vector-icons/Ionicons';
  import AccordionView from './src/Common/Collapsible'
  import { width, height } from './src/Util/Size';
  
  const SettingStack = StackNavigator ({
    Setting: {
      screen: SettingScreen,
      
    },
    AboutUs: {screen: AboutUsScreen}
  }, {
    /* navigationOptions:{
       header:null,
     }*/
  })
  
  
  
  class TabBar extends Component {
    render() {
      return <View style={{width:60,height:40,backgroundColor:'red',position:'absolute',top:20,left:20,zIndex:100,}}></View>;
    }
  }
  
  // export default TabBar;
  
  const TabAllScreen = TabNavigator ({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
            (
                <View style={styles.item}>
                  <View style={{ position: 'absolute', right: -4, top: -2, backgroundColor: 'blue', borderRadius:4, width: 8, height: 8, justifyContent: 'center', alignItems: 'center' }}></View>
                <Icon name="md-heart" size={30} />
                </View>
            ),
      },
    },
    Code: {
      screen: AccordionView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
            (
                <View style={{width:70,height:70,backgroundColor:'orange'}}>
                  <View style={{ position: 'absolute', right: -4, top: -2, backgroundColor: 'blue', borderRadius:4, width: 8, height: 8, justifyContent: 'center', alignItems: 'center' }}></View>
                {/*<Icon name="md-heart" size={30} />*/}
                </View>
            ),
      },
    },
    My: {
      screen: SettingStack,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) =>
            (
                <View style={styles.item}>
                  <Image
                      style={[{tintColor: tintColor}, styles.bigBG]}
                      source={require ('./src/img/tab-bar.png')}
                  />
                  <Icon name="md-tennisball" size={30} style={[styles.icon,{color:tintColor}]}/>
                </View>
            ),
      },
    },
    
  }, {
    tabBarPosition: 'bottom',
    // tabBarComponent: TabBar,
    swipeEnabled: false,
    backBehavior: 'none',
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        position:'relative',
        backgroundColor: '#eee',
        height: 60,
        overflow: 'visible',
        marginTop: 0,
        position: 'relative',
        borderTopWidth: 1,
        borderTopColor: 'red',
        paddingTop:0,
      },
      activeBackgroundColor: 'orange',
      activeTintColor: '0bb20c',
      inactiveTintColor: '#999',
      activeTintColor: '#C4271E',
      indicatorStyle: {height: 0},
      showIcon: true,
      showlabel: false,
      iconStyle: {width: 40, height: 40, overflow: 'visible'},
      tabStyle: {paddingTop: 2, paddingBottom: 0},
      // labelStyle: {fontSize: 12, marginTop: 0, marginBottom: 5}
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
  
  const styles = StyleSheet.create ({
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 25,
    },
    label: {
      fontSize: 10,
    },
    bigBG: {
      position: 'absolute',
      width: width,
      height: 30,
    },
    
    bigIcon: {
      marginTop: -10,
      fontSize: 35,
      color: 'cyan',
    },
    icon: {
      width: 26,
      height: 26,
    },
    BottomIcon: {
      width: 36,
      height: 36,
    },
  })
  
  export default Routes;
