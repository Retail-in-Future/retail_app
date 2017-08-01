import { createStore, combineReducers, applyMiddleware } from 'redux'

import { enter, login } from '../pages'

export default () => {
  const rootReducer = combineReducers({
    [enter.NAME]: enter.reducer,
    [login.NAME]: login.reducer
  })
  const initState = {}
  const middlewares = applyMiddleware()

  return createStore(rootReducer, initState, middlewares)
}
