/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

import Header from '../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class App extends Component {
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
      <View style={styles.container}>
        <Header title="登录" />

        <TextInput style={{ width: 200, height: 44, padding: 8 }}
          value={this.state.username}
          onChangeText={this.onUsernameChanged}
        />
        <TextInput style={{ width: 200, height: 44, padding: 8 }}
          value={this.state.password}
          onChangeText={this.onPasswordChanged}
        />
        <Button raised
          icon={{ name: 'home', size: 32 }}
          buttonStyle={{ backgroundColor: '#ff4f00', borderRadius: 5 }}
          textStyle={{ textAlign: 'center' }}
          title="Login"
          onPress={this.onLogin}
        />
      </View>
    )
  }
}
