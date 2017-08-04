import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View } from 'react-native'
import { Button } from 'react-native-elements'

import QRCode from './QRCode'

import styles from './styles'
import * as actionCreators from '../../actions/enter'

const QRCodeContainer = ({ qrcode, generateQRCode }) => (
  <View style={styles.body}>
    <QRCode qrcode={qrcode} />
    <Button icon={{ name: 'refresh' }}
      backgroundColor="#03A9F4"
      onPress={generateQRCode}
      buttonStyle={styles.buttonStyle}
      title="刷新二维码"
    />
  </View>
)

QRCodeContainer.propTypes = {
  qrcode: PropTypes.string,
  generateQRCode: PropTypes.func
}

const mapStateToProps = state => ({
  qrcode: state.enter.qrcode
})

const mapDispatchToProps = dispatch => ({
  generateQRCode: () => dispatch(actionCreators.generateQRCode())
})

export default connect(mapStateToProps, mapDispatchToProps)(QRCodeContainer)
