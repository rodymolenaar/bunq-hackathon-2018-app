import {UPDATE_APP_USER, SET_API_KEY, SET_APP_USER, SET_TOKEN, SET_REFRESH_TOKEN, SET_NEW_GOAL} from '../actions'

const initialState = {
    token: '',
    apiKey: '',
    newGoal: {
        operator: null,
        amount: null,
        merchant: null,
        period: null
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_APP_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        case SET_APP_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_NEW_GOAL:
            return {
                ...state,
                newGoal: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_API_KEY:
            return {
                ...state,
                apiKey: action.apiKey
            }
        case SET_REFRESH_TOKEN:
            return {
                ...state,
                refresh_token: action.refresh_token
            }
        default:
            return state
    }
}