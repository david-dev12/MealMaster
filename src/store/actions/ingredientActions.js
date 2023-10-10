import { SET_INGREDIENTS } from './types';

export const setIngredients = (ingredients) => ({
  type: SET_INGREDIENTS,
  payload: ingredients,
});
