import React from "react";
import { connect } from "react-redux";

import PropType from "prop-types";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import * as HelperIngrediets from "../../helper/burgerIngredients";

const Burger = ({ ingredients, totalPrice }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Hungry! Make you burger</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={HelperIngrediets.BreadTop} />
      {transformedIngredients}
      <BurgerIngredient type={HelperIngrediets.BreadBottom} />
    </div>
  );
};

Burger.propType = {
  ingredients: PropType.object.isRequired,
};

const mapStateToprops = (state) => {
  return {
    ingredients: state.ingredients.ingredients,
    totalPrice: state.ingredients.totalPrice,
  };
};

export default connect(mapStateToprops)(Burger);
