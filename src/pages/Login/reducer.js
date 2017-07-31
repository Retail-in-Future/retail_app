import { handleActions } from 'redux-actions'

import { USERNAME_UPDATED } from './constants'

const initState = {
  username: ''
}

const reducers = {
  [USERNAME_UPDATED]: (state, action) => ({ username: action.payload.username })
}

export default handleActions(reducers, initState)
