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


class SettingScreen extends Component {
 /* static navigationOptions = {
    title: 'SettingScreen'
  }*/
  
  /*static navigationOptions = ({navigation}) => {
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
  }*/
  render() {
    return (
        <View style={styles.AboutUs}>
          <Button
              onPress={() => this.props.navigation.navigate ('AboutUs')}
              title="现在是我的Setting页面"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  AboutUs: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: '#006633',
  },
})

export default SettingScreen;
