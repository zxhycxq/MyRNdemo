import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    InteractionManager,
    TextInput,
    
} from 'react-native';


class BottomBtn extends Component {
  render() {
    return (
        <View style={{width:60,height:60,backgroundColor:'red',position:'absolute',bottom:-120,left:160,zIndex:90000000000,borderRadius:30,}}>
      
          <TouchableOpacity style={[{marginBottom: 10}]}
          
          >
            <View style={[{width:60,height:60,borderRadius:30, backgroundColor:'#aaa'}]}>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

export default BottomBtn;
