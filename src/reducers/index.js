import { combineReducers } from 'redux'
import pokemon from './pokemon'
import loading from './loading'
import filter from './filter'
import paginator from './paginator'

export const rootReducer = combineReducers({
  pokemon,
  loading,
  filter,
  paginator
})
