import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeContainer from '../../components/QRCode'

import styles from './styles'
import * as actions from '../../actions/enter'

const Payment = ({ generateQRCode }) => (
  <View style={styles.container}>
    <Header title="扫码支付" />

    <QRCodeContainer generateQRCode={generateQRCode} />
  </View>
)

Payment.propTypes = {
  generateQRCode: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  generateQRCode: () => dispatch(actions.generateQRCode())
})

export default connect(() => ({}), mapDispatchToProps)(Payment)
