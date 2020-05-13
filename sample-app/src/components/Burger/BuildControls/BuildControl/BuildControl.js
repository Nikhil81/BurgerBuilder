import React from "react";

import PropType from "prop-types";
import classes from "./BuildControl.module.css";
import Button from "../../../UI/Button/Button";

const buildControl = ({
  label,
  quantity,
  addIngredientsHandler,
  removeIngredientsHandler,
  type,
}) => {
  return (
    <div className={classes.Control}>
      <span className={classes.Label}>{label}</span>
      {" - "}
      <span className={classes.Label}>{quantity}</span>
      <Button isPrimary handler={() => addIngredientsHandler(type)} text="+" />
      <Button
        isPrimary
        disabled={quantity <= 0}
        handler={() => removeIngredientsHandler(type)}
        text="-"
      />
    </div>
  );
};

buildControl.PropType = {
  label: PropType.string.isRequired,
  quantity: PropType.string.isRequired,
  addIngredientsHandler: PropType.func.isRequired,
  removeIngredientsHandler: PropType.func.isRequired,
  type: PropType.string.isRequired,
};

export default buildControl;
