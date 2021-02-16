import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import logger from 'redux-logger'

const store = createStore(reducers, applyMiddleware(logger))

export default store