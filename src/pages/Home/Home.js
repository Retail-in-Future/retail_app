import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header'
import styles from './styles'

export default () => (
  <View style={styles.container}>
    <Header title="首页" />

    <Text>You have already logged in.</Text>
  </View>
)
