import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Picker } from 'react-native'

import { Actions } from 'react-native-router-flux'

class HttpExample extends Component {
    state = {
        data: '',
        user: ''
    }

    updateUser = (user) => {
        this.setState({ user: user })
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
                <View>
                    <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                        <Picker.Item label="Steve" value="steve" />
                        <Picker.Item label="Ellen" value="ellen" />
                        <Picker.Item label="Maria" value="maria" />
                    </Picker>
                    <Text>{this.state.user}</Text>
                </View>
                <Text>
                    {this.state.data.results && this.state.data.results.message}
                </Text>
                <TouchableOpacity style={{ margin: 128 }} onPress={this.goToHome}>
                    <Text>Go to home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default HttpExample