import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
const checkoutSummary = ({ ingredients, cancelHander, successHandler }) => (
  <div className={classes.CheckoutSummary}>
    <h1>Now that's a delicacy!!</h1>
    <div>
      <Burger ingredients={ingredients} />
    </div>
    <div className={classes.Button}>
      <Button text="Cancel" handler={cancelHander} />
      <Button text="Contiue" handler={successHandler} isPrimary />
    </div>
  </div>
);
export default checkoutSummary;
