import {ADD_GOAL, ADD_GOALS, UPDATE_GOAL} from '../actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_GOALS:
            return [
                ...state,
                ...action.payload
            ]
        case ADD_GOAL:
            return [
                ...state,
                ...action.payload
            ]
        case UPDATE_GOAL:
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
        default:
            return state
    }
}