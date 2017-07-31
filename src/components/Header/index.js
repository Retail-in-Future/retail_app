import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'react-native-elements'

import styles from './styles'

const CommonHeader = ({ title = 'I am not the title' }) => (
  <Header outerContainerStyles={styles.headerOuter}
    centerComponent={{ text: title }}
  />
)

CommonHeader.propTypes = {
  title: PropTypes.string
}

export default CommonHeader

