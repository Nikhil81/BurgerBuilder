import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";
import { updateObject } from "../utility";

const updateIngredients = (state, actions) => {
  const updatedIngredient = { ...actions.ingredients };
  const updateIngredients = {
    ingredients: updatedIngredient,
    totalPrice: actions.totalPrice,
  };
  return updateObject(state, updateIngredients);
};

const ingredientsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.LOAD_INGREDIENTS_SUCCESS:
      return updateIngredients(state, actions);
    case actionTypes.ADD_INGREDIENTS_SUCCESS:
      return updateIngredients(state, actions);
    case actionTypes.REMOVE_INGREDIETNS_SUCCESS:
      return updateIngredients(state, actions);
    default:
      return state;
  }
};

export default ingredientsReducer;
