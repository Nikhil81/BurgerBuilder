import React from "react";

import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";

const orderSummary = ({
  ingredients,
  closeHander,
  totalPrice,
  checkOutHandler,
  showLoader,
}) => {
  let orders = Object.keys(ingredients).map((igKey) => {
    return (
      <p key={igKey}>
        <span className={classes.TextContent}>{igKey}</span>-
        <span className={classes.TextContent}>{ingredients[igKey]}</span>
      </p>
    );
  });

  let content = (
    <div className={classes.OrderSummary}>
      <h3>Order Summary</h3>
      {orders}

      <div>
        <div className={classes.TotalPrice}>
          Total price : ${totalPrice.toFixed(2)}
        </div>
        <span>Grab it :</span>
        <Button isPrimary text="Yes" handler={checkOutHandler} />
        <Button handler={closeHander} text="No" />
      </div>
    </div>
  );

  if (showLoader) {
    return <Spinner />;
  }
  return content;
};

export default orderSummary;
