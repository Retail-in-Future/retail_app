/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

const inputFieldsStyle = {
  width: 200,
  height: 44,
  borderBottomWidth: 1,
  borderBottomColor: 'blue'
}

const componentStyle = {
  padding: 20
}

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChanged = this.onUsernameChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  onUsernameChanged(username) {
    this.setState({ username })
  }

  onPasswordChanged(password) {
    this.setState({ password })
  }

  onLogin() {}

  render() {
    return (
      <View style={componentStyle}>
        <TextInput value={this.state.username}
          style={inputFieldsStyle}
          placeholder="Username"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoFocus
          onChangeText={this.onUsernameChanged}
        />
        <TextInput value={this.state.password}
          style={inputFieldsStyle}
          placeholder="Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={this.onPasswordChanged}
        />
        <Button title="Login"
          textStyle={{ textAlign: 'center' }}
          onPress={this.onLogin}
        />
      </View>
    )
  }
}

export default Login
