/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch, TextInput, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      switchValue: false,
      textValue: "",
    };
  }
  onChange = (value) => {
    console.warn(`El switch cambiará a: ${value}`)
    this.setState({switchValue: value})
  }
  onChangeText = (text) => {
    this.setState({textValue: text})
  }
  onPressLearnMore = () => {
    Alert.alert(
      `${this.state.textValue}`
    )
  }
  render() {
    return (
      <View style={styles.container}>
      <View style = {[styles.box, styles.red]}/>
      <View style = {[styles.box, styles.green]}/>
      <View style = {[styles.box, styles.blue]}/>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    flex: 1,
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
});
