/* global __DEV__ */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { enter, login } from '../pages'

export default () => {
  const rootReducer = combineReducers({
    [enter.NAME]: enter.reducer,
    [login.NAME]: login.reducer
  })
  const initState = {}
  const middlewares = composeWithDevTools(
    applyMiddleware(
      // remove any middleware when no longer necessary
      createLogger({ predicate: () => __DEV__ })
    )
  )

  return createStore(rootReducer, initState, middlewares)
}
