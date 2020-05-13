import React from "react";

import classes from "./Modal.module.css";
import BackDrop from "../Backdrop/Backdrop";
const modal = ({ children, closeHander }) => {
  return (
    <>
      <BackDrop closeHander={closeHander} />
      <div className={classes.Modal}>{children}</div>
    </>
  );
};

export default modal;
