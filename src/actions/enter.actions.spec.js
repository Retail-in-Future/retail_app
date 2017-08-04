import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { generatePaymentQRCode, generateEnterQRCode, receiveEnterQRCode } from './enter'
import { RECEIVE_ENTER_QRCODE, RECEIVE_PAYMENT_QRCODE } from './actionTypes'

describe('Enter action creators', () => {
  it('should return a RECEIVE_ENTER_QRCODE action when receiveEnterQRCode is called', () => {
    const username = 'admin'
    const token = '@@init'
    const expected = {
      type: RECEIVE_ENTER_QRCODE,
      payload: {
        username, token
      }
    }

    const result = receiveEnterQRCode(username, token)
    expect(result).toEqual(expected)
  })

  describe('async action creators', () => {
    let mock
    const qrcodeServiceUrl = 'http://10.207.11.201:5000/enter_token'
    const paymentQRCodeServiceUrl = 'http://10.207.11.201:5000/pay_token'

    beforeEach(() => {
      mock = new MockAdapter(axios)
    })

    afterEach(() => {
      mock.restore()
    })

    it('should dispatch a RECEIVE_ENTER_QRCODE action with username and token when enterQRCode service returns a valid token for user', async () => {
      const username = 'admin'
      const dispatch = jest.fn()
      const getState = () => ({ credentials: { username } })
      mock.onPost(qrcodeServiceUrl, { uid: 'admin' }).reply(200, { token: '@@init' })

      await generateEnterQRCode()(dispatch, getState)

      expect(dispatch).toHaveBeenCalledWith({ type: RECEIVE_ENTER_QRCODE, payload: { username, token: '@@init' } })
    })

    it('should not dispatch any actions when generateEnterQRCode() is called given username is empty', async () => {
      const username = ''
      const dispatch = jest.fn()
      const getState = () => ({ credentials: { username } })
      mock.onAny().reply(200, { token: '@@any' })

      await generateEnterQRCode()(dispatch, getState)

      expect(dispatch).not.toHaveBeenCalled()
    })

    it('should dispatch a RECEIVE_PAYMENT_QRCODE action with username and token when enterQRCode service returns a valid token', async () => {
      const username = 'admin'
      const dispatch = jest.fn()
      const getState = () => ({ credentials: { username } })
      mock.onPost(paymentQRCodeServiceUrl, { uid: 'admin' }).reply(200, { token: '@@init' })

      await generatePaymentQRCode()(dispatch, getState)

      expect(dispatch).toHaveBeenCalledWith({ type: RECEIVE_PAYMENT_QRCODE, payload: { username, token: '@@init' } })
    })

    it('should not dispatch any actions when generatePaymentQRCode() is called given username is empty', async () => {
      const username = ''
      const dispatch = jest.fn()
      const getState = () => ({ credentials: { username } })

      await generatePaymentQRCode()(dispatch, getState)

      expect(dispatch).not.toHaveBeenCalled()
    })
  })
})
