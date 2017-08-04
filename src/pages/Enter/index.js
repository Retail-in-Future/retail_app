import React from 'react'

import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeContainer from '../../components/QRCode'

import styles from './styles'

export default () => (
  <View style={styles.container}>
    <Header title="扫码进入" />
    <QRCodeContainer />
  </View>
)
