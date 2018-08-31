import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, UPDATE_PROJECTS } from './index'

export const updateProjects = projects => ({
    type: UPDATE_PROJECTS,
    payload: projects
})

export const updateProject = project => ({
    type: UPDATE_PROJECT,
    payload: project
})

export const deleteProject = project => ({
    type: DELETE_PROJECT,
    payload: project
})

export const addProject = project => ({
    type: ADD_PROJECT,
    payload: project
})