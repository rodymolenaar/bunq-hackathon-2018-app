import { ADD_MERCHANT, UPDATE_MERCHANT, DELETE_MERCHANT, ADD_MERCHANTS, SET_MERCHANTS } from '../actions'
import { uniqBy, reverse } from 'lodash'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_MERCHANT:
            return [
                ...state,
                action.payload
            ]
        case ADD_MERCHANTS:
            return [
                ...state,
                ...action.payload
            ]
        case SET_MERCHANTS:
            return action.payload
        case UPDATE_MERCHANT:
            return state.map((item, index) => {
                if (item.id !== action.payload.id) {
                    // This isn't the item we care about - keep it as-is
                    return item
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    ...action.payload
                }
            })

        case DELETE_MERCHANT:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}