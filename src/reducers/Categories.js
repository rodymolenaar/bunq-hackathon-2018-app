import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, ADD_CATEGORIES } from '../actions'
import { uniqBy, reverse } from 'lodash'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [
                ...state,
                action.payload
            ]
        case ADD_CATEGORIES:
            return [
                ...state,
                ...action.payload
            ]
        case UPDATE_CATEGORY:
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

        case DELETE_CATEGORY:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}