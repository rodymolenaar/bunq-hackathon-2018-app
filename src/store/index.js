import { compose, combineReducers, createStore, applyMiddleware } from 'redux'
import application from '../reducers/Application'
import projects from '../reducers/Projects'
import posts from '../reducers/Posts'
import categories from '../reducers/Categories'
import comments from '../reducers/Comments'

const middleware = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({
    application,
    projects,
    posts,
    categories,
    comments,
}), composeEnhancers(applyMiddleware(...middleware)))

export default store