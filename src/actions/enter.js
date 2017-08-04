import axios from 'axios'
import _ from 'lodash'

import { RECEIVE_ENTER_QRCODE, RECEIVE_PAYMENT_QRCODE } from './actionTypes'

// TODO: [Linesh][8/4/17] looks a lot of duplications here
export const receiveEnterQRCode = (username, token) => ({
  type: RECEIVE_ENTER_QRCODE,
  payload: {
    username,
    token
  }
})

export const generateEnterQRCode = () => (dispatch, getState) => {
  const { username } = getState().credentials

  if (_.isEmpty(username)) return

  return axios.post('http://10.207.11.201:5000/token', { uid: username })
    .then(response => dispatch(receiveEnterQRCode(username, response.data.token)))
    .catch(() => {})
}

export const receivePaymentQRCode = (username, token) => ({
  type: RECEIVE_PAYMENT_QRCODE,
  payload: {
    username,
    token
  }
})

export const generatePaymentQRCode = () => (dispatch, getState) => {
  const { username } = getState().credentials

  if (_.isEmpty(username)) return

  return axios.post('http://10.207.11.201:5000/payment-token', { uid: username })
    .then(response => dispatch(receivePaymentQRCode(username, response.data.token)))
    .catch(() => {})
}
