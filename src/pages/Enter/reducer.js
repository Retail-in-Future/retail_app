import { handleActions } from 'redux-actions'
import { RECEIVE_QRCODE } from './constants'

const initState = {
  qrcode: ''
}

const reducers = {
  [RECEIVE_QRCODE]: (state, action) => ({ qrcode: action.payload.qrcode })
}

export default handleActions(reducers, initState)
