import { SET_INGREDIENTS } from '../actions/types';

const initialState = {
  list: [],
  isLoading: true,
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default ingredientReducer;
