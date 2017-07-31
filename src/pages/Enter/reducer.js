import { handleActions } from 'redux-actions'

import { TOKEN_RECEIVED } from './constants'

const initState = {
  token: ''
}

const reducers = {
  [TOKEN_RECEIVED]: (state, action) => ({ token: action.payload.token })
}

export default handleActions(reducers, initState)
