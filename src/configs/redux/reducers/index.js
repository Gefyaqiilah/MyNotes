import { combineReducers } from 'redux'
import notes from './notes'

const rootReducer = combineReducers({ notes: notes })

export default rootReducer