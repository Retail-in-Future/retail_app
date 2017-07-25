import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => (
  <View style={styles.container}>
    <Header />
    <Text>I am home page.</Text>
  </View>
)
