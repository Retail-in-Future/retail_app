import { combineReducers } from 'redux'

import login from './login'
import enter from './enter'

export default combineReducers({
  [login.reducerPrefix]: login.reducers,
  [enter.reducerPrefix]: enter.reducers
})
