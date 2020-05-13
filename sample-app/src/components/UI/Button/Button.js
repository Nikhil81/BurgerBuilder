import React from "react";

import classes from "./Button.module.css";

const button = ({ text, handler, isPrimary, disabled }) => (
  <button
    type="button"
    disabled={disabled}
    className={isPrimary ? classes.Button : classes.ButtonCancel}
    onClick={handler}
  >
    {text}
  </button>
);

export default button;
