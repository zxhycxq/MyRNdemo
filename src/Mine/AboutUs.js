import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  InteractionManager,
  TextInput,
NativeModules
} from 'react-native';
import { width, height } from '../Util/Size';
import Gstyles from '../Util/GlobalStyles';


class AboutUsScreen extends Component {
 /* static navigationOptions = {
    title: '关于'
  }*/
  
  click(){
    console.log('NFC')
    // NativeModules.MyMapIntentModule.startActivityByClassname('com.www.ControlPCActivity')
    NativeModules.MyMapIntentModule.startActivityByClassname("com.myrndemo.Main2Activity")
  // 继承自ReactContextBaseJavaModule. 那个页面的ReactMethod 方法  | setContentView(R.layout.activity_main2);
  }
 
  static navigationOptions = ({navigation}) => {
    return ({
      headerLeft: (
          <TouchableOpacity style={Gstyles.Topnav}
                            onPress={() => navigation.goBack (null)}>
            <Image style={{width: 30, height: 30, marginLeft: 10,}}
                   source={require ('../img/Common/returunLeft.png')}/>
            <Text style={{color: '#fff', fontSize: 18}}>返回</Text>
          </TouchableOpacity>
      ),
      // headerTitle: '',
      headerStyle: {backgroundColor: '#C4271E', elevation: 0},
      headerTitleStyle: {color: '#fff', alignSelf: 'center'},
    })
  }
  render() {
    return (
        <View style={styles.AboutUs}>
          <TouchableOpacity
                            onPress={this.click.bind(this)}>
          <Text style={{color: '#fff', fontSize: 18,marginTop:20,}}>Aboust关于我们页面</Text>
          </TouchableOpacity>
          
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  AboutUs: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: '#006633',
    position:'relative'
  },
})

export default AboutUsScreen;
