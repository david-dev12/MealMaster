import { ADD_TO_MEAL, SET_MEAL } from '../actions/types';

const initialState = {
  items: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MEAL:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_MEAL:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default mealReducer;
