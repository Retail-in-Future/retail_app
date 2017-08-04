import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { generateQRCode, receiveQRCode } from './enter'
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

  describe('async action creators', () => {
    let mock
    const qrcodeServiceUrl = 'http://10.207.11.201:5000/token'

    beforeEach(() => {
      mock = new MockAdapter(axios)
    })

    afterEach(() => {
      mock.restore()
    })

    it('should dispatch a RECEIVE_QRCODE action with username and token when qrcode service returns a valid token for user', async () => {
      const username = 'admin'
      const dispatch = jest.fn()
      const getState = () => ({ credentials: { username } })
      mock.onPost(qrcodeServiceUrl, { uid: 'admin' }).reply(200, { token: '@@init' })

      await generateQRCode()(dispatch, getState)

      expect(dispatch).toHaveBeenCalledWith({ type: RECEIVE_QRCODE, payload: { username, token: '@@init' } })
    })

    it('should not dispatch any actions when username is empty', async () => {
      const username = ''
      const dispatch = jest.fn()
      const getState = () => ({ credentials: { username } })
      mock.onAny().reply(200, { token: '@@any' })

      await generateQRCode()(dispatch, getState)

      expect(dispatch).not.toHaveBeenCalled()
    })
  })
})
