/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

import axios from 'axios'

const styles = StyleSheet.create({
  loginComponent: {
    padding: 20
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'indianred'
  },
  inputFields: {
    width: 200,
    height: 44
  },
  loginButtonText: {
    textAlign: 'center'
  }
})

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

  onLogin() {
    const { username, password } = this.state

    axios.post('127.0.0.1:10001/login', {
      username, password
    }).then(

    )
  }

  render() {
    return (
      <View style={styles.loginComponent}>
        <View style={styles.inputWrapper}>
          <TextInput value={this.state.username}
            style={styles.inputFields}
            placeholder="Username"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoFocus
            onChangeText={this.onUsernameChanged}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput value={this.state.password}
            style={styles.inputFields}
            placeholder="Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={this.onPasswordChanged}
          />
        </View>
        <Button title="Login"
          textStyle={styles.loginButtonText}
          onPress={this.onLogin}
        />
      </View>
    )
  }
}

export default Login
