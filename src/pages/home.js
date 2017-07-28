import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import { Login, LoginRequired } from './Login/Login'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => (
  <View style={styles.container}>
    <Header title="登录 feature 仍在开发中" />

    <LoginRequired display={false}>
      <Login />
    </LoginRequired>
  </View>
)
