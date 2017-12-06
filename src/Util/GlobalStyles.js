/**
 * Created by JieYi on 2017/8/17.
 * 八月
 */
//通用样式
import {
  View, Text, TouchableOpacity, PixelRatio, Image, StyleSheet, InteractionManager, TextInput,
} from 'react-native';
import { width, height } from './Size';

const Gstyles = StyleSheet.create ({
  GColor: {
    color: '#C4271E'
  },
  Topnav: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Bottomline: {
    width: width - width * 0.05,
    marginLeft: width * 0.05,
    borderColor: '#f0f0f0',
    borderBottomWidth: 1 / PixelRatio.get (),
  },


//
  GinputView: {
    width: width * 0.9,
    flexDirection: 'row',
    backgroundColor: '#ececec',
    marginBottom:10,
    paddingLeft:4,
    paddingTop:4,
    paddingBottom:12,
  },
  NumInput: {
    width:200,
    height: 36,
    // borderBottomWidth: 1,
    // borderBottomColor: '#C4271E',
    paddingBottom: 0,
    // backgroundColor: 'orange'
  },
  NumInput2:{
    width:100,
  },
  InputLeft: {
    fontSize: 16,
    color: '#000',
    paddingTop:10,
  }

})

export default Gstyles;
