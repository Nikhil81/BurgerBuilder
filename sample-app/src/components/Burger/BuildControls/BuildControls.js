import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = ({
  ingredients,
  addIngredientsHandler,
  removeIngredientsHandler,
  isPurchasable,
  checkOutHandler,
}) => {
  let transformedIngredients = Object.keys(ingredients).map((igkey) => {
    return (
      <BuildControl
        key={igkey}
        label={igkey}
        type={igkey}
        quantity={ingredients[igkey]}
        addIngredientsHandler={addIngredientsHandler}
        removeIngredientsHandler={removeIngredientsHandler}
      />
    );
  });

  return (
    <div className={classes.BuildControls}>
      {isPurchasable && (
        <button className={classes.ButtonCheckout} onClick={checkOutHandler}>
          Order Now
        </button>
      )}
      {transformedIngredients}
    </div>
  );
};

export default buildControls;
