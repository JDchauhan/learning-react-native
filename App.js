import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './src/components/home/Home.js'
import Routes from './src/components/routes/Routes.js'

export default class schoolManagementApp extends Component {
  render() {
    return (
       <Routes />
    )
  }
}