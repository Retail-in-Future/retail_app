import React from 'react'
import { Provider } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import createStore from './src/startups/createStore'
import TabBar from './src/components/TabBar'

const store = createStore()
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <TabBar />
    </View>
  </Provider>
)
