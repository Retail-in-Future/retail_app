import enter from './enter'
import { RECEIVE_PAYMENT_QRCODE, RECEIVE_ENTER_QRCODE } from '../actions/actionTypes'

describe('Enter reducers', () => {
  let reducers

  beforeEach(() => {
    reducers = enter.reducers
  })

  it('should return enterQRCode admin$1234 when received a RECEIVE_ENTER_QRCODE action given username is admin and token is 1234', () => {
    const initState = {
      enterQRCode: '',
      paymentQRCode: ''
    }
    const action = {
      type: RECEIVE_ENTER_QRCODE,
      payload: {
        username: 'admin',
        token: '1234'
      }
    }
    const expected = {
      enterQRCode: 'admin$1234',
      paymentQRCode: ''
    }

    const result = reducers(initState, action)

    expect(result).toEqual(expected)
  })

  it('should return payment enterQRCode admin$1234 when received a RECEIVE_PAYMENT_QRCODE action given username is admin and token is 1234', () => {
    const initState = {
      enterQRCode: '',
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
      enterQRCode: '',
      paymentQRCode: 'admin$1234'
    }

    const result = reducers(initState, action)

    expect(result).toEqual(expected)
  })
})
