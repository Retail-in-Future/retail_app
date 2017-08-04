/* eslint-disable curly */
import React from 'react'
import PropTypes from 'prop-types'

import { Text, View } from 'react-native'
import QrCode from 'react-native-qrcode'

import styles from './styles'

export default function QRCode({ qrcode }) {
  if (!qrcode) return (
    <Text style={styles.text}>二维码生成失败。请刷新重试……</Text>
  )

  return (
    <View>
      <QrCode value={qrcode} size={300} />
      <Text style={styles.text}>请将手机屏幕对准扫描器</Text>
    </View>
  )
}

QRCode.propTypes = {
  qrcode: PropTypes.string
}
