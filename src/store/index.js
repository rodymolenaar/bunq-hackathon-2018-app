import { compose, combineReducers, createStore, applyMiddleware } from 'redux'
import application from '../reducers/Application'
import categories from '../reducers/Categories'
import charities from '../reducers/Charities'

const middleware = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({
    application,
    categories,
    charities,
}), composeEnhancers(applyMiddleware(...middleware)))

export default store