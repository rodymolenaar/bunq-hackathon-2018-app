import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECTS } from '../actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_PROJECT:
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

        case DELETE_PROJECT:
            return state.filter(item => item.id !== action.payload.id)
        case UPDATE_PROJECTS:
            return action.payload
        default:
            return state
    }
}