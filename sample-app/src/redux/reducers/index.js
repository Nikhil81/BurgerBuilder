import { combineReducers } from "redux";
import ingredientsReducers from "./ingredientsReducers";
import OrderReducers from "./orderReducers";

const rootReducers = combineReducers({
  ingredients: ingredientsReducers,
  orders: OrderReducers,
});

export default rootReducers;
