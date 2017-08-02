import { clearErrorMessage, updateErrorMessage, updateUsername } from './login'
import { UPDATE_ERROR_MESSAGE, UPDATE_USERNAME } from './actionTypes'

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

})
