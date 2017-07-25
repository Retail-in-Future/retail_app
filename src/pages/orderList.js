import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerOuter: {},
  headerInner: {}
})

export default () => (
  <View style={styles.container}>
    <Header outerContainerStyles={styles.headerOuter}
      innerContainerStyles={styles.headerInner}
      centerComponent={{ text: '扫码' }}
    />
  </View>
)

