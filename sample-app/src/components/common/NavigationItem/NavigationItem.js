import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const navigationItem = ({ toPath, text, navigationItem }) => (
  <NavLink
    to={{ pathname: toPath }}
    className={navigationItem ? classes.NavigationItem : classes.SideDrawer}
  >
    {text}
  </NavLink>
);

export default navigationItem;
