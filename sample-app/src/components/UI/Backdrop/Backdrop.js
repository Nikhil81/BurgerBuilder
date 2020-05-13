import React from "react";

import classes from "./Backdrop.module.css";

const backDrop = ({ closeHander }) => (
  <div onClick={closeHander} className={classes.Backdrop}></div>
);

export default backDrop;
