import qs from 'querystring'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { clearErrorMessage, login, updateErrorMessage, updateUsername } from './login'
import { RECEIVE_TOKEN, UPDATE_ERROR_MESSAGE, UPDATE_USERNAME } from './actionTypes'

describe('Login action creators', () => {
  it('should return an UPDATE_USERNAME action with username when updateUsername is called', () => {
    const username = 'admin'
    const expected = {
      type: UPDATE_USERNAME,
      payload: {
        username
      }
    }

    const result = updateUsername(username)
    expect(result).toEqual(expected)
  })

  it('should return an UPDATE_ERROR_MESSAGE action with error message when updateErrorMessage is called', () => {
    const errorMessage = 'invalid credentials'
    const expected = {
      type: UPDATE_ERROR_MESSAGE,
      payload: {
        errorMessage
      }
    }

    const result = updateErrorMessage(errorMessage)
    expect(result).toEqual(expected)
  })

  it('should return an UPDATE_ERROR_MESSAGE action with empty error message when clearErrorMessage is called', () => {
    const expected = {
      type: UPDATE_ERROR_MESSAGE,
      payload: {
        errorMessage: ''
      }
    }

    const result = clearErrorMessage()
    expect(result).toEqual(expected)
  })

  describe('async action creators', () => {
    let mock
    const authenticationUrl = 'http://10.207.11.201:9000/auth/realms/master/protocol/openid-connect/token'
    const params = (username, password) => qs.stringify({
      username,
      password,
      grant_type: 'password',
      client_id: 'retail'
    })

    it('should call authentication url and dispatch RECEIVE_TOKEN action and CLEAR_ERROR_MESSAGE action when successfully authenticated', async () => {
      const username = 'admin'
      const password = 'admin'
      const dispatch = jest.fn()
      const expectedClearErrorMessageAction = {
        type: UPDATE_ERROR_MESSAGE,
        payload: {
          errorMessage: ''
        }
      }
      const expectedReceiveTokenAction = {
        type: RECEIVE_TOKEN,
        payload: {
          token: '1234'
        }
      }

      mock.onPost(authenticationUrl, params(username, password)).reply(200, {
        access_token: '1234'
      })

      await login(username, password)(dispatch)

      expect(dispatch).toHaveBeenCalledWith(expectedClearErrorMessageAction)
      expect(dispatch).toHaveBeenCalledWith(expectedReceiveTokenAction)
    })

    beforeAll(() => {
      mock = new MockAdapter(axios)
    })

    afterEach(() => {
      mock.reset()
    })

    afterAll(() => {
      mock.restore()
    })
  })
})
