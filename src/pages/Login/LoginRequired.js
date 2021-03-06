import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import _ from 'lodash'

import Login from './Login/Login'
import { login } from '../../actions/login'

export class LoginRequired extends Component {
  isLoggedIn() {
    return !_.isEmpty(this.props.token)
  }

  render() {
    const { children, onLogin, errorMessage } = this.props

    return (
      this.isLoggedIn() ?
        children :
        <Login onLogin={onLogin} errorMessage={errorMessage} />
    )
  }
}

LoginRequired.propTypes = {
  children: PropTypes.node,
  token: PropTypes.string,
  errorMessage: PropTypes.string,
  onLogin: PropTypes.func
}

const mapStateToProps = state => ({
  token: state.credentials.token,
  errorMessage: state.credentials.errorMessage
})

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(login(username, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRequired)
