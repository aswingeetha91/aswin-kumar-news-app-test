import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions, Alert, AsyncStorage,
} from 'react-native'
import DetailsServiceCallAction from '../Action/DetailsServiceCallAction';

export default class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <DetailsServiceCallAction navigation={this.props.navigation} />

    );
  }
}
