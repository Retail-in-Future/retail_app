/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

// TODO: [Linesh][7/28/17] a more uniform-ed styles
const styles = StyleSheet.create({
  loginComponent: {
    padding: 20,
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#397af8'
  },
  inputFields: {
    width: 200,
    height: 44
  },
  loginButton: {
    marginTop: 20,
    width: 200
  }
})

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChanged = this.onUsernameChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
  }

  onUsernameChanged(username) {
    this.setState({ username })
  }

  onPasswordChanged(password) {
    this.setState({ password })
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
        <View>
          <Button title="Login"
            buttonStyle={styles.loginButton}
            backgroundColor="#397af8"
            onPress={() => this.props.onLogin(this.state.username, this.state.password)}
          />
        </View>
      </View>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func
}
