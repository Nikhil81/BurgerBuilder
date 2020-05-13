import initialState from "../reducers/initialOrder";
import * as actionTypes from "../actions/actionType";

const orderReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.GET_ALL_INGREDIETNS_SUCCESS:
      return [...state, ...actions.ingredients];
    default:
      return state;
  }
};

export default orderReducers;
