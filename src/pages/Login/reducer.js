import { handleActions } from 'redux-actions'

import { RECEIVE_TOKEN, UPDATE_ERROR_MESSAGE, UPDATE_USERNAME } from './constants'

const initState = {
  username: '',
  token: '',
  errorMessage: ''
}

const reducers = {
  [UPDATE_USERNAME]: (state, action) => ({ ...state, username: action.payload.username }),
  [RECEIVE_TOKEN]: (state, action) => ({ ...state, token: action.payload.token }),
  [UPDATE_ERROR_MESSAGE]: (state, action) => ({
    ...state,
    errorMessage: action.payload.errorMessage
  })
}

export default handleActions(reducers, initState)
