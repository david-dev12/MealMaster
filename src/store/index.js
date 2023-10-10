import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ingredientReducer from './reducers/ingredientReducer';
import fridgeReducer from './reducers/fridgeReducer';
import mealReducer from "./reducers/mealReducer";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  fridge: fridgeReducer,
  meals: mealReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;