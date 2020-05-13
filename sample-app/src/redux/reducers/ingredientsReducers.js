import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

const ingredientsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.LOAD_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: { ...actions.ingredients },
        totalPrice: 2,
      };
    case actionTypes.ADD_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: { ...actions.ingredients },
        totalPrice: actions.totalPrice,
      };
    case actionTypes.REMOVE_INGREDIETNS_SUCCESS:
      return {
        ...state,
        ingredients: { ...actions.ingredients },
        totalPrice: actions.totalPrice,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
