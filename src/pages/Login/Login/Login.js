/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

import * as actions from '../actions'

import styles from './Login.styles'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      password: ''
    }

    this.onPasswordChanged = this.onPasswordChanged.bind(this)
  }

  onPasswordChanged(password) {
    this.setState({ password })
  }

  render() {
    const { username, errorMessage, updateUsername, onLogin } = this.props

    return (
      <View style={styles.loginComponent}>
        <View style={styles.inputWrapper}>
          <TextInput value={username}
            style={styles.inputFields}
            placeholder="Username"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoFocus
            onChangeText={updatedUsername => updateUsername(updatedUsername)}
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

        { errorMessage ? <Text style={styles.errorMessage}>{ errorMessage }</Text> : null }

        <View>
          <Button title="Login"
            disabled
            buttonStyle={styles.loginButton}
            backgroundColor="#397af8"
            onPress={() => onLogin(username, this.state.password)}
          />
        </View>
      </View>
    )
  }
}

Login.propTypes = {
  username: PropTypes.string,
  updateUsername: PropTypes.func,
  onLogin: PropTypes.func,
  errorMessage: PropTypes.string
}

const mapStateToProps = state => ({
  username: state.login.username
})

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(actions.updateUsername(username))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
