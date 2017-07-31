import React from 'react'
import PropTypes from 'prop-types'

import { Header as ReactNativeHeader } from 'react-native-elements'

import styles from './styles'

const Header = ({ title }) => (
  <ReactNativeHeader outerContainerStyles={styles.headerOuter}
    centerComponent={{ text: title }}
  />
)

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Give me title'
}

export default Header

