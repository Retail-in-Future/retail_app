import { createStore, combineReducers } from 'redux'

import { enter } from '../pages'

const initState = {}
// const middleWare =

export default () => {
  const rootReducer = combineReducers({
    [enter.NAME]: enter.reducer
  })

  return createStore(rootReducer, initState)
}
