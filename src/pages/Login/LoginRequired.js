import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import _ from 'lodash'
import qs from 'querystring'

import Login from './Login'

export default class LoginRequired extends Component {
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
