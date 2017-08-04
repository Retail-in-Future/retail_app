import axios from 'axios'
import _ from 'lodash'

import { RECEIVE_QRCODE } from '../actions/actionTypes'

export const receiveQRCode = (username, token) => ({
  type: RECEIVE_QRCODE,
  payload: {
    username,
    token
  }
})

export const generateQRCode = () => (dispatch, getState) => {
  const { username } = getState().credentials

  if (_.isEmpty(username)) return

  return axios.post('http://10.207.11.201:5000/token', { uid: username })
    .then(response => dispatch(receiveQRCode(username, response.data.token)))
    .catch(() => {})
}

export const generatePaymentQRCode = () => (dispatch, getState) => {
  const { username } = getState().credentials

  if (_.isEmpty(username)) return


}
