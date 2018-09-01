import { ADD_CHARITIES, UPDATE_CHARITY } from './index'

export const addCharities = charities => ({
    type: ADD_CHARITIES,
    payload: charities
})

export const updateCharity = charity => ({
    type: UPDATE_CHARITY,
    payload: charity
})