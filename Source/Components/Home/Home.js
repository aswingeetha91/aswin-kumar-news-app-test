import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions, Alert, AsyncStorage,
} from 'react-native'
import HomeServiceCallAction from '../Action/HomeServiceCallAction';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };


  render() {
    const { navigate } = this.props.navigation
    return (
      <HomeServiceCallAction navigation={this.props.navigation} />
    );
  }
}
