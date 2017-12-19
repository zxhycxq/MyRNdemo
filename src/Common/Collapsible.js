import React, { Component } from 'react';
import{
    View,
  StyleSheet,
    Text,} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { width, height } from '../Util/Size';
const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  }
];

class AccordionView extends Component {
  _renderHeader(section) {
    return (
        <View style={styles.header}>
          <Text style={{fontSize: 13, color: '#777'}}>{section.title}</Text>
        </View>
    );
  }
  
  _renderContent(section) {
    return (
        <View style={styles.content}>
          <Text>{section.content}</Text>
        </View>
    );
  }
  
  render() {
    return (
        <Accordion
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
        />
    );
  }
}

const styles = StyleSheet.create ({
  content: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  header:{
    width:width,
    height:40,
    backgroundColor: 'orange',
  
  }
})

export default AccordionView;
