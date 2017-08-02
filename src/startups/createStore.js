import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

export default () => {
  const initState = {}
  const middlewares = composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )

  return createStore(reducers, initState, middlewares)
}
