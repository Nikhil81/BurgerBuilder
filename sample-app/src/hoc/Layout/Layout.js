import React, { useState } from "react";

import classes from "./Layout.module.css";
import Header from "../../components/common/Header/Header";
import SideDrawer from "../../components/common/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const closeHander = () => {
    setSideDrawer(false);
  };
  const toggleSidebar = () => {
    setSideDrawer((prvState) => !prvState);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <SideDrawer closeHander={closeHander} show={showSideDrawer} />
      <main className={classes.Content}>{children}</main>
    </>
  );
};

export default Layout;
