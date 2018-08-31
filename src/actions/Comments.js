import { ADD_COMMENT, ADD_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT } from './index'

export const addComments = comments => ({
    type: ADD_COMMENTS,
    payload: comments
})

export const updateComment = comment => ({
    type: UPDATE_COMMENT,
    payload: comment
})

export const deleteComment = comment => ({
    type: DELETE_COMMENT,
    payload: comment
})

export const addComment = comment => ({
    type: ADD_COMMENT,
    payload: comment
})