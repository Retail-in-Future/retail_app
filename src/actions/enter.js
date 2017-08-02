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

export const generateQRCode = username => (dispatch) => {
  if (_.isEmpty(username)) return

  // TODO: [Linesh][7/28/17] develop a general axios middleware
  return axios.post('http://10.207.11.201:5000/token', { uid: username })
    .then(response => dispatch(receiveQRCode(username, response.data.token)))
    .catch(() => {})
}
