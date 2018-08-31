import { UPDATE_APP_USER, SET_APP_USER, SET_TOKEN, SET_REFRESH_TOKEN } from '../actions'

const initialState = {
    user: null,
    token: '',
    refresh_token: ''
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
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
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