import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '../components/Header'
import LoginRequired from './Login/LoginRequired'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => (
  <View style={styles.container}>
    <Header title="登录 feature 仍在开发中" />

    <LoginRequired>
      <Text>already logged in</Text>
    </LoginRequired>
  </View>
)
