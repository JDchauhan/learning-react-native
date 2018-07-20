import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/home/Home.js'

type Props = {};

export default class schoolManagementApp extends Component<Props> {
  render() {
    return (
       <View>
          <Home />
       </View>
    );
  }
}