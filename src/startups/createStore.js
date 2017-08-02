/* global __DEV__ */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

export default () => {
  const initState = {}
  const middlewares = composeWithDevTools(
    applyMiddleware(
      // remove any middleware when no longer necessary
      thunkMiddleware,
      loggerMiddleware
    )
  )

  return createStore(reducers, initState, middlewares)
}
