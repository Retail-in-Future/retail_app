import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

import _ from 'lodash'

import * as actions from '../../../actions/login'

import styles from './Login.styles'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      password: '',
      loginDisabled: true
    }

    this.onUsernameChanged = this.onUsernameChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
  }

  onUsernameChanged(username) {
    this.props.updateUsername(username)
    this.setState({
      loginDisabled: _.isEmpty(username) || _.isEmpty(this.state.password)
    })
  }

  onPasswordChanged(password) {
    this.setState({
      password,
      loginDisabled: _.isEmpty(this.props.username) || _.isEmpty(password)
    })
  }

  render() {
    const { username, errorMessage, onLogin } = this.props

    return (
      <View style={styles.loginComponent}>
        <View style={styles.inputWrapper}>
          <TextInput value={username}
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

        { errorMessage ? <Text style={styles.errorMessage}>{ errorMessage }</Text> : null }

        <View>
          <Button title="Login"
            disabled={this.state.loginDisabled}
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
  username: state.credentials.username
})

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(actions.updateUsername(username))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
