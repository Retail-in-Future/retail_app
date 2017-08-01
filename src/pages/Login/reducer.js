import { handleActions } from 'redux-actions'

import { RECEIVE_TOKEN, UPDATE_ERROR_MESSAGE, UPDATE_USERNAME } from './constants'

const initState = {
  username: '',
  token: '',
  errorMessage: ''
}

const reducers = {
  // TODO: [Linesh][8/1/17] seems there's still bugs between layered redux stores, figure out
  [UPDATE_USERNAME]: (state, action) => ({ username: action.payload.username }),
  [RECEIVE_TOKEN]: (state, action) => ({ token: action.payload.token }),
  [UPDATE_ERROR_MESSAGE]: (state, action) => ({ errorMessage: action.payload.errorMessage })
}

export default handleActions(reducers, initState)
