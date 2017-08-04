import React from 'react'
import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeWrapper from '../../components/QRCode'

import styles from './styles'

const Payment = () => (
  <View style={styles.container}>
    <Header title="扫码支付" />
    <QRCodeWrapper />
  </View>
)

export default Payment
