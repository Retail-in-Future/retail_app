import { handleActions } from 'redux-actions'
import { RECEIVE_QRCODE } from './constants'

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

export default handleActions(reducers, initState)
