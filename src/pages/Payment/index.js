import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeContainer from '../../components/QRCode'

import styles from './styles'
import * as actions from '../../actions/enter'

const Payment = ({ qrcode, generatePaymentQRCode }) => (
  <View style={styles.container}>
    <Header title="扫码支付" />

    <QRCodeContainer qrcode={qrcode} onRefresh={generatePaymentQRCode} />
  </View>
)

Payment.propTypes = {
  qrcode: PropTypes.string,
  generatePaymentQRCode: PropTypes.func
}

const mapStateToProps = state => ({
  qrcode: state.enter.paymentQRCode
})

const mapDispatchToProps = dispatch => ({
  generatePaymentQRCode: () => dispatch(actions.generatePaymentQRCode())
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
