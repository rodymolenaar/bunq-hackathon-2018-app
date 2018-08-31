import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_POSTS } from '../actions'
import { reverse, uniqBy } from 'lodash'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                action.payload
            ]
        case ADD_POSTS:
            const posts = [
                ...state,
                ...action.payload
            ]

            return reverse(uniqBy(reverse(posts), 'id'))
        case UPDATE_POST:
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

        case DELETE_POST:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}