import {SET_API_KEY, SET_APP_USER, SET_NEW_GOAL, SET_REFRESH_TOKEN, SET_TOKEN, UPDATE_APP_USER} from './index'

export const setAppUser = user => ({
    type: SET_APP_USER,
    payload: user
})

export const updateAppUser = user => ({
    type: UPDATE_APP_USER,
    payload: user
})

export const setToken = token => ({
    type: SET_TOKEN,
    token
})

export const setApiKey = apiKey => ({
    type: SET_API_KEY,
    apiKey
})

export const setNewGoal = goal => ({
    type: SET_NEW_GOAL,
    payload: goal
})

export const setRefreshToken = refresh_token => ({
    type: SET_REFRESH_TOKEN,
    refresh_token
})