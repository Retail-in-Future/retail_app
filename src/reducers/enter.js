import { handleActions } from 'redux-actions'

import { RECEIVE_PAYMENT_QRCODE, RECEIVE_QRCODE } from '../actions/actionTypes'

const initState = {
  qrcode: '',
  paymentQRCode: ''
}

const reducers = {
  [RECEIVE_QRCODE]: (state, action) => {
    const { username, token } = action.payload

    return {
      ...state,
      qrcode: `${username}$${token}`
    }
  },
  [RECEIVE_PAYMENT_QRCODE]: (state, action) => {
    const { username, token } = action.payload

    return {
      ...state,
      paymentQRCode: `${username}$${token}`
    }
  }
}

const reducerPrefix = 'enter'

export default {
  reducerPrefix,
  reducers: handleActions(reducers, initState)
}
