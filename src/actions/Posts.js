import { ADD_POST, ADD_POSTS, DELETE_POST, UPDATE_POST } from './index'

export const addPosts = posts => ({
    type: ADD_POSTS,
    payload: posts
})

export const updatePost = post => ({
    type: UPDATE_POST,
    payload: post
})

export const deletePost = post => ({
    type: DELETE_POST,
    payload: post
})

export const addPost = post => ({
    type: ADD_POST,
    payload: post
})