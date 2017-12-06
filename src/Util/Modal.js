import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal  ,TouchableHighlight, } from 'react-native';

import { width, height } from '../Util/Size';
import Gstyles from '../Util/GlobalStyles';
import BtnCell from '../Component/BtnCell';

class UModal extends Component {
  static navigationOptions = ({navigation}) => {
    return ({
      headerLeft: (
          <TouchableOpacity style={Gstyles.Topnav}
                            onPress={() => navigation.goBack ()}>
            <Image style={{width: 30, height: 30, marginLeft: 10,}}
                   source={require ('../img/Common/returunLeft.png')}/>
            <Text style={{color: '#fff', fontSize: 18}}>返回</Text>
          </TouchableOpacity>
      ),
      headerTitle: '弹窗',
      headerStyle: {backgroundColor: '#C4271E', elevation: 0},
      headerTitleStyle: {color: '#fff', alignSelf: 'center'},
    })
  }

  constructor(props) {
    super (props);

    this.handleClick = this.handleClick.bind (this);
    // this.handleClickModal = this.handleClickModal.bind (this);

    this.state = {
      active: false,
    };
  }

  handleClick() {
    this.setState ({
      active: !this.state.active,
    })
  }


  render() {
    return (
        <View style={styles.PageView}>
          <BtnCell title="hahahhahh"
                   onPress={this.handleClick()}
          />
          <Modal
              animationType='slide'
              transparent={true}
              visible={this.state.active}
              onShow={() => {}}
              onRequestClose={() => {}} >
            <View style={styles.modalStyle}>
              <View style={styles.subView}>
                <Text style={styles.titleText}>
                  提示
                </Text>
                <Text style={styles.contentText}>
                  Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果
                </Text>
                <View style={styles.horizontalLine} />
                <View style={styles.buttonView}>
                  <TouchableHighlight underlayColor='transparent'
                                      style={styles.buttonStyle}
                                      onPress={this.handleClick.bind(this)}>
                    <Text style={styles.buttonText}>
                      取消
                    </Text>
                  </TouchableHighlight>
                  <View style={styles.verticalLine} />
                  <TouchableHighlight underlayColor='transparent'
                                      style={styles.buttonStyle}
                                      onPress={this.handleClick.bind(this)}>
                    <Text style={styles.buttonText}>
                      确定
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  PageView: {
    flex: 1,
  },
  btn: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Modal:{
    width:200,
    height:200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  modalStyle: {
    // backgroundColor:'#ccc',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
  // modal上子View的样式
  subView:{
    marginLeft:60,
    marginRight:60,
    backgroundColor:'#fff',
    alignSelf: 'stretch',
    justifyContent:'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#ccc',
  },
  // 标题
  titleText:{
    marginTop:10,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  // 内容
  contentText:{
    margin:8,
    fontSize:14,
    textAlign:'center',
  },
  // 水平的分割线
  horizontalLine:{
    marginTop:5,
    height:0.5,
    backgroundColor:'#ccc',
  },
  // 按钮
  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle:{
    flex:1,
    height:44,
    alignItems: 'center',
    justifyContent:'center',
  },
  // 竖直的分割线
  verticalLine:{
    width:0.5,
    height:44,
    backgroundColor:'#ccc',
  },
  buttonText:{
    fontSize:16,
    color:'#3393F2',
    textAlign:'center',
  },
})

export default UModal;
