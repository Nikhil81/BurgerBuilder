import React from "react";

import PropType from "prop-types";
import * as BurgerIngredients from "../../../helper/burgerIngredients";
import classes from "./BurgerIngredient.module.css";

const BurgerIngredient = ({ type }) => {
  let ingredients = null;

  switch (type) {
    case BurgerIngredients.BreadTop:
      ingredients = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case BurgerIngredients.BreadBottom:
      ingredients = <div className={classes.BreadBottom}></div>;
      break;
    case BurgerIngredients.Bacon:
      ingredients = <div className={classes.Bacon}></div>;
      break;
    case BurgerIngredients.Cheese:
      ingredients = <div className={classes.Cheese}></div>;
      break;
    case BurgerIngredients.Meat:
      ingredients = <div className={classes.Meat}></div>;
      break;
    case BurgerIngredients.Salad:
      ingredients = <div className={classes.Salad}></div>;
      break;
    default:
      throw new Error("Unknown ingredients");
  }
  return ingredients;
};

BurgerIngredient.propType = {
  type: PropType.string.isRequired,
};

export default BurgerIngredient;
