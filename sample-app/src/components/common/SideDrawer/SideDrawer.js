import React from "react";

import classes from "./SideDrawer.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = ({ closeHander, show = true }) => {
  const sideDrawerClass = [classes.SideDrawer];
  if (show) {
    sideDrawerClass.push(classes.Open);
  } else {
    sideDrawerClass.push(classes.Close);
  }

  return (
    <>
      {show && <Backdrop closeHander={closeHander} />}
      <div className={sideDrawerClass.join(" ")}>
        <ul>
          {["Home", "checkout", "Login", "order"].map((item, index) => {
            return <NavigationItem key={index} text={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default sideDrawer;
