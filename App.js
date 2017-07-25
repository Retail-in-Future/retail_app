import React from 'react'
import { StyleSheet, View } from 'react-native'

import TabBar from './src/components/tabBar'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => (
  <View style={styles.container}>
    <TabBar />
  </View>
)
