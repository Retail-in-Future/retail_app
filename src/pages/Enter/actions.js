import axios from 'axios'

import { RECEIVE_QRCODE } from './constants'

export const receiveQRCode = (username, token) => ({
  type: RECEIVE_QRCODE,
  payload: {
    username,
    token
  }
})

export const generateQRCode = username => dispatch =>
  axios.post('http://10.207.11.201:5000/token', { uid: username })
    .then(response => dispatch(receiveQRCode(username, response.data.token)))
    .catch(() => {})
