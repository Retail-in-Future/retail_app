import { receiveQRCode } from './enter'
import { RECEIVE_QRCODE } from './actionTypes'

describe('Enter action creators', () => {
  it('should return a RECEIVE_QRCODE action when receiveQRCode is called', () => {
    const username = 'admin'
    const token = '@@init'
    const expected = {
      type: RECEIVE_QRCODE,
      payload: {
        username, token
      }
    }

    const result = receiveQRCode(username, token)
    expect(result).toEqual(expected)
  })


})
