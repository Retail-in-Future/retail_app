import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { View } from 'react-native'

import QRCode from '../../components/QRCode'

import Header from '../../components/Header'
import styles from './styles'
import * as actionCreators from '../../actions/enter'

export class Enter extends Component {
  componentDidMount() {
    this.props.generateQRCode()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="扫码进入" />
        <QRCode {...this.props} />
      </View>
    )
  }
}

Enter.propTypes = {
  qrcode: PropTypes.string,
  generateQRCode: PropTypes.func
}

export default connect(
  state => ({
    qrcode: state.enter.qrcode
  }),
  dispatch => ({
    generateQRCode: () => dispatch(actionCreators.generateQRCode())
  })
)(Enter)
