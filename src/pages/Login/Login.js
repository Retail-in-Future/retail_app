/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

import qs from 'querystring'
import axios from 'axios'
import _ from 'lodash'

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

export class Login extends Component {
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
        <Button title="Login"
          textStyle={styles.loginButtonText}
          onPress={() => this.props.onLogin(this.state.username, this.state.password)}
        />
      </View>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func
}

export class LoginRequired extends Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }

    this.onLogin = this.onLogin.bind(this)
  }

  onLogin(username, password) {
    axios.post('http://54.255.182.198:9000/auth/realms/master/protocol/openid-connect/token', qs.stringify({
      username,
      password,
      grant_type: 'password',
      client_id: 'retail'
    })).then((response) => {
      this.setState({
        token: response.data.access_token
      })
    }).catch(() => {})
  }

  isLoggedIn() {
    return !_.isEmpty(this.state.token)
  }

  render() {
    return (
      this.isLoggedIn() ? this.props.children : <Login onLogin={this.onLogin} />
    )
  }
}

LoginRequired.propTypes = {
  children: PropTypes.node
}
