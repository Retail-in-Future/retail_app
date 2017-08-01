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

  return axios.post('http://10.207.11.201:9000/auth/realms/master/protocol/openid-connect/token', params)
    .then((response) => {
      dispatch(clearErrorMessage())
      dispatch(receiveToken(response.data.access_token))
    })
}
