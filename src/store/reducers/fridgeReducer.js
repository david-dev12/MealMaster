import { ADD_TO_FRIDGE, SET_FRIDGE } from '../actions/types';

const initialState = {
  items: [],
};

const fridgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FRIDGE:
      const prev = state.items.findIndex(value => value.ingredient.idIngredient === action.payload.ingredient.idIngredient);
      if (prev >= 0) {
        const newState = [...state.items];
        newState[prev] = action.payload;
        return {
          ...state,
          items: newState,
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_FRIDGE:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default fridgeReducer;
