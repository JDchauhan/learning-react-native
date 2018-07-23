import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from '../home/Home.js'
import HttpExample from '../home/HttpExample.js'
import Input from '../home/Inputs.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home"/>
         <Scene key = "httpExample" component = {HttpExample} title = "Http Example"  initial = {true} />
         <Scene key = "input" component = {Input} title = "Input" />
      </Scene>
   </Router>
)
export default Routes