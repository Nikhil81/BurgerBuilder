import React from "react";

import classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";

const header = ({ toggleSidebar }) => {
  const NavigationData = {
    Home: "/",
    Order: "/Orders",
    Login: "/Login",
  };
  return (
    <div className={classes.Header}>
      <nav>
        <div className={classes.Toggle} onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Logo />
        <ul>
          {Object.keys(NavigationData).map((item, index) => {
            return (
              <NavigationItem
                navigationItem
                key={index}
                text={item}
                toPath={NavigationData[item]}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default header;
