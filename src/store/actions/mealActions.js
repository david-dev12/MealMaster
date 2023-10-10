import { ADD_TO_MEAL, SET_MEAL } from './types';

export const addToMeal = (meal) => ({
  type: ADD_TO_MEAL,
  payload: meal,
});

export const setMeal = (meals) => ({
  type: SET_MEAL,
  payload: meals,
});
