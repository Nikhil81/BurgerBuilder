import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logout } from "../../../redux/actions";

const Logout = ({ logout, isAuthenticated, history }) => {
  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <>
      <Redirect to="/" />
    </>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Logout);
