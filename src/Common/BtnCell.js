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
  
} from 'react-native';
import { width, height } from '../Util/Size';
import Gstyles from '../Util/GlobalStyles';


class BtnCell extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          checkType:[true, true, true],
        };
      }
  
  render() {
    const {title} = this.props;
    return (
        <View style={styles.AboutUs}>
          <TouchableOpacity style={[{marginBottom:10}]}
                            onPress={(info) => this.props.onPress (info)}
          >
            <View style={[styles.NewPayList,]}  >
              <Text  style={[styles.NewPayTxt,{color:'#fff'}]}>2元</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  AboutUs: {
    // marginTop: 20,
    // flex: 1,
    // backgroundColor: 'orange',
    marginBottom:10,
    paddingBottom:20,
  },
  TopUpview: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  Topview: {
    backgroundColor: '#31487f',
    width: width,
    height: 90,
    flexDirection: 'column',
    alignItems: 'center',
  },
  payView: {
    width: width * 0.9,
    marginLeft: width * 0.05,
    marginTop: 0,
    //todo2 flex布局问题
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 10,
  },
  payNumView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
    marginBottom: 4,
  },
  payNumViewR: {
    flexDirection: 'row',
  },
  NumInput: {
    width: 120,
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: '#31487f',
    paddingBottom: 0,
  },
  lastCellView: {
    marginBottom: 20,
  },
  TopviewTxt: {
    fontSize: 24,
    color: '#fff'
  },
  TopviewTxt2: {
    fontSize: 16,
    color: '#fff'
  },
  payStyleView: {
    flexDirection: 'column',
  },
  payStyleList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  payStyleListL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payLogo: {
    width: 140,
    height: 40,
  },
  checkbox: {
    width: 40,
    height: 40,
  },
  CardView: {
    width: width * 0.9,
    marginBottom: 5,
    borderRadius:10,
    left: width * 0.05,
    top: 5,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cardTop: {
    position: 'absolute',
    left: width * 0.1 - 10,
    top: width * 0.1 - 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardImg: {
    width: width * 0.9,
    height: 200,
    borderRadius: 1,
  },
  cardNum: {
    position: 'absolute',
    right: width * 0.05 - 10,
    top: 160,
    fontSize: 14,
    color: '#fff'
  },
  cardNum1: {
    position: 'absolute',
    right: width * 0.05 - 10,
    top: 120,
    fontSize: 26,
    color: '#fff'
  },
  NewPayWrap:{
    width:width*0.9,
    left: width * 0.1 -20,
    backgroundColor: '#fff',
    marginBottom:10,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-around',
    // alignItems:'center',
    paddingTop:10,
    // paddingBottom:10,
  },
  NewPayList:{
    borderWidth:1,
    borderColor:'#91A3CE',
    width:width/3-20,
    // backgroundColor: '#fff',
    // marginBottom:10,
    // padding:20,
  },
  NewPayTxt:{
    fontSize:14,
    // color:'#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    paddingTop:20,
    paddingBottom:20,
  }
})

export default BtnCell;
