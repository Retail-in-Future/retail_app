import enter from './enter'
import { RECEIVE_PAYMENT_QRCODE, RECEIVE_QRCODE } from '../actions/actionTypes'

describe('Enter reducers', () => {
  let reducers

  beforeEach(() => {
    reducers = enter.reducers
  })

  it('should return qrcode admin$1234 when received a RECEIVE_QRCODE action given username is admin and token is 1234', () => {
    const initState = {
      qrcode: ''
    }
    const action = {
      type: RECEIVE_QRCODE,
      payload: {
        username: 'admin',
        token: '1234'
      }
    }
    const expected = {
      qrcode: 'admin$1234'
    }

    const result = reducers(initState, action)

    expect(result).toEqual(expected)
  })

  it('should return payment qrcode admin$1234 when received a RECEIVE_PAYMENT_QRCODE action given username is admin and token is 1234', () => {
    const initState = {
      qrcode: '',
      paymentQRCode: ''
    }
    const action = {
      type: RECEIVE_PAYMENT_QRCODE,
      payload: {
        username: 'admin',
        token: '1234'
      }
    }
    const expected = {
      qrcode: '',
      paymentQRCode: 'admin$1234'
    }

    const result = reducers(initState, action)

    expect(result).toEqual(expected)
  })
})
