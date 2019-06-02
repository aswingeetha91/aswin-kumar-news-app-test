/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
 import {Provider} from 'react-redux';
 import store from './Source/Components/Reducer/index';
import { StackNavigator } from 'react-navigation';
import Home from './Source/Components/Home/Home';
 import Details from './Source/Components/Details/Details';

 
 const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details }
});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
 	     <AppNavigator />
        </Provider>
    );
  }
}
