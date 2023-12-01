import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer.js'
import { colorReducer } from './colorReducers.js'

export const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer
})
