import axios from 'axios'
import qs from 'querystring'

import { UPDATE_USERNAME, RECEIVE_TOKEN, UPDATE_ERROR_MESSAGE } from './actionTypes'
import { generateEnterQRCode } from './enter'

export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  payload: {
    username
  }
})

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
      dispatch(generateEnterQRCode())
    })
    .catch((error) => {
      const errorMessage = error.response && error.response.status === 401 ?
        error.response.data.error_description : 'No response from authentication server. Maybe try again later.'

      dispatch(updateErrorMessage(errorMessage))
    })
}
