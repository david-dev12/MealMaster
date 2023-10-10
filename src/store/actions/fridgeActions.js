import { ADD_TO_FRIDGE, SET_FRIDGE } from './types';

export const addToFridge = (ingredient) => ({
  type: ADD_TO_FRIDGE,
  payload: ingredient,
});

export const setFridge = (list) => ({
  type: SET_FRIDGE,
  payload: list,
});
