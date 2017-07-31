import React from 'react'
import { View } from 'react-native'

import { Header } from 'react-native-elements'

import styles from './styles'

export default () => (
  <View style={styles.container}>
    <Header outerContainerStyles={styles.headerOuter}
      innerContainerStyles={styles.headerInner}
      centerComponent={{ text: '购买记录' }}
    />
  </View>
)

