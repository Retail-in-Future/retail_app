import React from 'react'
import PropTypes from 'prop-types'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import QrCode from 'react-native-qrcode'

import styles from './styles'

export default function QRCode({ qrcode, generateQRCode }) {
  return (
    <View style={styles.body}>
      {
        qrcode ?
          <View>
            <QrCode value={qrcode} size={300} />
            <Text style={styles.text}>请将手机屏幕对准扫描器</Text>
          </View>
          : <Text style={styles.text}>二维码生成失败。请刷新重试……</Text>
      }

      <Button icon={{ name: 'refresh' }}
        backgroundColor="#03A9F4"
        onPress={generateQRCode}
        buttonStyle={styles.buttonStyle}
        title="刷新二维码"
      />
    </View>
  )
}

QRCode.propTypes = {
  qrcode: PropTypes.string,
  generateQRCode: PropTypes.func
}
