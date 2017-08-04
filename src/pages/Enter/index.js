import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Button } from 'react-native-elements'

import Header from '../../components/Header'
import QRCode from '../../components/QRCode'

import * as actionCreators from '../../actions/enter'

import styles from './styles'

export class Enter extends Component {
  componentDidMount() {
    this.props.generateQRCode()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="扫码进入" />

        <View style={styles.body}>
          <QRCode qrcode={this.props.qrcode} />
          <Button icon={{ name: 'refresh' }}
            backgroundColor="#03A9F4"
            onPress={this.props.generateQRCode}
            buttonStyle={styles.buttonStyle}
            title="刷新二维码"
          />
        </View>

      </View>
    )
  }
}

Enter.propTypes = {
  qrcode: PropTypes.string,
  generateQRCode: PropTypes.func
}

export default connect(
  state => ({
    qrcode: state.enter.qrcode
  }),
  dispatch => ({
    generateQRCode: () => dispatch(actionCreators.generateQRCode())
  })
)(Enter)
