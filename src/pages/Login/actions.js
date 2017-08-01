import axios from 'axios'
import qs from 'querystring'

import { USERNAME_UPDATED, RECEIVE_TOKEN, UPDATE_ERROR_MESSAGE } from './constants'

export const updateErrorMessage = errorMessage => ({
  type: UPDATE_ERROR_MESSAGE,
  payload: {
    errorMessage
  }
})

export const clearErrorMessage = () => updateErrorMessage('')

export const receiveToken = token => ({
  type: RECEIVE_TOKEN,
  payload: {
    token
  }
})

export const usernameUpdated = username => ({
  // TODO: [Linesh][8/1/17] rename actions to verb-noun
  type: USERNAME_UPDATED,
  payload: {
    username
  }
})

export const login = (username, password) => (dispatch) => {
  const params = qs.stringify({
    username,
    password,
    grant_type: 'password',
    client_id: 'retail'
  })

  // dispatch(receiveToken('234asdfasdf'))
  dispatch(updateErrorMessage('something is wrong'))
  return axios.post('http://54.255.182.198:9000/auth/realms/master/protocol/openid-connect/token', params)
    .then((response) => {
      dispatch(receiveToken(response.data.access_token))
      dispatch(clearErrorMessage())
    })
    .catch(() => dispatch(updateErrorMessage('Incorrect username/password combination. Please try again.')))
}
