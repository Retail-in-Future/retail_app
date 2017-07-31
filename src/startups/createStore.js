import { createStore, combineReducers } from 'redux'

import { enter, login } from '../pages'

const initState = {}
// const middleWare =

export default () => {
  const rootReducer = combineReducers({
    [enter.NAME]: enter.reducer,
    [login.NAME]: login.reducer
  })

  return createStore(rootReducer, initState)
}
