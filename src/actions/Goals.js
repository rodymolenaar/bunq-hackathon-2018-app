import {ADD_GOAL, ADD_GOALS, UPDATE_GOAL} from './index'

export const addGoals = goals => ({
    type: ADD_GOALS,
    payload: goals
})

export const addGoal = goal => ({
    type: ADD_GOAL,
    payload: goal
})

export const updateGoal= goal => ({
    type: UPDATE_GOAL,
    payload: goal
})