import { ADD_CATEGORY, ADD_CATEGORIES, DELETE_CATEGORY, UPDATE_CATEGORY } from './index'

export const addCategories = categories => ({
    type: ADD_CATEGORIES,
    payload: categories
})

export const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    payload: category
})

export const deleteCategory = category => ({
    type: DELETE_CATEGORY,
    payload: category
})

export const addCategory = category => ({
    type: ADD_CATEGORY,
    payload: category
})