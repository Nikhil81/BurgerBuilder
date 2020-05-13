import axios from "../../axios-order";
import * as actionTypes from "./actionType";

const loadIngredientsSuccess = (responseDate) => {
  return {
    type: actionTypes.LOAD_INGREDIENTS_SUCCESS,
    ingredients: responseDate,
  };
};

export const loadIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        if (response.status === 200) {
          dispatch(loadIngredientsSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log("error");
        // toast.error("Error Fetching data");
      });
  };
};

export const addIngredients = (ingredients, totalPrice) => {
  return {
    type: actionTypes.ADD_INGREDIENTS_SUCCESS,
    ingredients,
    totalPrice,
  };
};

export const removeIngredietns = (ingredients, totalPrice) => {
  return {
    type: actionTypes.REMOVE_INGREDIETNS_SUCCESS,
    ingredients,
    totalPrice,
  };
};

export const saveIngredients = (orders) => {
  return (dispatch) => {
    axios
      .post("/orders.json", orders)
      .then((response) => {
        if (response.status === 200) {
          // toast.success("Order placed successfuly");
          //setIsLoading(false);
          //history.push("/");
          dispatch();
        } else {
          // setIsLoading(false);
          // toast.error("Order failed");
        }
      })
      .catch((error) => {
        // setIsLoading(false);
        // toast.error("Problem placing order");
      });
  };
};
