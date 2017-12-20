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
import ActionSheet from 'react-native-actionsheet'


const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = [ 'Cancel', 'Apple', 'Banana', 'Watermelon', 'Durian' ]
const title = 'Which one do you like?'

class AboutCompanyScreen extends Component {
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
  
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
    this.handlePress = this.handlePress.bind(this)
    this.showActionSheet = this.showActionSheet.bind(this)
  }
  
  showActionSheet() {
    this.ActionSheet.show()
  }
  
  handlePress(i) {
    this.setState({
      selected: i
    })
  }
  
  
  
  render() {
    return (
        <View style={styles.AboutCompany}>
          <TouchableOpacity
                            onPress={this.click.bind(this)}>
          <Text style={{color: '#fff', fontSize: 18,marginTop:20,}}>11111111111111</Text>
          </TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={{marginBottom: 20}} >I like {options[this.state.selected]}</Text>
            <Text style={styles.button} onPress={this.showActionSheet}>Example A</Text>
            <ActionSheet
                ref={o => this.ActionSheet = o}
                title={title}
                options={options}
                cancelButtonIndex={CANCEL_INDEX}
                destructiveButtonIndex={DESTRUCTIVE_INDEX}
                onPress={this.handlePress}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  AboutCompany: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: '#006633',
    position:'relative'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 200,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#38f'
  }
})

export default AboutCompanyScreen;
