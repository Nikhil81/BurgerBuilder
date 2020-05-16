import React from "react";
import { connect } from "react-redux";

import classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";

const header = ({ toggleSidebar, isAuthententicated }) => {
  const logInLogout = isAuthententicated ? "Logout" : "Login";
  const orders = isAuthententicated ? "Orders" : "";
  const NavigationData = {
    Home: "/",
    [orders]: "/Orders",
    [logInLogout]: isAuthententicated ? "/Logout" : "/Login",
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

const mapStateToProps = (state) => {
  return {
    isAuthententicated: state.auth.token != null,
  };
};

export default connect(mapStateToProps)(header);
