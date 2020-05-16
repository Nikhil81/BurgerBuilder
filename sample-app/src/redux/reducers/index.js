import { combineReducers } from "redux";
import ingredientsReducers from "./ingredientsReducers";
import OrderReducers from "./orderReducers";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  ingredients: ingredientsReducers,
  orders: OrderReducers,
  auth: authReducer,
});

export default rootReducers;
