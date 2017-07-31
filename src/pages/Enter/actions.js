import { TOKEN_RECEIVED } from './constants'

export const tokenReceived = token => ({
  type: TOKEN_RECEIVED,
  payload: {
    token
  }
})

// TODO: [Linesh][7/31/17] cleanup, cause eslint prefers default export
export const somethingelse = ''
