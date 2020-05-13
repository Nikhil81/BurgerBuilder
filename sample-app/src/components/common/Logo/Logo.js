import React from "react";

import Logo from "../../../assets/images/burger-logo.png";

const logo = (props) => (
  <img
    src={Logo}
    style={{
      height: "50px",
      marginLeft: "11px",
    }}
    alt="logo"
  />
);

export default logo;
