import React, { Component } from 'react';
import {View, Text, Button,TouchableOpacity, Image, StyleSheet, TextInput, ToastAndroid,NativeModules } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
// import { width, height } from './Util/Size';
import DeviceInfo from 'react-native-device-info'
class SetUpScreen extends Component {
  
  componentDidMount() {
  
    console.log("Device Unique ID", DeviceInfo.getUniqueID()); // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
// * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled
    console.log("Device Manufacturer", DeviceInfo.getManufacturer()); // e.g. Apple
    console.log("Device Model", DeviceInfo.getModel()); // e.g. iPhone 6
    console.log("Device ID", DeviceInfo.getDeviceId()); // e.g. iPhone7,2 / or the board on Android e.g. goldfish
    console.log("Device Name", DeviceInfo.getSystemName()); // e.g. iPhone OS
    console.log("Device Version", DeviceInfo.getSystemVersion()); // e.g. 9.0
    console.log("Bundle Id", DeviceInfo.getBundleId()); // e.g. com.learnium.mobile
    console.log("Build Number", DeviceInfo.getBuildNumber()); // e.g. 89
    console.log("App Version", DeviceInfo.getVersion()); // e.g. 1.1.0
    console.log("App Version (Readable)", DeviceInfo.getReadableVersion()); // e.g. 1.1.0.89
    console.log("Device Name", DeviceInfo.getDeviceName()); // e.g. Becca's iPhone 6
    console.log("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
    console.log("Device Locale", DeviceInfo.getDeviceLocale()); // e.g en-US
    console.log("Device Country", DeviceInfo.getDeviceCountry()); // e.g US
  

  }
  
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

