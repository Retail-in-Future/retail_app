import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput />
        <TextInput secureTextEntry />
        <Button />
      </View>
    )
  }
}

export default Login
