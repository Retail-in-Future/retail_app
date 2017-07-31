import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'

import QrCode from 'react-native-qrcode'

import axios from 'axios'

import Header from '../../components/Header'
import * as actions from './actions'
import styles from './styles'

class Enter extends Component {
  constructor() {
    super()
    this.state = {
      qrcode: ''
    }

    this.handleQRCodeRefresh = this.handleQRCodeRefresh.bind(this)
  }

  componentDidMount() {
    this.handleQRCodeRefresh()
  }

  handleQRCodeRefresh() {
    // TODO: [Linesh][7/28/17] introduce redux to handle state management
    // TODO: [Linesh][7/28/17] separate side-effect actions to redux/saga
    // TODO: [Linesh][7/28/17] develop a general axios middleware
    if (!global.username) return

    const username = global.username

    axios.post('http://54.255.220.116:5000/token', { uid: username })
      .then((response) => {
        this.setState({
          qrcode: `${username}$${response.data.token}`
        })
      })
      .catch(() => {})
  }

  render() {
    console.log(`QRCode: ${this.state.qrcode}`)
    console.log('-------- this.props.result --------')
    console.log(this.props.result)

    return (
      <View style={styles.container}>
        <Header title="扫码进入" />
        <View style={styles.body}>
          {
            this.state.qrcode ?
              <View>
                <QrCode value={this.state.qrcode} size={300} />
                <Text style={styles.text}>请将手机屏幕对准扫描器</Text>
              </View>
              : <Text style={styles.text}>二维码生成失败。请刷新重试……</Text>
          }

          <Button icon={{ name: 'refresh' }}
            backgroundColor="#03A9F4"
            onPress={() => this.props.tokenReceived('2342')}
            buttonStyle={styles.buttonStyle}
            title="刷新二维码"
          />
        </View>
      </View>
    )
  }
}

Enter.propTypes = {
  result: PropTypes.object,
  tokenReceived: PropTypes.func
}

export default connect(
  state => ({ result: state }),
  dispatch => ({
    tokenReceived: token => dispatch(actions.tokenReceived(token))
  })
)(Enter)
