import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Button } from 'react-native-elements'

import QRCode from './QRCode'

import styles from './styles'

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

export default QRCodeContainer
