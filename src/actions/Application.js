import { SET_APP_USER, SET_REFRESH_TOKEN, SET_TOKEN, UPDATE_APP_USER } from './index'

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

export const setRefreshToken = refresh_token => ({
    type: SET_REFRESH_TOKEN,
    refresh_token
})