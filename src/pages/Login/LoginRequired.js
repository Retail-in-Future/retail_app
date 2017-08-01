/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import _ from 'lodash'

import Login from './Login/Login'
import * as actionCreators from './actions'

class LoginRequired extends Component {
  constructor() {
    super()

    this.onLogin = this.onLogin.bind(this)
  }

  onLogin(username, password) {
    this.props.login(username, password)
  }

  isLoggedIn() {
    return !_.isEmpty(this.props.token)
  }

  render() {
    const { children, errorMessage } = this.props

    return (
      this.isLoggedIn() ?
        children :
        <Login onLogin={this.onLogin} errorMessage={errorMessage} />
    )
  }
}

LoginRequired.propTypes = {
  children: PropTypes.node,
  token: PropTypes.string,
  errorMessage: PropTypes.string,
  login: PropTypes.func
}

export default connect(
  state => ({
    token: state.login.token,
    errorMessage: state.login.errorMessage
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(LoginRequired)
