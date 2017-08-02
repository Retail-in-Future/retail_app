import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'

import QrCode from 'react-native-qrcode'

import Header from '../../components/Header'
import styles from './styles'
import * as actionCreators from '../../actions/enter'

class Enter extends Component {
  constructor() {
    super()

    this.handleQRCodeRefresh = this.handleQRCodeRefresh.bind(this)
  }

  componentDidMount() {
    this.handleQRCodeRefresh()
  }

  handleQRCodeRefresh() {
    this.props.generateQRCode(this.props.username)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="扫码进入" />
        <View style={styles.body}>
          {
            this.props.qrcode ?
              <View>
                <QrCode value={this.props.qrcode} size={300} />
                <Text style={styles.text}>请将手机屏幕对准扫描器</Text>
              </View>
              : <Text style={styles.text}>二维码生成失败。请刷新重试……</Text>
          }

          <Button icon={{ name: 'refresh' }}
            backgroundColor="#03A9F4"
            onPress={this.handleQRCodeRefresh}
            buttonStyle={styles.buttonStyle}
            title="刷新二维码"
          />
        </View>
      </View>
    )
  }
}

Enter.propTypes = {
  username: PropTypes.string,
  qrcode: PropTypes.string,
  generateQRCode: PropTypes.func
}

export default connect(
  state => ({
    username: state.credentials.username,
    qrcode: state.enter.qrcode
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Enter)
