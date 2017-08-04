import React from 'react'
import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeContainer from '../../components/QRCode'

import styles from './styles'

const Payment = () => (
  <View style={styles.container}>
    <Header title="扫码支付" />
    <QRCodeContainer />
  </View>
)

export default Payment
