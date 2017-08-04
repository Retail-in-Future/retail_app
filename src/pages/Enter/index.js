import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeContainer from '../../components/QRCode'

import styles from './styles'
import * as actions from '../../actions/enter'

const Enter = ({ qrcode, generateQRCode }) => (
  <View style={styles.container}>
    <Header title="扫码进入" />
    <QRCodeContainer qrcode={qrcode} generateQRCode={generateQRCode} />
  </View>
)

Enter.propTypes = {
  qrcode: PropTypes.string,
  generateQRCode: PropTypes.func
}

const mapStateToProps = state => ({
  qrcode: state.enter.qrcode
})

const mapDispatchToProps = dispatch => ({
  generateQRCode: () => dispatch(actions.generateEnterQRCode())
})

export default connect(mapStateToProps, mapDispatchToProps)(Enter)
