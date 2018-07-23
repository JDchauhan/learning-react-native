import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Actions } from 'react-native-router-flux'

class HttpExample extends Component {
   state = {
      data: ''
   } 

    goToHome = () => {
        Actions.home()
    }

   componentDidMount = () => {
      fetch('http://192.168.43.198:3000', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   
   render() {
      return (
         <View>
            <Text>
               {this.state.data.results && this.state.data.results.message}
            </Text>
            <TouchableOpacity style = {{ margin: 128 }} onPress = {this.goToHome}>
                <Text>Go to home</Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default HttpExample