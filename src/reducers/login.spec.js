import login from './login'
import { RECEIVE_TOKEN, UPDATE_ERROR_MESSAGE, UPDATE_USERNAME } from '../actions/actionTypes'

describe('Login reducers', () => {
  let reducers

  beforeEach(() => {
    reducers = login.reducers
  })

  it('should update username when received an UPDATE_USERNAME action given username is admin', () => {
    const username = 'admin'
    const initState = {
      username: '',
      token: ''
    }
    const action = {
      type: UPDATE_USERNAME,
      payload: {
        username
      }
    }
    const expected = {
      username: 'admin',
      token: ''
    }

    const result = reducers(initState, action)
    expect(result).toEqual(expected)
  })

  it('should update token when received a RECEIVE_TOKEN action given token is 1234', () => {
    const token = '1234'
    const initState = {
      token: '@@init'
    }
    const action = {
      type: RECEIVE_TOKEN,
      payload: {
        token
      }
    }
    const expected = {
      token: '1234'
    }

    const result = reducers(initState, action)
    expect(result).toEqual(expected)
  })

  it('should update error message when received an UPDATE_ERROR_MESSAGE action given error message is Invalid credentials', () => {
    const errorMessage = 'Invalid credentials'
    const initState = {
      username: 'admin',
      errorMessage: ''
    }
    const action = {
      type: UPDATE_ERROR_MESSAGE,
      payload: {
        errorMessage
      }
    }
    const expected = {
      username: 'admin',
      errorMessage: 'Invalid credentials'
    }

    const result = reducers(initState, action)
    expect(result).toEqual(expected)
  })
})
