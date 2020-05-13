import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let inputType = null;
  switch (props.elementType) {
    case "input":
      inputType = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    default:
      inputType = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.change}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
  }
  return inputType;
};

export default Input;
