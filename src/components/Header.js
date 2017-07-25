import React from 'react'
import { StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

// TODO: [Linesh][7/25/17] add eslint
export default ({ title = 'I am not the title' }) => (
  <Header outerContainerStyles={styles.headerOuter}
          centerComponent={{ text: title }}
  />
)

const styles = StyleSheet.create({
  headerOuter: {
    zIndex: 1,
    position: 'relative'
  }
})
