import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View } from 'react-native'

import Header from '../../components/Header'
import QRCodeContainer from '../../components/QRCode'

import styles from './styles'
import * as actions from '../../actions/enter'

const Enter = ({ qrcode, generateEnterQRCode }) => (
  <View style={styles.container}>
    <Header title="扫码进入" />
    <QRCodeContainer qrcode={qrcode} onRefresh={generateEnterQRCode} />
  </View>
)

Enter.propTypes = {
  qrcode: PropTypes.string,
  generateEnterQRCode: PropTypes.func
}

const mapStateToProps = state => ({
  qrcode: state.enter.enterQRCode
})

const mapDispatchToProps = dispatch => ({
  generateEnterQRCode: () => dispatch(actions.generateEnterQRCode())
})

export default connect(mapStateToProps, mapDispatchToProps)(Enter)
