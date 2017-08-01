import { RECEIVE_QRCODE } from './constants'

export const receiveQRCode = qrcode => ({
  type: RECEIVE_QRCODE,
  payload: {
    qrcode
  }
})

export const something = 'else'
