import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store