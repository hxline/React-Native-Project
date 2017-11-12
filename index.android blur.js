import React, { Component } from 'react';
import { AppRegistry, View, Image, Text, findNodeHandle, StyleSheet } from 'react-native';
import { BlurView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name='md-paper-plane' style={{fontSize: 80,  color: 'skyblue'}} />
        <BlurView
          style={styles.absolute}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={10}
        />
        <Text>Hi, I am some unblurred text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});

AppRegistry.registerComponent('ReactProject', () => Menu);