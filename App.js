import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import createStore from './src/startups/createStore'
import TabBar from './src/components/TabBar'

import styles from './App.styles'

export default () => (
  <Provider store={createStore()}>
    <View style={styles.container}>
      <TabBar />
    </View>
  </Provider>
)
