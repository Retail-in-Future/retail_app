import { handleActions } from 'redux-actions'

import { RECEIVE_QRCODE } from '../actions/actionTypes'

const initState = {
  qrcode: ''
}

const reducers = {
  [RECEIVE_QRCODE]: (state, action) => {
    const { username, token } = action.payload

    return {
      qrcode: `${username}$${token}`
    }
  }
}

const reducerPrefix = 'enter'

export default {
  reducerPrefix,
  reducers: handleActions(reducers, initState)
}
