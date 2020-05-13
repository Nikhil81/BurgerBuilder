import axios from "../../axios-order";
import * as actionTypes from "../actions/actionType";

const getAllOrdersSuccess = (ingredients) => {
  return {
    type: actionTypes.GET_ALL_INGREDIETNS_SUCCESS,
    ingredients: ingredients,
  };
};

export const getAllOrders = () => {
  return (dispatch) => {
    axios
      .get("/orders.json")
      .then((response) => {
        if (response.status === 200) {
          let transformetData = [];
          const responseData = response.data;
          for (let item in responseData) {
            transformetData.push({
              ...responseData[item],
              id: item,
            });
          }
          dispatch(getAllOrdersSuccess(transformetData));
        }
      })
      .catch((error) => {});
  };
};
