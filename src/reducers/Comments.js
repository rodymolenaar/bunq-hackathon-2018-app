import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, ADD_COMMENTS } from '../actions'
import { reverse, uniqBy } from 'lodash'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                ...state,
                action.payload
            ]
        case ADD_COMMENTS:
            const comments = [
                ...state,
                ...action.payload
            ]

            return reverse(uniqBy(reverse(comments), 'id'))
        case UPDATE_COMMENT:
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

        case DELETE_COMMENT:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}