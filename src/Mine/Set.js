import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
  InteractionManager,
  TextInput,
  ToastAndroid,
} from 'react-native';
import { width, height } from '../Util/Size';
import BtnCell from '../Common/BtnCell';


class SettingScreen extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      data: {
        list1: [true, false, false],
        list2: [true, false, false],
      }
    };
  }
  
  click(index) {
    console.log('索引---'+index);
    var allstate = {
      0: [true, false, false],
      1: [false, true, false],
      2: [false, false, true]
    }
    this.setState ({
      data: {
        list1: [false, false, false],
      }
    })
    console.log('this.state.data.list1--1 '+this.state.data.list1);
    this.setState ({
      data: {
        list1: allstate[index],
      }
    })
    console.log('更新后的this.state.data.list1--2 '+this.state.data.list1);
  }
  
  render() {
    // console.log ('list1[0]--  ' + this.state.data.list1[0]);
    // console.log ('list1[1]--  ' + this.state.data.list1[1]);
    // console.log ('list1[2]--  ' + this.state.data.list1[2]);
    return (
        <View style={styles.AboutUs}>
          {/*<Text style={{fontSize: 13, color: '#777'}}>哈哈哈哈</Text>*/}
          {/*   <Button
              onPress={() => this.props.navigation.navigate ('AboutUs')}
              title="现在是我的Setting页面"
          />*/}
          <View style={styles.AboutUs}>
            <TouchableOpacity style={[{marginBottom: 10}]}
                              onPress={this.click.bind (this,0)}
            >
              <View
                  style={[styles.NewPayList, {backgroundColor: this.state.data.list1[0] === true ? 'orange' : '#aaa'}]}>
                <Text style={[styles.NewPayTxt, {color: '#fff'}]}>2元</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[{marginBottom: 10}]}
                              onPress={this.click.bind (this,1)}
            >
              <View
                  style={[styles.NewPayList, {backgroundColor: this.state.data.list1[1] === true ? 'orange' : '#aaa'}]}>
                <Text style={[styles.NewPayTxt, {color: '#fff'}]}>2元</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[{marginBottom: 10}]}
                              onPress={this.click.bind (this,2)}
            >
              <View
                  style={[styles.NewPayList, {backgroundColor: this.state.data.list1[2] === true ? 'orange' : '#aaa'}]}>
                <Text style={[styles.NewPayTxt, {color: '#fff'}]}>2元</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*  <BtnCell title="10元"
                    style={{backgroundColor:'#000'}}
                   onPress={()=>this.click}
          />
          <BtnCell title="20元"
                   onPress={()=>this.click}
          />
          <BtnCell title="30元"
                   onPress={()=>this.click}
          />*/}
        
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  AboutUs: {
    // marginTop: 20,
    // flex: 1,
    // backgroundColor: 'red',
    marginBottom: 10,
    paddingBottom: 20,
  }, NewPayWrap: {
    width: width * 0.3,
    left: width * 0.1 - 20,
    // backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // alignItems:'center',
    paddingTop: 10,
    // paddingBottom:10,
  },
  NewPayList: {
    borderWidth: 1,
    // backgroundColor: '#aaa',
    borderColor: 'cyan',
    width: width / 3 - 20,
    // backgroundColor: '#fff',
    // marginBottom:10,
    // padding:20,
  },
  NewPayTxt: {
    fontSize: 14,
    // color:'#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  }
})

export default SettingScreen;
