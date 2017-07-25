import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

const styles = StyleSheet.create({
  headerOuter: {
    zIndex: 1,
    position: 'relative'
  }
})

const CommonHeader = ({ title = 'I am not the title' }) => (
  <Header outerContainerStyles={styles.headerOuter}
    centerComponent={{ text: title }}
  />
)

CommonHeader.propTypes = {
  title: PropTypes.string
}

export default CommonHeader

